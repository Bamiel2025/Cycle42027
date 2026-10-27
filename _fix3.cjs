const fs = require('fs');
const P = 'app/data/odt.js';
const L = fs.readFileSync(P, 'utf8').split('\n');

const orig = [
  '/** M\u00e9morise un SVG \u00e0 la position courante (r\u00e9solu par finalizeSvg). */',
  'Body.prototype.svgPlaceholder = function (index, svgs) {',
  '  var el = svgs && svgs[Number(index)];',
  '  if (el && el.outerHTML) this.svgStore[Number(index)] = el.outerHTML;',
  "  this.out.push('<!--SVG_SLOT_' + index + '-->');",
  '};',
  '',
  'Body.prototype.h1 = function (t) { this.p(t, \'SectionTitle\'); };',
  '',
  'Body.prototype.h2 = function (t) { this.p(t, \'H2\'); };',
  '',
  'Body.prototype.pageBreak = function () {',
  '  this.out.push(\'<text:p text:style-name="PageBreak"/>\');',
  '};',
  ''
];

/* remplace le bloc 518..535 (le doublon) par le bloc unique correct */
const start = L.findIndex(l => l.indexOf('Body.prototype.svgPlaceholder = function') !== -1);
const end = L.findIndex(l => l.indexOf('Body.prototype.writeLines = function') !== -1);
console.log('doublon detecte : ' + start + '..' + (end - 1));
L.splice(start, end - start, ...orig);

fs.writeFileSync(P, L.join('\n'), 'utf8');
console.log('fichier ecrit — ' + L.length + ' lignes');
