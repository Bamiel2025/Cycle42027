const fs = require('fs');
const P = 'app/data/odt.js';
let L = fs.readFileSync(P, 'utf8').split('\n');

/* index 0-based des lignes a reparer */
const iP = L.findIndex(l => l.indexOf('Body.prototype.paras = function') !== -1);
console.log('paras : ligne ' + (iP + 1) + ' = ' + JSON.stringify(L[iP]));
/* remplace les lignes paras (3 lignes) par la version correcte */
L.splice(iP, 3,
  'Body.prototype.paras = function (text, style) {',
  '  var self = this;',
  "  String(text || '').split(/\\n+/).forEach(function (line) {",
  '    if (line.trim()) self.p(line.trim(), style);',
  '  });',
  '};'
);

/* supprime le faux svgPlaceholder (celui qui ne prend pas svgs) */
const iF = L.findIndex(l => l.indexOf('Mémorise un SVG à la position') !== -1);
console.log('faux svgPlaceholder : ligne ' + (iF + 1));
L.splice(iF, 6);  /* commentaire + 5 lignes */

/* supprime le svgPlaceholder dupliqué (le 2e) */
let seen = 0, iD = -1;
L.forEach(function (l, i) {
  if (l.indexOf('Body.prototype.svgPlaceholder = function') !== -1) { seen++; if (seen === 2) iD = i; }
});
console.log('duplon svgPlaceholder : ligne ' + (iD + 1));
if (iD > 0) L.splice(iD - 1, 7);  /* commentaire + 6 lignes */

fs.writeFileSync(P, L.join('\n'), 'utf8');
console.log('ecrit — ' + L.length + ' lignes');
