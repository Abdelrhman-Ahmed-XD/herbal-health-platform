// AI service - calls Firebase Function which securely wraps Gemini API
// The API key is NEVER exposed in the frontend.

import { PLANTS, SYMPTOM_TAG_MAP } from '../data/plants.js';

// Build context string from plants database for AI grounding
const buildPlantContext = () => {
  const entries = Object.values(PLANTS).map(p => 
    `Plant: ${p.name} (${p.latinName})
Category: ${p.category}
Tags: ${p.tags.join(', ')}
Description: ${p.shortDescription}
Benefits: ${p.benefits.map(b => b.title + ': ' + b.desc).join('; ')}
Symptoms addressed: ${p.symptoms.join(', ')}`
  );
  return entries.join('\n\n');
};

const SYSTEM_PROMPT = `You are a knowledgeable botanical health educator for Verdant Lore Botanical Institute. 
Your role is to provide educational information about herbal plants and natural wellness.

STRICT RULES:
1. ONLY provide information based on the plant database context provided below
2. NEVER give medical diagnoses or prescribe treatments
3. Always recommend consulting a qualified healthcare provider for medical conditions
4. Classify user questions into symptom tags: IBS, Cough, Constipation, Immunity, Stress, Respiratory, Anxiety, Sleep, Fatigue, Nausea, PMS, Cold
5. Suggest relevant plants from the database based on these classifications
6. Keep responses concise, educational, and warm in tone
7. If asked about something outside herbal/botanical education, politely redirect

AVAILABLE PLANT DATABASE:
${buildPlantContext()}

SYMPTOM-TO-PLANT CLASSIFICATIONS:
${Object.entries(SYMPTOM_TAG_MAP).map(([tag, plants]) => `${tag}: ${plants.join(', ')}`).join('\n')}

When responding:
- Identify which symptom tags relate to the user's question
- Suggest 1-3 relevant plants from the database
- Explain briefly how those plants may help (educational only)
- Always add: "⚠️ This is educational information only. Please consult a healthcare professional."
- Format responses in a clear, friendly way`;

// In production: call Firebase Cloud Function
// const callGeminiFunction = httpsCallable(functions, 'geminiChat');

// Fallback local AI simulation using Gemini API via fetch
export const sendChatMessage = async (messages, userMessage) => {
  const endpoint = import.meta.env.VITE_FIREBASE_FUNCTION_URL;
  
  // If Firebase function URL is configured, use it (production)
  if (endpoint) {
    const response = await fetch(`${endpoint}/geminiChat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, userMessage, systemPrompt: SYSTEM_PROMPT }),
    });
    const data = await response.json();
    return data.response;
  }

  // Development: call Gemini directly (set VITE_GEMINI_API_KEY in .env for dev only)
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (geminiKey) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiKey}`;
    const history = messages.slice(-6).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));
    
    const body = {
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
      generationConfig: { maxOutputTokens: 512, temperature: 0.4 },
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, I could not process your question. Please try again.';
  }

  // Demo fallback: pattern-match responses from local data
  return generateLocalResponse(userMessage);
};

// Smart local fallback that uses plant data
const generateLocalResponse = (userMessage) => {
  const msg = userMessage.toLowerCase();
  
  // Find matching symptoms
  const matchedTags = Object.keys(SYMPTOM_TAG_MAP).filter(tag => 
    msg.includes(tag.toLowerCase()) ||
    (tag === 'Cough' && (msg.includes('cough') || msg.includes('cold') || msg.includes('throat'))) ||
    (tag === 'IBS' && (msg.includes('ibs') || msg.includes('bloat') || msg.includes('stomach') || msg.includes('gut'))) ||
    (tag === 'Stress' && (msg.includes('stress') || msg.includes('anxiety') || msg.includes('nervous'))) ||
    (tag === 'Immunity' && (msg.includes('immun') || msg.includes('sick') || msg.includes('defense'))) ||
    (tag === 'Sleep' && (msg.includes('sleep') || msg.includes('insomnia') || msg.includes('rest'))) ||
    (tag === 'Fatigue' && (msg.includes('tired') || msg.includes('fatigue') || msg.includes('energy'))) ||
    (tag === 'Constipation' && (msg.includes('constip') || msg.includes('digest') || msg.includes('bowel')))
  );

  if (matchedTags.length === 0) {
    // Check if asking about a specific plant
    const plant = Object.values(PLANTS).find(p => 
      msg.includes(p.name.toLowerCase()) || msg.includes(p.latinName.toLowerCase())
    );
    if (plant) {
      return `**${plant.name}** (*${plant.latinName}*)\n\n${plant.description}\n\n**Key Benefits:**\n${plant.benefits.map(b => `• **${b.title}**: ${b.desc}`).join('\n')}\n\n**How to use:** ${plant.preparation[0].desc}\n\n⚠️ *This is educational information only. Please consult a healthcare professional before starting any herbal regimen.*`;
    }
    return "Welcome to Verdant Lore! 🌿 I'm here to help you explore the world of botanical wellness. You can ask me about specific herbs, symptoms you're experiencing, or health categories like immunity, digestion, or respiratory support. What would you like to learn about?";
  }

  const plantIds = [...new Set(matchedTags.flatMap(tag => SYMPTOM_TAG_MAP[tag] || []))].slice(0, 3);
  const plants = plantIds.map(id => PLANTS[id]).filter(Boolean);

  let response = `Based on your interest in **${matchedTags.join(', ')}**, here are some botanical allies that may support you:\n\n`;
  
  plants.forEach(plant => {
    response += `🌿 **${plant.name}** (*${plant.latinName}*)\n${plant.shortDescription}\n\n`;
  });

  response += `⚠️ *This is educational information only. Please consult a qualified healthcare professional before using any herbal remedies, especially if you have existing conditions or take medications.*`;
  
  return response;
};

export const classifySymptoms = (text) => {
  const lower = text.toLowerCase();
  return Object.keys(SYMPTOM_TAG_MAP).filter(tag => lower.includes(tag.toLowerCase()));
};
