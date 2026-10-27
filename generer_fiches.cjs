#!/usr/bin/env node
/**
 * Générateur de fiches activité réelles SVT 2027
 * Utilise la banque documents skillsvt (lelivrescolaire.fr + DNB + eduscol)
 * Produit:
 *  - app/assets/docs/*.jpg (images redimensionnées)
 *  - fiches/*.html (fiches élève + prof imprimables, self-contained base64)
 *  - app/data/activites_reelles.js (données pour l'app)
 *  - Patch index.html pour intégration
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const CUR = require('./_curation.cjs');

// 1) Redimensionner les images via Python PIL
function resizeImages() {
    console.log("→ Redimensionnement des figures (Python PIL)...");
    execFileSync(
        "C:/Users/brice/AppData/Local/Programs/Python/Python310/python.exe",
        [path.join(ROOT, "_resize.py")],
        { stdio: "inherit", cwd: ROOT }
    );
}

// 2) Lire une image et la retourner en base64 (pour HTML standalone)
function imageToBase64(figName) {
    const dst = path.join(ROOT, "app", "assets", "docs", path.basename(figName, path.extname(figName)) + ".jpg");
    if (!fs.existsSync(dst)) return null;
    const buf = fs.readFileSync(dst);
    return "data:image/jpeg;base64," + buf.toString("base64");
}

// 3) Charger les métadonnées de l'app (niveau, contexte, problématique)
global.window = global;
global.PROG = { levels: {}, activites: {} };
require('./app/data/5e.js');
require('./app/data/4e.js');
require('./app/data/3e.js');
require('./app/data/activites.js');
require('./app/data/docs_rich.js');
const PROG = global.PROG;

// Helper: trouver le contexte programme (niveau, thème, semaine) pour une activité
function getProgrammeContext(actId) {
    const act = PROG.activites[actId];
    if (!act) return {};
    for (const [nivKey, niv] of Object.entries(PROG.levels)) {
        if (act.niveau === nivKey || act.niveau === niv.label) {
            for (const theme of niv.themes || []) {
                for (const partie of theme.parties || []) {
                    for (const chap of partie.chapitres || []) {
                        for (const sect of chap.sections || []) {
                            for (const seance of sect.seances || []) {
                                if (seance.act === actId) {
                                    return {
                                        niveau: niv.label,
                                        couleur: niv.couleur,
                                        theme: theme.titre,
                                        partie: partie.titre,
                                        probleme: partie.problematique,
                                        seanceTitre: seance.titre,
                                        seanceQ: seance.q,
                                        duree: seance.h + " h",
                                        competences: seance.comp || []
                                    };
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return {};
}

// 4) Générer le HTML d'une fiche (élève ou prof)
function generateFicheHTML(actId, cur, mode) {
    // mode: 'eleve' ou 'prof'
    const act = PROG.activites[actId];
    const ctx = getProgrammeContext(actId);
    const isProf = mode === 'prof';
    const docs = cur.docs || [];
    const questions = cur.questions || [];
    const totalPts = questions.reduce((s, q) => s + (q.pts || 0), 0);

    // --- Styles CSS A4 ---
    const css = `
        @page { size: A4; margin: 12mm 15mm; }
        body { font-family: "Segoe UI", "Libre Franklin", system-ui, sans-serif; font-size: 11pt; line-height: 1.55; color: #1a1a1a; max-width: 190mm; margin: 0 auto; }
        .header { border-bottom: 2px solid ${ctx.couleur || '#2e7d32'}; padding-bottom: 6px; margin-bottom: 12px; }
        .header h1 { margin: 0; font-size: 16pt; color: ${ctx.couleur || '#2e7d32'}; }
        .meta { font-size: 9pt; color: #555; margin-top: 4px; }
        .meta span { margin-right: 18px; }
        .chapeau { background: #f8f9fa; border-left: 4px solid ${ctx.couleur || '#2e7d32'}; padding: 8px 12px; margin: 12px 0; font-size: 10pt; }
        .chapeau strong { color: ${ctx.couleur || '#2e7d32'}; }
        .doc { margin: 16px 0; page-break-inside: avoid; }
        .doc .label { font-weight: 600; color: ${ctx.couleur || '#2e7d32'}; font-size: 10pt; margin-bottom: 4px; }
        .doc img { max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 4px; background: #fff; }
        .doc .legende { font-size: 9pt; color: #444; margin-top: 4px; font-style: italic; }
        .doc .source { font-size: 8pt; color: #777; margin-top: 2px; }
        .question { margin: 16px 0; page-break-inside: avoid; }
        .question .enonce { font-weight: 500; margin-bottom: 6px; }
        .question .docs-ref { font-size: 9pt; color: #666; margin-bottom: 8px; }
        .question .reponse { height: ${isProf ? 'auto' : '60px'}; }
        .question .reponse.prof { background: #f0f8ff; border: 1px dashed ${ctx.couleur || '#2e7d32'}; padding: 8px; border-radius: 4px; font-size: 9.5pt; }
        .question .reponse.eleve { border-bottom: 1px dotted #999; }
        .correction { display: ${isProf ? 'block' : 'none'}; }
        .bareme { font-size: 9pt; color: #888; margin-top: 4px; }
        .grille { margin-top: 20px; padding: 8px; background: #f5f5f5; border-radius: 4px; font-size: 9pt; }
        .grille table { width: 100%; border-collapse: collapse; }
        .grille th, .grille td { border: 1px solid #ddd; padding: 4px 6px; text-align: center; }
        .page-break { page-break-before: always; }
        .footer { margin-top: 30px; font-size: 8pt; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 8px; }
        .diff { font-size: 9pt; color: #b5651d; background: #fff8e1; padding: 4px 8px; border-radius: 3px; margin: 4px 0; }
    `;

    // --- En-tête ---
    let html = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>${actId} — Fiche ${isProf ? 'Professeur' : 'Élève'}</title>
<style>${css}</style>
</head>
<body>
<div class="header">
    <h1>${actId} — ${act?.titre || ''}</h1>
    <div class="meta">
        <span>Niveau: ${ctx.niveau || act?.niveau || ''}</span>
        <span>Durée: ${ctx.duree || act?.duree || ''}</span>
        <span>Barème: ${totalPts} pts</span>
        ${ctx.seanceTitre ? `<span>Séance: ${ctx.seanceTitre}</span>` : ''}
    </div>
</div>

${act?.contexte ? `
<div class="chapeau">
    <strong>Contexte / Accroche :</strong> ${act.contexte}
</div>` : ''}
${act?.problematique ? `
<div class="chapeau">
    <strong>Problématique :</strong> ${act.problematique}
</div>` : ''}
${ctx.probleme && !act?.problematique ? `
<div class="chapeau">
    <strong>Problématique (programme) :</strong> ${ctx.probleme}
</div>` : ''}
`;

    // --- Documents ---
    for (const d of docs) {
        const b64 = d.fig ? imageToBase64(d.fig) : null;
        const imgHtml = b64 ? `<img src="${b64}" alt="${d.titre}">` : (d.infos || '');
        html += `
<div class="doc">
    <div class="label">Document ${d.num} — ${d.titre} <span style="font-weight:400;color:#888;">[${d.type}]</span></div>
    ${imgHtml}
    ${d.legende ? `<div class="legende">${d.legende}</div>` : ''}
    <div class="source">Source: ${d.source || ''} ${d.annee ? `(${d.annee})` : ''} ${d.url ? `— <a href="${d.url}" target="_blank">lien</a>` : ''}</div>
</div>`;
    }

    // --- Questions ---
    for (const q of questions) {
        const docsRef = q.docs ? `Document(s) ${q.docs.join(', ')}` : 'Connaissances';
        const reponseHtml = isProf
            ? `<div class="reponse prof correction"><strong>Corrigé :</strong> ${q.corrige || ''}${q.diff ? `<div class="diff"><strong>Différenciation :</strong> ${q.diff}</div>` : ''}</div>`
            : `<div class="reponse eleve"></div>`;
        html += `
<div class="question">
    <div class="enonce"><strong>Q${q.n} (${q.pts} pts)</strong> — ${q.texte}</div>
    <div class="docs-ref">Appui : ${docsRef} | Compétence: ${q.competence || ''}</div>
    ${reponseHtml}
    <div class="bareme">Bareme: ${q.pts} pts</div>
</div>`;
    }

    // --- Pied & grille LSU (prof seulement) ---
    if (isProf) {
        const grille = act?.grille_lsu || {};
        let grilleHtml = '<div class="page-break"></div><div class="grille"><h3>Grille LSU (indicative)</h3><table><tr><th>Domaine</th><th>MI</th><th>MF</th><th>MS</th><th>TBM</th></tr>';
        for (const [dom, vals] of Object.entries(grille)) {
            grilleHtml += `<tr><td>${dom}</td><td>${vals.MI || ''}</td><td>${vals.MF || ''}</td><td>${vals.MS || ''}</td><td>${vals.TBM || ''}</td></tr>`;
        }
        grilleHtml += '</table></div>';
        html += grilleHtml;
    }

    html += `
<div class="footer">
    Fiche générée à partir du programme SVT 2027 + banque documents skillsvt (lelivrescolaire.fr, DNB officiel, eduscol). 
    Usage pédagogique personnel — Sources citées sur chaque document.
</div>
</body></html>`;
    return html;
}

// 5) Écrire les fichiers de sortie
function writeOutputs() {
    console.log("→ Génération des fiches HTML...");
    const outDir = path.join(ROOT, "fiches");
    fs.mkdirSync(outDir, { recursive: true });

    for (const actId of Object.keys(CUR)) {
        const cur = CUR[actId];
        const eleveHtml = generateFicheHTML(actId, cur, 'eleve');
        const profHtml = generateFicheHTML(actId, cur, 'prof');
        fs.writeFileSync(path.join(outDir, `${actId}-eleve.html`), eleveHtml, 'utf8');
        fs.writeFileSync(path.join(outDir, `${actId}-prof.html`), profHtml, 'utf8');
    }

    // Index des fiches
    let indexHtml = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Fiches SVT 2027 — Index</title><style>body{font-family:sans-serif;padding:20px;max-width:800px;margin:0 auto;} ul{list-style:none;padding:0;} li{margin:8px 0;} a{text-decoration:none;color:#2e7d32;font-weight:500;} a:hover{text-decoration:underline;} .meta{font-size:9pt;color:#666;}</style></head><body><h1>Fiches activité réelles — SVT 2027</h1><ul>`;
    for (const actId of Object.keys(CUR).sort()) {
        const act = PROG.activites[actId];
        indexHtml += `<li><a href="${actId}-eleve.html" target="_blank">${actId}</a> — ${act?.titre || ''} <span class="meta">(${CUR[actId].docs.length} docs, ${CUR[actId].questions.length} Q)</span> | <a href="${actId}-prof.html" target="_blank">[Corrigé]</a></li>`;
    }
    indexHtml += `</ul><p style="margin-top:30px;font-size:9pt;color:#888;">Généré automatiquement — ${new Date().toLocaleDateString('fr-FR')}</p></body></html>`;
    fs.writeFileSync(path.join(outDir, "index.html"), indexHtml, 'utf8');
    console.log(`  ${Object.keys(CUR).length} fiches élève + prof écrites dans ${outDir}/`);
}

// 6) Générer app/data/activites_reelles.js
function writeAppData() {
    console.log("→ Écriture app/data/activites_reelles.js...");
    let js = "// Fiches enrichies avec documents réels (banque skillsvt)\n// Généré automatiquement — ne pas éditer à la main\n";
    js += "window.PROG = window.PROG || {};\n";
    js += "window.PROG.ACTIVITES_REELLES = {\n";

    for (const actId of Object.keys(CUR).sort()) {
        const cur = CUR[actId];
        js += `  "${actId}": {\n`;
        js += `    documents: [\n`;
        for (const d of cur.docs) {
            const localPath = d.fig ? `assets/docs/${path.basename(d.fig, path.extname(d.fig))}.jpg` : '';
            js += `      { numero: ${d.num}, titre: "${d.titre.replace(/"/g, '\\"')}", type: "${d.type}", legende: "${(d.legende || '').replace(/"/g, '\\"')}", source: "${(d.source || '').replace(/"/g, '\\"')}", image: "${localPath}" },\n`;
        }
        js += `    ],\n`;
        js += `    questions: [\n`;
        for (const q of cur.questions) {
            js += `      { n: ${q.n}, texte: "${q.texte.replace(/"/g, '\\"')}", docs: [${(q.docs||[]).join(',')}], pts: ${q.pts}, competence: "${q.competence || ''}", corrige: "${(q.corrige||'').replace(/"/g, '\\"')}" },\n`;
        }
        js += `    ]\n`;
        js += `  },\n`;
    }
    js += "};\n";
    // Override dans l'app au chargement
    js += `
// Injection dans PROG.activites existantes
(function(){
  if (window.PROG && window.PROG.activites) {
    for (const [id, enr] of Object.entries(window.PROG.ACTIVITES_REELLES)) {
      if (window.PROG.activites[id]) {
        window.PROG.activites[id].documents = enr.documents;
        window.PROG.activites[id].questionsReelles = enr.questions;
      }
    }
  }
})();
`;
    fs.writeFileSync(path.join(ROOT, "app", "data", "activites_reelles.js"), js, 'utf8');
    console.log("  activites_reelles.js écrit.");
}

// 7) Patch index.html (ajouter script + bouton impression)
function patchIndexHtml() {
    console.log("→ Patch index.html...");
    const idxPath = path.join(ROOT, "app", "index.html");
    let html = fs.readFileSync(idxPath, 'utf8');

    // 1) Ajouter le script activites_reelles.js dans la liste de chargement
    const marker = "const files = ['5e.js', '4e.js', '3e.js', 'activites.js', 'docs_rich.js', 'pdfs.js', 'traces.js'];";
    if (html.includes(marker) && !html.includes("'activites_reelles.js'")) {
        html = html.replace(marker, "const files = ['5e.js', '4e.js', '3e.js', 'activites.js', 'docs_rich.js', 'activites_reelles.js', 'pdfs.js', 'traces.js'];");
        console.log("  + activites_reelles.js ajouté au chargement");
    }

    // 2) Dans la fonction renderFiche, ajouter bouton "Fiche élève imprimable"
    // Chercher le modal-body où s'affichent les docs
    const modalInject = `
    // --- Injection fiche imprimable ---
    if (window.PROG && window.PROG.ACTIVITES_REELLES && window.PROG.ACTIVITES_REELLES[actId]) {
      const imp = document.createElement('a');
      imp.href = '../fiches/\${actId}-eleve.html';
      imp.target = '_blank';
      imp.className = 'btn btn-outline-secondary btn-sm mt-2';
      imp.textContent = '🖨 Fiche élève imprimable';
      const titleEl = document.querySelector('#pdfModalTitle, .modal-title');
      if (titleEl && titleEl.parentNode) {
        titleEl.parentNode.appendChild(document.createElement('br'));
        titleEl.parentNode.appendChild(imp);
      }
    }`;
    const renderMarker = "function renderFiche(actId) {";
    if (html.includes(renderMarker) && !html.includes("Fiche élève imprimable")) {
        html = html.replace(renderMarker, renderMarker + modalInject);
        console.log("  + bouton impression injecté dans renderFiche");
    }

    fs.writeFileSync(idxPath, html, 'utf8');
}

// --- MAIN ---
console.log("=== Génération fiches activité réelles SVT 2027 ===");
resizeImages();
writeOutputs();
writeAppData();
patchIndexHtml();
console.log("=== TERMINÉ ===");