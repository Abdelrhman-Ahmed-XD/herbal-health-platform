const fs = require('fs');
const content = fs.readFileSync('./src/data/plants.js', 'utf8');

const getHistory = (id) => {
  const start = content.indexOf("'" + id + "': {");
  if (start === -1) return 'NOT FOUND';
  const block = content.slice(start, start + 6000);
  const idx = block.indexOf('\n    history:');
  if (idx === -1) return 'NO FIELD';
  const valStart = block.indexOf("'", idx + 13);
  if (valStart === -1) return 'NO VALUE';
  let i = valStart + 1;
  while (i < block.length) {
    if (block[i] === "'" && block[i-1] !== '\\') break;
    i++;
  }
  return block.slice(valStart + 1, i);
};

const plants = ['aloe-vera','tea-tree','licorice','green-tea','fenugreek','moringa',
  'dill-seed-menstrual','cinnamon-menstrual','lemon','black-seed','black-seed-immunity','garlic-immunity'];

for (const id of plants) {
  console.log('=== ' + id + ' ===');
  console.log(getHistory(id));
  console.log();
}
