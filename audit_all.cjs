const fs = require('fs');

const plants = fs.readFileSync('./src/data/plants.js', 'utf8');
const ctx = fs.readFileSync('./src/contexts/LanguageContext.jsx', 'utf8');

const fields = [
  'shortDescription','description','history','uses','howToUse',
  'preparation','benefits','symptoms','activeConstituents','moa',
  'suitableAgeGroups','dosage','overdose','sideEffects',
  'contraindications','drugInteractions','storage','factsAndMyths','warnings'
];

// Get all plant IDs
const allIds = [...plants.matchAll(/^\s{2}'([^']+)':\s*\{/gm)].map(m => m[1]);

// Find the ar block
const arStart = ctx.indexOf('export const PLANT_TRANSLATIONS = {');
const arCtx = ctx.slice(arStart);

function getEnBlock(id) {
  const pat = new RegExp("^  '" + id.replace(/-/g,'\\-') + "':\\s*\\{", 'm');
  const m = plants.match(pat);
  if (!m) return '';
  const start = m.index;
  // Find next plant entry
  const rest = plants.slice(start + id.length + 5);
  const nextMatch = rest.search(/^\s{2}'[^']+'\s*:\s*\{/m);
  return nextMatch > 0 ? plants.slice(start, start + id.length + 5 + nextMatch) : plants.slice(start, start + 12000);
}

function getArBlock(id) {
  // Try quoted and unquoted forms
  const q1 = "'" + id + "': {";
  const q2 = id + ': {';
  let pos = arCtx.indexOf(q1);
  if (pos === -1) pos = arCtx.search(new RegExp('(?:^|\\n)\\s{4}' + id.replace(/-/g,'\\-') + '\\s*:\\s*\\{'));
  if (pos === -1) return null;
  const block = arCtx.slice(pos, pos + 12000);
  // Find next ar plant entry
  const nextPat = /\n\s{4}(?:'[a-z]|[a-z][a-zA-Z0-9])[^:]*:\s*\{[\s\S]{0,200}name:/;
  const nm = block.slice(id.length + 5).search(nextPat);
  return nm > 0 ? block.slice(0, id.length + 5 + nm) : block;
}

// Build alias map from post-block assignments
const aliasMap = {};
const aliasMatches = [...ctx.matchAll(/PLANT_TRANSLATIONS\.ar\['([^']+)'\]\s*=\s*PLANT_TRANSLATIONS\.ar\['([^']+)'\]/g)];
aliasMatches.forEach(m => { aliasMap[m[1]] = m[2]; });

const issues = [];
for (const id of allIds) {
  const enBlock = getEnBlock(id);
  // Resolve alias: if this id is aliased to a base id, use the base ar block
  const resolvedId = aliasMap[id] || id;
  const arBlock = getArBlock(resolvedId);

  if (!arBlock) {
    issues.push({ id, status: 'NO_AR_ENTRY' });
    continue;
  }

  const missing = [];
  for (const f of fields) {
    const inEn = new RegExp('\\b' + f + '\\s*:').test(enBlock);
    const inAr = new RegExp('\\b' + f + '\\s*:').test(arBlock);
    if (inEn && !inAr) missing.push(f);
  }
  if (missing.length) issues.push({ id, missing });
}

const noEntry = issues.filter(r => r.status === 'NO_AR_ENTRY');
const missingFields = issues.filter(r => r.missing);

console.log('=== NO Arabic entry ===');
noEntry.forEach(r => console.log(' -', r.id));
console.log('\n=== Missing fields ===');
missingFields.forEach(r => console.log(' -', r.id + ':', r.missing.join(', ')));
console.log('\nTotal issues:', issues.length);
