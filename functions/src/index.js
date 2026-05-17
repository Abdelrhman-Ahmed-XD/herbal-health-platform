/**
 * Firebase Cloud Functions
 * Secure Gemini API proxy — the API key lives only here (server-side).
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

// ─── Plant database context (mirrors frontend data) ──────────────────────────
const PLANT_CONTEXT = `
You are a knowledgeable botanical health educator for Verdant Lore Botanical Institute.

AVAILABLE PLANTS DATABASE:
- Echinacea (Echinacea purpurea): Immune stimulant, antiviral, anti-inflammatory. Good for: Cough, Cold, Immunity, Respiratory.
- Elderberry (Sambucus nigra): Antiviral, antioxidant-rich. Good for: Cold, Flu, Immunity, Cough.
- Astragalus (Astragalus membranaceus): Adaptogen, immune modulator. Good for: Immunity, Fatigue, Stress, IBS.
- Reishi (Ganoderma lucidum): Adaptogen, nervine, immune modulator. Good for: Immunity, Stress, Sleep, Fatigue.
- Ginger (Zingiber officinale): Digestive aid, anti-inflammatory, circulatory stimulant. Good for: Nausea, IBS, Constipation, Cough, Immunity.
- Oregano (Origanum vulgare): Antimicrobial, antifungal, antioxidant. Good for: Immunity, Cough, Respiratory.
- Peppermint (Mentha piperita): IBS relief, antispasmodic, digestive. Good for: IBS, Constipation, Nausea, Headache.
- Chamomile (Matricaria chamomilla): Anxiolytic, digestive tonic, anti-inflammatory. Good for: IBS, Stress, Sleep, Anxiety, Constipation.
- Ashwagandha (Withania somnifera): Adaptogen, stress reducer, cognitive support. Good for: Stress, Fatigue, Immunity, Anxiety, Sleep.
- Vitex (Vitex agnus-castus): Hormonal balancer, PMS relief. Good for: PMS, Hormonal Imbalance, Irregular Cycles.
- Thyme (Thymus vulgaris): Expectorant, antimicrobial, antispasmodic. Good for: Cough, Respiratory, Cold.
- Mullein (Verbascum thapsus): Demulcent, expectorant, lung tonic. Good for: Cough, Respiratory, Asthma.
- Fennel (Foeniculum vulgare): Carminative, antispasmodic, digestive. Good for: IBS, Gas, Bloating, Constipation.

SYMPTOM CLASSIFICATION TAGS: IBS, Cough, Constipation, Immunity, Stress, Respiratory, Anxiety, Sleep, Fatigue, Nausea, PMS, Cold, Gas, Bloating

STRICT RULES:
1. ONLY reference plants in the database above.
2. NEVER diagnose medical conditions or prescribe treatments.
3. Always end responses with: "⚠️ Educational only. Consult a healthcare professional."
4. Keep responses concise and warm (under 250 words).
5. Format with clear structure using markdown bold for plant names.
6. If asked about anything unrelated to botanical/herbal health, politely redirect.
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

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY.value()}`;

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
