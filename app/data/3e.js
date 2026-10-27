/* Programmation SVT 3e — nouveaux programmes cycle 4 (projet CSP juillet 2025)
   44 semaines : semaines impaires = 1 h, semaines paires = 2 h (66 h).
   st : "reprise" | "adaptee" | "nouvelle"
   res : "pdf:<niveau>/<fichier>" | "html:<chemin svt-2027>" | "s:<niveau>/<id séance svt-2027>" | "pack:<pack skillsvt>" | "web:<url>|<libellé>" */
window.PROG = window.PROG || { levels: {}, activites: {} };
PROG.levels["3e"] = {
  label: "3e",
  titre: "Classe de troisième",
  couleur: "#e65100",
  filRouge: "Comment les roches et la biodiversité évoluent-elles dans le temps long, comment les neurosciences éclairent-elles notre façon d’apprendre et de ressentir nos émotions, et comment la science validée par les pairs guide-t-elle nos choix de citoyens et de futurs parents ?",
  fds: "Faire des sciences (3e) : comprendre la publication scientifique et le processus d’évaluation par les pairs (peer-review) ; distinguer consensus scientifique et controverses médiatiques ; vérifier la fiabilité des sources institutionnelles (CNRS, Inserm, INRAE, Académie des Sciences).",
  femmes: ["Rosalind Franklin (cliché 51 et structure de l’ADN)", "Emmanuelle Charpentier (prix Nobel pour les ciseaux moléculaires CRISPR-Cas9)", "Rachel Carson (biologiste, lanceuse d’alerte avec « Printemps silencieux »)", "Mary Anning (pionnière de la paléontologie et des fossiles marins)", "Françoise Barré-Sinoussi (virologie et santé publique)"],
  themes: [
    {
      code: "T1", titre: "Thème 1 — Terre et vivant", officiel: "Partie « Terre et vivant »",
      parties: [
        {
          code: "P1", titre: "Partie 1 — La Terre, planète dynamique : cycle des roches et ressources", officiel: "Thème « La Terre, planète dynamique »", couleur: "#00838f",
          problematique: "Les façades de notre collège, les pierres des monuments historiques et les galets de la rivière racontent des millions d’années d’histoire. Comment les roches se dégradent-elles, voyagent-elles et se reforment-elles dans un cycle perpétuel couplé au climat et aux ressources géologiques ?",
          ancrage: "Façades du collège et monuments de la ville (calcaire, grès, granite), carrières locales, crise des ressources minérales et énergétiques.",
          lien: "En 5e (cycle de l’eau) et en 4e (cycle du carbone), les flux biogéochimiques ont été posés. En 3e, on boucle le cycle des roches solides de la lithosphère.",
          attendus: ["Identifier les roches locales par des tests simples", "Décrire les étapes de formation d’une roche sédimentaire et le cycle des roches", "Distinguer ressources renouvelables et réserves non renouvelables", "Relier utilisation des réserves carbonées, réchauffement global et actions d’atténuation/adaptation"],
          chapitres: [
            {
              code: "I", titre: "Les roches de notre environnement et le cycle sédimentaire", pb: "De quoi sont faites les roches qui nous entourent et comment se forment les roches sédimentaires ?",
              sections: [
                { code: "A", titre: "Les roches du bâti local et affleurements", seances: [
                  { s: 1, h: 1, type: "terrain", st: "nouvelle", titre: "Classe de terrain : les roches des façades et monuments du quartier",
                    q: "Quelles roches composent les bâtiments qui nous entourent ?",
                    desc: "- Sortie aux abords immédiats du collège : observation des pierres de construction (calcaire à coquilles, grès, marbre, granite de bordures).\n- Tests d’identification simples : réaction à l’acide chlorhydrique dilué (effervescence des calcaires), test de dureté (raye le verre / rayé par l’ongle), porosité (goutte d’eau absorbée).\n- Définition des trois grands types de roches : sédimentaires, magmatiques et métamorphiques.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:3eme/Activite evolution groupe brachiopodes.pdf"], act: "A3-DENS" }
                ]},
                { code: "B", titre: "Dégradation, transport et sédimentation", seances: [
                  { s: 2, h: 2, type: "tp", st: "nouvelle", titre: "TP Démarche expérimentale : de l’altération à la sédimentation",
                    q: "Comment un massif montagneux se transforme-t-il en sable puis en roche compacte ?",
                    desc: "- Expérimentation analogique : altération d’une roche friable par gel/dégel ou dissolution, transport de sédiments dans une gouttière d’eau à courant variable (tri des particules selon leur taille).\n- Modélisation de la sédimentation : tassement de couches dans une éprouvette, compaction par perte d’eau et cimentation par précipitation de minéraux dissous.\n- Observation de fossiles piégés dans les sédiments : témoins des paléoenvironnements.",
                    comp: ["D4.1", "D1.3"], act: "A3-ROCH" }
                ]},
                { code: "C", titre: "Le grand cycle des roches terrestres", seances: [
                  { s: 3, h: 1, type: "cours", st: "nouvelle", titre: "Schéma bilan : le cycle reliant roches sédimentaires, magmatiques et métamorphiques",
                    q: "Comment toutes les roches de la Terre sont-elles connectées dans un cycle infini ?",
                    desc: "- Construction du schéma complet : roche en surface → érosion/dégradation → transport → roche sédimentaire → enfouissement avec hausse de pression/température (roche métamorphique) → fusion en magma → refroidissement (roche magmatique volcanique ou plutonique).\n- Interactions avec les cycles de l’eau (vecteur d’érosion) et du carbone (piégeage dans les calcaires).",
                    comp: ["D1.3"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Ressources géologiques, énergie et climat", pb: "Combien de temps la Terre a-t-elle mis pour fabriquer nos ressources, et pourquoi leur exploitation menace-t-elle l’équilibre climatique ?",
              sections: [
                { code: "A", titre: "Ressources renouvelables vs réserves non renouvelables", seances: [
                  { s: 4, h: 2, type: "tc", st: "reprise", titre: "Tâche complexe : Pétrole, lithium, bois — comparer formation et consommation",
                    q: "À quel rythme épuisons-nous les stocks géologiques de la planète ?",
                    desc: "- Analyse comparée des durées de formation (bois = quelques décennies ; pétrole/charbon = dizaines de millions d’années ; lithium/terres rares = processus géologiques uniques).\n- Notion de réserves exploitables vs ressources totales ; répartition géographique inégale des gisements mondiaux.\n- Calcul d’ordres de grandeur temporels : l’humanité consomme en 1 an ce que la Terre a mis des centaines de milliers d’années à accumuler.",
                    comp: ["D4.2", "D4.1", "D5"], act: "A3-RESS", res: ["pdf:3eme/cours enjeux exploitation ressources naturelles.pdf", "pdf:3eme/cours satisfaire nos besoins energetiques.pdf", "s:3eme/s59", "s:3eme/s60"] }
                ]},
                { code: "B", titre: "Combustion fossile, forçage thermique et océans", seances: [
                  { s: 5, h: 1, type: "act", st: "reprise", titre: "L’océan, accumulateur thermique et victime de l’acidification",
                    q: "Pourquoi les océans absorbent-ils plus de 90 % de l’excès de chaleur causé par les gaz à effet de serre ?",
                    desc: "- Données océanographiques : mesure de la hausse du contenu thermique des océans et dilatation thermique provoquant l’élévation du niveau marin.\n- TP ou expérience documentaire : dissolution du CO2 dans l’eau salée et baisse du pH (acidification menaçant le corail et les coquillages planctoniques).\n- Distinction essentielle : stratégies d’atténuation (réduire les émissions à la source) vs stratégies d’adaptation (digues, végétalisation, protection des côtes).",
                    comp: ["D4.1", "D4.2", "D5"], res: ["pdf:3eme/Activite acidification des oceans.pdf", "pdf:3eme/cours acidification des oceans.pdf", "pack:pack_3e_r_chauffement_climatique", "s:3eme/s58"] }
                ]},
                { code: "C", titre: "Évaluation géosciences et ressources", seances: [
                  { s: 6, h: 2, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : cycle des roches et ressources",
                    desc: "- Sujet DNB 10 points : formation d’un calcaire sédimentaire, temps de formation d’une ressource et calcul d’impact thermique.\n- Correction formative par compétences.",
                    comp: ["D1.3", "D4.2", "D4.1"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P2", titre: "Partie 2 — Les interactions Terre-vivant : évolution, biodiversité et santé des écosystèmes", officiel: "Thème « Les interactions Terre-vivant »", couleur: "#558b2f",
          problematique: "Pourquoi les moustiques du métro de Londres ne peuvent-ils plus se reproduire avec les moustiques de la surface ? Comment la sélection naturelle et la dynamique des populations expliquent-elles l’apparition de nouvelles espèces et la crise actuelle de la biodiversité ?",
          ancrage: "Archives fossiles des collections du collège, résistance des bactéries aux antibiotiques, trames vertes et noires de la métropole.",
          lien: "En 4e, le brassage génétique de la reproduction sexuée a été démontré. En 3e, on étudie comment ces variations individuelles se traduisent par l’évolution des populations entières sous la pression du milieu.",
          attendus: ["Reconstituer des paléoenvironnements et analyser une crise biologique majeure", "Expliquer l’évolution des populations par sélection naturelle et spéciation", "Argumenter sur les trames vertes/bleues/noires et le concept One Health", "Identifier les biotechnologies et solutions fondées sur la nature"],
          chapitres: [
            {
              code: "I", titre: "Histoire de la Terre et crises de la biodiversité", pb: "Comment sait-on que la vie a profondément changé au cours des temps géologiques ?",
              sections: [
                { code: "A", titre: "Les archives fossiles et la succession des paléoenvironnements", seances: [
                  { s: 7, h: 1, type: "act", st: "reprise", titre: "Enquête paléontologique : faire parler les fossiles",
                    q: "Comment reconstituer le paysage d’une région il y a des dizaines de millions d’années ?",
                    desc: "- Observation et dessin de fossiles réels ou moulages (ammonites, trilobites, végétaux du houiller) et de roches associées.\n- Utilisation d’une IA générative d’images en classe pour tester la reconstitution visuelle d’un paléoenvironnement à partir d’un prompt fondé sur des indices scientifiques précis (roches + faune fossile).\n- Démarche critique : confronter l’image générée par l’IA aux données fossiles réelles (repérer les anachronismes ou hallucinations visuelles).\n- Hommage : Mary Anning, pionnière autodidacte de la paléontologie anglaise (découverte des ichtyosaures et plésiosaures).",
                    fds: "IA et science : l’IA produit une illustration plausible, mais seule la géologie apporte les preuves matérielles.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:3eme/PLANCHES ANIMAUX ACTUELS ET FOSSILES.pdf", "pdf:3eme/correction voyage aux origines de la Terre.pdf", "s:3eme/s51"] }
                ]},
                { code: "B", titre: "Une crise biologique majeure du passé face à la crise actuelle", seances: [
                  { s: 8, h: 2, type: "tc", st: "reprise", titre: "Tâche complexe : La crise Crétacé-Paléogène (K-Pg, il y a 66 Ma)",
                    q: "Quelles furent les causes et les conséquences de la disparition des dinosaures non aviens ?",
                    desc: "- Étude ciblée d’UNE SEULE crise majeure (conforme à la prescription stricte du programme CSP) : la crise K-Pg.\n- Croisement d’indices géologiques : couche d’iridium météoritique (cratère de Chicxulub) et épanchements volcaniques colossaux des Trapps du Deccan.\n- Conséquences : effondrement de la photosynthèse, disparition de 75 % des espèces marines et continentales, puis radiation évolutive des mammifères et des oiseaux survivants.\n- Comparaison avec l’impact humain contemporain : vitesse d’extinction 100 à 1 000 fois supérieure aux rythmes naturels.",
                    comp: ["D4.1", "D4.2", "D1.3"], act: "A3-KPG", res: ["pdf:3eme/activite crise cretace.pdf", "pdf:3eme/cours crise permienne et cretace tertiaire.pdf", "s:3eme/s52"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Les mécanismes de l’évolution : sélection naturelle et spéciation", pb: "Comment une espèce évolue-t-elle au fil des générations sans avoir l’intention de s’adapter ?",
              sections: [
                { code: "A", titre: "La sélection naturelle dans une population", seances: [
                  { s: 9, h: 1, type: "act", st: "reprise", titre: "La phalène du bouleau et les bactéries résistantes : tester la sélection",
                    q: "Pourquoi certains caractères deviennent-ils plus fréquents au fil du temps ?",
                    desc: "- Jeu de simulation ou analyse de données chiffrées réelles : phalène claire/sombre face à la pollution industrielle, ou sélection de bactéries résistantes aux antibiotiques.\n- Mécanisme en trois temps : 1) diversité préexistante par mutations aléatoires ; 2) pression du milieu (prédateur ou antibiotique) qui élimine les moins aptes ; 3) reproduction différentielle des survivants qui transmettent leurs allèles avantageux.\n- Déconstruction de l’obstacle finaliste : l’être vivant ne mute pas « pour s’adapter », c’est l’environnement qui trie les formes les plus aptes à se reproduire.",
                    comp: ["D4.1", "D4.2"], res: ["pack:pack_act_3e_selection_naturelle", "pdf:3eme/Activite origine nouveau caractere.pdf", "pdf:3eme/cours mutation.pdf", "s:3eme/s48", "s:3eme/s49"] }
                ]},
                { code: "B", titre: "L’isolement et la spéciation", seances: [
                  { s: 10, h: 2, type: "tc", st: "nouvelle", titre: "Tâche complexe : Le moustique du métro de Londres (Culex molestus)",
                    q: "Comment une nouvelle espèce apparaît-elle à partir d’une population isolée ?",
                    desc: "- Étude de cas passionnante : des moustiques communs (Culex pipiens) colonisent les tunnels du métro londonien lors de sa construction à la fin du XIXe siècle.\n- Après 100 ans d’obscurité et d’isolement : ils piquent les humains au lieu des oiseaux, s’accouplent en espace confiné, ne rentrent plus en diapause l’hiver et ne peuvent plus se reproduire avec les moustiques de la surface (infertilité des hybrides).\n- Formalisation du mécanisme de spéciation : séparation géographique → accumulation de divergences génétiques → barrière reproductive.",
                    comp: ["D4.1", "D1.3"], act: "A3-SPEC" }
                ]}
              ]
            },
            {
              code: "III", titre: "Biodiversité, politiques publiques et One Health", pb: "Pourquoi la santé des humains dépend-elle directement de la santé des animaux et des forêts ?",
              sections: [
                { code: "A", titre: "Trames vertes, bleues et noires", seances: [
                  { s: 11, h: 1, type: "terrain", st: "nouvelle", titre: "Cartographie SIG : repérer la trame verte et noire autour du collège",
                    q: "Comment permettre aux animaux de circuler dans une ville bétonnée sans être écrasés ou désorientés ?",
                    desc: "- Utilisation d’un SIG local ou Géoportail : identification des corridors écologiques (trame verte = haies, parcs ; bleue = rivières ; noire = réduction de la pollution lumineuse nocturne).\n- Justification biologique : éviter la fragmentation des habitats pour maintenir le brassage génétique et la viabilité des populations.",
                    comp: ["D4.3", "D5"], res: ["web:https://www.geoportail.gouv.fr/|Géoportail"] }
                ]},
                { code: "B", titre: "Biotechnologies et solutions fondées sur la nature", seances: [
                  { s: 12, h: 2, type: "act", st: "nouvelle", titre: "Quand la nature inspire l’ingénierie et la santé",
                    q: "Comment utiliser les connaissances biologiques pour soigner et dépolluer durablement ?",
                    desc: "- Comparaison critique : solution classique (bétonnage des berges, engrais chimiques) vs solution fondée sur la nature (phytoremédiation par les roseaux, végétalisation des toitures, trames arborées contre les îlots de chaleur urbains).\n- Découverte des biotechnologies modernes : production d’insuline humaine par des bactéries génétiquement modifiées, anticorps monoclonaux.\n- Hommage : Emmanuelle Charpentier (prix Nobel 2020 pour la découverte de CRISPR-Cas9 avec Jennifer Doudna).\n- Le concept fédérateur « Une seule santé » (One Health).",
                    comp: ["D1.3", "D5"], act: "A3-ONEH" }
                ]},
                { code: "C", titre: "Évaluation évolution et biodiversité", seances: [
                  { s: 13, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : sélection naturelle et spéciation",
                    desc: "- Sujet DNB 10 points : calcul de fréquences alléliques, analyse d’un cas d’isolement reproducteur et argumentation sur les trames écologiques.\n- Grille LSU.",
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
          code: "P1", titre: "Partie 1 — Le fonctionnement de l’organisme : neurosciences, émotions et addictions", officiel: "Thème « Le fonctionnement de l’organisme »", couleur: "#c62828",
          problematique: "Pourquoi une nuit blanche avant un devoir nous empêche-t-elle de réussir alors qu’on pensait avoir révisé ? Comment notre cerveau apprend-il, d’où viennent nos émotions et comment les écrans ou les drogues piratent-ils nos circuits cérébraux ?",
          ancrage: "Rythmes de sommeil des collégiens, temps d’écran sur smartphone, compétences psychosociales (CPS), neurobiologie cognitive.",
          lien: "Entrée majeure des neurosciences dans les nouveaux programmes : on quitte le simple arc réflexe moteur pour explorer la plasticité synaptique, la consolidation mnésique par le sommeil et la biologie des émotions.",
          attendus: ["Expliquer le fonctionnement d’une synapse et le rôle des neurotransmetteurs", "Relier plasticité cérébrale, répétition et sommeil dans les apprentissages", "Identifier l’origine biologique des émotions et leurs composantes", "Expliquer les mécanismes cérébraux des addictions (écrans, drogues, jeux) et des TCA"],
          chapitres: [
            {
              code: "I", titre: "La synapse et le cerveau qui apprend", pb: "Comment l’information passe-t-elle d’un neurone à l’autre et comment notre cerveau se modifie-t-il quand on apprend ?",
              sections: [
                { code: "A", titre: "La communication synaptique chimique", seances: [
                  { s: 14, h: 2, type: "tp", st: "reprise", titre: "TP Modélisation : la synapse chimique et ses neurotransmetteurs",
                    q: "Pourquoi le message électrique ne peut-il pas sauter directement entre deux neurones ?",
                    desc: "- Schéma de microscopie électronique à très fort grossissement d’une fente synaptique (20 à 40 nm).\n- Déroulement chronologique de la transmission : 1) arrivée du message électrique à l’extrémité de l’axone ; 2) libération de neurotransmetteurs chimiques dans la fente ; 3) fixation sur des récepteurs membranaires du neurone ou de la cellule musculaire suivante ; 4) déclenchement d’un nouveau message.\n- Mise en évidence du sens unique de circulation du message.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:4eme/Activite mode action drogues et transmission message nerveux.pdf", "pdf:4eme/cours communication neuronale.pdf", "s:4eme/s62"] }
                ]},
                { code: "B", titre: "Plasticité cérébrale et consolidation par le sommeil", seances: [
                  { s: 15, h: 1, type: "tc", st: "nouvelle", titre: "Tâche complexe : Neurosciences de l’apprentissage — le rôle clé du sommeil",
                    q: "Que fait notre cerveau pendant que nous dormons la nuit ?",
                    desc: "- Données de neurosciences cognitives (Stanislas Dehaene / Inserm) : formation de nouvelles connexions synaptiques lors de la découverte d’une notion, puis renforcement par la répétition espacée.\n- Enregistrements EEG du sommeil à ondes lentes et paradoxal : rejeu accéléré des réseaux neuronaux activés le jour et élimination des connexions inutiles (élagage synaptique).\n- Analyse chiffrée : impact d’un manque de sommeil (< 8 h chez l’adolescent) sur la mémorisation à long terme et l’attention en classe.",
                    comp: ["D4.1", "D4.2", "D1.3"], act: "A3-CERV" }
                ]}
              ]
            },
            {
              code: "II", titre: "Origine biologique des émotions et compétences psychosociales", pb: "D’où viennent la peur, la joie, la colère et comment nos émotions s’expriment-elles dans notre corps ?",
              sections: [
                { code: "A", titre: "Composantes physiologiques et corporelles des émotions", seances: [
                  { s: 16, h: 2, type: "tp", st: "nouvelle", titre: "Atelier CPS : mesurer les signaux corporels d’une émotion",
                    q: "Pourquoi notre cœur s’emballe-t-il et notre gorge se serre-t-elle face à une surprise ou un stress ?",
                    desc: "- Définition scientifique : une émotion est une réaction biologique déclenchée par un stimulus interne ou externe en réponse à un besoin fondamental (sécurité, lien social, justice).\n- Mesure expérimentale : variation de la fréquence cardiaque et de la conductance cutanée face à une mise en situation (simulation d’un oral devant la classe).\n- Caractéristiques d’une émotion : intensité, durée brève, valence agréable (joie, fierté) ou désagréable (peur, tristesse, colère).\n- Composantes externes observables : expressions faciales universelles (Paul Ekman), langage para-verbal, posture.",
                    comp: ["D4.1", "D1.3"], act: "A3-EMOT" }
                ]},
                { code: "B", titre: "Régulation émotionnelle et compétences psychosociales", seances: [
                  { s: 17, h: 1, type: "act", st: "nouvelle", titre: "Identifier et réguler ses émotions pour vivre sereinement avec les autres",
                    q: "Comment calmer la tempête émotionnelle dans son cerveau ?",
                    desc: "- Schéma fonctionnel des structures cérébrales : amygdale (détection immédiate du danger/alarme émotionnelle) et cortex préfrontal (analyse rationnelle, freins et régulation).\n- Entraînement à la métacognition : nommer précisément son émotion pour désamorcer l’emballement de l’amygdale ; techniques de respiration contrôlée (cohérence cardiaque).\n- Précision officielle du programme : ne pas opposer raison et émotion, et aborder explicitement les émotions agréables (curiosité, émerveillement scientifique).",
                    comp: ["D1.3", "D5"] }
                ]}
              ]
            },
            {
              code: "III", titre: "Addictions, écrans et troubles des conduites alimentaires", pb: "Comment certaines molécules ou certains usages numériques prennent-ils le contrôle de notre volonté ?",
              sections: [
                { code: "A", titre: "Le piratage du circuit de la récompense par les drogues et écrans", seances: [
                  { s: 18, h: 2, type: "tc", st: "reprise", titre: "Tâche complexe : Écrans, jeux vidéo, drogues — même mécanisme cérébral ?",
                    q: "Pourquoi est-il si difficile de poser son téléphone quand un algorithme fait défiler des vidéos ?",
                    desc: "- Modélisation du circuit dopaminergique de la récompense : les drogues (alcool, cannabis, cocaïne, nicotine) et les notifications imprévisibles sur les réseaux sociaux provoquent une libération artificielle massive de dopamine.\n- Conséquence biologique : accoutumance (diminution des récepteurs synaptiques nécessitant des doses plus fortes) et dépendance physique ou psychologique.\n- Analyse des lois et politiques de santé publique régulant l’exposition des mineurs aux substances addictives, aux jeux d’argent et aux plateformes numériques.",
                    comp: ["D4.1", "D5", "D1.3"], act: "A3-ADDI", res: ["pdf:4eme/Activite effet drogues.pdf", "pdf:4eme/cours effets drogues.pdf", "s:4eme/s61"] }
                ]},
                { code: "B", titre: "Troubles des conduites alimentaires (TCA) à l’adolescence", seances: [
                  { s: 19, h: 1, type: "act", st: "nouvelle", titre: "Alimentation et santé mentale : comprendre les TCA", act: "A3-TCA",
                    q: "Pourquoi l’anorexie ou la boulimie touchent-elles particulièrement les adolescents ?",
                    desc: "- Approche à l’échelle de la santé des populations (conforme à la prescription officielle) : facteurs biologiques, hormonaux et pressions des stéréotypes corporels sur les réseaux sociaux.\n- Rôle de la détection précoce et des équipes médicales pluridisciplinaires ; déculpabilisation des malades.",
                    comp: ["D1.3", "D5"] }
                ]},
                { code: "C", titre: "Évaluation neurosciences et santé", seances: [
                  { s: 20, h: 2, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : synapse, sommeil et addictions",
                    desc: "- Sujet DNB 10 points : schéma légendé de synapse, graphique d’impact du sommeil sur les tests de mémoire et analyse d’une étude clinique sur la dépendance.\n- Correction critériée.",
                    comp: ["D1.3", "D4.1", "D4.2"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P2", titre: "Partie 2 — Virus, micro-organismes : antibiorésistance et vaccination HPV", officiel: "Thème « Virus, micro-organismes et interactions avec l’être humain »", couleur: "#6a1b9a",
          problematique: "Si nous ne changeons pas nos habitudes, l’antibiorésistance pourrait devenir la première cause de mortalité dans le monde d’ici 2050. Comment des bactéries sont-elles devenues insensibles à nos médicaments, et comment la vaccination prévient-elle certains cancers ?",
          ancrage: "Antibiogrammes en laboratoire hospitalier, campagne nationale contre les cancers HPV, boîtes de médicaments non consommés (Cyclamed).",
          lien: "En 4e, les bases de l’immunité ont été posées. En 3e, on applique la sélection naturelle aux bactéries et on traite les enjeux majeurs de santé publique contemporains.",
          attendus: ["Interpréter un antibiogramme et mesurer les zones d’inhibition", "Relier antibiorésistance et sélection naturelle", "Expliquer l’origine de contamination des écosystèmes par les antibiotiques", "Relier infection par HPV, division cellulaire incontrôlée (cancer) et couverture vaccinale"],
          chapitres: [
            {
              code: "I", titre: "L’antibiorésistance : quand la sélection naturelle menace nos soins", pb: "Pourquoi les antibiotiques ne fonctionnent-ils plus sur certaines souches bactériennes ?",
              sections: [
                { code: "A", titre: "Lecture et interprétation d’un antibiogramme", seances: [
                  { s: 21, h: 1, type: "tp", st: "reprise", titre: "TP Mesure : tester l’efficacité de différents antibiotiques sur gélose",
                    q: "Comment un médecin sait-il quel antibiotique prescrire pour guérir une infection ?",
                    desc: "- Analyse d’un antibiogramme réel photographié en haute définition : boîte de Pétri ensemencée de bactéries pathogènes avec pastilles imprégnées d’antibiotiques variés.\n- Mesure au double décimètre du diamètre de la zone d’inhibition (halo translucide sans croissance bactérienne).\n- Détermination des souches sensibles, intermédiaires ou résistantes à partir d’une table de lecture standardisée de la Société Française de Microbiologie.",
                    comp: ["D4.1", "D4.2"], act: "A3-ANTI", res: ["s:3eme/s20", "s:3eme/s21"] }
                ]},
                { code: "B", titre: "Mécanisme évolutif et dispersion dans les écosystèmes", seances: [
                  { s: 22, h: 2, type: "tc", st: "nouvelle", titre: "Tâche complexe : De l’étable à l’hôpital — la sélection des superbactéries",
                    q: "Comment l’usage massif d’antibiotiques dans les élevages et la surconsommation médicale sélectionnent-ils des bactéries invulnérables ?",
                    desc: "- Application directe du modèle de sélection naturelle : 1) présence initiale rarissime d’un mutant résistant par mutation aléatoire ; 2) utilisation massive d’antibiotiques éliminant toutes les bactéries sensibles ; 3) prolifération sans concurrence de la bactérie résistante.\n- Traçabilité environnementale : rejet d’antibiotiques dans les lisiers et eaux usées polluant les rivières (One Health).\n- Rôle citoyen : respect strict de la durée de prescription et rapport des boîtes non terminées en pharmacie (filière Cyclamed).",
                    comp: ["D4.1", "D4.2", "D5"], act: "A3-RESI" }
                ]}
              ]
            },
            {
              code: "II", titre: "Virus HPV, cancers et bouclier vaccinal", pb: "Comment un virus sexuellement transmissible peut-il provoquer un cancer des années plus tard, et comment l’éviter ?",
              sections: [
                { code: "A", titre: "Du virus HPV à la multiplication cellulaire cancéreuse", seances: [
                  { s: 23, h: 1, type: "act", st: "nouvelle", titre: "Quand un virus dérègle les chromosomes : la naissance d’un cancer",
                    q: "Qu’est-ce qu’un cancer au niveau cellulaire ?",
                    desc: "- Définition cellulaire : prolifération anarchique et incontrôlée de cellules anormales formant une tumeur.\n- Mode d’action des papillomavirus humains (HPV oncogènes type 16 et 18) : insertion de gènes viraux dans l’ADN des cellules des muqueuses génitales et oropharyngées, bloquant les gènes suppresseurs de tumeurs.\n- Mise en relation avec les frottis de dépistage et les lésions précancéreuses.",
                    comp: ["D1.3", "D4.1"] }
                ]},
                { code: "B", titre: "Bénéfice de la couverture vaccinale : l’exemple australien", seances: [
                  { s: 24, h: 2, type: "tc", st: "nouvelle", titre: "Tâche complexe & Épidémiologie : Comparer les politiques vaccinales dans le monde",
                    q: "Comment l’Australie est-elle en passe d’éradiquer complètement le cancer du col de l’utérus ?",
                    desc: "- Analyse comparée de données de santé publique mondiales (OMS / The Lancet) : Australie (couverture vaccinale > 80 % chez filles et garçons dès 2007 → chute spectaculaire des cancers) vs France (couverture longtemps < 40 %).\n- Justification de la campagne vaccinale gratuite en milieu scolaire en classe de 5e pour protéger durablement avant le début de la vie sexuelle.\n- Distinction rigoureuse entre faits épidémiologiques prouvés et théories complotistes antivax.",
                    fds: "Publication par les pairs : analyser un extrait d’article publié dans The Lancet montrant la méthodologie sur des cohortes de millions de patientes.",
                    comp: ["D4.2", "D1.3", "D5"], act: "A3-HPVC" }
                ]},
                { code: "C", titre: "Évaluation microbiologie et santé publique", seances: [
                  { s: 25, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : antibiogramme et vaccination HPV",
                    desc: "- Sujet DNB 10 points : lecture d’antibiogramme avec échelle millimétrée, graphique de couverture vaccinale et argumentation médicale.\n- Grille LSU.",
                    comp: ["D1.3", "D4.2", "D4.1"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P3", titre: "Partie 3 — Procréation humaine : génétique embryonnaire, bioéthique et consentement", officiel: "Thème « Procréation humaine »", couleur: "#ad1457",
          problematique: "Comment une seule cellule-œuf contenant 46 chromosomes donne-t-elle un être humain formé de milliers de milliards de cellules possédant toutes la même information ? Et comment la médecine moderne accompagne-t-elle le projet d’avoir ou non un enfant dans le respect des choix et de la loi ?",
          ancrage: "Échographies obstétricales, caryotypes prénataux réels, lois de bioéthique françaises révisées (PMA pour toutes, cadre de l’IVG).",
          lien: "Aboutissement du cycle 4 : consolidation de la génétique cellulaire (chromosomes, mitose), maîtrise médicale de la reproduction et éducation à la citoyenneté responsable.",
          attendus: ["Expliquer comment les cellules somatiques conservent le même caryotype (46 chromosomes)", "Décrire les échanges foeto-maternels au niveau du placenta et les risques toxiques", "Identifier les techniques médicales associées à la parentalité (PMA, IVG, IMG, pilule d’urgence)", "Identifier des situations où le consentement est absent ou invalide"],
          chapitres: [
            {
              code: "I", titre: "De la cellule-œuf au fœtus : génétique et développement", pb: "Comment une cellule unique se multiplie-t-elle sans perdre son identité chromosomique et comment grandit le fœtus ?",
              sections: [
                { code: "A", titre: "La multiplication cellulaire conforme", seances: [
                  { s: 26, h: 2, type: "tp", st: "reprise", titre: "TP Microscopie : les chromosomes lors de la multiplication cellulaire",
                    q: "Comment chaque nouvelle cellule reçoit-elle exactement la même information génétique que la cellule de départ ?",
                    desc: "- Observation de racines d’ail ou d’oignon colorées au carmin acétique : repérage des cellules en multiplication avec chromosomes individualisés.\n- Graphique de l’évolution de la quantité d’ADN au cours du cycle cellulaire : duplication préalable de l’ADN (chromosomes à deux chromatides identiques) puis séparation égale vers les deux cellules filles.\n- Formule chromosomique humaine : 46 chromosomes (23 paires), dont un chromosome de chaque paire provient de l’ovule et l’autre du spermatozoïde.\n- Précision officielle : privilégier le terme « multiplication cellulaire » plutôt que « division ».",
                    comp: ["D4.1", "D4.2"], res: ["pdf:3eme/cours mutation.pdf", "s:3eme/s36", "s:3eme/s37"] }
                ]},
                { code: "B", titre: "Le placenta : échanges vitaux et barrière perméable aux toxiques", seances: [
                  { s: 27, h: 1, type: "act", st: "reprise", titre: "Le cordon ombilical et le placenta : une frontière sous haute surveillance",
                    q: "Comment le fœtus respire-t-il et se nourrit-il dans le liquide amniotique sans jamais respirer d’air ?",
                    desc: "- Étude anatomique de l’ensemble placenta et cordon ombilical : le sang maternel et le sang fœtal ne se mélangent jamais, ils échangent à travers une fine membrane (nutriments, O2, déchets azotés).\n- Danger des substances toxiques franchissant la barrière : alcool (syndrome d’alcoolisation fœtale, première cause de handicap non génétique), nicotine, perturbateurs endocriniens et certains médicaments tératogènes.",
                    comp: ["D1.3", "D5"], res: ["pdf:4eme/Activite Placenta.pdf", "pdf:4eme/cours echanges mere foetus.pdf", "s:4eme/s44", "s:4eme/s45"] }
                ]},
                { code: "C", titre: "L’accouchement : le signal hormonal de la naissance", seances: [
                  { s: 28, h: 1, type: "act", st: "reprise", titre: "Neuf mois après : contractions utérines et mise au monde",
                    q: "Quel signal déclenche la naissance ?",
                    desc: "- Analyse des courbes hormonales de fin de grossesse : chute de progestérone et libération massive d’ocytocine provoquant les contractions régulières et puissantes du myomètre.\n- Étapes de l’accouchement : dilatation du col, expulsion du nouveau-né, délivrance du placenta.",
                    comp: ["D4.2", "D1.3"], res: ["pdf:4eme/Activite grossesse naissance.pdf"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Bioéthique, techniques médicales de parentalité et consentement", pb: "Quelles réponses la médecine moderne apporte-t-elle au désir ou au refus de grossesse, et quelles sont les règles du consentement ?",
              sections: [
                { code: "A", titre: "Techniques médicales : PMA, IVG, IMG et contraception d’urgence", seances: [
                  { s: 29, h: 1, type: "act", st: "reprise", titre: "Parcours de santé : PMA, IVG et pilule d’urgence",
                    q: "Comment la loi encadre-t-elle les choix associés à la procréation en France ?",
                    desc: "- Procréation Médicalement Assistée (PMA) : insémination artificielle, Fécondation In Vitro et Transfert d’Embryon (FIVETE, ICSI) ouverte à tous les couples de femmes et femmes célibataires (loi de bioéthique 2021).\n- Interruption Volontaire de Grossesse (IVG) : droit constitutionnel en France (inscrit dans la Constitution en 2024), délai légal de 14 semaines de grossesse (méthode médicamenteuse ou chirurgicale).\n- Dépistage prénatal et Interruption Médicale de Grossesse (IMG) en cas d’anomalie chromosomique ou maladie incurable.\n- Contraception d’urgence : pilule du lendemain gratuite et anonyme en pharmacie.",
                    comp: ["D5", "D1.3"], res: ["pdf:4eme/Activite FIVETE.pdf", "pdf:4eme/PMA.pdf", "s:4eme/s48"] }
                ]},
                { code: "B", titre: "Le consentement sexuel valide et la loi", seances: [
                  { s: 30, h: 2, type: "debat", st: "nouvelle", titre: "Atelier citoyen EVARS : identifier les critères d’un consentement valide",
                    q: "Quand le consentement d’une personne est-il réellement libre et quand est-il juridiquement absent ?",
                    desc: "- Analyse de cas juridiques et de situations de vie d’adolescents : l’absence de résistance physique ne signifie pas consentement (état de sidération, peur, emprise psychologique).\n- Situations où le consentement n’est PAS valide : minorité face à un adulte (seuil de non-consentement à 15 ans selon la loi), état d’ébriété avancée ou prise de drogues, menaces, chantage ou contrainte.\n- Principe fondamental d’égalité et de respect : s’assurer activement du désir partagé de son ou sa partenaire à chaque étape.",
                    comp: ["D5", "D1.3"], act: "A3-CONS" }
                ]},
                { code: "C", titre: "Évaluation procréation et bioéthique", seances: [
                  { s: 31, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : génétique embryonnaire et bioéthique",
                    desc: "- Sujet DNB 10 points : caryotype prénatal avec anomalie (trisomie 21), fonctionnement du placenta et analyse d’une situation de PMA ou de consentement.\n- Grille LSU.",
                    comp: ["D1.3", "D4.1", "D5"] }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      code: "T3", titre: "Préparation terminale au Diplôme National du Brevet & orientation", officiel: "Semaines d’entraînement, de révision active et de projet de fin de collège",
      parties: [
        {
          code: "P1", titre: "Méthodologie Brevet et transition vers le lycée", officiel: "Préparation DNB et orientation", couleur: "#757575",
          problematique: "Comment mobiliser l’ensemble des compétences acquises durant les quatre années du collège pour réussir l’épreuve écrite de sciences du DNB et aborder sereinement le lycée ?",
          ancrage: "Annales officielles du DNB de sciences (épreuve écrite de 30 min / 25 points ou 50 points selon les années), orientation vers la classe de seconde.",
          lien: "Entraînement intensif aux 4 types de questions du Brevet : repérage de données, calculs de variations, raisonnement mécanistique et synthèse argumentée.",
          attendus: ["Rédiger une argumentation scientifique complète avec connecteurs logiques", "Analyser des documents scientifiques inédits en autonomie"],
          chapitres: [
            { code: "I", titre: "Annales et entraînement intensif DNB", pb: "Comment décrypter un sujet de Brevet inconnu et réussir en 30 minutes chrono ?",
              sections: [
                { code: "A", titre: "Sujets zéro et entraînements blancs", seances: [
                  { s: 32, h: 2, type: "dnb", st: "reprise", titre: "Entraînement DNB n°1 : Thème Climat et forçage océanique", desc: "- Épreuve blanche en temps limité sur un sujet d’annales officielles type Brevet, suivie de la correction collective avec grille critériée LSU.", comp: ["D1.3", "D4.1", "D4.2"], res: ["pdf:3eme/sujet brevet 4.pdf", "pdf:3eme/correction sujet brevet 4.pdf"] },
                  { s: 33, h: 1, type: "dnb", st: "reprise", titre: "Entraînement DNB n°2 : Thème Génétique et drépanocytose", desc: "- Analyse d’arbre généalogique et de caryotypes ; rédaction d’une synthèse argumentée.", comp: ["D1.3", "D4.1"], res: ["pdf:3eme/sujet brevet albinisme.pdf", "pdf:3eme/sujet gene archeo.pdf"] },
                  { s: 34, h: 2, type: "dnb", st: "reprise", titre: "Entraînement DNB n°3 : Thème Vaccination et système immunitaire", desc: "- Sujet complet d’annales récentes (Métropole ou Centres étrangers) sur la réponse immunitaire et la mémoire.", comp: ["D1.3", "D4.2"], res: ["pdf:3eme/Entraînement Sujet Brevet 2.pdf", "pdf:3eme/correction sujet brevet 2.pdf"] },
                  { s: 35, h: 1, type: "dnb", st: "reprise", titre: "Entraînement DNB n°4 : Thème Biodiversité passée et crise biologique", desc: "- Arbre de parenté phylogénétique et crise d’extinction ; maîtrise de l’argumentation écrite.", comp: ["D1.3", "D4.1"], res: ["pdf:3eme/Correction sujet brevet 3.pdf"] }
                ]}
              ]
            },
            { code: "II", titre: "Peer-review de classe et clôture du Cycle 4", pb: "Comment les chercheurs valident-ils leurs découvertes et que retiendrons-nous de nos années collège ?",
              sections: [
                { code: "A", titre: "Atelier de publication par les pairs et grand bilan", seances: [
                  { s: 36, h: 2, type: "projet", st: "nouvelle", titre: "Atelier d’épistémologie : la revue par les pairs (Peer-Review) en direct", desc: "- Chaque groupe rédige un court article scientifique sur une expérience de l’année (problème, protocole, données chiffrées, conclusion).\n- Les articles sont relus et évalués en double aveugle par d’autres élèves (les pairs) avec une grille de recevabilité scientifique.\n- Découverte du processus mondial de validation du savoir scientifique face aux fausses publications.", fds: "Cœur du programme d’épistémologie de 3e : le savoir éprouvé n’est pas une opinion individuelle, c’est un consensus validé par la communauté des pairs.", comp: ["D1.3", "D4.1"] },
                  { s: 37, h: 1, type: "projet", st: "nouvelle", titre: "Table ronde : les sciences au lycée et les métiers de demain", desc: "- Présentation des enseignements scientifiques en seconde et des spécialités SVT au lycée général et technologique ; interventions d’anciens élèves ou professionnels.", comp: ["D5"] },
                  { s: 38, h: 2, type: "eval", st: "nouvelle", titre: "Brevet Blanc officiel de l’établissement (Épreuve commune)", desc: "- Épreuve officielle en conditions réelles d’examen supervisée par l’établissement scolaire.", comp: ["D1.3", "D4.1", "D4.2", "D4.3", "D5"] },
                  { s: 39, h: 1, type: "cours", st: "nouvelle", titre: "Correction personnalisée du Brevet Blanc et remédiation ciblée", desc: "- Travail individualisé sur les points fragiles identifiés dans l’épreuve commune.", comp: ["D1.3"] },
                  { s: 40, h: 2, type: "cours", st: "nouvelle", titre: "Grand bilan des concepts transversaux du Cycle 4", desc: "- Frise chronologique géologique géante et carte conceptuelle reliant Terre, Vivant, Santé et Éthique de la 5e à la 3e.", comp: ["D1.3", "D4.3"] },
                  { s: 41, h: 1, type: "terrain", st: "nouvelle", titre: "Projet de clôture : valorisation écologique du collège", desc: "- Installation de nichoirs, d’hôtels à insectes ou de panneaux explicatifs sur les roches et plantes du collège réalisés par les élèves.", comp: ["D5"] },
                  { s: 42, h: 2, type: "projet", st: "nouvelle", titre: "Session de révisions collectives flash pour le DNB", desc: "- Quiz interactif, fiches mémo et réactivation des notions clés avant les épreuves terminales.", comp: ["D1.3"] },
                  { s: 43, h: 1, type: "cours", st: "nouvelle", titre: "Conseils méthodologiques et gestion du stress de l’examen", desc: "- Application concrète des neurosciences vues en classe : gestion du sommeil avant l’épreuve, respiration régulatrice, gestion du temps.", comp: ["D5"] },
                  { s: 44, h: 2, type: "cours", st: "nouvelle", titre: "Clôture du Cycle 4 : remise du passeport de compétences scientifiques", desc: "- Validation des bilans de fin de cycle du Livret Scolaire Unique (LSU) et mot d’au revoir vers le lycée.", comp: ["D1.3"] }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};
