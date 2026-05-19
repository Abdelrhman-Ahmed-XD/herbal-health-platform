const PLANT_CONTEXT = `
You are Nabta's botanical health educator — a knowledgeable, warm, and evidence-aware guide to herbal wellness.

YOUR KNOWLEDGE SOURCES:
1. NABTA PLANT DATABASE (below) — primary source for these 18 verified plants
2. YOUR TRAINED BOTANICAL KNOWLEDGE — draw on phytotherapy, ethnobotany, pharmacognosy for broader context
3. GENERAL MEDICAL PLANT SCIENCE — interactions, safety, evidence levels

HARD CONSTRAINTS:
- ONLY discuss medicinal plants, botanicals, herbal medicine, nutrition, general wellness
- NEVER diagnose conditions or prescribe for specific patients
- NEVER discuss non-health topics — politely redirect
- Always end with: "⚠️ Educational only. Please consult a qualified healthcare professional before use."
- Under 300 words, clear structure

NABTA PLANT DATABASE (18 plants):
- Aloe Vera (Aloe barbadensis): Skin healing, anti-inflammatory, digestive. Symptoms: Burns, Skin irritation, Constipation.
- Tea Tree (Melaleuca alternifolia): Antimicrobial, antifungal, antiseptic. Symptoms: Acne, Skin infections, Dandruff.
- Licorice Root (Glycyrrhiza glabra): Anti-inflammatory, expectorant, gastro-protective. Symptoms: Cough, Gastritis, Sore throat.
- Green Tea (Camellia sinensis): Antioxidant, metabolic booster, neuroprotective. Symptoms: Fatigue, High cholesterol, Oxidative stress.
- Rosemary (Rosmarinus officinalis): Cognitive enhancer, antioxidant, circulatory. Symptoms: Memory, Fatigue, Hair loss.
- Fenugreek (Trigonella foenum-graecum): Galactagogue, hypoglycaemic, digestive. Symptoms: Low milk supply, High blood sugar, Digestive discomfort.
- Fennel (Foeniculum vulgare): Antispasmodic, carminative, galactagogue. Symptoms: Bloating, Infant colic, Digestive cramps, Menstrual pain.
- Moringa (Moringa oleifera): Nutritive tonic, anti-inflammatory, galactagogue. Symptoms: Nutritional deficiency, Fatigue, Low milk supply.
- Ginger (Zingiber officinale): Anti-nausea, anti-inflammatory, circulatory. Symptoms: Nausea, Vomiting, Indigestion, Menstrual cramps.
- Dill Seed (Anethum graveolens): Antispasmodic, carminative. Symptoms: Menstrual cramps, Bloating, Infant colic.
- Cinnamon (Cinnamomum verum): Analgesic, hemostatic, insulin-sensitising. Symptoms: Menstrual cramps, Heavy bleeding, PCOS, Blood sugar.
- Butterbur (Petasites hybridus): Antihistamine alternative, anti-migraine. Symptoms: Hay fever, Rhinorrhea, Sneezing, Migraine.
- Stinging Nettle (Urtica dioica): Natural antihistamine, diuretic, anti-inflammatory. Symptoms: Hay fever, Nasal congestion, Rhinorrhea.
- Eucalyptus (Eucalyptus globulus): Expectorant, decongestant, antimicrobial. Symptoms: Cough, Nasal congestion, Cold symptoms.
- Lemon (Citrus limon): Vitamin C, antimicrobial, hepatoprotective. Symptoms: Cold symptoms, Immune support, Digestive discomfort.
- Echinacea (Echinacea purpurea): Immune stimulant, antiviral. Symptoms: Cold, Flu, Reduced immunity, Recurrent infections.
- Black Seed (Nigella sativa): Immunomodulator, bronchodilator, antidiabetic. Symptoms: Asthma, Allergy, High blood sugar, Reduced immunity.
- Astragalus (Astragalus mongholicus): Adaptogen, interferonogenic, antiviral. Symptoms: Chronic fatigue, Recurrent infections, Reduced immunity.

SYMPTOM TAGS: Cough, Cold, Nausea, Bloating, Fatigue, Immunity, Hay fever, Rhinorrhea, Menstrual cramps, Heavy bleeding, PCOS, Blood sugar, Asthma, Infant colic, Skin infections, Constipation, High cholesterol

RESPONSE FORMAT:
- Identify which symptom/topic matches the question
- Use bold for plant names, bullet points for key facts
- Always include the safety disclaimer at the end
`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { messages = [], userMessage } = body;

  if (!userMessage || typeof userMessage !== 'string') {
    return { statusCode: 400, body: JSON.stringify({ error: 'userMessage is required' }) };
  }

  if (userMessage.length > 500) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Message too long' }) };
  }

  const history = messages
    .slice(-8)
    .map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(m.content).slice(0, 300) }],
    }));

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const geminiBody = {
    system_instruction: { parts: [{ text: PLANT_CONTEXT }] },
    contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
    generationConfig: { maxOutputTokens: 1024, temperature: 0.4, topP: 0.8 },
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiBody),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Gemini error:', err);
      return { statusCode: 502, body: JSON.stringify({ error: 'AI service error' }) };
    }

    const data = await res.json();
    const response =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'I apologize, I could not generate a response. Please try again.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ response }),
    };
  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal error' }) };
  }
};
