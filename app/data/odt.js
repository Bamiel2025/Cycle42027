/* ============================================================================
   Export ODT — génération d'un paquet OpenDocument côté navigateur
   ----------------------------------------------------------------------------
   Aucune dépendance externe : le conteneur ZIP et le XML ODF sont écrits
   à la main. Les styles de paragraphes, les couleurs et la géométrie de page
   reproduisent fidèlement ceux du pipeline skillsvt
   (D:\skillsvt\skillsvtfinal\pipeline\odt.py) afin que l'export colle à
   l'identité visuelle habituelle des fiches élève.

   Mise en page reprise de skillsvt :
     page A4, marges 1,8 cm, largeur utile 17,4 cm
     en-tête (titre) + pied de page « page n / N » sur toutes les pages
     styles nommés : DocTitle, DocMeta, SectionTitle, Chapeau, Problem,
       Consigne, DocBoxTop/Mid/Bottom, Question, Aide, Legende, Fig,
       Correction, Bareme, Comp, WriteLine, Cartouche, Rappel
     documents encadrés (fond #F4F7FB, filet #B9C6DA)
     tableaux ODF natifs, en-tête teinté
     figures bornées à 16,4 × 9,5 cm, ratio conservé
   ============================================================================ */

/* Constantes de mise en page (identiques à pipeline/odt.py) */
var PAGE_W = 21.0, PAGE_H = 29.7;
var MARGIN = 1.8;
var USABLE_W = PAGE_W - 2 * MARGIN;      /* 17.4 cm */
var MAX_FIG_W = 16.4;
var MAX_FIG_H = 9.5;

var FONT_BODY = 'Arial';
var INK = '#1F2937';
var MUTED = '#6B7280';
var ACCENT = '#1F3864';
var BOX_BG = '#F4F7FB';
var BOX_BG_ALT = '#EEF3FA';
var RULE = '#B9C6DA';
var TBL_BORDER = '#8FA3BF';
var TBL_HEAD_BG = '#DCE6F2';
var MIMETYPE = 'application/vnd.oasis.opendocument.text';

/* -------------------------------------------------------------------------
   1. CRC-32 (requis par le format ZIP)
   ------------------------------------------------------------------------- */
