/**
 * Firestore Seed Script
 * Run once to populate your Firestore database with the plant data.
 * 
 * Usage:
 *   1. Install: npm install firebase-admin
 *   2. Download your service account key from Firebase Console
 *   3. Run: GOOGLE_APPLICATION_CREDENTIALS=./serviceAccount.json node scripts/seedFirestore.js
 */

const admin = require('firebase-admin');

// Initialize with your service account
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: process.env.FIREBASE_PROJECT_ID || 'your-project-id',
});

const db = admin.firestore();

const CATEGORIES = [
  {
    id: 'immunity',
    name: 'Immunity',
    icon: 'shield',
    description: 'Fortify your natural defenses with potent botanical extracts.',
    longDescription: 'Discover nature\'s powerful defenders. This curated selection of medicinal plants has been traditionally utilized to fortify the body\'s natural defenses.',
    tags: ['Medicinal', 'Adaptogen'],
    plants: ['echinacea', 'elderberry', 'astragalus', 'reishi', 'ginger', 'oregano'],
  },
  {
    id: 'digestive',
    name: 'Digestive Health',
    icon: 'nutrition',
    description: 'Soothe and optimize the digestive system.',
    longDescription: 'Support your digestive wellness with time-tested herbal preparations.',
    tags: ['Digestive', 'Culinary'],
    plants: ['ginger', 'peppermint', 'fennel', 'chamomile'],
  },
  {
    id: 'respiratory',
    name: 'Respiratory Health',
    icon: 'air',
    description: 'Support clear airways and healthy lung function.',
    longDescription: 'Breathe easier with botanical support for your respiratory system.',
    tags: ['Medicinal', 'Nervine'],
    plants: ['thyme', 'mullein', 'oregano', 'elderberry'],
  },
  {
    id: 'womens-health',
    name: "Women's Health",
    icon: 'favorite',
    description: 'Botanical allies supporting hormonal balance and vitality.',
    longDescription: 'A thoughtful collection of plants that have supported women\'s health across cultures.',
    tags: ['Adaptogen', 'Nervine'],
    plants: ['vitex', 'ashwagandha', 'chamomile'],
  },
];

const PLANTS_DATA = [
  {
    id: 'echinacea',
    name: 'Echinacea',
    latinName: 'Echinacea purpurea',
    category: 'immunity',
    tags: ['Medicinal', 'Perennial', 'Immunology'],
    shortDescription: 'Renowned for its ability to stimulate the immune system.',
    symptoms: ['Cough', 'Cold', 'Immunity', 'Respiratory'],
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    latinName: 'Withania somnifera',
    category: 'womens-health',
    tags: ['Adaptogen', 'Medicinal'],
    shortDescription: 'A revered ancient herb known for its profound adaptogenic properties.',
    symptoms: ['Stress', 'Fatigue', 'Immunity', 'Anxiety', 'Sleep'],
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  },
  // ... add all plants following the same pattern
];

const TAG_MAPPINGS = {
  IBS: ['peppermint', 'chamomile', 'ginger', 'fennel'],
  Cough: ['thyme', 'mullein', 'elderberry', 'ginger', 'oregano'],
  Constipation: ['ginger', 'fennel', 'peppermint'],
  Immunity: ['echinacea', 'elderberry', 'astragalus', 'reishi', 'oregano'],
  Stress: ['ashwagandha', 'reishi', 'chamomile'],
  Respiratory: ['thyme', 'mullein', 'oregano', 'elderberry'],
  Anxiety: ['chamomile', 'ashwagandha', 'vitex'],
  Sleep: ['chamomile', 'ashwagandha', 'reishi'],
  Fatigue: ['astragalus', 'ashwagandha', 'reishi'],
  Nausea: ['ginger', 'peppermint'],
  PMS: ['vitex', 'chamomile'],
  Cold: ['echinacea', 'elderberry', 'ginger', 'thyme'],
};

async function seed() {
  console.log('🌿 Starting Firestore seed...\n');

  // Seed categories
  console.log('📁 Seeding categories...');
  const catBatch = db.batch();
  for (const cat of CATEGORIES) {
    const ref = db.collection('categories').doc(cat.id);
    catBatch.set(ref, cat);
  }
  await catBatch.commit();
  console.log(`  ✓ ${CATEGORIES.length} categories seeded`);

  // Seed plants
  console.log('🌱 Seeding plants...');
  const plantBatch = db.batch();
  for (const plant of PLANTS_DATA) {
    const ref = db.collection('plants').doc(plant.id);
    plantBatch.set(ref, plant);
  }
  await plantBatch.commit();
  console.log(`  ✓ ${PLANTS_DATA.length} plants seeded`);

  // Seed tag mappings
  console.log('🏷️  Seeding tag mappings...');
  const tagBatch = db.batch();
  for (const [tag, plants] of Object.entries(TAG_MAPPINGS)) {
    const ref = db.collection('tagMappings').doc(tag);
    tagBatch.set(ref, { tag, plants, updatedAt: admin.firestore.FieldValue.serverTimestamp() });
  }
  await tagBatch.commit();
  console.log(`  ✓ ${Object.keys(TAG_MAPPINGS).length} tag mappings seeded`);

  // Initialize analytics counters
  console.log('📊 Initializing analytics...');
  await db.collection('analytics').doc('symptomCounts').set({
    Immunity: 142, Stress: 118, Fatigue: 97, Sleep: 89, IBS: 76, Cough: 63,
  });
  await db.collection('analytics').doc('categoryCounts').set({
    immunity: 35, 'womens-health': 28, digestive: 22, respiratory: 15,
  });
  console.log('  ✓ Analytics initialized');

  console.log('\n✅ Firestore seed complete!');
  process.exit(0);
}

seed().catch(err => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
