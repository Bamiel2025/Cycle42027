/* Répare la fin de stylesXml, coupée par une insertion précédente. */
const fs = require('fs');
const P = 'app/data/odt.js';
const L = fs.readFileSync(P, 'utf8').split('\n');

/* on garde jusqu'à la ligne 340 (fin de l'amorce du style PageBreak) */
const head = L.slice(0, 340);

const tail = [
  "    + 'fo:margin-top=\"0cm\" fo:margin-bottom=\"0cm\"/></style:style>'",
  '',
  '    /* Styles de caracteres */',
  "    + '<style:style style:name=\"Bold\" style:family=\"text\">'",
  "    + '<style:text-properties style:font-weight=\"bold\"/></style:style>'",
  "    + '<style:style style:name=\"Italic\" style:family=\"text\">'",
  "    + '<style:text-properties fo:font-style=\"italic\"/></style:style>'",
  "    + '<style:style style:name=\"Mono\" style:family=\"text\">'",
  "    + '<style:text-properties style:font-name=\"Courier New\"/></style:style>'",
  "    + '</office:styles>'",
  '',
  '    /* Mise en page A4 */',
  "    + '<office:automatic-styles>'",
  "    + '<style:page-layout style:name=\"Mpm1\">'",
  "    + '<style:page-layout-properties fo:page-width=\"21cm\" fo:page-height=\"29.7cm\" '",
  "    + 'style:print-orientation=\"portrait\" fo:margin-left=\"' + MARGIN.toFixed(1) + 'cm\" '",
  "    + 'fo:margin-right=\"' + MARGIN.toFixed(1) + 'cm\" fo:margin-top=\"1.5cm\" fo:margin-bottom=\"1.3cm\"/>'",
  "    + '<style:header-style>'",
  "    + '<style:header-footer-properties fo:min-height=\"0.6cm\" '",
  "    + 'fo:margin-bottom=\"0.25cm\"/></style:header-style>'",
  "    + '<style:footer-style>'",
  "    + '<style:header-footer-properties fo:min-height=\"0.5cm\" '",
  "    + 'fo:margin-top=\"0.2cm\"/></style:footer-style>'",
  "    + '</style:page-layout>'",
  "    + '</office:automatic-styles>'",
  '',
  '    /* Pages maitres : en-tete + pied pagine */',
  "    + '<office:master-styles>'",
  "    + '<style:master-page style:name=\"Standard\" style:page-layout-name=\"Mpm1\">'",
  "    + '<style:header>'",
  "    + '<text:p text:style-name=\"HeaderPar\">' + head + '</text:p>'",
  "    + '</style:header>'",
  "    + '<style:footer>'",
  "    + '<text:p text:style-name=\"FooterPar\">' + foot",
  "    + '<text:page-number text:select-page=\"current\" text:page-adjust=\"auto\"/>'",
  "    + ' / <text:page-count/></text:p>'",
  "    + '</style:footer>'",
  "    + '</style:master-page>'",
  "    + '</office:master-styles>'",
  "    + '</office:document-styles>';",
  '}',
  '',
  '/* -------------------------------------------------------------------------',
  '   6. Conversion HTML (corpus enrichi) -> ODF',
  '   ------------------------------------------------------------------------- */',
  ''
];

/* on reprend après l'ancien bloc d'en-tête de section 6 (ligne 342 -> index 341) */
const rest = L.slice(354);
fs.writeFileSync(P, head.concat(tail, rest).join('\n') + '\n', 'utf8');
console.log('stylesXml repare — ' + head.concat(tail, rest).length + ' lignes');
