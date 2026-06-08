import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sendChatMessage } from '../services/aiService.js';
import { useLanguage, PLANT_TRANSLATIONS } from '../contexts/LanguageContext.jsx';
import { PLANTS } from '../data/plants.js';

// ── Plant name → route ID lookup (English + Arabic) ──────────────────────
const PLANT_LINK_MAP = {};
Object.values(PLANTS).forEach(p => {
  PLANT_LINK_MAP[p.id] = p.id;                          // ID always resolves to itself
  PLANT_LINK_MAP[p.name.toLowerCase()] = p.id;
  const first = p.name.split(' ')[0].toLowerCase();
  if (!PLANT_LINK_MAP[first]) PLANT_LINK_MAP[first] = p.id;
});
if (PLANT_TRANSLATIONS?.ar) {
  Object.entries(PLANT_TRANSLATIONS.ar).forEach(([id, data]) => {
    if (data.name) {
      PLANT_LINK_MAP[data.name] = id;
      const firstWord = data.name.split(' ')[0];
      if (!PLANT_LINK_MAP[firstWord]) PLANT_LINK_MAP[firstWord] = id;
    }
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────
const containsArabic = (text) => /[؀-ۿ]/.test(text ?? '');

const extractName = (text) => {
  const patterns = [
    /(?:my name is|i am|i'm|call me)\s+([A-Za-z]{2,})/i,
    /(?:اسمي|أنا|انا)\s+(\S{2,})/,
  ];
  const stopWords = new Set(['a','an','the','not','just','also','here','there','going','trying','feeling','at','in','on','to','by','for','from','with','up','out','about','working','feeling','stressed','tired','sick']);
  for (const p of patterns) {
    const m = text.match(p);
    if (m?.[1] && !stopWords.has(m[1].toLowerCase())) return m[1];
  }
  return null;
};

function findPlantId(name = '') {
  return PLANT_LINK_MAP[name.toLowerCase()] ?? PLANT_LINK_MAP[name] ?? null;
}

// ── Inline markdown parser → React nodes ────────────────────────────────
function renderInline(text) {
  const parts = [];
  // Match **Name**[plant-id] (with optional [id] suffix) or *italic*
  const regex = /\*\*(.*?)\*\*(?:\[([^\]]+)\])?|\*(.*?)\*/g;
  let last = 0, match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(<span key={last}>{text.slice(last, match.index)}</span>);
    if (match[1] !== undefined) {
      // Prefer explicit [plant-id] from AI output; fall back to name lookup
      const id = (match[2] && PLANT_LINK_MAP[match[2]]) ? match[2] : findPlantId(match[1]);
      if (id) {
        parts.push(
          <Link key={match.index} to={`/plant/${id}`}
            className="inline-flex items-center gap-0.5 font-semibold text-primary hover:underline underline-offset-2">
            <span className="material-symbols-outlined text-sm leading-none">eco</span>
            {match[1]}
          </Link>
        );
      } else {
        parts.push(<strong key={match.index} className="font-semibold text-on-surface">{match[1]}</strong>);
      }
    } else {
      parts.push(<em key={match.index} className="italic text-on-surface-variant text-xs">{match[3]}</em>);
    }
    last = regex.lastIndex;
  }
  if (last < text.length) parts.push(<span key={last}>{text.slice(last)}</span>);
  return parts;
}

// ── Section heading icon picker ──────────────────────────────────────────
function getHeadingIcon(text) {
  const l = text.toLowerCase();
  if (l.includes('recommend') || l.includes('plant') || l.includes('نبات') || l.includes('توصية') || l.includes('مقترح')) return 'eco';
  if (l.includes('work') || l.includes('why') || l.includes('mechanism') || l.includes('يعمل') || l.includes('آلية') || l.includes('سبب')) return 'science';
  if (l.includes('use') || l.includes('how') || l.includes('استخدام') || l.includes('طريقة')) return 'local_pharmacy';
  if (l.includes('dosage') || l.includes('dose') || l.includes('جرعة') || l.includes('المقدار')) return 'medication';
  if (l.includes('warn') || l.includes('caution') || l.includes('important') || l.includes('تحذير') || l.includes('احتياط') || l.includes('هام')) return 'warning';
  if (l.includes('contra') || l.includes('avoid') || l.includes('موانع') || l.includes('تجنب')) return 'block';
  return 'info';
}

// ── Line classifier ──────────────────────────────────────────────────────
function classifyLine(line) {
  const t = line.trim();
  if (!t) return null;

  if (t.startsWith('⚠️')) return { type: 'warning', text: t.replace('⚠️', '').trim() };

  const heading = t.match(/^#{1,3}\s+(.*)/);
  if (heading) return { type: 'heading', text: heading[1].trim() };

  // Plant entry: **Name**[plant-id] (*Latin*): description  OR  **Name**: description
  const plant = t.match(/^\*\*([^*]+)\*\*(?:\[([^\]]+)\])?\s*(?:\(?\*([^*]*)\*\)?)?\s*[:：]\s*(.*)/);
  if (plant) {
    const rawId = plant[2]?.trim() ?? null;
    const desc = plant[4]?.trim() ?? '';
    return {
      type: 'plant',
      name: plant[1].trim(),
      latin: plant[3]?.trim() ?? null,
      desc,
      id: (rawId && PLANT_LINK_MAP[rawId]) ? rawId : findPlantId(plant[1].trim()),
    };
  }

  // Bold-only line = section heading (skip [id] suffix before colon check)
  const boldOnly = t.match(/^\*\*([^*]+)\*\*(?:\[[^\]]+\])?\s*:?\s*$/);
  if (boldOnly) return { type: 'heading', text: boldOnly[1].trim() };

  // Numbered list
  const numbered = t.match(/^(\d+)\.\s+(.*)/);
  if (numbered) return { type: 'numbered', index: parseInt(numbered[1]), text: numbered[2] };

  // Bullet point
  const bullet = t.match(/^(?:[•\-\*🌿])\s+(.*)/);
  if (bullet) return { type: 'bullet', text: bullet[1] };

  return { type: 'text', text: t };
}

// ── Rendered line components ─────────────────────────────────────────────
function HeadingLine({ text }) {
  const icon = getHeadingIcon(text);
  return (
    <div className="flex items-center gap-2 mt-4 mb-1.5 border-b border-outline-variant/40 pb-1.5">
      <span className="material-symbols-outlined text-base text-secondary flex-shrink-0">{icon}</span>
      <p className="flex-1 font-caslon text-base text-primary font-semibold">{text}</p>
    </div>
  );
}

function WarningLine({ text }) {
  return (
    <div className="flex items-start gap-2 bg-tertiary-fixed/30 border border-tertiary/20 rounded-lg px-3 py-2 mt-2">
      <span className="material-symbols-outlined text-sm text-tertiary flex-shrink-0 mt-0.5">warning</span>
      <p className="flex-1 font-manrope text-xs text-on-surface-variant leading-relaxed">{text}</p>
    </div>
  );
}

function BulletLine({ text }) {
  const isWarning = /\b(avoid|caution|warning|do not|don't|تجنب|تحذير|لا تستخدم)\b/i.test(text);
  return (
    <div className="flex items-start gap-2 py-0.5">
      <span className={`material-symbols-outlined text-sm flex-shrink-0 mt-0.5 ${isWarning ? 'text-tertiary' : 'text-secondary'}`}>
        {isWarning ? 'error_outline' : 'fiber_manual_record'}
      </span>
      <p className="flex-1 font-manrope text-sm text-on-surface leading-relaxed">{renderInline(text)}</p>
    </div>
  );
}

function NumberedLine({ index, text }) {
  return (
    <div className="flex items-start gap-2.5 py-0.5">
      <span className="w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 font-manrope">
        {index}
      </span>
      <p className="flex-1 font-manrope text-sm text-on-surface leading-relaxed">{renderInline(text)}</p>
    </div>
  );
}

function PlantEntryLine({ name, latin, desc, id, isAr }) {
  const nameNode = id ? (
    <Link to={`/plant/${id}`}
      className="font-caslon text-base text-primary hover:text-secondary transition-colors hover:underline underline-offset-2 flex items-center gap-1">
      <span className="material-symbols-outlined text-sm">eco</span>
      {name}
    </Link>
  ) : (
    <span className="font-caslon text-base text-primary flex items-center gap-1">
      <span className="material-symbols-outlined text-sm">eco</span>
      {name}
    </span>
  );

  return (
    <div className="bg-gradient-to-br from-primary-fixed/30 to-surface-container-low border border-outline-variant/50 rounded-xl p-3 space-y-1 my-1">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        {nameNode}
        {latin && <span className="font-manrope text-xs italic text-on-surface-variant">{latin}</span>}
      </div>
      {desc && <p className="font-manrope text-xs text-on-surface-variant leading-relaxed">{renderInline(desc)}</p>}
      {id && (
        <Link to={`/plant/${id}`}
          className="inline-flex items-center gap-1 font-manrope text-xs font-semibold text-primary hover:gap-2 transition-all duration-150 mt-1">
          {isAr ? 'عرض الملف الكامل' : 'View full profile'}
          <span className="material-symbols-outlined text-sm" style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>arrow_forward</span>
        </Link>
      )}
    </div>
  );
}

// ── Formatted message body ───────────────────────────────────────────────
function FormattedMessage({ content, isAr }) {
  const lines = content.split('\n');
  const parsed = lines.map(classifyLine).filter(Boolean);
  const rtl = isAr || containsArabic(content);

  return (
    <div className="space-y-1 text-sm" dir={rtl ? 'rtl' : 'ltr'}>
      {parsed.map((item, i) => {
        if (item.type === 'heading')  return <HeadingLine key={i} text={item.text} />;
        if (item.type === 'warning')  return <WarningLine key={i} text={item.text} />;
        if (item.type === 'bullet')   return <BulletLine key={i} text={item.text} />;
        if (item.type === 'numbered') return <NumberedLine key={i} index={item.index} text={item.text} />;
        if (item.type === 'plant')    return <PlantEntryLine key={i} {...item} isAr={isAr} />;
        return (
          <p key={i} className="font-manrope text-sm text-on-surface leading-relaxed">
            {renderInline(item.text)}
          </p>
        );
      })}
    </div>
  );
}

// ── Typing indicator (dots) ───────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex gap-1 items-center py-1 px-1">
      <span className="w-2 h-2 rounded-full bg-secondary typing-dot" />
      <span className="w-2 h-2 rounded-full bg-secondary typing-dot" />
      <span className="w-2 h-2 rounded-full bg-secondary typing-dot" />
    </div>
  );
}