var CRC_TABLE = (function () {
  var t = new Uint32Array(256);
  for (var n = 0; n < 256; n++) {
    var c = n;
    for (var k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(bytes) {
  var c = 0xFFFFFFFF;
  for (var i = 0; i < bytes.length; i++) {
    c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
  }
  return (c ^ 0xFFFFFFFF) >>> 0;
}

/* -------------------------------------------------------------------------
   2. Écriture little-endian + assemblage d'octets
   ------------------------------------------------------------------------- */
function u16(n) { return [n & 0xFF, (n >>> 8) & 0xFF]; }
function u32(n) { return [n & 0xFF, (n >>> 8) & 0xFF, (n >>> 16) & 0xFF, (n >>> 24) & 0xFF]; }

function concat(parts) {
  var total = 0, i;
  for (i = 0; i < parts.length; i++) total += parts[i].length;
  var out = new Uint8Array(total), off = 0;
  for (i = 0; i < parts.length; i++) { out.set(parts[i], off); off += parts[i].length; }
  return out;
}

function utf8(str) {
  return new TextEncoder().encode(str);
}

function dosTime(date) {
  var time = (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1);
  var d = (((date.getFullYear() - 1980) & 0x7F) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time: time, date: d };
}

/** Archive ZIP sans compression (méthode « stored »).
 *  entries = [{ name, data:Uint8Array }]
 *  « mimetype » doit rester en première position et non compressée :
 *  c'est ce qu'attendent les lecteurs ODF pour reconnaître le paquet.
 */
function makeZip(entries) {
  var now = dosTime(new Date());
  var local = [], central = [], offset = 0;

  for (var i = 0; i < entries.length; i++) {
    var e = entries[i];
    var nameBytes = utf8(e.name);
    var data = e.data;
    var crc = crc32(data);
    var method = 0;

    var header = concat([
      u32(0x04034B50),
      u16(20),
      u16(0x0800),
      u16(method),
      u16(now.time), u16(now.date),
      u32(crc),
      u32(data.length),
      u32(data.length),
      u16(nameBytes.length),
      u16(0)
    ]);
    local.push(header, nameBytes, data);

    central.push(concat([
      u32(0x02014B50),
      u16(20), u16(20),
      u16(0x0800), u16(method),
      u16(now.time), u16(now.date),
      u32(crc),
      u32(data.length), u32(data.length),
      u16(nameBytes.length),
      u16(0), u16(0),
      u16(0), u16(0),
      u32(0),
      u32(offset)
    ]), nameBytes);

    offset += header.length + nameBytes.length + data.length;
  }

  var cd = concat(central);
  var eocd = concat([
    u32(0x06054B50),
    u16(0), u16(0),
    u16(entries.length), u16(entries.length),
    u32(cd.length),
    u32(offset),
    u16(0)
  ]);
  return concat(local.concat([cd, eocd]));
}

/* -------------------------------------------------------------------------
   3. Échappement XML
   ------------------------------------------------------------------------- */
function xmlEscape(s) {
  return String(s === undefined || s === null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function xmlNBSP(s) {
  return xmlEscape(s).replace(/\u00A0/g, ' ');
}


/* -------------------------------------------------------------------------
   4. Styles automatiques (figures, tableaux)
   ------------------------------------------------------------------------- */
function automaticStylesXml() {
  return ''
    + '<style:style style:name="frImg" style:family="graphic">'
    + '<style:graphic-properties draw:fill="none" text:anchor-type="as-char" '
    + 'svg:vertical-align="middle" style:wrap="none" '
    + 'fo:margin-left="0cm" fo:margin-right="0cm" fo:margin-top="0.1cm" '
    + 'fo:margin-bottom="0.05cm"/></style:style>'
    + '<style:style style:name="frLogo" style:family="graphic">'
    + '<style:graphic-properties draw:fill="none" text:anchor-type="as-char" '
    + 'svg:vertical-align="middle" style:wrap="none"/></style:style>'
    + '<style:style style:name="Tbl" style:family="table">'
    + '<style:table-properties fo:margin-top="0.15cm" '
    + 'fo:margin-bottom="0.2cm"/></style:style>'
    + '<style:style style:name="Tbl.A" style:family="table-column"/>'
    + '<style:style style:name="TblCell" style:family="table-cell">'
    + '<style:table-cell-properties fo:border="0.05pt solid ' + TBL_BORDER + '" '
    + 'fo:padding="0.08cm"/></style:style>'
    + '<style:style style:name="TblHead" style:family="table-cell">'
    + '<style:table-cell-properties fo:border="0.05pt solid ' + TBL_BORDER + '" '
    + 'fo:background-color="' + TBL_HEAD_BG + '" fo:padding="0.08cm"/></style:style>';
}

/* -------------------------------------------------------------------------
   5. Feuille de styles nommés + mise en page + en-tête / pied
   ------------------------------------------------------------------------- */
function stylesXml(headerText, footerText) {
  var head = '<text:span text:style-name="Bold">SVT</text:span>'
    + (headerText ? ' \u2014 ' + xmlEscape(headerText) : '');
  var foot = (footerText ? xmlEscape(footerText) + ' \u2014 ' : '') + 'page ';

  return ''
    + '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<office:document-styles '
    + 'xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" '
    + 'xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" '
    + 'xmlns:fo="urn:oasis:names:tc:xsl-fo-compatible:1.0" '
    + 'xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" '
    + 'xmlns:svg="urn:oasis:names:tc:svg-compatible:1.0" '
    + 'office:version="1.2">'
    + '<office:styles>'
    + '<style:default-style style:family="paragraph">'
    + '<style:paragraph-properties style:line-break="strict" style:writing-mode="page"/>'
    + '<style:text-properties style:font-name="' + FONT_BODY + '" fo:font-size="10pt" '
    + 'fo:language="fr" fo:country="FR"/></style:default-style>'

    /* Corps de texte */
    + '<style:style style:name="Standard" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.14cm" '
    + 'fo:line-height="115%" fo:text-align="justify"/>'
    + '<style:text-properties fo:font-size="10pt" fo:color="' + INK + '"/></style:style>'

    /* Titre (bandeau) */
    + '<style:style style:name="DocTitle" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.05cm" '
    + 'fo:padding="0.12cm" fo:background-color="' + BOX_BG_ALT + '" '
    + 'fo:border="0.08pt solid ' + RULE + '" fo:text-align="center"/>'
    + '<style:text-properties fo:font-size="14pt" style:font-weight="bold" '
    + 'fo:color="' + ACCENT + '"/></style:style>'

    /* Niveau / durée */
    + '<style:style style:name="DocMeta" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.28cm" '
    + 'fo:text-align="center"/>'
    + '<style:text-properties fo:font-size="9pt" fo:color="' + MUTED + '" '
    + 'fo:font-style="italic"/></style:style>'

    /* Titre de section */
    + '<style:style style:name="SectionTitle" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.3cm" '
    + 'fo:padding="0.1cm" fo:border-bottom="0.1pt solid ' + ACCENT + '"/>'
    + '<style:text-properties fo:font-size="13pt" style:font-weight="bold" '
    + 'fo:color="' + ACCENT + '"/></style:style>'


    /* Chapeau / contexte */
    + '<style:style style:name="Chapeau" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.18cm" '
    + 'fo:line-height="118%" fo:text-align="justify" '
    + 'fo:padding="0.12cm" fo:background-color="' + BOX_BG + '" '
    + 'fo:border-left="0.12pt solid ' + ACCENT + '"/>'
    + '<style:text-properties fo:font-size="10pt"/></style:style>'

    /* Problématique */
    + '<style:style style:name="Problem" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0.18cm" '
    + 'fo:margin-bottom="0.22cm" fo:text-align="justify" fo:padding="0.14cm" '
    + 'fo:background-color="#FFF7E6" fo:border="0.06pt solid #E0C489"/>'
    + '<style:text-properties fo:font-size="10.5pt" style:font-weight="bold"/></style:style>'

    /* Consigne globale */
    + '<style:style style:name="Consigne" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0.1cm" '
    + 'fo:margin-bottom="0.2cm" fo:text-align="justify"/>'
    + '<style:text-properties fo:font-size="10pt"/></style:style>'

    /* Encadré document : haut / milieu / bas */
    + '<style:style style:name="DocBoxTop" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0.35cm" '
    + 'fo:margin-bottom="0cm" fo:padding="0.1cm 0.14cm 0.1cm 0.14cm" '
    + 'fo:background-color="' + BOX_BG + '" fo:border-top="0.08pt solid ' + RULE + '" '
    + 'fo:border-left="0.08pt solid ' + RULE + '" fo:border-right="0.08pt solid ' + RULE + '"/>'
    + '<style:text-properties fo:font-size="10.5pt" style:font-weight="bold" '
    + 'fo:color="' + ACCENT + '"/></style:style>'
    + '<style:style style:name="DocBoxMid" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0cm" '
    + 'fo:padding="0cm 0.14cm 0cm 0.14cm" '
    + 'fo:background-color="' + BOX_BG + '" fo:border-left="0.08pt solid ' + RULE + '" '
    + 'fo:border-right="0.08pt solid ' + RULE + '" fo:text-align="justify"/>'
    + '<style:text-properties fo:font-size="9.5pt"/></style:style>'
    + '<style:style style:name="DocBoxBottom" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.12cm" '
    + 'fo:padding="0cm 0.14cm 0.1cm 0.14cm" '
    + 'fo:background-color="' + BOX_BG + '" fo:border-bottom="0.08pt solid ' + RULE + '" '
    + 'fo:border-left="0.08pt solid ' + RULE + '" fo:border-right="0.08pt solid ' + RULE + '"/>'
    + '<style:text-properties fo:font-size="8pt" fo:font-style="italic" '
    + 'fo:color="' + MUTED + '"/></style:style>'

    /* Question / Aide */
    + '<style:style style:name="Question" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0.2cm" '
    + 'fo:margin-bottom="0.06cm" fo:line-height="115%" fo:padding-left="0.35cm"/>'

    /* Correction / Barème */
    + '<style:style style:name="Correction" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0.06cm" '
    + 'fo:margin-bottom="0.16cm" fo:line-height="115%" '
    + 'fo:padding-left="0.35cm" fo:text-align="justify"/>'
    + '<style:text-properties fo:font-size="9.5pt"/></style:style>'
    + '<style:style style:name="Bareme" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" '
    + 'fo:margin-bottom="0.06cm" fo:padding-left="0.35cm">'
    + '<style:tab-stops><style:tab-stop style:position="' + USABLE_W.toFixed(2) + 'cm" '
    + 'style:type="right"/></style:tab-stops></style:paragraph-properties>'
    + '<style:text-properties fo:font-size="9pt" fo:color="' + MUTED + '" '
    + 'fo:font-style="italic"/></style:style>'

    /* Compétences / sous-titre */
    + '<style:style style:name="Comp" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" '
    + 'fo:margin-bottom="0.1cm" fo:padding-left="0.5cm" fo:line-height="118%"/>'
    + '<style:text-properties fo:font-size="9.5pt"/></style:style>'
    + '<style:style style:name="H2" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0.3cm" '
    + 'fo:margin-bottom="0.12cm" fo:padding-left="0cm"/>'
    + '<style:text-properties fo:font-size="11pt" style:font-weight="bold" '
    + 'fo:color="' + ACCENT + '"/></style:style>'

    /* Lignes d'écriture / Cartouche / Rappel */
    + '<style:style style:name="WriteLine" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" '
    + 'fo:margin-bottom="0cm" fo:line-height="150%" '
    + 'fo:border-bottom="0.04pt solid #C9D3E3"/></style:style>'
    + '<style:style style:name="Cartouche" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" '
    + 'fo:margin-bottom="0.25cm" fo:padding="0.14cm" '
    + 'fo:border="0.06pt solid ' + RULE + '" fo:background-color="' + BOX_BG + '"/>'
    + '<style:text-properties fo:font-size="9.5pt"/></style:style>'
    + '<style:style style:name="Rappel" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0.2cm" '
    + 'fo:margin-bottom="0.22cm" fo:padding="0.14cm" '
    + 'fo:border="0.06pt dashed #D9B061" fo:background-color="#FFFDF5" '
    + 'fo:text-align="justify"/>'
    + '<style:text-properties fo:font-size="9pt"/></style:style>'

    /* En-tête / pied de page */
    + '<style:style style:name="HeaderPar" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" '
    + 'fo:margin-bottom="0cm" fo:text-align="center" '
    + 'fo:border-bottom="0.04pt solid ' + RULE + '"/>'
    + '<style:text-properties fo:font-size="8pt" fo:color="' + MUTED + '"/></style:style>'
    + '<style:style style:name="FooterPar" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" '
    + 'fo:margin-bottom="0cm" fo:text-align="center"/>'
    + '<style:text-properties fo:font-size="8pt" fo:color="' + MUTED + '"/></style:style>'

    /* Aide (coup de pouce) */
    + '<style:style style:name="Aide" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" '
    + 'fo:margin-bottom="0.16cm" fo:padding-left="0.7cm"/>'
    + '<style:text-properties fo:font-size="9pt" fo:font-style="italic" '
    + 'fo:color="' + MUTED + '"/></style:style>'

    /* Légende */
    + '<style:style style:name="Legende" style:family="paragraph">'
    + '<style:paragraph-properties fo:margin-top="0cm" '
    + 'fo:margin-bottom="0.18cm" fo:text-align="center"/>'
    + '<style:text-properties fo:font-size="8.5pt" fo:font-style="italic" '
    + 'fo:color="' + MUTED + '"/></style:style>'

    /* Saut de page */
    + '<style:style style:name="PageBreak" style:family="paragraph">'
    + '<style:paragraph-properties fo:break-before="page" '
    + 'fo:margin-top="0cm" fo:margin-bottom="0cm"/></style:style>'

    /* Styles de caracteres */
    + '<style:style style:name="Bold" style:family="text">'
    + '<style:text-properties style:font-weight="bold"/></style:style>'
    + '<style:style style:name="Italic" style:family="text">'
    + '<style:text-properties fo:font-style="italic"/></style:style>'
    + '<style:style style:name="Mono" style:family="text">'
    + '<style:text-properties style:font-name="Courier New"/></style:style>'
    + '</office:styles>'

    /* Mise en page A4 */
    + '<office:automatic-styles>'
    + '<style:page-layout style:name="Mpm1">'
    + '<style:page-layout-properties fo:page-width="21cm" fo:page-height="29.7cm" '
    + 'style:print-orientation="portrait" fo:margin-left="' + MARGIN.toFixed(1) + 'cm" '
    + 'fo:margin-right="' + MARGIN.toFixed(1) + 'cm" fo:margin-top="1.5cm" fo:margin-bottom="1.3cm"/>'
    + '<style:header-style>'
    + '<style:header-footer-properties fo:min-height="0.6cm" '
    + 'fo:margin-bottom="0.25cm"/></style:header-style>'
    + '<style:footer-style>'
    + '<style:header-footer-properties fo:min-height="0.5cm" '
    + 'fo:margin-top="0.2cm"/></style:footer-style>'
    + '</style:page-layout>'
    + '</office:automatic-styles>'

    /* Pages maitres : en-tete + pied pagine */
    + '<office:master-styles>'
    + '<style:master-page style:name="Standard" style:page-layout-name="Mpm1">'
    + '<style:header>'
    + '<text:p text:style-name="HeaderPar">' + head + '</text:p>'
    + '</style:header>'
    + '<style:footer>'
    + '<text:p text:style-name="FooterPar">' + foot
    + '<text:page-number text:select-page="current" text:page-adjust="auto"/>'
    + ' / <text:page-count/></text:p>'
    + '</style:footer>'
    + '</style:master-page>'
    + '</office:master-styles>'
    + '</office:document-styles>';
}

/* -------------------------------------------------------------------------
   6. Conversion HTML (corpus enrichi) -> ODF
   ------------------------------------------------------------------------- */

/** Extrait le contenu textuel d'un nœud en conservant gras/italique. */
function inlineToOdf(node) {
  var out = '';
  node.childNodes.forEach(function (ch) {
    if (ch.nodeType === 3) {                       /* nœud texte */
      out += xmlNBSP(ch.nodeValue);
    } else if (ch.nodeType === 1) {                /* élément */
      var tag = ch.tagName.toLowerCase();
      var inner = inlineToOdf(ch);
      if (!inner) return;
      if (tag === 'b' || tag === 'strong') {
        out += '<text:span text:style-name="Bold">' + inner + '</text:span>';
      } else if (tag === 'i' || tag === 'em') {
        out += '<text:span text:style-name="Italic">' + inner + '</text:span>';
      } else if (tag === 'br') {
        out += '<text:line-break/>';
      } else {
        out += inner;                              /* div, span, p… */
      }
    }
  });
  return out;
}

/** Extrait les lignes d'un tableau HTML. */
function htmlTableToRows(tbl) {
  var rows = [];
  tbl.querySelectorAll('tr').forEach(function (tr) {
    var cells = [];
    tr.querySelectorAll('th,td').forEach(function (td) {
      cells.push((td.textContent || '').replace(/\s+/g, ' ').trim());
    });
    if (cells.length && cells.some(function (c) { return c; })) rows.push(cells);
  });
  return rows;
}

/** Convertit un fragment HTML en instructions ODF exploitables. */
function htmlToOdf(html, body) {
  var host = document.createElement('div');
  host.innerHTML = String(html || '');

  /* 1. on retire les SVG pour les traiter comme figures */
  var svgs = [];
  host.querySelectorAll('svg').forEach(function (svg, i) {
    svgs.push(svg);
    var ph = document.createElement('div');
    ph.setAttribute('data-svg-slot', String(i));
    ph.style.display = 'none';
    svg.parentNode.insertBefore(ph, svg);
    svg.parentNode.removeChild(svg);
  });

  /* 2. on parcourt le reste dans l'ordre du document */
  host.childNodes.forEach(function (node) {
    if (node.nodeType === 3) {
      var txt = (node.nodeValue || '').replace(/\s+/g, ' ').trim();
      if (txt) body.paras(txt, 'DocBoxMid');
      return;
    }
    if (node.nodeType !== 1) return;

    var tag = node.tagName.toLowerCase();

    if (tag === 'table') {
      var rows = htmlTableToRows(node);
      if (rows.length) {
        body.out.push('<text:p text:style-name="Fig"/>');
        body.table(rows, true);
      }
      return;
    }
    if (tag === 'div' && node.hasAttribute('data-svg-slot')) {
      body.svgPlaceholder(Number(node.getAttribute('data-svg-slot')), svgs);
      return;
    }
Body.prototype.paras = function (text, style) {
  var self = this;
  String(text || '').split(/\n+/).forEach(function (line) {
    if (line.trim()) self.p(line.trim(), style);
  });
};
    var inline = inlineToOdf(node);
    if (inline.trim()) body.pRich(inline, 'DocBoxMid');
  });

  return svgs;
}

/* -------------------------------------------------------------------------
   7. Accumulateur de corps de document
   ------------------------------------------------------------------------- */
function Body() {
  this.out = [];
  this.pics = {};        /* nom -> { bytes, mime } */
  this.svgStore = {};    /* index -> chaîne SVG */
  this._lastSource = '';
  this._n = 0;
  this._fig = 0;
}

Body.prototype.raw = function (xml) { this.out.push(xml); };

Body.prototype.p = function (text, style) {
  this.out.push('<text:p text:style-name="' + (style || 'Standard') + '">'
    + xmlNBSP(text) + '</text:p>');
};

Body.prototype.pRich = function (inner, style) {
  this.out.push('<text:p text:style-name="' + (style || 'Standard') + '">'
    + inner + '</text:p>');
};

Body.prototype.paras = function (text, style) {
  var self = this;
  String(text || '').split(/\n+/).forEach(function (line) {
    if (line.trim()) self.p(line.trim(), style);
  });
};
    if (line.trim()) self.p(line.trim(), style);
};

Body.prototype.h1 = function (t) { this.p(t, 'SectionTitle'); };

Body.prototype.h2 = function (t) { this.p(t, 'H2'); };

Body.prototype.pageBreak = function () {
  this.out.push('<text:p text:style-name="PageBreak"/>');
};

Body.prototype.writeLines = function (n) {
  for (var i = 0; i < (n || 3); i++) {
    this.out.push('<text:p text:style-name="WriteLine"><text:s/></text:p>');
  }
};

Body.prototype.bullets = function (items, style) {
  var self = this;
  (items || []).forEach(function (it) {
    var s = String(it);
    self.p(s.charAt(0) === '\u2022' ? s : '\u2022 ' + s, style || 'Comp');
  });
};

/** Enregistre une image et renvoie son href ODF. */
Body.prototype.register = function (name, bytes, mime) {
  this._n += 1;
  var clean = String(name).replace(/[^A-Za-z0-9._-]/g, '_').slice(0, 40);
  var final = 'img_' + String(this._n).padStart(3, '0') + '_' + clean;
  this.pics[final] = { bytes: bytes, mime: mime };
  return 'Pictures/' + final;
};

Body.prototype.bullets = function (items, style) {
  var self = this;
  (items || []).forEach(function (it) {
    var s = String(it);
    self.p(s.charAt(0) === '\u2022' ? s : '\u2022 ' + s, style || 'Comp');
  });
};
  rows = rows.slice(0, 40);
  var ncol = 0;
  rows.forEach(function (r) { if (r.length > ncol) ncol = r.length; });

  /* largeurs proportionnelles à la largeur utile */
  var base = USABLE_W / ncol;
  var cols = [];
  for (var i = 0; i < ncol; i++) cols.push(base);
  var total = 0;
  cols.forEach(function (c) { total += c; });
  cols = cols.map(function (c) { return c / total * (USABLE_W - 0.05 * ncol); });

  var x = ['<table:table table:name="Tbl' + this._n + '" table:style-name="Tbl">'];
  cols.forEach(function () { x.push('<table:table-column table:style-name="Tbl.A"/>'); });

  rows.forEach(function (r, ri) {
    x.push('<table:table-row>');
    for (var j = 0; j < ncol; j++) {
      var cell = j < r.length ? String(r[j]) : '';
      var st = (header && ri === 0) ? 'TblHead' : 'TblCell';
      var inner = (header && ri === 0)
        ? '<text:span text:style-name="Bold">' + xmlNBSP(cell) + '</text:span>'
        : xmlNBSP(cell);
      x.push('<table:table-cell table:style-name="' + st + '">'
        + '<text:p text:style-name="Standard">' + inner + '</text:p>'
        + '</table:table-cell>');
    }
    x.push('</table:table-row>');
  });

/* -------------------------------------------------------------------------
   8. Rendu d'un document (encadré DocBoxTop / Mid / Bottom)
   ------------------------------------------------------------------------- */
Body.prototype.documentBlock = function (doc, index) {
  var numero = doc.numero || (index + 1);
  var titre = doc.titre || '';
  if (numero && !/^\s*document/i.test(titre)) {
    titre = 'Document ' + numero + ' : ' + titre;
  }
  this.p(titre, 'DocBoxTop');

  var self = this;
  var svgs = htmlToOdf(doc.contenu, this);

  /* source en pied d'encadré */
  var src = this._lastSource || '';
  this.p(src ? 'Source : ' + src : '', 'DocBoxBottom');
  return svgs;
};

/* -------------------------------------------------------------------------
   9. Assembleur du paquet ODF (.odt)
   ------------------------------------------------------------------------- */
function contentXml(body) {
  return ''
    + '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<office:document-content '
    + 'xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" '
    + 'xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" '
    + 'xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" '
    + 'xmlns:fo="urn:oasis:names:tc:xsl-fo-compatible:1.0" '
    + 'xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" '
    + 'xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" '
    + 'xmlns:svg="urn:oasis:names:tc:svg-compatible:1.0" '
    + 'xmlns:xlink="http://www.w3.org/1999/xlink" '
    + 'office:version="1.2">'
    + '<office:automatic-styles>' + automaticStylesXml() + '</office:automatic-styles>'
    + '<office:body><office:text>' + body.xml() + '</office:text></office:body>'
    + '</office:document-content>';
}

function manifestXml(pics) {
  var l = ['<?xml version="1.0" encoding="UTF-8"?>',
    '<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">',
    '<manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="' + MIMETYPE + '"/>',
    '<manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/>',
    '<manifest:file-entry manifest:full-path="styles.xml" manifest:media-type="text/xml"/>',
    '<manifest:file-entry manifest:full-path="meta.xml" manifest:media-type="text/xml"/>'];
  Object.keys(pics).forEach(function (name) {
    l.push('<manifest:file-entry manifest:full-path="Pictures/' + name + '" '
      + 'manifest:media-type="' + pics[name].mime + '"/>');
  });
  l.push('</manifest:manifest>');
  return l.join('\n');
}

function metaXml(title) {
  return '<?xml version="1.0" encoding="UTF-8"?>\n'

/* -------------------------------------------------------------------------
   10. Figures SVG -> ODF, questions, assemblage du paquet
   ------------------------------------------------------------------------- */
function fitSize(w, h, maxW, maxH) {
  var r = Math.min(maxW / w, maxH / h);
  return [w * r, h * r];
}

/** Remplace les marqueurs SVG par de vraies figures ODF. */
Body.prototype.finalizeSvg = function () {
  var self = this;
  return this.xml().replace(/<!--SVG_SLOT_(\d+)-->/g, function (m, idx) {
    var svgStr = self.svgStore && self.svgStore[Number(idx)];
    if (!svgStr) return '';
    svgStr = svgStr.replace(/^<svg/i, '<svg xmlns="http://www.w3.org/2000/svg"');
    var vb = svgStr.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    var w = vb ? parseFloat(vb[1]) : 600;
    var h = vb ? parseFloat(vb[2]) : 320;
    svgStr = svgStr.replace(/^<svg/i, '<svg width="' + w + '" height="' + h + '"');
    var href = self.register('figure.svg',
      utf8('<?xml version="1.0" encoding="UTF-8"?>\n' + svgStr),
      'image/svg+xml');
    var dim = fitSize(w, h, MAX_FIG_W, MAX_FIG_H);
    self._fig += 1;
    return '<text:p text:style-name="Fig">'
      + '<draw:frame draw:style-name="frImg" draw:name="fig' + self._fig + '" '
      + 'svg:width="' + dim[0].toFixed(2) + 'cm" '
      + 'svg:height="' + dim[1].toFixed(2) + 'cm" text:anchor-type="as-char">'
      + '<draw:image xlink:type="simple" xlink:show="embed" '
      + 'xlink:actuate="onLoad" xlink:href="' + href + '"/>'
      + '</draw:frame></text:p>';
  });
};

/** Une question : numéro, verbe d'action, points, puis lignes de réponse. */
Body.prototype.question = function (q, n) {
  if (!q || !q.q) return;
  var pts = q.pts ? ' (' + q.pts + ' pt' + (q.pts > 1 ? 's' : '') + ')' : '';
  var inner = '<text:span text:style-name="Bold">' + n + '.</text:span> '
    + xmlNBSP(q.q)

/* -------------------------------------------------------------------------
   11. Construction de l'activité complète
   ------------------------------------------------------------------------- */
function buildOdt(act) {
  act = act || {};
  var b = new Body();
  var niveau = act.niveau || '';
  var titre = act.titre || 'Activité SVT';

  b.p(titre, 'DocTitle');
  var meta = [];
  if (niveau) meta.push(niveau);
  if (act.duree) meta.push(act.duree);
  if (meta.length) b.p(meta.join('   |   '), 'DocMeta');

  if (act.contexte) b.paras(act.contexte, 'Chapeau');
  if (act.problematique) b.p(act.problematique, 'Problem');

  if (act.voie1_autonome && act.voie1_autonome.consigne) {
    b.h2(act.voie1_autonome.titre || 'Tâche complexe');
    b.paras(act.voie1_autonome.consigne, 'Consigne');
  }

  b.h1('Documents');
  (act.documents || []).forEach(function (d, i) {
    b._lastSource = extractSource(d.contenu);
    b.documentBlock(d, i);
  });

  var qs = act.questions || [];
  if (qs.length) {
    b.h1('Questions');
    var total = 0;
    qs.forEach(function (q, i) {
      b.question(q, i + 1);
      if (q.pts) total += q.pts;
    });
    if (total) {
      b.pRich('<text:span text:style-name="Bold">Total : </text:span>'
        + total + ' points', 'DocMeta');
    }
  }

  /* ---- fiche professeur, sur une page dédiée ---- */
  b.pageBreak();
  b.h1('Fiche professeur');

  if (act.obstacle) {
    b.h2('Obstacle épistémologique ciblé');
    if (act.obstacle.conception_fausse) {
      b.pRich('<text:span text:style-name="Bold">Conception initiale fausse : </text:span>'
        + xmlNBSP(act.obstacle.conception_fausse), 'Correction');
    }
    if (act.obstacle.rupture_didactique) {
      b.pRich('<text:span text:style-name="Bold">Rupture didactique : </text:span>'
        + xmlNBSP(act.obstacle.rupture_didactique), 'Correction');
    }
  }

  if (act.voie1_autonome && act.voie1_autonome.coups_de_pouce) {
    b.h2('Coups de pouce (différenciation)');
    var cdp = act.voie1_autonome.coups_de_pouce;
    [['Niveau 1 \u2014 Méthode', cdp.niveau_1_methode],
     ['Niveau 2 \u2014 Indice', cdp.niveau_2_indice],
     ['Niveau 3 \u2014 Notion', cdp.niveau_3_notion]].forEach(function (pr) {
      if (pr[1]) {
        b.pRich('<text:span text:style-name="Bold">' + pr[0] + ' : </text:span>'
          + xmlNBSP(pr[1]), 'Aide');
      }
    });
  }

  if (act.voie2_guidee && act.voie2_guidee.etapes) {
    b.h2(act.voie2_guidee.titre || 'Parcours guidé pas-à-pas');
    act.voie2_guidee.etapes.forEach(function (e) {
      if (!e.consigne) return;
      b.pRich('<text:span text:style-name="Bold">Étape ' + (e.id || '') + '</text:span>'
        + (e.competence ? ' [' + xmlEscape(e.competence) + ']' : '')
        + (e.points ? ' \u2014 ' + e.points + ' points' : '')
        + ' : ' + xmlNBSP(e.consigne), 'Correction');
    });
  }

  if (act.grille_lsu) {
    b.h2('Grille critériée d\u2019évaluation (LSU)');
    var rows = [['Compétence', 'MI', 'MF', 'MS', 'TBM']];
    Object.keys(act.grille_lsu).forEach(function (k) {
      var r = act.grille_lsu[k] || {};
      rows.push([String(k).replace('_', '.'),
        r.MI || '', r.MF || '', r.MS || '', r.TBM || '']);
    });
    b.table(rows, true);
  }

  var srcs = act.sources || [];
  if (srcs.length) {
    b.h2('Sources des documents');
    b.bullets(srcs, 'Correction');
  }

  return assemblerPaquet(b, titre, niveau);
}

/** Assemble le paquet .odt (mimetype en premier, non compressé). */
function assemblerPaquet(b, titre, niveau) {
  var content = contentXml({ xml: b.finalizeSvg() });
  var entries = [
    { name: 'mimetype', data: utf8(MIMETYPE) },
    { name: 'META-INF/manifest.xml', data: utf8(manifestXml(b.pics)) },
    { name: 'content.xml', data: utf8(content) },
    { name: 'styles.xml', data: utf8(stylesXml(titre, niveau)) },
    { name: 'meta.xml', data: utf8(metaXml(titre)) }
  ];
  Object.keys(b.pics).forEach(function (name) {
    entries.push({ name: 'Pictures/' + name, data: b.pics[name].bytes });
  });
  return makeZip(entries);
}

/** Télécharge le .odt dans le navigateur. */
function downloadOdt(act, filename) {
  var bytes = buildOdt(act);
  var blob = new Blob([bytes], { type: MIMETYPE });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename || 'activite.odt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  return bytes.length;
}

window.SkillsvtODT = {
  buildOdt: buildOdt,
  downloadOdt: downloadOdt,
  stylesXml: stylesXml,
  automaticStylesXml: automaticStylesXml,
  makeZip: makeZip,
  contentXml: contentXml,
  manifestXml: manifestXml,
  metaXml: metaXml,
  extractSource: extractSource,
  fitSize: fitSize
};

    + '<text:span text:style-name="Italic">' + xmlEscape(pts) + '</text:span>';
  if (q.verb) {
    inner += '<text:span text:style-name="Italic"> \u2014 '
      + xmlEscape(q.verb) + '</text:span>';
  }
  this.pRich(inner, 'Question');
  this.writeLines(3);
};

/** Extrait la source (ligne « 🔎 … ») du contenu HTML d'un document. */
function extractSource(html) {
  var m = String(html || '').match(/\u{1F50D}\s*([^<]+)/u);
  return m ? m[1].trim() : '';
}

    + '<office:document-meta '
    + 'xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" '
    + 'xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" '
    + 'xmlns:dc="http://purl.org/dc/elements/1.1/" office:version="1.2">'
    + '<office:meta><dc:title>' + xmlEscape(title || 'SVT') + '</dc:title>'
    + '<meta:generator>Programmes SVT 2027 \u2014 export ODT</meta:generator>'
    + '</office:meta></office:document-meta>';
}

  x.push('</table:table>');
  this.out.push(x.join(''));
  this._n += 1;
  return true;
};

Body.prototype.xml = function () {
  return this.out.join('\n');
};

