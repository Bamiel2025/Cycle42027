const fs = require('fs');
const P = 'app/data/odt.js';
const L = fs.readFileSync(P, 'utf8').split('\n');

/* index (0-based) de la bonne ligne 518 : fermeture correcte */
const goodIdx = L.findIndex(l => l.indexOf("this.out.push('<!--SVG_SLOT_'") !== -1);
console.log('bonne ligne de fermeture : index ' + goodIdx + ' (ligne ' + (goodIdx + 1) + ')');
/* le doublon commence juste après */
const dupIdx = L.findIndex((l, i) => i > goodIdx && l.indexOf('Body.prototype.svgPlaceholder = function') !== -1);
console.log('debut du doublon : index ' + dupIdx + ' (ligne ' + (dupIdx + 1) + ')');
const finDoublon = L.findIndex((l, i) => i > dupIdx && l.indexOf('Body.prototype.table = function') !== -1);
console.log('fin du doublon (exclus) : index ' + finDoublon + ' (ligne ' + (finDoublon + 1) + ')');

/* on garde [0..dupIdx-1] + [finDoublon..fin] ; le doublon contient :
   svgPlaceholder dupliqué + h1 h2 pageBreak writeLines bullets register
   -> on les supprime tous car la version correcte existe déjà avant */
const kept = L.slice(0, dupIdx).concat(L.slice(finDoublon));
fs.writeFileSync(P, kept.join('\n'), 'utf8');
console.log('apres suppression : ' + kept.length + ' lignes');
