const fs = require('fs');
const content = fs.readFileSync('./src/data/plants.js', 'utf8');

const getHistory = (id) => {
  const start = content.indexOf("'" + id + "': {");
  if (start === -1) return 'NOT FOUND';
  const block = content.slice(start, start + 10000);
  const idx = block.indexOf('history:');
  if (idx === -1) return 'NO FIELD';
  const valStart = block.indexOf("'", idx + 8);
  if (valStart === -1) return 'NO VALUE';
  let i = valStart + 1;
  while (i < block.length) {
    if (block[i] === "'" && block[i-1] !== '\\') break;
    i++;
  }
  return block.slice(valStart + 1, i);
};

const plants = [
  'turmeric-immunity','turmeric','clove','parsley',
  'witch-hazel','halfabar','pygeum','saw-palmetto',
  'stinging-nettle-root','cranberry'
];

for (const id of plants) {
  console.log('=== ' + id + ' ===');
  console.log(getHistory(id));
  console.log();
}
