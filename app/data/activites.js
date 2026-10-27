/* Fiches d’activités différenciées expertes générées avec skillsvt (D:\skillsvt\skillsvt_cycle4_expert)
   Chaque fiche comprend :
   - Problématique ancrée dans le réel & obstacle épistémologique ciblé
   - Voie 1 (Autonome) : Tâche complexe + 3 niveaux de coups de pouce (Méthode, Indice, Notion)
   - Voie 2 (Guidée) : Parcours pas-à-pas découpé
   - Corpus documentaire authentique chiffré
   - Grille d'évaluation LSU critériée (MI, MF, MS, TBM) adossée au Socle (D1.3, D4.1, D4.2, D4.3, D5) */

window.PROG = window.PROG || { levels: {}, activites: {} };
PROG.activites = {

  /* =========================================================================
     CLASSE DE 4ÈME
     ========================================================================= */

  "A4-CARB": {
    id: "A4-CARB",
    niveau: "4e",
    titre: "Modéliser le cycle du carbone : calcul des temps de résidence et déséquilibre anthropique",
    duree: "2 heures (Séance paire S2)",
    contexte: "Dans les carottes de glace de l’Antarctique, la concentration en CO2 n’a jamais dépassé 300 ppm au cours des 800 000 dernières années. En 2026, elle dépasse 425 ppm à l’observatoire du Mauna Loa. Pourquoi le carbone circule-t-il à des rythmes si différents selon les réservoirs de la Terre, et pourquoi nos émissions d’énergies fossiles créent-elles un tel embouteillage dans l’atmosphère ?",
    problematique: "Comment calculer le temps de séjour du carbone dans chaque enveloppe terrestre et démontrer l’impact des activités humaines sur le cycle naturel ?",
    obstacle: {
      conception_fausse: "Le carbone rejeté par les usines et les voitures disparaît rapidement dans l’espace ou est totalement absorbé par les arbres.",
      rupture_didactique: "Le calcul au tableur des flux entrants et sortants montre que les puits naturels (forêts et océans) ne peuvent absorber qu'environ la moitié de nos émissions annuelles : le reste s'accumule durablement dans le réservoir atmosphérique."
    },
    voie1_autonome: {
      titre: "Tâche Complexe — Mission Analyste Climat pour l'Agence Internationale de l'Énergie",
      consigne: "En exploitant les données des Documents 1 à 3, complétez le modèle numérique du cycle du carbone. Vous calculerez les temps de résidence du carbone dans l'atmosphère et dans la biosphère, puis rédigerez une note de synthèse argumentée expliquant pourquoi l’injection annuelle de 10 Gt de carbone fossile par les activités humaines provoque une hausse continue du CO2 atmosphérique malgré l'action des puits naturels. Votre réponse comportera des calculs précis avec unités.",
      coups_de_pouce: {
        niveau_1_methode: "Pour calculer le temps de résidence dans un réservoir à l'équilibre, appliquez la formule : Temps de résidence (en années) = Masse du réservoir (Gt C) / Total des flux sortants (Gt C/an).",
        niveau_2_indice: "Pour l'atmosphère préindustrielle : Réservoir = 600 Gt C. Flux sortants annuels = 120 Gt C (photosynthèse) + 90 Gt C (dissolution océanique) = 210 Gt C/an. Comparez ce temps de résidence très court à celui des roches carbonatées de la lithosphère (des dizaines de millions d'années).",
        niveau_3_notion: "Faites le bilan annuel actuel : Entrées dans l'atmosphère = Respiration terrestre (120) + Dégazage océan (90) + Émissions humaines fossiles (10) = 220 Gt C/an. Sorties = Photosynthèse (123) + Absorption océan (92) = 215 Gt C/an. Constatez l'excédent net de +5 Gt C/an qui s'accumule chaque année."
      }
    },
    voie2_guidee: {
      titre: "Parcours Pas-à-Pas Guidé",
      etapes: [
        { id: "E1", consigne: "À partir du Document 1, relever la masse totale de carbone présente dans l'atmosphère préindustrielle et la masse stockée dans les roches sédimentaires de la lithosphère.", competence: "D4.2", points: 2 },
        { id: "E2", consigne: "Calculer le temps de résidence d'un atome de carbone dans l'atmosphère préindustrielle en divisant la masse du réservoir par la somme des flux sortants annuels.", competence: "D4.2", points: 2.5 },
        { id: "E3", consigne: "À l’aide du Document 2, comparer les flux d'absorption actuels (océan et végétation) avec les émissions anthropiques issues des combustibles fossiles.", competence: "D4.1", points: 2.5 },
        { id: "E4", consigne: "Bilan : Rédiger un paragraphe expliquant pourquoi le cycle du carbone n'est plus à l'équilibre aujourd'hui et justifier l'expression 'forçage anthropique'.", competence: "D1.3", points: 3 }
      ]
    },
    documents: [
      { numero: "Doc 1", titre: "Masse des réservoirs de carbone sur Terre (GIEC / Global Carbon Project)", contenu: "Atmosphère : 600 Gt C (préindustriel) / 870 Gt C (actuel). Biosphère continentale : 2 000 Gt C (sol et biomasse). Hydrosphère (océans) : 38 000 Gt C. Lithosphère (calcaires et combustibles fossiles) : > 60 000 000 Gt C." },
      { numero: "Doc 2", titre: "Flux annuels de carbone actuels (en Gt C/an)", contenu: "Échanges naturels équilibrés : Photosynthèse continentale (120 Gt/an) / Respiration et décomposition (120 Gt/an). Échanges océaniques naturels : Dissolution (90 Gt/an) / Dégazage (90 Gt/an). Perturbation humaine : Combustibles fossiles et cimenteries (+9,5 Gt/an), déforestation (+1,2 Gt/an). Puits compensateurs : absorption accrue forêt (-3,1 Gt/an), absorption océan (-2,6 Gt/an). Excédent atmosphérique net : ≈ +5 Gt C/an." },
      { numero: "Doc 3", titre: "Courbe de Keeling à Mauna Loa (1959-2025)", contenu: "<div style=\"font-size:0.84rem; line-height:1.55; color:#1e293b;\">   <div style=\"background:#eef6f9; border-left:3px solid #1e5f74; padding:0.55rem 0.75rem; border-radius:0 6px 6px 0; margin-bottom:0.7rem; font-size:0.8rem;\">     <strong>Source :</strong> NOAA Global Monitoring Laboratory — station du Mauna Loa (Hawaï, 21° N, 3 397 m),     fichier brut <em>co2_annmean_mlo.txt</em>. Fraction molaire du CO₂ dans l'air sec, moyennes annuelles,     exprimée en ppm (µmol/mol). Incertité de la moyenne annuelle : <strong>± 0,12 ppm</strong>.     Mesures fondées sur les travaux de C. David Keeling (Scripps Institution of Oceanography).   </div>    <div style=\"font-weight:800; color:#1e5f74; font-size:0.78rem; text-transform:uppercase; letter-spacing:0.03em; margin-bottom:0.3rem;\">     📈 Graphique 1 — Hausse du CO₂ atmosphérique, 1959 → 2025 (67 mesures annuelles)   </div>   <svg viewBox=\"0 0 620 250\" style=\"width:100%; height:auto; background:#fff; border:1px solid #e2e8f0; border-radius:8px; display:block;\" role=\"img\" aria-label=\"Courbe de la concentration atmospherique en dioxyde de carbone de 1959 a 2025, en parties par million\">     <rect x=\"48\" y=\"18\" width=\"556\" height=\"198\" fill=\"#f8fafc\"/>     <line x1='48' y1='199.5' x2='604' y2='199.5' stroke='#cbd5e1' stroke-width='1' stroke-dasharray='3 3'/><text x='41' y='199.5' font-size='10' fill='#64748b' text-anchor='end' dominant-baseline='middle'>320</text><line x1='48' y1='166.5' x2='604' y2='166.5' stroke='#cbd5e1' stroke-width='1' stroke-dasharray='3 3'/><text x='41' y='166.5' font-size='10' fill='#64748b' text-anchor='end' dominant-baseline='middle'>340</text><line x1='48' y1='133.5' x2='604' y2='133.5' stroke='#cbd5e1' stroke-width='1' stroke-dasharray='3 3'/><text x='41' y='133.5' font-size='10' fill='#64748b' text-anchor='end' dominant-baseline='middle'>360</text><line x1='48' y1='100.5' x2='604' y2='100.5' stroke='#cbd5e1' stroke-width='1' stroke-dasharray='3 3'/><text x='41' y='100.5' font-size='10' fill='#64748b' text-anchor='end' dominant-baseline='middle'>380</text><line x1='48' y1='67.5' x2='604' y2='67.5' stroke='#cbd5e1' stroke-width='1' stroke-dasharray='3 3'/><text x='41' y='67.5' font-size='10' fill='#64748b' text-anchor='end' dominant-baseline='middle'>400</text><line x1='48' y1='34.5' x2='604' y2='34.5' stroke='#cbd5e1' stroke-width='1' stroke-dasharray='3 3'/><text x='41' y='34.5' font-size='10' fill='#64748b' text-anchor='end' dominant-baseline='middle'>420</text><line x1='48.0' y1='18' x2='48.0' y2='216' stroke='#e2e8f0' stroke-width='1'/><text x='48.0' y='238' font-size='10' fill='#64748b' text-anchor='middle'>1959</text><line x1='140.7' y1='18' x2='140.7' y2='216' stroke='#e2e8f0' stroke-width='1'/><text x='140.7' y='238' font-size='10' fill='#64748b' text-anchor='middle'>1970</text><line x1='224.9' y1='18' x2='224.9' y2='216' stroke='#e2e8f0' stroke-width='1'/><text x='224.9' y='238' font-size='10' fill='#64748b' text-anchor='middle'>1980</text><line x1='309.2' y1='18' x2='309.2' y2='216' stroke='#e2e8f0' stroke-width='1'/><text x='309.2' y='238' font-size='10' fill='#64748b' text-anchor='middle'>1990</text><line x1='393.4' y1='18' x2='393.4' y2='216' stroke='#e2e8f0' stroke-width='1'/><text x='393.4' y='238' font-size='10' fill='#64748b' text-anchor='middle'>2000</text><line x1='477.6' y1='18' x2='477.6' y2='216' stroke='#e2e8f0' stroke-width='1'/><text x='477.6' y='238' font-size='10' fill='#64748b' text-anchor='middle'>2010</text><line x1='561.9' y1='18' x2='561.9' y2='216' stroke='#e2e8f0' stroke-width='1'/><text x='561.9' y='238' font-size='10' fill='#64748b' text-anchor='middle'>2020</text><line x1='604.0' y1='18' x2='604.0' y2='216' stroke='#e2e8f0' stroke-width='1'/><text x='604.0' y='238' font-size='10' fill='#64748b' text-anchor='middle'>2025</text>     <text x=\"326\" y=\"12\" font-size=\"10\" fill=\"#475569\" text-anchor=\"middle\" font-weight=\"700\">Concentration en CO₂ (ppm) — moyennes annuelles</text>     <polygon points=\"48,216.0 48.0,206.1 56.4,204.6 64.8,203.4 73.3,202.1 81.7,201.2 90.1,200.1 98.5,199.4 107.0,197.2 115.4,195.9 123.8,194.5 132.2,191.9 140.7,190.1 149.1,189.1 157.5,187.2 165.9,183.5 174.4,182.7 182.8,181.1 191.2,179.7 199.6,176.7 208.1,174.1 216.5,171.7 224.9,168.5 233.3,166.3 241.8,164.1 250.2,161.3 258.6,158.5 267.0,156.0 275.5,153.9 283.9,151.1 292.3,147.2 300.7,144.7 309.2,142.7 317.6,140.6 326.0,139.2 334.4,138.1 342.8,135.2 351.3,131.9 359.7,129.0 368.1,127.1 376.5,122.2 385.0,119.4 393.4,117.5 401.8,114.8 410.2,111.3 418.7,107.1 427.1,104.3 435.5,100.5 443.9,97.1 452.4,93.9 460.8,90.9 469.2,87.9 477.6,83.8 486.1,80.9 494.5,77.3 502.9,72.9 511.3,69.5 519.8,65.8 528.2,60.2 536.6,56.3 545.0,53.1 553.5,48.3 561.9,44.1 570.3,40.4 578.7,36.9 587.2,32.7 595.6,26.9 604.0,22.4 604.0,216.0\" fill=\"#c62828\" opacity=\"0.07\"/>     <polyline points=\"48.0,206.1 56.4,204.6 64.8,203.4 73.3,202.1 81.7,201.2 90.1,200.1 98.5,199.4 107.0,197.2 115.4,195.9 123.8,194.5 132.2,191.9 140.7,190.1 149.1,189.1 157.5,187.2 165.9,183.5 174.4,182.7 182.8,181.1 191.2,179.7 199.6,176.7 208.1,174.1 216.5,171.7 224.9,168.5 233.3,166.3 241.8,164.1 250.2,161.3 258.6,158.5 267.0,156.0 275.5,153.9 283.9,151.1 292.3,147.2 300.7,144.7 309.2,142.7 317.6,140.6 326.0,139.2 334.4,138.1 342.8,135.2 351.3,131.9 359.7,129.0 368.1,127.1 376.5,122.2 385.0,119.4 393.4,117.5 401.8,114.8 410.2,111.3 418.7,107.1 427.1,104.3 435.5,100.5 443.9,97.1 452.4,93.9 460.8,90.9 469.2,87.9 477.6,83.8 486.1,80.9 494.5,77.3 502.9,72.9 511.3,69.5 519.8,65.8 528.2,60.2 536.6,56.3 545.0,53.1 553.5,48.3 561.9,44.1 570.3,40.4 578.7,36.9 587.2,32.7 595.6,26.9 604.0,22.4\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/>     <circle cx=\"48.0\" cy=\"206.1\" r=\"3.6\" fill=\"#1e5f74\"/>     <circle cx=\"604.0\" cy=\"22.4\" r=\"3.6\" fill=\"#c62828\"/>     <text x=\"48.0\" y=\"206.117\" font-size=\"10\" font-weight=\"800\" fill=\"#1e5f74\" text-anchor=\"middle\">315,98 ppm</text>     <text x=\"604.0\" y=\"12.399999999999999\" font-size=\"11\" font-weight=\"800\" fill=\"#c62828\" text-anchor=\"end\">427,35 ppm</text>   </svg>    <div style=\"font-weight:800; color:#1e5f74; font-size:0.78rem; text-transform:uppercase; letter-spacing:0.03em; margin:0.8rem 0 0.3rem;\">     📊 Tableau 1 — Relevés décennaux (données brutes NOAA)   </div>   <table class=\"lsu-table\" style=\"font-size:0.8rem;\">     <thead><tr><th style=\"width:22%\">Année</th><th style=\"width:39%\">CO₂ (ppm)</th><th style=\"width:39%\">Écart vs 1959</th></tr></thead>     <tbody><tr><td><strong>1959</strong></td><td>315,98</td><td>+0,00</td></tr><tr><td><strong>1970</strong></td><td>325,68</td><td>+9,70</td></tr><tr><td><strong>1980</strong></td><td>338,76</td><td>+22,78</td></tr><tr><td><strong>1990</strong></td><td>354,45</td><td>+38,47</td></tr><tr><td><strong>2000</strong></td><td>369,71</td><td>+53,73</td></tr><tr><td><strong>2010</strong></td><td>390,10</td><td>+74,12</td></tr><tr><td><strong>2020</strong></td><td>414,21</td><td>+98,23</td></tr><tr><td><strong>2024</strong></td><td>424,61</td><td>+108,63</td></tr><tr><td><strong>2025</strong></td><td>427,35</td><td>+111,37</td></tr></tbody>   </table>    <div style=\"font-weight:800; color:#1e5f74; font-size:0.78rem; text-transform:uppercase; letter-spacing:0.03em; margin:0.8rem 0 0.3rem;\">     📊 Tableau 2 — Accélération de la croissance (calculs à faire vérifier par les élèves)   </div>   <table class=\"lsu-table\" style=\"font-size:0.8rem;\">     <thead><tr><th style=\"width:40%\">Période</th><th style=\"width:30%\">Vitesse moyenne</th><th style=\"width:30%\">Gain sur la période</th></tr></thead>     <tbody><tr><td>1960 → 1970</td><td><strong>+0,88</strong></td><td>+8,77</td></tr><tr><td>1970 → 1980</td><td><strong>+1,31</strong></td><td>+13,08</td></tr><tr><td>1980 → 1990</td><td><strong>+1,57</strong></td><td>+15,69</td></tr><tr><td>1990 → 2000</td><td><strong>+1,53</strong></td><td>+15,26</td></tr><tr><td>2000 → 2010</td><td><strong>+2,04</strong></td><td>+20,39</td></tr><tr><td>2010 → 2020</td><td><strong>+2,41</strong></td><td>+24,11</td></tr><tr><td>2015 → 2025</td><td><strong>+2,63</strong></td><td>+26,34</td></tr></tbody>   </table>   <div style=\"font-size:0.74rem; color:#64748b; margin-top:0.3rem; font-style:italic;\">     Vitesse moyenne = (concentration finale − concentration initiale) ÷ nombre d'années. Unités : ppm/an.   </div>    <div style=\"background:#fff7ed; border:1px solid #fdba74; border-radius:6px; padding:0.6rem 0.8rem; margin-top:0.75rem; font-size:0.82rem;\">     <strong>💡 Données exploitables pour l'argumentation :</strong> en 67 ans (1959 → 2025), la concentration atmosphérique     est passée de <strong>315,98 à 427,35 ppm</strong>, soit <strong>+111,37 ppm</strong> —     une hausse de <strong>+35,2 %</strong>. Cette croissance <strong>n'est pas linéaire</strong> :     <strong>+2,63 ppm/an</strong> sur 2015-2025 contre <strong>+0,88 ppm/an</strong> sur 1960-1970,     soit un rythme <strong>multiplié par 3,0</strong> en un demi-siècle.     Or les carottes de glace de l'Antarctique montrent que la concentration est restée comprise entre     170 et 300 ppm pendant les 800 000 dernières années : la valeur actuelle est donc <strong>sans équivalent connu</strong>     sur cette échelle de temps.   </div> </div>" }
    ],
    grille_lsu: {
      D4_2: { MI: "Aucun calcul ou formule incorrecte.", MF: "Calcul posé mais erreur d'unités ou omission d'un flux.", MS: "Temps de résidence calculé correctement (≈ 2,8 ans dans l'atmosphère).", TBM: "Calculs parfaits, conversions rigoureuses et mise en perspective des ordres de grandeur temporels." },
      D1_3: { MI: "Paraphrase sans connecteurs logiques.", MF: "Explication confuse de l'excédent.", MS: "Texte structuré démontrant le déséquilibre de +5 Gt C/an avec lexique scientifique.", TBM: "Argumentation fluide, vocabulaire précis (flux, réservoirs, puits, temps de résidence) et conclusion percutante." }
    }
  },

  "A4-RISQ": {
    id: "A4-RISQ",
    niveau: "4e",
    titre: "Évaluer et gérer le risque sismique : comparaison Tohoku 2011 vs Kahramanmaraş 2023",
    duree: "2 heures (Séance paire S10)",
    contexte: "Le 11 mars 2011, le Japon subit un mégaséisme de magnitude 9,0 : les gratte-ciels de Tokyo oscillent mais ne s'effondrent pas. Le 6 février 2023, deux séismes de magnitude 7,8 et 7,5 frappent le sud de la Turquie et causent l'effondrement de milliers d'immeubles récents et plus de 53 000 décès. Pourquoi des séismes d'énergie comparable entraînent-ils des bilans humains si dissemblables ?",
    problematique: "Comment les notions d'aléa et de vulnérabilité permettent-elles de quantifier le risque géologique et de définir les mesures de protection indispensables ?",
    obstacle: {
      conception_fausse: "Le risque géologique ne dépend que de la force du séisme (sa magnitude) : on ne peut rien y faire, c'est une fatalité naturelle.",
      rupture_didactique: "La comparaison démontre qu'à magnitude égale, le risque est contrôlé par la vulnérabilité des constructions et la préparation des populations : des normes parasismiques rigoureuses sauvent des dizaines de milliers de vies."
    },
    voie1_autonome: {
      titre: "Tâche Complexe — Mission Expert auprès du Ministère de la Transition Écologique",
      consigne: "En exploitant les documents 1 à 3, rédigez un rapport comparatif démontrant la formule mathématique et conceptuelle 'Risque = Aléa × Vulnérabilité'. Vous expliquerez pourquoi les conséquences humaines ont été radicalement différentes entre le Japon et la Turquie, puis vous formulerez trois recommandations concrètes pour améliorer la sécurité parasismique et la mise en sûreté (PPMS) dans les collèges français situés en zone sismique.",
      coups_de_pouce: {
        niveau_1_methode: "Distinguez clairement dans deux colonnes ce qui relève du phénomène géologique naturel (l'aléa : magnitude, profondeur, failles) et ce qui relève de l'activité humaine exposée (la vulnérabilité : qualité du béton, normes de construction, entraînements des habitants).",
        niveau_2_indice: "Notez que la magnitude 9,0 du Japon a libéré environ 30 fois plus d'énergie que le séisme de Turquie (magnitude 7,8). Pourtant, le nombre de victimes directes dues aux effondrements de bâtiments à Tokyo a été minime comparé à la Turquie. Pourquoi ?",
        niveau_3_notion: "Le risque est la combinaison d'un aléa (imprévisible dans l'instant mais cartographiable) et d'une vulnérabilité (que les sociétés humaines peuvent réduire grâce à l'ingénierie parasismique et aux plans de prévention comme le PPMS)."
      }
    },
    voie2_guidee: {
      titre: "Parcours Pas-à-Pas Guidé",
      etapes: [
        { id: "E1", consigne: "À partir du Document 1, définir l'aléa sismique et comparer les magnitudes et énergies libérées lors des séismes du Japon et de Turquie.", competence: "D4.1", points: 2 },
        { id: "E2", consigne: "À l’aide du Document 2, identifier les facteurs qui expliquent la forte vulnérabilité des villes turques touchées en 2023.", competence: "D4.2", points: 2.5 },
        { id: "E3", consigne: "Montrer comment les constructions japonaises (amortisseurs parasismiques, béton armé vérifié) réduisent la vulnérabilité à un niveau très bas.", competence: "D4.1", points: 2.5 },
        { id: "E4", consigne: "Bilan : Énoncer la relation entre aléa, vulnérabilité et risque, et justifier l'intérêt des exercices PPMS dans un collège français.", competence: "D5", points: 3 }
      ]
    },
    documents: [
      { numero: "Doc 1", titre: "Données sismologiques comparées (USGS / EMSC)", contenu: "Japon (11 mars 2011) : Magnitude Mw = 9,0. Profondeur du foyer = 30 km. Contexte : subduction océan-continent de la plaque Pacifique sous la plaque Okhotsk. Turquie (6 février 2023) : Deux secousses principales Mw = 7,8 et 7,5. Profondeur = 10 à 17 km (foyer superficiel). Contexte : coulissage décrochant de la faille est-anatolienne entre plaques Arabique et Anatolienne." },
      { numero: "Doc 2", titre: "État des infrastructures et vulnérabilité observée", contenu: "Turquie : Plus de 200 000 bâtiments détruits ou gravement endommagés. Enquêtes d'ingénieurs : présence de béton de mauvaise qualité (sable marin non lavé), absence de chaînage acier vertical, piliers porteurs 'rez-de-chaussée souple' non renforcés. Japon : Normes strictes révisées (loi de 1981), fondations sur rotules et vérins hydrauliques oscillants, coupures automatiques du gaz et des métros dès la détection des ondes P par le réseau sismologique." },
      { numero: "Doc 3", titre: "Carte du zonage sismique de la France et PPMS", contenu: "La France métropolitaine est découpée en 5 zones de sismicité (1 = très faible à 5 = forte aux Antilles ; zone 3 et 4 dans les Alpes, Pyrénées et Provence). Tout collège en zone 3 ou 4 applique un PPMS (Plan Particulier de Mise en Sûreté) avec consigne réflexe : 'Se baisser, s'abriter sous une table solide, s'éloigner des fenêtres, évacuer au signal sonore'." }
    ],
    grille_lsu: {
      D4_1: { MI: "Confusion entre aléa et vulnérabilité.", MF: "Définitions partielles sans mise en relation avec les cas étudiés.", MS: "Distinction claire de l'aléa (géologique) et de la vulnérabilité (humaine/bâti) appliquée aux deux séismes.", TBM: "Raisonnement systémique rigoureux démontrant que le risque peut être atténué par l'action humaine." },
      D5: { MI: "Aucune mesure citoyenne proposée.", MF: "Mesures vagues sans lien avec le PPMS.", MS: "Recommandations concrètes d'aménagement et de comportement citoyen lors du PPMS.", TBM: "Sens civique aiguisé, justification des politiques publiques et articulation parfaite du rôle de l'élève citoyen." }
    }
  },

  "A4-MICR": {
    id: "A4-MICR",
    niveau: "4e",
    titre: "Le microbiote intestinal : partenaire vital de notre digestion et de notre santé",
    duree: "2 heures (Séance paire S22)",
    contexte: "Notre tube digestif abrite environ 100 000 milliards de micro-organismes pesant près de 1,5 kg : le microbiote intestinal. Longtemps considérées comme de simples passagers clandestins, ces bactéries s’avèrent indispensables. Que se passe-t-il chez un animal dépourvu de tout microbiote ?",
    problematique: "Comment les expériences sur les animaux axéniques démontrent-elles le rôle direct du microbiote dans la digestion, l'assimilation des nutriments et la santé ?",
    obstacle: {
      conception_fausse: "Tous les microbes sont des agents pathogènes dangereux qu'il faut éliminer à tout prix de notre organisme.",
      rupture_didactique: "Les données expérimentales montrent qu'un individu stérile (axénique) est sévèrement dénutri et vulnérable : notre survie dépend d'une symbiose mutualiste permanente avec nos bactéries intestinales."
    },
    voie1_autonome: {
      titre: "Tâche Complexe — Enquête Médicale pour la revue Inserm Sciences & Santé",
      consigne: "En analysant les résultats expérimentaux menés sur des souris axéniques (Documents 1 et 2) et l'anatomie microscopique de l'intestin (Document 3), rédigez un article scientifique démontrant pourquoi le microbiote intestinal doit être considéré comme un 'organe à part entière'. Vous expliquerez son rôle précis dans la transformation des fibres, la production de vitamines et le passage des nutriments vers le sang, et vous proposerez deux conseils nutritionnels pour préserver sa biodiversité.",
      coups_de_pouce: {
        niveau_1_methode: "Comparez point par point les souris axéniques (sans microbiote) et les souris conventionnelles (avec microbiote) : quantité de nourriture ingérée, masse corporelle, épaisseur de la muqueuse intestinale et présence de vitamines.",
        niveau_2_indice: "Remarquez que les souris axéniques mangent 30 % de nourriture en plus mais pèsent 15 % de moins que les souris normales. Cela signifie que sans bactéries, une grande partie des aliments riches en fibres traverse le tube digestif sans pouvoir être digérée ni absorbée.",
        niveau_3_notion: "Nos cellules humaines ne fabriquent pas d'enzymes capables de couper les fibres végétales (cellulose). Ce sont les enzymes bactériennes du microbiote qui fermentent ces fibres, libérant des acides gras volatils bénéfiques et synthétisant les vitamines B et K qui passent ensuite dans le sang au niveau des villosités."
      }
    },
    voie2_guidee: {
      titre: "Parcours Pas-à-Pas Guidé",
      etapes: [
        { id: "E1", consigne: "À partir du Document 1, comparer la masse corporelle et la ration alimentaire des souris axéniques et des souris conventionnelles.", competence: "D4.2", points: 2 },
        { id: "E2", consigne: "Expliquer pourquoi les souris axéniques présentent des carences en vitamines K et B12 alors que leur alimentation en contient les précurseurs.", competence: "D4.1", points: 2.5 },
        { id: "E3", consigne: "À l’aide du Document 3, identifier la surface où les nutriments issus de la digestion passent dans le sang et décrire son organisation.", competence: "D1.3", points: 2.5 },
        { id: "E4", consigne: "Bilan : Rédiger trois phrases résumant les bénéfices du microbiote intestinal pour la nutrition humaine et l'équilibre de santé.", competence: "D1.3", points: 3 }
      ]
    },
    documents: [
      { numero: "Doc 1", titre: "Expériences sur souris axéniques (INRAE / Institut Pasteur)", contenu: "Souris conventionnelles (avec microbiote) : consommation = 4,0 g d'aliments/jour ; masse corporelle à l'âge adulte = 28 g ; teneur en lipides corporels = 16 %. Souris axéniques (nées et élevées en bulle stérile, sans aucun microbe) : consommation = 5,2 g d'aliments/jour (+30 %) ; masse corporelle = 24 g (-14 %) ; teneur en lipides = 9 %. Paroi intestinale plus fine et villosités moins développées." },
      { numero: "Doc 2", titre: "Fonctions biochimiques des enzymes du microbiote", contenu: "Les bactéries intestinales (Bacteroidetes, Firmicutes) possèdent plus de 60 000 gènes codant pour des enzymes digestives (contre moins de 100 gènes d'enzymes digestives chez l'humain). Elles assurent la fermentation des fibres alimentaires non digestibles par l'estomac, produisant des acides gras à chaîne courte (acétate, butyrate) absorbés par le côlon. Elles synthétisent également la vitamine K (coagulation sanguine) et la vitamine B8/B12." },
      { numero: "Doc 3", titre: "La muqueuse de l'intestin grêle, une surface d'échange colossale", contenu: "L'intestin grêle humain mesure 6 à 7 mètres de long. Sa paroi interne est recouverte de replis (valvules conniventes), de villosités (1 mm de haut) et de microvillosités cellulaires. Surface totale développée : environ 30 à 40 m² (la taille d'un studio d'habitation). Chaque villosité est richement irriguée par un réseau de capillaires sanguins et un vaisseau lymphatique, séparés de la lumière intestinale par une seule couche de cellules épithéliales (épaisseur < 25 µm)." }
    ],
    grille_lsu: {
      D4_1: { MI: "Interprétation erronée des résultats expérimentaux.", MF: "Données relevées sans mise en relation logique de cause à effet.", MS: "Explication claire : les bactéries fournissent des enzymes indispensables pour digérer les fibres et nourrir les cellules.", TBM: "Démonstration expérimentale rigoureuse appuyée sur les souris axéniques avec maîtrise du concept de symbiose nutritionnelle." },
      D1_3: { MI: "Schéma non légendé ou texte sans vocabulaire biologique.", MF: "Vocabulaire imprécis (confusion nutriments/aliments).", MS: "Texte structuré utilisant correctement les termes : enzyme, microbiote, absorption intestinale, villosités, nutriments.", TBM: "Qualité rédactionnelle remarquable, rigueur anatomique et esprit de vulgarisation scientifique irréprochable." }
    }
  },

  "A4-PLAI": {
    id: "A4-PLAI",
    niveau: "4e",
    titre: "Neurobiologie du plaisir sexuel : anatomie comparée du clitoris et du pénis, et circuit de la récompense",
    duree: "2 heures (Séance paire S36)",
    contexte: "Pendant des décennies, le clitoris a été réduit dans les manuels scolaires à un simple petit bouton miniature, alors que le pénis était représenté dans toute sa complexité anatomique. En 2016, la chercheuse indépendante Odile Fillod conçoit le premier clitoris complet en 3D pour l'enseignement. Quelle est la réalité anatomique de ces organes et comment le cerveau transforme-t-il leur stimulation en sensation de plaisir ?",
    problematique: "Comment les structures anatomiques homologues du clitoris et du pénis captent-elles les stimuli sensoriels, et par quels mécanismes cérébraux le plaisir sexuel est-il produit ?",
    obstacle: {
      conception_fausse: "Le clitoris est un organe minuscule et secondaire, et le plaisir sexuel se résume à une réaction mécanique des organes génitaux indépendante du cerveau.",
      rupture_didactique: "L'anatomie 3D démontre que clitoris et pénis sont des organes homologues de même taille et même origine embryologique. L'imagerie cérébrale prouve que le plaisir n'est pas produit dans les organes génitaux mais élaboré par le cerveau (circuit de la récompense et dopamine)."
    },
    voie1_autonome: {
      titre: "Tâche Complexe — Projet d'Éducation à la Santé & Égalité Filles-Garçons (EVARS)",
      consigne: "En vous appuyant sur les documents 1 à 3, concevez une planche explicative scientifique destinée à une exposition du collège. Vous démontrerez point par point l'homologie embryologique et anatomique entre le clitoris et le pénis (tissus érectiles, innervation), puis vous expliquerez le trajet du message nerveux depuis les terminaisons sensorielles cutanées jusqu'aux zones cérébrales du plaisir (circuit de la récompense). Vous conclurez par une réflexion sur l'importance du respect mutuel et de l'écoute des émotions dans la sexualité.",
      coups_de_pouce: {
        niveau_1_methode: "Comparez dans un tableau les parties du clitoris et celles du pénis : gland, corps caverneux, tissus érectiles, richesse en récepteurs sensoriels.",
        niveau_2_indice: "Observez le Document 1 : le clitoris mesure en réalité 10 à 12 cm de long ! Ses branches (cruras) et ses bulbes vestibulaires entourent le vagin et se gorgent de sang lors de l'excitation, tout comme les corps caverneux du pénis.",
        niveau_3_notion: "Le stimulus tactile active des récepteurs sensoriels génitaux. Le message nerveux chemine le long des nerfs sensitifs jusqu'à la moelle puis au cortex sensoriel. Le cerveau active alors le circuit de la récompense (noyau accumbens, aire tegmentale ventrale) et libère de la dopamine : c'est le cerveau qui ressent et crée le plaisir."
      }
    },
    voie2_guidee: {
      titre: "Parcours Pas-à-Pas Guidé",
      etapes: [
        { id: "E1", consigne: "À partir du Document 1, citer les différentes parties du clitoris complet et donner ses dimensions réelles.", competence: "D1.3", points: 2 },
        { id: "E2", consigne: "Montrer que le clitoris et le pénis partagent des tissus homologues qui réagissent de la même façon lors de l'excitation sexuelle.", competence: "D4.1", points: 2.5 },
        { id: "E3", consigne: "À l’aide du Document 2, retracer le trajet du message nerveux depuis les zones érogènes jusqu'au cerveau.", competence: "D4.1", points: 2.5 },
        { id: "E4", consigne: "Bilan : Identifier le neurotransmetteur clé du circuit de la récompense cérébrale et expliquer pourquoi le plaisir sexuel est indissociable du consentement et du respect.", competence: "D5", points: 3 }
      ]
    },
    documents: [
      { numero: "Doc 1", titre: "Anatomie fonctionnelle du clitoris et du pénis (Travaux d'Odile Fillod & Dr Foldès)", contenu: "Clitoris : organe érectile de 10 à 12 cm composé d'un gland externe visible (protégé par un capuchon), d'un corps central et de deux branches caverneuses de 7 à 9 cm qui s'enroulent autour du vagin, associées à deux bulbes vestibulaires. Lors de l'excitation, ces tissus spongieux et caverneux se gorgent de sang (turgescence). Le gland du clitoris concentre plus de 8 000 à 10 000 terminaisons nerveuses sensorielles (deux fois plus que le gland du pénis). Pénis : constitué d'un gland, d'un corps spongieux entourant l'urètre et de deux corps caverneux érectiles." },
      { numero: "Doc 2", titre: "Imagerie cérébrale IRMf et neurobiologie du plaisir", contenu: "Lors d'une stimulation tactile d'une zone érogène : 1) Les récepteurs de la peau génèrent des messages nerveux sensitifs électriques conduits par le nerf pudendal vers la moelle épinière. 2) Les messages atteignent le cortex somatosensoriel du cerveau. 3) Activation conjointe du circuit de la récompense : l'aire tegmentale ventrale (ATV) projette des axones vers le noyau accumbens et le cortex préfrontal, libérant de la dopamine. 4) La libération de dopamine produit la sensation subjective de plaisir intense et de motivation." },
      { numero: "Doc 3", titre: "Définition de la santé sexuelle selon l'OMS et cadre du respect", contenu: "OMS : 'La santé sexuelle est un état de bien-être physique, émotionnel, mental et social associé à la sexualité, et non pas simplement l'absence de maladie ou d'infirmité. Elle requiert une approche positive et respectueuse de la sexualité et des relations sexuelles, ainsi que la possibilité d'avoir des expériences sexuelles agréables et sécurisantes, libres de toute contrainte, discrimination ou violence.' Tout plaisir partagé exige obligatoirement le consentement libre, conscient et révocable de chaque partenaire." }
    ],
    grille_lsu: {
      D4_1: { MI: "Confusion anatomique ou description purement mécanique.", MF: "Structures identifiées mais mécanisme neurologique non explicité.", MS: "Mise en relation exacte des structures sensorielles périphériques et du circuit cérébral de la récompense.", TBM: "Maîtrise remarquable de l'homologie anatomique, du rôle de la dopamine et du fonctionnement neurobiologique global." },
      D5: { MI: "Absence de mention du respect et des droits humains.", MF: "Notion de respect citée superficiellement.", MS: "Intégration équilibrée de l'égalité filles-garçons, de la santé au sens de l'OMS et du consentement valide.", TBM: "Posture citoyenne exemplaire, réflexion mature déconstruisant les stéréotypes avec une rigueur scientifique irréprochable." }
    }
  },

  /* =========================================================================
     CLASSE DE 3ÈME
     ========================================================================= */

  "A3-SPEC": {
    id: "A3-SPEC",
    niveau: "3e",
    titre: "La spéciation en direct : le moustique du métro de Londres (Culex pipiens f. molestus)",
    duree: "2 heures (Séance paire S10)",
    contexte: "Lors des bombardements de la Seconde Guerre mondiale en 1940, des milliers de Londoniens dorment dans les tunnels profonds du métro pour s'abriter. Ils y découvrent des nuées de moustiques particulièrement agressifs qui piquent sans pitié les humains même au cœur de l'hiver. À la surface, les moustiques de la même espèce ne piquent que les oiseaux et hibernent en hiver. Que s'est-il passé en moins d'un siècle sous les rues de Londres ?",
    problematique: "Comment l'isolement d'une population dans un nouvel environnement conduit-il à l'apparition de nouveaux caractères et à la formation d'une nouvelle espèce par sélection naturelle ?",
    obstacle: {
      conception_fausse: "Les moustiques ont 'décidé de s'adapter' et ont 'appris' à piquer les humains pour pouvoir survivre sous terre (finalisme lamarckien).",
      rupture_didactique: "Les données génétiques prouvent que des variations aléatoires préexistaient : dans le métro sombre et chauffé sans oiseaux, les individus capables de piquer les mammifères et de se reproduire en espace confiné ont eu un avantage reproducteur massif, accumulant des différences jusqu'à l'infertilité avec la surface."
    },
    voie1_autonome: {
      titre: "Tâche Complexe — Dossier d'Investigation Évolutive pour la Société Entomologique",
      consigne: "En exploitant les documents 1 à 3, retracez l'histoire évolutive de la population de moustiques du métro londonien. Vous démontrerez pourquoi ils constituent un cas exemplaire de spéciation contemporaine rapide. Votre argumentation déconstruira l'idée fausse selon laquelle 'l'animal s'adapte volontairement' en détaillant : 1) l'isolement géographique, 2) les pressions de sélection du milieu souterrain, 3) la divergence génétique et 4) la mise en place d'une barrière reproductive définitive.",
      coups_de_pouce: {
        niveau_1_methode: "Dressez un tableau comparatif précis entre Culex pipiens de surface et Culex molestus du métro : hôte préféré (oiseau vs mammifère/humain), accouplement (espace libre vs confiné), arrêt hivernal (diapause vs activité continue), croisement expérimental.",
        niveau_2_indice: "Observez le Document 2 : lorsque des scientifiques ont tenté de croiser en laboratoire une femelle du métro avec un mâle de surface, les œufs pondus n'ont jamais éclos (taux de viabilité nul). Que cela prouve-t-il au sens de la définition biologique d'une espèce ?",
        niveau_3_notion: "Une espèce regroupe des individus capables de se reproduire entre eux et d'avoir une descendance fertile. L'infertilité des croisements prouve que la divergence génétique est devenue irréversible : l'isolement reproducteur est consommé, une nouvelle espèce est née."
      }
    },
    voie2_guidee: {
      titre: "Parcours Pas-à-Pas Guidé",
      etapes: [
        { id: "E1", consigne: "À partir du Document 1, lister trois différences écologiques et comportementales entre le moustique de surface et celui du métro.", competence: "D1.3", points: 2 },
        { id: "E2", consigne: "Expliquer pourquoi l'environnement particulier du métro (chaleur permanente des rames, absence d'oiseaux, présence de rats et d'humains) favorise certains moustiques plutôt que d'autres.", competence: "D4.1", points: 2.5 },
        { id: "E3", consigne: "À l’aide du Document 2, interpréter les résultats des tests de croisement en laboratoire et en déduire si ces deux populations appartiennent encore à la même espèce.", competence: "D4.1", points: 2.5 },
        { id: "E4", consigne: "Bilan : Rédiger un texte expliquant les étapes de la spéciation sans utiliser de formulation finaliste (interdiction d'écrire 'pour s'adapter').", competence: "D1.3", points: 3 }
      ]
    },
    documents: [
      { numero: "Doc 1", titre: "Comparaison biologique des deux populations de moustiques (Byrne & Nichols, 1999)", contenu: "Culex pipiens (surface de Londres) : Pique presque exclusivement les oiseaux (ornithophile) ; a besoin d'un vaste espace à ciel ouvert pour former un essaim de vol nuptial ; entre en diapause (hibernation) en hiver ; a besoin d'un repas de sang avant chaque ponte. Culex molestus (tunnels du métro) : Pique activement les mammifères (rats, souris et humains) ; s'accouple dans des espaces très confinés (tunnels de 3 m de large) sans vol nuptial ; actif toute l'année sans hibernation (température des tunnels ≈ 18-24 °C) ; peut pondre sa première portée sans repas sanguin préalable." },
      { numero: "Doc 2", titre: "Expériences de croisement génétique en laboratoire", contenu: "Expérience 1 : Mâle surface × Femelle surface → 100 % d'œufs viables donnant des larves fertiles. Expérience 2 : Mâle métro × Femelle métro → 100 % d'œufs viables fertiles. Expérience 3 (croisement croisé) : Mâle métro × Femelle surface (ou inversement) → ponte d'œufs stériles, taux d'éclosion = 0 %. La divergence génétique accumulée empêche désormais toute fécondation viable." },
      { numero: "Doc 3", titre: "Analyses de l'ADN microsatellite des moustiques", contenu: "Le séquençage génétique montre que les populations de Culex molestus des différentes lignes de métro de Londres sont plus proches génétiquement entre elles qu'avec les Culex pipiens qui vivent 20 mètres au-dessus d'eux dans les jardins londoniens. L'isolement physique dans le réseau souterrain construit en 1863 a suffi pour générer une nouvelle entité biologique en un siècle seulement." }
    ],
    grille_lsu: {
      D4_1: { MI: "Explication finaliste ('les moustiques ont voulu changer pour vivre sous terre').", MF: "Mécanisme décrit mais présence d'ambiguïtés de langage.", MS: "Explication rigoureuse de la sélection naturelle sans finalisme : variation préexistante + tri environnemental + reproduction différentielle.", TBM: "Démonstration exemplaire articulant pression de sélection, dérive, isolement génétique et critère d'interfécondité." },
      D1_3: { MI: "Absence de vocabulaire spécifique de l'évolution.", MF: "Vocabulaire présent mais définition d'espèce floue.", MS: "Utilisation précise des concepts : population, sélection naturelle, barrière reproductive, spéciation.", TBM: "Clarté argumentative parfaite, rigueur didactique digne d'une publication scientifique." }
    }
  },

  "A3-CERV": {
    id: "A3-CERV",
    niveau: "3e",
    titre: "Neurosciences des apprentissages : plasticité synaptique et consolidation par le sommeil",
    duree: "2 heures (Séance paire S15)",
    contexte: "Deux élèves de troisième préparent le même contrôle de sciences : Léa révise 4 sessions de 20 minutes réparties sur deux semaines avec de bonnes nuits de sommeil ; Thomas révise 3 heures d'affilée la veille du contrôle jusqu'à 2 heures du matin. Les recherches en neurosciences cognitives montrent que le lendemain, Thomas aura oublié plus de la moitié des informations tandis que Léa les retiendra des mois plus tard. Que fabrique notre cerveau pendant la nuit ?",
    problematique: "Comment les synapses se modifient-elles lors de l'apprentissage et quel est le rôle biologique du sommeil dans la consolidation des souvenirs ?",
    obstacle: {
      conception_fausse: "Le cerveau est comme un disque dur figé : pour retenir, il suffit de 'bachoter' longtemps sans dormir, le sommeil étant un temps passif où rien ne se passe.",
      rupture_didactique: "Les enregistrements cérébraux démontrent que pendant le sommeil, le cerveau rejoue les informations apprises à une vitesse décuplée pour consolider les synapses durables et éliminer le bruit de fond : dormir est un acte d'apprentissage actif."
    },
    voie1_autonome: {
      titre: "Tâche Complexe — Guide Méthodologique 'Mieux Apprendre grâce aux Neurosciences' pour les 6èmes",
      consigne: "En vous appuyant sur les données de neurosciences cognitives des Documents 1 à 3 (Inserm / Collège de France), rédigez une fiche-conseil illustrée destinée aux nouveaux élèves de 6e entrant au collège. Vous expliquerez scientifiquement : 1) comment deux neurones créent une nouvelle synapse lors d'un apprentissage (plasticité), 2) ce qui se passe dans les réseaux neuronaux pendant les phases de sommeil lent et paradoxal, et 3) trois règles d'or fondées sur la biologie pour réviser efficacement sans s'épuiser.",
      coups_de_pouce: {
        niveau_1_methode: "Commencez par schématiser ce qu'est une connexion synaptique entre deux neurones. Montrez qu'une notion nouvelle crée un sentier fragile, tandis que la répétition transforme ce sentier en autoroute neuronale (renforcement synaptique).",
        niveau_2_indice: "Observez le Document 2 : pendant le sommeil profond, l'hippocampe (mémoire temporaire) réémet les signaux vers le cortex cérébral (mémoire à long terme). Les élèves qui dorent moins de 7 heures par nuit perdent jusqu'à 40 % de mémorisation.",
        niveau_3_notion: "La plasticité cérébrale est la capacité des neurones à modifier l'efficacité de leurs connexions en réponse à l'expérience. Le sommeil consolide les apprentissages en stabilisant les récepteurs à neurotransmetteurs et en éliminant les détails superflus (élagage synaptique)."
      }
    },
    voie2_guidee: {
      titre: "Parcours Pas-à-Pas Guidé",
      etapes: [
        { id: "E1", consigne: "À partir du Document 1, définir la plasticité synaptique et décrire ce qui change physiquement au niveau d'une synapse lorsqu'on s'entraîne régulièrement.", competence: "D1.3", points: 2 },
        { id: "E2", consigne: "À l’aide du Document 2, comparer les performances de mémorisation d'un groupe ayant dormi 8 heures et d'un groupe privé de sommeil après un apprentissage.", competence: "D4.2", points: 2.5 },
        { id: "E3", consigne: "Expliquer le rôle des deux phases de sommeil (sommeil profond et sommeil paradoxal) dans le traitement des informations par le cerveau.", competence: "D4.1", points: 2.5 },
        { id: "E4", consigne: "Bilan : Formuler trois recommandations concrètes d'hygiène de vie pour réussir son année scolaire fondées sur ces données scientifiques.", competence: "D5", points: 3 }
      ]
    },
    documents: [
      { numero: "Doc 1", titre: "Plasticité synaptique et imagerie biphotonique (Inserm / Stanislas Dehaene)", contenu: "Lorsqu'un individu apprend une nouvelle compétence motrice ou intellectuelle, de petites excroissances appelées épines dendritiques apparaissent sur les neurones en quelques heures. Si l'apprentissage n'est pas réactivé, ces épines disparaissent en 48 heures. Si l'apprentissage est répété de façon espacée, la synapse se renforce : augmentation du nombre de récepteurs aux neurotransmetteurs et épaississement de la gaine de myéline autour des axones, multipliant par 100 la vitesse de transmission de l'influx nerveux." },
      { numero: "Doc 2", titre: "Expérience clinique : Sommeil et taux de rétention mnésique (Walker et al., Nature Neuroscience)", contenu: "Protocole : Deux groupes d'adolescents apprennent une liste de notions à 9h du matin. Groupe A : nuit complète de 8h30 de sommeil. Groupe B : nuit écourtée à 4h de sommeil avec écrans tardifs. Test de mémorisation le lendemain à 14h : Groupe A = 86 % de réponses exactes ; Groupe B = 51 % de réponses exactes (-35 points de pourcentage). Enregistrement EEG : pendant le sommeil à ondes lentes, les neurones de l'hippocampe 'rejouent' les motifs d'activation de la journée à une fréquence 7 fois plus rapide, transférant les souvenirs vers le néocortex pour un stockage stable." },
      { numero: "Doc 3", titre: "Lumière bleue des smartphones et blocage de la mélatonine", contenu: "La lumière bleue émise par les écrans LED (longueur d'onde 450-480 nm) stimule directement les cellules ganglionnaires à mélanopsine de la rétine. Celles-ci envoient un signal direct à l'horloge biologique interne (noyau suprachiasmatique), bloquant la sécrétion nocturne de mélatonine (l'hormone de l'endormissement). Résultat chez l'adolescent : retard d'endormissement moyen de 1h30, fragmentation du sommeil profond et perturbation directe de la consolidation synaptique." }
    ],
    grille_lsu: {
      D4_1: { MI: "Incompréhension du rôle biologique du cerveau dans la mémoire.", MF: "Conseils donnés sans justification par les mécanismes cérébraux.", MS: "Explication claire reliant plasticité synaptique, neurotransmetteurs et transfert hippocampe-cortex durant le sommeil.", TBM: "Analyse experte démontrant les mécanismes neurobiologiques de l'apprentissage avec grande rigueur conceptuelle." },
      D5: { MI: "Aucun lien établi avec les pratiques personnelles.", MF: "Conseils génériques sans données chiffrées.", MS: "Recommandations d'hygiène de vie pertinentes justifiées par les données du sommeil et de la lumière bleue.", TBM: "Posture réflexive remarquable, transfert immédiat vers les compétences psychosociales et la réussite scolaire." }
    }
  },

  "A3-ANTI": {
    id: "A3-ANTI",
    niveau: "3e",
    titre: "L'antibiogramme : mesurer l'efficacité des antibiotiques et comprendre l'antibiorésistance",
    duree: "2 heures (Séance paire S21)",
    contexte: "Un patient se présente aux urgences avec une infection rénale sévère (pyélonéphrite). Le médecin prescrit immédiatement une analyse cytobactériologique des urines avec réalisation d'un antibiogramme. Pourquoi ne peut-on pas donner n'importe quel antibiotique au hasard, et comment les biologistes déterminent-ils en quelques heures le médicament exact qui sauvera le patient ?",
    problematique: "Comment mesurer expérimentalement la sensibilité d'une souche bactérienne aux antibiotiques et expliquer l'émergence de souches multirésistantes par sélection naturelle ?",
    obstacle: {
      conception_fausse: "C'est le corps humain du patient qui 's'habitue' à l'antibiotique et devient résistant.",
      rupture_didactique: "Ce n'est pas le patient qui devient résistant mais la bactérie elle-même : l'antibiogramme teste directement les bactéries isolées sur gélose, en dehors de tout organisme humain."
    },
    voie1_autonome: {
      titre: "Tâche Complexe — Mission Biologiste Médical au Laboratoire Hospitalier",
      consigne: "En exploitant l'antibiogramme haute définition (Document 1) et le tableau de référence de la Société Française de Microbiologie (Document 2), mesurez le diamètre de la zone d'inhibition pour chacun des 5 antibiotiques testés. Déterminez pour chacun si la souche bactérienne du patient est Sensible (S), Intermédiaire (I) ou Résistante (R). Rédigez le compte-rendu médical justifiant le choix de l'antibiotique à administrer en priorité, et terminez par un avertissement de santé publique expliquant le mécanisme de sélection naturelle responsable de l'apparition des superbactéries.",
      coups_de_pouce: {
        niveau_1_methode: "Utilisez la règle graduée pour mesurer le diamètre total du cercle translucide (zone où aucune bactérie ne pousse) entourant chaque pastille d'antibiotique. Comparez ce diamètre aux seuils du tableau (Doc 2).",
        niveau_2_indice: "Si le diamètre mesuré est supérieur au diamètre critique supérieur (D > d_sup), la bactérie est Sensible (S) : l'antibiotique est très efficace. Si le diamètre est nul ou inférieur au seuil inférieur, la bactérie pousse jusqu'au contact de la pastille : elle est Résistante (R).",
        niveau_3_notion: "Dans une population de millions de bactéries, une mutation aléatoire peut modifier la cible de l'antibiotique. Si on utilise des antibiotiques à tort ou trop souvent, toutes les bactéries sensibles meurent : seules les bactéries mutantes résistantes survivent et prolifèrent sans concurrence (sélection naturelle)."
      }
    },
    voie2_guidee: {
      titre: "Parcours Pas-à-Pas Guidé",
      etapes: [
        { id: "E1", consigne: "À partir du Document 1, mesurer à la règle le diamètre de la zone d'inhibition (en millimètres) pour les pastilles d'amoxicilline (AMX), ciprofloxacine (CIP) et gentamicine (GEN).", competence: "D4.2", points: 2 },
        { id: "E2", consigne: "En vous référant au Document 2, qualifier l'effet de chacun de ces trois antibiotiques sur la souche bactérienne (Sensible, Intermédiaire ou Résistante).", competence: "D4.1", points: 2.5 },
        { id: "E3", consigne: "Indiquer quel antibiotique le médecin doit prescrire en priorité et justifier pourquoi l'amoxicilline serait totalement inefficace chez ce patient.", competence: "D1.3", points: 2.5 },
        { id: "E4", consigne: "Bilan : Expliquer comment la surconsommation d'antibiotiques chez l'homme et dans les élevages conduit à la prolifération de souches résistantes par sélection naturelle.", competence: "D5", points: 3 }
      ]
    },
    documents: [
      { numero: "Doc 1", titre: "Photographie d'un antibiogramme sur boîte de Pétri (Escherichia coli)", contenu: "Pastille 1 (AMX - Amoxicilline) : diamètre du halo d'inhibition = 0 mm (les colonies bactériennes touchent la pastille). Pastille 2 (CIP - Ciprofloxacine) : diamètre du halo = 32 mm (large zone circulaire translucide sans aucune bactérie). Pastille 3 (GEN - Gentamicine) : diamètre du halo = 24 mm. Pastille 4 (CTX - Céfotaxime) : diamètre du halo = 14 mm. Pastille 5 (ERY - Érythromycine) : diamètre du halo = 0 mm." },
      { numero: "Doc 2", titre: "Table standardisée d'interprétation clinique (Société Française de Microbiologie)", contenu: "Amoxicilline (AMX) : Résistant si D < 14 mm ; Sensible si D ≥ 19 mm. Ciprofloxacine (CIP) : Résistant si D < 19 mm ; Sensible si D ≥ 25 mm. Gentamicine (GEN) : Résistant si D < 15 mm ; Sensible si D ≥ 18 mm. Céfotaxime (CTX) : Résistant si D < 17 mm ; Sensible si D ≥ 21 mm." },
      { numero: "Doc 3", titre: "Données de surveillance de l'antibiorésistance (Santé publique France / OMS)", contenu: "En France, près de 12 500 décès par an sont directement attribuables à des infections par des bactéries résistantes aux antibiotiques. L'usage vétérinaire préventif dans les élevages intensifs et l'interruption prématurée des traitements par les patients sélectionnent les bactéries porteuses de gènes de résistance (ex. bêta-lactamases), qui se disséminent ensuite dans les eaux usées et l'environnement global (concept One Health)." }
    ],
    grille_lsu: {
      D4_2: { MI: "Mesures fausses ou sans unités.", MF: "Mesures approximatives, erreurs de lecture dans la table.", MS: "Mesures millimétriques exactes et catégorisation rigoureuse (AMX = R, CIP = S, GEN = S, CTX = R).", TBM: "Précision technique exemplaire, exploitation parfaite de l'outil de diagnostic médical." },
      D4_1: { MI: "Confusion : pense que c'est le patient qui est résistant.", MF: "Explication incomplète de la sélection.", MS: "Démonstration claire du mécanisme évolutif : sélection des bactéries mutantes en présence d'antibiotiques.", TBM: "Maîtrise remarquable articulant génétique bactérienne, sélection naturelle et santé publique mondiale." }
    }
  },

  "A5-HAB": {
  "id": "A5-HAB",
  "niveau": "5e",
  "titre": "Mission Jezero : Mars a-t-elle été habitable et pourquoi l'eau liquide s'y est-elle évaporée ?",
  "duree": "2 heures (Séance paire S4)",
  "contexte": "Le rover Perseverance explore depuis 2021 le cratère Jezero sur Mars, où un fleuve se jetait jadis dans un lac géant. Pourtant, aujourd'hui, si vous versez un verre d'eau sur le sol martien, elle se met instantanément à bouillir puis gèle ! Comment expliquer que la Terre conserve ses océans d'eau liquide alors que Mars est devenue un désert glacé ?",
  "problematique": "Quelles conditions astrophysiques et atmosphériques rendent l'eau liquide stable à la surface d'une planète tellurique ?",
  "obstacle": {
    "conception_fausse": "Mars n'a pas d'eau liquide simplement parce qu'elle est un peu plus loin du Soleil que la Terre.",
    "rupture_didactique": "L'expérience montre que l'état liquide dépend autant de la pression atmosphérique que de la température : Mars a perdu son atmosphère épaisse en raison de sa faible masse et de l'absence de champ magnétique protecteur."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Rapport d'Expertise pour l'Agence Spatiale Européenne (ESA)",
    "consigne": "En exploitant les données planétaires comparées (Doc 1), les observations de Perseverance (Doc 2) et l'expérience de la seringue à vide (Doc 3), rédigez un rapport scientifique expliquant pourquoi l'eau liquide était présente sur Mars il y a 3,8 milliards d'années et pourquoi elle ne peut plus exister à sa surface aujourd'hui. Vous comparerez rigoureusement la Terre et Mars (pression, masse, effet de serre).",
    "coups_de_pouce": {
      "niveau_1_methode": "Dressez un tableau comparant pour la Terre et Mars : la masse, la pression atmosphérique au sol, la composition de l'air et la température moyenne.",
      "niveau_2_indice": "Rappelez l'expérience de la seringue : lorsque la pression chute (en tirant le piston), l'eau tiède se met à bouillir même à 20 °C. Sur Mars, la pression est 170 fois plus faible que sur Terre (6 hPa contre 1013 hPa) : l'eau liquide ne peut pas exister, elle s'évapore instantanément (sublimation/ébullition).",
      "niveau_3_notion": "Mars est plus petite que la Terre (masse = 0,11 Terre). Sa gravité insuffisante n'a pas pu retenir ses gaz légers, et son noyau s'est refroidi rapidement, éteignant son bouclier magnétique : le vent solaire a balayé son atmosphère primitive."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, comparer la pression atmosphérique et la température moyenne entre la Terre et Mars.",
        "competence": "D4.2",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, identifier les deux indices rocheux prouvant qu'un fleuve coulait jadis dans le cratère Jezero.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer ce que démontre l'expérience de la seringue (Document 3) sur le lien entre pression et ébullition de l'eau.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Expliquer pourquoi la Terre est la seule planète du système solaire interne à posséder des océans liquides permanents.",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Données planétaires Terre vs Mars (NASA Planetary Fact Sheet)",
      "contenu": "Terre : Distance au Soleil = 150 M km ; Masse = 1,0 Terre ; Pression au sol = 1013 hPa ; Température moyenne = +15 °C ; Effet de serre naturel = +33 °C (sans GES : -18 °C). Mars : Distance = 228 M km ; Masse = 0,11 Terre ; Pression au sol = 6 hPa (0,006 bar) ; Température moyenne = -63 °C ; Atmosphère très ténue (95 % CO2 mais quantité totale infime)."
    },
    {
      "numero": "Doc 2",
      "titre": "Découvertes géologiques du rover Perseverance au delta de Jezero (2021-2025)",
      "contenu": "Présence de strates sédimentaires obliques typiques d'un delta fluvial, contenant des argiles et des carbonates qui ne se forment qu'en présence prolongée d'eau liquide neutre, ainsi que des galets polis par le courant d'une rivière ancienne active il y a 3,8 milliards d'années."
    },
    {
      "numero": "Doc 3",
      "titre": "Expérience : ébullition de l'eau tiède sous basse pression",
      "contenu": "Protocole : On aspire 10 mL d'eau tiède à 35 °C dans une seringue sans air, puis on bouche hermétiquement l'embout. En tirant vigoureusement sur le piston, le volume augmente et la pression interne chute brutalement sous 50 hPa. Résultat : l'eau entre en ébullition vigoureuse à 35 °C sans apport de chaleur."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Confond température et pression.",
      "MF": "Explique l'absence d'eau par le seul froid.",
      "MS": "Relie pression faible et absence d'eau liquide sur Mars.",
      "TBM": "Démontre le rôle conjoint de la masse planétaire, de la pression et de l'effet de serre."
    },
    "D1_3": {
      "MI": "Réponse décousue.",
      "MF": "Arguments scientifiques incomplets.",
      "MS": "Rapport clair et structuré avec vocabulaire adapté.",
      "TBM": "Argumentation scientifique rigoureuse, style fluide et rigoureux."
    }
  }
},

  "A5-EAU": {
  "id": "A5-EAU",
  "niveau": "5e",
  "titre": "Modéliser le cycle de l'eau : calcul des temps de résidence et vulnérabilité des réservoirs",
  "duree": "1 heure (Séance impaire S7)",
  "contexte": "L'eau qui sort de votre robinet est peut-être tombée du ciel la semaine dernière, ou a peut-être séjourné 3 000 ans dans les abysses de l'océan Pacifique. Si un polluant est déversé dans un fleuve ou s'infiltre dans une nappe souterraine profonde, en combien de temps cette eau sera-t-elle naturellement renouvelée ?",
  "problematique": "Comment calculer le temps de résidence de l'eau dans les différents réservoirs terrestres et pourquoi certaines pollutions sont-elles quasi irréversibles à l'échelle humaine ?",
  "obstacle": {
    "conception_fausse": "L'eau circule partout à la même vitesse : une rivière, un nuage ou une nappe souterraine se nettoient aussi vite.",
    "rupture_didactique": "Le rapport volume/flux montre des écarts vertigineux : quelques jours dans l'atmosphère contre des millénaires dans les glaces et les nappes profondes."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Gestionnaire de Bassin Versant à l'Agence de l'Eau",
    "consigne": "À l'aide du tableau des réservoirs et flux hydrologiques mondiaux (Doc 1) et de l'étude de cas des nappes phréatiques (Doc 2), calculez au tableur le temps de résidence de l'eau dans l'atmosphère, les rivières, les nappes souterraines et les calottes glaciaires. Rédigez ensuite une note d'alerte environnementale expliquant pourquoi la contamination d'un aquifère souterrain par des pesticides ou des nitrates pose un problème infiniment plus grave que la pollution passagère d'un cours d'eau.",
    "coups_de_pouce": {
      "niveau_1_methode": "Formule : Temps de résidence = Volume du réservoir (en km³) / Flux sortant annuel (en km³/an). Convertissez si besoin les années en jours pour les réservoirs à renouvellement rapide.",
      "niveau_2_indice": "Atmosphère : Volume = 13 000 km³. Précipitations annuelles (flux sortant) = 577 000 km³/an. Divisez 13 000 par 577 000, vous trouvez 0,0225 an, soit environ 8 à 9 jours. Rivières : 2 000 km³ / 40 000 km³/an = 0,05 an (environ 18 jours).",
      "niveau_3_notion": "Nappes profondes : 10 500 000 km³ avec un flux d'écoulement sortant très faible (environ 2 500 km³/an), soit plus de 4 000 ans de temps de séjour ! Un pesticide infiltré aujourd'hui y restera pendant des dizaines de générations humaines."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, identifier le réservoir contenant le plus grand volume d'eau douce sur Terre.",
        "competence": "D4.2",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "Calculer le temps de résidence de l'eau dans l'atmosphère et convertir le résultat en jours (multiplier par 365).",
        "competence": "D4.2",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Calculer le temps de résidence moyen de l'eau dans les nappes souterraines profondes.",
        "competence": "D4.2",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Expliquer pourquoi la dépollution d'une nappe souterraine prend des siècles alors qu'une rivière se régénère en quelques semaines.",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Réservoirs et flux d'eau mondiaux (Shiklomanov / UNESCO)",
      "contenu": "Océans : 1 338 000 000 km³ (flux évaporation = 502 000 km³/an). Glaces polaires : 24 000 000 km³ (flux fonte = 2 500 km³/an). Nappes souterraines : 10 500 000 km³ (flux vidange = 2 500 km³/an). Lacs : 91 000 km³. Atmosphère : 13 000 km³ (précipitations = 577 000 km³/an). Cours d'eau : 2 120 km³ (débit total vers les mers = 42 700 km³/an)."
    },
    {
      "numero": "Doc 2",
      "titre": "Pollution rémanente des aquifères en France (BRGM)",
      "contenu": "Dans le bassin parisien et en Beauce, l'atrazine (herbicide interdit depuis 2003) est encore détectée à des concentrations significatives dans les forages d'eau potable à plus de 80 m de profondeur. La vitesse d'écoulement de l'eau dans la craie ne dépasse pas quelques mètres par an."
    }
  ],
  "grille_lsu": {
    "D4_2": {
      "MI": "Erreur de formule ou d'unités.",
      "MF": "Calculs posés mais conversions non faites.",
      "MS": "Temps de résidence calculés avec précision (atmosphère ≈ 9 j, nappes > 4 000 ans).",
      "TBM": "Calculs parfaits au tableur avec analyse critique des ordres de grandeur temporels."
    },
    "D1_3": {
      "MI": "Pas d'explication environnementale.",
      "MF": "Explication superficielle.",
      "MS": "Argumentation claire liant vitesse de renouvellement et gestion citoyenne de l'eau.",
      "TBM": "Raisonnement écologique exemplaire fondé sur la durabilité des ressources."
    }
  }
},

  "A5-COUR": {
  "id": "A5-COUR",
  "niveau": "5e",
  "titre": "Les courants océaniques : de la dérive des canards en plastique à la circulation thermohaline",
  "duree": "1 heure (Séance impaire S15)",
  "contexte": "En janvier 1992, un cargo perd en plein océan Pacifique un conteneur contenant 29 000 petits jouets de bain jaunes (canards, castors, tortues). Au cours des 25 années suivantes, ces canards se sont échoués en Alaska, à Hawaï, en Australie, et ont même traversé la banquise arctique pour atteindre l'Écosse ! Comment l'eau des océans voyage-t-elle à travers toute la planète ?",
  "problematique": "Comment les différences de température et de salinité, combinées aux vents, créent-elles un tapis roulant océanique global ?",
  "obstacle": {
    "conception_fausse": "L'océan est une immense cuvette immobile agitée seulement par les vagues de surface.",
    "rupture_didactique": "L'océan est parcouru par des fleuves géants de surface et de fond, mus par la flottabilité des masses d'eau (température et salinité)."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Enquête Océanographique Internationale",
    "consigne": "En exploitant la carte de dérive des canards en plastique (Doc 1) et les résultats de l'expérience de modélisation en laboratoire (Doc 2), expliquez le fonctionnement des deux types de courants océaniques : les courants de surface et les courants profonds (circulation thermohaline). Vous dessinerez un schéma de synthèse montrant pourquoi l'eau froide et salée plonge aux pôles pour former les eaux profondes mondiales.",
    "coups_de_pouce": {
      "niveau_1_methode": "Distinguez ce qui met en mouvement l'eau en surface (les vents réguliers et la rotation de la Terre) de ce qui provoque les mouvements verticaux et de fond (la densité de l'eau).",
      "niveau_2_indice": "Observez dans l'expérience que l'eau très froide et salée (colorée en bleu) est plus dense : elle coule immédiatement sous l'eau tiède et s'étale sur le fond de la cuve.",
      "niveau_3_notion": "Dans l'Atlantique Nord, le Gulf Stream apporte de l'eau chaude vers le pôle. En refroidissant et en gelant pour former la banquise, le sel est expulsé dans l'eau liquide restante qui devient ultra-salée, froide et très lourde : elle plonge (plongée des eaux) et alimente le grand tapis roulant planétaire."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, tracer sur le planisphère le trajet suivi par les jouets en plastique depuis le Pacifique Nord jusqu'à l'Atlantique.",
        "competence": "D4.3",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, décrire ce qui se passe quand on verse de l'eau froide et très salée dans un récipient d'eau tiède.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer pourquoi l'eau de mer devient plus dense et plonge au fond de l'océan près du Groenland.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Rédiger un texte expliquant comment les courants régulent le climat de l'Europe occidentale.",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "La grande dérive des jouets en plastique (Ebbesmeyer et al.)",
      "contenu": "Trajectoires : naufrage au milieu du Pacifique Nord (44°N, 178°E) ; rotation dans le gyre subtropical du Pacifique ; passage par le détroit de Béring vers l'océan Arctique pris dans la banquise ; sortie par le détroit de Fram vers l'Islande et l'Atlantique Nord. Vitesse moyenne estimée : 10 à 15 km par jour."
    },
    {
      "numero": "Doc 2",
      "titre": "Expérience de laboratoire : densité de l'eau de mer",
      "contenu": "Une cuve transparente contient de l'eau du robinet à 20 °C (densité = 1,000 g/cm³). On injecte délicatement à une extrémité de l'eau glacée à 2 °C salée à 38 g/L colorée en bleu (densité = 1,030 g/cm³). Résultat : la masse bleue plonge immédiatement au fond, formant un courant de fond continu sans se mélanger à l'eau de surface."
    }
  ],
  "grille_lsu": {
    "D4_3": {
      "MI": "Carte mal exploitée.",
      "MF": "Repérage incomplet des trajectoires.",
      "MS": "Trajectoires des gyres et passage arctique correctement identifiés.",
      "TBM": "Lecture cartographique experte reliant vents et courants."
    },
    "D4_1": {
      "MI": "Confusion sur la densité.",
      "MF": "Description sans lien de cause à effet.",
      "MS": "Explication claire : froid + sel = augmentation de masse volumique et plongée.",
      "TBM": "Maîtrise complète de la circulation thermohaline globale."
    }
  }
},

  "A5-RESP": {
  "id": "A5-RESP",
  "niveau": "5e",
  "titre": "La respiration cellulaire : mesure ExAO de la consommation d'O2 chez les levures",
  "duree": "2 heures (Séance paire S24)",
  "contexte": "Une boulangère mélange de la farine, de l'eau, du sucre et des levures vivantes (Saccharomyces cerevisiae) pour faire lever sa pâte à pain. En laboratoire, on enferme ces levures dans une enceinte étanche munie de sondes à dioxygène et à dioxyde de carbone. Que font réellement ces cellules vivantes lorsqu'on leur fournit du sucre ?",
  "problematique": "Comment prouver expérimentalement que les cellules consomment des nutriments et du dioxygène pour produire leur propre énergie ?",
  "obstacle": {
    "conception_fausse": "La respiration est un mouvement des poumons ou des branchies ; les micro-organismes ne 'respirent' pas.",
    "rupture_didactique": "La respiration est un processus biochimique universel qui se déroule au niveau de chaque cellule vivante pour oxyder les nutriments."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Mission Biochimiste en Laboratoire de Recherche",
    "consigne": "En exploitant le graphique de mesures ExAO obtenu en classe (Doc 1) et le schéma du métabolisme cellulaire (Doc 2), démontrez que la levure respire à l'échelle cellulaire. Vous décrirez avec rigueur l'évolution des concentrations en O2 et CO2 avant et après l'injection de glucose, puis vous calculerez la vitesse de consommation d'O2 en mg/L/min.",
    "coups_de_pouce": {
      "niveau_1_methode": "Repérez les deux temps de l'expérience : avant l'injection de glucose (de 0 à 3 min) et après l'injection (de 3 à 8 min). Décrivez le sens de variation de chaque courbe (stable, hausse, baisse).",
      "niveau_2_indice": "Avant injection, la courbe d'O2 baisse très lentement (la levure consomme ses réserves internes). Dès l'injection de 0,5 mL de glucose à t = 3 min, la concentration en O2 chute brutalement en ligne droite tandis que celle de CO2 augmente très vite.",
      "niveau_3_notion": "Pour calculer la vitesse de consommation : V = (O2 initial - O2 final) / (t final - t initial). Exemple : (8,2 - 2,2) / (8 - 3) = 6 mg/L en 5 min = 1,2 mg/L/min. Cette réaction biochimique (Glucose + O2 -> CO2 + H2O + Énergie) fournit l'énergie nécessaire à la vie cellulaire."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, relever la valeur du taux de dioxygène à t = 0 min et à t = 3 min (avant l'ajout de glucose).",
        "competence": "D4.2",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "Décrire ce qui se passe pour les courbes d'O2 et de CO2 immédiatement après l'injection de glucose à t = 3 min.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Calculer la quantité d'O2 consommée par les levures entre 3 et 8 minutes.",
        "competence": "D4.2",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Écrire le bilan de la respiration cellulaire et expliquer à quoi sert cette réaction pour la cellule.",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Enregistrement ExAO de la respiration des levures (données de classe)",
      "contenu": "Temps 0 à 3 min (levures dans eau distillée) : O2 passe de 8,5 mg/L à 8,2 mg/L ; CO2 stable à 0,4 mg/L. À t = 3 min : injection de 0,5 mL de solution de glucose à 10 %. Temps 3 à 8 min : O2 chute de 8,2 mg/L à 2,2 mg/L ; CO2 grimpe de 0,4 mg/L à 7,8 mg/L."
    },
    {
      "numero": "Doc 2",
      "titre": "Équation bilan de la respiration cellulaire",
      "contenu": "Nutriment organique (Glucose : C6H12O6) + Dioxygène (6 O2) ---> Dioxyde de carbone (6 CO2) + Eau (6 H2O) + ÉNERGIE cellulaire indispensable aux synthèses et à la division."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Ne relie pas les gaz au métabolisme.",
      "MF": "Description sans explication biologique.",
      "MS": "Démonstration claire de la consommation d'O2 et du rejet de CO2 stimulés par le sucre.",
      "TBM": "Analyse expérimentale irréprochable avec compréhension du rôle énergétique."
    },
    "D4_2": {
      "MI": "Lecture de graphe erronée.",
      "MF": "Valeurs relevées sans unités.",
      "MS": "Calcul de variation exact avec unités (mg/L).",
      "TBM": "Calcul de vitesse de réaction (pente de la courbe) parfaitement maîtrisé."
    }
  }
},

  "A5-EFF": {
  "id": "A5-EFF",
  "niveau": "5e",
  "titre": "L'effort physique : adaptation cardiorespiratoire et approvisionnement des muscles",
  "duree": "2 heures (Séance paire S28)",
  "contexte": "Lors d'un test de demi-Cooper en cours d'EPS, vous courez pendant 6 minutes à intensité soutenue. Dès les premières foulées, votre respiration s'accélère, votre cœur bat la chamade et vos muscles chauffent. Pourquoi l'organisme réagit-il instantanément et de façon coordonnée lors d'un exercice ?",
  "problematique": "Comment le cœur et les poumons adaptent-ils leurs rythmes pour satisfaire les besoins décuplés des muscles en activité ?",
  "obstacle": {
    "conception_fausse": "Le cœur accélère juste parce qu'on est fatigué ou stressé.",
    "rupture_didactique": "L'accélération cardiaque et respiratoire est une réponse physiologique régulée pour augmenter le débit de dioxygène et de nutriments vers les fibres musculaires contractiles."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Rapport de Physiologie du Sport pour l'INSEP",
    "consigne": "En exploitant les mesures de fréquence cardiaque, de fréquence respiratoire et de débit sanguin musculaire au repos et à l'effort (Docs 1 et 2), calculez l'augmentation relative des besoins du muscle et du travail cardiaque. Rédigez un compte-rendu expliquant la chaîne physiologique complète qui permet au muscle de produire l'énergie nécessaire à la course sans s'asphyxier.",
    "coups_de_pouce": {
      "niveau_1_methode": "Comparez dans un tableau pour le repos et l'effort maximal : la fréquence cardiaque (FC en battements/min), le volume d'éjection systolique (VES), et le débit cardiaque (Débit = FC × VES en L/min).",
      "niveau_2_indice": "Au repos : Débit cardiaque = 70 battements/min × 0,07 L = 4,9 L/min. À l'effort : Débit cardiaque = 175 battements/min × 0,12 L = 21 L/min (multiplié par plus de 4 !). Regardez comment ce sang est redistribué : les muscles reçoivent 17 L/min contre 1 L/min au repos !",
      "niveau_3_notion": "Le muscle consomme du glucose et de l'O2 pour fabriquer de l'énergie mécanique (mouvement) et de la chaleur (transpiration). Le système nerveux et les hormones adaptent instantanément le rythme cardiorespiratoire et dilatent les artérioles musculaires."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, relever la fréquence cardiaque et la fréquence respiratoire d'un collégien au repos et à la fin de l'effort.",
        "competence": "D4.2",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "Calculer le débit cardiaque au repos et à l'effort en utilisant la formule donnée : Débit = FC × VES.",
        "competence": "D4.2",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "À l'aide du Document 2, comparer la quantité de sang reçue par les muscles au repos et lors d'un effort intense.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Expliquer comment le corps coordonne le cœur et les poumons pour répondre aux besoins accrus des muscles.",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Paramètres physiologiques mesurés en classe",
      "contenu": "Repos : Fréquence cardiaque = 72 bpm ; Fréquence respiratoire = 15 cycles/min ; Consommation de dioxygène = 0,25 L/min. Effort intense (course 6 min) : Fréquence cardiaque = 178 bpm ; Fréquence respiratoire = 42 cycles/min ; Consommation d'O2 = 2,8 L/min (multipliée par 11)."
    },
    {
      "numero": "Doc 2",
      "titre": "Débits sanguins régionaux (en mL de sang par minute)",
      "contenu": "Cerveau : 750 mL/min au repos / 750 mL/min à l'effort (constant). Reins et tube digestif : 2 500 mL/min au repos / 600 mL/min à l'effort (vasoconstriction). Muscles squelettiques : 1 000 mL/min au repos / 17 500 mL/min à l'effort (vasodilatation massive, x17,5 !)."
    }
  ],
  "grille_lsu": {
    "D4_2": {
      "MI": "Calculs absents ou incohérents.",
      "MF": "Calcul de débit posé mais erreur d'unités.",
      "MS": "Calculs de débits sanguins exacts (repos ≈ 5 L/min, effort ≈ 20 L/min).",
      "TBM": "Calculs parfaits avec comparaison en pourcentages et facteurs multiplicateurs."
    },
    "D4_1": {
      "MI": "Ne relie pas l'effort aux organes.",
      "MF": "Description sans vision systémique.",
      "MS": "Explication claire de la redistribution du débit sanguin au profit des muscles.",
      "TBM": "Compréhension magistrale de l'intégration physiologique de l'organisme à l'effort."
    }
  }
},

  "A4-CLIM": {
  "id": "A4-CLIM",
  "niveau": "4e",
  "titre": "Climatologie : corrélation entre hausse des gaz à effet de serre et réchauffement global récent",
  "duree": "2 heures (Séance paire S6)",
  "contexte": "L'année 2024 a été la plus chaude jamais enregistrée sur Terre depuis le début des relevés instrumentaux, dépassant le seuil critique de +1,5 °C d'anomalie globale par rapport à l'ère préindustrielle. Dans les médias, certains prétendent encore qu'il ne s'agit que d'un cycle naturel du Soleil ou des volcans. Comment la science démontre-t-elle la responsabilité humaine directe ?",
  "problematique": "Comment l'analyse des séries temporelles climatiques permet-elle d'établir un lien de cause à effet indiscutable entre émissions anthropiques de GES et réchauffement planétaire ?",
  "obstacle": {
    "conception_fausse": "Le climat a toujours varié naturellement, le réchauffement actuel est juste un cycle solaire normal.",
    "rupture_didactique": "Les données instrumentales et satellitaires montrent que l'activité solaire diminue légèrement depuis 1960 alors que les températures s'envolent au rythme exact des concentrations de CO2 et de méthane."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Réfutation Scientifique pour le GIEC Jeunesse",
    "consigne": "En analysant les courbes de température globale Copernicus ERA5 (Doc 1), les mesures de gaz à effet de serre à Mauna Loa (Doc 2) et l'irradiance solaire (Doc 3), rédigez un argumentaire scientifique démontrant pourquoi le forçage radiatif anthropique est la seule cause possible du réchauffement récent. Vous calculerez le taux de réchauffement par décennie depuis 1980.",
    "coups_de_pouce": {
      "niveau_1_methode": "Comparez l'allure des trois courbes sur la période 1960-2025 : CO2, température globale et activité solaire (irradiance).",
      "niveau_2_indice": "Remarquez que l'irradiance solaire suit un cycle de 11 ans stable sans tendance à la hausse (légère baisse moyenne de -0,1 W/m²). Pendant ce temps, le CO2 est passé de 315 ppm à 426 ppm et la température moyenne s'est élevée de +1,1 °C.",
      "niveau_3_notion": "La physique atmosphérique prouve que le CO2 et le CH4 absorbent le rayonnement infrarouge thermique réémis par la Terre. Plus leur concentration augmente, plus l'énergie emprisonnée dans la basse atmosphère s'accumule (déséquilibre radiatif)."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, relever l'anomalie de température moyenne globale en 1900, 1980 et 2024.",
        "competence": "D4.2",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "Calculer l'augmentation de la température entre 1980 et 2024 et déterminer la vitesse de réchauffement par décennie.",
        "competence": "D4.2",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "À l'aide du Document 3, expliquer pourquoi l'activité du Soleil ne peut pas expliquer le réchauffement observé depuis 1960.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Conclure sur la part de responsabilité des activités humaines dans le dérèglement climatique actuel.",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Anomalie thermique globale de surface (Copernicus ERA5 / NASA GISTEMP)",
      "contenu": "1880-1920 : anomalie moyenne de -0,2 °C. 1940-1970 : plateau à ≈ 0,0 °C. 1980 : +0,26 °C. 2000 : +0,61 °C. 2020 : +1,28 °C. 2024 : +1,55 °C par rapport à la moyenne 1850-1900."
    },
    {
      "numero": "Doc 2",
      "titre": "Concentration atmosphérique des GES (NOAA / GIEC)",
      "contenu": "CO2 : 280 ppm (1750), 315 ppm (1958), 426 ppm (2025). Méthane (CH4) : 720 ppb (1750), 1 930 ppb (2025, +168 %). Taux de croissance actuel sans précédent dans les archives glaciaires de 800 000 ans."
    },
    {
      "numero": "Doc 3",
      "titre": "Irradiance solaire totale (TSI) mesurée par satellite (NASA SORCE)",
      "contenu": "Cycles de 11 ans stables oscillant entre 1360,5 et 1361,5 W/m². Tendance globale depuis 1960 : légère diminution moyenne de 0,05 %, démontrant que le Soleil n'est pas responsable du réchauffement."
    }
  ],
  "grille_lsu": {
    "D4_2": {
      "MI": "Calcul d'anomalie inexact.",
      "MF": "Relevé partiel sans calcul de vitesse.",
      "MS": "Calcul précis du réchauffement récent (≈ +0,25 °C à +0,30 °C par décennie).",
      "TBM": "Exploitation quantitative rigoureuse réfutant l'hypothèse solaire."
    },
    "D1_3": {
      "MI": "Confusion entre météo et climat.",
      "MF": "Texte imprécis.",
      "MS": "Démonstration solide du rôle prépondérant des gaz à effet de serre d'origine humaine.",
      "TBM": "Argumentation scientifique magistrale distinguant faits prouvés et fausses croyances."
    }
  }
},

  "A4-VEG": {
  "id": "A4-VEG",
  "niveau": "4e",
  "titre": "Nutrition des végétaux : stomates, poils absorbants et circulation des sèves",
  "duree": "2 heures (Séance paire S16)",
  "contexte": "Un chêne centenaire pèse plusieurs dizaines de tonnes et produit chaque année des milliers de feuilles et de glands à partir de simples matières minérales puisées dans le sol et dans l'atmosphère. Comment l'eau monte-t-elle à 30 mètres de hauteur sans pompe mécanique, et comment le carbone de l'air est-il incorporé dans les tissus de l'arbre ?",
  "problematique": "Comment les structures spécialisées de la plante (racines, vaisseaux, feuilles) assurent-elles la capture des ressources minérales et la distribution de la matière organique ?",
  "obstacle": {
    "conception_fausse": "Les plantes se nourrissent de terre par leurs racines comme les animaux mangent des aliments.",
    "rupture_didactique": "La terre n'apporte que de l'eau et des ions minéraux : toute la matière organique est fabriquée dans les feuilles par photosynthèse à partir du CO2 de l'air."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Carnet de Laboratoire de Botanique Expérimentale",
    "consigne": "En exploitant vos observations microscopiques (Doc 1) et l'expérience de la tige de céleri colorée (Doc 2), réalisez un schéma fonctionnel à grande échelle d'une plante à fleurs. Vous y ferez figurer : les lieux d'entrée de l'eau et du CO2, le trajet de la sève brute montante (xylème), le lieu de fabrication des glucides par photosynthèse, et le trajet de la sève élaborée descendante (phloème).",
    "coups_de_pouce": {
      "niveau_1_methode": "Structurez votre réponse en reliant chaque organe (racine, tige, feuille) à sa structure cellulaire spécifique et à sa fonction nutritive.",
      "niveau_2_indice": "Les racines absorbent l'eau et les sels minéraux grâce à des millions de poils absorbants à paroi ultra-fine. La feuille capte le CO2 grâce aux stomates situés sur sa face inférieure. Les faisceaux conducteurs de la tige contiennent deux tuyaux différents : le xylème (sève brute montante) et le phloème (sève élaborée).",
      "niveau_3_notion": "La photosynthèse a lieu dans les chloroplastes des cellules chlorophylliennes : 6 CO2 + 6 H2O + Lumière -> C6H12O6 + 6 O2. La sève élaborée distribue ces sucres à toute la plante (bourgeons, racines, fruits)."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, décrire la structure et le rôle des poils absorbants au niveau des jeunes racines.",
        "competence": "D4.1",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "Identifier le rôle des stomates observés sous la feuille et indiquer le gaz qui y pénètre pour la photosynthèse.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "À l'aide du Document 2, nommer les vaisseaux qui transportent l'eau colorée dans la tige de céleri (xylème).",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Compléter le texte à trous résumant la circulation des deux sèves et la fabrication de matière organique.",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Observations microscopiques des surfaces d'échange végétales",
      "contenu": "Racine de radis : zone pilifère couverte de milliers de poils absorbants microscopiques allongeant la surface de contact avec l'eau du sol par un facteur 100. Épiderme foliaire de poireau : présence d'orifices régulés appelés stomates, formés de deux cellules de garde ménageant un ostiole par où entre le CO2."
    },
    {
      "numero": "Doc 2",
      "titre": "Expérience de coloration de tige de céleri et coupes transversales",
      "contenu": "Une branche de céleri trempée 2 heures dans de l'eau colorée au bleu de méthylène montre des faisceaux bleus nets montant jusqu'aux feuilles. En coupe transversale, seuls les gros tubes rigides de xylème (paroi épaissie de lignine) sont teintés en bleu : ils transportent la sève brute des racines vers les feuilles."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Confond les deux sèves.",
      "MF": "Description partielle des structures.",
      "MS": "Distinction claire xylème (sève brute) et phloème (sève élaborée) avec leurs fonctions.",
      "TBM": "Schéma fonctionnel parfait reliant ultrastructure cellulaire et physiologie végétale."
    },
    "D1_3": {
      "MI": "Schéma non légendé.",
      "MF": "Schéma incomplet sans flèches de sens.",
      "MS": "Schéma clair avec légende rigoureuse et sens de circulation.",
      "TBM": "Communication scientifique irréprochable intégrant autotrophie et flux de matière."
    }
  }
},

  "A4-NAT": {
  "id": "A4-NAT",
  "niveau": "4e",
  "titre": "Audit de la biodiversité locale : application d'IA participative (Pl@ntNet / BirdNET) et esprit critique",
  "duree": "2 heures (Séance paire S18)",
  "contexte": "Dans la cour du collège et le parc voisin, vous photographiez des feuilles et enregistrez des chants d'oiseaux avec des applications mobiles dotées d'intelligence artificielle (Pl@ntNet, BirdNET). L'application affiche un résultat avec un pourcentage de confiance de 87 %. Peut-on faire aveuglément confiance à une IA pour recenser la biodiversité ?",
  "problematique": "Comment utiliser les outils d'IA et de sciences participatives pour inventorier un écosystème tout en exerçant un contrôle scientifique rigoureux ?",
  "obstacle": {
    "conception_fausse": "Si l'application d'IA donne un nom d'espèce, c'est forcément la vérité scientifique absolue.",
    "rupture_didactique": "L'IA est un modèle probabiliste de reconnaissance de formes : elle peut confondre des espèces très proches ou inventer un résultat si l'image est floue ou atypique."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Mission Écologue Municipal : Audit Critique d'Inventaire",
    "consigne": "En exploitant les données de terrain recueillies avec Pl@ntNet et BirdNET (Doc 1) et la clé de détermination botanique classique (Doc 2), confrontez les résultats de l'IA avec la vérification par critères morphologiques réels. Rédigez un rapport d'audit présentant la biodiversité identifiée, les limites de l'IA rencontrées (cas de fausse identification) et les recommandations pour intégrer ces données dans la base nationale INPN (Inventaire National du Patrimoine Naturel).",
    "coups_de_pouce": {
      "niveau_1_methode": "Présentez sous forme de tableau comparatif : Espèce supposée par l'IA / Pourcentage de confiance / Critères visibles sur la photo / Confirmation par la clé dichotomique (Oui/Non).",
      "niveau_2_indice": "Observez le cas du spécimen n° 4 : l'IA propose 'Frêne commun' à 78 %, mais l'observation attentive montre des feuilles alternes et des rameaux épineux caractéristiques d'un faux-acacia (Robinier). L'IA a été induite en erreur par la forme générale des folioles.",
      "niveau_3_notion": "Une IA fonctionne par corrélation statistique sur des millions d'images d'entraînement, sans 'comprendre' la biologie de la plante. Le travail du scientifique consiste à valider par les pairs et à croiser les sources."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, lister les trois espèces de plantes et les deux espèces d'oiseaux identifiées avec le plus fort score de confiance par les applications.",
        "competence": "D4.3",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide de la clé de détermination (Document 2), vérifier si le spécimen photographié n° 4 correspond bien aux critères du frêne ou à ceux du robinier.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer pourquoi une photo mal cadrée ou prise à contre-jour peut faire chuter la fiabilité d'une reconnaissance par IA.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Rédiger trois règles d'or pour utiliser intelligemment les applications d'IA dans les sciences participatives.",
        "competence": "D5",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Relevés de terrain de la classe (Pl@ntNet et BirdNET)",
      "contenu": "Spécimen 1 : photo fleur jaune -> Ficaire printanière (score 96 %). Spécimen 2 : enregistrement audio -> Pinson des arbres (score 92 %). Spécimen 3 : photo écorce -> Bouleau verruqueux (score 89 %). Spécimen 4 : photo feuille composée pennée -> Frêne commun (score 78 %, doute sur épines)."
    },
    {
      "numero": "Doc 2",
      "titre": "Extrait de la clé dichotomique de détermination des arbres feuillus",
      "contenu": "1a. Feuilles simples -> aller à 2. 1b. Feuilles composées -> aller à 3. 3a. Feuilles opposées sur la tige, sans épines, bourgeons noirs veloutés -> Frêne commun (Fraxinus excelsior). 3b. Feuilles alternes, présence d'épines stipulaires à la base du pétiole -> Robinier faux-acacia (Robinia pseudoacacia)."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Accepte l'IA sans vérification.",
      "MF": "Vérification partielle sur la clé.",
      "MS": "Utilisation rigoureuse de la clé dichotomique pour valider ou corriger l'IA.",
      "TBM": "Esprit critique exemplaire démontrant les forces et faiblesses des algorithmes d'IA."
    },
    "D5": {
      "MI": "Aucune réflexion citoyenne.",
      "MF": "Conseils génériques.",
      "MS": "Propositions concrètes pour participer aux programmes de science participative (Vigie-Nature).",
      "TBM": "Engagement citoyen responsable valorisant la protection de la biodiversité locale."
    }
  }
},

  "A4-DIG": {
  "id": "A4-DIG",
  "niveau": "4e",
  "titre": "La digestion in vitro : action de l'amylase salivaire sur l'amidon à 37 °C",
  "duree": "2 heures (Séance paire S20)",
  "contexte": "Au XVIIIe siècle, le savant Lazzaro Spallanzani fait avaler à des animaux de petits tubes perforés contenant de la viande et récupère les tubes : les aliments sont liquéfiés sans avoir été broyés. Aujourd'hui, on reproduit cette digestion chimique en tube à essai avec de la salive ou de l'amylase. Comment des molécules géantes d'aliments sont-elles transformées en nutriments microscopiques ?",
  "problematique": "Comment une enzyme digestive découpe-t-elle spécifiquement une macromolécule alimentaire en sucres simples solubles ?",
  "obstacle": {
    "conception_fausse": "La digestion est un simple broyage mécanique par les dents et l'estomac qui réduit les aliments en petits morceaux.",
    "rupture_didactique": "Le broyage ne fait que morceler ; la digestion est une transformation chimique spécifique catalysée par des enzymes capables de couper les liaisons moléculaires."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Rapport d'Enquête Biochimique de Laboratoire",
    "consigne": "En exploitant les résultats expérimentaux des tests à l'eau iodée et aux bandelettes glucose effectués à t = 0 min et t = 15 min à 37 °C (Docs 1 et 2), démontrez l'action chimique spécifique de l'amylase salivaire sur l'amidon. Vous expliquerez le rôle indispensable du tube témoin et la notion de simplification moléculaire.",
    "coups_de_pouce": {
      "niveau_1_methode": "Rappelez le rôle des deux réactifs : l'eau iodée colore l'amidon en bleu foncé/noir (test positif) et reste jaune en son absence. La bandelette glucose vire au vert/marron en présence de glucose et reste jaune en son absence.",
      "niveau_2_indice": "Dans le Tube 1 (Amidon + Eau) : à t = 15 min, l'eau iodée est toujours bleu-noir et le test glucose est négatif (rien n'a changé). Dans le Tube 2 (Amidon + Amylase) : à t = 15 min, l'eau iodée reste jaune (l'amidon a disparu) et le test glucose est fortement positif (du glucose est apparu !).",
      "niveau_3_notion": "L'amidon est un polymère géant formé de milliers d'unités de glucose reliées entre elles. L'amylase est une enzyme (catalyseur biologique) qui coupe spécifiquement les liaisons de l'amidon pour libérer des molécules simples de glucose capables de traverser la paroi intestinale."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, indiquer l'état de l'amidon et du glucose dans les tubes 1 et 2 au début de l'expérience (t = 0 min).",
        "competence": "D4.1",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "Décrire les résultats des deux tests obtenus à t = 15 min dans le tube 2 contenant l'amylase.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer pourquoi le tube 1 sans amylase (tube témoin) est indispensable pour valider la conclusion.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Définir ce qu'est une enzyme digestive et expliquer pourquoi elle transforme les aliments en nutriments.",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Protocole et résultats de la digestion in vitro à 37 °C",
      "contenu": "Tube 1 (Témoin) : 5 mL empois d'amidon + 1 mL eau distillée placé au bain-marie à 37 °C. À t = 0 min : Eau iodée = Bleu-noir (+++) ; Bandelette glucose = Jaune (-). À t = 15 min : Eau iodée = Bleu-noir (+++) ; Bandelette glucose = Jaune (-). Tube 2 : 5 mL empois d'amidon + 1 mL solution d'amylase à 37 °C. À t = 0 min : Eau iodée = Bleu-noir (+++) ; Bandelette glucose = Jaune (-). À t = 15 min : Eau iodée = Jaune (-) ; Bandelette glucose = Vert foncé (+++, forte présence de glucose)."
    },
    {
      "numero": "Doc 2",
      "titre": "Modèle moléculaire de la simplification chimique par hydrolyse",
      "contenu": "Macromolécule d'amidon (chaîne insoluble non absorbable de 1 000 à 10 000 résidus glucose) + Enzyme amylase + Eau ---> Molécules individuelles de glucose solubles de petite taille capables de traverser les cellules des villosités intestinales vers le sang."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Confond les réactifs.",
      "MF": "Description sans déduction sur la disparition de l'amidon.",
      "MS": "Démonstration rigoureuse de la disparition de l'amidon et de l'apparition conjointe de glucose.",
      "TBM": "Raisonnement expérimental parfait avec justification épistémologique du rôle du témoin."
    },
    "D1_3": {
      "MI": "Vocabulaire imprécis.",
      "MF": "Confusion aliment et nutriment.",
      "MS": "Explication claire de la digestion comme simplification moléculaire chimique.",
      "TBM": "Définition experte de l'action enzymatique et de son rôle dans l'absorption."
    }
  }
},

  "A4-REIN": {
  "id": "A4-REIN",
  "niveau": "4e",
  "titre": "Excrétion urinaire et don d'organes : dissection d'un rein et composition du plasma vs urine",
  "duree": "2 heures (Séance paire S24)",
  "contexte": "Chaque jour, nos deux reins filtrent environ 180 litres de sang pour ne produire qu'environ 1,5 litre d'urine définitive. Lorsqu'un patient souffre d'insuffisance rénale terminale, sa survie dépend de séances de dialyse lourdes ou d'une greffe de rein. Comment cet organe élimine-t-il les déchets azotés tout en conservant les molécules précieuses de notre sang ?",
  "problematique": "Comment le rein assure-t-il la filtration sélective du sang et l'excrétion de l'urée, et quels sont les enjeux éthiques du don d'organes ?",
  "obstacle": {
    "conception_fausse": "L'urine est formée directement par les boissons qui passent de l'estomac à la vessie.",
    "rupture_didactique": "L'urine est issue d'une filtration continue du sang circulant : elle contient les déchets métaboliques (urée) produits par toutes les cellules de l'organisme."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Mission Médecin Néphrologue et Sensibilisation Citoyenne",
    "consigne": "En exploitant vos observations anatomiques de la dissection du rein (Doc 1) et le tableau comparatif de la composition chimique plasma vs urine (Doc 2), démontrez que le rein est un filtre ultra-sélectif qui élimine activement les déchets toxiques tout en préservant les constituants vitaux. Rédigez ensuite un plaidoyer citoyen expliquant le principe de la loi française sur le don d'organes (consentement présumé) et l'importance d'en parler à ses proches.",
    "coups_de_pouce": {
      "niveau_1_methode": "Comparez dans un tableau les concentrations de quatre catégories de substances dans le plasma sanguin et dans l'urine : les déchets azotés (urée, acide urique), les nutriments (glucose, acides aminés), les protéines sanguines, et l'eau/sels minéraux.",
      "niveau_2_indice": "Remarquez que les protéines et le glucose sont présents dans le plasma mais totalement absents de l'urine chez un individu sain (taux = 0 g/L). À l'inverse, l'urée est 60 fois plus concentrée dans l'urine (20 g/L) que dans le plasma (0,3 g/L) !",
      "niveau_3_notion": "Le sang arrive par l'artère rénale, traverse les néphrons (glomérules) qui filtrent le sang : les grosses molécules restent dans les capillaires sanguins, les déchets sont concentrés dans le bassinet puis l'uretère vers la vessie. En France, la loi fait de chacun un donneur présumé d'organes sauf refus inscrit sur le registre national."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, légender le schéma du rein en plaçant : artère rénale, veine rénale, cortex, médullaire, bassinet et uretère.",
        "competence": "D4.1",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, identifier une substance présente dans le plasma qui est totalement absente de l'urine saine, et une substance éliminée en très grande concentration.",
        "competence": "D4.2",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer ce que signifierait la présence anormale de glucose ou de protéines dans les urines d'un patient.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Présenter le principe du don d'organes en France et justifier l'intérêt d'en informer sa famille.",
        "competence": "D5",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Anatomie fonctionnelle du rein de mammifère",
      "contenu": "Le rein est constitué de trois zones : la zone corticale externe (contenant plus d'un million de néphrons et glomérules filtreurs), la zone médullaire avec ses pyramides collectrices, et le bassinet où converge l'urine avant de s'écouler dans l'uretère vers la vessie. L'artère rénale apporte le sang chargé de déchets ; la veine rénale repart avec le sang épuré."
    },
    {
      "numero": "Doc 2",
      "titre": "Composition comparée du plasma sanguin et de l'urine normale (en g/L)",
      "contenu": "Eau : 910 g/L (plasma) / 950 g/L (urine). Protéines : 75 g/L (plasma) / 0 g/L (urine). Glucose : 1,0 g/L (plasma) / 0 g/L (urine). Chlorure de sodium : 7 g/L (plasma) / 10 g/L (urine). Urée : 0,3 g/L (plasma) / 20 g/L (urine - concentration x66 !). Créatinine : 0,01 g/L (plasma) / 1,2 g/L (urine - x120 !)."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Ne comprend pas le rôle de filtre.",
      "MF": "Description sans analyse sélective.",
      "MS": "Démonstration nette du rôle de filtre sélectif maintenant la constance du milieu intérieur.",
      "TBM": "Explication approfondie du fonctionnement néphronique et de l'épuration sanguine."
    },
    "D5": {
      "MI": "Aucune notion civique du don.",
      "MF": "Avis vague sans repère juridique.",
      "MS": "Connaissance précise du statut de donneur présumé et de l'importance de la discussion familiale.",
      "TBM": "Engagement citoyen éclairé, argumentation éthique solide sur la solidarité médicale."
    }
  }
},

  "A4-VAC": {
  "id": "A4-VAC",
  "niveau": "4e",
  "titre": "La mémoire immunitaire et les vaccins : cinétique des anticorps lors d'une primo-infection et d'un rappel",
  "duree": "2 heures (Séance paire S26)",
  "contexte": "Lorsqu'un enfant reçoit son vaccin obligatoire contre le tétanos ou la rougeole, le médecin programme un premier rappel quelques mois plus tard. Lors du premier contact avec le vaccin, la réaction est modeste, mais lors du rappel, les anticorps explosent en quelques heures. Comment notre système immunitaire garde-t-il en mémoire les agresseurs déjà rencontrés ?",
  "problematique": "Comment la dynamique de sécrétion des anticorps prouve-t-elle l'existence d'une mémoire immunitaire exploitée par les vaccins ?",
  "obstacle": {
    "conception_fausse": "Le vaccin est un médicament chimique qui détruit directement les microbes dès qu'on l'injecte.",
    "rupture_didactique": "Le vaccin ne détruit rien lui-même : il présente un antigène inoffensif pour éduquer nos lymphocytes et fabriquer une armée dormante de cellules mémoires."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Mission Médecin Épidémiologiste auprès de Santé Publique France",
    "consigne": "En exploitant le graphique de la cinétique des anticorps plasmatiques lors des injections 1 et 2 (Doc 1) et le schéma de la sélection clonale des lymphocytes B (Doc 2), comparez rigoureusement la réponse primaire et la réponse secondaire (délai de réponse, intensité du pic d'anticorps, durée de persistance). Rédigez une fiche d'information pour les familles expliquant pourquoi le respect du calendrier vaccinal et des rappels garantit une protection efficace et durable.",
    "coups_de_pouce": {
      "niveau_1_methode": "Comparez dans un tableau pour l'injection 1 (primo-vaccination) et l'injection 2 (rappel) : le délai avant apparition des anticorps (en jours), la concentration maximale d'anticorps dans le sang (unités arbitraires), et le temps de retour au niveau de base.",
      "niveau_2_indice": "Injection 1 : il faut 7 à 10 jours de latence pour voir monter les anticorps, avec un pic modeste à 10 unités qui retombe en quelques semaines. Injection 2 (rappel) : réaction quasi immédiate (moins de 24 à 48 heures), pic massif à 1 000 unités (100 fois plus élevé !) qui persiste des années.",
      "niveau_3_notion": "Lors du premier contact, les quelques lymphocytes B spécifiques capables de reconnaître l'antigène se multiplient : certains deviennent des plasmocytes sécréteurs d'anticorps, d'autres deviennent des lymphocytes B mémoires à longue durée de vie. Lors du rappel, ces cellules mémoires nombreuses et prêtes réagissent à vitesse grand V."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, relever le délai d'apparition des premiers anticorps après l'injection 1 et après l'injection 2.",
        "competence": "D4.2",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "Comparer la concentration maximale d'anticorps atteinte lors de la première injection et lors du rappel.",
        "competence": "D4.2",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "À l'aide du Document 2, nommer les cellules sanguines responsables de la rapidité et de l'intensité de la réponse secondaire.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Expliquer le principe de la vaccination et pourquoi les rappels sont indispensables pour maintenir l'immunité.",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Cinétique comparée de la production d'anticorps sériques",
      "contenu": "Injection 1 (antigène X au jour 0) : Temps de latence = 7 jours ; Titre maximal d'anticorps à J+14 = 10 unités ; Chute rapide à moins de 1 unité à J+40. Injection 2 (rappel au jour 60) : Temps de latence = moins de 2 jours ; Titre maximal à J+65 = 1 000 unités (x100) ; Décroissance très lente maintenant un titre protecteur (> 100 unités) pendant plusieurs années."
    },
    {
      "numero": "Doc 2",
      "titre": "Mécanisme cellulaire : clonage et cellules mémoires",
      "contenu": "Un lymphocyte B naïf porte un récepteur membranaire spécifique d'un antigène donné. Lors de la liaison antigénique : prolifération clonale en millions de copies. Différenciation : 90 % deviennent des plasmocytes à vie courte produisant 2 000 anticorps/seconde ; 10 % deviennent des lymphocytes B mémoires circulants à très longue durée de vie (décennies)."
    }
  ],
  "grille_lsu": {
    "D4_2": {
      "MI": "Lecture de graphe fausse.",
      "MF": "Valeurs relevées sans comparaison de proportions.",
      "MS": "Comparaison quantitative rigoureuse (latence 7j vs 2j ; intensité x100).",
      "TBM": "Exploitation graphique exemplaire montrant la dynamique temporelle de l'immunité."
    },
    "D1_3": {
      "MI": "Confusion vaccin/médicament.",
      "MF": "Explication simpliste de la mémoire.",
      "MS": "Explication claire reliant sélection clonale, plasmocytes et lymphocytes mémoires.",
      "TBM": "Synthèse remarquable de niveau expert liant immunologie fondamentale et santé publique."
    }
  }
},

  "A4-RECO": {
  "id": "A4-RECO",
  "niveau": "4e",
  "titre": "Neurobiologie du plaisir : des récepteurs sensoriels au circuit de la récompense cérébral",
  "duree": "1 heure (Séance impaire S33)",
  "contexte": "Lors d'une caresse, d'une musique émouvante ou d'un moment de partage affectif agréable, nous ressentons une sensation intense de plaisir et de bien-être. Mais où réside véritablement cette sensation ? Dans les doigts, sur la peau, dans les organes génitaux… ou dans les réseaux de neurones de notre cerveau ?",
  "problematique": "Comment le cerveau traduit-il les messages nerveux sensoriels en sensation consciente de plaisir grâce au circuit de la récompense ?",
  "obstacle": {
    "conception_fausse": "Le plaisir se trouve localisé dans les organes génitaux eux-mêmes.",
    "rupture_didactique": "Les organes génitaux ne font que capter des stimulations mécaniques : le plaisir est une construction cérébrale complexe intégrant dopamine, émotions et contexte psychologique."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Mission Vulgarisation Neurosciences pour l'Inserm",
    "consigne": "En exploitant les données d'imagerie cérébrale par IRM fonctionnelle (Doc 1) et le schéma du circuit dopaminergique de la récompense (Doc 2), démontrez que le plaisir sexuel et sensoriel est un phénomène neurobiologique central orchestré par le cerveau. Vous décrirez la chaîne complète depuis la stimulation des récepteurs périphériques jusqu'à la libération de dopamine et la perception consciente.",
    "coups_de_pouce": {
      "niveau_1_methode": "Distinguez l'organe récepteur périphérique (la peau, le clitoris, le pénis avec leurs milliers de terminaisons nerveuses) du centre intégrateur cérébral.",
      "niveau_2_indice": "Les messages nerveux sensitifs remontent par la moelle épinière jusqu'aux aires somatosensorielles du cortex, puis activent l'aire tegmentale ventrale (ATV) qui libère de la dopamine dans le noyau accumbens (le cœur du circuit du plaisir).",
      "niveau_3_notion": "L'IRMf montre que l'activation de ces zones cérébrales dépend fortement du cortex préfrontal (pensées, consentement, confiance) et de l'amygdale (absence de peur ou de stress). Sans contexte bienveillant et consenti, une même stimulation physique ne procure aucun plaisir."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, identifier les zones du cerveau qui s'illuminent lors d'une stimulation sensorielle agréable observée par IRMf.",
        "competence": "D4.1",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, nommer le neurotransmetteur clé libéré dans le noyau accumbens qui génère la sensation de récompense.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer pourquoi deux personnes recevant la même stimulation physique peuvent ressentir des sensations totalement différentes selon leur état d'esprit.",
        "competence": "D1.3",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Rédiger un court texte résumant pourquoi on dit que 'le premier organe du plaisir est le cerveau'.",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Imagerie par Résonance Magnétique fonctionnelle (IRMf) et sensations agréables",
      "contenu": "Lors d'une stimulation tactile consentie et agréable, l'IRMf révèle un afflux sanguin immédiat (signal BOLD) dans les aires somatosensorielles pariétales, suivi d'une forte activation bilatérale de l'aire tegmentale ventrale (ATV), du striatum ventral (noyau accumbens) et de l'insula."
    },
    {
      "numero": "Doc 2",
      "titre": "Le circuit de la récompense et ses régulations corticales",
      "contenu": "Le faisceau médian du télencéphale relie l'ATV au noyau accumbens. Les neurones dopaminergiques y libèrent de la dopamine, signal chimique universel de renforcement positif et de motivation. Le cortex préfrontal module ce circuit : le sentiment de sécurité, d'accord mutuel et de liberté amplifie la réponse, tandis que l'anxiété ou la contrainte la bloquent totalement."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Confond récepteur et cerveau.",
      "MF": "Description des zones sans lien fonctionnel.",
      "MS": "Explication claire du trajet nerveux et du rôle de la dopamine dans le noyau accumbens.",
      "TBM": "Compréhension neurobiologique approfondie reliant intégration corticale et sensorialité."
    },
    "D1_3": {
      "MI": "Texte sans rigueur.",
      "MF": "Omission des dimensions affectives.",
      "MS": "Explication fluide intégrant biologie, affectivité et bien-être global.",
      "TBM": "Éloquence et rigueur didactique exemplaires conformes aux objectifs EVARS."
    }
  }
},

  "A4-CONS": {
  "id": "A4-CONS",
  "niveau": "4e",
  "titre": "Éthique relationnelle et consentement : critères de validité légale et respect mutuel",
  "duree": "1 heure (Séance impaire S37)",
  "contexte": "Dans les relations entre adolescents, sur les réseaux sociaux comme dans la vie réelle, la question du respect de l'autre est primordiale. Certains pensent que 'qui ne dit mot consent' ou qu'on ne peut pas changer d'avis une fois qu'on a dit oui. Que dit la science du comportement et que prévoit précisément la loi française ?",
  "problematique": "Qu'est-ce qu'un consentement libre, éclairé, enthousiaste et réversible, et comment distinguer une relation saine d'une situation d'emprise ou de violence ?",
  "obstacle": {
    "conception_fausse": "Le consentement est acquis une fois pour toutes, et l'absence de 'non' explicite vaut acceptation.",
    "rupture_didactique": "Le silence ou la passivité peuvent traduire un état de sidération psychologique : le consentement valide doit être un accord actif, libre, spécifique et révocable à tout instant."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Conception d'un Guide pour le Conseil de Vie Collégienne (CVC)",
    "consigne": "En vous appuyant sur les textes de loi du Code pénal (Doc 1) et la métaphore du thé et les critères internationaux FRIES (Doc 2), élaborez une charte claire et argumentée du consentement entre pairs. Vous analyserez trois cas concrets en démontrant juridiquement et humainement pourquoi le consentement est invalide en cas de sidération, d'alcoolisation ou d'insistance répétée.",
    "coups_de_pouce": {
      "niveau_1_methode": "Définissez les 5 critères de l'acronyme FRIES : Freely given (Libre), Reversible (Réversible), Informed (Éclairé), Enthusiastic (Enthousiaste), Specific (Spécifique).",
      "niveau_2_indice": "Rappelez ce que dit le Code pénal : tout acte sexuel sans consentement commis avec violence, contrainte, menace ou surprise est puni par la loi. La contrainte morale (culpabilisation, chantage affectif, insistance jusqu'à épuisement) détruit totalement la liberté du choix.",
      "niveau_3_notion": "En neurobiologie, face à une situation de menace ou d'emprise, le cerveau peut entrer en sidération : l'amygdale disjoncte et le corps reste pétrifié, incapable de crier ou de repousser l'agresseur. L'absence de gestes de défense ne prouve en aucun cas le consentement."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, citer les 4 situations prévues par la loi où un acte est qualifié d'agression sexuelle ou de viol.",
        "competence": "D5",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, expliquer ce que signifie le caractère 'réversible' du consentement : peut-on changer d'avis à tout moment ?",
        "competence": "D5",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer pourquoi une personne qui a trop bu ou qui est sous l'emprise de stupéfiants est incapable de donner un consentement valide.",
        "competence": "D1.3",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Rédiger un message de prévention à destination des collégiens pour encourager le respect et la communication bienveillante.",
        "competence": "D5",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Code pénal français (Articles 222-22 et suivants)",
      "contenu": "Constitue une agression sexuelle tout acte de nature sexuelle commis avec violence, contrainte, menace ou surprise. Le viol est puni de 15 à 20 ans de réclusion criminelle. La loi fixe un seuil d'âge à 15 ans : en deçà, un majeur ne peut invoquer le consentement d'un mineur."
    },
    {
      "numero": "Doc 2",
      "titre": "Les critères universels du consentement valide (Modèle FRIES / Planning Familial)",
      "contenu": "1. Libre : sans chantage, menace ou peur. 2. Réversible : on a le droit absolu de dire stop à n'importe quel moment, même après avoir dit oui. 3. Éclairé : en sachant exactement de quoi il s'agit, sans mensonge. 4. Enthousiaste : le désir est partagé avec envie, pas subi pour faire plaisir. 5. Spécifique : dire oui à un bisou ne signifie pas dire oui à autre chose."
    }
  ],
  "grille_lsu": {
    "D5": {
      "MI": "Loi non comprise ou relativisée.",
      "MF": "Connaissance superficielle des textes.",
      "MS": "Maîtrise rigoureuse des critères légaux et éthiques du consentement.",
      "TBM": "Sens civique remarquable, engagement éthique affirmé pour le respect et l'égalité."
    },
    "D1_3": {
      "MI": "Arguments confus.",
      "MF": "Réflexion partielle.",
      "MS": "Expression claire, respectueuse et étayée sur des situations réalistes.",
      "TBM": "Argumentation d'une grande maturité et clarté communicative."
    }
  }
},

  "A3-ROCH": {
  "id": "A3-ROCH",
  "niveau": "3e",
  "titre": "Le cycle des roches sédimentaires : altération, transport, sédimentation et diagenèse",
  "duree": "2 heures (Séance paire S2)",
  "contexte": "Au sommet des falaises de calcaire blanc des calanques de Cassis ou dans les gorges du Verdon, on observe des couches horizontales empilées contenant des coquilles d'ammonites et des coraux fossilisés à plusieurs centaines de mètres au-dessus du niveau de la mer. Comment des sables et des boues du fond des eaux deviennent-ils des roches dures formant des montagnes ?",
  "problematique": "Comment les processus d'altération, de transport, de dépôt et de diagenèse transforment-ils les paysages géologiques au cours de millions d'années ?",
  "obstacle": {
    "conception_fausse": "Les roches ont toujours existé telles quelles depuis la création de la Terre.",
    "rupture_didactique": "Les roches s'usent, se déposent et se reforment en permanence dans un cycle dynamique très lent régi par les lois de la gravité, de la chimie et de la pression."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Mission Géologue de Terrain au Bureau de Recherches Géologiques (BRGM)",
    "consigne": "En exploitant les résultats de l'expérience de transport et décantation en gouttière (Doc 1) et les étapes diagénétiques de transformation d'un sédiment en roche (Doc 2), reconstituez l'histoire géologique complète de la formation d'un calcaire ou d'un grès. Vous expliquerez pourquoi les couches sédimentaires les plus profondes sont les plus anciennes (principe de superposition) et comment les fossiles piégés permettent de dater les paléoenvironnements.",
    "coups_de_pouce": {
      "niveau_1_methode": "Détaillez chronologiquement les 4 étapes du cycle : 1. Altération/Érosion des reliefs -> 2. Transport par l'eau et le vent -> 3. Sédimentation (dépôt par gravité) -> 4. Diagenèse (compaction et cimentation en profondeur).",
      "niveau_2_indice": "Dans la gouttière à débit variable, les plus gros éléments (graviers) se déposent en amont dès que le courant ralentit, tandis que les argiles très fines voyagent jusqu'en mer calme où elles sédimentent en couches planes horizontales.",
      "niveau_3_notion": "Sous le poids des couches accumulées (plusieurs centaines de mètres), l'eau est expulsée (compaction) et les minéraux dissous précipitent entre les grains (cimentation par la calcite ou la silice), transformant le sédiment meuble en roche cohérente."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, décrire comment la vitesse du courant d'eau trie les particules sédimentaires selon leur taille.",
        "competence": "D4.1",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, expliquer les deux étapes physiques et chimiques de la diagenèse qui transforment du sable meuble en grès dur.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Énoncer le principe de superposition utilisé par les géologues pour dater les strates sédimentaires.",
        "competence": "D1.3",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Dessiner un schéma fléché résumant le cycle sédimentaire depuis l'érosion jusqu'à la roche consolidée.",
        "competence": "D4.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Modélisation expérimentale en gouttière hydrodynamique",
      "contenu": "Mélange de galets, sable grossier, sable fin et argile injecté dans un courant d'eau : à forte pente (vitesse = 1,2 m/s), tout est transporté ; à pente moyenne (0,4 m/s), les galets et gros sables se déposent ; dans le bassin calme final (0,05 m/s), le sable fin puis les argiles décantent lentement en lamines horizontales régulières."
    },
    {
      "numero": "Doc 2",
      "titre": "La diagenèse : de la vase au calcaire en profondeur",
      "contenu": "1. Enfouissement progressif : la pression lithostatique augmente de 250 bars par kilomètre. 2. Compaction : l'eau interstitielle est chassée, la porosité passe de 70 % à moins de 15 %. 3. Cimentation : précipitation de cristaux de carbonate de calcium (CaCO3) liant les grains entre eux en quelques centaines de milliers d'années."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Ordre chronologique inversé.",
      "MF": "Oubli de la diagenèse.",
      "MS": "Explication claire reliant hydrodynamique, dépôt sédimentaire et compaction diagénétique.",
      "TBM": "Maîtrise remarquable du cycle sédimentaire avec compréhension de l'actualisme géologique."
    },
    "D1_3": {
      "MI": "Vocabulaire géologique absent.",
      "MF": "Description confuse.",
      "MS": "Récit géologique rigoureux utilisant les termes précis (érosion, strate, diagenèse).",
      "TBM": "Restitution scientifique exemplaire mobilisant le temps profond géologique."
    }
  }
},

  "A3-RESS": {
  "id": "A3-RESS",
  "niveau": "3e",
  "titre": "Épuisement des ressources naturelles : pétrole, lithium et minerais face aux besoins humains",
  "duree": "2 heures (Séance paire S4)",
  "contexte": "Pour fabriquer nos smartphones, les batteries des voitures électriques et alimenter nos industries, l'humanité extrait chaque année plus de 100 milliards de tonnes de matières premières de la Terre. Pour le lithium et le cuivre, les géologues estiment que les réserves actuellement connues seront exploitées en quelques décennies. Pourquoi nos ressources ne sont-elles pas infinies ?",
  "problematique": "Comment comparer les durées de renouvellement géologique des ressources et les rythmes de consommation humaine pour repenser notre modèle de société ?",
  "obstacle": {
    "conception_fausse": "Il suffit de creuser plus profond ou d'aller chercher des minerais sur d'autres planètes, les ressources ne peuvent pas s'épuiser.",
    "rupture_didactique": "Les ressources minérales et fossiles sont le résultat de processus géologiques uniques ayant pris des dizaines à des centaines de millions d'années : à l'échelle humaine, elles constituent un stock fini non renouvelable."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Rapport de prospective pour le Haut-Commissariat au Plan",
    "consigne": "En analysant le tableau des réserves mondiales et des rythmes de consommation (Doc 1) et l'impact de la transition énergétique sur les métaux critiques (Doc 2), calculez la durée théorique d'épuisement des réserves de cuivre et de lithium au rythme de consommation actuel. Rédigez un mémoire stratégique démontrant pourquoi l'économie circulaire (sobriété, éco-conception, recyclage) est la seule réponse scientifiquement viable face à l'illusion d'une croissance matérielle infinie.",
    "coups_de_pouce": {
      "niveau_1_methode": "Formule : Durée de vie des réserves (en années) = Réserves prouvées (en tonnes) / Consommation annuelle (en tonnes/an).",
      "niveau_2_indice": "Cuivre : Réserves = 890 millions de tonnes. Consommation annuelle = 26 millions de tonnes/an. 890 / 26 = environ 34 ans de réserves au rythme actuel ! Si la demande explose pour les réseaux électriques et éoliennes, cette durée sera encore plus courte.",
      "niveau_3_notion": "Distinguez 'ressources totales' (tout ce qui existe dans la croûte, souvent inaccessible ou dilué) et 'réserves exploitables' (ce qu'on peut extraire avec les techniques actuelles sans dépenser plus d'énergie que le métal n'en rapporte : notion de taux de retour énergétique)."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, comparer le temps géologique mis pour former un gisement pétrolier avec le temps d'exploitation humaine de ces réserves.",
        "competence": "D4.2",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "Calculer la durée de vie des réserves de cuivre au rythme de consommation actuel en posant le calcul demandé.",
        "competence": "D4.2",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "À l'aide du Document 2, identifier pourquoi la fabrication d'une voiture électrique nécessite beaucoup plus de cuivre et de lithium qu'un véhicule thermique.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Expliquer comment le recyclage des métaux et la sobriété permettent de prolonger la durée des ressources terrestres.",
        "competence": "D5",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Réserves mondiales prouvées et consommation annuelle (USGS 2025)",
      "contenu": "Pétrole conventionnel : Réserves = 1 700 milliards de barils ; Consommation = 36 milliards de barils/an (formation = 100 à 200 millions d'années). Cuivre : Réserves = 890 Mt ; Consommation = 26 Mt/an. Lithium : Réserves = 28 Mt ; Consommation = 0,18 Mt/an (en hausse exponentielle de +15 % par an). Terres rares : Réserves = 110 Mt ; Consommation = 0,3 Mt/an."
    },
    {
      "numero": "Doc 2",
      "titre": "Besoins en minéraux critiques pour les technologies bas-carbone (AIE)",
      "contenu": "Une voiture électrique nécessite en moyenne 53 kg de cuivre, 9 kg de lithium, 40 kg de nickel et 13 kg de cobalt, soit 6 fois plus de matières minérales qu'une voiture thermique traditionnelle. Le taux de recyclage mondial du lithium est actuellement inférieur à 5 % en raison de procédés industriels encore coûteux."
    }
  ],
  "grille_lsu": {
    "D4_2": {
      "MI": "Calcul absent ou division inversée.",
      "MF": "Calcul posé mais mauvaise unité.",
      "MS": "Calculs de durée de réserves exacts (cuivre ≈ 34 ans, pétrole ≈ 47 ans).",
      "TBM": "Calculs parfaits intégrant la croissance exponentielle de la demande."
    },
    "D5": {
      "MI": "Pas de proposition de solution.",
      "MF": "Solutions vagues.",
      "MS": "Identification claire des piliers de la transition : recyclage et sobriété d'usage.",
      "TBM": "Sens citoyen aiguisé, argumentation écologique et géopolitique magistrale."
    }
  }
},

  "A3-KPG": {
  "id": "A3-KPG",
  "niveau": "3e",
  "titre": "La crise biologique Crétacé-Paléogène (K-Pg) : faisceau de preuves et radiation évolutive",
  "duree": "2 heures (Séance paire S6)",
  "contexte": "Il y a 66 millions d'années, plus de 75 % des espèces vivantes de la planète, dont tous les dinosaures non aviens, les ammonites et les reptiles marins géants, disparaissent en un laps de temps géologique très bref. Dans les roches du monde entier, une fine pellicule d'argile de quelques centimètres sépare le Crétacé du Paléogène. Quels cataclysmes ont provoqué cette extinction massive ?",
  "problematique": "Comment le croisement d'indices géologiques et paléontologiques permet-il de reconstituer les causes et les conséquences de la crise K-Pg ?",
  "obstacle": {
    "conception_fausse": "La crise biologique est juste une punition ou un coup de malchance qui a tué instantanément tous les animaux de la Terre.",
    "rupture_didactique": "L'extinction résulte d'un effondrement écologique mondial en chaîne (chute de la photosynthèse) suivi d'une formidable radiation évolutive des groupes survivants (mammifères, oiseaux)."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Rapport d'Enquête Paléontologique pour l'Académie des Sciences",
    "consigne": "En exploitant la carte de la couche d'iridium et du cratère de Chicxulub (Doc 1), les données sur le volcanisme colossal du Deccan (Doc 2) et l'arbre évolutif des vertébrés survivants (Doc 3), démontrez la réalité du scénario à causes multiples de la crise K-Pg. Vous expliquerez l'effondrement des chaînes trophiques continentales et océaniques, puis vous justifierez comment la libération des niches écologiques a permis l'explosion évolutive des mammifères et des oiseaux.",
    "coups_de_pouce": {
      "niveau_1_methode": "Structurez votre analyse en 3 temps : 1. Les indices matériels de la collision météoritique et du volcanisme ; 2. Les conséquences environnementales globales ; 3. Les conséquences sur la dynamique de la biodiversité.",
      "niveau_2_indice": "Doc 1 : La couche d'argile de la limite K-Pg contient une anomalie en iridium (métal rare sur Terre mais abondant dans les météorites) et des quartz choqués à Chicxulub (Mexique). Doc 2 : Les Trapps du Deccan (Inde) ont craché des millions de km³ de laves et de gaz soufrés pendant 500 000 ans.",
      "niveau_3_notion": "La poussière et les suies obscurcissent le Soleil pendant des années : arrêt de la photosynthèse -> mort des végétaux et du phytoplancton -> mort des grands herbivores et des carnivores. Les petits organismes fouisseurs, détritivores ou omnivores (premiers mammifères, oiseaux) survivent et se diversifient prodigieusement."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, citer deux preuves géologiques prouvant l'impact d'une météorite géante il y a 66 millions d'années.",
        "competence": "D4.1",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, expliquer comment les éruptions volcaniques géantes des Trapps du Deccan ont pu fragiliser le climat avant l'impact.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer pourquoi l'arrêt prolongé de la lumière solaire a entraîné la disparition des grands dinosaures herbivores et carnivores.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Décrire ce qui est arrivé aux petits mammifères après la disparition des dinosaures (notion de radiation évolutive).",
        "competence": "D1.3",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Preuves de l'impact météoritique de Chicxulub (Mexique)",
      "contenu": "Cratère d'impact sous-marin de 180 km de diamètre découvert au Yucatán, daté de 66,04 millions d'années. Présence mondiale dans la fine couche de transition K-Pg d'une teneur en iridium 30 à 100 fois supérieure à la normale, accompagnée de micro-tectites (gouttes de roche fondue vitrifiée) et de quartz choqués sous haute pression."
    },
    {
      "numero": "Doc 2",
      "titre": "Le supervolcanisme des Trapps du Deccan (Inde)",
      "contenu": "Épanchement d'un million de kilomètres cubes de laves basaltiques couvrant une surface équivalente à la France, sur une période chevauchant la limite K-Pg. Rejets massifs de CO2 (effet de serre) et d'aérosols de SO2 (pluies acides et refroidissement initial), ayant déstabilisé les écosystèmes bien avant l'impact."
    },
    {
      "numero": "Doc 3",
      "titre": "Radiation évolutive post-crise des mammifères",
      "contenu": "Avant 66 Ma : les mammifères sont de petite taille (< 5 kg), discrets et nocturnes. Après la crise : en moins de 10 millions d'années (Paléocène/Éocène), multiplication spectaculaire des lignées occupant toutes les niches écologiques laissées vacantes (herbivores géants, carnivores, cétacés marins, chauves-souris volantes, primates)."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Retient une seule cause simpliste.",
      "MF": "Description sans lien avec la chaîne alimentaire.",
      "MS": "Articulation rigoureuse du faisceau de preuves (météorite + Deccan + obscurcissement).",
      "TBM": "Démonstration systémique remarquable intégrant effondrement trophique et radiation évolutive."
    },
    "D1_3": {
      "MI": "Confusion des époques.",
      "MF": "Texte narratif sans concept évolutif.",
      "MS": "Explication claire du concept de crise biologique et de diversification consécutive.",
      "TBM": "Raisonnement paléontologique brillant montrant la contingence et le renouvellement du vivant."
    }
  }
},

  "A3-ONEH": {
  "id": "A3-ONEH",
  "niveau": "3e",
  "titre": "Solutions fondées sur la nature et concept « Une seule santé » (One Health)",
  "duree": "1 heure (Séance impaire S13)",
  "contexte": "Lors des canicules urbaines, la température au sol dans les rues bétonnées peut atteindre 55 °C alors qu'elle ne dépasse pas 30 °C sous une allée d'arbres. De même, les pandémies récentes (grippe aviaire, Covid-19) ont démontré que la santé des humains dépend directement de la santé des animaux sauvages et de l'état de préservation des forêts. Pourquoi ne peut-on pas soigner l'humain sans soigner son écosystème ?",
  "problematique": "Comment le concept « Une seule santé » et les solutions fondées sur la nature permettent-ils de relever conjointement les défis sanitaires et climatiques ?",
  "obstacle": {
    "conception_fausse": "La médecine moderne n'a besoin que d'usines chimiques et d'hôpitaux : la nature n'a rien à voir avec notre santé.",
    "rupture_didactique": "Plus de 70 % des maladies émergentes sont des zoonoses transmises par des animaux sauvages perturbés par la déforestation : préserver la biodiversité est la première barrière de santé publique."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Rapport d'Orientation pour l'Organisation Mondiale de la Santé (OMS)",
    "consigne": "En exploitant le schéma unificateur du concept 'One Health' (Doc 1) et les exemples concrets de solutions fondées sur la nature (Doc 2), démontrez pourquoi la santé humaine, la santé animale et la santé des écosystèmes sont interdépendantes. Vous rédigerez 3 propositions concrètes d'aménagements territoriaux intégrant le bien-être humain et la biodiversité (îlots de fraîcheur, zones humides épuratrices).",
    "coups_de_pouce": {
      "niveau_1_methode": "Définissez les 3 pôles du triptyque One Health : Santé humaine, Santé animale, Santé environnementale. Montrez par des flèches réciproques comment l'un affecte les deux autres.",
      "niveau_2_indice": "Prenez l'exemple d'une zone humide (marais) : elle filtre gratuitement les polluants et nitrates de l'eau (santé environnementale), accueille des oiseaux migrateurs (santé animale) et évite l'empoisonnement des nappes d'eau potable tout en atténuant les inondations (santé humaine).",
      "niveau_3_notion": "Citez les travaux d'Emmanuelle Charpentier et Jennifer Doudna (Nobel 2020) : les biotechnologies issues de défenses immunitaires bactériennes naturelles (CRISPR-Cas9) illustrent à quel point la médecine puise ses outils fondamentaux dans la compréhension fine du monde vivant."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, définir l'approche 'Une seule santé' (One Health) et citer ses trois composantes inséparables.",
        "competence": "D1.3",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, comparer l'efficacité thermique d'une rue minérale bétonnée et d'une rue végétalisée en période de canicule.",
        "competence": "D4.2",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer comment la destruction des habitats naturels des chauves-souris ou des rongeurs favorise la transmission de virus à l'homme (zoonose).",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Proposer deux actions concrètes à l'échelle du collège ou de la commune illustrant une solution fondée sur la nature.",
        "competence": "D5",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Le concept « One Health / Une seule santé » (OMS / OMSA / PNUE)",
      "contenu": "Approche intégrée et unificatrice qui vise à équilibrer et optimiser durablement la santé des personnes, des animaux et des écosystèmes. Elle reconnaît que la santé des humains, des animaux domestiques et sauvages, des plantes et de l'environnement au sens large sont étroitement liés et interdépendants."
    },
    {
      "numero": "Doc 2",
      "titre": "Solutions fondées sur la nature (SFN) en milieu urbain",
      "contenu": "Étude d'îlots de chaleur urbains : végétaliser 30 % d'une cour d'école ou d'une rue réduit la température de l'air ressentie de 3 à 5 °C grâce à l'ombrage et l'évapotranspiration des arbres. Les toitures végétalisées retiennent jusqu'à 70 % des eaux de pluie d'orage, évitant la saturation des réseaux d'égouts."
    }
  ],
  "grille_lsu": {
    "D1_3": {
      "MI": "Définition incomplète.",
      "MF": "Exemples sans lien avec le concept.",
      "MS": "Explication claire du concept One Health articulant santé humaine, animale et végétale.",
      "TBM": "Maîtrise remarquable de la pensée systémique et des enjeux écologiques modernes."
    },
    "D5": {
      "MI": "Pas de proposition pratique.",
      "MF": "Mesures irréalistes.",
      "MS": "Propositions concrètes et adaptées de solutions fondées sur la nature au collège.",
      "TBM": "Engagement citoyen exemplaire alliant rigueur scientifique et vision d'avenir."
    }
  }
},

  "A3-EMOT": {
  "id": "A3-EMOT",
  "niveau": "3e",
  "titre": "La biologie des émotions : manifestations physiologiques, neurobiologie et CPS",
  "duree": "2 heures (Séance paire S18)",
  "contexte": "Avant de monter sur scène pour présenter un exposé ou lors d'un bruit soudain dans le noir, votre cœur cogne dans votre poitrine, vos mains deviennent moites et votre respiration se bloque. Est-ce un signe de faiblesse ? Que se passe-t-il exactement dans le corps humain lors d'une émotion vive comme la peur ou la colère ?",
  "problematique": "Comment les circuits cérébraux et hormonaux déclenchent-ils des modifications physiologiques automatiques face à une situation perçue comme un défi ou un danger ?",
  "obstacle": {
    "conception_fausse": "Les émotions ne sont que des caprices de l'esprit qu'il faut totalement étouffer pour être rationnel.",
    "rupture_didactique": "L'émotion est un programme biologique adaptatif ultra-rapide sélectionné par l'évolution pour mobiliser immédiatement les ressources physiques du corps face à un besoin vital."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Atelier Compétences Psycho-Sociales (CPS) et Neurobiologie",
    "consigne": "En exploitant les enregistrements physiologiques du rythme cardiaque et de la conductance cutanée (Doc 1) et le circuit neuro-émotionnel thalamus-amygdale-cerveau préfrontal (Doc 2), expliquez le mécanisme de la réaction d'alarme émotionnelle. Rédigez un guide pratique démontrant comment des techniques respiratoires fondées sur la biologie (cohérence cardiaque) permettent d'activer le système nerveux parasympathique pour réguler le stress.",
    "coups_de_pouce": {
      "niveau_1_methode": "Distinguez les deux voies cérébrales du traitement de l'émotion : la voie courte (rapide, inconsciente, réflexe) et la voie longue (plus lente, corticale, réflexive).",
      "niveau_2_indice": "Voie courte : Stimulus -> Thalamus -> Amygdale cérébrale en 12 millisecondes ! L'amygdale déclenche la sécrétion d'adrénaline : le cœur accélère, les vaisseaux se contractent, la sueur apparaît. Voie longue : Stimulus -> Thalamus -> Cortex visuel -> Cortex préfrontal (analyse rationnelle en 40 ms) qui freine ou confirme l'alarme.",
      "niveau_3_notion": "Le nerf vague (système parasympathique) peut freiner le cœur. Une respiration lente et contrôlée (6 cycles par minute pendant 5 minutes) stimule mécaniquement les barorécepteurs et le nerf vague, faisant chuter le taux de cortisol et la fréquence cardiaque."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, relever les variations de la fréquence cardiaque et de la transpiration (conductance cutanée) provoquées par une émotion de surprise.",
        "competence": "D4.2",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, identifier le rôle de l'amygdale cérébrale et de l'hormone adrénaline dans la réaction d'urgence.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer pourquoi le cortex préfrontal permet de prendre du recul et d'apaiser une émotion une fois la situation analysée.",
        "competence": "D1.3",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Décrire comment la respiration lente aide biologiquement à réguler son stress avant une prise de parole en public.",
        "competence": "D5",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Mesures polygraphiques lors d'une émotion aiguë (données de physiologie)",
      "contenu": "Repos : Fréquence cardiaque = 70 bpm ; Conductance cutanée = 2 microSiemens (peau sèche). Émotion de stress/peur : Fréquence cardiaque monte à 125 bpm en moins de 2 secondes (+78 %) ; Conductance grimpe à 9 microSiemens (activation réflexe des glandes sudoripares) ; Dilatation pupillaire."
    },
    {
      "numero": "Doc 2",
      "titre": "Les deux voies cérébrales de l'émotion (Joseph LeDoux)",
      "contenu": "1. Voie courte sous-corticale : Thalamus -> Amygdale -> Tronc cérébral et glandes surrénales (libération flash d'adrénaline). Réaction immédiate de fuite ou de combat. 2. Voie longue corticale : Thalamus -> Cortex sensoriel -> Cortex préfrontal dorsolatéral (évaluation consciente et régulation inhibitrice par le GABA)."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Confond cerveau et cœur.",
      "MF": "Description sans notions neurologiques.",
      "MS": "Explication claire du double circuit cérébral (voie courte amygdalienne / voie longue corticale).",
      "TBM": "Maîtrise approfondie des neurosciences émotionnelles et de la régulation neurovégétative."
    },
    "D5": {
      "MI": "Aucune utilité pratique formulée.",
      "MF": "Conseils de bon sens non reliés à la biologie.",
      "MS": "Recommandations concrètes de compétences psychosociales adossées aux mécanismes du nerf vague.",
      "TBM": "Capacité exemplaire à transférer des savoirs biologiques vers la gestion de soi et l'empathie."
    }
  }
},

  "A3-ADDI": {
  "id": "A3-ADDI",
  "niveau": "3e",
  "titre": "Addictions aux substances et aux écrans : détournement du circuit de la récompense et dépendance",
  "duree": "2 heures (Séance paire S20)",
  "contexte": "Qu'il s'agisse de la consommation de tabac (nicotine), d'alcool, de cannabis ou du défilement infini sur des applications vidéo comme TikTok, le cerveau peut rapidement développer un besoin irrépressible, répété malgré la connaissance des conséquences négatives. Comment des substances chimiques ou des algorithmes numériques peuvent-ils prendre le contrôle de notre volonté ?",
  "problematique": "Comment les drogues et les boucles de récompense aléatoire altèrent-elles durablement le fonctionnement des synapses dopaminergiques ?",
  "obstacle": {
    "conception_fausse": "L'addiction n'est qu'un manque de volonté : il suffit de décider d'arrêter pour que tout redevienne instantanément normal.",
    "rupture_didactique": "L'addiction modifie physiquement et biologiquement la structure des neurones et le nombre de récepteurs synaptiques : c'est une maladie neurobiologique chronique."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Mission Prévention Santé pour la MILDECA",
    "consigne": "En exploitant les données d'imagerie cérébrale montrant la densité des récepteurs D2 à la dopamine chez un non-consommateur et un individu dépendant (Doc 1) et les mécanismes d'action moléculaire des drogues et notifications (Doc 2), expliquez le phénomène de tolérance (accoutumance) et de dépendance. Rédigez une plaquette d'information pour les collégiens analysant les techniques de captologie utilisées par les plateformes numériques et les ressources d'aide disponibles (Fil Santé Jeunes).",
    "coups_de_pouce": {
      "niveau_1_methode": "Comparez point par point le fonctionnement d'une synapse à dopamine lors d'un plaisir naturel et lors d'une consommation de drogue ou de notification imprévisible.",
      "niveau_2_indice": "Les drogues et le 'scrolling' provoquent une inondation artificielle et massive de dopamine dans le noyau accumbens (jusqu'à 10 fois le niveau naturel). En réponse, pour se protéger de cette sur-stimulation, les neurones récepteurs diminuent le nombre de récepteurs D2 disponibles (phénomène de tolérance).",
      "niveau_3_notion": "Conséquence biologique : les plaisirs simples du quotidien ne suffisent plus à activer les synapses appauvries en récepteurs. La personne ressent un manque douloureux (dysphorie) et a besoin de doses de plus en plus fortes pour ressentir le moindre soulagement (dépendance)."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, comparer la quantité de récepteurs à la dopamine présents dans le cerveau d'une personne saine et d'une personne dépendante.",
        "competence": "D4.1",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, expliquer pourquoi une personne dépendante doit consommer des doses de plus en plus importantes pour obtenir le même effet (phénomène de tolérance).",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Montrer comment les algorithmes des réseaux sociaux utilisent les récompenses aléatoires pour maintenir l'attention des adolescents.",
        "competence": "D1.3",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Citer deux organismes ou numéros verts gratuits permettant d'obtenir de l'aide en cas de situation d'addiction.",
        "competence": "D5",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Imagerie par Tomographie par Émission de Positons (TEP-scan) des récepteurs D2",
      "contenu": "Images cérébrales au traceur radioactif mesurant la densité des récepteurs dopaminergiques D2 dans le striatum : sujet témoin = signal rouge éclatant très dense ; sujet dépendant à l'alcool ou à la cocaïne = signal affaibli vert/bleu (-40 à -50 % de récepteurs actifs). Le cerveau a 'raboté' ses récepteurs face aux excès répétés."
    },
    {
      "numero": "Doc 2",
      "titre": "Neurobiologie de la captologie et des substances addictives",
      "contenu": "Nicotine, alcool, THC : détournent les récepteurs nicotiniques, GABAergiques et cannabinoïdes en déclenchant un tir en rafale des neurones de l'aire tegmentale ventrale. Réseaux sociaux : la mécanique des 'likes' imprévisibles active le principe du conditionnement opérant à renforcement variable (analogue aux machines à sous), maintenant une libération pulsatile de dopamine qui empêche le détachement cognitif."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Confusion volonté/biologie.",
      "MF": "Description sans mécanisme synaptique.",
      "MS": "Explication claire de l'altération synaptique (baisse des récepteurs D2 et accoutumance).",
      "TBM": "Compréhension experte des circuits de l'addiction reliant chimie synaptique et comportement."
    },
    "D5": {
      "MI": "Pas de mention des aides.",
      "MF": "Conseils moralisateurs.",
      "MS": "Conseils de prévention bienveillants et identification claire des dispositifs de soutien (Écoute Alcool, Fil Santé Jeunes).",
      "TBM": "Posture de citoyen éclairé capable de décoder les pièges de l'industrie et de protéger ses pairs."
    }
  }
},

  "A3-RESI": {
  "id": "A3-RESI",
  "niveau": "3e",
  "titre": "Évolution et dispersion de l'antibiorésistance : de l'élevage aux cours d'eau (One Health)",
  "duree": "2 heures (Séance paire S22)",
  "contexte": "Dans certains élevages intensifs du monde, des tonnes d'antibiotiques ont été administrées quotidiennement aux animaux sains pour accélérer leur croissance. Quelques années plus tard, des bactéries porteuses de gènes de résistance absolue aux antibiotiques de dernier recours (comme le gène mcr-1 conférant la résistance à la colistine) ont été retrouvées dans des rivières et chez des patients hospitalisés n'ayant jamais pris ce médicament. Comment ce phénomène s'est-il propagé ?",
  "problematique": "Comment les mécanismes de sélection naturelle et de transfert horizontal de gènes disséminent-ils l'antibiorésistance à l'échelle de la planète entière ?",
  "obstacle": {
    "conception_fausse": "Les antibiotiques créent la résistance en modifiant eux-mêmes les gènes des bactéries.",
    "rupture_didactique": "La mutation de résistance préexiste par hasard avant tout contact avec le médicament : l'antibiotique ne crée rien, il se contente d'éliminer la concurrence sensible et de sélectionner le mutant."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Rapport d'Enquête Sanitaire Mondiale pour l'OMS et l'Europe",
    "consigne": "En exploitant les données de surveillance environnementale de la filière porcine (Doc 1) et les mécanismes génétiques de transfert de plasmides (Doc 2), reconstituez la chaîne épidémiologique complète reliant l'usage vétérinaire préventif à l'impasse thérapeutique humaine. Rédigez un plan d'action interministériel justifiant l'interdiction des antibiotiques promoteurs de croissance et le renforcement de la filière Cyclamed pour les médicaments périmés.",
    "coups_de_pouce": {
      "niveau_1_methode": "Décomposez les 3 étapes évolutives : 1. Mutation aléatoire rare préexistante -> 2. Sélection par pression antibiotique massive -> 3. Multiplication et dispersion environnementale.",
      "niveau_2_indice": "Les bactéries ne se transmettent pas seulement les gènes par division cellulaire (transfert vertical) : elles peuvent aussi s'échanger des petits anneaux d'ADN appelés plasmides par simple contact (conjugaison bactérienne = transfert horizontal), y compris entre espèces bactériennes différentes !",
      "niveau_3_notion": "Lisiers épandus dans les champs -> ruissellement vers les nappes et cours d'eau -> contamination des légumes et de la chaîne alimentaire. C'est l'illustration parfaite du principe 'Une seule santé' (One Health) : la surconsommation dans les fermes tue des patients dans les hôpitaux urbains."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, relever la proportion de bactéries résistantes trouvées dans les lisiers d'élevages traités aux antibiotiques.",
        "competence": "D4.2",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, expliquer comment une bactérie inoffensive peut transmettre son gène de résistance à une bactérie hautement pathogène par transfert de plasmide.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Décrire le trajet suivi par les résidus d'antibiotiques depuis la cuvette des toilettes ou les étables jusqu'aux rivières.",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Expliquer pourquoi jeter ses vieux antibiotiques à la poubelle ou dans l'évier aggrave l'antibiorésistance mondiale.",
        "competence": "D5",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Surveillance de la dissémination du gène mcr-1 (Anses / The Lancet Infectious Diseases)",
      "contenu": "Découverte en 2015 du gène mcr-1 conférant la résistance à la colistine (antibiotique de dernier recours humain) : présent dans 20 % des élevages porcins chinois où la colistine était ajoutée à l'alimentation comme facteur de croissance. Deux ans plus tard : détection du gène dans les eaux usées de 30 pays et chez des patients en réanimation sans lien avec les élevages."
    },
    {
      "numero": "Doc 2",
      "titre": "Transfert horizontal de gènes par conjugaison plasmidique",
      "contenu": "Contrairement aux animaux, les bactéries s'échangent des gènes entre individus de la même génération via des pilis sexuels. Le plasmide portant le gène de résistance est dupliqué et transféré en quelques minutes d'une bactérie non pathogène de l'environnement (ex. Pseudomonas) à une bactérie provoquant des méningites ou des pneumonies (ex. Klebsiella pneumoniae)."
    }
  ],
  "grille_lsu": {
    "D4_1": {
      "MI": "Attribue à l'antibiotique un rôle mutagène intentionnel.",
      "MF": "Mécanisme de sélection mal expliqué.",
      "MS": "Démonstration nette du rôle de filtre sélectif de l'antibiotique sur des mutations préexistantes.",
      "TBM": "Analyse évolutive experte associant sélection darwinienne et transfert horizontal plasmidique."
    },
    "D5": {
      "MI": "Aucune mesure citoyenne.",
      "MF": "Mesures incomplètes.",
      "MS": "Justification claire de la filière Cyclamed et de la réglementation vétérinaire stricte.",
      "TBM": "Engagement citoyen remarquable incarnant la vision écosystémique One Health."
    }
  }
},

  "A3-HPVC": {
  "id": "A3-HPVC",
  "niveau": "3e",
  "titre": "Épidémiologie et vaccination contre le Papillomavirus (HPV) : données mondiales et revue par les pairs",
  "duree": "2 heures (Séance paire S24)",
  "contexte": "Les papillomavirus humains (HPV) sont responsables chaque année en France de plus de 6 400 nouveaux cas de cancers (col de l'utérus, gorge, anus) chez les femmes et les hommes. En Australie, grâce à une politique vaccinale gratuite précoce ciblant filles et garçons dès l'âge de 12 ans, ces cancers ont chuté de près de 90 % et le pays est en passe d'éradiquer totalement le cancer du col. Pourquoi vacciner filles et garçons dès le collège ?",
  "problematique": "Comment l'analyse critique de publications scientifiques évaluées par les pairs démontre-t-elle l'efficacité et l'innocuité de la vaccination HPV ?",
  "obstacle": {
    "conception_fausse": "Le vaccin HPV ne sert à rien chez les garçons puisqu'ils n'ont pas d'utérus.",
    "rupture_didactique": "Les garçons transmettent le virus et développent près de 25 % des cancers induits par le HPV (cancers ORL et anogénitaux) : la protection de la population nécessite une immunité collective globale."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Mission Journaliste Scientifique pour The Lancet Jeunesse",
    "consigne": "En analysant l'extrait de l'étude épidémiologique australienne publiée dans The Lancet (Doc 1) et les données françaises de couverture vaccinale (Doc 2), démontrez pourquoi la campagne nationale de vaccination gratuite menée en classe de 5e est une mesure de santé publique majeure. Vous expliquerez la méthodologie rigoureuse de l'évaluation par les pairs (peer review) qui garantit la fiabilité de ces résultats face aux fausses informations qui circulent en ligne.",
    "coups_de_pouce": {
      "niveau_1_methode": "Comparez dans un tableau les taux de couverture vaccinale et l'incidence des lésions précancéreuses entre l'Australie (vaccination universelle) et les pays à faible couverture.",
      "niveau_2_indice": "En Australie, dès que la couverture vaccinale a dépassé 80 % chez les filles et les garçons, la prévalence des souches HPV 16 et 18 a chuté de plus de 92 %, protégeant même les personnes non vaccinées par effet d'immunité de groupe !",
      "niveau_3_notion": "La 'revue par les pairs' signifie qu'avant publication dans The Lancet, des experts indépendants vérifient l'absence de biais, la taille colossale des échantillons (plus d'un million de patientes suivies) et la reproductibilité des statistiques. Ce processus élimine les opinions sans fondement scientifique."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, relever l'évolution du taux de lésions précancéreuses du col de l'utérus en Australie entre 2007 (début de la vaccination) et aujourd'hui.",
        "competence": "D4.2",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, expliquer pourquoi la vaccination protège également les garçons et protège l'ensemble de la société (immunité de groupe).",
        "competence": "D4.1",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Définir ce qu'est la 'revue par les pairs' et expliquer pourquoi un article scientifique révisé a plus de valeur qu'une vidéo sur les réseaux sociaux.",
        "competence": "D1.3",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Rédiger un message clair incitant à la vaccination au collège fondé sur des arguments scientifiques.",
        "competence": "D5",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Étude de cohorte nationale australienne (The Lancet Oncology)",
      "contenu": "Suivi de 1,4 million de jeunes filles et garçons vaccinés entre 12 et 13 ans par le vaccin 9-valent. Résultats après 10 ans : diminution de 93 % des infections persistantes par HPV 16/18 ; diminution de 88 % des lésions précancéreuses de haut grade. Aucun signal d'effet secondaire grave identifié sur 15 ans de recul mondial."
    },
    {
      "numero": "Doc 2",
      "titre": "Données françaises et bénéfices chez les garçons (Haute Autorité de Santé)",
      "contenu": "En France, la couverture vaccinale n'était que de 41 % chez les filles et 13 % chez les garçons en 2022. Près d'un tiers des cancers liés aux HPV surviennent chez les hommes (cancers oropharyngés en forte augmentation). La vaccination des deux sexes avant le début de la vie sexuelle bloque la transmission interhumaine du virus dans toute la population."
    }
  ],
  "grille_lsu": {
    "D4_2": {
      "MI": "Données chiffrées ignorées.",
      "MF": "Lecture de pourcentages imprécise.",
      "MS": "Exploitation quantitative rigoureuse démontrant la chute drastique des cancers.",
      "TBM": "Analyse épidémiologique experte avec comparaison internationale documentée."
    },
    "D1_3": {
      "MI": "Confond science et croyance.",
      "MF": "Explication superficielle du peer review.",
      "MS": "Démonstration solide de l'importance de l'évaluation par les pairs pour garantir la vérité scientifique.",
      "TBM": "Esprit critique d'exception distinguant démarche de preuve et fausses controverses antivax."
    },
    "D5": {
      "MI": "Refus du débat citoyen.",
      "MF": "Avis évasif.",
      "MS": "Argumentation citoyenne claire en faveur de la campagne vaccinale scolaire.",
      "TBM": "Plaidoyer de santé publique remarquable incarnant la solidarité et l'éthique médicale."
    }
  }
},

  "A3-CONS": {
  "id": "A3-CONS",
  "niveau": "3e",
  "titre": "Égalité, consentement et bioéthique : analyse juridique et psychosociale de cas réels",
  "duree": "1 heure (Séance impaire S30)",
  "contexte": "À l'ère des réseaux sociaux et des premières relations amoureuses, les adolescents sont confrontés à des pressions fortes : diffusion d'images intimes sans accord (revenge porn), chantage affectif, ou comportements déplacés lors de soirées festives. Que prévoit précisément la législation française pour protéger chaque personne et quand le consentement est-il juridiquement nul et non avenu ?",
  "problematique": "Comment analyser les situations de vie pour identifier les atteintes au consentement, les infractions pénales et les recours de protection ?",
  "obstacle": {
    "conception_fausse": "Si une personne ne se débat pas, ne crie pas ou n'a pas dit non clairement, elle était d'accord.",
    "rupture_didactique": "La science psychiatrique et le droit pénal reconnaissent l'état de sidération : l'absence de consentement est caractérisée dès lors qu'il n'y a pas accord explicite, conscient et libre."
  },
  "voie1_autonome": {
    "titre": "Tâche Complexe — Mission Commission Éthique et Juridique des Mineurs",
    "consigne": "En vous appuyant sur le Code pénal (Doc 1) et les situations concrètes analysées par la justice (Doc 2), examinez trois cas pratiques d'adolescents. Pour chacun, déterminez si le consentement est valide ou absent, qualifiez l'infraction éventuelle (atteinte à la vie privée, agression, contrainte morale), et formulez les réponses d'aide et les voies de recours judiciaires existantes pour protéger les victimes.",
    "coups_de_pouce": {
      "niveau_1_methode": "Pour chaque situation, posez-vous les trois questions clés : 1. La personne avait-elle sa pleine lucidité (alcool, drogue, âge) ? 2. A-t-elle subi une pression, un chantage ou une surprise ? 3. Son accord a-t-il été formulé librement et avec enthousiasme ?",
      "niveau_2_indice": "Cas 1 : Partager une photo intime reçue en privé sans l'accord de la personne est un délit puni de 2 ans de prison et 60 000 € d'amende (article 226-2-1). Même si la personne avait envoyé la photo au départ, le consentement à l'envoi n'est PAS un consentement à la diffusion.",
      "niveau_3_notion": "La loi du 21 avril 2021 a renforcé la protection des mineurs : tout acte sexuel entre un majeur et un mineur de moins de 15 ans est considéré comme une infraction sans qu'il soit besoin de prouver la contrainte. En cas de détresse : numéro 3018 (violences numériques) et 119 (enfance en danger)."
    }
  },
  "voie2_guidee": {
    "titre": "Parcours Pas-à-Pas Guidé",
    "etapes": [
      {
        "id": "E1",
        "consigne": "À partir du Document 1, citer les peines encourues pour la diffusion non consentie de photos ou vidéos à caractère intime sur internet.",
        "competence": "D5",
        "points": 2
      },
      {
        "id": "E2",
        "consigne": "À l'aide du Document 2, analyser la situation de Léa et expliquer pourquoi le chantage affectif exercé sur elle invalide tout consentement.",
        "competence": "D5",
        "points": 2.5
      },
      {
        "id": "E3",
        "consigne": "Expliquer ce qu'est le réflexe de sidération psychologique et pourquoi l'absence de cris ne signifie en rien que la victime était consentante.",
        "competence": "D1.3",
        "points": 2.5
      },
      {
        "id": "E4",
        "consigne": "Bilan : Noter les deux numéros d'urgence gratuits (3018 et 119) et expliquer les démarches à suivre si un camarade est victime de violences.",
        "competence": "D5",
        "points": 3
      }
    ]
  },
  "documents": [
    {
      "numero": "Doc 1",
      "titre": "Législation sur le cyberharcèlement et l'intimité (Loi du 21 avril 2021)",
      "contenu": "La captation, l'enregistrement ou la diffusion de paroles ou d'images à caractère sexuel sans le consentement exprès de la personne est un délit puni de deux ans d'emprisonnement et 60 000 euros d'amende. Le cyberharcèlement en meute sur les réseaux sociaux fait l'objet de circonstances aggravantes avec confiscation des appareils et exclusion des plateformes."
    },
    {
      "numero": "Doc 2",
      "titre": "Cas pratiques de jurisprudence et compétences psychosociales",
      "contenu": "Cas A : Théo envoie à ses amis une photo dénudée reçue de son ex-petite amie. Infraction : diffusion illicite d'images intimes. Cas B : Un adolescent insiste lourdement pendant des jours en menaçant de rompre si sa partenaire refuse un rapport. Infraction : contrainte morale et absence totale de consentement libre. Cas C : Une fête alcoolisée où une personne ivre ne peut pas s'opposer. Infraction : agression sexuelle avec abus de vulnérabilité."
    }
  ],
  "grille_lsu": {
    "D5": {
      "MI": "Banalise les infractions.",
      "MF": "Connaissance partielle des lois.",
      "MS": "Qualification juridique exacte des situations et repérage des numéros d'alerte (3018, 119).",
      "TBM": "Excellence du sens moral et civique, posture protectrice exemplaire et refus absolu de toute violence."
    },
    "D1_3": {
      "MI": "Argumentation confuse.",
      "MF": "Justification morale sans base juridique.",
      "MS": "Démonstration rigoureuse reliant loi républicaine, psychologie de la sidération et respect d'autrui.",
      "TBM": "Argumentation d'une haute tenue éthique démontrant une pleine maturité relationnelle."
    }
  }
},


  "A4-TECT": {
    "id": "A4-TECT",
    "niveau": "4e",
    "titre": "TP Tectoglob3D : cartographier les zones actives et délimiter les plaques lithosphériques",
    "duree": "1 heure (Séance S6)",
    "type": "tp",
    "st": "reprise",
    "contexte": "En observant une carte du monde, les continents semblent emboîtables comme un puzzle. Dès 1912, Alfred Wegener propose la dérive des continents, mais sans pouvoir expliquer comment des blocs rocheux peuvent se déplacer. Aujourd'hui, les données sismiques et volcaniques mondiales permettent de visualiser directement les frontières actives de notre planète.",
    "problematique": "Comment la répartition mondiale des séismes et des volcans permet-elle de délimiter les plaques lithosphériques à la surface de la Terre ?",
    "obstacle": {
      "conception_fausse": "Les plaques tectoniques sont simplement les continents, et les océans ne font pas partie des plaques.",
      "rupture_didactique": "La superposition des données montre que la plupart des plaques sont mixtes (partie continentale et partie océanique, comme la plaque sud-américaine), et que certaines plaques sont entièrement océaniques (plaque Pacifique, plaque Nazca)."
    },
    "voie1_autonome": {
      "titre": "Tâche Complexe — Géomaticien au Centre Sismologique Euro-Méditerranéen (CSEM)",
      "consigne": "À l'aide du logiciel Tectoglob3D (ou des Documents 1 et 2), analysez la répartition spatiale de 10 000 séismes et de 1 500 volcans actifs récents. Vous identifierez les trois grands types de reliefs associés à ces alignements (dorsales, fosses océaniques, chaînes de montagnes), délimiterez au moins trois plaques majeures et expliquerez pourquoi les séismes ne sont pas répartis de manière uniforme.",
      "coups_de_pouce": {
        "niveau_1_methode": "Affichez successivement la couche des séismes (points de couleur selon la profondeur), puis celle des volcans actifs. Observez où ils se concentrent.",
        "niveau_2_indice": "Repérez les immenses zones calmes au centre des océans ou des continents : ce sont les plaques stables. Les zones où se concentrent les séismes forment leurs frontières.",
        "niveau_3_notion": "Constatez que les dorsales médio-océaniques forment un ruban continu de séismes superficiels (< 30 km), tandis que les fosses océaniques (ex: côte ouest de l'Amérique du Sud) présentent des séismes de plus en plus profonds (plan de Wadati-Benioff jusqu'à 700 km)."
      }
    },
    "voie2_guidee": {
      "titre": "Parcours Pas-à-Pas Guidé",
      "etapes": [
        {
          "id": "E1",
          "consigne": "Relever sur le Document 1 les trois grands types de reliefs sous-marins ou continentaux qui coïncident avec des alignements de séismes et de volcans.",
          "competence": "D4.3",
          "points": 2
        },
        {
          "id": "E2",
          "consigne": "Identifier une plaque entièrement océanique et une plaque mixte (océanique et continentale) en donnant leur nom.",
          "competence": "D1.3",
          "points": 2.5
        },
        {
          "id": "E3",
          "consigne": "Décrire la répartition des séismes au niveau de la cordillère des Andes en précisant comment varie leur profondeur d'ouest en est.",
          "competence": "D4.1",
          "points": 2.5
        },
        {
          "id": "E4",
          "consigne": "Bilan : Définir la notion de 'plaque lithosphérique' et expliquer en quoi les zones actives constituent leurs frontières.",
          "competence": "D1.3",
          "points": 3
        }
      ]
    },
    "documents": [
      {
        "numero": "Doc 1",
        "titre": "Carte mondiale de sismicité (USGS / Tectoglob3D)",
        "contenu": "Plus de 90 % de l'énergie sismique mondiale est libérée le long de ceintures étroites : la ceinture de feu du Pacifique (fosses océaniques et arcs volcaniques), le réseau mondial des dorsales médio-océaniques (65 000 km de long) et la ceinture alpine-himalayenne. Les grands boucliers continentaux (Canada, Afrique de l'Ouest, Sibérie) sont quasi-aséismiques."
      },
      {
        "numero": "Doc 2",
        "titre": "Profil de sismicité sous la fosse du Pérou-Chili (cordillère des Andes)",
        "contenu": "Distance à la fosse : 50 km -> profondeur des séismes = 20-30 km ; distance 150 km -> séismes à 80-120 km ; distance 350 km -> séismes à 250-400 km ; distance 600 km -> séismes jusqu'à 650 km. Ce plan incliné de séismes matérialise l'enfoncement de la plaque Nazca rigide dans le manteau sous la plaque Amérique du Sud."
      },
      {
        "numero": "Doc 3",
        "titre": "Les 13 plaques lithosphériques majeures",
        "contenu": "Plaques mixtes : Eurasie, Amérique du Nord, Amérique du Sud, Afrique, Indo-Australie, Antarctique. Plaques océaniques : Pacifique (la plus grande, 103 millions de km²), Nazca, Cocos, Philippines. Plaques continentales pures : quasi-inexistantes."
      }
    ],
    "grille_lsu": {
      "D4_3": {
        "MI": "Ne parvient pas à lire une carte mondiale ou à repérer les frontières.",
        "MF": "Repère les zones actives mais confond continents et plaques.",
        "MS": "Délimite correctement les plaques à partir des alignements sismiques et volcaniques.",
        "TBM": "Analyse cartographique fine, distinction rigoureuse des types de reliefs et maîtrise de Tectoglob3D."
      },
      "D1_3": {
        "MI": "Définition incomplète ou erronée d'une plaque.",
        "MF": "Définition correcte mais oublie la lithosphère rigide.",
        "MS": "Rédige une synthèse claire reliant zones actives et découpage de la lithosphère.",
        "TBM": "Argumentation scientifique exemplaire, vocabulaire géologique précis (lithosphère, dorsale, fosse, subduction)."
      }
    }
  },
  "A4-GPS": {
    "id": "A4-GPS",
    "niveau": "4e",
    "titre": "Mesurer les déplacements actuels des plaques par balises GPS spatiales",
    "duree": "1 heure (Séance S7)",
    "type": "tp",
    "st": "reprise",
    "contexte": "Pendant des décennies, le déplacement des plaques était estimé sur des millions d'années à partir du paléomagnétisme. Depuis les années 1990, des milliers de stations réceptrices GPS scellées dans la roche mesurent en temps réel leur position au millimètre près grâce aux constellations de satellites.",
    "problematique": "Comment les données satellitaires GPS prouvent-elles que les plaques bougent aujourd'hui, et comment calculer leurs vitesses relatives ?",
    "obstacle": {
      "conception_fausse": "Les plaques bougent à des vitesses comparables à celles des voitures ou des trains, ou alors elles ne bougent plus depuis la préhistoire.",
      "rupture_didactique": "Les vitesses mesurées par satellite sont de quelques centimètres par an (de l'ordre de la vitesse de pousse des ongles humains), ce qui suffit à déplacer des continents sur des millions d'années."
    },
    "voie1_autonome": {
      "titre": "Tâche Complexe — Géophysicien à la NASA Jet Propulsion Laboratory (JPL)",
      "consigne": "À partir des vecteurs de déplacement des stations GPS des Documents 1 à 3, calculez la vitesse relative de rapprochement (convergence) entre la station AREQ (Pérou) et EISL (île de Pâques), ainsi que la vitesse d'écartement (divergence) au niveau de l'Atlantique entre REYK (Islande) et KELY (Groenland). Vous schématiserez les vecteurs et démontrerez que la lithosphère océanique se forme et disparaît en continu.",
      "coups_de_pouce": {
        "niveau_1_methode": "La longueur d'une flèche GPS indique la norme de sa vitesse (en mm/an) selon l'échelle graphique. L'orientation indique le sens du déplacement dans le référentiel choisi.",
        "niveau_2_indice": "Si deux stations situées de part et d'autre d'une frontière ont des flèches qui pointent l'une vers l'autre, il y a convergence. Si elles pointent en sens opposé, il y a divergence.",
        "niveau_3_notion": "Pour la dorsale Atlantique : REYK s'éloigne vers l'est à 12 mm/an et KELY vers l'ouest à 11 mm/an. Vitesse d'ouverture totale = 12 + 11 = 23 mm/an (soit 2,3 cm/an)."
      }
    },
    "voie2_guidee": {
      "titre": "Parcours Pas-à-Pas Guidé",
      "etapes": [
        {
          "id": "E1",
          "consigne": "À l'aide du Document 1, relever la direction et la vitesse annuelle (en mm/an) du déplacement de la balise REYK située en Islande.",
          "competence": "D4.2",
          "points": 2
        },
        {
          "id": "E2",
          "consigne": "Calculer la distance en mètres dont s'ouvrira l'océan Atlantique au niveau de l'Islande en 100 000 ans, sachant que la vitesse d'écartement est de 23 mm/an.",
          "competence": "D4.2",
          "points": 2.5
        },
        {
          "id": "E3",
          "consigne": "Comparer le mouvement observé au niveau de la fosse du Pérou (Amérique du Sud) avec celui de la dorsale médio-atlantique.",
          "competence": "D4.1",
          "points": 2.5
        },
        {
          "id": "E4",
          "consigne": "Bilan : Expliquer comment les technologies spatiales modernes confirment la théorie de la tectonique des plaques.",
          "competence": "D1.3",
          "points": 3
        }
      ]
    },
    "documents": [
      {
        "numero": "Doc 1",
        "titre": "Vecteurs vitesses GPS dans le réseau mondial IGS (JPL / NASA)",
        "contenu": "Station REYK (Islande, plaque Eurasie) : déplacement vers le Nord-Est à 12,2 mm/an. Station KELY (Groenland, plaque Amérique du Nord) : déplacement vers le Nord-Ouest à 10,8 mm/an. Frontière : dorsale médio-atlantique axiale."
      },
      {
        "numero": "Doc 2",
        "titre": "Mesures GPS au niveau de la ceinture péruvienne",
        "contenu": "Station EISL (île de Pâques, plaque Nazca) : déplacement vers l'Est (N085°) à 68 mm/an. Station AREQ (Arequipa, plaque Amérique du Sud) : déplacement vers le Nord-Est (N060°) à 12 mm/an. Vitesse de convergence relative = environ 65 mm/an (soit 6,5 cm/an)."
      },
      {
        "numero": "Doc 3",
        "titre": "Ordres de grandeur des vitesses tectoniques mondiales",
        "contenu": "Ouverture la plus lente : dorsale Arctique (Gakkel) = 10 mm/an. Ouverture la plus rapide : dorsale Pacifique Est = 150 mm/an. Faille de San Andreas (coulissage) = 35 mm/an. Rapprochement Inde / Asie (collision) = 45 mm/an."
      }
    ],
    "grille_lsu": {
      "D4_2": {
        "MI": "Incapable de lire une échelle graphique ou d'effectuer le calcul.",
        "MF": "Lecture correcte mais erreur de conversion (mm en m ou cm).",
        "MS": "Calculs de vitesses relatives justes (23 mm/an et 2 300 m en 100 000 ans).",
        "TBM": "Calculs parfaits, conversions irréprochables et interprétation physique rigoureuse des ordres de grandeur."
      },
      "D1_3": {
        "MI": "Confusion entre divergence et convergence.",
        "MF": "Notions acquises mais vocabulaire approximatif.",
        "MS": "Texte explicatif clair distinguant divergence, convergence et coulissage.",
        "TBM": "Démonstration scientifique limpide reliant mesures spatiales instantanées et déformations géologiques sur les temps longs."
      }
    }
  },
  "A4-VOLC": {
    "id": "A4-VOLC",
    "niveau": "4e",
    "titre": "TP Viscosité des magmas : comparer volcanisme effusif et explosif",
    "duree": "2 heures (Séance S9)",
    "type": "tp",
    "st": "reprise",
    "contexte": "En 2021, le Piton de la Fournaise à La Réunion a offert de superbes fontaines de lave fluide sans faire de victimes. En 1902, la Montagne Pelée en Martinique a détruit la ville de Saint-Pierre en quelques minutes, causant 30 000 morts par une nuée ardente dévastatrice. Pourtant, dans les deux cas, il s'agit de magma remontant des profondeurs de la Terre.",
    "problematique": "Qu'est-ce qui détermine le caractère effusif ou explosif d'une éruption volcanique, et comment modéliser le rôle de la viscosité et des gaz ?",
    "obstacle": {
      "conception_fausse": "La lave brûlante explose parce qu'elle est plus chaude que la lave qui coule tranquillement.",
      "rupture_didactique": "L'expérimentation montre que c'est la viscosité (teneur en silice) et le piégeage des gaz sous pression qui provoquent l'explosion : un magma visqueux retient les bulles de gaz jusqu'à la pulvérisation violente, tandis qu'un magma fluide laisse les gaz s'échapper facilement."
    },
    "voie1_autonome": {
      "titre": "Tâche Complexe — Volcanologue à l'Observatoire Volcanologique du Piton de la Fournaise",
      "consigne": "En vous appuyant sur vos résultats expérimentaux (test de viscosité à la purée/sirop et tube à gaz) et sur les Documents 1 à 3, expliquez pourquoi la composition chimique du magma (silice et gaz dissous) conditionne directement le type d'éruption et le niveau d'aléa volcanique pour les populations humaines.",
      "coups_de_pouce": {
        "niveau_1_methode": "Comparez le comportement d'un liquide fluide (eau ou sirop très dilué) et d'un liquide visqueux (purée épaisse ou ketchup) lorsqu'on injecte de l'air sous pression avec une paille.",
        "niveau_2_indice": "Dans le liquide fluide, les bulles de gaz s'échappent librement à la surface sans projection violente. Dans le liquide visqueux, la pression monte jusqu'à ce que le dôme éclate en projetant des fragments solides.",
        "niveau_3_notion": "Associez chaque modèle au volcan réel : Piton de la Fournaise = basalte pauvre en silice (< 50 %), magma fluide, dégazage facile -> coulées de lave (effusif). Montagne Pelée = andésite riche en silice (> 60 %), magma visqueux, gaz piégés sous haute pression -> dôme, explosion et nuée ardente (explosif)."
      }
    },
    "voie2_guidee": {
      "titre": "Parcours Pas-à-Pas Guidé",
      "etapes": [
        {
          "id": "E1",
          "consigne": "À partir du Document 1, comparer la teneur en silice et en gaz dissous des magmas du Piton de la Fournaise et de la Montagne Pelée.",
          "competence": "D4.1",
          "points": 2
        },
        {
          "id": "E2",
          "consigne": "Réaliser le protocole expérimental de modélisation du dégazage et noter vos observations pour le liquide fluide et pour le liquide visqueux.",
          "competence": "D4.1",
          "points": 3
        },
        {
          "id": "E3",
          "consigne": "Relier les observations du modèle aux manifestations volcaniques réelles (coulées de lave vs nuées ardentes).",
          "competence": "D4.1",
          "points": 2.5
        },
        {
          "id": "E4",
          "consigne": "Bilan : Rédiger un tableau comparatif résumant caractéristiques du magma, type d'éruption et risque associé.",
          "competence": "D1.3",
          "points": 2.5
        }
      ]
    },
    "documents": [
      {
        "numero": "Doc 1",
        "titre": "Analyses géochimiques des laves (IPGP / Observatoires volcanologiques)",
        "contenu": "Basalte (Piton de la Fournaise) : Silice (SiO2) = 48 %, Température = 1 150 °C, Viscosité = 10 à 100 Pa·s (très fluide), Gaz dissous = 1 % (H2O, CO2, SO2). Andésite/Rhyolite (Montagne Pelée) : Silice (SiO2) = 63 %, Température = 850 °C, Viscosité = 10 000 à 1 000 000 Pa·s (extrêmement pâteux), Gaz dissous = 4 à 6 % sous haute pression."
      },
      {
        "numero": "Doc 2",
        "titre": "Protocole expérimental de modélisation",
        "contenu": "Matériel : Deux béchers, purée de flocons fine (visqueuse) et eau colorée (fluide), paille ou tubulure reliée à une seringue de 50 mL. Injecter 30 mL d'air à débit constant au fond de chaque bécher et observer la formation des bulles, l'expansion et les projections éventuelles."
      },
      {
        "numero": "Doc 3",
        "titre": "Dangers et aléas associés aux éruptions",
        "contenu": "Volcanisme effusif : coulées de lave progressant à quelques km/h (aléa faible pour les personnes si évacuation précoce, dégâts matériels). Volcanisme explosif : nuée ardente (mélange de gaz brûlants à 500 °C et de cendres dévalant les pentes à 300 km/h), retombées de bombes et de cendres, lahars (coulées de boue volcanique) : aléa mortel et dévastateur."
      }
    ],
    "grille_lsu": {
      "D4_1": {
        "MI": "Expérience non réalisée ou manipulations dangereuses.",
        "MF": "Expérience réalisée mais sans mise en relation rigoureuse avec le modèle géologique.",
        "MS": "Protocole bien exécuté, compte rendu précis reliant viscosité observée et type d'éruption.",
        "TBM": "Excellente rigueur expérimentale, identification claire des limites du modèle analogique."
      },
      "D1_3": {
        "MI": "Description confuse sans vocabulaire scientifique.",
        "MF": "Emploie les termes sans distinguer magma et lave.",
        "MS": "Tableau comparatif complet et rigoureux (effusif vs explosif).",
        "TBM": "Communication scientifique parfaite, distinction nette magma (profondeur + gaz) / lave (dégazée en surface)."
      }
    }
  },
  "A4-MYCO": {
    "id": "A4-MYCO",
    "niveau": "4e",
    "titre": "Les mycorhizes : symbiose racine-champignon et dopage naturel des flux nutritifs",
    "duree": "1 heure (Séance S15)",
    "type": "tp",
    "st": "nouvelle",
    "contexte": "Plus de 85 % des plantes terrestres vivent en association étroite avec des champignons microscopiques du sol au niveau de leurs racines. En forêt tempérée, les arbres connectés à ce réseau mycorhizien poussent deux à trois fois plus vite sur des sols pauvres que les arbres isolés.",
    "problematique": "Comment l'association entre une racine et un champignon microscopique permet-elle d'optimiser l'approvisionnement minéral de la plante, et que reçoit le champignon en retour ?",
    "obstacle": {
      "conception_fausse": "Les champignons sur les racines sont tous des parasites qui rendent la plante malade.",
      "rupture_didactique": "Les mycorhizes sont des symbioses à bénéfices réciproques indispensables : le champignon multiplie la surface d'absorption d'eau et de phosphore par 100, et la plante lui cède jusqu'à 20 % des sucres fabriqués par la photosynthèse."
    },
    "voie1_autonome": {
      "titre": "Tâche Complexe — Ingénieur agronome à l'INRAE",
      "consigne": "En exploitant vos observations microscopiques et les données agronomiques des Documents 1 à 3, démontrez que la mycorhization constitue une symbiose mutualiste entre l'arbre et le champignon. Vous calculerez le gain de biomasse et d'absorption de phosphore pour le plant mycorhizé, puis dessinerez un schéma fonctionnel des échanges de matière entre les deux partenaires.",
      "coups_de_pouce": {
        "niveau_1_methode": "Observez au microscope une coupe transversale de racine mycorhizée (coloration au bleu trypan) : repérez le manchon d'hyphes externes et les arbuscules à l'intérieur des cellules végétales.",
        "niveau_2_indice": "Comparez les graphiques de croissance du Document 2 : calculez le rapport entre la masse du plant mycorhizé et celle du plant témoin stérile.",
        "niveau_3_notion": "Sens des flux : Eau + Ions phosphates (PO4³⁻) et nitrates (NO3⁻) circulent du champignon vers la racine de la plante. Glucides (glucose, saccharose) issus de la photosynthèse circulent des feuilles vers les hyphes du champignon."
      }
    },
    "voie2_guidee": {
      "titre": "Parcours Pas-à-Pas Guidé",
      "etapes": [
        {
          "id": "E1",
          "consigne": "À l'aide du Document 1, décrire la structure d'une mycorhize et préciser où se situent les échanges cellulaires.",
          "competence": "D4.1",
          "points": 2
        },
        {
          "id": "E2",
          "consigne": "Calculer, à partir du Document 2, le pourcentage d'augmentation de la biomasse sèche d'un plant de pin après 6 mois d'inoculation mycorhizienne.",
          "competence": "D4.2",
          "points": 2.5
        },
        {
          "id": "E3",
          "consigne": "Indiquer ce que le champignon ne peut pas fabriquer par lui-même et expliquer pourquoi il dépend de la photosynthèse de l'arbre.",
          "competence": "D4.1",
          "points": 2.5
        },
        {
          "id": "E4",
          "consigne": "Bilan : Compléter le schéma fonctionnel montrant les flux réciproques d'eau, de sels minéraux et de matière organique.",
          "competence": "D1.3",
          "points": 3
        }
      ]
    },
    "documents": [
      {
        "numero": "Doc 1",
        "titre": "Micrographie d'une endomycorhize à arbuscules (x 400)",
        "contenu": "Les hyphes (filaments) du champignon Glomus pénètrent dans le cortex racinaire et s'invaginent dans les cellules hôtes en formant des arbuscules très ramifiés. La membrane plasmique végétale n'est jamais rompue : les échanges se font par diffusion à travers cette immense surface de contact intime."
      },
      {
        "numero": "Doc 2",
        "titre": "Expérience agronomique sur Pin d'Alep (INRAE)",
        "contenu": "Culture en sol sableux pauvre en phosphore pendant 6 mois : Plant témoin (sol désinfecté sans champignon) : biomasse sèche = 1,4 g ; teneur foliaire en phosphore = 0,8 mg. Plant mycorhizé (avec champignon Pisolithus) : biomasse sèche = 4,8 g (multipliée par 3,4) ; teneur en phosphore = 2,6 mg (multipliée par 3,25)."
      },
      {
        "numero": "Doc 3",
        "titre": "Traçage au carbone 14 radioactif (¹⁴C)",
        "contenu": "Lorsqu'on expose les aiguilles d'un arbre à du ¹⁴CO2, 20 % de la radioactivité incorporée dans les sucres est retrouvée dans le mycélium du champignon quelques heures plus tard. Le champignon, dépourvu de chlorophylle (hétérotrophe), dépend vitalement de cette source d'énergie carbonée."
      }
    ],
    "grille_lsu": {
      "D4_2": {
        "MI": "Calculs de pourcentages non réalisés ou faux.",
        "MF": "Calcul posé mais erreur de lecture sur le graphique.",
        "MS": "Calculs exacts (hausse de +243 % de biomasse et x3,25 de phosphore).",
        "TBM": "Calculs parfaits avec justifications mathématiques et interprétation biologique rigoureuse."
      },
      "D1_3": {
        "MI": "Schéma incomplet ou sans flèches de flux.",
        "MF": "Schéma correct mais oublie les éléments échangés.",
        "MS": "Schéma fonctionnel soigné avec légende complète des échanges bidirectionnels.",
        "TBM": "Schéma de synthèse remarquable, digne du lycée, intégrant le concept de symbiose mutualiste."
      }
    }
  },
  "A4-AUDI": {
    "id": "A4-AUDI",
    "niveau": "4e",
    "titre": "Protection de l'audition : décibels, cellules ciliées et surdité irréversible",
    "duree": "1 heure (Séance S27)",
    "type": "act",
    "st": "nouvelle",
    "contexte": "En France, plus de 70 % des adolescents écoutent de la musique au casque ou avec des écouteurs intra-auriculaires plus de 2 heures par jour. Les urgences ORL constatent une recrudescence alarmante d'acouphènes permanents et de pertes auditives précoces dès l'âge de 15 ans.",
    "problematique": "Comment les sons trop forts ou trop prolongés détruisent-ils les récepteurs sensoriels de l'oreille, et comment appliquer les règles de prévention ?",
    "obstacle": {
      "conception_fausse": "Si on écoute trop fort et que nos oreilles sifflent, ce n'est pas grave car les cellules de l'oreille repoussent comme les cheveux ou la peau.",
      "rupture_didactique": "Les cellules ciliées de la cochlée sont en nombre strictement limité (environ 15 000 à la naissance) et ne se renouvellent JAMAIS : toute cellule ciliée détruite par un traumatisme acoustique est perdue définitivement."
    },
    "voie1_autonome": {
      "titre": "Tâche Complexe — Ambassadeur Santé Publique pour la Semaine du Son",
      "consigne": "En exploitant les données des Documents 1 à 3, rédigez une fiche d'information pour le carnet de correspondance du collège. Vous expliquerez le fonctionnement des récepteurs sensoriels de la cochlée, démontrerez à l'aide de calculs pourquoi écouter de la musique à 100 dB pendant 15 minutes équivaut à 8 heures d'exposition à 85 dB (règle des 3 dB), et formulerez 3 recommandations comportementales concrètes.",
      "coups_de_pouce": {
        "niveau_1_methode": "L'échelle des décibels est logarithmique : chaque augmentation de 3 dB correspond à un DOUBLEMENT de la puissance sonore reçue par l'oreille.",
        "niveau_2_indice": "85 dB = 8 h maximum par jour sans danger. 88 dB = 4 h max. 91 dB = 2 h max. Continuez la progression pour trouver le temps maximal autorisé à 100 dB.",
        "niveau_3_notion": "À 100 dB, la durée maximale d'exposition sans risque est de seulement 15 minutes. Observez sur les micrographies du Document 2 l'arrachement des cils et la mort cellulaire des cellules ciliées."
      }
    },
    "voie2_guidee": {
      "titre": "Parcours Pas-à-Pas Guidé",
      "etapes": [
        {
          "id": "E1",
          "consigne": "À l'aide du Document 1, relever le seuil de danger pour l'oreille humaine et indiquer le niveau sonore maximal bridé d'un smartphone.",
          "competence": "D4.2",
          "points": 2
        },
        {
          "id": "E2",
          "consigne": "Comparer les micrographies du Document 2 et décrire les altérations subies par les cellules ciliées après un concert à fort volume.",
          "competence": "D4.1",
          "points": 2.5
        },
        {
          "id": "E3",
          "consigne": "Calculer le temps d'exposition toléré à 94 dB sachant que la durée de sécurité est divisée par 2 tous les 3 dB (en partant de 8h à 85 dB).",
          "competence": "D4.2",
          "points": 2.5
        },
        {
          "id": "E4",
          "consigne": "Bilan : Énoncer la règle des '30-30-30' ou 3 règles d'or pour protéger son capital auditif au quotidien.",
          "competence": "D5",
          "points": 3
        }
      ]
    },
    "documents": [
      {
        "numero": "Doc 1",
        "titre": "Échelle des décibels (dB) et durées limites d'exposition (INRS)",
        "contenu": "0 dB = seuil d'audibilité ; 40 dB = bibliothèque silencieuse ; 60 dB = conversation normale ; 85 dB = seuil de risque professionnel (8 h/j max) ; 88 dB = 4 h max ; 91 dB = 2 h max ; 94 dB = 1 h max ; 97 dB = 30 min max ; 100 dB = baladeur au volume max (15 min max) ; 105 dB = concert / discothèque (5 min max) ; 120 dB = seuil de douleur immédiate (réacteur d'avion à 50 m)."
      },
      {
        "numero": "Doc 2",
        "titre": "Micrographie électronique à balayage de la cochlée humaine (x 2 500)",
        "contenu": "Cochlée saine : les cellules ciliées externes sont alignées en 3 rangées régulières en forme de V parfait, avec leurs stéréocils dressés et intacts. Cochlée après traumatisme acoustique : cils fusionnés, pliés, cisaillés, et zones chauves où les cellules ciliées sont mortes et remplacées par une cicatrice fibreuse non conductrice."
      },
      {
        "numero": "Doc 3",
        "titre": "Symptômes d'alerte et surdité irréversible",
        "contenu": "Les acouphènes (bourdonnements, sifflements aigus permanents) et l'hyperacousie (douleur aux sons du quotidien) sont les premiers signes de destruction des fibres du nerf auditif. Aucun traitement médical ou chirurgical ne peut faire repousser une cellule ciliée humaine."
      }
    ],
    "grille_lsu": {
      "D4_2": {
        "MI": "Incapable d'exploiter la règle des 3 dB.",
        "MF": "Comprend le doublement mais se trompe sur le temps limite.",
        "MS": "Calcul exact : à 94 dB le temps limite est de 1 heure (à 100 dB : 15 min).",
        "TBM": "Maîtrise remarquable de l'échelle logarithmique et conversion parfaite temps/décibels."
      },
      "D5": {
        "MI": "Aucune recommandation citoyenne pertinente.",
        "MF": "Conseils vagues ('baisser le son').",
        "MS": "Formule 3 règles comportementales précises (volume à 60%, pauses de 10 min par heure, bouchons en concert).",
        "TBM": "Posture d'ambassadeur de santé publique exemplaire, argumentation civique et scientifique percutante."
      }
    }
  },
  "A3-DENS": {
    "id": "A3-DENS",
    "niveau": "3e",
    "titre": "TP Masse volumique des roches : tester les roches du bâti et comprendre la flottabilité lithosphérique",
    "duree": "2 heures (Séance S2)",
    "type": "tp",
    "st": "nouvelle",
    "contexte": "Dans nos villes, les marches d'escalier sont en granite, les façades des églises sont en calcaire et les pavés de rue en basalte. En classe, un élève affirme que 'toutes les pierres pèsent pareil parce que c'est du caillou'. En géologie, la masse volumique des roches explique pourtant pourquoi la croûte continentale s'élève au-dessus du niveau marin alors que la croûte océanique s'enfonce.",
    "problematique": "Comment mesurer expérimentalement la masse volumique de différentes roches terrestres et relier ces valeurs à la formation des reliefs du globe terrestre ?",
    "obstacle": {
      "conception_fausse": "La masse volumique dépend de la taille du morceau de roche prélevé (un gros caillou a une plus grande masse volumique qu'un petit).",
      "rupture_didactique": "La masse volumique ρ = m / V est une propriété intrinsèque de la matière rocheuse, constante quelle que soit la taille de l'échantillon, et directement liée aux minéraux qui la composent."
    },
    "voie1_autonome": {
      "titre": "Tâche Complexe — Géomatériaux et Géophysique au BRGM",
      "consigne": "En utilisant la balance électronique et l'éprouvette graduée par déplacement d'eau, mesurez la masse m et le volume V de trois échantillons de roches (granite, basalte, calcaire). Calculez leur masse volumique en g/cm³ et en kg/m³. En exploitant le Document 3, expliquez pourquoi la croûte continentale (granitique) 'flotte' plus haut sur le manteau que la croûte océanique (basaltique) selon le principe d'Archimède (isostasie).",
      "coups_de_pouce": {
        "niveau_1_methode": "Pour mesurer le volume V d'un caillou de forme quelconque : versez un volume initial V1 d'eau dans l'éprouvette (ex: 50 mL). Immergez délicatement la roche attachée à un fil. Notez le volume final V2. Le volume de la roche est V = V2 - V1 (sachant que 1 mL = 1 cm³).",
        "niveau_2_indice": "Appliquez la formule ρ = m / V. N'oubliez pas les unités : m en grammes (g), V en cm³, donc ρ en g/cm³. Pour convertir en kg/m³, multipliez par 1 000.",
        "niveau_3_notion": "Valeurs théoriques attendues : Calcaire ≈ 2,4 à 2,6 g/cm³ ; Granite ≈ 2,7 g/cm³ (2 700 kg/m³) ; Basalte ≈ 3,0 g/cm³ (3 000 kg/m³) ; Péridotite du manteau ≈ 3,3 g/cm³ (3 300 kg/m³). La croûte continentale moins dense que la croûte océanique s'enfonce moins dans le manteau sous-jacent."
      }
    },
    "voie2_guidee": {
      "titre": "Parcours Pas-à-Pas Guidé",
      "etapes": [
        {
          "id": "E1",
          "consigne": "Réaliser la pesée de chaque échantillon à la balance de précision et consigner la masse m (en g) dans un tableau de mesures.",
          "competence": "D4.1",
          "points": 2
        },
        {
          "id": "E2",
          "consigne": "Mesurer le volume V de chaque échantillon par déplacement d'eau dans une éprouvette graduée de 100 mL.",
          "competence": "D4.1",
          "points": 2.5
        },
        {
          "id": "E3",
          "consigne": "Calculer la masse volumique ρ = m / V pour le granite et le basalte en précisant les unités.",
          "competence": "D4.2",
          "points": 2.5
        },
        {
          "id": "E4",
          "consigne": "Bilan : Comparer la masse volumique du granite (2,7) et du basalte (3,0) à celle du manteau (3,3) et expliquer l'altitude élevée des continents.",
          "competence": "D1.3",
          "points": 3
        }
      ]
    },
    "documents": [
      {
        "numero": "Doc 1",
        "titre": "Protocole expérimental de déplacement d'eau",
        "contenu": "Matériel : Balance au dixième de gramme, éprouvette graduée en verre de 100 mL ou 250 mL, fil nylon, coupelle, eau distillée. Formule : ρ = m / V. Rappel : 1 mL = 1 cm³ = 10⁻⁶ m³."
      },
      {
        "numero": "Doc 2",
        "titre": "Composition minéralogique et densité des roches",
        "contenu": "Granite (croûte continentale) : quartz (d=2,65), feldspaths (d=2,56), micas (d=2,8). Masse volumique globale = 2,7 g/cm³. Basalte / Gabbro (croûte océanique) : plagioclase, pyroxènes (d=3,4), olivine (d=3,3). Masse volumique globale = 3,0 g/cm³. Péridotite (manteau lithosphérique) : olivine (60%) et pyroxènes (40%). Masse volumique globale = 3,3 g/cm³."
      },
      {
        "numero": "Doc 3",
        "titre": "L'isostasie : équilibre de flottabilité des enveloppes terrestres",
        "contenu": "La lithosphère rigide repose en équilibre hydrostatique sur l'asthénosphère déformable plus dense (3,3 g/cm³). Tout comme un bloc de bois de pin (moins dense) émerge davantage au-dessus de l'eau qu'un bloc de chêne (plus dense), la croûte continentale granitique épaisse (30 à 70 km) et légère (2,7 g/cm³) culmine en moyenne à +840 m d'altitude, tandis que la croûte océanique dense (3,0 g/cm³) s'enfonce sous -3 800 m d'eau."
      }
    ],
    "grille_lsu": {
      "D4_1": {
        "MI": "Mesures non réalisées ou éprouvette cassée.",
        "MF": "Mesures approximatives sans lecture correcte du ménisque d'eau.",
        "MS": "Protocole expérimental mené avec rigueur et sécurité, tableau de valeurs complet.",
        "TBM": "Excellente précision des mesures expérimentales (calcul d'incertitude apprécié)."
      },
      "D4_2": {
        "MI": "Formule fausse ou calculs inexistants.",
        "MF": "Formule connue mais erreur dans les unités.",
        "MS": "Calculs de masse volumique justes (ρ granite ≈ 2,7 g/cm³, ρ basalte ≈ 3,0 g/cm³).",
        "TBM": "Conversions parfaites g/cm³ <-> kg/m³, raisonnement mathématique et physique impeccable."
      }
    }
  },
  "A3-TCA": {
    "id": "A3-TCA",
    "niveau": "3e",
    "titre": "Troubles des conduites alimentaires (TCA) : neurobiologie, santé mentale et compétences psychosociales",
    "duree": "1 heure (Séance S19)",
    "type": "act",
    "st": "nouvelle",
    "contexte": "À l'adolescence, les bouleversements pubertaires et la pression des réseaux sociaux (normes corporelles irréalistes, filtres d'image) fragilisent l'estime de soi. En France, l'anorexie mentale et la boulimie touchent près de 5 % des collégiens et lycéens, avec une détresse psychologique et physique majeure.",
    "problematique": "Quels sont les mécanismes biologiques et psychologiques à l'origine des TCA, et comment les compétences psychosociales (CPS) permettent-elles de s'en préserver et d'aider un camarade ?",
    "obstacle": {
      "conception_fausse": "L'anorexie ou la boulimie sont juste des 'caprices d'adolescent qui veut faire un régime' ou un manque de volonté.",
      "rupture_didactique": "Les TCA sont de véritables pathologies médicales et psychiatriques impliquant un dérèglement des circuits cérébraux de la récompense, des hormones de la faim (ghréline, leptine) et de la perception de son propre corps (cortex insulaire)."
    },
    "voie1_autonome": {
      "titre": "Tâche Complexe — Rédaction d'un guide santé pour le Comité d'Éducation à la Santé et à la Citoyenneté (CESCE)",
      "consigne": "En analysant les données médicales et neurobiologiques des Documents 1 à 3, rédigez un livret d'information destiné aux collégiens. Vous démontrerez que les TCA ne sont pas un choix mais des maladies neurobiologiques complexes, décrirez les signaux d'alerte physiques et psychologiques, et présenterez les personnes ressources et dispositifs d'aide disponibles dans et hors du collège.",
      "coups_de_pouce": {
        "niveau_1_methode": "Distinguez l'anorexie mentale (privation alimentaire sévère, peur intense de grossir malgré un poids très faible) et la boulimie (crises d'ingestion massive incontrôlée suivies de vomissements ou de purges).",
        "niveau_2_indice": "Expliquez comment la dénutrition modifie le cerveau : la privation perturbe la production de sérotonine et de dopamine, ce qui aggrave l'anxiété et enferme la personne dans un cercle vicieux.",
        "niveau_3_notion": "Ressources à mentionner : infirmière scolaire, médecin scolaire, psychologue de l'Éducation nationale (Psy-EN), Maison des Adolescents (MDA), ligne d'écoute nationale anonyme et gratuite 'Fil Santé Jeunes' (3224)."
      }
    },
    "voie2_guidee": {
      "titre": "Parcours Pas-à-Pas Guidé",
      "etapes": [
        {
          "id": "E1",
          "consigne": "À l'aide du Document 1, définir l'anorexie mentale et la boulimie en relevant leurs symptômes principaux.",
          "competence": "D1.3",
          "points": 2
        },
        {
          "id": "E2",
          "consigne": "À partir du Document 2, expliquer comment les réseaux sociaux peuvent altérer l'image corporelle et déclencher un comportement de restriction.",
          "competence": "D5",
          "points": 2.5
        },
        {
          "id": "E3",
          "consigne": "Identifier sur le Document 3 les conséquences médicales graves de la dénutrition sur le cœur, les os et le cerveau.",
          "competence": "D4.1",
          "points": 2.5
        },
        {
          "id": "E4",
          "consigne": "Bilan : Citer 3 personnes ou organismes vers lesquels orienter un camarade en souffrance.",
          "competence": "D5",
          "points": 3
        }
      ]
    },
    "documents": [
      {
        "numero": "Doc 1",
        "titre": "Critères diagnostiques des TCA (Haute Autorité de Santé - HAS)",
        "contenu": "Anorexie mentale : restriction drastique des apports énergétiques menant à un poids significativement bas (IMC < 17), peur intense de prendre du poids, altération de la perception du corps (dysmophophobie). Boulimie : épisodes récurrents de crises d'hyperphagie incontrôlée au moins 1 fois par semaine pendant 3 mois, accompagnés de comportements compensatoires inappropriés (vomissements provoqués, laxatifs, jeûne)."
      },
      {
        "numero": "Doc 2",
        "titre": "Étude Inserm sur l'impact des algorithmes de recommandation",
        "contenu": "Chez les adolescents passant plus de 3 heures par jour sur les réseaux sociaux d'images, le risque d'insatisfaction corporelle est multiplié par 2,4. L'exposition répétée à des corps retouchés crée un biais cognitif où la norme naturelle est perçue comme anormale."
      },
      {
        "numero": "Doc 3",
        "titre": "Conséquences physiologiques et prise en charge médicale",
        "contenu": "Dénutrition sévère : bradycardie (cœur qui bat trop lentement, < 45 bpm), risque d'arrêt cardiaque par hypokaliémie (chute du potassium), ostéoporose précoce, arrêt des cycles menstruels (aménorrhée), isolement social. Prise en charge : elle n'est jamais punitive mais repose sur une alliance thérapeutique (médecin, nutritionniste, psychologue, famille)."
      }
    ],
    "grille_lsu": {
      "D5": {
        "MI": "Jugements moralisateurs ou déni de la gravité médicale.",
        "MF": "Reconnaît la maladie mais propose des solutions inadaptées.",
        "MS": "Postulat bienveillant, identification claire des personnes ressources et des lignes d'aide.",
        "TBM": "Remarquable maturité citoyenne et empathique, promotion exemplaire des compétences psychosociales."
      },
      "D1_3": {
        "MI": "Texte confus ou incomplet.",
        "MF": "Vocabulaire médical basique sans explication.",
        "MS": "Texte clair, structuré, distinguant rigoureusement anorexie et boulimie.",
        "TBM": "Qualité de communication exceptionnelle, adaptée aux pairs, ton juste et scientifique."
      }
    }
  },
};
