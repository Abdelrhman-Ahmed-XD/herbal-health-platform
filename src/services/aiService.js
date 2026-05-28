import { PLANTS } from '../data/plants.js';

// ── Comprehensive plant context from live database ───────────────────────────
const buildPlantContext = () =>
  Object.values(PLANTS)
    .filter(p => !p.isDemo)
    .map(p => {
      const constituents = p.activeConstituents
        ?.map(c => `  • ${c.name}${c.percentage ? ` (${c.percentage})` : ''}: ${c.effect}`)
        .join('\n') ?? '';
      const moa = p.moa
        ?.map(m => `  • ${m.title}: ${m.detail}`)
        .join('\n') ?? '';
      const howToUse = p.howToUse
        ?.map(h => `${h.method}: ${h.instruction}`)
        .join(' | ') ?? '';
      return [
        `═══ ${p.name} | ${p.latinName} ═══`,
        `Category: ${p.category} / ${p.subcategory}`,
        p.symptoms?.length ? `Symptoms addressed: ${p.symptoms.join(', ')}` : '',
        constituents ? `Active Constituents:\n${constituents}` : '',
        moa         ? `Mechanisms of Action:\n${moa}` : '',
        p.uses?.length            ? `Uses: ${p.uses.join('; ')}` : '',
        howToUse                  ? `How to Use: ${howToUse}` : '',
        p.dosage?.standard        ? `Dosage: ${p.dosage.standard}` : '',
        p.sideEffects?.length     ? `Side Effects: ${p.sideEffects.join('; ')}` : '',
        p.contraindications?.length ? `Contraindications: ${p.contraindications.join('; ')}` : '',
        p.warnings?.length        ? `Warnings: ${p.warnings.join(' ')}` : '',
      ].filter(Boolean).join('\n');
    })
    .join('\n\n');

// Compact version for Groq (stays under free-tier token limits)
const buildCompactPlantContext = () =>
  Object.values(PLANTS)
    .filter(p => !p.isDemo)
    .map(p => {
      const compounds = p.activeConstituents?.slice(0, 2).map(c => c.name).join(', ') ?? '';
      const warning   = Array.isArray(p.warnings) ? p.warnings[0] ?? '' : '';
      return [
        `**${p.name}** | ${p.latinName} | ${p.subcategory}`,
        p.symptoms?.length ? `Symptoms: ${p.symptoms.join(', ')}` : '',
        compounds         ? `Key compounds: ${compounds}` : '',
        p.dosage?.standard ? `Dosage: ${p.dosage.standard}` : '',
        warning            ? `⚠️ ${warning.slice(0, 160)}` : '',
      ].filter(Boolean).join('\n');
    })
    .join('\n\n');

const GROQ_SYSTEM_PROMPT = `You are Nabta AI, an expert herbal pharmaceutical assistant for the Nabta botanical research platform.

PERSONALITY & MEMORY:
- You are warm, knowledgeable, and conversational
- You remember everything the user tells you in this conversation
- If the user shares their name, always address them by name
- Think step by step before answering

LANGUAGE:
- Always respond in the EXACT same language as the current user message
- English message → English reply only — NO Arabic characters at all
- Arabic message → Arabic reply only
- CRITICAL: Never mix languages. English responses must contain zero Arabic script.

PLANT DATABASE (40 verified plants):
${buildCompactPlantContext()}

FORMATTING:
- Bold every plant name: **Plant Name** — this creates a clickable link in the app
- Use ### for section headers, • for bullets, numbered lists for steps
- Keep sections concise (2-4 bullets max)

HOW TO ANSWER:
1. Identify relevant plants from the database
2. Structure: ### Recommended Plants → ### Why It Works → ### How to Use → ### Dosage → ### Important Warnings
3. End with: "⚠️ This information is for educational purposes only. Please consult a qualified healthcare professional before starting any herbal treatment." (use Arabic version for Arabic messages)

RULES:
- Only recommend plants from the database above
- Never say "I don't know" if the answer is in the database
- For pregnancy/children: give info + clear special warning`;

