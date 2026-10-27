/* Programmation SVT 4e — nouveaux programmes cycle 4 (projet CSP juillet 2025)
   44 semaines : semaines impaires = 1 h, semaines paires = 2 h (66 h).
   st : "reprise" | "adaptee" | "nouvelle"
   res : "pdf:<niveau>/<fichier>" | "html:<chemin svt-2027>" | "s:<niveau>/<id séance svt-2027>" | "pack:<pack skillsvt>" | "web:<url>|<libellé>" */
window.PROG = window.PROG || { levels: {}, activites: {} };
PROG.levels["4e"] = {
  label: "4e",
  titre: "Classe de quatrième",
  couleur: "#1565c0",
  filRouge: "Comment la dynamique de la Terre et les métabolismes du vivant s’articulent-ils dans les cycles biogéochimiques, et comment notre organisme s’approvisionne-t-il, se défend-il et vit-il sa puberté et sa sexualité ?",
  fds: "Faire des sciences (4e) : distinguer une démarche scientifique d’une démarche pseudo-scientifique ; identifier les biais et limites des outils numériques/IA ; éprouver les faits face aux croyances et fake news ; valoriser les figures féminines de la recherche.",
  femmes: ["Marie Tharp (cartographie des dorsales océaniques)", "Katia Krafft (volcanologie et risques)", "Françoise Barré-Sinoussi (prix Nobel pour la découverte du VIH)", "Odile Fillod (modélisation anatomique 3D du clitoris)", "Eunice Newton Foote (pionnière de l’effet de serre du CO2, 1856)"],
  themes: [
    {
      code: "T1", titre: "Thème 1 — Terre et vivant", officiel: "Partie « Terre et vivant »",
      parties: [
        {
          code: "P1", titre: "Partie 1 — La Terre, planète habitable : le cycle du carbone", officiel: "Thème « La Terre, planète habitable »", couleur: "#0277bd",
          problematique: "Depuis le début de l’ère industrielle en 1850, l’humanité extrait massivement du charbon, du pétrole et du gaz. Comment ce carbone fossile enfoui depuis des millions d’années perturbe-t-il l’ensemble des réservoirs de la planète et accélère-t-il le réchauffement global ?",
          ancrage: "Données de l’observatoire du Mauna Loa (courbe de Keeling), réanalyses Copernicus ERA5, bilan carbone de notre quotidien.",
          lien: "En 5e, les élèves ont découvert les flux et temps de résidence avec le cycle de l’eau. En 4e, ce même outil conceptuel est appliqué au carbone pour comprendre le forçage anthropique.",
          attendus: ["Identifier les différentes formes chimiques du carbone dans ses réservoirs", "Donner des ordres de grandeur des temps de résidence et des flux", "Relier perturbations anthropiques des flux et réchauffement actuel"],
          chapitres: [
            {
              code: "I", titre: "Les formes et réservoirs du carbone", pb: "Sous quelles formes trouve-t-on le carbone sur Terre et où est-il stocké ?",
              sections: [
                { code: "A", titre: "Les formes chimiques dans les grands réservoirs", seances: [
                  { s: 1, h: 1, type: "tp", st: "nouvelle", titre: "Situation d’appel & TP : traquer le carbone dans la classe",
                    q: "Sous quelles formes le carbone est-il présent dans notre environnement immédiat ?",
                    desc: "- Déclencheur : comparaison d’un morceau de charbon, d’une coquille de calcaire, d’un végétal et d’une fiole d’air.\n- TP expérimental : mise en évidence du carbone dans la biomasse (carbonisation douce d’un végétal), dans la lithosphère (effervescence à l’HCl sur calcaire libérant du CO2) et dans l’atmosphère (eau de chaux).\n- Identification des composants principaux : CO2 et CH4 (atmosphère), calcaire CaCO3 (lithosphère), matière organique (biosphère), bicarbonates dissous (hydrosphère).",
                    comp: ["D4.1", "D1.3"], res: ["web:https://gml.noaa.gov/ccgg/trends/|NOAA — Courbe de Keeling"] }
                ]},
                { code: "B", titre: "Flux et temps de résidence", seances: [
                  { s: 2, h: 2, type: "tc", st: "nouvelle", titre: "Tâche complexe & Tableur : modéliser le cycle du carbone naturel",
                    q: "Pourquoi certains réservoirs mettent-ils des millions d’années à se renouveler alors que d’autres changent en quelques années ?",
                    desc: "- Exploitation de données chiffrées réelles (en Gt de carbone et Gt/an) issues du GIEC.\n- Au tableur : calcul des temps de résidence (réservoir / flux sortant). Comparaison : atmosphère (quelques années), biosphère (décennies), lithosphère (dizaines de millions d’années).\n- Notion de cycle biogéochimique équilibré avant 1850.\n- Parcours différencié avec 3 niveaux de coups de pouce.",
                    comp: ["D4.2", "D4.1", "D1.3"], act: "A4-CARB" }
                ]}
              ]
            },
            {
              code: "II", titre: "L’impact des activités humaines sur le cycle", pb: "En quoi les activités humaines transforment-elles un cycle naturel équilibré en réchauffement climatique rapide ?",
              sections: [
                { code: "A", titre: "L’injection de carbone fossile dans l’atmosphère", seances: [
                  { s: 3, h: 1, type: "act", st: "reprise", titre: "Combustion des énergies fossiles et déséquilibre des flux",
                    q: "Que devient le carbone libéré par la combustion du charbon et du pétrole ?",
                    desc: "- Exploitation de données réelles d’émissions mondiales depuis 1850.\n- Expérience : combustion d’une bougie ou d’hydrocarbure et capture du CO2 dans l’eau de chaux.\n- Mise en relation de la hausse de [CO2] atmosphérique (280 ppm à 425 ppm) avec l’extraction des réserves lithosphériques fossiles.\n- Hommage : Eunice Newton Foote, première femme à démontrer le pouvoir réchauffant du CO2 dès 1856.",
                    fds: "Faire des sciences : redécouverte historique du travail d’Eunice Foote, longtemps attribué exclusivement à John Tyndall.",
                    comp: ["D4.2", "D1.3"], res: ["pack:pack_act_4e_energie_fossile", "pdf:3eme/cours rechauffement climatique.pdf", "s:3eme/s57"] }
                ]},
                { code: "B", titre: "Lien entre GES et hausse des températures globales", seances: [
                  { s: 4, h: 2, type: "tc", st: "nouvelle", titre: "Tâche complexe : Climatologues du GIEC — corréler CO2 et anomalie thermique",
                    q: "Quelles sont les preuves mesurées reliant le rejet de carbone atmosphérique à l’augmentation globale des températures ?",
                    desc: "- Analyse croisée de deux courbes réelles Copernicus ERA5 / NASA : anomalie de température globale et teneur en GES (CO2 et CH4) depuis 1880.\n- Calcul des taux d’augmentation et mise en relation de cause à effet.\n- Précision du programme : les mécanismes physiques fins de l’effet de serre ne sont pas exigibles, l’accent est mis sur la corrélation rigoureuse et la responsabilité des activités humaines.",
                    comp: ["D4.2", "D4.1", "D1.3"], act: "A4-CLIM" }
                ]},
                { code: "C", titre: "Évaluation du chapitre", seances: [
                  { s: 5, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : le cycle du carbone et le climat",
                    desc: "- Sujet DNB 10 points : calcul d’un flux, lecture de réservoirs et interprétation de données d’émissions industrielles.\n- Grille LSU critériée (D1.3, D4.1, D4.2).",
                    comp: ["D1.3", "D4.1", "D4.2"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P2", titre: "Partie 2 — La Terre, planète dynamique : tectonique actuelle et risques", officiel: "Thème « La Terre, planète dynamique »", couleur: "#00838f",
          problematique: "Le 6 février 2023, deux séismes majeurs de magnitude 7,8 et 7,5 ont frappé le sud de la Turquie et la Syrie, le long de la faille est-anatolienne. Comment les satellites GPS et les réseaux sismiques actuels permettent-ils de mesurer le déplacement des plaques et de protéger les populations face aux risques ?",
          ancrage: "Données GPS en direct (Renag / UNAVCO), sismogrammes récents du réseau Résif/EMSC, exercice d’évacuation PPMS du collège.",
          lien: "Rupture officielle avec l’ancien programme : suppression de l’approche historique de Wegener. On travaille exclusivement sur les mesures géophysiques et satellitaires contemporaines.",
          attendus: ["Identifier une frontière de plaques par les séismes et le volcanisme", "Mesurer convergence et divergence avec les données GPS actuelles", "Modéliser l’accumulation de contraintes sur une faille et la libération d’ondes", "Distinguer volcanismes effusif et explosif", "Distinguer aléa, vulnérabilité et risque ; exploiter le PPMS"],
          chapitres: [
            {
              code: "I", titre: "La lithosphère découpée en plaques mobiles", pb: "Comment prouver aujourd’hui, avec les technologies modernes, que la surface de la Terre bouge ?",
              sections: [
                { code: "A", titre: "Frontières actives et découpage de la lithosphère", seances: [
                  { s: 6, h: 2, type: "tp", st: "reprise", titre: "TP Tectoglob3D : cartographier les zones actives du globe", act: "A4-TECT",
                    q: "Où se concentrent les séismes et les volcans à la surface de la Terre ?",
                    desc: "- Utilisation du logiciel en ligne Tectoglob3D : affichage de la répartition mondiale des séismes (avec profondeur des foyers) et des édifices volcaniques.\n- Constat : concentration étroite le long de dorsales, fosses océaniques et chaînes de montagnes.\n- Définition d’une plaque lithosphérique : fragment rigide superficiel délimité par des frontières actives.\n- Portrait : Marie Tharp, la géologue qui cartographia la dorsale médio-atlantique et son rift central.",
                    comp: ["D4.3", "D4.1"], res: ["s:4eme/s01", "pdf:4eme/cours les neurones.pdf", "web:https://www.tectoglob3d.fr/|Tectoglob3D"] }
                ]},
                { code: "B", titre: "Mesurer les déplacements actuels par balises GPS", seances: [
                  { s: 7, h: 1, type: "act", st: "nouvelle", titre: "Vecteurs GPS : convergence, divergence et coulissage en temps réel", act: "A4-GPS",
                    q: "À quelle vitesse les plaques se déplacent-elles sous nos pieds ?",
                    desc: "- Exploitation de données réelles de balises GPS permanentes (réseau UNAVCO / NASA) : lecture de vecteurs de déplacement en mm/an.\n- Comparaison : divergence au niveau de l’Atlantique (≈ 2 cm/an), convergence au niveau des Andes/Pacifique (≈ 7 cm/an), coulissage le long de la faille de San Andreas.\n- Déconstruction d’un obstacle : la lithosphère est solide, les mouvements actuels sont mesurés au millimètre près par satellite sans magma liquide sous les continents.",
                    fds: "Méthode scientifique : les théories anciennes sans mécanisme mesurable ont cédé la place à la géodésie satellitaire contemporaine directe.",
                    comp: ["D4.2", "D4.3", "D1.3"], res: ["web:https://www.unavco.org/|Données géodésiques UNAVCO"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Séismes et volcanisme : l’énergie interne libérée", pb: "D’où provient l’énergie qui fracture la roche et alimente les éruptions volcaniques ?",
              sections: [
                { code: "A", titre: "L’origine des séismes : failles et ondes", seances: [
                  { s: 8, h: 2, type: "tp", st: "reprise", titre: "TP Modélisation : contrainte sur une faille et rupture brutale",
                    q: "Que se passe-t-il sous terre au moment exact où se déclenche un tremblement de terre ?",
                    desc: "- Modèle analogique : deux blocs de bois ou polystyrène frottant sous contrainte avec ressort (accumulation élastique puis glissement brutal).\n- Analyse de sismogrammes réels d’une station proche : arrivée des ondes P et S, calcul d’amplitude et de délai.\n- Mise en relation : mouvement de plaque → accumulation de tensions sur la faille → rupture brutale et libération d’énergie convertie en ondes sismiques.",
                    comp: ["D4.1", "D4.2"], res: ["pack:pack_4e_s_ismes_volcans_tectonique", "pdf:4eme/Activite les organes qui permettent le mouvement.pdf", "s:4eme/s05", "s:4eme/s07"] }
                ]},
                { code: "B", titre: "Volcanisme effusif et explosif", seances: [
                  { s: 9, h: 1, type: "tp", st: "reprise", titre: "TP Viscosité des magmas : Piton de la Fournaise vs Montagne Pelée", act: "A4-VOLC",
                    q: "Pourquoi certains volcans coulent-ils tranquillement tandis que d’autres explosent violemment ?",
                    desc: "- Expérimentation analogique : purée liquide vs purée très visqueuse traversée par un flux gazeux (effervescence / bulles piégées).\n- Comparaison des dynamiques réelles : lave fluide pauvre en silice (effusif, coulées de basalte) vs lave visqueuse riche en gaz piégés (explosif, nuées ardentes, dôme d’andésite).\n- Hommage : Katia Krafft, volcanologue pionnière qui a documenté les nuées ardentes au plus près du danger.",
                    comp: ["D4.1", "D1.3"], res: ["pack:pack_act_4e_volcanisme", "s:4eme/s17", "s:4eme/s20"] }
                ]}
              ]
            },
            {
              code: "III", titre: "Prévention et gestion des risques naturels", pb: "Comment vivre en sécurité sur une planète géologiquement active ?",
              sections: [
                { code: "A", titre: "Distinguer aléa, vulnérabilité et risque", seances: [
                  { s: 10, h: 2, type: "tc", st: "reprise", titre: "Tâche complexe : Évaluer le risque sismique dans deux régions du monde",
                    q: "Pourquoi un même séisme peut-il faire 10 victimes au Japon et plus de 50 000 en Turquie ?",
                    desc: "- Définition fondamentale : Risque = Aléa (probabilité de l’événement géologique) × Vulnérabilité (enjeux humains, constructions, préparation).\n- Analyse croisée de deux études de cas : séisme de Tohoku (Japon, 2011) vs séisme de Kahramanmaraş (Turquie, 2023).\n- Identification des politiques publiques : normes parasismiques, zonage sismique français.",
                    comp: ["D4.1", "D4.3", "D5"], act: "A4-RISQ", res: ["s:4eme/s22"] }
                ]},
                { code: "B", titre: "Du risque géologique aux alertes météorologiques (PPMS)", seances: [
                  { s: 11, h: 1, type: "act", st: "nouvelle", titre: "Auditer le PPMS du collège face aux risques locaux",
                    q: "Comment réagir dans notre collège en cas de séisme, d’inondation soudaine ou de tempête ?",
                    desc: "- Étude du document officiel du Plan Particulier de Mise en Sûreté (PPMS) de l’établissement scolaire.\n- Analyse d’une carte de vigilance météorologique Météo-France (vents violents, pluies torrentielles amplifiées par le climat méditerranéen).\n- Rôle des consignes citoyennes de mise à l’abri et d’adaptation.",
                    comp: ["D5", "D1.3"], res: ["html:activites/4eme-C1-dynamique-terre-risques.html"] }
                ]},
                { code: "C", titre: "Évaluation du thème géosciences", seances: [
                  { s: 12, h: 2, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : tectonique, volcanisme et risques",
                    desc: "- Sujet DNB 10 points : vecteurs GPS d’une frontière de plaques, sismogramme et calcul d’aléa/vulnérabilité.\n- Séance double : 30 min d’épreuve puis remédiation immédiate par curseurs LSU.",
                    comp: ["D1.3", "D4.2", "D4.3", "D5"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P3", titre: "Partie 3 — Les interactions Terre-vivant : métabolismes et écosystèmes", officiel: "Thème « Les interactions Terre-vivant »", couleur: "#558b2f",
          problematique: "Comment les plantes vertes fabriquent-elles du bois, des fruits et des feuilles uniquement à partir d’eau, de sels minéraux, de lumière et d’air ? Et comment la biodiversité se maintient-elle et communique-t-elle dans nos écosystèmes ?",
          ancrage: "Espaces verts et cour du collège, applications IA naturalistes (Pl@ntNet / BirdNET), observations microscopiques végétales.",
          lien: "En 5e, la respiration aérobie a été découverte. En 4e, on étudie l’autre métabolisme fondamental : la photosynthèse, qui fait entrer le carbone minéral dans la biosphère.",
          attendus: ["Mettre en évidence la photosynthèse, ses conditions et ses produits", "Caractériser les flux de sèves et les symbioses racinaires (mycorhizes)", "Comparer caryotypes et relier reproduction sexuée et brassage génétique", "Utiliser des IA d’identification (Pl@ntNet, BirdNET) avec esprit critique", "Identifier des interactions écosystémiques et des communications"],
          chapitres: [
            {
              code: "I", titre: "La photosynthèse, moteur de la production primaire", pb: "Comment les cellules végétales fabriquent-elles de la matière organique à partir d’éléments minéraux ?",
              sections: [
                { code: "A", titre: "Conditions et produits de la photosynthèse", seances: [
                  { s: 13, h: 1, type: "tp", st: "reprise", titre: "TP Démarche expérimentale : tester la présence d’amidon dans une feuille",
                    q: "De quoi une feuille a-t-elle besoin pour produire ses propres réserves ?",
                    desc: "- Protocole rigoureux : feuilles de géranium partiellement masquées par un cache noir, décoloration dans l’alcool bouillant au bain-marie, révélation à l’eau iodée (lugol).\n- Résultat : coloration bleu-noir uniquement dans les zones chlorophylliennes éclairées.\n- Conclusion : production de glucides (amidon) au niveau des cellules chlorophylliennes à partir d’eau et de CO2 en présence d’énergie lumineuse.\n- Définition : conversion d’énergie lumineuse en énergie chimique stockée.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:3eme/Activite photosynthese.pdf", "pdf:3eme/cours les besoins des cellules végétales.pdf", "s:3eme/s54"] }
                ]},
                { code: "B", titre: "Les structures de prélèvement et de circulation des sèves", seances: [
                  { s: 14, h: 2, type: "tp", st: "nouvelle", titre: "TP Microscopie : stomates, poils absorbants et vaisseaux conducteurs",
                    q: "Comment l’eau monte-t-elle des racines aux feuilles et comment la sève nourrit-elle toute la plante ?",
                    desc: "- Réalisation de préparations microscopiques : épiderme de feuille de poireau ou fougère (observation des stomates pour l’entrée du CO2) et racines de radis germé (poils absorbants).\n- Coupe de tige de céleri colorée au bleu de méthylène : mise en évidence des vaisseaux conducteurs de sève brute (xylème : eau + sels minéraux montant des racines).\n- Notion de sève élaborée (phloème : eau + glucides descendant vers les organes de réserve et de croissance).",
                    comp: ["D4.1", "D1.3"], act: "A4-VEG" }
                ]},
                { code: "C", titre: "Symbioses racinaires et diversité des photosynthétiques", seances: [
                  { s: 15, h: 1, type: "act", st: "reprise", titre: "Des champignons alliés des arbres : les mycorhizes", act: "A4-MYCO",
                    q: "Pourquoi la plupart des arbres ne peuvent-ils pas pousser vigoureusement sans champignons souterrains ?",
                    desc: "- Analyse de données d’expériences agronomiques (INRAE) : croissance comparée de pins avec et sans mycorhizes.\n- Schéma fonctionnel de la symbiose : le champignon fournit eau et minéraux démultipliés ; la plante fournit des glucides issus de sa photosynthèse.\n- Panorama de la diversité : des cyanobactéries marines aux algues, mousses, conifères et plantes à fleurs.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:3eme/Activite relation entre les bacteries et le lupin.pdf", "pdf:3eme/cours role des micro organismes dans la nutrition.pdf", "s:3eme/s55"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Reproduction sexuée et brassage génétique", pb: "Pourquoi des frères et sœurs issus des mêmes parents sont-ils tous uniques ?",
              sections: [
                { code: "A", titre: "Les cellules sexuelles et l’ADN chromosomique", seances: [
                  { s: 16, h: 2, type: "tp", st: "reprise", titre: "Caryotypes et extraction d’ADN : le support de l’hérédité",
                    q: "Où se trouve l’information génétique qui détermine les caractères d’un être vivant ?",
                    desc: "- TP d’extraction d’ADN de banane ou d’oignon (sel, liquide vaisselle, alcool froid) : observation de la « méduse » d’ADN.\n- Analyse et comparaison de caryotypes : cellule-mère (2n chromosomes), cellules sexuelles (n chromosomes, réduction de moitié), cellule-œuf (rétablissement du nombre 2n).\n- Notion d’ADN constituant des chromosomes et porteur du patrimoine héréditaire.",
                    comp: ["D4.1", "D4.2"], res: ["pdf:4eme/cours les chromosomes support des caracteres.pdf", "pdf:3eme/activite caryotype sain et malade.pdf", "s:4eme/s38", "s:4eme/s39"] }
                ]},
                { code: "B", titre: "Le brassage de l’information génétique", seances: [
                  { s: 17, h: 1, type: "act", st: "reprise", titre: "Activité ludique de génétique : l’arbre des possibles",
                    q: "Comment la rencontre d’un spermatozoïde et d’un ovule crée-t-elle une combinaison inédite ?",
                    desc: "- Modélisation avec tirage au sort (pastilles colorées représentant les paires de chromosomes) : chaque gamète reçoit au hasard l’un des deux chromosomes de chaque paire.\n- Fécondation : réunion aléatoire de deux gamètes → création d’une association de caractères unique, inexistante chez les parents.\n- Précision du programme : limiter l’étude à la comparaison des caryotypes et au brassage des combinaisons, sans détailler les étapes cellulaires de la méiose.",
                    comp: ["D4.2", "D1.3"], res: ["pdf:4eme/cours transmission de la vie espece humaine.pdf", "s:4eme/s36"] }
                ]}
              ]
            },
            {
              code: "III", titre: "Biodiversité, IA naturalistes et communication", pb: "Comment explorer et recenser la biodiversité de notre collège grâce à l’intelligence artificielle, et comment les espèces interagissent-elles ?",
              sections: [
                { code: "A", titre: "Classe de terrain avec IA naturalistes (Pl@ntNet & BirdNET)", seances: [
                  { s: 18, h: 2, type: "terrain", st: "nouvelle", titre: "Inventaire de terrain : Pl@ntNet et BirdNET aux abords du collège",
                    q: "Quelles espèces partagent notre quotidien et comment une IA les identifie-t-elle ?",
                    desc: "- Sortie dans la cour et les espaces verts mitoyens : photographie de feuilles/fleurs et enregistrement de chants d’oiseaux.\n- Utilisation encadrée des outils Pl@ntNet et BirdNET sur tablettes.\n- Démarche critique : vérification des résultats avec une clé de détermination papier, analyse des pourcentages de confiance et des erreurs possibles de l’IA.\n- Discussion éthique et écologique : consommation énergétique des requêtes d’IA.",
                    fds: "Esprit critique et IA : une intelligence artificielle donne une probabilité statistique, pas une vérité scientifique absolue. L’humain doit toujours vérifier.",
                    comp: ["D4.1", "D4.3", "D5"], act: "A4-NAT" }
                ]},
                { code: "B", titre: "Interactions et communication dans l’écosystème", seances: [
                  { s: 19, h: 1, type: "act", st: "nouvelle", titre: "Quand les arbres s’alertent et les animaux communiquent",
                    q: "Comment les êtres vivants échangent-ils des informations vitales sans parler notre langage ?",
                    desc: "- Étude de cas documentée : émission d’éthylène par les acacias broutés par les antilopes avertissant les arbres voisins ; signaux d’alarme visuels et auditifs chez les passereaux ou rongeurs.\n- Réseau d’interactions au sein de l’écosystème : prédation, compétition, mutualisme, symbiose.\n- Notion d’écosystème comme unité dynamique capable d’absorber des perturbations.",
                    comp: ["D1.3", "D4.1"], res: ["html:activites/4eme-C3-reproduction-populations.html"] }
                ]},
                { code: "C", titre: "Évaluation du thème vivant", seances: [
                  { s: 20, h: 2, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : photosynthèse, génétique et écosystèmes",
                    desc: "- Sujet DNB 10 points : expérience de photosynthèse, caryotype de gamètes et analyse d’un réseau d’interactions.\n- Restitution formative et correction critériée.",
                    comp: ["D1.3", "D4.1", "D4.2"] }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      code: "T2", titre: "Thème 2 — Corps humain et santé", officiel: "Partie « Corps humain et santé »",
      parties: [
        {
          code: "P1", titre: "Partie 1 — Le fonctionnement de l’organisme : nutrition, transport et excrétion", officiel: "Thème « Le fonctionnement de l’organisme »", couleur: "#c62828",
          problematique: "Chaque seconde, nos milliards de cellules ont besoin de glucose et de dioxygène pour produire de l’énergie, et rejettent de l’urée et du CO2. Comment le tube digestif, le microbiote, les poumons, le cœur et les reins coopèrent-ils pour alimenter et nettoyer nos cellules en continu ?",
          ancrage: "Éducation nutritionnelle (Nutri-Score), analyses d’urine et de sang réelles, journée nationale de réflexion sur le don d’organes (22 juin).",
          lien: "En 5e, la respiration globale a été vue. En 4e, on explore l’ensemble des systèmes anatomiques qui assurent la nutrition cellulaire chez l’humain.",
          attendus: ["Expliquer la transformation des aliments par enzymes et microbiote", "Légender les appareils digestif, respiratoire, circulatoire et urinaire", "Expliquer les échanges alvéolaires et la circulation sanguine", "Identifier le rôle des reins dans l’excrétion de l’urée", "Connaître le cadre légal du don d’organes et de sang"],
          chapitres: [
            {
              code: "I", titre: "La digestion et l’allié microbiote", pb: "Que deviennent nos repas dans le tube digestif et pourquoi nos bactéries intestinales sont-elles indispensables ?",
              sections: [
                { code: "A", titre: "Digestion mécanique et enzymatique", seances: [
                  { s: 21, h: 1, type: "tp", st: "nouvelle", titre: "TP Digestion in vitro de l’amidon par l’amylase",
                    q: "Comment les gros morceaux de nos aliments se transforment-ils en molécules solubles ?",
                    desc: "- Expérience historique inspirée de Spallanzani et Réaumur : empois d’amidon + salive (ou amylase de pharmacie) à 37 °C, avec tube témoin (amidon + eau).\n- Tests réguliers à l’eau iodée (suivi de la disparition de l’amidon) et aux bandelettes glucose (apparition de sucre réducteur).\n- Notion d’action mécanique (mastication, brassage) et d’action chimique par des enzymes digestives spécifiques.",
                    comp: ["D4.1"], act: "A4-DIG" }
                ]},
                { code: "B", titre: "Le microbiote intestinal et l’absorption des nutriments", seances: [
                  { s: 22, h: 2, type: "tc", st: "nouvelle", titre: "Tâche complexe : Les souris axéniques et le rôle du microbiote",
                    q: "Que se passe-t-il dans un organisme privé de tout micro-organisme intestinal ?",
                    desc: "- Données scientifiques de l’INRAE/Inserm : comparaison de souris axéniques (élevées en milieu stérile sans microbiote) et de souris normales.\n- Constats : les souris sans microbiote doivent manger 30 % de calories en plus, digèrent mal les fibres végétales et ont des carences en vitamines.\n- Étude de l’absorption intestinale au niveau des villosités de l’intestin grêle : immense surface d’échange plissée et vascularisée vers le sang.\n- Définition des matières fécales : éléments non digérés (fibres) + cellules du microbiote.",
                    comp: ["D4.1", "D4.2", "D1.3"], act: "A4-MICR" }
                ]}
              ]
            },
            {
              code: "II", titre: "Respiration, circulation et excrétion des déchets", pb: "Comment le dioxygène arrive-t-il aux cellules et comment le corps se débarrasse-t-il de ses déchets toxiques ?",
              sections: [
                { code: "A", titre: "Les échanges gazeux alvéolaires", seances: [
                  { s: 23, h: 1, type: "act", st: "reprise", titre: "L’air dans nos poumons : l’alvéole, surface d’échange vitale",
                    q: "Comment le dioxygène de l’air passe-t-il dans notre sang sans fuite d’air ?",
                    desc: "- Trajet de l’air : pharynx, larynx, trachée, bronches, bronchioles, alvéoles pulmonaires.\n- Coupe microscopique d’alvéoles : finesse extrême de la paroi (0,5 µm), riche réseau de capillaires sanguins.\n- Calcul comparatif : teneur en O2 et CO2 de l’air inspiré vs air expiré ; passage du dioxygène vers le sang par simple diffusion.",
                    comp: ["D1.3", "D4.2"], res: ["pdf:3eme/Activite les echanges entre le sang et les cellules.pdf", "s:3eme/s53"] }
                ]},
                { code: "B", titre: "La circulation générale et le rein filtreur", seances: [
                  { s: 24, h: 2, type: "tp", st: "nouvelle", titre: "TP Dissection du rein & schéma de la circulation générale",
                    q: "Comment le sang distribue-t-il les nutriments et comment est-il nettoyé des déchets azotés ?",
                    desc: "- Schéma fonctionnel de la circulation générale : le cœur moteur, artères, veines, capillaires irriguant tous les organes.\n- Dissection d’un rein de porc (achat boucherie) : repérage de la zone corticale, médullaire, du bassinet et de l’uretère.\n- Analyse d’un tableau comparatif réel : composition du plasma sanguin vs urine (mise en évidence de l’élimination de l’urée et des déchets azotés, absence de glucose et protéines en situation saine).",
                    comp: ["D4.1", "D1.3"], act: "A4-REIN" }
                ]},
                { code: "C", titre: "Sensibilisation citoyenne : le don d’organes et de sang", seances: [
                  { s: 25, h: 1, type: "debat", st: "nouvelle", titre: "Débat citoyen : la loi française sur le don d’organes",
                    q: "Pourquoi dit-on qu’en France, nous sommes tous des donneurs d’organes présumés ?",
                    desc: "- Documents de l’Agence de la biomédecine : principe du consentement présumé, registre national des refus, importance de faire part de son choix à ses proches.\n- Cas concret d’une greffe de rein ou de moelle osseuse ; conditions médicales et légales pour donner son sang (dès 18 ans).\n- Lien avec le parcours citoyen et l’engagement pour autrui.",
                    comp: ["D5", "D1.3"], res: ["web:https://www.dondorganes.fr/|Agence de la biomédecine"] }
                ]}
              ]
            },
            {
              code: "III", titre: "La commande nerveuse et la protection des sens", pb: "Comment nos sens captent-ils l’environnement et comment nos comportements peuvent-ils les endommager ?",
              sections: [
                { code: "A", titre: "Du stimulus à la commande musculaire", seances: [
                  { s: 26, h: 2, type: "tp", st: "reprise", titre: "TP Réflexe et nerf : disséquer le nerf sciatique",
                    q: "Par où passe le message qui fait réagir notre corps à un signal extérieur ?",
                    desc: "- Mesure du temps de réaction face à un stimulus visuel ou sonore avec un chronomètre ou logiciel.\n- Dissection du membre postérieur de grenouille ou cuisse de poulet : mise en évidence du nerf sciatique blanc et nacré reliant centre nerveux et muscle.\n- Schéma du neurone : corps cellulaire, axone, terminaisons nerveuses ; distinction entre nerf sensitif (vers le centre) et nerf moteur (vers le muscle).",
                    comp: ["D4.1", "D1.3"], res: ["pdf:4eme/Activite les cellules nerveuses.pdf", "pdf:4eme/Activite transmission du message nerveux.pdf", "pdf:4eme/cours les neurones.pdf", "s:4eme/s56", "s:4eme/s57", "s:4eme/s60"] }
                ]},
                { code: "B", titre: "Politiques publiques et protection des récepteurs sensoriels", seances: [
                  { s: 27, h: 1, type: "act", st: "nouvelle", titre: "Écouteurs, décibels et cellules ciliées : protéger son audition", act: "A4-AUDI",
                    q: "Pourquoi des lésions de l’oreille interne dues à une musique trop forte sont-elles irréversibles ?",
                    desc: "- Analyse de microscopie électronique de cellules ciliées saines et détruites par une exposition sonore prolongée (> 85 dB).\n- Justification des réglementations publiques : limitation du volume des casques à 100 dB, protection auditive en milieu professionnel bruyant.\n- Prise de recul sur l’exposition excessive aux écrans le soir.",
                    comp: ["D5", "D1.3"], res: ["html:activites/4eme-C5-systeme-nerveux.html"] }
                ]},
                { code: "C", titre: "Évaluation du chapitre nutrition et systèmes", seances: [
                  { s: 28, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : nutrition, circulation et système nerveux",
                    desc: "- Sujet DNB 10 points : calcul de surface d’absorption, analyse d’analyse d’urine (dépistage) et schéma de trajet nerveux.\n- Grille LSU critériée.",
                    comp: ["D1.3", "D4.1", "D4.2"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P2", titre: "Partie 2 — Virus, micro-organismes et immunité", officiel: "Thème « Virus, micro-organismes et interactions avec l’être humain »", couleur: "#6a1b9a",
          problematique: "Notre peau et nos muqueuses abritent plus de bactéries qu’il n’y a de cellules humaines dans notre corps. Comment notre système immunitaire fait-il la différence entre nos microbiotes bénéfiques et des agents pathogènes mortels comme le VIH ?",
          ancrage: "Prise de sang et formule leucocytaire, campagnes de dépistage du SIDA et d’information Sidaction, prix Nobel de Françoise Barré-Sinoussi.",
          lien: "En 5e, la distinction contamination/infection a été posée. En 4e, on étudie les mécanismes cellulaires précis : phagocytose, anticorps, mémoire et attaque virale par le VIH.",
          attendus: ["Relier santé humaine et diversité des microbiotes", "Identifier les phases de la phagocytose et le rôle des anticorps", "Expliquer le principe de la mémoire immunitaire et de la vaccination", "Comprendre les mécanismes du VIH/SIDA et les enjeux de santé publique"],
          chapitres: [
            {
              code: "I", titre: "Le système immunitaire en action : phagocytose et anticorps", pb: "Comment nos globules blancs neutralisent-ils les envahisseurs ?",
              sections: [
                { code: "A", titre: "La phagocytose, réaction rapide non spécifique", seances: [
                  { s: 28, h: 1, type: "tp", st: "reprise", titre: "Observation microscopique d’un frottis sanguin & la phagocytose",
                    q: "Quelles sont les cellules sentinelles qui patrouillent dans notre sang ?",
                    desc: "- Observation d’un frottis sanguin coloré (May-Grünwald Giemsa) : identification des hématies et des différents leucocytes (phagocytes, lymphocytes).\n- Analyse d’une vidéo en microscopie à contraste de phase montrant un macrophage ingérant des bactéries.\n- Schématisation des étapes de la phagocytose : adhésion, ingestion, digestion, rejet des débris.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:3eme/Activite la phagocytose.pdf", "s:3eme/s05", "s:3eme/s06"] }
                ]},
                { code: "B", titre: "Les anticorps et la neutralisation spécifique", seances: [
                  { s: 29, h: 1, type: "act", st: "reprise", titre: "L’expérience de Von Behring et le rôle des anticorps",
                    q: "Comment notre organisme fabrique-t-il des armes sur-mesure contre une toxine précise ?",
                    desc: "- Analyse des expériences historiques de Von Behring (1890) sur la diphtérie : le sérum d’un animal guéri protège un autre animal.\n- Modélisation de la réaction antigène-anticorps : complémentarité spatiale clé-serrure et formation d’un complexe immun neutralisant l’agent pathogène.\n- Rôle des lymphocytes producteurs d’anticorps spécifiques.",
                    fds: "Démarche expérimentale rigoureuse : injecter un sérum sans toxine comme témoin pour valider que c’est bien le sérum qui protège.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:3eme/cours le role des anticorps.pdf", "s:3eme/s13", "s:3eme/s14"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Mémoire immunitaire, vaccination et défi du VIH", pb: "Pourquoi ne fait-on certaines maladies qu’une seule fois et comment le VIH contourne-t-il nos défenses ?",
              sections: [
                { code: "A", titre: "La mémoire immunitaire et l’efficacité vaccinale", seances: [
                  { s: 30, h: 2, type: "tc", st: "reprise", titre: "Tâche complexe : Analyser la cinétique des anticorps lors d’un rappel",
                    q: "Pourquoi certains vaccins nécessitent-ils un rappel plusieurs années après ?",
                    desc: "- Graphique de la cinétique de production des anticorps : réponse primaire lente et modérée vs réponse secondaire immédiate, massive et durable.\n- Mise en évidence de la formation de lymphocytes mémoires lors du premier contact avec l’antigène atténué.\n- Différenciation : mission médecin épidémiologiste expliquant l’importance du calendrier vaccinal.",
                    comp: ["D4.2", "D4.1", "D1.3"], act: "A4-VAC", res: ["pack:pack_4e_vaccination_et_syst_me_immunitaire", "s:3eme/s23", "s:3eme/s24"] }
                ]},
                { code: "B", titre: "L’infection par le VIH et le syndrome du SIDA", seances: [
                  { s: 31, h: 1, type: "act", st: "nouvelle", titre: "Le VIH : un virus qui s’attaque au chef d’orchestre de l’immunité",
                    q: "Pourquoi le virus du SIDA paralyse-t-il l’ensemble des défenses de l’organisme ?",
                    desc: "- Étude du mode d’action du virus de l’immunodéficience humaine : infection sélective des lymphocytes T4.\n- Graphique de l’évolution conjointe de la charge virale et du taux de T4 sur 10 ans sans traitement (phase asymptomatique puis apparition des maladies opportunistes).\n- Progrès thérapeutiques majeurs : trithérapies, PrEP (traitement pré-exposition), espérance de vie normale avec charge virale indétectable (indétectable = intransmissible, I=I).\n- Hommage : Françoise Barré-Sinoussi et Luc Montagnier, découvreurs du VIH à l’Institut Pasteur (1983).",
                    comp: ["D4.2", "D1.3", "D5"], res: ["web:https://www.sidaction.org/|Sidaction"] }
                ]},
                { code: "C", titre: "Évaluation immunologie", seances: [
                  { s: 32, h: 2, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : réactions immunitaires et vaccination",
                    desc: "- Sujet DNB 10 points : étapes de la phagocytose, graphique réponse primaire/secondaire et analyse d’un test de dépistage.\n- Correction formatrice intégrée.",
                    comp: ["D1.3", "D4.2", "D4.1"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P3", titre: "Partie 3 — Procréation humaine, neurobiologie du plaisir et responsabilité", officiel: "Thème « Procréation humaine »", couleur: "#ad1457",
          problematique: "À l’adolescence, des molécules chimiques appelées hormones transforment nos organes et activent notre fertilité. Comment le cerveau pilote-t-il ces transformations, comment naît biologiquement le plaisir sexuel, et pourquoi le consentement est-il la règle absolue dans toute relation ?",
          ancrage: "Programme EVARS (Vie affective et relationnelle), modèles 3D du clitoris d’Odile Fillod, planning familial et préservatifs gratuits en pharmacie pour les moins de 26 ans.",
          lien: "En 5e, l’anatomie et les cycles ont été décrits. En 4e, on traite le contrôle hormonal cérébral, la neurobiologie du plaisir sexuel, la contraception active et le cadre légal du consentement.",
          attendus: ["Expliquer le contrôle hormonal des gonades par le cerveau", "Identifier l’anatomie du clitoris et du pénis et relier zones érogènes et plaisir cérébral", "Relier mode d’action des contraceptifs et fonctionnement des appareils", "Comprendre et appliquer la notion de consentement et de respect mutuel"],
          chapitres: [
            {
              code: "I", titre: "Le contrôle hormonal de la puberté et de la reproduction", pb: "Comment des hormones microscopiques produites par le cerveau règlent-elles le fonctionnement de nos organes sexuels ?",
              sections: [
                { code: "A", titre: "La communication hormonale entre cerveau et gonades", seances: [
                  { s: 33, h: 1, type: "act", st: "reprise", titre: "Expériences historiques : greffes et castrations chez les rongeurs",
                    q: "Comment a-t-on découvert que les organes sexuels communiquent par le sang ?",
                    desc: "- Analyse des expériences historiques (Berthold 1849, Bouin et Ancel) : l’ablation des testicules bloque les caractères sexuels ; la greffe ou l’injection d’extraits rétablit le fonctionnement.\n- Définition d’une hormone : substance chimique produite par un organe émetteur, véhiculée par le sang et agissant à distance sur des organes cibles munis de récepteurs spécifiques.\n- Production de testostérone chez l’homme, d’œstrogènes et progestérone chez la femme.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:4eme/cours controle hormonal.pdf", "s:4eme/s52", "s:4eme/s53"] }
                ]},
                { code: "B", titre: "La synchronisation hormonale du cycle féminin", seances: [
                  { s: 34, h: 2, type: "tp", st: "reprise", titre: "Schéma fonctionnel animé : la régulation cyclique de l’ovaire et de l’utérus",
                    q: "Comment l’utérus sait-il exactement quand préparer son nid pour un embryon ?",
                    desc: "- Graphique comparatif synchronisé des hormones cérébrales (FSH, LH), ovariennes (œstrogènes, progestérone) et de l’épaisseur de la muqueuse utérine.\n- Mise en relation du pic d’hormones avec l’ovulation (14 jours avant les règles) et de la chute hormonale en fin de cycle avec le déclenchement des règles.\n- Construction pas-à-pas d’un schéma fonctionnel interactif à flèches fléchées.",
                    comp: ["D4.2", "D1.3"], res: ["pdf:4eme/Activite schema bilan controle hormonal.pdf", "pdf:4eme/correction schema controle hormonal.pdf", "pdf:4eme/cours le controle hormonal des cycles ovarien et utérin.pdf", "s:4eme/s54"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Neurobiologie du plaisir sexuel et anatomie érogène", pb: "Où et comment naît la sensation de plaisir sexuel dans notre corps et notre cerveau ?",
              sections: [
                { code: "A", titre: "L’anatomie du clitoris et du pénis : des structures homologues", seances: [
                  { s: 35, h: 1, type: "act", st: "nouvelle", titre: "Modèles anatomiques réels : redécouvrir le clitoris en 3 dimensions",
                    q: "Pourquoi le clitoris a-t-il été si longtemps effacé des manuels d’anatomie ?",
                    desc: "- Observation et manipulation de modèles 3D à l’échelle (travaux d’Odile Fillod) : le clitoris n’est pas un simple point mais un organe érectile complet de 10 à 12 cm (gland, corps caverneux, piliers, bulbes vestibulaires entourant le vagin).\n- Mise en évidence de l’homologie embryologique parfaite entre structures clitoridiennes et péniennes : tissus érectiles qui se gorgent de sang et concentration exceptionnelle de milliers de terminaisons nerveuses sensorielles.\n- Objectif d’égalité filles-garçons et de déconstruction des stéréotypes sexistes anatomiques.",
                    comp: ["D1.3"], act: "A4-PLAI" }
                ]},
                { code: "B", titre: "Le circuit cérébral de la récompense et du plaisir", seances: [
                  { s: 36, h: 2, type: "tc", st: "nouvelle", titre: "Tâche complexe : Neurosciences — des capteurs sensoriels aux neurones du plaisir",
                    q: "Comment une stimulation physique se transforme-t-elle en sensation agréable dans notre esprit ?",
                    desc: "- Analyse d’images d’IRM fonctionnelle cérébrale (IRMf) : lors d’une stimulation agréable, activation des aires sensorielles puis du circuit de la récompense (aire tegmentale ventrale, noyau accumbens) libérant de la dopamine.\n- Distinction essentielle : les organes génitaux sont des récepteurs sensoriels, mais la sensation de plaisir est construite et intégrée par le cerveau.\n- Rôle des composantes affectives, relationnelles et du bien-être global (définition de la santé selon l’OMS).",
                    comp: ["D4.1", "D1.3"], act: "A4-RECO" }
                ]}
              ]
            },
            {
              code: "III", titre: "Contraception, protection et respect absolu du consentement", pb: "Comment vivre une sexualité épanouie, responsable, protégée et consentie ?",
              sections: [
                { code: "A", titre: "Les moyens de contraception et la protection contre les IST", seances: [
                  { s: 37, h: 1, type: "act", st: "reprise", titre: "Modes d’action des contraceptifs : bloquer l’ovulation ou la rencontre",
                    q: "Comment les méthodes contraceptives modernes permettent-elles de choisir d’avoir ou non un enfant ?",
                    desc: "- Tableau comparatif des méthodes : contraception hormonale (pilule combinée, implant bloquant l’ovulation par apport constant d’hormones de synthèse leurrant le cerveau), dispositifs intra-utérins (stérilet cuivre ou hormonal), pilule d’urgence.\n- Constat fondamental : seul le préservatif (externe ou interne) protège simultanément d’une grossesse non désirée ET des infections sexuellement transmissibles (VIH, HPV, chlamydia).\n- Rappel civique : préservatifs gratuits sans ordonnance en pharmacie pour les moins de 26 ans.",
                    comp: ["D1.3", "D5"], res: ["pdf:4eme/Activite methodes contraceptives.pdf", "pdf:4eme/correction methodes contraceptives.pdf", "s:4eme/s49"] }
                ]},
                { code: "B", titre: "Le consentement : un accord libre, enthousiaste et révocable", seances: [
                  { s: 38, h: 2, type: "debat", st: "nouvelle", titre: "Atelier EVARS : analyser des situations concrètes de consentement",
                    q: "Qu’est-ce qu’un consentement valide selon la loi et la morale, et quand est-il absent ?",
                    desc: "- Analyse de scénarios de la vie courante (pressions de groupe, chantage affectif, emprise, consommation d’alcool, réseaux sociaux).\n- Définition juridique et éthique : le consentement doit être donné librement (sans peur ni menace), éclairé (en sachant ce qui est proposé), spécifique et révocable à tout instant (dire oui ne vaut pas pour toujours, on a le droit de changer d’avis).\n- Débat encadré avec l’infirmière scolaire : la sexualité doit être une source d’épanouissement partagé dans le respect absolu de l’autre.",
                    fds: "Éthique et société : distinguer la loi (qui punit les atteintes et violences sexuelles) et le respect des droits humains fondamentaux.",
                    comp: ["D5", "D1.3"], act: "A4-CONS" }
                ]},
                { code: "C", titre: "Évaluation sommative de fin de partie", seances: [
                  { s: 39, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : hormones, plaisir et contraception",
                    desc: "- Sujet DNB 10 points : schéma de contrôle hormonal, mode d’action d’un contraceptif et argumentation sur le respect/consentement.\n- Correction critériée LSU.",
                    comp: ["D1.3", "D4.1", "D5"] }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      code: "T3", titre: "Temps d’ajustement & projets interdisciplinaires", officiel: "Semaines d’approfondissement et de régulation",
      parties: [
        {
          code: "P1", titre: "Synthèse de cycle et orientation", officiel: "Réinvestissement transversal", couleur: "#757575",
          problematique: "Comment relier tous les apprentissages de 4e pour comprendre les défis écologiques et sanitaires de notre siècle ?",
          ancrage: "Projet climat, fresque de la biodiversité, découverte des métiers scientifiques.",
          lien: "Ces semaines permettent de rattraper d’éventuels décalages (sorties scolaires, jours fériés) ou de mener des projets fédérateurs.",
          attendus: ["Relier cycles géochimiques, flux du vivant et physiologie humaine"],
          chapitres: [
            { code: "I", titre: "Projets et transition", pb: "Comment agir en citoyen éclairé ?",
              sections: [
                { code: "A", titre: "Projets de synthèse", seances: [
                  { s: 40, h: 2, type: "projet", st: "nouvelle", titre: "Fresque du Carbone et du Climat de la classe", desc: "- Par équipes : reconstituer sur une fresque murale les liens de cause à effet entre réservoirs de carbone, activités humaines, effet de serre, réchauffement océanique et événements extrêmes.", comp: ["D1.3", "D4.1", "D5"] },
                  { s: 41, h: 1, type: "projet", st: "nouvelle", titre: "Valorisation des femmes de sciences dans l’établissement", desc: "- Exposition au CDI sur les grandes figures féminines étudiées (Marie Tharp, Katia Krafft, Eunice Foote, Françoise Barré-Sinoussi) et lutte contre les stéréotypes de genre dans les carrières scientifiques.", comp: ["D5"] },
                  { s: 42, h: 2, type: "projet", st: "nouvelle", titre: "Forum des métiers : géosciences, santé et biotechnologies", desc: "- Rencontres ou fiches métiers : géologue des risques, prévisionniste météo, ingénieur agronome, médecin, chercheur en infectiologie.", comp: ["D5"] },
                  { s: 43, h: 1, type: "eval", st: "nouvelle", titre: "Épreuve blanche DNB de fin d’année (10 pts)", desc: "- Sujet d’entraînement type Brevet croisant Sciences de la Terre et Corps humain, en conditions d’examen.", comp: ["D1.3", "D4.1", "D4.2"] },
                  { s: 44, h: 2, type: "cours", st: "nouvelle", titre: "Bilan annuel, validation des compétences LSU et passerelle vers la 3e", desc: "- Bilan personnalisé des compétences du socle (D1.3, D4.1, D4.2, D4.3, D5) et présentation des enjeux de la classe de 3e (cycle des roches, neurosciences des apprentissages, sélection naturelle, DNB terminal).", comp: ["D1.3"] }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};
