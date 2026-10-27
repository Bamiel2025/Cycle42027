const fs = require('fs');
const src = fs.readFileSync('app/data/odt.js', 'utf8');
let code = src
  .replace(/'(?:[^'\\]|\\.)*'/g, "''")
  .replace(/"(?:[^"\\]|\\.)*"/g, '""')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\/\/[^\n]*/g, '');
let depth = 0;
const lines = code.split('\n');
lines.forEach(function (l, i) {
  const m = l.match(/^\s*(function\s+\w+|window\.SkillsvtODT|Body\.prototype\.\w+)/);
  if (m) console.log('L' + (i + 1) + ' profondeur=' + depth + ' :: ' + l.trim().slice(0, 55));
  for (const ch of l) {
    if (ch === '{') depth++;
    if (ch === '}') depth--;
  }
});
console.log('profondeur finale = ' + depth);
