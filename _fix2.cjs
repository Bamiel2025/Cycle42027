const fs = require('fs');
const P = 'app/data/odt.js';
const L = fs.readFileSync(P, 'utf8').split('\n');

/* lignes 517..525 (index 516..524) : bloc svgPlaceholder pourri */
console.log('AVANT :');
for (let i = 516; i <= 524; i++) console.log((i + 1) + ': ' + JSON.stringify(L[i]));

const fixed = [
  '/** M\u00e9morise un SVG \u00e0 la position courante (r\u00e9solu par finalizeSvg). */',
  'Body.prototype.svgPlaceholder = function (index, svgs) {',
  '  var el = svgs && svgs[Number(index)];',
  '  if (el && el.outerHTML) this.svgStore[Number(index)] = el.outerHTML;',
  "  this.out.push('<!--SVG_SLOT_' + index + '-->');",
  '};'
];
L.splice(516, 9, ...fixed);

console.log('APRES :');
for (let i = 516; i <= 523; i++) console.log((i + 1) + ': ' + JSON.stringify(L[i]));

fs.writeFileSync(P, L.join('\n'), 'utf8');
console.log('fichier ecrit — ' + L.length + ' lignes');