const SYSTEM_PROMPT = `You are Nabta AI, an expert herbal pharmaceutical assistant for the Nabta botanical research platform.

PERSONALITY & MEMORY:
- You are warm, knowledgeable, and conversational
- You remember everything the user tells you in this conversation
- If the user shares their name, always address them by name
- If the user mentions age, health condition, or personal details, remember and reference them when relevant
- Think step by step before answering
- Never give robotic or template responses

LANGUAGE:
- Detect the language of THE CURRENT USER MESSAGE ONLY — ignore previous messages in the conversation history
- Always respond in the EXACT same language as the current user message
- If the current message is in English → respond 100% in English — NO Arabic characters, NO Arabic words, NO Arabic plant names whatsoever
- If the current message is in Arabic → respond 100% in Arabic
- Mixed language in the same message → match their dominant language
- NEVER switch languages based on earlier messages or the welcome message language
- CRITICAL: In English responses, always use English plant names only — never write Arabic script even for plant names

KNOWLEDGE BASE:
You have access to the Nabta plant database. Always reference specific plants from this database when answering.

PLANT DATABASE:
${buildPlantContext()}

FORMATTING RULES (strictly follow these):
- Format each recommended plant as its own entry: **Plant Name** (*Latin name*): one-sentence description
- ALWAYS use **bold** for every plant name  this creates a clickable link in the app
- Use bullet points (•) for lists of effects, uses, or warnings
- Use ### for section headers (e.g., ### Recommended Plants, ### Why It Works, ### How to Use, ### Dosage, ### Warnings)
- Use numbered lists (1. 2. 3.) for step-by-step instructions
- Keep each section concise  2-4 bullet points max
- Never use long unbroken paragraphs  break into bullets or short paragraphs

HOW TO ANSWER:
1. Understand the user question freely  any language, any phrasing, informal words, symptoms in their own words
2. Identify relevant plants from the database
3. Structure the answer clearly:
   ### Recommended Plants
   [list each as **Plant Name** (*Latin*): brief description]

   ### Why It Works
   [active constituent + mechanism in 1-2 bullets per plant]

   ### How to Use
   1. [step-by-step instructions]

   ### Dosage
   [dose info as bullets]

   ### Important Warnings
   [contraindications and side effects as bullets]

4. End every response with the appropriate disclaimer based on response language:
   English: "⚠️ This information is for educational purposes only. Please consult a qualified healthcare professional before starting any herbal treatment."
   Arabic: "⚠️ هذه المعلومات لأغراض تعليمية فقط. يُرجى استشارة مختص صحي مؤهل قبل البدء بأي علاج عشبي."

SPECIAL RULES:
- Never say "I don't know" if the answer is in the database
- Only recommend plants from the database
- For pregnancy or children questions: give the info but add a clear special warning
- If a condition has no matching plant: say the database does not cover this yet but will be expanded soon
- The database will grow design responses to naturally accommodate new plants added in the future`;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// ── Groq direct — supports CORS, free tier, streaming ────────────────────────
const callGroqDirect = async (key, messages, userMessage, onChunk) => {
  const isStreaming = typeof onChunk === 'function';
  const url = 'https://api.groq.com/openai/v1/chat/completions';

  const history = messages.filter(m => m.id !== 'welcome').slice(-20).map(m => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: m.content,
  }));

  const body = {
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: GROQ_SYSTEM_PROMPT },
      ...history,
      { role: 'user', content: userMessage },
    ],
    max_tokens: 4096,
    temperature: 0.4,
    top_p: 0.8,
    stream: isStreaming,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    if (res.status === 429) throw new Error('RATE_LIMIT');
    throw new Error(`Groq ${res.status}`);
  }

  if (!isStreaming) {
    const data = await res.json();
    return data.choices?.[0]?.message?.content
      || 'I apologize, I could not process your question. Please try again.';
  }

  const reader  = res.body.getReader();
  const decoder = new TextDecoder();
  let fullText = '';
  let buffer   = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';

    for (const line of lines) {
      if (!line.startsWith('data: ')) continue;
      const jsonStr = line.slice(6).trim();
      if (!jsonStr || jsonStr === '[DONE]') continue;
      try {
        const data = JSON.parse(jsonStr);
        const text = data.choices?.[0]?.delta?.content;
        if (text) { fullText += text; onChunk(fullText); }
      } catch {}
    }
  }

  return fullText || 'I apologize, I could not process your question. Please try again.';
};

// ── Gemini direct — dev streaming fallback ────────────────────────────────────
const callGeminiDirect = async (key, messages, userMessage, onChunk) => {
  const isStreaming = typeof onChunk === 'function';
  const url = isStreaming
    ? `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?key=${key}&alt=sse`
    : `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;

  const history = messages.filter(m => m.id !== 'welcome').slice(-20).map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const body = {
    system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
    generationConfig: { maxOutputTokens: 8192, temperature: 0.4, topP: 0.8 },
  };

  let res;
  for (let attempt = 0; attempt <= 2; attempt++) {
    res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (res.status !== 429) break;
    if (attempt < 2) await sleep(6000 * (attempt + 1));
  }

  if (!res.ok) {
    if (res.status === 429) throw new Error('RATE_LIMIT');
    throw new Error(`Gemini ${res.status}`);
  }

  if (!isStreaming) {
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text
      || 'I apologize, I could not process your question. Please try again.';
  }

  const reader  = res.body.getReader();
  const decoder = new TextDecoder();
  let fullText = '';
  let buffer   = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';

    for (const line of lines) {
      if (!line.startsWith('data: ')) continue;
      const jsonStr = line.slice(6).trim();
      if (!jsonStr || jsonStr === '[DONE]') continue;
      try {
        const data = JSON.parse(jsonStr);
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) { fullText += text; onChunk(fullText); }
      } catch {}
    }
  }

  return fullText || 'I apologize, I could not process your question. Please try again.';
};

// ── Main entry point ──────────────────────────────────────────────────────────
// Priority order:
//   1. Groq direct  (VITE_GROQ_API_KEY  — free, CORS-safe, streaming)
//   2. Gemini direct (VITE_GEMINI_API_KEY — dev shortcut, streaming)
//   3. Netlify Function  (prod: Groq server-side → Gemini server-side)
export const sendChatMessage = async (messages, userMessage, onChunk) => {
  // 1. Groq direct (free, supports browser CORS + streaming)
  const groqKey = import.meta.env.VITE_GROQ_API_KEY;
  if (groqKey) {
    try {
      return await callGroqDirect(groqKey, messages, userMessage, onChunk);
    } catch (err) {
      console.warn('[AI] Groq direct failed:', err.message);
    }
  }

  // 2. Gemini direct (dev shortcut)
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (geminiKey) {
    try {
      return await callGeminiDirect(geminiKey, messages, userMessage, onChunk);
    } catch (err) {
      console.warn('[AI] Gemini direct failed:', err.message);
    }
  }

  // 3. Netlify Function (production — Groq server-side → Gemini server-side)
  try {
    const res = await fetch('/.netlify/functions/geminiChat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: messages.filter(m => m.id !== 'welcome').slice(-20), userMessage }),
    });
    if (!res.ok) throw new Error(`Function ${res.status}`);
    const data = await res.json();
    return data.response || 'I apologize, I could not process your question. Please try again.';
  } catch (err) {
    console.warn('[AI] Function failed:', err.message);
    return 'Unable to connect to the AI service. Please try again later.';
  }
};
