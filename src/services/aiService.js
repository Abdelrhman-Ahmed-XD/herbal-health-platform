import { PLANTS, SYMPTOM_TAG_MAP } from '../data/plants.js';

// Build context string from plant database for the system prompt
const buildPlantContext = () =>
  Object.values(PLANTS).map(p =>
    `Plant: ${p.name} (${p.latinName})
Category: ${p.category}
Tags: ${p.tags.join(', ')}
Description: ${p.shortDescription}
Benefits: ${p.benefits.map(b => b.title + ': ' + b.desc).join('; ')}
Symptoms addressed: ${p.symptoms.join(', ')}`
  ).join('\n\n');

const SYSTEM_PROMPT = `You are Nabta's botanical health educator — a knowledgeable, warm, and evidence-aware guide to herbal wellness.

YOUR KNOWLEDGE SOURCES (use all three):
1. NABTA PLANT DATABASE (below) — your primary source for detailed profiles on the 18 plants in this platform
2. YOUR TRAINED BOTANICAL KNOWLEDGE — you may draw on peer-reviewed phytotherapy, ethnobotany, and pharmacognosy knowledge for additional context, mechanisms, and comparisons
3. GENERAL MEDICAL PLANT SCIENCE — clinical herb-drug interactions, safety classifications, evidence levels

HARD CONSTRAINTS:
- ONLY discuss topics related to medicinal plants, botanicals, herbal medicine, nutrition, or general wellness
- NEVER diagnose medical conditions, prescribe dosages for specific patients, or replace a doctor
- NEVER discuss topics outside the plant/health domain — politely redirect
- Always end with: "⚠️ Educational only. Please consult a qualified healthcare professional before use."
- Keep responses under 300 words — clear and structured

NABTA PLANT DATABASE:
${buildPlantContext()}

SYMPTOM CLASSIFICATIONS:
${Object.entries(SYMPTOM_TAG_MAP).map(([tag, plants]) => `${tag}: ${plants.join(', ')}`).join('\n')}

RESPONSE FORMAT:
- Identify which symptom/topic matches the question
- Prioritize Nabta database plants where relevant, supplement with broader botanical knowledge when helpful
- Use bold for plant names, bullet points for key facts
- Always include the safety disclaimer at the end`;

// ── Gemini direct call (dev mode — key is in VITE env) ───────────────────
const callGeminiDirect = async (key, messages, userMessage) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
  const history = messages.slice(-6).map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));
  const body = {
    system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
    generationConfig: { maxOutputTokens: 1024, temperature: 0.4, topP: 0.8 },
  };
  const res  = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text
    || 'I apologize, I could not process your question. Please try again.';
};

// ── Main entry point ─────────────────────────────────────────────────────
export const sendChatMessage = async (messages, userMessage) => {
  // Dev: VITE_GEMINI_API_KEY is set → call Gemini directly (no Cloud Function needed)
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (geminiKey) {
    return callGeminiDirect(geminiKey, messages, userMessage);
  }

  // Production: route through Netlify Function (API key stays server-side)
  try {
    const res = await fetch('/.netlify/functions/geminiChat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: messages.slice(-8), userMessage }),
    });
    if (!res.ok) throw new Error('Function error');
    const data = await res.json();
    return data.response;
  } catch {
    return generateLocalResponse(userMessage);
  }
};

// ── Local keyword fallback (no API key, no Cloud Function) ───────────────
export const classifySymptoms = (text) => {
  const lower = text.toLowerCase();
  return Object.keys(SYMPTOM_TAG_MAP).filter(tag => lower.includes(tag.toLowerCase()));
};

const generateLocalResponse = (userMessage) => {
  const msg = userMessage.toLowerCase();

  const matchedTags = Object.keys(SYMPTOM_TAG_MAP).filter(tag =>
    msg.includes(tag.toLowerCase()) ||
    (tag === 'Cough'       && (msg.includes('cough') || msg.includes('cold') || msg.includes('throat'))) ||
    (tag === 'IBS'         && (msg.includes('ibs') || msg.includes('bloat') || msg.includes('stomach'))) ||
    (tag === 'Stress'      && (msg.includes('stress') || msg.includes('anxiety') || msg.includes('nervous'))) ||
    (tag === 'Immunity'    && (msg.includes('immun') || msg.includes('sick') || msg.includes('defense'))) ||
    (tag === 'Sleep'       && (msg.includes('sleep') || msg.includes('insomnia') || msg.includes('rest'))) ||
    (tag === 'Fatigue'     && (msg.includes('tired') || msg.includes('fatigue') || msg.includes('energy'))) ||
    (tag === 'Constipation'&& (msg.includes('constip') || msg.includes('digest') || msg.includes('bowel')))
  );

  if (matchedTags.length === 0) {
    const plant = Object.values(PLANTS).find(p =>
      msg.includes(p.name.toLowerCase()) || msg.includes(p.latinName.toLowerCase())
    );
    if (plant) {
      return `**${plant.name}** (*${plant.latinName}*)\n\n${plant.description}\n\n**Key Benefits:**\n${plant.benefits.map(b => `• **${b.title}**: ${b.desc}`).join('\n')}\n\n**How to use:** ${plant.preparation[0].desc}\n\n⚠️ *Educational information only. Please consult a healthcare professional before starting any herbal regimen.*`;
    }
    return "Hello! 🌿 I'm your Nabta botanical guide. Ask me about specific herbs, symptoms, or health categories like immunity, digestion, or respiratory support. What would you like to learn about?";
  }

  const plantIds = [...new Set(matchedTags.flatMap(tag => SYMPTOM_TAG_MAP[tag] || []))].slice(0, 3);
  const plants   = plantIds.map(id => PLANTS[id]).filter(Boolean);

  let response = `Based on your interest in **${matchedTags.join(', ')}**, here are some botanical allies:\n\n`;
  plants.forEach(plant => {
    response += `🌿 **${plant.name}** (*${plant.latinName}*)\n${plant.shortDescription}\n\n`;
  });
  response += `⚠️ *Educational information only. Please consult a qualified healthcare professional before using any herbal remedies.*`;
  return response;
};