// ── Single message bubble ────────────────────────────────────────────────
function MessageBubble({ msg, loading, isAr }) {
  const isUser = msg.role === 'user';
  // Direction follows app language setting; only override if user personally types Arabic in English mode
  const msgIsRtl = isAr || (isUser && containsArabic(msg.content));
  const isEmpty = msg.content === '';

  return (
    <div dir="ltr" className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center mx-2 flex-shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-on-primary-container text-sm">eco</span>
        </div>
      )}
      <div
        className={`max-w-[82%] px-4 py-3 rounded-2xl leading-relaxed ${
          isUser
            ? 'bg-primary text-on-primary rounded-tr-sm font-manrope text-sm'
            : 'bg-surface-container text-on-surface rounded-tl-sm'
        }`}
        dir={msgIsRtl ? 'rtl' : 'ltr'}
      >
        {isUser
          ? <p className={`font-manrope text-sm ${msgIsRtl ? 'text-right' : 'text-left'}`}>{msg.content}</p>
          : isEmpty && loading
            ? <TypingDots />
            : <FormattedMessage content={msg.content} isAr={isAr} />
        }
      </div>
    </div>
  );
}

// ── Main chat widget ─────────────────────────────────────────────────────
const MAX_CHARS    = 500;
const RATE_LIMIT   = 10;   // max messages
const RATE_WINDOW  = 60;   // seconds

