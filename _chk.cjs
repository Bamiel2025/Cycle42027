/* Contrôle rapide de odt.js */
const t = require('fs').readFileSync('app/data/odt.js', 'utf8');
let o = 0, c = 0;
for (const ch of t) { if (ch === '{') o++; if (ch === '}') c++; }
console.log('accolades ' + o + '/' + c);
const styles = ['DocTitle', 'DocMeta', 'SectionTitle', 'Chapeau', 'Problem', 'Consigne',
  'DocBoxTop', 'DocBoxMid', 'DocBoxBottom', 'Question', 'Aide', 'Legende', 'Fig',
  'Correction', 'Bareme', 'Comp', 'WriteLine', 'Cartouche', 'Rappel', 'HeaderPar',
  'FooterPar', 'PageBreak', 'Mpm1', 'TblHead', 'frImg'];
const missing = styles.filter(s => t.indexOf('"' + s + '"') === -1);
console.log('styles nommes : ' + (styles.length - missing.length) + '/' + styles.length +
  (missing.length ? ' MANQUANTS: ' + missing.join(',') : ''));

/* charge dans un contexte navigateur simulé */
const vm = require('vm');
const ctx = vm.createContext({ console, TextEncoder, Uint32Array });
vm.runInContext(t, ctx);
console.log('chargement module : OK');
console.log('  stylesXml        : ' + typeof ctx.stylesXml);
console.log('  automaticStyles  : ' + typeof ctx.automaticStylesXml);
console.log('  makeZip          : ' + typeof ctx.makeZip);
const s = ctx.stylesXml('Titre test', '4e');
console.log('  stylesXml sortie : ' + s.length + ' chars');
['DocTitle', 'Chapeau', 'Problem', 'DocBoxTop', 'Question', 'Bareme', 'Mpm1',
  'HeaderPar', 'FooterPar', 'page-number', 'page-count', '1.8cm', '17.40cm']
  .forEach(k => console.log('    ' + k.padEnd(14) + ' : ' + (s.indexOf(k) !== -1)));
const a = ctx.automaticStylesXml();
['frImg', 'Tbl', 'TblCell', 'TblHead'].forEach(k =>
  console.log('    auto ' + k.padEnd(9) + ' : ' + (a.indexOf(k) !== -1)));
