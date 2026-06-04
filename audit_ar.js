const fs = require('fs');
const plantsContent = fs.readFileSync('./src/data/plants.js', 'utf8');
const ctxContent = fs.readFileSync('./src/contexts/LanguageContext.jsx', 'utf8');

// Extract plant IDs from plants.js
const plantIds = [...plantsContent.matchAll(/^\s{2}'([^']+)':\s*\{/gm)].map(m => m[1]);

// Fields to check
const checkFields = [
  'shortDescription','description','history','uses','howToUse',
  'preparation','benefits','symptoms','activeConstituents','moa',
  'suitableAgeGroups','dosage','overdose','sideEffects',
  'contraindications','drugInteractions','storage','factsAndMyths'
];

// Extract the ar PLANT_TRANSLATIONS block
const arStart = ctxContent.indexOf('export const PLANT_TRANSLATIONS = {');
const arBlock = ctxContent.slice(arStart);

const results = [];
for (const id of plantIds) {
  // Search for this plant in the ar block - try quoted and unquoted
  const quotedPat = new RegExp("'" + id.replace(/-/g, '\\-') + "'\\s*:\\s*\\{");
  const unquotedPat = new RegExp('(?:^|\\n)\\s+' + id + '\\s*:\\s*\\{');

  let pos = -1;
  let m = arBlock.search(quotedPat);
  if (m !== -1) pos = m;
  else {
    m = arBlock.search(unquotedPat);
    if (m !== -1) pos = m;
  }

  if (pos === -1) {
    results.push({ id, status: 'NO_AR_ENTRY' });
    continue;
  }

  // Get block from this entry to the next entry
  const fromHere = arBlock.slice(pos + id.length + 2);
  // Next entry starts with either 'something': { or something: { at 4-space indent
  const nextMatch = fromHere.search(/\n\s{4}(?:'[a-z]|[a-z][a-zA-Z])[^:]*:\s*\{[\s\n]*name:/);
  const entryBlock = nextMatch > 0 ? arBlock.slice(pos, pos + id.length + 2 + nextMatch) : arBlock.slice(pos, pos + 12000);

  // Check which fields the english plant has and whether ar has them
  const plantPos = plantsContent.search(new RegExp("'" + id.replace(/-/g,'\\-') + "'\\s*:\\s*\\{"));
  const plantBlock = plantPos !== -1 ? plantsContent.slice(plantPos, plantPos + 8000) : '';

  const missing = [];
  for (const field of checkFields) {
    const inPlants = new RegExp('\\b' + field + '\\s*:').test(plantBlock);
    const inAr = new RegExp('\\b' + field + '\\s*:').test(entryBlock);
    if (inPlants && !inAr) missing.push(field);
  }

  if (missing.length > 0) results.push({ id, missing });
}

// Summary
const noEntry = results.filter(r => r.status === 'NO_AR_ENTRY');
const missingFields = results.filter(r => r.missing);

console.log('=== Plants with NO Arabic entry ===');
noEntry.forEach(r => console.log(' -', r.id));
console.log('\n=== Plants with MISSING fields ===');
missingFields.forEach(r => console.log(' -', r.id + ':', r.missing.join(', ')));
console.log('\nTotal issues:', results.length);