export default function AIChat() {
  const { t, isAr } = useLanguage();
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState(null);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [userName, setUserName] = useState(null);
  const [inputError, setInputError] = useState('');
  const bottomRef       = useRef(null);
  const inputRef        = useRef(null);
  const msgTimestamps   = useRef([]);   // timestamps of sent messages (client-side rate limiter)

  useEffect(() => {
    if (open && !messages) {
      setMessages([{ id: 'welcome', role: 'assistant', content: t('chat_welcome') }]);
    }
  }, [open, messages, t]);

  useEffect(() => { setMessages(null); }, [isAr]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  // Auto-resize textarea as user types
  useEffect(() => {
    const ta = inputRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 160) + 'px';
  }, [input]);

  const validateInput = (text) => {
    if (text.length > MAX_CHARS)
      return isAr ? `الرسالة طويلة جداً (الحد الأقصى ${MAX_CHARS} حرفاً).` : `Message too long (max ${MAX_CHARS} characters).`;
    if (text.length > 0 && text.length < 2)
      return isAr ? 'الرسالة قصيرة جداً.' : 'Message too short.';
    if (/^(.)\1{9,}$/.test(text))
      return isAr ? 'يرجى إدخال رسالة صحيحة.' : 'Please enter a valid message.';
    return '';
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInput(val);
    setInputError(validateInput(val.trim()));
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    // Network check
    if (!navigator.onLine) {
      setInputError(isAr ? 'لا يوجد اتصال بالإنترنت. تحقق من الاتصال وأعد المحاولة.' : 'No internet connection. Check your connection and try again.');
      return;
    }

    // Client-side rate limit: max 10 messages per 60 seconds
    const now = Date.now();
    msgTimestamps.current = msgTimestamps.current.filter(t => t > now - RATE_WINDOW * 1000);
    if (msgTimestamps.current.length >= RATE_LIMIT) {
      const waitSecs = Math.ceil((msgTimestamps.current[0] + RATE_WINDOW * 1000 - now) / 1000);
      setInputError(isAr
        ? `⏱ وصلت إلى الحد المسموح (${RATE_LIMIT} رسائل في الدقيقة). انتظر ${waitSecs} ثانية.`
        : `⏱ Rate limit reached (${RATE_LIMIT} messages/min). Please wait ${waitSecs}s.`);
      return;
    }
    msgTimestamps.current.push(now);

    const validErr = validateInput(text);
    if (validErr) { setInputError(validErr); return; }
    setInputError('');

    const detected = extractName(text);
    if (detected) setUserName(detected);

    const userMsg   = { id: Date.now(),     role: 'user',      content: text };
    const streamId  = Date.now() + 1;
    const currentHistory = messages ?? [];

    setMessages(prev => [...(prev ?? []), userMsg, { id: streamId, role: 'assistant', content: '' }]);
    setInput('');
    setLoading(true);

    try {
      const result = await sendChatMessage(currentHistory, text, (chunk) => {
        setMessages(prev => prev.map(m => m.id === streamId ? { ...m, content: chunk } : m));
      });
      // If streaming never populated the content (non-streaming fallback path), use the return value
      if (result) {
        setMessages(prev => prev.map(m =>
          m.id === streamId && !m.content.trim() ? { ...m, content: result } : m
        ));
      }
    } catch (err) {
      const isRateLimit = err?.message === 'RATE_LIMIT';
      const errMsg = isAr
        ? (isRateLimit
            ? '⚠️ تم الوصول إلى حد الطلبات من الخادم. انتظر لحظة ثم أعد المحاولة.'
            : '⚠️ تعذّر الاتصال بالخادم. يرجى التحقق من اتصالك والمحاولة مرة أخرى.')
        : (isRateLimit
            ? '⚠️ Server rate limit reached. Please wait a moment and try again.'
            : '⚠️ Unable to connect to the server. Check your connection and try again.');
      setMessages(prev => prev.map(m =>
        m.id === streamId ? { ...m, content: errMsg } : m
      ));
    } finally {
      // Last-resort fallback for any truly silent/empty response
      setMessages(prev => prev.map(m => {
        if (m.id === streamId && !m.content.trim()) {
          return { ...m, content: isAr
            ? '⚠️ لم يتم استلام رد. يرجى إعادة المحاولة.'
            : '⚠️ No response received. Please try again.' };
        }
        return m;
      }));
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const suggestions = [
    t('chat_suggest_1'), t('chat_suggest_2'),
    t('chat_suggest_3'), t('chat_suggest_4'),
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 end-6 z-50 w-14 h-14 rounded-full bg-primary text-on-primary shadow-botanical-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 chat-pulse"
        aria-label={t('chat_title')}
      >
        <span className="material-symbols-outlined">eco</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:pe-6 sm:pb-6">
          <div className="absolute inset-0 sm:hidden bg-primary/10 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div
            className="relative w-full sm:w-[420px] h-[620px] sm:h-[600px] bg-surface rounded-t-3xl sm:rounded-2xl shadow-botanical-lg flex flex-col overflow-hidden border border-outline-variant/50"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="bg-primary-container px-5 py-4 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-on-primary-container">eco</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-caslon text-on-primary-container text-base font-semibold">{t('chat_title')}</p>
                <p className="font-manrope text-on-primary-container/70 text-xs">
                  {userName ? `${t('chat_powered')} · ${userName}` : t('chat_powered')}
                </p>
              </div>
              <button
                onClick={() => { setMessages(null); setUserName(null); msgTimestamps.current = []; }}
                className="text-on-primary-container/70 hover:text-on-primary-container transition-colors p-1 rounded-full hover:bg-white/10 flex-shrink-0"
                title="Clear conversation"
              >
                <span className="material-symbols-outlined text-xl">refresh</span>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-on-primary-container/70 hover:text-on-primary-container transition-colors p-1 rounded-full hover:bg-white/10 flex-shrink-0"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {(messages ?? []).map(msg => (
                <MessageBubble key={msg.id} msg={msg} loading={loading} isAr={isAr} />
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {(messages ?? []).length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {suggestions.map(s => (
                  <button
                    key={s}
                    onClick={() => setInput(s)}
                    className="text-xs font-manrope bg-secondary-fixed text-on-secondary-fixed px-3 py-1.5 rounded-full hover:bg-primary-fixed transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 pb-4 pt-2 border-t border-outline-variant/50 flex-shrink-0">
              {/* Validation error */}
              {inputError && (
                <div className="flex items-center gap-1.5 mb-2 px-1">
                  <span className="material-symbols-outlined text-sm text-red-500 flex-shrink-0">error</span>
                  <p className="font-manrope text-xs text-red-500 leading-snug">{inputError}</p>
                </div>
              )}
              <div className={`flex gap-2 items-end rounded-xl p-2 transition-colors ${inputError ? 'bg-red-50 ring-1 ring-red-300' : 'bg-surface-container'}`}>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={t('chat_placeholder')}
                  rows={1}
                  dir={isAr || containsArabic(input) ? 'rtl' : 'ltr'}
                  className="flex-1 bg-transparent resize-none outline-none font-manrope text-sm text-on-surface placeholder:text-outline px-2 py-1 overflow-hidden"
                  style={{ lineHeight: '1.5', maxHeight: '160px' }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading || !!inputError}
                  className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80 transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg"
                    style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>send</span>
                </button>
              </div>
              {/* Character counter (visible near limit) */}
              {input.length > 400 && (
                <p className={`font-manrope text-xs mt-1 ${isAr ? 'text-left' : 'text-right'} ${input.length > 480 ? 'text-red-500' : 'text-outline'}`}>
                  {input.length}/{MAX_CHARS}
                </p>
              )}
              <p className="text-center font-manrope text-outline text-xs mt-2">
                {t('chat_disclaimer')}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
