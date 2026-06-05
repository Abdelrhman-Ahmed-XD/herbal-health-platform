/**
 * Firebase Cloud Functions
 * Secure Gemini API proxy  the API key lives only here (server-side).
 * 
 * Deploy: firebase deploy --only functions
 * Set key: firebase functions:config:set gemini.key="YOUR_KEY"
 */

const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const { getFirestore } = require('firebase-admin/firestore');
const admin = require('firebase-admin');

admin.initializeApp();
const db = getFirestore();

// Secret stored in Google Secret Manager (not in code or env files)
const GEMINI_API_KEY = defineSecret('GEMINI_API_KEY');

// ─── Plant database context (Nabta real plant database — 18 plants) ──────────
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
- Ginger for cold/flu [ginger-cold]: Anti-nausea, anti-inflammatory, circulatory. Symptoms: Nausea, Vomiting, Cold symptoms.
- Ginger for digestion/IBS [ginger-ibs]: Prokinetic, antispasmodic. Symptoms: Indigestion, IBS symptoms.
- Ginger for diarrhea [ginger-diarrhea]: Muscarinic antagonist, calcium channel blocker, enterotoxin blocker, antimicrobial. Symptoms: Diarrhea, Abdominal cramps.
- Ginger for menstrual [ginger-menstrual]: Analgesic, anti-inflammatory. Symptoms: Menstrual cramps.
- Ginger for pregnancy [ginger-pregnancy]: Anti-emetic. Symptoms: Nausea, Vomiting (pregnancy).
- Dill Seed (Anethum graveolens): Antispasmodic, carminative. Symptoms: Menstrual cramps, Bloating, Infant colic.
- Cinnamon (Cinnamomum verum): Analgesic, hemostatic, insulin-sensitising. Symptoms: Menstrual cramps, Heavy bleeding, PCOS, Blood sugar.
- Butterbur (Petasites hybridus): Antihistamine alternative, anti-migraine. Symptoms: Hay fever, Rhinorrhea, Sneezing, Migraine.
- Stinging Nettle (Urtica dioica): Natural antihistamine, diuretic, anti-inflammatory. Symptoms: Hay fever, Nasal congestion, Rhinorrhea.
- Eucalyptus (Eucalyptus globulus): Expectorant, decongestant, antimicrobial. Symptoms: Cough, Nasal congestion, Cold symptoms.
- Lemon (Citrus limon): Vitamin C, antimicrobial, hepatoprotective. Symptoms: Cold symptoms, Immune support, Digestive discomfort.
- Echinacea (Echinacea purpurea): Immune stimulant, antiviral. Symptoms: Cold, Flu, Reduced immunity, Recurrent infections.
- Black Seed (Nigella sativa): Immunomodulator, bronchodilator, antidiabetic. Symptoms: Asthma, Allergy, High blood sugar, Reduced immunity.
- Astragalus (Astragalus mongholicus): Adaptogen, interferonogenic, antiviral. Symptoms: Chronic fatigue, Recurrent infections, Reduced immunity.

SYMPTOM TAGS: Cough, Cold, Nausea, Bloating, Fatigue, Immunity, Hay fever, Rhinorrhea, Menstrual cramps, Heavy bleeding, PCOS, Blood sugar, Asthma, Infant colic, Skin infections, Constipation, High cholesterol, Diarrhea, Abdominal cramps
`;

// ─── Gemini Chat Function ─────────────────────────────────────────────────────
exports.geminiChat = onCall(
  { secrets: [GEMINI_API_KEY], cors: true },
  async (request) => {
    const { messages = [], userMessage } = request.data;

    if (!userMessage || typeof userMessage !== 'string') {
      throw new HttpsError('invalid-argument', 'userMessage is required.');
    }

    if (userMessage.length > 500) {
      throw new HttpsError('invalid-argument', 'Message too long.');
    }

    // Build conversation history (last 8 messages for context window)
    const history = messages
      .slice(-8)
      .map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: String(m.content).slice(0, 300) }],
      }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY.value()}`;

    const body = {
      system_instruction: {
        parts: [{ text: PLANT_CONTEXT }],
      },
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] },
      ],
      generationConfig: {
        maxOutputTokens: 400,
        temperature: 0.4,
        topP: 0.8,
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_MEDICAL', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      ],
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Gemini API error:', err);
      throw new HttpsError('internal', 'AI service error. Please try again.');
    }

    const data = await res.json();
    const responseText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'I apologize, I could not generate a response. Please try again.';

    // Optional: log to Firestore (anonymized)
    try {
      await db.collection('chatLogs').add({
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        userMessageLength: userMessage.length,
        responseLength: responseText.length,
        // Never log the actual message content for privacy
      });
    } catch (logErr) {
      console.warn('Failed to log chat:', logErr);
    }

    return { response: responseText };
  }
);

// ─── Save Questionnaire Response ──────────────────────────────────────────────
exports.saveQuestionnaireResponse = onCall({ cors: true }, async (request) => {
  const { answers, sessionId } = request.data;

  if (!answers || typeof answers !== 'object') {
    throw new HttpsError('invalid-argument', 'answers object is required.');
  }

  const docRef = await db.collection('questionnaireResponses').add({
    answers,
    sessionId: sessionId || 'anonymous',
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    processed: false,
  });

  // Update aggregated symptom counts (for charts)
  const symptoms = answers.symptoms || [];
  const batch = db.batch();

  for (const symptom of symptoms) {
    const aggRef = db.collection('analytics').doc('symptomCounts');
    batch.set(
      aggRef,
      { [symptom]: admin.firestore.FieldValue.increment(1) },
      { merge: true }
    );
  }

  const categoryRef = db.collection('analytics').doc('categoryCounts');
  if (answers.primary_concern) {
    batch.set(
      categoryRef,
      { [answers.primary_concern]: admin.firestore.FieldValue.increment(1) },
      { merge: true }
    );
  }

  await batch.commit();

  return { success: true, id: docRef.id };
});

// ─── Get Analytics Data ───────────────────────────────────────────────────────
exports.getAnalytics = onCall({ cors: true }, async () => {
  const [symptomSnap, categorySnap] = await Promise.all([
    db.collection('analytics').doc('symptomCounts').get(),
    db.collection('analytics').doc('categoryCounts').get(),
  ]);

  return {
    symptoms: symptomSnap.exists ? symptomSnap.data() : {},
    categories: categorySnap.exists ? categorySnap.data() : {},
  };
});
