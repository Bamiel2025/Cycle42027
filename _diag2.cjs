const fs = require('fs');
const src = fs.readFileSync('app/data/odt.js', 'utf8');
let code = src
  .replace(/'(?:[^'\\\n]|\\.)*'/g, "''")
  .replace(/"(?:[^"\\\n]|\\.)*"/g, '""')
  .replace(/`(?:[^`\\]|\\.)*`/g, '``')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\/\/[^\n]*/g, '');
let depth = 0, mn = 99, mx = -99;
const lines = code.split('\n');
lines.forEach(function (l, i) {
  const m = l.match(/^\s*(var\s+\w+\s*=|function\s+\w+|window\.SkillsvtODT|Body\.prototype\.\w+)/);
  if (m) {
    console.log('L' + (i + 1) + ' prof=' + depth + ' :: ' + m[1].slice(0, 45));
    if (depth < mn) mn = depth;
    if (depth > mx) mx = depth;
  }
  for (const ch of l) {
    if (ch === '{') depth++;
    if (ch === '}') depth--;
  }
});
console.log('total lignes = ' + lines.length + ' | prof finale = ' + depth + ' | min=' + mn + ' max=' + mx);
