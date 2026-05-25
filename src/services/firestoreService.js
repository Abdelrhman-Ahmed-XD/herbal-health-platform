import { db } from './firebase.js';
import {
  collection, addDoc, doc, getDoc,
  setDoc, serverTimestamp, increment, onSnapshot,
} from 'firebase/firestore';

const ANALYTICS_CACHE_KEY = 'nabta_analytics_v1';
const ANALYTICS_TTL       = 5  * 60 * 1000;
const VIEWS_CACHE_KEY     = 'nabta_plant_views_v1';
const VIEWS_TTL           = 10 * 60 * 1000;
const VISITS_CACHE_KEY    = 'nabta_site_visits_v1';
const VISITS_TTL          = 10 * 60 * 1000;

// ── Site visitor tracking ─────────────────────────────────────────────────
// Module-level flag: React StrictMode runs effects twice in dev; a real page
// reload re-initialises this module, resetting the flag to false.
let _visitTracked = false;

export const trackSiteVisit = () => {
  if (_visitTracked) return;
  _visitTracked = true;

  // Increment local cache immediately so display updates on this very refresh
  try {
    const raw = JSON.parse(localStorage.getItem(VISITS_CACHE_KEY) || '{"ts":0,"count":0}');
    raw.count = (raw.count || 0) + 1;
    localStorage.setItem(VISITS_CACHE_KEY, JSON.stringify(raw));
  } catch {}

  setDoc(doc(db, 'analytics', 'siteVisits'), { count: increment(1) }, { merge: true })
    .catch(() => {});
};

// Returns instantly from local cache; re-syncs from Firestore only when TTL expires
export const fetchSiteVisits = async () => {
  try {
    const cached = JSON.parse(localStorage.getItem(VISITS_CACHE_KEY) || 'null');
    if (cached?.ts && Date.now() - cached.ts < VISITS_TTL) return cached.count || 0;
  } catch {}

  try {
    const snap = await getDoc(doc(db, 'analytics', 'siteVisits'));
    const count = snap.exists() ? (snap.data().count || 0) : 0;
    localStorage.setItem(VISITS_CACHE_KEY, JSON.stringify({ ts: Date.now(), count }));
    return count;
  } catch {
    try { return JSON.parse(localStorage.getItem(VISITS_CACHE_KEY) || '{"count":0}').count || 0; }
    catch { return 0; }
  }
};

// ── Real-time stats subscription ─────────────────────────────────────────
// Subscribes to all stat docs in real-time. onStats is called with a partial
// object whenever any doc changes. Returns an unsubscribe function.
export const subscribeToSiteStats = (onStats) => {
  const unsubs = [];

  unsubs.push(
    onSnapshot(doc(db, 'analytics', 'siteVisits'),
      snap => onStats({ visitors: snap.exists() ? (snap.data().count || 0) : 0 }),
      () => {}
    )
  );

  unsubs.push(
    onSnapshot(doc(db, 'analytics', 'siteStats'),
      snap => onStats({ questionnaires: snap.exists() ? (snap.data().questionnaireCount || 0) : 0 }),
      () => {}
    )
  );

  unsubs.push(
    onSnapshot(doc(db, 'analytics', 'plantViews'),
      snap => onStats({ plantViews: snap.exists() ? snap.data() : {} }),
      () => {}
    )
  );

  return () => unsubs.forEach(u => u());
};

// ── Plant view tracking ───────────────────────────────────────────────────
export const trackPlantView = (plantId) => {
  // Write localStorage immediately (zero latency for "Most Popular" logic)
  try {
    const v = JSON.parse(localStorage.getItem('plantViews') || '{}');
    v[plantId] = (v[plantId] || 0) + 1;
    localStorage.setItem('plantViews', JSON.stringify(v));
  } catch {}

  // Write Firestore in background — never blocks anything
  setDoc(doc(db, 'analytics', 'plantViews'), { [plantId]: increment(1) }, { merge: true })
    .catch(() => {});
};

// Returns merged (Firestore + localStorage) view counts, cached 10 min
export const fetchPlantViews = async () => {
  const local = (() => {
    try { return JSON.parse(localStorage.getItem('plantViews') || '{}'); } catch { return {}; }
  })();

  try {
    const cached = JSON.parse(localStorage.getItem(VIEWS_CACHE_KEY) || 'null');
    if (cached && Date.now() - cached.ts < VIEWS_TTL) {
      return _mergeViews(cached.data, local);
    }
  } catch {}

  try {
    const snap = await getDoc(doc(db, 'analytics', 'plantViews'));
    const remote = snap.exists() ? snap.data() : {};
    localStorage.setItem(VIEWS_CACHE_KEY, JSON.stringify({ ts: Date.now(), data: remote }));
    return _mergeViews(remote, local);
  } catch {
    return local;
  }
};

const _mergeViews = (remote, local) => {
  const out = { ...remote };
  Object.entries(local).forEach(([k, v]) => { out[k] = Math.max(out[k] || 0, v); });
  return out;
};

// ── Questionnaire save (fire-and-forget) ─────────────────────────────────
export const saveQuestionnaire = (answers) => {
  addDoc(collection(db, 'questionnaireResponses'), {
    answers,
    timestamp: serverTimestamp(),
  }).catch(() => {});

  _updateAnalytics(answers).catch(() => {});
};

const _updateAnalytics = async ({ symptoms = [], primary_concern }) => {
  const writes = [];

  // Always increment the total questionnaire counter
  writes.push(setDoc(
    doc(db, 'analytics', 'siteStats'),
    { questionnaireCount: increment(1) },
    { merge: true },
  ));

  const symUpdates = {};
  symptoms.forEach(s => { symUpdates[s] = increment(1); });
  if (Object.keys(symUpdates).length > 0) {
    writes.push(setDoc(doc(db, 'analytics', 'symptomCounts'), symUpdates, { merge: true }));
  }
  if (primary_concern) {
    writes.push(setDoc(
      doc(db, 'analytics', 'categoryCounts'),
      { [primary_concern]: increment(1) },
      { merge: true },
    ));
  }
  await Promise.all(writes);
};

// ── Analytics for charts ──────────────────────────────────────────────────
export const fetchAnalytics = async () => {
  try {
    const cached = JSON.parse(localStorage.getItem(ANALYTICS_CACHE_KEY) || 'null');
    if (cached && Date.now() - cached.ts < ANALYTICS_TTL) return cached.data;
  } catch {}

  try {
    const [symSnap, catSnap] = await Promise.all([
      getDoc(doc(db, 'analytics', 'symptomCounts')),
      getDoc(doc(db, 'analytics', 'categoryCounts')),
    ]);
    const data = {
      symptoms:   symSnap.exists()  ? symSnap.data()  : {},
      categories: catSnap.exists()  ? catSnap.data()  : {},
    };
    localStorage.setItem(ANALYTICS_CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
    return data;
  } catch {
    return null;
  }
};

export const invalidateAnalyticsCache = () => {
  localStorage.removeItem(ANALYTICS_CACHE_KEY);
  localStorage.removeItem(VIEWS_CACHE_KEY);
  localStorage.removeItem(VISITS_CACHE_KEY);
};
