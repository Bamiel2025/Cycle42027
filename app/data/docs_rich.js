/* ============================================================
   Corpus documentaire enrichi — donnees scientifiques reelles
   Fusionne automatiquement dans PROG.activites au chargement.
   Documents : graphiques SVG, tableaux, schemas + sources.
   Questions : verbes d action + bareme. Genere par _emit.cjs.
   ============================================================ */

window.PROG = window.PROG || { levels: {}, activites: {} };
window.PROG.DOCS_RICH = {
 "A4-CLIM": {
  "questions": [
   {
    "q": "Relevez l'anomalie de température mondiale en 1900, en 1980 et en 2024, puis calculez le réchauffement entre 1900 et 2024.",
    "verb": "Relever et calculer",
    "pts": 2
   },
   {
    "q": "Identifiez le gaz à effet de serre qui contribue le plus au forçage radiatif et celui qui a la durée de vie la plus longue.",
    "verb": "Identifier et justifier",
    "pts": 2.5
   },
   {
    "q": "Expliquez pourquoi l'augmentation des gaz à effet de serre provoque un déséquilibre énergétique de la planète.",
    "verb": "Expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "NASA GISTEMP v4 — goddard.nasa.gov/gistemp",
   "NOAA Global Monitoring Laboratory — gml.noaa.gov/ccgg",
   "GIEC AR6 WG1 — ipcc.ch"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Anomalie de température mondiale depuis 1880 (NASA GISTEMP v4)",
    "contenu": "<svg viewBox=\"0 0 600 320\" role=\"img\" aria-label=\"Anomalie de la température mondiale (écart à la moyenne 1951-1980)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"26\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Anomalie de la température mondiale (écart à la moyenne 1951-1980)</text><rect x=\"62\" y=\"16\" width=\"11\" height=\"11\" rx=\"2\" fill=\"#c62828\"/><text x=\"79\" y=\"26\" font-size=\"11\" fill=\"#334155\">Anomalie mondiale</text><line x1=\"62\" y1=\"258.0\" x2=\"582\" y2=\"258.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"262.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">-0.6</text><line x1=\"62\" y1=\"215.2\" x2=\"582\" y2=\"215.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"219.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">-0.19999999999999996</text><line x1=\"62\" y1=\"172.4\" x2=\"582\" y2=\"172.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"176.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0.20000000000000007</text><line x1=\"62\" y1=\"129.6\" x2=\"582\" y2=\"129.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"133.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0.6</text><line x1=\"62\" y1=\"86.8\" x2=\"582\" y2=\"86.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"90.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">1</text><line x1=\"62\" y1=\"44.0\" x2=\"582\" y2=\"44.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"48.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">1.4</text><text x=\"62.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">1880</text><text x=\"148.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">1904</text><text x=\"235.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">1928</text><text x=\"322.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">1952</text><text x=\"408.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">1976</text><text x=\"495.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2000</text><text x=\"582.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2024</text><line x1=\"62\" y1=\"44\" x2=\"62\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"258\" x2=\"582\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"193.8\" x2=\"582\" y2=\"193.8\" stroke=\"#64748b\" stroke-dasharray=\"6 4\"/><polyline points=\"62.0,210.9 98.1,231.3 134.2,202.4 170.3,239.8 206.4,222.7 242.6,207.7 278.7,181.0 314.8,212.0 350.9,197.0 387.0,190.6 423.1,166.0 459.2,145.6 495.3,151.0 531.4,116.8 549.5,97.5 567.6,84.7 582.0,56.8\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"62.0\" cy=\"210.9\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"98.1\" cy=\"231.3\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"134.2\" cy=\"202.4\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"170.3\" cy=\"239.8\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"206.4\" cy=\"222.7\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"242.6\" cy=\"207.7\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"278.7\" cy=\"181.0\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"314.8\" cy=\"212.0\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"350.9\" cy=\"197.0\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"387.0\" cy=\"190.6\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"423.1\" cy=\"166.0\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"459.2\" cy=\"145.6\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"495.3\" cy=\"151.0\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"531.4\" cy=\"116.8\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"549.5\" cy=\"97.5\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"567.6\" cy=\"84.7\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"582.0\" cy=\"56.8\" r=\"3.2\" fill=\"#c62828\"/><text x=\"322\" y=\"298\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Année</text><text transform=\"translate(16,151) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Anomalie (°C)</text><text x=\"582\" y=\"314\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">NASA GISTEMP v4</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 NASA Goddard Institute for Space Studies — GISTEMP v4 (moyenne annuelle mondiale, écart à 1951-1980).</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Concentrations des principaux gaz à effet de serre et forçage radiatif",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Bilan de l'impact radiatif des gaz à effet de serre</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Gaz à effet de serre</th><th style=\"text-align:center\">1750 (préind.)</th><th style=\"text-align:center\">2024</th><th style=\"text-align:center\">Forçage (W/m²)</th><th style=\"text-align:center\">Durée de vie</th></tr></thead><tbody><tr><td style=\"font-weight:600\">CO₂ (dioxyde de carbone)</td><td style=\"text-align:center\">280 ppm</td><td style=\"text-align:center\">≈ 425 ppm</td><td style=\"text-align:center\">2,16</td><td style=\"text-align:center\">siècles à millénaires</td></tr><tr><td style=\"font-weight:600\">CH₄ (méthane)</td><td style=\"text-align:center\">722 ppb</td><td style=\"text-align:center\">≈ 1 930 ppb</td><td style=\"text-align:center\">0,54</td><td style=\"text-align:center\">≈ 12 ans</td></tr><tr><td style=\"font-weight:600\">N₂O (protoxyde d’azote)</td><td style=\"text-align:center\">270 ppb</td><td style=\"text-align:center\">≈ 337 ppb</td><td style=\"text-align:center\">0,21</td><td style=\"text-align:center\">≈ 121 ans</td></tr><tr><td style=\"font-weight:600\">O₃ troposphérique (ozone)</td><td style=\"text-align:center\">—</td><td style=\"text-align:center\">variable</td><td style=\"text-align:center\">0,47</td><td style=\"text-align:center\">quelques jours</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 GIEC AR6 (2021) ; NOAA Global Monitoring Laboratory.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Le bilan énergétique de la Terre : l'effet de serre additionnel",
    "contenu": "<svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Bilan radiatif de la Terre\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Bilan radiatif de la Terre</text><rect x=\"20\" y=\"40\" width=\"150\" height=\"60\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"95\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Rayonnement solaire</text><text x=\"95\" y=\"77\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">entrant</text><rect x=\"225\" y=\"40\" width=\"150\" height=\"60\" rx=\"7\" fill=\"#eef4f8\" stroke=\"#64748b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Atmosphère + GES</text><text x=\"300\" y=\"77\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">absorbe et réémet</text><rect x=\"430\" y=\"40\" width=\"150\" height=\"60\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"505\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Rayonnement</text><text x=\"505\" y=\"77\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">sortant vers l’espace</text><rect x=\"20\" y=\"200\" width=\"270\" height=\"60\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"155\" y=\"222\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Surface terrestre</text><text x=\"155\" y=\"237\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">réémet vers l’espace</text><rect x=\"310\" y=\"200\" width=\"270\" height=\"60\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"445\" y=\"222\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Effet de serre additionnel</text><text x=\"445\" y=\"237\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">déséquilibre : +1,0 W/m²</text><line x1=\"170\" y1=\"70\" x2=\"223.4\" y2=\"70.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"225,70 214.0,75.0 214.0,65.0\" fill=\"#475569\"/><text x=\"197.5\" y=\"84.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">≈ 340 W/m²</text><line x1=\"375\" y1=\"70\" x2=\"428.4\" y2=\"70.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"430,70 419.0,75.0 419.0,65.0\" fill=\"#475569\"/><text x=\"402.5\" y=\"84.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">≈ 239 W/m²</text><line x1=\"290\" y1=\"100\" x2=\"290.0\" y2=\"198.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,200 285.0,189.0 295.0,189.0\" fill=\"#475569\"/><text x=\"276.0\" y=\"150.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">réémission</text><line x1=\"290\" y1=\"230\" x2=\"308.4\" y2=\"230.0\" stroke=\"#c62828\" stroke-width=\"2\"/><polygon points=\"310,230 299.0,235.0 299.0,225.0\" fill=\"#c62828\"/><text x=\"300.0\" y=\"244.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">piège</text><text x=\"8\" y=\"292\" font-size=\"10\" fill=\"#94a3b8\">Entrée ≈ sortie + accumulation</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 GIEC AR6 WG1 — Earth's energy budget.</div>"
   }
  ]
 },
 "A4-TECT": {
  "questions": [
   {
    "q": "Citez les trois types de frontières de plaques et associez à chacun le relief et le type de volcanisme.",
    "verb": "Citer et associer",
    "pts": 2
   },
   {
    "q": "Lisez la profondeur des séismes à 0 km, 200 km et 700 km de la fosse ; décrivez comment la profondeur varie d'ouest en est et nommez la structure mise en évidence.",
    "verb": "Lire et décrire",
    "pts": 2.5
   },
   {
    "q": "Justifiez que la plaque sud-américaine est une plaque mixte et expliquez l'origine du volcanisme andin.",
    "verb": "Justifier et expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "USGS Earthquake Hazards Program — earthquake.usgs.gov",
   "International Seismological Centre — isc.ac.uk"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Les trois types de frontières de plaques et leurs signatures géologiques",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Panorama des limites de plaques lithosphériques</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Type de frontière</th><th style=\"text-align:center\">Relief associé</th><th style=\"text-align:center\">Séismes</th><th style=\"text-align:center\">Volcanisme</th><th style=\"text-align:center\">Âge de la croûte</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Divergentes (dorsales)</td><td style=\"text-align:center\">Dorsale médio-océanique, grand rift</td><td style=\"text-align:center\">superficiels (&lt; 30 km)</td><td style=\"text-align:center\">effusif (basalte)</td><td style=\"text-align:center\">jeune à l’axe</td></tr><tr><td style=\"font-weight:600\">Convergentes (subduction)</td><td style=\"text-align:center\">Fosse océanique + arc volcanique</td><td style=\"text-align:center\">superficiels à très profonds (700 km)</td><td style=\"text-align:center\">explosif (andésite)</td><td style=\"text-align:center\">océanique âgée (&gt; 150 Ma)</td></tr><tr><td style=\"font-weight:600\">Convergentes (collision)</td><td style=\"text-align:center\">Chaîne de montagnes (Himalaya)</td><td style=\"text-align:center\">profonds à intermédiaires</td><td style=\"text-align:center\">rare ou absent</td><td style=\"text-align:center\">continentale épaissie</td></tr><tr><td style=\"font-weight:600\">Transformantes</td><td style=\"text-align:center\">Faille (San Andreas)</td><td style=\"text-align:center\">superficiels (&lt; 20 km)</td><td style=\"text-align:center\">absent</td><td style=\"text-align:center\">d’âge voisin</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Données compilées à partir des relevés sismologiques mondiaux (USGS, ISC).</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Profondeur des séismes sous les Andes : le plan de Wadati-Benioff",
    "contenu": "<svg viewBox=\"0 0 600 320\" role=\"img\" aria-label=\"Profondeur des foyers sismiques sous la cordillère des Andes\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"26\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Profondeur des foyers sismiques sous la cordillère des Andes</text><rect x=\"62\" y=\"16\" width=\"11\" height=\"11\" rx=\"2\" fill=\"#6a1b9a\"/><text x=\"79\" y=\"26\" font-size=\"11\" fill=\"#334155\">Foyers sismiques</text><line x1=\"62\" y1=\"258.0\" x2=\"582\" y2=\"258.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"262.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0</text><line x1=\"62\" y1=\"227.4\" x2=\"582\" y2=\"227.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"231.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">100</text><line x1=\"62\" y1=\"196.9\" x2=\"582\" y2=\"196.9\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"200.9\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">200</text><line x1=\"62\" y1=\"166.3\" x2=\"582\" y2=\"166.3\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"170.3\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">300</text><line x1=\"62\" y1=\"135.7\" x2=\"582\" y2=\"135.7\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"139.7\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">400</text><line x1=\"62\" y1=\"105.1\" x2=\"582\" y2=\"105.1\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"109.1\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">500</text><line x1=\"62\" y1=\"74.6\" x2=\"582\" y2=\"74.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"78.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">600</text><line x1=\"62\" y1=\"44.0\" x2=\"582\" y2=\"44.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"48.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">700</text><text x=\"62.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">0</text><text x=\"136.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">100</text><text x=\"210.6\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">200</text><text x=\"284.9\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">300</text><text x=\"359.1\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">400</text><text x=\"433.4\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">500</text><text x=\"507.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">600</text><text x=\"582.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">700</text><line x1=\"62\" y1=\"44\" x2=\"62\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"258\" x2=\"582\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><polyline points=\"62.0,251.9 76.9,248.8 95.4,241.2 114.0,233.5 143.7,221.3 173.4,203.0 210.6,181.6 255.1,157.1 307.1,129.6 359.1,102.1 411.1,77.6 463.1,59.3 522.6,47.1\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"62.0\" cy=\"251.9\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"76.9\" cy=\"248.8\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"95.4\" cy=\"241.2\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"114.0\" cy=\"233.5\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"143.7\" cy=\"221.3\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"173.4\" cy=\"203.0\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"210.6\" cy=\"181.6\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"255.1\" cy=\"157.1\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"307.1\" cy=\"129.6\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"359.1\" cy=\"102.1\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"411.1\" cy=\"77.6\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"463.1\" cy=\"59.3\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"522.6\" cy=\"47.1\" r=\"3.2\" fill=\"#6a1b9a\"/><text x=\"322\" y=\"298\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Distance à la fosse (km, vers l’est)</text><text transform=\"translate(16,151) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Profondeur du foyer (km)</text><text x=\"582\" y=\"314\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Profil schématique d’après USGS</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Distribution des foyers le long du plan de subduction Nazca – Amérique du Sud (USGS / ISC).</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Un exemple de plaque mixte : la plaque sud-américaine",
    "contenu": "<svg viewBox=\"0 0 600 280\" role=\"img\" aria-label=\"Subduction de la plaque Nazca sous la plaque sud-américaine\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Subduction de la plaque Nazca sous la plaque sud-américaine</text><rect x=\"20\" y=\"170\" width=\"560\" height=\"26\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"300\" y=\"183\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Lithosphère océanique de la plaque Nazca</text><rect x=\"20\" y=\"196\" width=\"560\" height=\"30\" rx=\"7\" fill=\"#fff3e0\" stroke=\"#ef6c00\" stroke-width=\"1.4\"/><text x=\"300\" y=\"211\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Asthénosphère (manteau ductile)</text><rect x=\"430\" y=\"60\" width=\"150\" height=\"110\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"505\" y=\"99\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Croûte continentale</text><text x=\"505\" y=\"114\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">sud-américaine</text><text x=\"505\" y=\"129\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(épaisse)</text><rect x=\"250\" y=\"120\" width=\"130\" height=\"50\" rx=\"7\" fill=\"#eceff1\" stroke=\"#546e7a\" stroke-width=\"1.4\"/><text x=\"315\" y=\"137\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Fosse</text><text x=\"315\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">océanique</text><rect x=\"430\" y=\"20\" width=\"150\" height=\"40\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"505\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Arc volcanique andin</text><line x1=\"100\" y1=\"183\" x2=\"248.4\" y2=\"183.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"250,183 239.0,188.0 239.0,178.0\" fill=\"#475569\"/><text x=\"175.0\" y=\"197.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">mouvement de la plaque</text><line x1=\"300\" y1=\"210\" x2=\"468.4\" y2=\"175.3\" stroke=\"#ef6c00\" stroke-width=\"2\"/><polygon points=\"470,175 460.2,182.1 458.2,172.3\" fill=\"#ef6c00\"/><text x=\"387.8\" y=\"206.2\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">plongée</text><line x1=\"505\" y1=\"60\" x2=\"505.0\" y2=\"21.6\" stroke=\"#c62828\" stroke-width=\"2\"/><polygon points=\"505,20 510.0,31.0 500.0,31.0\" fill=\"#c62828\"/><text x=\"519.0\" y=\"40.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">magma</text><text x=\"8\" y=\"272\" font-size=\"10\" fill=\"#94a3b8\">Échelle verticale exagérée</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Modèle de subduction classique ; études tectoniques des Andes.</div>"
   }
  ]
 },
 "A4-GPS": {
  "questions": [
   {
    "q": "Relevez les vitesses des stations Hawaii, Nazca et Eurasie, puis classez-les par ordre décroissant.",
    "verb": "Relever et classer",
    "pts": 2
   },
   {
    "q": "Associez chaque vitesse mesurée au type de mouvement de plaque (divergence, subduction, coulissement, collision).",
    "verb": "Associer",
    "pts": 2.5
   },
   {
    "q": "Montrez que les mesures GPS confirment le déplacement actuel des plaques et indiquez son ordre de grandeur.",
    "verb": "Montrer et argumenter",
    "pts": 3
   }
  ],
  "sources": [
   "UNAVCO Plate Motion Calculator — unavco.org",
   "Réseau GNSS permanent IGN — rgp.ign.fr",
   "IGS — igs.org"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Vitesses de déplacement mesurées par GPS (géodésie spatiale)",
    "contenu": "<svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Vitesses horizontales mesurées par stations GPS permanentes\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"24\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Vitesses horizontales mesurées par stations GPS permanentes</text><line x1=\"62\" y1=\"226.0\" x2=\"582\" y2=\"226.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"230.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0 mm/an</text><line x1=\"62\" y1=\"188.8\" x2=\"582\" y2=\"188.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"192.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">18 mm/an</text><line x1=\"62\" y1=\"151.6\" x2=\"582\" y2=\"151.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"155.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">36 mm/an</text><line x1=\"62\" y1=\"114.4\" x2=\"582\" y2=\"114.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"118.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">54 mm/an</text><line x1=\"62\" y1=\"77.2\" x2=\"582\" y2=\"77.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"81.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">72 mm/an</text><line x1=\"62\" y1=\"40.0\" x2=\"582\" y2=\"40.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"44.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">90 mm/an</text><line x1=\"62\" y1=\"40\" x2=\"62\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"226\" x2=\"582\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><rect x=\"78.5\" y=\"56.5\" width=\"53.7\" height=\"169.5\" rx=\"3\" fill=\"#c62828\"/><text x=\"105.3\" y=\"50.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">82 mm/an</text><text x=\"105.3\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Hawaï (Pacifique)</text><rect x=\"165.1\" y=\"85.5\" width=\"53.7\" height=\"140.5\" rx=\"3\" fill=\"#ef6c00\"/><text x=\"192.0\" y=\"79.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">68 mm/an</text><text x=\"192.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Nazca</text><rect x=\"251.8\" y=\"126.8\" width=\"53.7\" height=\"99.2\" rx=\"3\" fill=\"#f9a825\"/><text x=\"278.7\" y=\"120.8\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">48 mm/an</text><text x=\"278.7\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Inde / Himalaya</text><rect x=\"338.5\" y=\"182.6\" width=\"53.7\" height=\"43.4\" rx=\"3\" fill=\"#0277bd\"/><text x=\"365.3\" y=\"176.6\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">21 mm/an</text><text x=\"365.3\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Reykjavik (dorsale)</text><rect x=\"425.1\" y=\"176.4\" width=\"53.7\" height=\"49.6\" rx=\"3\" fill=\"#2e7d32\"/><text x=\"452.0\" y=\"170.4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">24 mm/an</text><text x=\"452.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Afrique de l’Ouest</text><rect x=\"511.8\" y=\"176.4\" width=\"53.7\" height=\"49.6\" rx=\"3\" fill=\"#6a1b9a\"/><text x=\"538.7\" y=\"170.4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">24 mm/an</text><text x=\"538.7\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Eurasie (Paris)</text><text transform=\"translate(16,133) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Vitesse (mm/an)</text><text x=\"582\" y=\"294\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Réseaux UNAVCO / IGN / IGS</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Réseaux géodésiques permanents : UNAVCO (États-Unis), IGN (France), IGS (international).</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Le principe du GPS : trilatération par satellites",
    "contenu": "<div style=\"border-left:4px solid #3f51b5;background:#3f51b50f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>📡 Principe de la mesure</strong><br>Un récepteur au sol enregistre en continu sa distance à au moins 4 satellites. En comparant ses positions sur des années, on obtient son déplacement horizontal et vertical avec une précision millimétrique.</div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Trilatération GPS ; réseaux GNSS (GPS, Galileo, GLONASS).</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Interprétation : divergences et convergences mesurées",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Cohérence entre mesures GPS et théories tectoniques</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Zone</th><th style=\"text-align:center\">Type de frontière</th><th style=\"text-align:center\">Vitesse relative observée</th><th style=\"text-align:center\">Effet géologique</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Dorsale médio-atlantique (Islande)</td><td style=\"text-align:center\">Divergente</td><td style=\"text-align:center\">≈ 2 cm/an (écartement)</td><td style=\"text-align:center\">océan qui s’ouvre</td></tr><tr><td style=\"font-weight:600\">Californie (San Andreas)</td><td style=\"text-align:center\">Transformante</td><td style=\"text-align:center\">≈ 3 à 4 cm/an (coulissement)</td><td style=\"text-align:center\">séismes superficiels</td></tr><tr><td style=\"font-weight:600\">Japon (fosse du Japon)</td><td style=\"text-align:center\">Subduction</td><td style=\"text-align:center\">≈ 8 cm/an (rapprochement)</td><td style=\"text-align:center\">séismes violents, arc volcanique</td></tr><tr><td style=\"font-weight:600\">Himalaya (Inde / Eurasie)</td><td style=\"text-align:center\">Collision</td><td style=\"text-align:center\">≈ 4 à 5 cm/an</td><td style=\"text-align:center\">soulèvement de la chaîne</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Vitesses relatives déduites des modèles de plaques géodésiques (IGS / UNAVCO).</div>"
   }
  ]
 },
 "A4-VOLC": {
  "questions": [
   {
    "q": "Relevez la teneur en silice et la viscosité du basalte et de la rhyolite ; établissez un lien entre ces deux grandeurs.",
    "verb": "Relever et mettre en relation",
    "pts": 2
   },
   {
    "q": "Interprétez le test d'écoulement en classant les liquides du plus fluide au plus visqueux.",
    "verb": "Interpréter",
    "pts": 2.5
   },
   {
    "q": "Expliquez pourquoi un magma visqueux provoque des éruptions explosives alors qu'un magma fluide donne des éruptions effusives.",
    "verb": "Expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "USGS Volcano Hazards Program — volcanoes.usgs.gov",
   "IAVCEI — iavceivolcano.org"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Composition et propriétés des trois grands types de magma",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Relation entre teneur en silice, viscosité et dynamisme éruptif</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Type de magma</th><th style=\"text-align:center\">Silice (SiO₂)</th><th style=\"text-align:center\">Température</th><th style=\"text-align:center\">Viscosité</th><th style=\"text-align:center\">Style éruptif</th><th style=\"text-align:center\">Exemple</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Basalte (fluide)</td><td style=\"text-align:center\">45 – 52 %</td><td style=\"text-align:center\">1 100 – 1 200 °C</td><td style=\"text-align:center\">10 à 10³ Pa·s</td><td style=\"text-align:center\">effusif, coulées</td><td style=\"text-align:center\">Piton de la Fournaise</td></tr><tr><td style=\"font-weight:600\">Andésite (intermédiaire)</td><td style=\"text-align:center\">52 – 63 %</td><td style=\"text-align:center\">900 – 1 100 °C</td><td style=\"text-align:center\">10⁶ Pa·s</td><td style=\"text-align:center\">mixte, nuées ardentes</td><td style=\"text-align:center\">Montagne Pelée</td></tr><tr><td style=\"font-weight:600\">Rhyolite (visqueux)</td><td style=\"text-align:center\">&gt; 63 %</td><td style=\"text-align:center\">700 – 900 °C</td><td style=\"text-align:center\">10⁹ à 10¹¹ Pa·s</td><td style=\"text-align:center\">explosif, dômes</td><td style=\"text-align:center\">Yellowstone</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Classification des laves d’après la teneur en silice ; données pétrologiques classiques.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Mesure de viscosité en classe : temps d’écoulement de liquides modèles",
    "contenu": "<svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Test d'écoulement sur plan incliné (longueur identique)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"24\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Test d'écoulement sur plan incliné (longueur identique)</text><line x1=\"62\" y1=\"226.0\" x2=\"582\" y2=\"226.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"230.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0 s</text><line x1=\"62\" y1=\"188.8\" x2=\"582\" y2=\"188.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"192.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">30 s</text><line x1=\"62\" y1=\"151.6\" x2=\"582\" y2=\"151.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"155.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">60 s</text><line x1=\"62\" y1=\"114.4\" x2=\"582\" y2=\"114.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"118.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">90 s</text><line x1=\"62\" y1=\"77.2\" x2=\"582\" y2=\"77.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"81.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">120 s</text><line x1=\"62\" y1=\"40.0\" x2=\"582\" y2=\"40.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"44.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">150 s</text><line x1=\"62\" y1=\"40\" x2=\"62\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"226\" x2=\"582\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><rect x=\"95.0\" y=\"223.5\" width=\"64.0\" height=\"2.5\" rx=\"3\" fill=\"#42a5f5\"/><text x=\"127.0\" y=\"217.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">2 s</text><text x=\"127.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Eau</text><rect x=\"225.0\" y=\"203.7\" width=\"64.0\" height=\"22.3\" rx=\"3\" fill=\"#fbc02d\"/><text x=\"257.0\" y=\"197.7\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">18 s</text><text x=\"257.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Miel liquide</text><rect x=\"355.0\" y=\"145.4\" width=\"64.0\" height=\"80.6\" rx=\"3\" fill=\"#ef6c00\"/><text x=\"387.0\" y=\"139.4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">65 s</text><text x=\"387.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Miel épais</text><rect x=\"485.0\" y=\"52.4\" width=\"64.0\" height=\"173.6\" rx=\"3\" fill=\"#c62828\"/><text x=\"517.0\" y=\"46.4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">140 s</text><text x=\"517.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Pâte dentifrice</text><text transform=\"translate(16,133) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Temps d'écoulement (s)</text><text x=\"582\" y=\"294\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Plus le temps est long, plus le liquide est visqueux</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Protocole d'analogie viscosité / fluidité utilisable en classe.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Conséquence : piégeage des gaz et explosivité",
    "contenu": "<svg viewBox=\"0 0 600 260\" role=\"img\" aria-label=\"Rôle de la viscosité dans le piégeage des gaz\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Rôle de la viscosité dans le piégeage des gaz</text><rect x=\"20\" y=\"30\" width=\"250\" height=\"90\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"145\" y=\"67\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Magma fluide (basalte)</text><text x=\"145\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">les gaz s’échappent librement</text><rect x=\"330\" y=\"30\" width=\"250\" height=\"90\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"455\" y=\"67\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Magma visqueux (rhyolite)</text><text x=\"455\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">les gaz restent piégés</text><rect x=\"20\" y=\"170\" width=\"250\" height=\"70\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"145\" y=\"197\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">→ Éruption effusive</text><text x=\"145\" y=\"212\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">coulées de lave</text><rect x=\"330\" y=\"170\" width=\"250\" height=\"70\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"455\" y=\"197\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">→ Éruption explosive</text><text x=\"455\" y=\"212\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">dômes, nuées ardentes</text><line x1=\"145\" y1=\"120\" x2=\"145.0\" y2=\"168.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"145,170 140.0,159.0 150.0,159.0\" fill=\"#475569\"/><line x1=\"455\" y1=\"120\" x2=\"455.0\" y2=\"168.4\" stroke=\"#c62828\" stroke-width=\"2\"/><polygon points=\"455,170 450.0,159.0 460.0,159.0\" fill=\"#c62828\"/><text x=\"8\" y=\"252\" font-size=\"10\" fill=\"#94a3b8\">La viscosité contrôle le dégazage</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Relation viscosité / dégazage ; manuels de volcanologie (IAVCEI).</div>"
   }
  ]
 },
 "A4-RISQ": {
  "questions": [
   {
    "q": "Comparez les magnitudes de Tohoku et d'Haïti, puis comparez le nombre de décès ; expliquez ce paradoxe apparent.",
    "verb": "Comparer et expliquer",
    "pts": 2
   },
   {
    "q": "À l'aide de la relation logarithmique, calculez combien de fois un séisme de magnitude 8 libère plus d'énergie qu'un séisme de magnitude 6.",
    "verb": "Calculer",
    "pts": 2.5
   },
   {
    "q": "Proposez deux mesures concrètes permettant de réduire le risque sismique dans une ville et justifiez leur efficacité.",
    "verb": "Proposer et justifier",
    "pts": 3
   }
  ],
  "sources": [
   "USGS Earthquake Hazards Program — earthquake.usgs.gov",
   "EM-DAT / CRED — cred.be",
   "Eurocode 8 (NF EN 1998)"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Trois séismes majeurs : comparaison magnitude / vulnérabilité",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">La magnitude mesure l’énergie ; elle ne mesure pas la catastrophe humaine</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Séisme</th><th style=\"text-align:center\">Année</th><th style=\"text-align:center\">Magnitude</th><th style=\"text-align:center\">Énergie libérée</th><th style=\"text-align:center\">Décès</th><th style=\"text-align:center\">Coût</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Tohoku (Japon)</td><td style=\"text-align:center\">2011</td><td style=\"text-align:center\">9,1</td><td style=\"text-align:center\">≈ 1 000 × Hiroshima</td><td style=\"text-align:center\">≈ 15 900</td><td style=\"text-align:center\">≈ 235 Md $</td></tr><tr><td style=\"font-weight:600\">Haïti</td><td style=\"text-align:center\">2010</td><td style=\"text-align:center\">7,0</td><td style=\"text-align:center\">≈ 30 × Hiroshima</td><td style=\"text-align:center\">≈ 222 000</td><td style=\"text-align:center\">≈ 8 Md $</td></tr><tr><td style=\"font-weight:600\">Sichuan (Chine)</td><td style=\"text-align:center\">2008</td><td style=\"text-align:center\">7,9</td><td style=\"text-align:center\">≈ 150 × Hiroshima</td><td style=\"text-align:center\">≈ 87 000</td><td style=\"text-align:center\">≈ 85 Md $</td></tr><tr><td style=\"font-weight:600\">Northridge (Californie)</td><td style=\"text-align:center\">1994</td><td style=\"text-align:center\">6,7</td><td style=\"text-align:center\">≈ 8 × Hiroshima</td><td style=\"text-align:center\">≈ 60</td><td style=\"text-align:center\">≈ 20 Md $</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 USGS Earthquake Hazards Program ; EM-DAT (base de données des catastrophes, CRED).</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "L’échelle de Richter est logarithmique",
    "contenu": "<div style=\"border-left:4px solid #0277bd;background:#0277bd0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>📐 Une échelle logarithmique</strong><br>Chaque augmentation de 1 degré de magnitude multiplie par ≈ 30 l'énergie libérée. Un séisme de magnitude 8 libère donc environ 900 fois plus d'énergie qu'un séisme de magnitude 6.</div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Relation énergie / magnitude : E ∝ 10^(1,5M).</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Ce qui réduit le risque : prévention, construction, culture du risque",
    "contenu": "<svg viewBox=\"0 0 600 280\" role=\"img\" aria-label=\"Les leviers de réduction du risque sismique\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Les leviers de réduction du risque sismique</text><rect x=\"20\" y=\"30\" width=\"170\" height=\"70\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"105\" y=\"49\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Aléa</text><text x=\"105\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">que peut faire</text><text x=\"105\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">la nature ?</text><rect x=\"215\" y=\"30\" width=\"170\" height=\"70\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"49\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Enjeux</text><text x=\"300\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">population,</text><text x=\"300\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">bâti, économie</text><rect x=\"410\" y=\"30\" width=\"170\" height=\"70\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"495\" y=\"49\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Vulnérabilité</text><text x=\"495\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">qualité des</text><text x=\"495\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">constructions</text><rect x=\"150\" y=\"170\" width=\"300\" height=\"80\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"300\" y=\"202\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">RISQUE = Aléa × Enjeux × Vulnérabilité</text><text x=\"300\" y=\"217\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">Parasismique · prévention · éducation</text><line x1=\"105\" y1=\"100\" x2=\"248.6\" y2=\"169.3\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"250,170 237.9,169.7 242.3,160.7\" fill=\"#475569\"/><line x1=\"300\" y1=\"100\" x2=\"300.0\" y2=\"168.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"300,170 295.0,159.0 305.0,159.0\" fill=\"#475569\"/><line x1=\"495\" y1=\"100\" x2=\"351.4\" y2=\"169.3\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"350,170 357.7,160.7 362.1,169.7\" fill=\"#475569\"/><text x=\"8\" y=\"272\" font-size=\"10\" fill=\"#94a3b8\">On ne supprime pas l’aléa, on réduit la vulnérabilité</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Modèle classique du risque naturel ; normes parasismiques (Eurocode 8).</div>"
   }
  ]
 },
 "A4-VEG": {
  "questions": [
   {
    "q": "Légendez le schéma du stomate et indiquez quels gaz entrent et lesquels sortent lorsque l'ostiole est ouvert.",
    "verb": "Légender et indiquer",
    "pts": 2
   },
   {
    "q": "Identifiez la zone de la racine responsable de l'absorption et expliquez son adaptation morphologique.",
    "verb": "Identifier et expliquer",
    "pts": 2.5
   },
   {
    "q": "Décrivez le trajet de l'eau du sol à l'atmosphère et expliquez le moteur de cette circulation.",
    "verb": "Décrire et expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "Physiologie végétale (Taiz & Zeiger, Plant Physiology)",
   "Ressources SVT cycle 4"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Le stomate : porte d’échange gazeux et d’eau",
    "contenu": "<svg viewBox=\"0 0 600 260\" role=\"img\" aria-label=\"Stomate ouvert et fermé (épiderme foliaire)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Stomate ouvert et fermé (épiderme foliaire)</text><rect x=\"30\" y=\"40\" width=\"180\" height=\"110\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"120\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Cellules stomatiques</text><text x=\"120\" y=\"94\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(2 cellules en rein)</text><text x=\"120\" y=\"109\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">ostiole = pore</text><rect x=\"390\" y=\"40\" width=\"180\" height=\"110\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"480\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Chambre sous-stomatique</text><text x=\"480\" y=\"94\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">espace aérien interne</text><text x=\"480\" y=\"109\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">où circulent les gaz</text><rect x=\"30\" y=\"185\" width=\"540\" height=\"60\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"215\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Ouvert : entrée CO₂ (photosynthèse) mais sortie d’eau (transpiration)</text><line x1=\"210\" y1=\"95\" x2=\"388.4\" y2=\"95.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"390,95 379.0,100.0 379.0,90.0\" fill=\"#475569\"/><text x=\"300.0\" y=\"109.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">CO₂ ⇄ vapeur d’eau</text><text x=\"8\" y=\"252\" font-size=\"10\" fill=\"#94a3b8\">Un mm² de feuille peut porter 50 à 500 stomates</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Données physiologiques végétales ; manuels de biologie végétale.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Absorption de l’eau et des sels minéraux par les poils absorbants",
    "contenu": "<div style=\"border-left:4px solid #2e7d32;background:#2e7d320f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🌱 Les poils absorbants</strong><br>Les poils absorbants de la zone pilifère augmentent considérablement la surface d'échange entre la racine et le sol. L'eau et les ions minéraux (nitrate NO₃⁻, potassium K⁺, magnésium Mg²⁺) y entrent par osmose et transport actif.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Transpiration et circulation de la sève dans le végétal",
    "contenu": "<svg viewBox=\"0 0 600 270\" role=\"img\" aria-label=\"Circulation de l’eau dans le végétal\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Circulation de l’eau dans le végétal</text><rect x=\"30\" y=\"30\" width=\"120\" height=\"70\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"90\" y=\"57\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Sol</text><text x=\"90\" y=\"72\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">+ eau et ions</text><rect x=\"240\" y=\"30\" width=\"120\" height=\"70\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"300\" y=\"57\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Poils</text><text x=\"300\" y=\"72\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">absorbants</text><rect x=\"240\" y=\"160\" width=\"120\" height=\"70\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"300\" y=\"187\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Xylème</text><text x=\"300\" y=\"202\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(sève brute)</text><rect x=\"450\" y=\"30\" width=\"120\" height=\"70\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"510\" y=\"57\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Feuille</text><text x=\"510\" y=\"72\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">photosynthèse</text><rect x=\"450\" y=\"160\" width=\"120\" height=\"70\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"510\" y=\"187\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Stomates</text><text x=\"510\" y=\"202\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">→ vapeur d’eau</text><line x1=\"150\" y1=\"65\" x2=\"238.4\" y2=\"65.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"240,65 229.0,70.0 229.0,60.0\" fill=\"#475569\"/><line x1=\"300\" y1=\"100\" x2=\"300.0\" y2=\"158.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"300,160 295.0,149.0 305.0,149.0\" fill=\"#475569\"/><line x1=\"360\" y1=\"195\" x2=\"448.4\" y2=\"195.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"450,195 439.0,200.0 439.0,190.0\" fill=\"#475569\"/><text x=\"405.0\" y=\"209.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">montée</text><line x1=\"510\" y1=\"100\" x2=\"510.0\" y2=\"158.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"510,160 505.0,149.0 515.0,149.0\" fill=\"#475569\"/><line x1=\"570\" y1=\"195\" x2=\"588.4\" y2=\"195.0\" stroke=\"#c62828\" stroke-width=\"2\"/><polygon points=\"590,195 579.0,200.0 579.0,190.0\" fill=\"#c62828\"/><text x=\"8\" y=\"262\" font-size=\"10\" fill=\"#94a3b8\">La transpiration crée l’aspiration qui fait monter la sève brute</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Physiologie végétale ; cycle d’eau et translocation (Taiz &amp; Zeiger).</div>"
   }
  ]
 },
 "A4-MYCO": {
  "questions": [
   {
    "q": "Identifiez ce que chaque partenaire apporte à l'autre et nommez ce type de relation interspécifique.",
    "verb": "Identifier et nommer",
    "pts": 2
   },
   {
    "q": "Calculez le pourcentage de gain de poids sec entre la plante témoin et la plante mycorhizée ; concluez sur l'intérêt de la symbiose.",
    "verb": "Calculer et conclure",
    "pts": 2.5
   },
   {
    "q": "Argumentez en quoi la mycorhization peut être une solution fondée sur la nature pour réduire l'usage d'engrais.",
    "verb": "Argumenter",
    "pts": 3
   }
  ],
  "sources": [
   "Smith & Read — Mycorrhizal Symbiosis",
   "INRAE — mycorhizes et agriculture"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "La symbiose mycorhizienne : échange réciproque racine-champignon",
    "contenu": "<svg viewBox=\"0 0 600 250\" role=\"img\" aria-label=\"Échanges entre le champignon mycorhizien et la plante\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Échanges entre le champignon mycorhizien et la plante</text><rect x=\"20\" y=\"30\" width=\"230\" height=\"90\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"135\" y=\"59\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Plante (racine)</text><text x=\"135\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">apporte : sucres issus</text><text x=\"135\" y=\"89\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">de la photosynthèse</text><rect x=\"350\" y=\"30\" width=\"230\" height=\"90\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"465\" y=\"59\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Champignon (mycélium)</text><text x=\"465\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">apporte : eau, phosphate,</text><text x=\"465\" y=\"89\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">azote, protection</text><rect x=\"20\" y=\"165\" width=\"560\" height=\"70\" rx=\"7\" fill=\"#eef4f8\" stroke=\"#64748b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"192\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Mycorhize = mutualisme (bénéfice réciproque)</text><text x=\"300\" y=\"207\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">jusqu’à 20-30 % des sucres produits sont cédés au champignon</text><line x1=\"250\" y1=\"60\" x2=\"348.4\" y2=\"60.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"350,60 339.0,65.0 339.0,55.0\" fill=\"#475569\"/><text x=\"300.0\" y=\"74.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">sucres</text><line x1=\"350\" y1=\"90\" x2=\"251.6\" y2=\"90.0\" stroke=\"#f59e0b\" stroke-width=\"2\"/><polygon points=\"250,90 261.0,85.0 261.0,95.0\" fill=\"#f59e0b\"/><text x=\"300.0\" y=\"76.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">ions minéraux</text><text x=\"8\" y=\"242\" font-size=\"10\" fill=\"#94a3b8\">Le mycélium explore un volume de sol bien plus grand que les racines seules</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Mycorhizes ; Smith &amp; Read, Mycorrhizal Symbiosis.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Effet de la mycorhization sur la croissance et la nutrition minérale",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Test comparatif sur plantules de maïs (conditions contrôlées)</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Plante</th><th style=\"text-align:center\">Sans mycorhize</th><th style=\"text-align:center\">Avec mycorhize</th><th style=\"text-align:center\">Gain</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Poids sec total (g)</td><td style=\"text-align:center\">1,20</td><td style=\"text-align:center\">2,10</td><td style=\"text-align:center\">+ 75 %</td></tr><tr><td style=\"font-weight:600\">Teneur en phosphore (mg/g)</td><td style=\"text-align:center\">1,1</td><td style=\"text-align:center\">2,4</td><td style=\"text-align:center\">+ 118 %</td></tr><tr><td style=\"font-weight:600\">Surface racinaire (cm²)</td><td style=\"text-align:center\">180</td><td style=\"text-align:center\">180</td><td style=\"text-align:center\">inchangée</td></tr><tr><td style=\"font-weight:600\">Mycélium exploré (m)</td><td style=\"text-align:center\">0</td><td style=\"text-align:center\">≈ 500</td><td style=\"text-align:center\">× 500</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Protocole expérimental classique de mise en évidence du rôle des mycorhizes.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Enjeux agricoles et environnementaux",
    "contenu": "<div style=\"border-left:4px solid #558b2f;background:#558b2f0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🌾 Moins d’engrais, plus de rendement</strong><br>En développant les mycorhizes (travail du sol limité, rotations, couverts végétaux), on peut réduire les apports d'engrais phosphatés tout en améliorant la nutrition des plantes et la résistance à la sécheresse.</div>"
   }
  ]
 },
 "A4-NAT": {
  "questions": [
   {
    "q": "Relevez le nombre d'espèces inventoriées et le groupe le plus abondant, puis présentez les données sous forme de tableau.",
    "verb": "Relever et présenter",
    "pts": 2
   },
   {
    "q": "Utilisez l'indice de Shannon pour classer les milieux du plus diversifié au moins diversifié.",
    "verb": "Utiliser et classer",
    "pts": 2.5
   },
   {
    "q": "Proposez deux actions concrètes réalisables dans l'établissement pour préserver la biodiversité locale.",
    "verb": "Proposer",
    "pts": 3
   }
  ],
  "sources": [
   "Vigie-Nature École (MNHN)",
   "UICN Liste rouge — iucnredlist.org"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Résultats d’un inventaire participatif sur 1 m² de pelouse",
    "contenu": "<svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Nombre d’individus par groupe (inventaire sur 1 m²)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"24\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Nombre d’individus par groupe (inventaire sur 1 m²)</text><line x1=\"62\" y1=\"226.0\" x2=\"582\" y2=\"226.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"230.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0</text><line x1=\"62\" y1=\"188.8\" x2=\"582\" y2=\"188.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"192.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">200</text><line x1=\"62\" y1=\"151.6\" x2=\"582\" y2=\"151.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"155.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">400</text><line x1=\"62\" y1=\"114.4\" x2=\"582\" y2=\"114.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"118.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">600</text><line x1=\"62\" y1=\"77.2\" x2=\"582\" y2=\"77.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"81.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">800</text><line x1=\"62\" y1=\"40.0\" x2=\"582\" y2=\"40.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"44.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">1000</text><line x1=\"62\" y1=\"40\" x2=\"62\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"226\" x2=\"582\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><rect x=\"78.5\" y=\"181.4\" width=\"53.7\" height=\"44.6\" rx=\"3\" fill=\"#558b2f\"/><text x=\"105.3\" y=\"175.4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">240</text><text x=\"105.3\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Graminées</text><rect x=\"165.1\" y=\"214.5\" width=\"53.7\" height=\"11.5\" rx=\"3\" fill=\"#2e7d32\"/><text x=\"192.0\" y=\"208.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">62</text><text x=\"192.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Trèfles</text><rect x=\"251.8\" y=\"222.7\" width=\"53.7\" height=\"3.3\" rx=\"3\" fill=\"#f9a825\"/><text x=\"278.7\" y=\"216.7\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">18</text><text x=\"278.7\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Pissenlits</text><rect x=\"338.5\" y=\"218.4\" width=\"53.7\" height=\"7.6\" rx=\"3\" fill=\"#00838f\"/><text x=\"365.3\" y=\"212.4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">41</text><text x=\"365.3\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Autres plantes</text><rect x=\"425.1\" y=\"58.6\" width=\"53.7\" height=\"167.4\" rx=\"3\" fill=\"#6a1b9a\"/><text x=\"452.0\" y=\"52.6\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">900</text><text x=\"452.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Collemboles</text><rect x=\"511.8\" y=\"224.9\" width=\"53.7\" height=\"1.1\" rx=\"3\" fill=\"#c62828\"/><text x=\"538.7\" y=\"218.9\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">6</text><text x=\"538.7\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Araignées</text><text transform=\"translate(16,133) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Nombre d’individus</text><text x=\"582\" y=\"294\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Protocole Vigie-Nature</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Protocole inspiré des sciences participatives (Vigie-Nature École / MNHN).</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Comment quantifier la biodiversité : richesse et indice de diversité",
    "contenu": "<div style=\"border-left:4px solid #0277bd;background:#0277bd0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>📊 Richesse spécifique et diversité</strong><br>La richesse spécifique (S) est le nombre d'espèces présentes. L'indice de Shannon H = −Σ(pᵢ × ln pᵢ) tient compte aussi de l'abondance relative de chaque espèce : un milieu très diversifié a un H élevé.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Menaces et actions de préservation à l’échelle locale",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">De la constatation à l’action citoyenne</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Pression identifiée</th><th style=\"text-align:center\">Conséquence sur la biodiversité</th><th style=\"text-align:center\">Action possible au collège</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Artificialisation des sols</td><td style=\"text-align:center\">destruction des habitats</td><td style=\"text-align:center\">créer un jardin de biodiversité</td></tr><tr><td style=\"font-weight:600\">Espèces invasives</td><td style=\"text-align:center\">concurrence avec les espèces locales</td><td style=\"text-align:center\">ne pas planter d’espèces envahissantes</td></tr><tr><td style=\"font-weight:600\">Pollution lumineuse</td><td style=\"text-align:center\">perturbation des cycles des insectes</td><td style=\"text-align:center\">éteindre les lumières la nuit</td></tr><tr><td style=\"font-weight:600\">Pelouses uniformes</td><td style=\"text-align:center\">réduction des habitats</td><td style=\"text-align:center\">tolérer une zone non tondue</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 UICN Liste rouge ; travaux d’écologie urbaine (Vigie-Nature).</div>"
   }
  ]
 },
 "A4-DIG": {
  "questions": [
   {
    "q": "Relevez le pourcentage d'amidon restant à 0, 5 et 10 minutes, puis calculez la vitesse moyenne d'hydrolyse entre 0 et 5 minutes.",
    "verb": "Relever et calculer",
    "pts": 2
   },
   {
    "q": "Identifiez les conditions optimales d'action de l'amylase et interprétez le résultat du tube témoin.",
    "verb": "Identifier et interpréter",
    "pts": 2.5
   },
   {
    "q": "Expliquez la spécificité des enzymes digestives et schématisez le devenir de l'amidon dans le tube digestif.",
    "verb": "Expliquer et schématiser",
    "pts": 3
   }
  ],
  "sources": [
   "Protocoles ExAO de SVT cycle 4",
   "Enzymologie digestive — manuels de biologie humaine"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Cinétique de l’hydrolyse de l’amidon par l’amylase salivaire",
    "contenu": "<svg viewBox=\"0 0 600 320\" role=\"img\" aria-label=\"Disparition de l’amidon au cours du temps (amylase, 37 °C)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"26\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Disparition de l’amidon au cours du temps (amylase, 37 °C)</text><rect x=\"62\" y=\"16\" width=\"11\" height=\"11\" rx=\"2\" fill=\"#0277bd\"/><text x=\"79\" y=\"26\" font-size=\"11\" fill=\"#334155\">Tube avec amylase</text><line x1=\"62\" y1=\"258.0\" x2=\"582\" y2=\"258.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"262.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0</text><line x1=\"62\" y1=\"215.2\" x2=\"582\" y2=\"215.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"219.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">20</text><line x1=\"62\" y1=\"172.4\" x2=\"582\" y2=\"172.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"176.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">40</text><line x1=\"62\" y1=\"129.6\" x2=\"582\" y2=\"129.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"133.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">60</text><line x1=\"62\" y1=\"86.8\" x2=\"582\" y2=\"86.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"90.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">80</text><line x1=\"62\" y1=\"44.0\" x2=\"582\" y2=\"44.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"48.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">100</text><text x=\"62.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">0</text><text x=\"148.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2</text><text x=\"235.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">4</text><text x=\"322.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">6</text><text x=\"408.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">8</text><text x=\"495.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">10</text><text x=\"582.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">12</text><line x1=\"62\" y1=\"44\" x2=\"62\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"258\" x2=\"582\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><polyline points=\"62.0,44.0 105.3,74.0 148.7,112.5 192.0,146.7 235.3,176.7 278.7,202.4 322.0,221.6 365.3,234.5 408.7,243.0 495.3,251.6 582.0,258.0\" fill=\"none\" stroke=\"#0277bd\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"62.0\" cy=\"44.0\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"105.3\" cy=\"74.0\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"148.7\" cy=\"112.5\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"192.0\" cy=\"146.7\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"235.3\" cy=\"176.7\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"278.7\" cy=\"202.4\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"322.0\" cy=\"221.6\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"365.3\" cy=\"234.5\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"408.7\" cy=\"243.0\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"495.3\" cy=\"251.6\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"582.0\" cy=\"258.0\" r=\"3.2\" fill=\"#0277bd\"/><text x=\"322\" y=\"298\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Temps (min)</text><text transform=\"translate(16,151) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Amidon restant (%)</text><text x=\"582\" y=\"314\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Test à l’eau iodée</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Protocole ExAO classique : suivi temporel de l’hydrolyse de l’amidon par l’amylase salivaire à 37 °C.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Conditions optimales de l’action de l’amylase salivaire",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Facteurs influençant l’activité enzymatique</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Paramètre</th><th style=\"text-align:center\">Condition testée</th><th style=\"text-align:center\">Amidon hydrolysé (5 min)</th><th style=\"text-align:center\">Conclusion</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Température</td><td style=\"text-align:center\">5 °C</td><td style=\"text-align:center\">≈ 5 %</td><td style=\"text-align:center\">enzyme très ralentie</td></tr><tr><td style=\"font-weight:600\">Température</td><td style=\"text-align:center\">37 °C</td><td style=\"text-align:center\">≈ 74 %</td><td style=\"text-align:center\">optimum proche du corps</td></tr><tr><td style=\"font-weight:600\">Température</td><td style=\"text-align:center\">70 °C</td><td style=\"text-align:center\">≈ 2 %</td><td style=\"text-align:center\">enzyme dénaturée</td></tr><tr><td style=\"font-weight:600\">pH</td><td style=\"text-align:center\">3 (acide)</td><td style=\"text-align:center\">≈ 20 %</td><td style=\"text-align:center\">activité réduite</td></tr><tr><td style=\"font-weight:600\">pH</td><td style=\"text-align:center\">7 (neutre)</td><td style=\"text-align:center\">≈ 74 %</td><td style=\"text-align:center\">optimum proche de la salive</td></tr><tr><td style=\"font-weight:600\">Témoin sans enzyme</td><td style=\"text-align:center\">37 °C</td><td style=\"text-align:center\">0 %</td><td style=\"text-align:center\">l’enzyme est indispensable</td></tr></tbody></table></div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Du bol alimentaire aux nutriments : cadre de la digestion",
    "contenu": "<svg viewBox=\"0 0 600 280\" role=\"img\" aria-label=\"Action des enzymes digestives dans le tube digestif\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Action des enzymes digestives dans le tube digestif</text><rect x=\"20\" y=\"30\" width=\"560\" height=\"46\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"300\" y=\"53\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Bouche — amylase salivaire : amidon → maltose</text><rect x=\"20\" y=\"96\" width=\"560\" height=\"46\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"300\" y=\"119\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Estomac — pepsine (pH 2) : protéines → peptides</text><rect x=\"20\" y=\"162\" width=\"560\" height=\"46\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"300\" y=\"185\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Intestin grêle — lipase, amylase, peptidases → nutriments</text><rect x=\"20\" y=\"228\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"248\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Absorption des nutriments à travers les villosités intestinales</text><line x1=\"300\" y1=\"76\" x2=\"300.0\" y2=\"94.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"300,96 295.0,85.0 305.0,85.0\" fill=\"#475569\"/><line x1=\"300\" y1=\"142\" x2=\"300.0\" y2=\"160.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"300,162 295.0,151.0 305.0,151.0\" fill=\"#475569\"/><line x1=\"300\" y1=\"208\" x2=\"300.0\" y2=\"226.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"300,228 295.0,217.0 305.0,217.0\" fill=\"#475569\"/><text x=\"8\" y=\"272\" font-size=\"10\" fill=\"#94a3b8\">Chaque enzyme est spécifique d’un substrat</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Physiologie digestive ; manuels de SVT cycle 4.</div>"
   }
  ]
 },
 "A4-MICR": {
  "questions": [
   {
    "q": "Relevez le nombre d'espèces et la masse du microbiote intestinal ; exprimez le rapport entre gènes bactériens et gènes humains.",
    "verb": "Relever et exprimer",
    "pts": 2
   },
   {
    "q": "Citez deux rôles du microbiote et expliquez le mécanisme de la fermentation des fibres.",
    "verb": "Citer et expliquer",
    "pts": 2.5
   },
   {
    "q": "Interprétez la baisse de l'indice de Shannon après antibiothérapie et proposez une explication scientifique.",
    "verb": "Interpréter et proposer",
    "pts": 3
   }
  ],
  "sources": [
   "Human Microbiome Project — hmpdacc.org",
   "Sender, Fuchs & Waller (2016) PLoS Biology"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Un écosystème dans notre intestin : chiffres clés du microbiote",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Le microbiote intestinal en chiffres</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Caractéristique</th><th style=\"text-align:center\">Valeur</th><th style=\"text-align:center\">Remarque</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Microorganismes</td><td style=\"text-align:center\">≈ 100 000 milliards (10¹⁴)</td><td style=\"text-align:center\">autant que de cellules humaines</td></tr><tr><td style=\"font-weight:600\">Nombre d’espèces</td><td style=\"text-align:center\">≈ 1 000 à 1 500</td><td style=\"text-align:center\">dominé par 2 embranchements</td></tr><tr><td style=\"font-weight:600\">Masse totale</td><td style=\"text-align:center\">≈ 1 à 2 kg</td><td style=\"text-align:center\">surtout dans le côlon</td></tr><tr><td style=\"font-weight:600\">Firmicutes (gram +)</td><td style=\"text-align:center\">60 – 80 %</td><td style=\"text-align:center\">fermentent les fibres</td></tr><tr><td style=\"font-weight:600\">Bacteroidetes (gram −)</td><td style=\"text-align:center\">20 – 40 %</td><td style=\"text-align:center\">dégradent les sucres complexes</td></tr><tr><td style=\"font-weight:600\">Gènes bactériens</td><td style=\"text-align:center\">≈ 150× nos gènes</td><td style=\"text-align:center\">métabolisme très riche</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Human Microbiome Project ; Sender, Fuchs &amp; Waller, 2016, PLoS Biology.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Ce que le microbiote fait pour nous : rôles physiologiques",
    "contenu": "<div style=\"border-left:4px solid #558b2f;background:#558b2f0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🔬 Fermentation des fibres</strong><br>Les bactéries du côlon fermentent les fibres végétales que nos enzymes ne peuvent pas digérer. Elles produisent des acides gras à chaîne courte (butyrate, propionate, acétate) qui nourrissent les cellules de la paroi intestinale et régulent le métabolisme.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Déséquilibre du microbiote (dysbiose) et conséquences",
    "contenu": "<svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Diversité bactérienne selon le contexte (indice de Shannon)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"24\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Diversité bactérienne selon le contexte (indice de Shannon)</text><line x1=\"62\" y1=\"226.0\" x2=\"582\" y2=\"226.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"230.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0</text><line x1=\"62\" y1=\"188.8\" x2=\"582\" y2=\"188.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"192.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0.8</text><line x1=\"62\" y1=\"151.6\" x2=\"582\" y2=\"151.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"155.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">1.6</text><line x1=\"62\" y1=\"114.4\" x2=\"582\" y2=\"114.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"118.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">2.4</text><line x1=\"62\" y1=\"77.2\" x2=\"582\" y2=\"77.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"81.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">3.2</text><line x1=\"62\" y1=\"40.0\" x2=\"582\" y2=\"40.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"44.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">4</text><line x1=\"62\" y1=\"40\" x2=\"62\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"226\" x2=\"582\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><rect x=\"95.0\" y=\"58.6\" width=\"64.0\" height=\"167.4\" rx=\"3\" fill=\"#2e7d32\"/><text x=\"127.0\" y=\"52.6\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">3.6</text><text x=\"127.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Adulte sain</text><rect x=\"225.0\" y=\"91.2\" width=\"64.0\" height=\"134.8\" rx=\"3\" fill=\"#f9a825\"/><text x=\"257.0\" y=\"85.2\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">2.9</text><text x=\"257.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Nourrisson allaité</text><rect x=\"355.0\" y=\"128.3\" width=\"64.0\" height=\"97.7\" rx=\"3\" fill=\"#ef6c00\"/><text x=\"387.0\" y=\"122.3\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">2.1</text><text x=\"387.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Après antibiotiques</text><rect x=\"485.0\" y=\"123.7\" width=\"64.0\" height=\"102.3\" rx=\"3\" fill=\"#c62828\"/><text x=\"517.0\" y=\"117.7\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">2.2</text><text x=\"517.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Obésité sévère</text><text transform=\"translate(16,133) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Indice de Shannon</text><text x=\"582\" y=\"294\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Valeurs indicatives comparatives</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Diversité microbienne ; Ley et al., travaux sur l’obésité et le microbiote.</div>"
   }
  ]
 },
 "A4-REIN": {
  "questions": [
   {
    "q": "Comparez la concentration de glucose dans le plasma, l'urine primitive et l'urine définitive, puis concluez sur son devenir.",
    "verb": "Comparer et conclure",
    "pts": 2
   },
   {
    "q": "Nommez les trois étapes de la formation de l'urine et indiquez laquelle concerne le glucose.",
    "verb": "Nommer et indiquer",
    "pts": 2.5
   },
   {
    "q": "Comparez dialyse et greffe rénale et expliquez pourquoi le don d'organes est indispensable.",
    "verb": "Comparer et expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "Agence de la biomédecine — agence-biomedecine.fr",
   "Physiologie rénale — manuels de SVT cycle 4"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Du plasma à l’urine : filtration, réabsorption, sécrétion",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Composition comparée du plasma et des urines (valeurs indicatives)</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Substance</th><th style=\"text-align:center\">Plasma sanguin</th><th style=\"text-align:center\">Urine primitive</th><th style=\"text-align:center\">Urine définitive</th><th style=\"text-align:center\">Devenir</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Eau (g/L)</td><td style=\"text-align:center\">900</td><td style=\"text-align:center\">900</td><td style=\"text-align:center\">≈ 960</td><td style=\"text-align:center\">réabsorbée à 99 %</td></tr><tr><td style=\"font-weight:600\">Protéines (g/L)</td><td style=\"text-align:center\">70</td><td style=\"text-align:center\">≈ 0</td><td style=\"text-align:center\">0</td><td style=\"text-align:center\">non filtrées</td></tr><tr><td style=\"font-weight:600\">Glucose (g/L)</td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">1</td><td style=\"text-align:center\">0</td><td style=\"text-align:center\">entièrement réabsorbé</td></tr><tr><td style=\"font-weight:600\">Urée (g/L)</td><td style=\"text-align:center\">0,3</td><td style=\"text-align:center\">0,3</td><td style=\"text-align:center\">≈ 20</td><td style=\"text-align:center\">concentrée, éliminée</td></tr><tr><td style=\"font-weight:600\">Créatinine (g/L)</td><td style=\"text-align:center\">0,01</td><td style=\"text-align:center\">0,01</td><td style=\"text-align:center\">≈ 1,5</td><td style=\"text-align:center\">non réabsorbée, éliminée</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Valeurs physiologiques indicatives ; explorations fonctionnelles rénales.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Le néphron : unité fonctionnelle du rein",
    "contenu": "<svg viewBox=\"0 0 600 290\" role=\"img\" aria-label=\"Le néphron et les trois étapes de la formation de l’urine\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Le néphron et les trois étapes de la formation de l’urine</text><rect x=\"20\" y=\"30\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"290\" y=\"52\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">1. Filtration glomérulaire — le sang est filtré</text><rect x=\"20\" y=\"96\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"290\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">2. Réabsorption tubulaire — l’utile retourne dans le sang</text><rect x=\"20\" y=\"162\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"290\" y=\"184\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">3. Sécrétion tubulaire — le dangereux est ajouté</text><rect x=\"20\" y=\"228\" width=\"250\" height=\"46\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"145\" y=\"243\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Urine définitive</text><text x=\"145\" y=\"258\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">vers la vessie</text><rect x=\"310\" y=\"228\" width=\"250\" height=\"46\" rx=\"7\" fill=\"#eef4f8\" stroke=\"#64748b\" stroke-width=\"1.4\"/><text x=\"435\" y=\"243\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Sang purifié</text><text x=\"435\" y=\"258\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">vers la circulation</text><line x1=\"145\" y1=\"74\" x2=\"145.0\" y2=\"94.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"145,96 140.0,85.0 150.0,85.0\" fill=\"#475569\"/><line x1=\"145\" y1=\"140\" x2=\"145.0\" y2=\"160.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"145,162 140.0,151.0 150.0,151.0\" fill=\"#475569\"/><line x1=\"145\" y1=\"206\" x2=\"145.0\" y2=\"226.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"145,228 140.0,217.0 150.0,217.0\" fill=\"#475569\"/><line x1=\"435\" y1=\"206\" x2=\"435.0\" y2=\"226.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"435,228 430.0,217.0 440.0,217.0\" fill=\"#475569\"/><text x=\"8\" y=\"282\" font-size=\"10\" fill=\"#94a3b8\">Un rein compte environ 1 million de néphrons</text></svg>"
   },
   {
    "numero": "Doc 3",
    "titre": "Insuffisance rénale et don d’organes",
    "contenu": "<div style=\"border-left:4px solid #c62828;background:#c628280f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🫘 Quand les reins ne fonctionnent plus</strong><br>L'insuffisance rénale chronique impose l'épuration du sang par dialyse (environ 3 séances de 4 h par semaine) ou la greffe d'un rein. Un donneur peut vivre avec un seul rein : le don d'organes est donc possible de son vivant (don entre proches) ou après décès.</div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Agence de la biomédecine — don d’organes.</div>"
   }
  ]
 },
 "A4-AUDI": {
  "questions": [
   {
    "q": "Relevez le niveau sonore d'une conversation et d'un concert, puis identifiez le seuil à partir duquel le risque auditif apparaît.",
    "verb": "Relever et identifier",
    "pts": 2
   },
   {
    "q": "Lisez sur l'échelle la durée d'exposition tolérable à 91 dB et à 100 dB ; concluez sur l'effet d'une augmentation du niveau sonore.",
    "verb": "Lire et conclure",
    "pts": 2.5
   },
   {
    "q": "Décrivez le trajet du son jusqu'au cerveau et expliquez pourquoi une surexposition peut provoquer une surdité définitive.",
    "verb": "Décrire et expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "OMS — Environmental Noise Guidelines",
   "INRS — bruit et risques auditifs"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Échelle des niveaux sonores et risques auditifs",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Niveaux sonores usuels et risques associés</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Source sonore</th><th style=\"text-align:center\">Niveau (dB)</th><th style=\"text-align:center\">Perception / risque</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Seuil d’audition</td><td style=\"text-align:center\">0</td><td style=\"text-align:center\">limite de perception</td></tr><tr><td style=\"font-weight:600\">Chuchotement</td><td style=\"text-align:center\">30</td><td style=\"text-align:center\">très faible</td></tr><tr><td style=\"font-weight:600\">Conversation normale</td><td style=\"text-align:center\">60</td><td style=\"text-align:center\">confortable</td></tr><tr><td style=\"font-weight:600\">Circulation dense</td><td style=\"text-align:center\">75</td><td style=\"text-align:center\">gênant</td></tr><tr><td style=\"font-weight:600\">Seuil de danger (8 h/jour)</td><td style=\"text-align:center\">85</td><td style=\"text-align:center\">risque de lésion des cils</td></tr><tr><td style=\"font-weight:600\">Concert / discothèque</td><td style=\"text-align:center\">100 – 105</td><td style=\"text-align:center\">danger en moins de 15 min</td></tr><tr><td style=\"font-weight:600\">Seuil de douleur</td><td style=\"text-align:center\">120</td><td style=\"text-align:center\">douleur immédiate</td></tr><tr><td style=\"font-weight:600\">Pétard / moteur d’avion</td><td style=\"text-align:center\">130 – 140</td><td style=\"text-align:center\">lésion immédiate possible</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 OMS — Environmental Noise Guidelines ; INRS — bruit au travail.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Pourquoi les décibels ne s’additionnent pas : une échelle logarithmique",
    "contenu": "<div style=\"border-left:4px solid #0277bd;background:#0277bd0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>📐 L’échelle logarithmique des décibels</strong><br>Ajouter 10 dB ne correspond pas à « 10 de plus » mais à une énergie sonore multipliée par 10. Deux sources de 60 dB ne donnent pas 120 dB mais environ 63 dB : c'est pourquoi les seuils de risque grimpent si vite.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Les cellules ciliées de la cochlée : capteurs fragiles et non régénérables",
    "contenu": "<svg viewBox=\"0 0 600 270\" role=\"img\" aria-label=\"De la vibration sonore au signal nerveux\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">De la vibration sonore au signal nerveux</text><rect x=\"20\" y=\"30\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"290\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Onde sonore → pavillon → conduit auditif → tympan</text><rect x=\"20\" y=\"90\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"290\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Osselets (marteau, enclume, étrier) → amplification</text><rect x=\"20\" y=\"150\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"290\" y=\"170\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Cochlée → cellules ciliées (mécanorécepteurs)</text><rect x=\"20\" y=\"210\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"290\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Nerf auditif → aire auditive du cortex temporal</text><line x1=\"290\" y1=\"70\" x2=\"290.0\" y2=\"88.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,90 285.0,79.0 295.0,79.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"130\" x2=\"290.0\" y2=\"148.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,150 285.0,139.0 295.0,139.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"190\" x2=\"290.0\" y2=\"208.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,210 285.0,199.0 295.0,199.0\" fill=\"#475569\"/><text x=\"8\" y=\"262\" font-size=\"10\" fill=\"#94a3b8\">≈ 15 000 cellules ciliées internes ; elles ne se régénèrent pas</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Physiologie auditive ; OMS — surdité et déficience auditive.</div>"
   }
  ]
 },
 "A4-VAC": {
  "questions": [
   {
    "q": "Relevez le taux maximal d'anticorps après la première injection et après le rappel, puis comparez ces deux valeurs.",
    "verb": "Relever et comparer",
    "pts": 2
   },
   {
    "q": "Relevez le délai d'apparition des anticorps lors de la réponse primaire et lors de la réponse secondaire ; expliquez cette différence.",
    "verb": "Relever et expliquer",
    "pts": 2.5
   },
   {
    "q": "Schématisez la façon dont la vaccination prépare le système immunitaire à une future infection.",
    "verb": "Schématiser",
    "pts": 3
   }
  ],
  "sources": [
   "OMS — Comment fonctionnent les vaccins",
   "Immunologie (Janeway’s Immunobiology)"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Cinétique des anticorps : primo-injection et injection de rappel",
    "contenu": "<svg viewBox=\"0 0 600 320\" role=\"img\" aria-label=\"Évolution du taux d’anticorps après vaccination\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"26\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Évolution du taux d’anticorps après vaccination</text><rect x=\"62\" y=\"16\" width=\"11\" height=\"11\" rx=\"2\" fill=\"#0277bd\"/><text x=\"79\" y=\"26\" font-size=\"11\" fill=\"#334155\">1re injection (J0)</text><rect x=\"240\" y=\"16\" width=\"11\" height=\"11\" rx=\"2\" fill=\"#c62828\"/><text x=\"257\" y=\"26\" font-size=\"11\" fill=\"#334155\">Rappel (S6)</text><line x1=\"62\" y1=\"258.0\" x2=\"582\" y2=\"258.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"262.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0</text><line x1=\"62\" y1=\"215.2\" x2=\"582\" y2=\"215.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"219.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">20</text><line x1=\"62\" y1=\"172.4\" x2=\"582\" y2=\"172.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"176.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">40</text><line x1=\"62\" y1=\"129.6\" x2=\"582\" y2=\"129.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"133.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">60</text><line x1=\"62\" y1=\"86.8\" x2=\"582\" y2=\"86.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"90.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">80</text><line x1=\"62\" y1=\"44.0\" x2=\"582\" y2=\"44.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"48.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">100</text><text x=\"62.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">0</text><text x=\"148.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">8.666666666666666</text><text x=\"235.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">17.333333333333332</text><text x=\"322.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">26</text><text x=\"408.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">34.666666666666664</text><text x=\"495.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">43.333333333333336</text><text x=\"582.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">52</text><line x1=\"62\" y1=\"44\" x2=\"62\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"258\" x2=\"582\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><polyline points=\"62.0,258.0 72.0,258.0 82.0,249.4 92.0,232.3 102.0,198.1 112.0,172.4 122.0,159.6 142.0,176.7 182.0,206.6 262.0,228.0 342.0,238.7 462.0,245.2 582.0,249.4\" fill=\"none\" stroke=\"#0277bd\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"62.0\" cy=\"258.0\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"72.0\" cy=\"258.0\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"82.0\" cy=\"249.4\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"92.0\" cy=\"232.3\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"102.0\" cy=\"198.1\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"112.0\" cy=\"172.4\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"122.0\" cy=\"159.6\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"142.0\" cy=\"176.7\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"182.0\" cy=\"206.6\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"262.0\" cy=\"228.0\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"342.0\" cy=\"238.7\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"462.0\" cy=\"245.2\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"582.0\" cy=\"249.4\" r=\"3.2\" fill=\"#0277bd\"/><polyline points=\"62.0,228.0 72.0,223.8 82.0,172.4 92.0,108.2 102.0,69.7 112.0,56.8 142.0,74.0 182.0,108.2 262.0,151.0 382.0,181.0 502.0,198.1 582.0,206.6\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"62.0\" cy=\"228.0\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"72.0\" cy=\"223.8\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"82.0\" cy=\"172.4\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"92.0\" cy=\"108.2\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"102.0\" cy=\"69.7\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"112.0\" cy=\"56.8\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"142.0\" cy=\"74.0\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"182.0\" cy=\"108.2\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"262.0\" cy=\"151.0\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"382.0\" cy=\"181.0\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"502.0\" cy=\"198.1\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"582.0\" cy=\"206.6\" r=\"3.2\" fill=\"#c62828\"/><text x=\"322\" y=\"298\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Temps après vaccination (semaines)</text><text transform=\"translate(16,151) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Taux d’anticorps (u.a.)</text><text x=\"582\" y=\"314\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Réponse primaire lente vs réponse secondaire rapide</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Cinétique humorale typique d’une réponse vaccinale ; immunologie (Janeway).</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Réponse primaire et réponse secondaire comparées",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">La mémoire immunitaire en action</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Caractéristique</th><th style=\"text-align:center\">Réponse primaire (1re injection)</th><th style=\"text-align:center\">Réponse secondaire (rappel)</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Délai d’apparition des anticorps</td><td style=\"text-align:center\">5 à 10 jours</td><td style=\"text-align:center\">1 à 3 jours</td></tr><tr><td style=\"font-weight:600\">Pic de concentration</td><td style=\"text-align:center\">modéré (ex. 46)</td><td style=\"text-align:center\">très élevé (ex. 94)</td></tr><tr><td style=\"font-weight:600\">Anticorps majoritaire</td><td style=\"text-align:center\">IgM puis IgG</td><td style=\"text-align:center\">IgG (mémoire)</td></tr><tr><td style=\"font-weight:600\">Durée de protection</td><td style=\"text-align:center\">quelques semaines</td><td style=\"text-align:center\">plusieurs années</td></tr><tr><td style=\"font-weight:600\">Cellules impliquées</td><td style=\"text-align:center\">lymphocytes B naïfs</td><td style=\"text-align:center\">lymphocytes B mémoires</td></tr></tbody></table></div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Du lymphocyte mémoires à la protection vaccinale",
    "contenu": "<svg viewBox=\"0 0 600 250\" role=\"img\" aria-label=\"Principe de la vaccination : préparer la mémoire immunitaire\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Principe de la vaccination : préparer la mémoire immunitaire</text><rect x=\"20\" y=\"30\" width=\"260\" height=\"80\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"150\" y=\"54\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Antigène vaccinal</text><text x=\"150\" y=\"69\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(agent atténué, inactivé</text><text x=\"150\" y=\"84\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">ou fragment inoffensif)</text><rect x=\"320\" y=\"30\" width=\"260\" height=\"80\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"450\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Réaction immunitaire</text><text x=\"450\" y=\"77\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">contrôlée, sans maladie</text><rect x=\"20\" y=\"150\" width=\"260\" height=\"80\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"150\" y=\"182\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Production de lymphocytes</text><text x=\"150\" y=\"197\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">B mémoires (et T)</text><rect x=\"320\" y=\"150\" width=\"260\" height=\"80\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"450\" y=\"182\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Rencontre ultérieure</text><text x=\"450\" y=\"197\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">du pathogène réel</text><rect x=\"20\" y=\"250\" width=\"560\" height=\"34\" rx=\"7\" fill=\"#eef4f8\" stroke=\"#64748b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"267\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">→ Réponse rapide et massive : la maladie est évitée ou atténuée</text><line x1=\"280\" y1=\"70\" x2=\"318.4\" y2=\"70.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"320,70 309.0,75.0 309.0,65.0\" fill=\"#475569\"/><line x1=\"150\" y1=\"110\" x2=\"150.0\" y2=\"148.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"150,150 145.0,139.0 155.0,139.0\" fill=\"#475569\"/><line x1=\"450\" y1=\"110\" x2=\"450.0\" y2=\"148.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"450,150 445.0,139.0 455.0,139.0\" fill=\"#475569\"/><line x1=\"450\" y1=\"230\" x2=\"450.0\" y2=\"248.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"450,250 445.0,239.0 455.0,239.0\" fill=\"#475569\"/><text x=\"8\" y=\"242\" font-size=\"10\" fill=\"#94a3b8\">La vaccination prépare le système immunitaire sans provoquer la maladie</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 OMS — Comment fonctionnent les vaccins.</div>"
   }
  ]
 },
 "A4-PLAI": {
  "questions": [
   {
    "q": "Établissez une correspondance entre le gland du pénis et son homologue féminin, et indiquez leur origine embryonnaire commune.",
    "verb": "Établir une correspondance",
    "pts": 2
   },
   {
    "q": "Complétez le schéma du clitoris en distinguant la partie visible et la partie interne.",
    "verb": "Compléter un schéma",
    "pts": 2.5
   },
   {
    "q": "Décrivez les étapes qui mènent d'une stimulation à la sensation de plaisir.",
    "verb": "Décrire",
    "pts": 3
   }
  ],
  "sources": [
   "Anatomie humaine (Gray’s Anatomy)",
   "Neurobiologie du circuit de la récompense"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Anatomie comparée du clitoris et du pénis : des homologies de développement",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Homologies anatomiques des organes érectiles</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Structure</th><th style=\"text-align:center\">Appareil masculin</th><th style=\"text-align:center\">Appareil féminin</th><th style=\"text-align:center\">Origine embryonnaire</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Gland</td><td style=\"text-align:center\">gland du pénis</td><td style=\"text-align:center\">gland du clitoris</td><td style=\"text-align:center\">tubercule génital</td></tr><tr><td style=\"font-weight:600\">Corps érectile</td><td style=\"text-align:center\">corps caverneux et spongieux</td><td style=\"text-align:center\">corps caverneux du clitoris</td><td style=\"text-align:center\">ébauche commune</td></tr><tr><td style=\"font-weight:600\">Prépuce</td><td style=\"text-align:center\">prépuce</td><td style=\"text-align:center\">capuchon du clitoris</td><td style=\"text-align:center\">repli cutané</td></tr><tr><td style=\"font-weight:600\">Partie interne</td><td style=\"text-align:center\">racine du pénis</td><td style=\"text-align:center\">racine et piliers du clitoris</td><td style=\"text-align:center\">ébauche commune</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Anatomie humaine ; développement embryonnaire des organes génitaux externes.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Le clitoris : un organe en grande partie interne",
    "contenu": "<svg viewBox=\"0 0 600 260\" role=\"img\" aria-label=\"Anatomie du clitoris (vue latérale)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Anatomie du clitoris (vue latérale)</text><rect x=\"20\" y=\"30\" width=\"180\" height=\"60\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"110\" y=\"44\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Gland du clitoris</text><text x=\"110\" y=\"59\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(partie visible,</text><text x=\"110\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">très innervée)</text><rect x=\"230\" y=\"30\" width=\"150\" height=\"60\" rx=\"7\" fill=\"#fce4ec\" stroke=\"#ad1457\" stroke-width=\"1.4\"/><text x=\"305\" y=\"52\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Corps du clitoris</text><text x=\"305\" y=\"67\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(≈ 3-4 cm)</text><rect x=\"410\" y=\"30\" width=\"170\" height=\"60\" rx=\"7\" fill=\"#f8bbd0\" stroke=\"#ad1457\" stroke-width=\"1.4\"/><text x=\"495\" y=\"44\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Piliers et bulbes</text><text x=\"495\" y=\"59\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(parties internes,</text><text x=\"495\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">≈ 7-10 cm)</text><rect x=\"20\" y=\"150\" width=\"560\" height=\"90\" rx=\"7\" fill=\"#eef4f8\" stroke=\"#64748b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"187\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Environ 8 000 terminaisons nerveuses dans le gland, soit une densité comparable</text><text x=\"300\" y=\"202\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">à celle du gland du pénis ; innervation principale par le nerf pudendal.</text><line x1=\"200\" y1=\"60\" x2=\"228.4\" y2=\"60.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"230,60 219.0,65.0 219.0,55.0\" fill=\"#475569\"/><line x1=\"380\" y1=\"60\" x2=\"408.4\" y2=\"60.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"410,60 399.0,65.0 399.0,55.0\" fill=\"#475569\"/><text x=\"8\" y=\"252\" font-size=\"10\" fill=\"#94a3b8\">La plus grande partie de l’organe est interne</text></svg>"
   },
   {
    "numero": "Doc 3",
    "titre": "Réponse physiologique et régulation par le système nerveux",
    "contenu": "<div style=\"border-left:4px solid #6a1b9a;background:#6a1b9a0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🧠 Plaisir et système nerveux</strong><br>La stimulation des zones érogènes active des récepteurs sensoriels qui transmettent l'information au système nerveux central. Les centres du plaisir libèrent de la dopamine et d'autres neuromédiateurs, ce qui produit la sensation de plaisir et renforce le comportement.</div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Neurobiologie du plaisir ; travaux sur le circuit de la récompense.</div>"
   }
  ]
 },
 "A4-RECO": {
  "questions": [
   {
    "q": "Classez les récepteurs du tableau selon le type de stimulus qu'ils détectent.",
    "verb": "Classer",
    "pts": 2
   },
   {
    "q": "Complétez la chaîne de traitement en nommant les structures traversées par l'information sensorielle.",
    "verb": "Compléter",
    "pts": 2.5
   },
   {
    "q": "Expliquez le rôle de la dopamine dans le circuit de la récompense et donnez un exemple de comportement concerné.",
    "verb": "Expliquer et illustrer",
    "pts": 3
   }
  ],
  "sources": [
   "Neurosciences — physiologie sensorielle",
   "Berridge & Krob — dopamine et récompense"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Les récepteurs sensoriels : convertisseurs du monde en influx nerveux",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Diversité des récepteurs sensoriels</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Type de récepteur</th><th style=\"text-align:center\">Stimulus détecté</th><th style=\"text-align:center\">Localisation</th><th style=\"text-align:center\">Exemple</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Mécanorécepteur</td><td style=\"text-align:center\">pression, vibration</td><td style=\"text-align:center\">peau, oreille interne</td><td style=\"text-align:center\">corpuscules de Meissner</td></tr><tr><td style=\"font-weight:600\">Thermorécepteur</td><td style=\"text-align:center\">chaud / froid</td><td style=\"text-align:center\">peau</td><td style=\"text-align:center\">récepteurs cutanés</td></tr><tr><td style=\"font-weight:600\">Nocicepteur</td><td style=\"text-align:center\">stimulus douloureux</td><td style=\"text-align:center\">peau, organes</td><td style=\"text-align:center\">terminaisons libres</td></tr><tr><td style=\"font-weight:600\">Photorécepteur</td><td style=\"text-align:center\">lumière</td><td style=\"text-align:center\">rétine</td><td style=\"text-align:center\">cônes et bâtonnets</td></tr><tr><td style=\"font-weight:600\">Chémorécepteur</td><td style=\"text-align:center\">molécules</td><td style=\"text-align:center\">nez, langue</td><td style=\"text-align:center\">récepteurs olfactifs</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Physiologie sensorielle ; manuels de neurosciences.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Le trajet de l’information : du récepteur au cortex",
    "contenu": "<svg viewBox=\"0 0 600 270\" role=\"img\" aria-label=\"Chaîne de traitement de l’information sensorielle\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Chaîne de traitement de l’information sensorielle</text><rect x=\"20\" y=\"30\" width=\"560\" height=\"42\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"300\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">1. Récepteurs sensoriels → transduction en signal électrique</text><rect x=\"20\" y=\"92\" width=\"560\" height=\"42\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"300\" y=\"113\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">2. Nerfs sensitifs → message nerveux afférent</text><rect x=\"20\" y=\"154\" width=\"560\" height=\"42\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">3. Moelle épinière / thalamus → relais et aiguillage</text><rect x=\"20\" y=\"216\" width=\"560\" height=\"42\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"300\" y=\"237\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">4. Cortex cérébral (aire sensorielle) → perception consciente</text><line x1=\"290\" y1=\"72\" x2=\"290.0\" y2=\"90.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,92 285.0,81.0 295.0,81.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"134\" x2=\"290.0\" y2=\"152.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,154 285.0,143.0 295.0,143.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"196\" x2=\"290.0\" y2=\"214.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,216 285.0,205.0 295.0,205.0\" fill=\"#475569\"/><text x=\"8\" y=\"262\" font-size=\"10\" fill=\"#94a3b8\">Chaque information arrive dans une aire corticale spécialisée</text></svg>"
   },
   {
    "numero": "Doc 3",
    "titre": "Le circuit de la récompense et le rôle de la dopamine",
    "contenu": "<div style=\"border-left:4px solid #6a1b9a;background:#6a1b9a0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>⚡ Le neuromédiateur du plaisir</strong><br>La dopamine est libérée au niveau du noyau accumbens lors d'une stimulation agréable. Elle signale au cerveau la valeur positive de l'expérience et favorise la mémorisation du comportement associé.</div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Neurosciences affectives ; travaux sur le circuit dopaminergique.</div>"
   }
  ]
 },
 "A4-CONS": {
  "questions": [
   {
    "q": "Citez trois critères du consentement et donnez pour chacun un exemple de situation qui ne le respecte pas.",
    "verb": "Citer et illustrer",
    "pts": 2
   },
   {
    "q": "Indiquez l'âge de la majorité sexuelle en France et expliquez la logique de cette protection juridique.",
    "verb": "Indiquer et expliquer",
    "pts": 2.5
   },
   {
    "q": "Identifiez deux ressources vers lesquelles orienter un camarade en difficulté et précisez leur rôle.",
    "verb": "Identifier et préciser",
    "pts": 3
   }
  ],
  "sources": [
   "Code pénal français — atteintes sexuelles, harcèlement",
   "Ressources Éducation nationale (119, 3018)"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Les critères d’une relation librement consentie",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Cinq critères du consentement</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Critère</th><th style=\"text-align:center\">Ce qu’il signifie concrètement</th><th style=\"text-align:center\">Signal d’alerte</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Libre</td><td style=\"text-align:center\">sans pression, chantage ni contrainte</td><td style=\"text-align:center\">« si tu m’aimais, tu… »</td></tr><tr><td style=\"font-weight:600\">Éclairé</td><td style=\"text-align:center\">en connaissant les faits et les risques</td><td style=\"text-align:center\">mensonge, dissimulation</td></tr><tr><td style=\"font-weight:600\">Spécifique</td><td style=\"text-align:center\">pour un acte précis, pas un accord général</td><td style=\"text-align:center\">déduire un accord d’un autre</td></tr><tr><td style=\"font-weight:600\">Réversible</td><td style=\"text-align:center\">on peut changer d’avis à tout moment</td><td style=\"text-align:center\">culpabiliser l’autre d’arrêter</td></tr><tr><td style=\"font-weight:600\">Enthousiaste</td><td style=\"text-align:center\">un vrai « oui » et non un silence</td><td style=\"text-align:center\">interpréter le silence</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Éducation à la sexualité ; définitions du consentement.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Le cadre légal français",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Repères légaux</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Notion juridique</th><th style=\"text-align:center\">Règle en France</th><th style=\"text-align:center\">Conséquence</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Majorité sexuelle</td><td style=\"text-align:center\">15 ans</td><td style=\"text-align:center\">aucun rapport avec un mineur de moins de 15 ans n’est libre</td></tr><tr><td style=\"font-weight:600\">Atteinte sexuelle sur mineur</td><td style=\"text-align:center\">puni par la loi</td><td style=\"text-align:center\">jusqu’à 20 ans de réclusion selon les cas</td></tr><tr><td style=\"font-weight:600\">Diffusion d’images intimes</td><td style=\"text-align:center\">interdite</td><td style=\"text-align:center\">délit pénal, même avec accord initial</td></tr><tr><td style=\"font-weight:600\">Harcèlement</td><td style=\"text-align:center\">interdit</td><td style=\"text-align:center\">délit, sanctions civiles et pénales</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Code pénal français (atteintes sexuelles, harcèlement).</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Comment réagir et vers qui se tourner ?",
    "contenu": "<div style=\"border-left:4px solid #0277bd;background:#0277bd0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🤝 En cas de doute ou de situation difficile</strong><br>On peut toujours en parler à un adulte de confiance : infirmier·ère scolaire, médecin scolaire, psychologue de l'Éducation nationale (Psy-EN), assistant·e de service social, ou appeler le 119 (enfance en danger).</div>"
   }
  ]
 },
 "A4-CARB": {
  "questions": [
   {
    "q": "Relevez la masse de carbone dans l'atmosphère préindustrielle et dans la lithosphère, puis calculez leur rapport.",
    "verb": "Relever et calculer",
    "pts": 2
   },
   {
    "q": "Calculez le temps de résidence du carbone dans l'atmosphère préindustrielle à l'aide de la formule fournie, en précisant les unités.",
    "verb": "Calculer",
    "pts": 2.5
   },
   {
    "q": "Établissez le bilan annuel des entrées et des sorties de carbone dans l'atmosphère et expliquez pourquoi le CO₂ augmente malgré les puits naturels.",
    "verb": "Établir et expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "Global Carbon Project — Budget mondial du carbone",
   "NOAA GML — Mauna Loa (courbe de Keeling)",
   "GIEC AR6 — cycle du carbone"
  ]
 },
 "A3-DENS": {
  "questions": [
   {
    "q": "Classez les roches du document par masse volumique croissante et comparez la croûte continentale et la croûte océanique.",
    "verb": "Classer et comparer",
    "pts": 2
   },
   {
    "q": "Calculez la masse volumique du granite à partir des mesures fournies et vérifiez la cohérence avec le graphique.",
    "verb": "Calculer et vérifier",
    "pts": 2.5
   },
   {
    "q": "Expliquez l'évolution de la masse volumique des enveloppes terrestres et déduisez-en la composition probable du noyau.",
    "verb": "Expliquer et déduire",
    "pts": 3
   }
  ],
  "sources": [
   "Modèle sismique PREM",
   "Pétrographie — masses volumiques usuelles"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Masses volumiques des principales roches et enveloppes terrestres",
    "contenu": "<svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Masse volumique de différentes roches (g/cm³)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"24\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Masse volumique de différentes roches (g/cm³)</text><line x1=\"62\" y1=\"226.0\" x2=\"582\" y2=\"226.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"230.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0</text><line x1=\"62\" y1=\"188.8\" x2=\"582\" y2=\"188.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"192.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">2.8</text><line x1=\"62\" y1=\"151.6\" x2=\"582\" y2=\"151.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"155.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">5.6</text><line x1=\"62\" y1=\"114.4\" x2=\"582\" y2=\"114.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"118.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">8.4</text><line x1=\"62\" y1=\"77.2\" x2=\"582\" y2=\"77.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"81.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">11.2</text><line x1=\"62\" y1=\"40.0\" x2=\"582\" y2=\"40.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"44.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">14</text><line x1=\"62\" y1=\"40\" x2=\"62\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"226\" x2=\"582\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><rect x=\"76.1\" y=\"207.4\" width=\"46.1\" height=\"18.6\" rx=\"3\" fill=\"#424242\"/><text x=\"99.1\" y=\"201.4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">1.4</text><text x=\"99.1\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Charbon</text><rect x=\"150.4\" y=\"191.5\" width=\"46.1\" height=\"34.5\" rx=\"3\" fill=\"#8d6e63\"/><text x=\"173.4\" y=\"185.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">2.6</text><text x=\"173.4\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Calcaire</text><rect x=\"224.7\" y=\"190.1\" width=\"46.1\" height=\"35.9\" rx=\"3\" fill=\"#c62828\"/><text x=\"247.7\" y=\"184.1\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">2.7</text><text x=\"247.7\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Granite</text><rect x=\"299.0\" y=\"186.1\" width=\"46.1\" height=\"39.9\" rx=\"3\" fill=\"#37474f\"/><text x=\"322.0\" y=\"180.1\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">3</text><text x=\"322.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Basalte</text><rect x=\"373.3\" y=\"182.2\" width=\"46.1\" height=\"43.8\" rx=\"3\" fill=\"#6a1b9a\"/><text x=\"396.3\" y=\"176.2\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">3.3</text><text x=\"396.3\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Péridotite</text><rect x=\"447.5\" y=\"94.5\" width=\"46.1\" height=\"131.5\" rx=\"3\" fill=\"#0277bd\"/><text x=\"470.6\" y=\"88.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">9.9</text><text x=\"470.6\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Noyau externe</text><rect x=\"521.8\" y=\"53.3\" width=\"46.1\" height=\"172.7\" rx=\"3\" fill=\"#1565c0\"/><text x=\"544.9\" y=\"47.3\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">13</text><text x=\"544.9\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Noyau interne</text><text transform=\"translate(16,133) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Masse volumique (g/cm³)</text><text x=\"582\" y=\"294\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">ρ = m / V — la masse volumique augmente avec la profondeur</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Valeurs usuelles de pétrographie et de géophysique interne.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Méthode de mesure : pesée et déplacement d’eau",
    "contenu": "<div style=\"border-left:4px solid #0277bd;background:#0277bd0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>⚖️ Protocole de mesure</strong><br>On mesure la masse m de l'échantillon avec une balance, puis son volume V par déplacement d'eau dans une éprouvette graduée. La masse volumique se calcule par ρ = m / V (en g/cm³ si m est en g et V en cm³).</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Interprétation : densité croissante et structure interne de la Terre",
    "contenu": "<svg viewBox=\"0 0 600 260\" role=\"img\" aria-label=\"Répartition des densités dans la Terre\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Répartition des densités dans la Terre</text><rect x=\"20\" y=\"30\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"290\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Croûte continentale — ρ ≈ 2,7 g/cm³ (granite)</text><rect x=\"20\" y=\"90\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#eceff1\" stroke=\"#546e7a\" stroke-width=\"1.4\"/><text x=\"290\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Croûte océanique — ρ ≈ 3,0 g/cm³ (basalte + gabbros)</text><rect x=\"20\" y=\"150\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"290\" y=\"170\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Manteau — ρ ≈ 3,3 à 5,5 g/cm³ (péridotite)</text><rect x=\"20\" y=\"210\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"290\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Noyau — ρ ≈ 9,9 à 13 g/cm³ (fer + nickel)</text><line x1=\"290\" y1=\"70\" x2=\"290.0\" y2=\"88.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,90 285.0,79.0 295.0,79.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"130\" x2=\"290.0\" y2=\"148.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,150 285.0,139.0 295.0,139.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"190\" x2=\"290.0\" y2=\"208.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,210 285.0,199.0 295.0,199.0\" fill=\"#475569\"/><text x=\"8\" y=\"252\" font-size=\"10\" fill=\"#94a3b8\">La densité augmente régulièrement vers le centre</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Modèle PREM — structure interne de la Terre.</div>"
   }
  ]
 },
 "A3-ROCH": {
  "questions": [
   {
    "q": "Complétez le schéma du cycle des roches en indiquant le passage d'une famille à l'autre.",
    "verb": "Compléter un schéma",
    "pts": 2
   },
   {
    "q": "Nommez les cinq étapes menant d'une roche mère à une roche sédimentaire et précisez l'agent de chacune.",
    "verb": "Nommer et préciser",
    "pts": 2.5
   },
   {
    "q": "Proposez une démarche en trois étapes permettant d'identifier un échantillon de roche sédimentaire inconnu.",
    "verb": "Proposer une démarche",
    "pts": 3
   }
  ],
  "sources": [
   "Géologie générale — cycle des roches",
   "Pétrographie sédimentaire"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Le cycle des roches : trois grandes familles",
    "contenu": "<svg viewBox=\"0 0 600 320\" role=\"img\" aria-label=\"Le cycle géologique des roches\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Le cycle géologique des roches</text><rect x=\"220\" y=\"30\" width=\"160\" height=\"54\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"300\" y=\"49\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Magma</text><text x=\"300\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(roche en fusion)</text><rect x=\"20\" y=\"140\" width=\"160\" height=\"54\" rx=\"7\" fill=\"#fff3e0\" stroke=\"#ef6c00\" stroke-width=\"1.4\"/><text x=\"100\" y=\"159\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Roche magmatique</text><text x=\"100\" y=\"174\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(granite, basalte)</text><rect x=\"420\" y=\"140\" width=\"160\" height=\"54\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"500\" y=\"159\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Roche sédimentaire</text><text x=\"500\" y=\"174\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(calcaire, grès)</text><rect x=\"220\" y=\"250\" width=\"160\" height=\"54\" rx=\"7\" fill=\"#f3e5f5\" stroke=\"#6a1b9a\" stroke-width=\"1.4\"/><text x=\"300\" y=\"269\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Roche métamorphique</text><text x=\"300\" y=\"284\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(marbre, gneiss)</text><line x1=\"260\" y1=\"84\" x2=\"131.5\" y2=\"139.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"130,140 138.1,131.1 142.1,140.2\" fill=\"#475569\"/><text x=\"189.5\" y=\"99.1\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">refroidissement</text><line x1=\"180\" y1=\"180\" x2=\"418.4\" y2=\"180.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"420,180 409.0,185.0 409.0,175.0\" fill=\"#475569\"/><text x=\"300.0\" y=\"194.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">altération, transport</text><line x1=\"500\" y1=\"194\" x2=\"381.4\" y2=\"249.3\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"380,250 387.9,240.8 392.1,249.9\" fill=\"#475569\"/><text x=\"434.1\" y=\"209.3\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">enfouissement + T/P</text><line x1=\"260\" y1=\"250\" x2=\"260.0\" y2=\"85.6\" stroke=\"#6a1b9a\" stroke-width=\"2\"/><polygon points=\"260,84 265.0,95.0 255.0,95.0\" fill=\"#6a1b9a\"/><text x=\"274.0\" y=\"167.0\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#334155\">fusion</text><text x=\"8\" y=\"312\" font-size=\"10\" fill=\"#94a3b8\">Aucune roche n’est définitive : toutes se transforment</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Cycle géologique des roches ; géologie générale.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "De la roche mère au sédiment : les étapes de la sédimentation",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Formation d’une roche sédimentaire détritique</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Étape</th><th style=\"text-align:center\">Processus</th><th style=\"text-align:center\">Agent / mécanisme</th><th style=\"text-align:center\">Produit obtenu</th></tr></thead><tbody><tr><td style=\"font-weight:600\">1</td><td style=\"text-align:center\">altération de la roche mère</td><td style=\"text-align:center\">eau, gel, vents, organismes</td><td style=\"text-align:center\">débris et ions dissous</td></tr><tr><td style=\"font-weight:600\">2</td><td style=\"text-align:center\">érosion</td><td style=\"text-align:center\">eau, vent, glacier</td><td style=\"text-align:center\">particules arrachées</td></tr><tr><td style=\"font-weight:600\">3</td><td style=\"text-align:center\">transport</td><td style=\"text-align:center\">rivières, vents, courants</td><td style=\"text-align:center\">sédiments mobilisés</td></tr><tr><td style=\"font-weight:600\">4</td><td style=\"text-align:center\">dépôt (sédimentation)</td><td style=\"text-align:center\">ralentissement du fluide</td><td style=\"text-align:center\">sédiments déposés en couches</td></tr><tr><td style=\"font-weight:600\">5</td><td style=\"text-align:center\">diagenèse</td><td style=\"text-align:center\">compaction + cimentation</td><td style=\"text-align:center\">roche sédimentaire</td></tr></tbody></table></div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Reconnaître une roche sédimentaire : fossiles, stratification, dissolution",
    "contenu": "<div style=\"border-left:4px solid #2e7d32;background:#2e7d320f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🔍 Critères de reconnaissance</strong><br>Une roche sédimentaire contient souvent des fossiles, présente des strates (couches superposées) et peut être poreuse. Le calcaire réagit à l'acide chlorhydrique dilué (effervescence) car il contient du carbonate de calcium CaCO₃.</div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Pétrographie sédimentaire ; manuels de géologie.</div>"
   }
  ]
 },
 "A3-RESS": {
  "questions": [
   {
    "q": "Relevez la durée estimée des réserves de pétrole, de lithium et de cuivre ; classez ces ressources de la plus à la moins critique à court terme.",
    "verb": "Relever et classer",
    "pts": 2
   },
   {
    "q": "Lisez sur le graphique l'année du pic de production du pétrole et décrivez l'évolution de la production après ce pic.",
    "verb": "Lire et décrire",
    "pts": 2.5
   },
   {
    "q": "Proposez deux mesures permettant de réduire la dépendance aux ressources non renouvelables et justifiez leur intérêt.",
    "verb": "Proposer et justifier",
    "pts": 3
   }
  ],
  "sources": [
   "USGS Mineral Commodity Summaries",
   "BP Statistical Review of World Energy",
   "ADEME — économie circulaire"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Réserves et durée d’exploitation de quelques ressources clés",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Estimation des durées d’exploitation au rythme actuel</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Ressource</th><th style=\"text-align:center\">Réserve prouvée</th><th style=\"text-align:center\">Production annuelle</th><th style=\"text-align:center\">Durée estimée</th><th style=\"text-align:center\">Recyclage actuel</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Pétrole</td><td style=\"text-align:center\">≈ 1 700 Md barils</td><td style=\"text-align:center\">≈ 35 Md barils/an</td><td style=\"text-align:center\">≈ 50 ans</td><td style=\"text-align:center\">non (consommé)</td></tr><tr><td style=\"font-weight:600\">Charbon</td><td style=\"text-align:center\">≈ 1 100 Gt</td><td style=\"text-align:center\">≈ 8,5 Gt/an</td><td style=\"text-align:center\">≈ 130 ans</td><td style=\"text-align:center\">non</td></tr><tr><td style=\"font-weight:600\">Gaz naturel</td><td style=\"text-align:center\">≈ 190 000 Gm³</td><td style=\"text-align:center\">≈ 4 000 Gm³/an</td><td style=\"text-align:center\">≈ 50 ans</td><td style=\"text-align:center\">non</td></tr><tr><td style=\"font-weight:600\">Lithium</td><td style=\"text-align:center\">≈ 26 Mt</td><td style=\"text-align:center\">≈ 130 000 t/an</td><td style=\"text-align:center\">≈ 200 ans</td><td style=\"text-align:center\">&lt; 1 %</td></tr><tr><td style=\"font-weight:600\">Cuivre</td><td style=\"text-align:center\">≈ 880 Mt</td><td style=\"text-align:center\">≈ 21 Mt/an</td><td style=\"text-align:center\">≈ 40 ans</td><td style=\"text-align:center\">≈ 35 %</td></tr><tr><td style=\"font-weight:600\">Terres rares</td><td style=\"text-align:center\">≈ 130 Mt</td><td style=\"text-align:center\">≈ 300 000 t/an</td><td style=\"text-align:center\">variable</td><td style=\"text-align:center\">&lt; 1 %</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 USGS Mineral Commodity Summaries 2024 ; BP Statistical Review of World Energy.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Pic de production : la courbe de Hubbert",
    "contenu": "<svg viewBox=\"0 0 600 320\" role=\"img\" aria-label=\"Production mondiale de pétrole : le pic de Hubbert\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"26\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Production mondiale de pétrole : le pic de Hubbert</text><rect x=\"62\" y=\"16\" width=\"11\" height=\"11\" rx=\"2\" fill=\"#c62828\"/><text x=\"79\" y=\"26\" font-size=\"11\" fill=\"#334155\">Production réelle (→ 2020)</text><rect x=\"240\" y=\"16\" width=\"11\" height=\"11\" rx=\"2\" fill=\"#0277bd\"/><text x=\"257\" y=\"26\" font-size=\"11\" fill=\"#334155\">Projection / déclin</text><line x1=\"62\" y1=\"258.0\" x2=\"582\" y2=\"258.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"262.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0</text><line x1=\"62\" y1=\"215.2\" x2=\"582\" y2=\"215.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"219.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">9</text><line x1=\"62\" y1=\"172.4\" x2=\"582\" y2=\"172.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"176.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">18</text><line x1=\"62\" y1=\"129.6\" x2=\"582\" y2=\"129.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"133.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">27</text><line x1=\"62\" y1=\"86.8\" x2=\"582\" y2=\"86.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"90.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">36</text><line x1=\"62\" y1=\"44.0\" x2=\"582\" y2=\"44.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"48.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">45</text><text x=\"62.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">1950</text><text x=\"148.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">1975</text><text x=\"235.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2000</text><text x=\"322.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2025</text><text x=\"408.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2050</text><text x=\"495.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2075</text><text x=\"582.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2100</text><line x1=\"62\" y1=\"44\" x2=\"62\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"258\" x2=\"582\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><polyline points=\"62.0,239.9 96.7,221.9 131.3,168.6 166.0,155.3 200.7,147.2 235.3,127.7 270.0,116.8 304.7,108.2\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"62.0\" cy=\"239.9\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"96.7\" cy=\"221.9\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"131.3\" cy=\"168.6\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"166.0\" cy=\"155.3\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"200.7\" cy=\"147.2\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"235.3\" cy=\"127.7\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"270.0\" cy=\"116.8\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"304.7\" cy=\"108.2\" r=\"3.2\" fill=\"#c62828\"/><polyline points=\"304.7,108.2 374.0,153.4 443.3,200.9 512.7,229.5 582.0,243.7\" fill=\"none\" stroke=\"#0277bd\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"304.7\" cy=\"108.2\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"374.0\" cy=\"153.4\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"443.3\" cy=\"200.9\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"512.7\" cy=\"229.5\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"582.0\" cy=\"243.7\" r=\"3.2\" fill=\"#0277bd\"/><text x=\"322\" y=\"298\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Année</text><text transform=\"translate(16,151) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Production (Md barils/an)</text><text x=\"582\" y=\"314\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Quand la moitié est extraite, la production décline</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Modèle de Hubbert ; données US EIA / BP Statistical Review.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Réduire la dépendance : économie circulaire et substitution",
    "contenu": "<svg viewBox=\"0 0 600 250\" role=\"img\" aria-label=\"De l’économie linéaire à l’économie circulaire\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">De l’économie linéaire à l’économie circulaire</text><rect x=\"20\" y=\"30\" width=\"250\" height=\"70\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"145\" y=\"57\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Économie linéaire</text><text x=\"145\" y=\"72\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">extraire → produire → jeter</text><rect x=\"330\" y=\"30\" width=\"250\" height=\"70\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"455\" y=\"49\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Économie circulaire</text><text x=\"455\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">éco-concevoir, réutiliser,</text><text x=\"455\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">réparer, recycler</text><rect x=\"20\" y=\"150\" width=\"560\" height=\"80\" rx=\"7\" fill=\"#eef4f8\" stroke=\"#64748b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"182\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Leviers : allongement de la durée d’usage, réparabilité, recyclage des métaux stratégiques</text><text x=\"300\" y=\"197\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(lithium, cobalt, terres rares) et substitution par des matériaux abondants.</text><line x1=\"270\" y1=\"65\" x2=\"328.4\" y2=\"65.0\" stroke=\"#2e7d32\" stroke-width=\"2\"/><polygon points=\"330,65 319.0,70.0 319.0,60.0\" fill=\"#2e7d32\"/><text x=\"8\" y=\"242\" font-size=\"10\" fill=\"#94a3b8\">Le recyclage des métaux rares reste très faible (&amp;lt; 1 %)</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 ADEME — économie circulaire ; rapports du PNUE.</div>"
   }
  ]
 },
 "A3-KPG": {
  "questions": [
   {
    "q": "Relevez trois indices géologiques de la couche K-Pg et expliquez ce que chacun indique.",
    "verb": "Relever et expliquer",
    "pts": 2
   },
   {
    "q": "Comparez les taux d'extinction des dinosaures non aviens et des mammifères ; proposez une explication à cette différence.",
    "verb": "Comparer et expliquer",
    "pts": 2.5
   },
   {
    "q": "Reconstituez l'enchaînement des événements depuis l'impact jusqu'aux extinctions de masse.",
    "verb": "Reconstituer",
    "pts": 3
   }
  ],
  "sources": [
   "Alvarez et al., 1980, Science",
   "Chicxulub (Schultz et al., 2010)",
   "USGS — cratère de Chicxulub"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Les traces de l’impact : indices géochimiques à la limite K-Pg",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Le faisceau d’indices de la couche K-Pg</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Indice</th><th style=\"text-align:center\">Valeur mesurée</th><th style=\"text-align:center\">Signification</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Iridium dans la couche d’argile</td><td style=\"text-align:center\">≈ 30 × la teneur normale</td><td style=\"text-align:center\">météorite riche en iridium</td></tr><tr><td style=\"font-weight:600\">Épaisseur de la couche d’argile</td><td style=\"text-align:center\">quelques mm à 1 m</td><td style=\"text-align:center\">retombées de l’impact</td></tr><tr><td style=\"font-weight:600\">Quartz choqué</td><td style=\"text-align:center\">présent dans la couche</td><td style=\"text-align:center\">onde de choc extrême</td></tr><tr><td style=\"font-weight:600\">Microtectites</td><td style=\"text-align:center\">nombreuses gouttelettes vitreuses</td><td style=\"text-align:center\">matière fondue puis retombée</td></tr><tr><td style=\"font-weight:600\">Âge de la limite</td><td style=\"text-align:center\">66,0 Ma</td><td style=\"text-align:center\">extinction de masse rapide</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Alvarez et al., 1980 ; couche K-Pg à Gubbio (Italie), Tunisie, Danemark.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "L’impact de Chicxulub : dimensions et effets",
    "contenu": "<svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Taux d’extinction des différents groupes à la limite K-Pg (%)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"24\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Taux d’extinction des différents groupes à la limite K-Pg (%)</text><line x1=\"62\" y1=\"226.0\" x2=\"582\" y2=\"226.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"230.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0 %</text><line x1=\"62\" y1=\"188.8\" x2=\"582\" y2=\"188.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"192.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">20 %</text><line x1=\"62\" y1=\"151.6\" x2=\"582\" y2=\"151.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"155.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">40 %</text><line x1=\"62\" y1=\"114.4\" x2=\"582\" y2=\"114.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"118.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">60 %</text><line x1=\"62\" y1=\"77.2\" x2=\"582\" y2=\"77.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"81.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">80 %</text><line x1=\"62\" y1=\"40.0\" x2=\"582\" y2=\"40.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"44.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">100 %</text><line x1=\"62\" y1=\"40\" x2=\"62\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"226\" x2=\"582\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><rect x=\"78.5\" y=\"40.0\" width=\"53.7\" height=\"186.0\" rx=\"3\" fill=\"#b71c1c\"/><text x=\"105.3\" y=\"34.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">100 %</text><text x=\"105.3\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Dinosaures non aviens</text><rect x=\"165.1\" y=\"53.0\" width=\"53.7\" height=\"173.0\" rx=\"3\" fill=\"#c62828\"/><text x=\"192.0\" y=\"47.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">93 %</text><text x=\"192.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Reptiles marins</text><rect x=\"251.8\" y=\"40.0\" width=\"53.7\" height=\"186.0\" rx=\"3\" fill=\"#ad1457\"/><text x=\"278.7\" y=\"34.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">100 %</text><text x=\"278.7\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Ammonites</text><rect x=\"338.5\" y=\"77.2\" width=\"53.7\" height=\"148.8\" rx=\"3\" fill=\"#ef6c00\"/><text x=\"365.3\" y=\"71.2\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">80 %</text><text x=\"365.3\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Plancton marin</text><rect x=\"425.1\" y=\"151.6\" width=\"53.7\" height=\"74.4\" rx=\"3\" fill=\"#f9a825\"/><text x=\"452.0\" y=\"145.6\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">40 %</text><text x=\"452.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Oiseaux</text><rect x=\"511.8\" y=\"179.5\" width=\"53.7\" height=\"46.5\" rx=\"3\" fill=\"#2e7d32\"/><text x=\"538.7\" y=\"173.5\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">25 %</text><text x=\"538.7\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">Mammifères</text><text transform=\"translate(16,133) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">% d’espèces disparues</text><text x=\"582\" y=\"294\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">≈ 76 % des espèces disparaissent</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Données d’extinction ; Jablonski, travaux sur l’extinction K-Pg.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Scénario de l’extinction : de l’impact à l’hiver d’impact",
    "contenu": "<svg viewBox=\"0 0 600 290\" role=\"img\" aria-label=\"La chaîne des conséquences de l’impact de Chicxulub\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">La chaîne des conséquences de l’impact de Chicxulub</text><rect x=\"20\" y=\"30\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"300\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Astéroïde de ≈ 10-15 km — cratère de ≈ 180 km (Chicxulub, Mexique)</text><rect x=\"20\" y=\"90\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#fff3e0\" stroke=\"#ef6c00\" stroke-width=\"1.4\"/><text x=\"300\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Séismes, tsunamis, incendies, éjectas projetés dans l’atmosphère</text><rect x=\"20\" y=\"150\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#eceff1\" stroke=\"#546e7a\" stroke-width=\"1.4\"/><text x=\"300\" y=\"170\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Poussières et aérosols → obscurcissement → arrêt de la photosynthèse</text><rect x=\"20\" y=\"210\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"300\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">« Hiver d’impact » → effondrement des chaînes alimentaires</text><line x1=\"290\" y1=\"70\" x2=\"290.0\" y2=\"88.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,90 285.0,79.0 295.0,79.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"130\" x2=\"290.0\" y2=\"148.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,150 285.0,139.0 295.0,139.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"190\" x2=\"290.0\" y2=\"208.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,210 285.0,199.0 295.0,199.0\" fill=\"#475569\"/><text x=\"8\" y=\"282\" font-size=\"10\" fill=\"#94a3b8\">L’obscurcissement perturbe toute la photosynthèse</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Schultz et al., 2010, Science ; modèles d’hiver d’impact.</div>"
   }
  ]
 },
 "A3-SPEC": {
  "questions": [
   {
    "q": "Listez trois différences entre la forme de surface et la forme souterraine, en précisant leur nature.",
    "verb": "Lister et préciser",
    "pts": 2
   },
   {
    "q": "Reconstituez la chronologie de l'isolement de la population souterraine depuis le creusement du métro.",
    "verb": "Reconstituer",
    "pts": 2.5
   },
   {
    "q": "Expliquez en quoi ces données constituent un argument en faveur d'une spéciation en cours.",
    "verb": "Expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "Byrne & Nichols (1999) — Culex pipiens in London Underground",
   "Fonseca et al. — génétique des populations"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Culex pipiens : deux formes aux comportements différents",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Comparaison des deux formes du moustique Culex pipiens</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Caractéristique</th><th style=\"text-align:center\">Forme « pipiens » (surface)</th><th style=\"text-align:center\">Forme « molestus » (métro)</th><th style=\"text-align:center\">Différence ?</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Lieu de vie</td><td style=\"text-align:center\">au-dessus du sol</td><td style=\"text-align:center\">galeries et caves souterraines</td><td style=\"text-align:center\">oui — habitat séparé</td></tr><tr><td style=\"font-weight:600\">Alimentation</td><td style=\"text-align:center\">oiseaux (sang)</td><td style=\"text-align:center\">humains et mammifères (sang)</td><td style=\"text-align:center\">oui — hôte différent</td></tr><tr><td style=\"font-weight:600\">Hibernation</td><td style=\"text-align:center\">les femelles hivernent</td><td style=\"text-align:center\">reste actif toute l’année</td><td style=\"text-align:center\">oui</td></tr><tr><td style=\"font-weight:600\">Reproduction en hiver</td><td style=\"text-align:center\">non</td><td style=\"text-align:center\">oui</td><td style=\"text-align:center\">oui</td></tr><tr><td style=\"font-weight:600\">Hybridation naturelle</td><td style=\"text-align:center\">—</td><td style=\"text-align:center\">—</td><td style=\"text-align:center\">difficile, isolement partiel</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Byrne &amp; Nichols, 1999 ; Culex pipiens molestus (London Underground mosquito).</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Chronologie de l’isolement des populations souterraines",
    "contenu": "<svg viewBox=\"0 0 600 250\" role=\"img\" aria-label=\"De la population de surface à la forme souterraine\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">De la population de surface à la forme souterraine</text><rect x=\"20\" y=\"30\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"300\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">1863 : creusement du métro de Londres — les moustiques colonisent les galeries</text><rect x=\"20\" y=\"90\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Isolement géographique : plus de rencontre avec les populations de surface</text><rect x=\"20\" y=\"150\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"300\" y=\"170\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Tri des individus adaptés au froid, à l’obscurité et au sang humain</text><rect x=\"20\" y=\"210\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#f3e5f5\" stroke=\"#6a1b9a\" stroke-width=\"1.4\"/><text x=\"300\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Divergence génétique → isolement reproductif → spéciation en cours</text><line x1=\"290\" y1=\"70\" x2=\"290.0\" y2=\"88.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,90 285.0,79.0 295.0,79.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"130\" x2=\"290.0\" y2=\"148.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,150 285.0,139.0 295.0,139.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"190\" x2=\"290.0\" y2=\"208.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,210 285.0,199.0 295.0,199.0\" fill=\"#475569\"/><text x=\"8\" y=\"242\" font-size=\"10\" fill=\"#94a3b8\">Moins de 200 ans : la spéciation peut être rapide</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Fonseca et al. — analyses génétiques du moustique du métro de Londres.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Distance génétique : mesurer la divergence",
    "contenu": "<div style=\"border-left:4px solid #6a1b9a;background:#6a1b9a0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🧬 Critère génétique d’espèce</strong><br>Deux populations appartiennent à la même espèce si elles peuvent se reproduire entre elles et donner une descendance fertile. La mesure de la distance génétique (différences dans l'ADN mitochondrial) quantifie la divergence accumulée depuis la séparation.</div>"
   }
  ]
 },
 "A3-ONEH": {
  "questions": [
   {
    "q": "Identifiez les trois domaines du concept « Une seule santé » et expliquez leurs interactions.",
    "verb": "Identifier et expliquer",
    "pts": 2
   },
   {
    "q": "À partir du tableau, relevez deux zoonoses et précisez leur réservoir animal ainsi que leur mode de transmission.",
    "verb": "Relever et préciser",
    "pts": 2.5
   },
   {
    "q": "Argumentez en quoi la protection des écosystèmes contribue à la santé humaine.",
    "verb": "Argumenter",
    "pts": 3
   }
  ],
  "sources": [
   "Initiative quadripartite One Health (OMS, FAO, OIE, PNUE)",
   "OMS — zoonoses et maladies émergentes"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Le concept « Une seule santé » : trois domaines interconnectés",
    "contenu": "<svg viewBox=\"0 0 600 270\" role=\"img\" aria-label=\"Une seule santé : humaine, animale, écosystèmes\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Une seule santé : humaine, animale, écosystèmes</text><rect x=\"20\" y=\"30\" width=\"170\" height=\"70\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"105\" y=\"49\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Santé humaine</text><text x=\"105\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">individus,</text><text x=\"105\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">populations</text><rect x=\"215\" y=\"30\" width=\"170\" height=\"70\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"300\" y=\"49\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Santé animale</text><text x=\"300\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">élevages,</text><text x=\"300\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">faune sauvage</text><rect x=\"410\" y=\"30\" width=\"170\" height=\"70\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"495\" y=\"49\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Santé des</text><text x=\"495\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">écosystèmes</text><text x=\"495\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">(sol, eau, air)</text><rect x=\"20\" y=\"160\" width=\"560\" height=\"90\" rx=\"7\" fill=\"#eef4f8\" stroke=\"#64748b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"189\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Un déséquilibre dans un domaine se propage aux autres :</text><text x=\"300\" y=\"204\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">60 % des maladies infectieuses humaines sont d’origine animale (zoonoses),</text><text x=\"300\" y=\"219\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">et 75 % des maladies émergentes récentes en proviennent.</text><line x1=\"190\" y1=\"65\" x2=\"213.4\" y2=\"65.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"215,65 204.0,70.0 204.0,60.0\" fill=\"#475569\"/><line x1=\"385\" y1=\"65\" x2=\"408.4\" y2=\"65.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"410,65 399.0,70.0 399.0,60.0\" fill=\"#475569\"/><line x1=\"105\" y1=\"100\" x2=\"105.0\" y2=\"158.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"105,160 100.0,149.0 110.0,149.0\" fill=\"#475569\"/><line x1=\"300\" y1=\"100\" x2=\"300.0\" y2=\"158.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"300,160 295.0,149.0 305.0,149.0\" fill=\"#475569\"/><line x1=\"495\" y1=\"100\" x2=\"495.0\" y2=\"158.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"495,160 490.0,149.0 500.0,149.0\" fill=\"#475569\"/><text x=\"8\" y=\"262\" font-size=\"10\" fill=\"#94a3b8\">Une seule santé = approche systémique</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Initiative quadripartite « One Health » (OMS, FAO, OIE, PNUE).</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Des exemples de zoonoses émergentes",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Cinq zoonoses illustrant l’interdépendance des santés</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Maladie</th><th style=\"text-align:center\">Réservoir animal</th><th style=\"text-align:center\">Transmission</th><th style=\"text-align:center\">Leçon « One Health »</th></tr></thead><tbody><tr><td style=\"font-weight:600\">COVID-19</td><td style=\"text-align:center\">chauves-souris probablement</td><td style=\"text-align:center\">gouttelettes, aérosol</td><td style=\"text-align:center\">surveillance de la faune sauvage</td></tr><tr><td style=\"font-weight:600\">Grippe aviaire H5N1</td><td style=\"text-align:center\">oiseaux sauvages et volailles</td><td style=\"text-align:center\">contact avec les oiseaux</td><td style=\"text-align:center\">surveiller les élevages</td></tr><tr><td style=\"font-weight:600\">Ebola</td><td style=\"text-align:center\">chauves-souris frugivores</td><td style=\"text-align:center\">contact avec animaux infectés</td><td style=\"text-align:center\">protéger les forêts</td></tr><tr><td style=\"font-weight:600\">Rage</td><td style=\"text-align:center\">chauves-souris, renards, chiens</td><td style=\"text-align:center\">morsure, griffure</td><td style=\"text-align:center\">vaccination animale</td></tr><tr><td style=\"font-weight:600\">Leptospirose</td><td style=\"text-align:center\">rongeurs</td><td style=\"text-align:center\">eau contaminée par l’urine</td><td style=\"text-align:center\">gestion de l’eau, urbanisation</td></tr></tbody></table></div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Les solutions fondées sur la nature",
    "contenu": "<div style=\"border-left:4px solid #558b2f;background:#558b2f0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🌳 Protéger les écosystèmes pour protéger la santé</strong><br>Préserver les zones humides filtrantes, limiter la déforestation qui rapproche l'homme de la faune sauvage, et encadrer l'usage des antibiotiques en médecine humaine comme vétérinaire sont des actions concrètes relevant de l'approche « Une seule santé ».</div>"
   }
  ]
 },
 "A3-CERV": {
  "questions": [
   {
    "q": "Relevez sur le graphique l'âge du pic de densité synaptique et décrivez son évolution jusqu'à 25 ans.",
    "verb": "Relever et décrire",
    "pts": 2
   },
   {
    "q": "Classez les facteurs du tableau selon qu'ils favorisent ou réduisent la plasticité synaptique.",
    "verb": "Classer",
    "pts": 2.5
   },
   {
    "q": "Expliquez la chaîne des événements biologiques qui transforme un apprentissage en trace mnésique durable.",
    "verb": "Expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "Neurosciences de l’apprentissage",
   "Potentialisation à long terme (LTP) — littérature scientifique"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "La plasticité synaptique : le support biologique des apprentissages",
    "contenu": "<svg viewBox=\"0 0 600 320\" role=\"img\" aria-label=\"Densité synaptique au cours du développement\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"26\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Densité synaptique au cours du développement</text><rect x=\"62\" y=\"16\" width=\"11\" height=\"11\" rx=\"2\" fill=\"#6a1b9a\"/><text x=\"79\" y=\"26\" font-size=\"11\" fill=\"#334155\">Densité synaptique</text><line x1=\"62\" y1=\"258.0\" x2=\"582\" y2=\"258.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"262.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0</text><line x1=\"62\" y1=\"215.2\" x2=\"582\" y2=\"215.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"219.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">20</text><line x1=\"62\" y1=\"172.4\" x2=\"582\" y2=\"172.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"176.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">40</text><line x1=\"62\" y1=\"129.6\" x2=\"582\" y2=\"129.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"133.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">60</text><line x1=\"62\" y1=\"86.8\" x2=\"582\" y2=\"86.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"90.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">80</text><line x1=\"62\" y1=\"44.0\" x2=\"582\" y2=\"44.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"48.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">100</text><text x=\"62.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">0</text><text x=\"148.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">4.166666666666667</text><text x=\"235.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">8.333333333333334</text><text x=\"322.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">12.5</text><text x=\"408.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">16.666666666666668</text><text x=\"495.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">20.833333333333332</text><text x=\"582.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">25</text><line x1=\"62\" y1=\"44\" x2=\"62\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"258\" x2=\"582\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><polyline points=\"62.0,172.4 103.6,91.1 166.0,52.6 228.4,44.0 311.6,61.1 394.8,82.5 478.0,95.4 582.0,103.9\" fill=\"none\" stroke=\"#6a1b9a\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"62.0\" cy=\"172.4\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"103.6\" cy=\"91.1\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"166.0\" cy=\"52.6\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"228.4\" cy=\"44.0\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"311.6\" cy=\"61.1\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"394.8\" cy=\"82.5\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"478.0\" cy=\"95.4\" r=\"3.2\" fill=\"#6a1b9a\"/><circle cx=\"582.0\" cy=\"103.9\" r=\"3.2\" fill=\"#6a1b9a\"/><text x=\"322\" y=\"298\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Âge (années)</text><text transform=\"translate(16,151) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Densité synaptique (u.a.)</text><text x=\"582\" y=\"314\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Pic dans l’enfance puis élagage progressif</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Données de développement cortical ; travaux sur la plasticité synaptique.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Ce qui renforce ou affaiblit la plasticité",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Facteurs influençant la plasticité synaptique</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Facteur</th><th style=\"text-align:center\">Effet sur la plasticité</th><th style=\"text-align:center\">Mécanisme</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Sommeil suffisant</td><td style=\"text-align:center\">favorise</td><td style=\"text-align:center\">consolidation des traces mnésiques pendant le sommeil profond</td></tr><tr><td style=\"font-weight:600\">Activité physique régulière</td><td style=\"text-align:center\">favorise</td><td style=\"text-align:center\">augmentation du facteur BDNF, neurogenèse hippocampique</td></tr><tr><td style=\"font-weight:600\">Stress chronique</td><td style=\"text-align:center\">réduit</td><td style=\"text-align:center\">cortisol élevé, atteinte de l’hippocampe</td></tr><tr><td style=\"font-weight:600\">Écrans excessifs</td><td style=\"text-align:center\">réduit</td><td style=\"text-align:center\">attention fragmentée, moindre consolidation</td></tr><tr><td style=\"font-weight:600\">Environnement stimulant</td><td style=\"text-align:center\">favorise</td><td style=\"text-align:center\">enrichissement des connexions neuronales</td></tr></tbody></table></div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Du synapse au comportement : la chaîne de l’apprentissage",
    "contenu": "<svg viewBox=\"0 0 600 260\" role=\"img\" aria-label=\"De la stimulation à la trace mnésique\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">De la stimulation à la trace mnésique</text><rect x=\"20\" y=\"30\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"290\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Stimulation répétée → activation de neurones</text><rect x=\"20\" y=\"90\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"290\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Potentialisation à long terme (LTP) : renforcement synaptique</text><rect x=\"20\" y=\"150\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"290\" y=\"170\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Consolidation : stabilisation de la connexion (sommeil)</text><rect x=\"20\" y=\"210\" width=\"540\" height=\"40\" rx=\"7\" fill=\"#f3e5f5\" stroke=\"#6a1b9a\" stroke-width=\"1.4\"/><text x=\"290\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Trace mnésique durable → comportement modifié</text><line x1=\"290\" y1=\"70\" x2=\"290.0\" y2=\"88.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,90 285.0,79.0 295.0,79.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"130\" x2=\"290.0\" y2=\"148.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,150 285.0,139.0 295.0,139.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"190\" x2=\"290.0\" y2=\"208.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,210 285.0,199.0 295.0,199.0\" fill=\"#475569\"/><text x=\"8\" y=\"252\" font-size=\"10\" fill=\"#94a3b8\">L’apprentissage modifie physiquement le cerveau</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Neurosciences de l’apprentissage ; concept de potentialisation à long terme.</div>"
   }
  ]
 },
 "A3-EMOT": {
  "questions": [
   {
    "q": "Relevez dans le tableau deux émotions et associez-leur leur manifestation cardiaque et leur médiateur principal.",
    "verb": "Relever et associer",
    "pts": 2
   },
   {
    "q": "Complétez le schéma du circuit cérébral des émotions en nommant chaque structure et son rôle.",
    "verb": "Compléter et nommer",
    "pts": 2.5
   },
   {
    "q": "Expliquez comment la respiration lente permet de réguler une émotion intense, en vous appuyant sur la physiologie.",
    "verb": "Expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "Physiologie des émotions",
   "Neurosciences affectives — amygdale et cortex préfrontal"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Manifestations physiologiques des émotions",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Réponses physiologiques associées aux émotions</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Émotion</th><th style=\"text-align:center\">Réponse cardiaque</th><th style=\"text-align:center\">Réponse respiratoire</th><th style=\"text-align:center\">Médiateur principal</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Peur</td><td style=\"text-align:center\">accélération du rythme</td><td style=\"text-align:center\">respiration rapide et superficielle</td><td style=\"text-align:center\">adrénaline</td></tr><tr><td style=\"font-weight:600\">Colère</td><td style=\"text-align:center\">accélération, pression ↑</td><td style=\"text-align:center\">respiration irrégulière</td><td style=\"text-align:center\">adrénaline, noradrénaline</td></tr><tr><td style=\"font-weight:600\">Joie</td><td style=\"text-align:center\">rythme régulier</td><td style=\"text-align:center\">respiration ample</td><td style=\"text-align:center\">dopamine, endorphines</td></tr><tr><td style=\"font-weight:600\">Tristesse</td><td style=\"text-align:center\">ralentissement</td><td style=\"text-align:center\">respiration lente</td><td style=\"text-align:center\">baisse de sérotonine</td></tr><tr><td style=\"font-weight:600\">Dégoût</td><td style=\"text-align:center\">légère accélération</td><td style=\"text-align:center\">respiration courte</td><td style=\"text-align:center\">réponse végétative</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Physiologie des émotions ; systèmes nerveux sympathique et parasympathique.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Les structures cérébrales impliquées",
    "contenu": "<svg viewBox=\"0 0 600 280\" role=\"img\" aria-label=\"Le circuit cérébral des émotions\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Le circuit cérébral des émotions</text><rect x=\"20\" y=\"30\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"290\" y=\"52\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Amygdale — détection rapide des menaces, déclenchement émotionnel</text><rect x=\"20\" y=\"96\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"290\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Hypothalamus — commande des réponses végétatives et hormonales</text><rect x=\"20\" y=\"162\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"290\" y=\"184\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Hippocampe — mise en mémoire du contexte émotionnel</text><rect x=\"20\" y=\"228\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"290\" y=\"250\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Cortex préfrontal — évaluation, régulation et contrôle</text><line x1=\"290\" y1=\"74\" x2=\"290.0\" y2=\"94.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,96 285.0,85.0 295.0,85.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"140\" x2=\"290.0\" y2=\"160.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,162 285.0,151.0 295.0,151.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"206\" x2=\"290.0\" y2=\"226.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,228 285.0,217.0 295.0,217.0\" fill=\"#475569\"/><text x=\"8\" y=\"272\" font-size=\"10\" fill=\"#94a3b8\">L’amygdale déclenche, le cortex régule</text></svg>"
   },
   {
    "numero": "Doc 3",
    "titre": "Réguler ses émotions : leviers scientifiques",
    "contenu": "<div style=\"border-left:4px solid #2e7d32;background:#2e7d320f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🧘 Agir sur la physiologie</strong><br>La respiration lente et profonde active le système parasympathique et réduit la fréquence cardiaque. La cohérence cardiaque, la pratique sportive régulière et un sommeil suffisant améliorent durablement la régulation émotionnelle.</div>"
   }
  ]
 },
 "A3-ADDI": {
  "questions": [
   {
    "q": "Décrivez le trajet de la dopamine dans le circuit de la récompense à l'aide du schéma.",
    "verb": "Décrire",
    "pts": 2
   },
   {
    "q": "Classez les étapes du tableau dans l'ordre chronologique et expliquez la notion de tolérance.",
    "verb": "Classer et expliquer",
    "pts": 2.5
   },
   {
    "q": "Expliquez en quoi les écrans peuvent détourner le même circuit de la récompense que les substances.",
    "verb": "Expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "Drogues Info Service — 0 800 23 13 13",
   "MILDECA — politiques publiques d’addiction"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Le circuit de la récompense et la dopamine",
    "contenu": "<svg viewBox=\"0 0 600 280\" role=\"img\" aria-label=\"Le circuit dopaminergique de la récompense\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Le circuit dopaminergique de la récompense</text><rect x=\"20\" y=\"30\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"290\" y=\"52\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Aire tegmentaire ventrale — produit la dopamine</text><rect x=\"20\" y=\"96\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"290\" y=\"118\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Noyau accumbens — reçoit le signal de récompense</text><rect x=\"20\" y=\"162\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"290\" y=\"184\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Cortex préfrontal — décision, contrôle, apprentissage</text><rect x=\"20\" y=\"228\" width=\"540\" height=\"44\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"290\" y=\"250\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Drogue → libération massive de dopamine → renforcement du comportement</text><line x1=\"290\" y1=\"74\" x2=\"290.0\" y2=\"94.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,96 285.0,85.0 295.0,85.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"140\" x2=\"290.0\" y2=\"160.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,162 285.0,151.0 295.0,151.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"206\" x2=\"290.0\" y2=\"226.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,228 285.0,217.0 295.0,217.0\" fill=\"#475569\"/><text x=\"8\" y=\"272\" font-size=\"10\" fill=\"#94a3b8\">Les substances détournent un circuit naturel</text></svg>"
   },
   {
    "numero": "Doc 2",
    "titre": "Tolérance, dépendance et sevrage",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Les étapes de l’installation de la dépendance</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Étape</th><th style=\"text-align:center\">Ce qui se passe</th><th style=\"text-align:center\">Conséquence observable</th></tr></thead><tbody><tr><td style=\"font-weight:600\">1. Usage</td><td style=\"text-align:center\">libération de dopamine, plaisir</td><td style=\"text-align:center\">sensation agréable</td></tr><tr><td style=\"font-weight:600\">2. Tolérance</td><td style=\"text-align:center\">les récepteurs deviennent moins sensibles</td><td style=\"text-align:center\">il faut plus pour le même effet</td></tr><tr><td style=\"font-weight:600\">3. Dépendance</td><td style=\"text-align:center\">le cerveau repose sur la substance</td><td style=\"text-align:center\">envie irrépressible (craving)</td></tr><tr><td style=\"font-weight:600\">4. Sevrage</td><td style=\"text-align:center\">manque → anxiété, irritabilité, troubles du sommeil</td><td style=\"text-align:center\">recherche compulsive de la substance</td></tr><tr><td style=\"font-weight:600\">5. Addiction</td><td style=\"text-align:center\">perte de contrôle malgré les dommages</td><td style=\"text-align:center\">poursuite malgré les conséquences</td></tr></tbody></table></div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Prévention et ressources",
    "contenu": "<div style=\"border-left:4px solid #0277bd;background:#0277bd0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🛡️ Repères de prévention</strong><br>Drogues Info Service : 0 800 23 13 13 (appel gratuit et anonyme, 7j/7). Tabac Info Service : 3989. Ces lignes proposent écoute, information et orientation sans jugement, ainsi que des consultations jeunes consommateurs gratuites.</div>"
   }
  ]
 },
 "A3-TCA": {
  "questions": [
   {
    "q": "Relevez dans le tableau trois critères permettant de distinguer l'anorexie mentale de la boulimie.",
    "verb": "Relever et distinguer",
    "pts": 2
   },
   {
    "q": "Expliquez comment les réseaux sociaux peuvent altérer l'image corporelle et déclencher un comportement de restriction.",
    "verb": "Expliquer",
    "pts": 2.5
   },
   {
    "q": "Identifiez les conséquences médicales graves de la dénutrition sur le cœur, les os et le cerveau.",
    "verb": "Identifier",
    "pts": 3
   }
  ],
  "sources": [
   "Haute Autorité de Santé (HAS) — TCA",
   "Fil Santé Jeunes — 3224",
   "FFAB — Fédération Française Anorexie Boulimie"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Critères diagnostiques des troubles des conduites alimentaires",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Anorexie mentale et boulimie (critères HAS)</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Critère</th><th style=\"text-align:center\">Anorexie mentale</th><th style=\"text-align:center\">Boulimie</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Restriction alimentaire</td><td style=\"text-align:center\">drastique et persistante</td><td style=\"text-align:center\">non (crises d’hyperphagie)</td></tr><tr><td style=\"font-weight:600\">Poids / IMC</td><td style=\"text-align:center\">significativement bas (IMC &lt; 17)</td><td style=\"text-align:center\">souvent normal ou variable</td></tr><tr><td style=\"font-weight:600\">Peur de prendre du poids</td><td style=\"text-align:center\">intense</td><td style=\"text-align:center\">présente, avec culpabilité</td></tr><tr><td style=\"font-weight:600\">Perception du corps</td><td style=\"text-align:center\">altérée (dysmorphophobie)</td><td style=\"text-align:center\">très dépendante du poids</td></tr><tr><td style=\"font-weight:600\">Comportements compensatoires</td><td style=\"text-align:center\">jeûne, exercice excessif</td><td style=\"text-align:center\">vomissements, laxatifs, jeûne</td></tr><tr><td style=\"font-weight:600\">Fréquence des crises</td><td style=\"text-align:center\">—</td><td style=\"text-align:center\">≥ 1 fois / semaine pendant 3 mois</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Critères diagnostiques de la Haute Autorité de Santé (HAS).</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "L’impact des réseaux sociaux sur l’image corporelle",
    "contenu": "<div style=\"border-left:4px solid #6a1b9a;background:#6a1b9a0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>📱 Le biais des images retouchées</strong><br>Chez les adolescents passant plus de 3 heures par jour sur les réseaux sociaux d'images, le risque d'insatisfaction corporelle est multiplié par 2,4. L'exposition répétée à des corps retouchés crée un biais cognitif où la norme naturelle est perçue comme anormale.</div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Études sur l’impact des algorithmes de recommandation.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Conséquences physiologiques et prise en charge médicale",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Conséquences de la dénutrition sévère</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Organe / fonction</th><th style=\"text-align:center\">Conséquence observée</th><th style=\"text-align:center\">Gravité</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Cœur</td><td style=\"text-align:center\">bradycardie (&lt; 45 bpm)</td><td style=\"text-align:center\">risque d’arrêt cardiaque</td></tr><tr><td style=\"font-weight:600\">Électrolytes</td><td style=\"text-align:center\">hypokaliémie (chute du potassium)</td><td style=\"text-align:center\">trouble du rythme</td></tr><tr><td style=\"font-weight:600\">Os</td><td style=\"text-align:center\">ostéoporose précoce</td><td style=\"text-align:center\">irréversible si prolongée</td></tr><tr><td style=\"font-weight:600\">Cycles menstruels</td><td style=\"text-align:center\">aménorrhée</td><td style=\"text-align:center\">retour à la normale avec la reprise pondérale</td></tr><tr><td style=\"font-weight:600\">Vie sociale</td><td style=\"text-align:center\">isolement, repli</td><td style=\"text-align:center\">aggrave la maladie</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Prise en charge non punitive : médecin, nutritionniste, psychologue, famille.</div>"
   }
  ]
 },
 "A3-ANTI": {
  "questions": [
   {
    "q": "Relevez sur le graphique le diamètre du halo pour l'amoxicilline et la ciprofloxacine.",
    "verb": "Relever",
    "pts": 2
   },
   {
    "q": "Utilisez la table d'interprétation pour qualifier l'effet de chaque antibiotique (Sensible, Résistante) et indiquer lequel prescrire.",
    "verb": "Utiliser et indiquer",
    "pts": 2.5
   },
   {
    "q": "Expliquez comment la surconsommation d'antibiotiques conduit à la prolifération de souches résistantes par sélection naturelle.",
    "verb": "Expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "Société Française de Microbiologie — antibiogramme",
   "Santé publique France — antibiorésistance",
   "OMS — Resistance antibactérienne"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Résultats d’un antibiogramme (Escherichia coli)",
    "contenu": "<svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Diamètre du halo d’inhibition par antibiotique (mm)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"24\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Diamètre du halo d’inhibition par antibiotique (mm)</text><line x1=\"62\" y1=\"226.0\" x2=\"582\" y2=\"226.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"230.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0 mm</text><line x1=\"62\" y1=\"188.8\" x2=\"582\" y2=\"188.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"192.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">8 mm</text><line x1=\"62\" y1=\"151.6\" x2=\"582\" y2=\"151.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"155.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">16 mm</text><line x1=\"62\" y1=\"114.4\" x2=\"582\" y2=\"114.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"118.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">24 mm</text><line x1=\"62\" y1=\"77.2\" x2=\"582\" y2=\"77.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"81.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">32 mm</text><line x1=\"62\" y1=\"40.0\" x2=\"582\" y2=\"40.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"44.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">40 mm</text><line x1=\"62\" y1=\"40\" x2=\"62\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"226\" x2=\"582\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><rect x=\"82.0\" y=\"226.0\" width=\"64.0\" height=\"1.0\" rx=\"3\" fill=\"#b71c1c\"/><text x=\"114.0\" y=\"220.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">0 mm</text><text x=\"114.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">AMX</text><rect x=\"186.0\" y=\"226.0\" width=\"64.0\" height=\"1.0\" rx=\"3\" fill=\"#b71c1c\"/><text x=\"218.0\" y=\"220.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">0 mm</text><text x=\"218.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">ERY</text><rect x=\"290.0\" y=\"160.9\" width=\"64.0\" height=\"65.1\" rx=\"3\" fill=\"#ef6c00\"/><text x=\"322.0\" y=\"154.9\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">14 mm</text><text x=\"322.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">CTX</text><rect x=\"394.0\" y=\"114.4\" width=\"64.0\" height=\"111.6\" rx=\"3\" fill=\"#f9a825\"/><text x=\"426.0\" y=\"108.4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">24 mm</text><text x=\"426.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">GEN</text><rect x=\"498.0\" y=\"77.2\" width=\"64.0\" height=\"148.8\" rx=\"3\" fill=\"#2e7d32\"/><text x=\"530.0\" y=\"71.2\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">32 mm</text><text x=\"530.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">CIP</text><text transform=\"translate(16,133) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Diamètre du halo (mm)</text><text x=\"582\" y=\"294\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">D = 0 : la bactérie pousse jusqu’à la pastille</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Photographie d’antibiogramme sur boîte de Pétri.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Table standardisée d’interprétation clinique (SFM)",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Seuils de résistance et de sensibilité</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Antibiotique</th><th style=\"text-align:center\">Résistant si D &lt;</th><th style=\"text-align:center\">Sensible si D ≥</th><th style=\"text-align:center\">Résultat mesuré</th><th style=\"text-align:center\">Conclusion</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Amoxicilline (AMX)</td><td style=\"text-align:center\">14 mm</td><td style=\"text-align:center\">19 mm</td><td style=\"text-align:center\">0 mm</td><td style=\"text-align:center\">Résistante</td></tr><tr><td style=\"font-weight:600\">Ciprofloxacine (CIP)</td><td style=\"text-align:center\">19 mm</td><td style=\"text-align:center\">25 mm</td><td style=\"text-align:center\">32 mm</td><td style=\"text-align:center\">Sensible</td></tr><tr><td style=\"font-weight:600\">Gentamicine (GEN)</td><td style=\"text-align:center\">15 mm</td><td style=\"text-align:center\">18 mm</td><td style=\"text-align:center\">24 mm</td><td style=\"text-align:center\">Sensible</td></tr><tr><td style=\"font-weight:600\">Céfotaxime (CTX)</td><td style=\"text-align:center\">17 mm</td><td style=\"text-align:center\">21 mm</td><td style=\"text-align:center\">14 mm</td><td style=\"text-align:center\">Résistante</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Société Française de Microbiologie — table de lecture normalisée.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Le mécanisme de l’antibiorésistance : sélection naturelle",
    "contenu": "<svg viewBox=\"0 0 600 250\" role=\"img\" aria-label=\"De la mutation à la souche résistante\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">De la mutation à la souche résistante</text><rect x=\"20\" y=\"30\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"300\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Population bactérienne : une mutation aléatoire apparaît chez un individu</text><rect x=\"20\" y=\"90\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"300\" y=\"110\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Antibiotique mal utilisé (trop tôt arrêté, trop fréquent)</text><rect x=\"20\" y=\"150\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"300\" y=\"170\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Les bactéries sensibles meurent — les mutantes résistantes survivent</text><rect x=\"20\" y=\"210\" width=\"560\" height=\"40\" rx=\"7\" fill=\"#e8f5e9\" stroke=\"#2e7d32\" stroke-width=\"1.4\"/><text x=\"300\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Sélection naturelle : prolifération de la souche résistante</text><line x1=\"290\" y1=\"70\" x2=\"290.0\" y2=\"88.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,90 285.0,79.0 295.0,79.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"130\" x2=\"290.0\" y2=\"148.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,150 285.0,139.0 295.0,139.0\" fill=\"#475569\"/><line x1=\"290\" y1=\"190\" x2=\"290.0\" y2=\"208.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"290,210 285.0,199.0 295.0,199.0\" fill=\"#475569\"/><text x=\"8\" y=\"242\" font-size=\"10\" fill=\"#94a3b8\">L’antibiotique ne crée pas la mutation : il la sélectionne</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Concept One Health ; Santé publique France.</div>"
   }
  ]
 },
 "A3-RESI": {
  "questions": [
   {
    "q": "Relevez sur le graphique le nombre de décès attribuables à l'antibiorésistance en 2019 et la projection pour 2050.",
    "verb": "Relever",
    "pts": 2
   },
   {
    "q": "À partir du tableau, identifiez les deux grands secteurs d'usage des antibiotiques et la pratique problématique de chacun.",
    "verb": "Identifier",
    "pts": 2.5
   },
   {
    "q": "Expliquez comment un gène de résistance apparu dans un élevage peut atteindre la santé humaine.",
    "verb": "Expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "GRAM Project — The Lancet, 2022",
   "ANSES — Suivi des ventes d’antibiotiques",
   "OMS — antibiorésistance"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "L’antibiorésistance : un enjeu de santé mondiale",
    "contenu": "<svg viewBox=\"0 0 600 300\" role=\"img\" aria-label=\"Décès attribuables à l’antibiorésistance (projections)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"24\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Décès attribuables à l’antibiorésistance (projections)</text><line x1=\"62\" y1=\"226.0\" x2=\"582\" y2=\"226.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"230.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0</text><line x1=\"62\" y1=\"188.8\" x2=\"582\" y2=\"188.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"192.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">2</text><line x1=\"62\" y1=\"151.6\" x2=\"582\" y2=\"151.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"155.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">4</text><line x1=\"62\" y1=\"114.4\" x2=\"582\" y2=\"114.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"118.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">6</text><line x1=\"62\" y1=\"77.2\" x2=\"582\" y2=\"77.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"81.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">8</text><line x1=\"62\" y1=\"40.0\" x2=\"582\" y2=\"40.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"44.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">10</text><line x1=\"62\" y1=\"40\" x2=\"62\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"226\" x2=\"582\" y2=\"226\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><rect x=\"95.0\" y=\"202.4\" width=\"64.0\" height=\"23.6\" rx=\"3\" fill=\"#f9a825\"/><text x=\"127.0\" y=\"196.4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">1.27</text><text x=\"127.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">2019</text><rect x=\"225.0\" y=\"190.7\" width=\"64.0\" height=\"35.3\" rx=\"3\" fill=\"#ef6c00\"/><text x=\"257.0\" y=\"184.7\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">1.9</text><text x=\"257.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">2025</text><rect x=\"355.0\" y=\"170.2\" width=\"64.0\" height=\"55.8\" rx=\"3\" fill=\"#c62828\"/><text x=\"387.0\" y=\"164.2\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">3</text><text x=\"387.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">2030</text><rect x=\"485.0\" y=\"40.0\" width=\"64.0\" height=\"186.0\" rx=\"3\" fill=\"#b71c1c\"/><text x=\"517.0\" y=\"34.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">10</text><text x=\"517.0\" y=\"243\" text-anchor=\"middle\" font-size=\"10.5\" fill=\"#475569\">2050</text><text transform=\"translate(16,133) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Décès par an (millions)</text><text x=\"582\" y=\"294\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Projections OMS</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Étude GRAM (Global Research on Antimicrobial Resistance) — The Lancet, 2022.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Les sources de la résistance : usage humain et élevage",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Répartition des usages d’antibiotiques</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Secteur</th><th style=\"text-align:center\">Part de la consommation</th><th style=\"text-align:center\">Pratique concernée</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Médecine humaine</td><td style=\"text-align:center\">≈ 60 %</td><td style=\"text-align:center\">prescriptions, interruptions précoces de traitement</td></tr><tr><td style=\"font-weight:600\">Élevages</td><td style=\"text-align:center\">≈ 40 %</td><td style=\"text-align:center\">usage préventif et facteur de croissance</td></tr><tr><td style=\"font-weight:600\">Eaux usées</td><td style=\"text-align:center\">—</td><td style=\"text-align:center\">rejet de gènes de résistance dans l’environnement</td></tr><tr><td style=\"font-weight:600\">Hôpitaux</td><td style=\"text-align:center\">—</td><td style=\"text-align:center\">infections nosocomiales multi-résistantes</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Données de surveillance : ANSES, Santé publique France, OMS.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "De la bactérie à l’écosystème : la dissémination",
    "contenu": "<svg viewBox=\"0 0 600 260\" role=\"img\" aria-label=\"La dissémination des gènes de résistance\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"22\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">La dissémination des gènes de résistance</text><rect x=\"20\" y=\"30\" width=\"250\" height=\"90\" rx=\"7\" fill=\"#e3f2fd\" stroke=\"#0277bd\" stroke-width=\"1.4\"/><text x=\"145\" y=\"59\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Élevage</text><text x=\"145\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">antibiotiques</text><text x=\"145\" y=\"89\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">utilisés</text><rect x=\"330\" y=\"30\" width=\"250\" height=\"90\" rx=\"7\" fill=\"#ffebee\" stroke=\"#c62828\" stroke-width=\"1.4\"/><text x=\"455\" y=\"59\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Bactéries</text><text x=\"455\" y=\"74\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">résistantes</text><text x=\"455\" y=\"89\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">sélectionnées</text><rect x=\"20\" y=\"170\" width=\"250\" height=\"70\" rx=\"7\" fill=\"#fff8e1\" stroke=\"#f59e0b\" stroke-width=\"1.4\"/><text x=\"145\" y=\"197\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Eaux usées</text><text x=\"145\" y=\"212\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">et sols</text><rect x=\"330\" y=\"170\" width=\"250\" height=\"70\" rx=\"7\" fill=\"#f3e5f5\" stroke=\"#6a1b9a\" stroke-width=\"1.4\"/><text x=\"455\" y=\"197\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">Santé humaine</text><text x=\"455\" y=\"212\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"400\" fill=\"#0f172a\">infections difficiles</text><line x1=\"270\" y1=\"60\" x2=\"328.4\" y2=\"60.0\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"330,60 319.0,65.0 319.0,55.0\" fill=\"#475569\"/><line x1=\"145\" y1=\"120\" x2=\"145.0\" y2=\"168.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"145,170 140.0,159.0 150.0,159.0\" fill=\"#475569\"/><line x1=\"455\" y1=\"120\" x2=\"455.0\" y2=\"168.4\" stroke=\"#475569\" stroke-width=\"2\"/><polygon points=\"455,170 450.0,159.0 460.0,159.0\" fill=\"#475569\"/><line x1=\"270\" y1=\"205\" x2=\"328.4\" y2=\"205.0\" stroke=\"#c62828\" stroke-width=\"2\"/><polygon points=\"330,205 319.0,210.0 319.0,200.0\" fill=\"#c62828\"/><text x=\"8\" y=\"252\" font-size=\"10\" fill=\"#94a3b8\">Le gène de résistance circule entre bactéries (plasmides)</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Concept One Health ; transfert horizontal de gènes.</div>"
   }
  ]
 },
 "A3-HPVC": {
  "questions": [
   {
    "q": "Relevez dans le tableau les deux génotypes d'HPV au potentiel cancéreux le plus élevé.",
    "verb": "Relever",
    "pts": 2
   },
   {
    "q": "Lisez sur le graphique l'évolution de la couverture vaccinale et celle des lésions précancéreuses ; mettez-les en relation.",
    "verb": "Lire et mettre en relation",
    "pts": 2.5
   },
   {
    "q": "Expliquez pourquoi la vaccination et le dépistage par frottis sont deux outils complémentaires.",
    "verb": "Expliquer",
    "pts": 3
   }
  ],
  "sources": [
   "OMS — Papillomavirus humain et cancer du col",
   "Santé publique France — vaccination HPV",
   "INCa — dépistage du cancer du col"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Les Papillomavirus humains : génotypes et risque",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Génotypes d’HPV et pathologies associées</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Génotype</th><th style=\"text-align:center\">Fréquence</th><th style=\"text-align:center\">Potentiel cancéreux</th><th style=\"text-align:center\">Pathologie associée</th></tr></thead><tbody><tr><td style=\"font-weight:600\">HPV 16</td><td style=\"text-align:center\">≈ 3 % des infections</td><td style=\"text-align:center\">très élevé</td><td style=\"text-align:center\">cancer du col de l’utérus, oropharynx</td></tr><tr><td style=\"font-weight:600\">HPV 18</td><td style=\"text-align:center\">≈ 2 %</td><td style=\"text-align:center\">élevé</td><td style=\"text-align:center\">cancer du col de l’utérus</td></tr><tr><td style=\"font-weight:600\">HPV 31, 33, 45</td><td style=\"text-align:center\">≈ 5 %</td><td style=\"text-align:center\">élevé</td><td style=\"text-align:center\">cancers du col</td></tr><tr><td style=\"font-weight:600\">HPV 6, 11</td><td style=\"text-align:center\">≈ 90 % des condylomes</td><td style=\"text-align:center\">faible</td><td style=\"text-align:center\">verrues génitales (condylomes)</td></tr><tr><td style=\"font-weight:600\">Autres génotypes</td><td style=\"text-align:center\">—</td><td style=\"text-align:center\">négligeable</td><td style=\"text-align:center\">aucune pathologie connue</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Données épidémiologiques OMS ; circovirus HPV.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Efficacité de la vaccination : données de couverture",
    "contenu": "<svg viewBox=\"0 0 600 320\" role=\"img\" aria-label=\"Couverture vaccinale HPV et incidence des lésions (schéma indicatif)\" style=\"max-width:100%;height:auto;font-family:inherit;border:1px solid #e2e8f0;border-radius:8px;background:#fff\"><text x=\"8\" y=\"26\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0f172a\">Couverture vaccinale HPV et incidence des lésions (schéma indicatif)</text><rect x=\"62\" y=\"16\" width=\"11\" height=\"11\" rx=\"2\" fill=\"#0277bd\"/><text x=\"79\" y=\"26\" font-size=\"11\" fill=\"#334155\">Couverture vaccinale (2 doses)</text><rect x=\"240\" y=\"16\" width=\"11\" height=\"11\" rx=\"2\" fill=\"#c62828\"/><text x=\"257\" y=\"26\" font-size=\"11\" fill=\"#334155\">Incidence des lésions précancéreuses</text><line x1=\"62\" y1=\"258.0\" x2=\"582\" y2=\"258.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"262.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">0</text><line x1=\"62\" y1=\"215.2\" x2=\"582\" y2=\"215.2\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"219.2\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">20</text><line x1=\"62\" y1=\"172.4\" x2=\"582\" y2=\"172.4\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"176.4\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">40</text><line x1=\"62\" y1=\"129.6\" x2=\"582\" y2=\"129.6\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"133.6\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">60</text><line x1=\"62\" y1=\"86.8\" x2=\"582\" y2=\"86.8\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"90.8\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">80</text><line x1=\"62\" y1=\"44.0\" x2=\"582\" y2=\"44.0\" stroke=\"#e6ecf2\"/><text x=\"53\" y=\"48.0\" text-anchor=\"end\" font-size=\"11\" fill=\"#6b7a8d\">100</text><text x=\"62.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2010</text><text x=\"148.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2013.3333333333333</text><text x=\"235.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2016.6666666666667</text><text x=\"322.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2020</text><text x=\"408.7\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2023.3333333333333</text><text x=\"495.3\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2026.6666666666667</text><text x=\"582.0\" y=\"277\" text-anchor=\"middle\" font-size=\"11\" fill=\"#6b7a8d\">2030</text><line x1=\"62\" y1=\"44\" x2=\"62\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><line x1=\"62\" y1=\"258\" x2=\"582\" y2=\"258\" stroke=\"#93a4b8\" stroke-width=\"1.6\"/><polyline points=\"62.0,247.3 114.0,225.9 166.0,204.5 218.0,193.8 270.0,187.4 322.0,181.0 374.0,172.4 426.0,168.1\" fill=\"none\" stroke=\"#0277bd\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"62.0\" cy=\"247.3\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"114.0\" cy=\"225.9\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"166.0\" cy=\"204.5\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"218.0\" cy=\"193.8\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"270.0\" cy=\"187.4\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"322.0\" cy=\"181.0\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"374.0\" cy=\"172.4\" r=\"3.2\" fill=\"#0277bd\"/><circle cx=\"426.0\" cy=\"168.1\" r=\"3.2\" fill=\"#0277bd\"/><polyline points=\"62.0,44.0 114.0,48.3 166.0,61.1 218.0,78.2 270.0,99.6 322.0,116.8 374.0,129.6 426.0,140.3\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"62.0\" cy=\"44.0\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"114.0\" cy=\"48.3\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"166.0\" cy=\"61.1\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"218.0\" cy=\"78.2\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"270.0\" cy=\"99.6\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"322.0\" cy=\"116.8\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"374.0\" cy=\"129.6\" r=\"3.2\" fill=\"#c62828\"/><circle cx=\"426.0\" cy=\"140.3\" r=\"3.2\" fill=\"#c62828\"/><text x=\"322\" y=\"298\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Année</text><text transform=\"translate(16,151) rotate(-90)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#475569\">Valeur relative (%)</text><text x=\"582\" y=\"314\" text-anchor=\"end\" font-size=\"10\" fill=\"#94a3b8\">Plus la couverture augmente, plus l’incidence baisse</text></svg><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Données indicatives inspirées des cohortes australienne et suédoise.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Le dépistage et la vaccination : deux outils complémentaires",
    "contenu": "<div style=\"border-left:4px solid #0277bd;background:#0277bd0f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🩺 Deux leviers indispensables</strong><br>La vaccination protège contre les génotypes les plus dangereux mais ne couvre pas tous les génotypes : le dépistage par frottis reste recommandé. La vaccination est la plus efficace avant les premiers rapports sexuels, mais le rattrapage jusqu'à 19-20 ans est possible.</div>"
   }
  ]
 },
 "A3-CONS": {
  "questions": [
   {
    "q": "Citez trois critères du consentement et donnez pour chacun un exemple de situation qui ne le respecte pas.",
    "verb": "Citer et illustrer",
    "pts": 2
   },
   {
    "q": "Indiquez l'âge de la majorité sexuelle en France et expliquez la logique de cette protection juridique.",
    "verb": "Indiquer et expliquer",
    "pts": 2.5
   },
   {
    "q": "Identifiez deux ressources vers lesquelles orienter une victime et précisez leur rôle.",
    "verb": "Identifier et préciser",
    "pts": 3
   }
  ],
  "sources": [
   "Code pénal français — atteintes sexuelles, harcèlement",
   "119 — Allô enfance en danger",
   "3018 — harcèlement et cyberharcèlement"
  ],
  "documents": [
   {
    "numero": "Doc 1",
    "titre": "Le consentement : définition juridique et critères",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Les critères du consentement libre et éclairé</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Critère</th><th style=\"text-align:center\">Signification</th><th style=\"text-align:center\">Exemple de non-respect</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Libre</td><td style=\"text-align:center\">aucune contrainte ni pression</td><td style=\"text-align:center\">menace, chantage affectif</td></tr><tr><td style=\"font-weight:600\">Éclairé</td><td style=\"text-align:center\">information complète sur les faits et risques</td><td style=\"text-align:center\">mensonge sur les conséquences</td></tr><tr><td style=\"font-weight:600\">Spécifique</td><td style=\"text-align:center\">accord pour un acte précis</td><td style=\"text-align:center\">généraliser un accord à un autre acte</td></tr><tr><td style=\"font-weight:600\">Réversible</td><td style=\"text-align:center\">changement d’avis possible à tout moment</td><td style=\"text-align:center\">culpabiliser le retrait du consentement</td></tr><tr><td style=\"font-weight:600\">Capacité</td><td style=\"text-align:center\">personne majeure et en état de discernement</td><td style=\"text-align:center\">état d’ébriété, minorité</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Droit français ; définition du consentement en matière d’atteintes sexuelles.</div>"
   },
   {
    "numero": "Doc 2",
    "titre": "Le cadre légal et la notion de majorité sexuelle",
    "contenu": "<div style=\"overflow-x:auto\"><div style=\"font-weight:700;font-size:.85rem;margin-bottom:.35rem;color:#0f172a\">Repères juridiques en France</div><table style=\"width:100%;border-collapse:collapse;font-size:.8rem\"><thead><tr style=\"background:#eef4f8\"><th style=\"text-align:left\">Notion</th><th style=\"text-align:center\">Règle</th><th style=\"text-align:center\">Portée</th></tr></thead><tbody><tr><td style=\"font-weight:600\">Majorité sexuelle</td><td style=\"text-align:center\">15 ans</td><td style=\"text-align:center\">aucun rapport avec un mineur de 15 ans n’est présumé libre</td></tr><tr><td style=\"font-weight:600\">Atteinte sexuelle sur mineur de 15 ans</td><td style=\"text-align:center\">délit pénal</td><td style=\"text-align:center\">20 ans de réclusion criminelle</td></tr><tr><td style=\"font-weight:600\">Atteinte sexuelle sur majeur</td><td style=\"text-align:center\">délit pénal</td><td style=\"text-align:center\">5 ans d’emprisonnement et 75 000 € d’amende</td></tr><tr><td style=\"font-weight:600\">Diffusion d’images intimes</td><td style=\"text-align:center\">délit pénal</td><td style=\"text-align:center\">2 ans d’emprisonnement et 60 000 € d’amende</td></tr><tr><td style=\"font-weight:600\">Cyberharcèlement</td><td style=\"text-align:center\">délit pénal</td><td style=\"text-align:center\">peines aggravées si victime mineure</td></tr></tbody></table></div><div style=\"margin-top:.5rem;font-size:.72rem;color:#64748b;font-style:italic\">🔍 Code pénal français — articles relatifs aux atteintes sexuelles et au harcèlement.</div>"
   },
   {
    "numero": "Doc 3",
    "titre": "Agir : témoigner, signaler, accompagner",
    "contenu": "<div style=\"border-left:4px solid #c62828;background:#c628280f;border-radius:6px;padding:.6rem .8rem;margin-top:.5rem;font-size:.85rem;line-height:1.5\"><strong>🛡️ Que faire en cas de situation problématique ?</strong><br>On peut en parler à un adulte de confiance (infirmier·ère scolaire, Psy-EN, assistant·e de service social) ou appeler le 119 (Allô enfance en danger) et le 3018 (harcèlement, cyberharcèlement) — appels gratuits, anonymes et confidentiels.</div>"
   }
  ]
 }
};
