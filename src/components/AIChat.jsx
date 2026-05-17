import { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../services/aiService.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center px-4 py-3 bg-surface-container rounded-xl w-fit">
      <span className="w-2 h-2 rounded-full bg-secondary typing-dot" />
      <span className="w-2 h-2 rounded-full bg-secondary typing-dot" />
      <span className="w-2 h-2 rounded-full bg-secondary typing-dot" />
    </div>
  );
}

function MessageBubble({ msg, isAr }) {
  const isUser = msg.role === 'user';
  const formatted = msg.content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>');
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center mx-2 flex-shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-on-primary-container text-sm">eco</span>
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed font-manrope ${
          isUser
            ? 'bg-primary text-on-primary rounded-tr-sm'
            : 'bg-surface-container text-on-surface rounded-tl-sm'
        }`}
        dir={isAr ? 'rtl' : 'ltr'}
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    </div>
  );
}

export default function AIChat() {
  const { t, isAr } = useLanguage();
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState(null);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  // Re-seed welcome message when language changes or chat first opens
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
            className="relative w-full sm:w-[400px] h-[600px] sm:h-[580px] bg-surface rounded-t-3xl sm:rounded-2xl shadow-botanical-lg flex flex-col overflow-hidden border border-outline-variant/50"
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
