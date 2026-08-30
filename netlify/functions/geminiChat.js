import { PLANTS } from '../src/data/plants.js';
// NOTE: adjust the import path above to match where plants.js actually lives
// relative to this file's location in your repo (this assumes /api/geminiChat.js
// and /src/data/plants.js).

// Compact context for Groq (keeps under free-tier token limits)
const buildCompactPlantContext = () =>
    Object.values(PLANTS)
        .filter(p => !p.isDemo)
        .map(p => {
          const compounds = p.activeConstituents?.slice(0, 2).map(c => c.name).join(', ') ?? '';
          const symptoms  = p.symptoms?.slice(0, 4).join(', ') ?? '';
          const dose      = p.dosage?.standard ? p.dosage.standard.slice(0, 80) : '';
          return [
            `${p.name} [${p.id}] (${p.nameAr}) | ${p.subcategory}`,
            symptoms  ? `Sx: ${symptoms}` : '',
            compounds ? `Cmp: ${compounds}` : '',
            dose      ? `Dose: ${dose}` : '',
          ].filter(Boolean).join(' | ');
        })
        .join('\n');

// Full context for Gemini (handles large prompts)
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
            `═══ ${p.name}[${p.id}] (${p.nameAr}) | ${p.latinName} ═══`,
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

const GROQ_SYSTEM_PROMPT = `You are Nabta AI, an expert herbal pharmaceutical assistant for the Nabta botanical research platform.

PERSONALITY & MEMORY:
- You are warm, knowledgeable, and conversational
- You remember everything the user tells you in this conversation
- If the user shares their name, always address them by name
- Think step by step before answering

LANGUAGE:
- Always respond in the EXACT same language as the current user message
- English message → English reply | Arabic message → Arabic reply
- Support any language

PLANT DATABASE (40 verified plants):
${buildCompactPlantContext()}

SAME-NAME PLANT IDs (append [id] immediately after bold name, no space):
Echinacea: cold/flu→[echinacea-cold] | immunity→[echinacea-immunity]
Ginger: cold/flu→[ginger-cold] | digestion/IBS→[ginger-ibs] | menstrual→[ginger-menstrual] | pregnancy→[ginger-pregnancy]

FORMATTING:
- Bold every plant name and append its [id] right after: **Plant Name**[plant-id]
- Examples: **Echinacea**[echinacea-cold] or **Ginger**[ginger-cold] or **Lemon**[lemon]
- Use ### for section headers, • for bullets, numbered lists for steps
- NEVER use markdown tables (no | pipes |) — use bullet points or numbered lists instead, even for comparisons
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
- Detect the language of THE CURRENT USER MESSAGE ONLY ignore previous messages in the conversation history
- Always respond in the EXACT same language as the current user message
- If the current message is in English → respond 100% in English
- If the current message is in Arabic → respond 100% in Arabic
- Mixed language in the same message → match their dominant language
- NEVER switch languages based on earlier messages or the welcome message language
- Support any language

KNOWLEDGE BASE:
You have access to the Nabta plant database. Always reference specific plants from this database when answering.

PLANT DATABASE:
${buildPlantContext()}

SAME-NAME PLANT IDs:
Echinacea: cold/flu→[echinacea-cold] | immunity→[echinacea-immunity]
Ginger: cold/flu→[ginger-cold] | digestion/IBS→[ginger-ibs] | menstrual→[ginger-menstrual] | pregnancy→[ginger-pregnancy]

FORMATTING RULES (strictly follow these):
- Format each recommended plant as its own entry: **Plant Name**[plant-id] (*Latin name*): one-sentence description
- ALWAYS bold every plant name and append its [plant-id] right after with no space
- Example: **Echinacea**[echinacea-cold] (*Echinacea purpurea*): immune activator for colds
- Use bullet points (•) for lists of effects, uses, or warnings
- Use ### for section headers (e.g., ### Recommended Plants, ### Why It Works, ### How to Use, ### Dosage, ### Warnings)
- Use numbered lists (1. 2. 3.) for step-by-step instructions
- NEVER use markdown tables (no | pipes |) — use bullet points or numbered lists instead, even for comparisons
- Keep each section concise — 2-4 bullet points max
- Never use long unbroken paragraphs — break into bullets or short paragraphs

HOW TO ANSWER:
1. Understand the user question freely — any language, any phrasing, informal words, symptoms in their own words
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
- The database will grow — design responses to naturally accommodate new plants added in the future`;

// ── Groq call (openai/gpt-oss-120b, free tier, primary) ──────────────────────
const callGroq = async (groqKey, history, userMessage) => {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'openai/gpt-oss-120b',
      messages: [
        { role: 'system', content: GROQ_SYSTEM_PROMPT },
        ...history,
        { role: 'user', content: userMessage },
      ],
      stream: false,
      max_tokens: 1024,
      temperature: 0.4,
      top_p: 0.8,
    }),
  });
  if (!res.ok) throw new Error(`Groq ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || null;
};

// ── Gemini call (fallback) ────────────────────────────────────────────────────
const callGemini = async (geminiKey, history, userMessage) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: [
        ...history.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: String(m.content) }] })),
        { role: 'user', parts: [{ text: userMessage }] },
      ],
      generationConfig: { maxOutputTokens: 8192, temperature: 0.4, topP: 0.8 },
    }),
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}`);
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || null;
};

// ── Vercel serverless function ────────────────────────────────────────────────
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { messages = [], userMessage } = req.body || {};
  if (!userMessage || typeof userMessage !== 'string' || userMessage.length > 2000) {
    return res.status(400).json({ error: 'Invalid userMessage' });
  }

  const history = messages.slice(-6).map(m => ({ role: m.role, content: String(m.content) }));

  // 1. Try Groq (primary — free tier)
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    try {
      const response = await callGroq(groqKey, history, userMessage);
      if (response) return res.status(200).json({ response });
    } catch (err) {
      console.warn('[AI] Groq failed, switching to Gemini:', err.message);
    }
  }

  // 2. Fall back to Gemini
  const geminiKey = process.env.GEMINI_API_KEY;
  if (!geminiKey) {
    return res.status(500).json({ error: 'No AI key configured' });
  }
  try {
    const response = await callGemini(geminiKey, history, userMessage);
    if (response) return res.status(200).json({ response });
  } catch (err) {
    console.error('[AI] Gemini error:', err.message);
  }

  return res.status(502).json({ error: 'AI service unavailable' });
}