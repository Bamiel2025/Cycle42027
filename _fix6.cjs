const fs = require('fs');
const P = 'app/data/odt.js';
let L = fs.readFileSync(P, 'utf8').split('\n');

/* 1. remplace le bloc paras pourri (lignes 477-481, index 476-480) */
console.log('AVANT paras :');
for (let i = 476; i <= 480; i++) console.log((i + 1) + ': ' + JSON.stringify(L[i]));
L.splice(476, 5,
  'Body.prototype.paras = function (text, style) {',
  '  var self = this;',
  "  String(text || '').split(/\\n+/).forEach(function (line) {",
  '    if (line.trim()) self.p(line.trim(), style);',
  '  });',
  '};'
);

/* 2. remplace le bloc bullets pourri */
let iB = L.findIndex(l => l.indexOf('Mémorise un SVG à la position') !== -1);
console.log('bullets pourri commence ligne ' + (iB + 1) + ' : ' + JSON.stringify(L[iB]));
L.splice(iB, 6,
  'Body.prototype.bullets = function (items, style) {',
  '  var self = this;',
  '  (items || []).forEach(function (it) {',
  '    var s = String(it);',
  "    self.p(s.charAt(0) === '\\u2022' ? s : '\\u2022 ' + s, style || 'Comp');",
  '  });',
  '};'
);

fs.writeFileSync(P, L.join('\n'), 'utf8');
console.log('ecrit — ' + L.length + ' lignes');
