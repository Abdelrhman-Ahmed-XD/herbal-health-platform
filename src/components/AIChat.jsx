import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sendChatMessage } from '../services/aiService.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { PLANTS } from '../data/plants.js';

// ── Plant name → route ID lookup ─────────────────────────────────────────
const PLANT_LINK_MAP = {};
Object.values(PLANTS).forEach(p => {
  PLANT_LINK_MAP[p.name.toLowerCase()] = p.id;
  // First word alone (e.g. "Astragalus" from "Astragalus mongholicus")
  const first = p.name.split(' ')[0].toLowerCase();
  if (!PLANT_LINK_MAP[first]) PLANT_LINK_MAP[first] = p.id;
});

function findPlantId(name = '') {
  return PLANT_LINK_MAP[name.toLowerCase()] ?? null;
}

// ── Inline markdown parser → React nodes ────────────────────────────────
function renderInline(text) {
  const parts = [];
  const regex = /\*\*(.*?)\*\*|\*(.*?)\*/g;
  let last = 0, match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(<span key={last}>{text.slice(last, match.index)}</span>);
    if (match[1] !== undefined) {
      const id = findPlantId(match[1]);
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
      parts.push(<em key={match.index} className="italic text-on-surface-variant text-xs">{match[2]}</em>);
    }
    last = regex.lastIndex;
  }
  if (last < text.length) parts.push(<span key={last}>{text.slice(last)}</span>);
  return parts;
}

// ── Line classifier ──────────────────────────────────────────────────────
function classifyLine(line) {
  const t = line.trim();
  if (!t) return null;

  // Warning / disclaimer
  if (t.startsWith('⚠️')) return { type: 'warning', text: t.replace('⚠️', '').trim() };

  // Bullet point: •, -, *, 🌿
  const bullet = t.match(/^(?:[•\-\*🌿])\s+(.*)/);
  if (bullet) return { type: 'bullet', text: bullet[1] };

  // Numbered list
  const numbered = t.match(/^\d+\.\s+(.*)/);
  if (numbered) return { type: 'bullet', text: numbered[1] };

  // Plant entry: **Name** (*Latin*): description  OR  **Name**: description
  const plant = t.match(/^\*\*([^*]+)\*\*\s*(?:\(?\*([^*]*)\*\)?)?\s*[:：]\s*(.*)/);
  if (plant) {
    return {
      type: 'plant',
      name: plant[1].trim(),
      latin: plant[2]?.trim() ?? null,
      desc: plant[3]?.trim() ?? '',
      id: findPlantId(plant[1].trim()),
    };
  }

  return { type: 'text', text: t };
}

// ── Rendered line components ─────────────────────────────────────────────
function WarningLine({ text }) {
  return (
    <div className="flex items-start gap-2 bg-tertiary-fixed/30 border border-tertiary/20 rounded-lg px-3 py-2 mt-2">
      <span className="material-symbols-outlined text-sm text-tertiary flex-shrink-0 mt-0.5">warning</span>
      <p className="font-manrope text-xs text-on-surface-variant leading-relaxed">{text}</p>
    </div>
  );
}

function BulletLine({ text }) {
  return (
    <div className="flex items-start gap-2">
      <span className="material-symbols-outlined text-xs text-secondary flex-shrink-0 mt-1">fiber_manual_record</span>
      <p className="font-manrope text-sm text-on-surface leading-relaxed">{renderInline(text)}</p>
    </div>
  );
}

function PlantEntryLine({ name, latin, desc, id }) {
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
    <div className="bg-surface-container-low border border-outline-variant/50 rounded-xl p-3 space-y-1">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        {nameNode}
        {latin && <span className="font-manrope text-xs italic text-on-surface-variant">{latin}</span>}
      </div>
      {desc && <p className="font-manrope text-xs text-on-surface-variant leading-relaxed">{renderInline(desc)}</p>}
      {id && (
        <Link to={`/plant/${id}`}
          className="inline-flex items-center gap-1 font-manrope text-xs font-semibold text-primary hover:gap-2 transition-all duration-150 mt-1">
          View full profile
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      )}
    </div>
  );
}

// ── Formatted message body ───────────────────────────────────────────────
function FormattedMessage({ content }) {
  const lines = content.split('\n');
  const parsed = lines.map(classifyLine).filter(Boolean);

  return (
    <div className="space-y-2 text-sm">
      {parsed.map((item, i) => {
        if (item.type === 'warning')  return <WarningLine key={i} text={item.text} />;
        if (item.type === 'bullet')   return <BulletLine key={i} text={item.text} />;
        if (item.type === 'plant')    return <PlantEntryLine key={i} {...item} />;
        return (
          <p key={i} className="font-manrope text-sm text-on-surface leading-relaxed">
            {renderInline(item.text)}
          </p>
        );
      })}
    </div>
  );
}

// ── Single message bubble ────────────────────────────────────────────────
function MessageBubble({ msg, isAr }) {
  const isUser = msg.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
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
        dir={isAr ? 'rtl' : 'ltr'}
      >
        {isUser
          ? <p className="font-manrope text-sm">{msg.content}</p>
          : <FormattedMessage content={msg.content} />
        }
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center px-4 py-3 bg-surface-container rounded-xl w-fit">
      <span className="w-2 h-2 rounded-full bg-secondary typing-dot" />
      <span className="w-2 h-2 rounded-full bg-secondary typing-dot" />
      <span className="w-2 h-2 rounded-full bg-secondary typing-dot" />
    </div>
  );
}

// ── Main chat widget ─────────────────────────────────────────────────────
export default function AIChat() {
  const { t, isAr } = useLanguage();
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState(null);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

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

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg = { id: Date.now(), role: 'user', content: text };
    setMessages(prev => [...(prev ?? []), userMsg]);
    setInput('');
    setLoading(true);
    try {
      const response = await sendChatMessage(messages ?? [], text);
      setMessages(prev => [...(prev ?? []), { id: Date.now() + 1, role: 'assistant', content: response }]);
    } catch {
      setMessages(prev => [...(prev ?? []), {
        id: Date.now() + 1, role: 'assistant',
        content: isAr
          ? 'عذراً، أواجه صعوبة في الاتصال الآن. يرجى المحاولة مجدداً.'
          : "I'm having trouble connecting right now. Please try again.",
      }]);
    } finally {
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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-on-primary shadow-botanical-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 chat-pulse"
        aria-label={t('chat_title')}
      >
        <span className="material-symbols-outlined">eco</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:pr-6 sm:pb-6">
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
                <p className="font-manrope text-on-primary-container/70 text-xs">{t('chat_powered')}</p>
              </div>
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
                <MessageBubble key={msg.id} msg={msg} isAr={isAr} />
              ))}
              {loading && (
                <div className="flex justify-start mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center mx-2 flex-shrink-0">
                    <span className="material-symbols-outlined text-on-primary-container text-sm">eco</span>
                  </div>
                  <TypingIndicator />
                </div>
              )}
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
              <div className="flex gap-2 items-end bg-surface-container rounded-xl p-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t('chat_placeholder')}
                  rows={1}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="flex-1 bg-transparent resize-none outline-none font-manrope text-sm text-on-surface placeholder:text-outline px-2 py-1 max-h-24"
                  style={{ lineHeight: '1.5' }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80 transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg"
                    style={{ transform: isAr ? 'scaleX(-1)' : 'none' }}>send</span>
                </button>
              </div>
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
