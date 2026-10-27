/* Programmation SVT 5e — nouveaux programmes cycle 4 (projet CSP juillet 2025)
   44 semaines : semaines impaires = 1 h, semaines paires = 2 h (66 h).
   st : "reprise" (ressource existante réutilisée) | "adaptee" (ressource existante adaptée) | "nouvelle" (à créer — idée concrète / fiche skillsvt)
   res : "pdf:<niveau>/<fichier>" | "html:<chemin svt-2027>" | "s:<niveau>/<id séance svt-2027>" | "pack:<pack skillsvt>" | "out:<chemin skillsvt/out>" | "img:<chemin svt-2027>" | "web:<url>|<libellé>" */
window.PROG = window.PROG || { levels: {}, activites: {} };
PROG.levels["5e"] = {
  label: "5e",
  titre: "Classe de cinquième",
  couleur: "#2e7d32",
  filRouge: "Pourquoi la Terre est-elle habitable, comment le vivant y est-il organisé… et comment notre corps fonctionne-t-il, se défend-il et procrée-t-il ?",
  fds: "Faire des sciences (5e) : distinguer une démarche scientifique d’une démarche qui ne l’est pas ; distinguer savoir scientifique, croyance et opinion ; identifier les apports des sciences dans le quotidien. Traité au fil des séances (repères 🔬), avec un exemple historique et un exemple récent à chaque fois.",
  femmes: ["Inge Lehmann (graine du noyau, 1936)", "Lynn Margulis (symbioses, origine des cellules)", "Katherine Johnson / équipes NASA (missions martiennes)", "Françoise Barré-Sinoussi (virologie)"],
  themes: [
    {
      code: "T1", titre: "Thème 1 — Terre et vivant", officiel: "Partie « Terre et vivant »",
      parties: [
        {
          code: "P1", titre: "Partie 1 — La Terre, planète habitable", officiel: "Thème « La Terre, planète habitable »", couleur: "#0277bd",
          problematique: "Depuis février 2021, le rover Perseverance explore le cratère Jezero, un ancien delta martien. Pourquoi la Terre abrite-t-elle la vie depuis au moins 3,5 milliards d’années alors que Mars, sa voisine, semble aujourd’hui stérile ?",
          ancrage: "Actualité spatiale (NASA/ESA), données de missions réelles, eau du robinet et rivière locale (bassin de l’Huveaune).",
          lien: "Point de départ de l’année : on construit l’outil « cycle » (réservoirs, flux, temps de résidence) qui sera réinvesti pour le carbone (4e) et les roches (3e).",
          attendus: ["Nommer les enveloppes concentriques et leurs caractéristiques", "Relier paramètres planétaires et présence d’eau liquide / de vie", "Identifier des preuves d’eau passée sur Mars", "Calculer des temps de résidence au tableur", "Expliquer la diffusion d’une pollution selon les réservoirs"],
          chapitres: [
            {
              code: "I", titre: "La Terre, une planète formée d’enveloppes", pb: "Comment connaître l’intérieur d’une planète où personne n’est jamais allé ?",
              sections: [
                { code: "A", titre: "Les enveloppes concentriques de la Terre", seances: [
                  { s: 1, h: 1, type: "act", st: "nouvelle", titre: "Situation déclenchante : Perseverance cherche la vie sur Mars",
                    q: "Qu’est-ce qui rend une planète habitable ?",
                    desc: "- Vidéo d’atterrissage de Perseverance (NASA, 18/02/2021) puis recueil des conceptions : dessiner l’intérieur de la Terre et lister « ce qu’il faut pour vivre ».\n- Formulation collective du problème de la partie et d’hypothèses (eau, air, température…), affichées pour être validées au fil des séances.",
                    fds: "Savoir ou croyance ? Le « visage sur Mars » photographié par Viking 1 (1976) n’est qu’une colline vue en haute résolution en 2001 : une observation se vérifie avec de meilleurs instruments.",
                    comp: ["D1.3", "D4.1"], res: ["web:https://mars.nasa.gov/mars2020/|Mission Mars 2020 (NASA)"] },
                  { s: 2, h: 2, type: "tp", st: "nouvelle", titre: "TP : granite, basalte, péridotite — « peser » les enveloppes",
                    q: "Les enveloppes de la Terre sont-elles faites des mêmes matériaux ?",
                    desc: "- Mesurer la masse volumique de trois roches (balance + éprouvette graduée, méthode du déplacement d’eau) et comparer : croûte continentale (granite), océanique (basalte), manteau (péridotite).\n- Construire un modèle à l’échelle des enveloppes (bande de papier : 1 cm = 100 km) et y placer le noyau métallique.\n- Portrait : Inge Lehmann découvre la graine solide du noyau grâce aux ondes sismiques (1936).",
                    comp: ["D4.2", "D4.1"], res: ["pack:pack_act_5e_adn_cellule"] }
                ]},
                { code: "B", titre: "Océans et continents", seances: [
                  { s: 3, h: 1, type: "act", st: "nouvelle", titre: "Comparer océans et continents : surfaces et altitudes",
                    q: "Notre planète est-elle « Terre » ou « Océan » ?",
                    desc: "- Sur un globe ou Géoportail/GEBCO : repérer plaines, chaînes de montagnes, plateaux continentaux, fosses abyssales et dorsales.\n- Calculer la part des océans (≈ 71 % de la surface) et lire une courbe de répartition des altitudes/profondeurs.",
                    comp: ["D4.3", "D4.2"], res: ["web:https://www.gebco.net/|Carte bathymétrique GEBCO"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Les conditions de l’habitabilité", pb: "Quelles conditions font d’une planète un lieu habitable, et pourquoi Mars ne l’est-elle plus ?",
              sections: [
                { code: "A", titre: "Atmosphère, pression, température et eau liquide", seances: [
                  { s: 4, h: 2, type: "tc", st: "nouvelle", titre: "Tâche complexe : Mission Jezero — Mars a-t-elle pu être habitable ?",
                    q: "Pourquoi l’eau est-elle liquide sur Terre et pas à la surface de Mars aujourd’hui ?",
                    desc: "- Comparer les caractéristiques réelles de la Terre et de Mars (données NASA) : composition de l’atmosphère (dont gaz à effet de serre), pression, température moyenne.\n- Expérience : de l’eau tiède dans une seringue bouchée « bout » quand on tire le piston (baisse de pression).\n- Différenciation : tâche complexe (rapport d’expert pour l’agence spatiale) ou parcours guidé + 3 coups de pouce.",
                    comp: ["D4.1", "D4.2", "D1.3"], act: "A5-HAB" }
                ]},
                { code: "B", titre: "Mars, une planète qui a perdu son eau", seances: [
                  { s: 5, h: 1, type: "act", st: "nouvelle", titre: "Enquête : les preuves d’une eau passée sur Mars",
                    q: "Comment prouver qu’une rivière a coulé sur une planète où personne n’est allé ?",
                    desc: "- Comparer des galets arrondis photographiés par Curiosity (cratère Gale, 2012) à des galets de rivière locaux ; analyser l’image du delta de Jezero.\n- Relier la perte d’atmosphère (mesures de la sonde MAVEN) à la disparition de l’eau liquide : une histoire géologique différente.",
                    fds: "Une preuve scientifique repose sur des faits observés et comparés (actualisme), pas sur une opinion.",
                    comp: ["D4.1", "D1.3"], res: ["web:https://www.nasa.gov/mission/maven/|Mission MAVEN (NASA)"] }
                ]},
                { code: "C", titre: "La vie dans des conditions extrêmes", seances: [
                  { s: 6, h: 1, type: "act", st: "nouvelle", titre: "Vivre sans soleil : les sources hydrothermales des grands fonds",
                    q: "Jusqu’où la vie est-elle possible sur Terre ?",
                    desc: "- Étude documentaire des communautés des sources hydrothermales (vers Riftia, bactéries) découvertes en 1977, et des sources hydrominérales (thermophiles).\n- Classer des milieux extrêmes (température, pression, salinité) et les organismes associés ; discuter : « ce qui compte, c’est l’eau liquide ».",
                    comp: ["D1.3", "D4.3"], res: ["web:https://wwz.ifremer.fr/|Ifremer — grands fonds"] }
                ]}
              ]
            },
            {
              code: "III", titre: "Le cycle de l’eau, premier cycle biogéochimique", pb: "L’eau que nous buvons a peut-être déjà circulé dans l’océan pendant des millénaires : comment circule-t-elle et pourquoi certaines pollutions durent-elles si longtemps ?",
              sections: [
                { code: "A", titre: "Réservoirs et flux", seances: [
                  { s: 6, h: 1, type: "act", st: "nouvelle", titre: "Du bassin de l’Huveaune au cycle global de l’eau",
                    q: "Où se trouve l’eau de la Terre et comment passe-t-elle d’un réservoir à l’autre ?",
                    desc: "- Construire le schéma du cycle de l’eau local (pluie, ruissellement, infiltration, nappe, rivière, mer) puis global (réservoirs, flux).\n- Identifier les réservoirs à partir d’un tableau de volumes réels (Shiklomanov) et représenter leurs proportions (diagramme).",
                    comp: ["D4.2", "D4.3"], res: ["pdf:6eme/cours diversite peuplements huveaune.pdf"] }
                ]},
                { code: "B", titre: "Temps de résidence et durabilité des réservoirs", seances: [
                  { s: 7, h: 1, type: "tc", st: "nouvelle", titre: "Tableur : combien de temps une goutte reste-t-elle dans l’atmosphère ? dans l’océan ?",
                    q: "Pourquoi une pollution de l’océan ou d’une nappe est-elle plus durable qu’une pollution de l’air ?",
                    desc: "- Calculer au tableur temps de résidence = volume du réservoir / flux sortant (≈ 9 jours pour l’atmosphère, ≈ 3 000 ans pour l’océan).\n- Raisonner en ordres de grandeur ; un réservoir (au choix : l’océan) est explicité.",
                    comp: ["D4.2", "D4.1"], act: "A5-EAU" }
                ]},
                { code: "C", titre: "Pollutions et apports de nutriments", seances: [
                  { s: 8, h: 1, type: "tp", st: "nouvelle", titre: "Maquette : une pollution qui voyage dans une nappe",
                    q: "Que devient un polluant déversé sur le sol ?",
                    desc: "- Maquette d’aquifère (bac transparent, sable, graviers, puits = paille) : injection d’un colorant alimentaire, suivi de sa diffusion vers le « puits » et la « rivière ».\n- Relier la lenteur de la nappe au temps de résidence ; exemple des nitrates qui persistent des décennies dans certaines nappes (BRGM).",
                    comp: ["D4.1", "D5"] },
                  { s: 8, h: 1, type: "act", st: "nouvelle", titre: "Les fleuves nourrissent la mer : les blooms planctoniques",
                    q: "Pourquoi la mer est-elle plus riche en vie près de l’embouchure des fleuves ?",
                    desc: "- Comparer des images satellites de chlorophylle (Copernicus Sentinel-3) au large du Rhône et en pleine mer ; relier apports continentaux de nutriments et abondance du plancton.\n- Bilan de la partie : retour sur les hypothèses de la séance 1.",
                    comp: ["D4.3", "D1.3"], res: ["web:https://www.copernicus.eu/fr|Copernicus"] }
                ]},
                { code: "D", titre: "Évaluation de la partie", seances: [
                  { s: 9, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : une planète habitable",
                    desc: "- Sujet format DNB 10 points : tableau Terre/Vénus ou Terre/Mars, schéma du cycle de l’eau, calcul d’un temps de résidence.\n- Grille LSU (D1.3, D4.1, D4.2).",
                    comp: ["D1.3", "D4.1", "D4.2"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P2", titre: "Partie 2 — La Terre, planète dynamique", officiel: "Thème « La Terre, planète dynamique »", couleur: "#00838f",
          problematique: "Le 10 janvier 1992, 28 800 jouets de bain tombent d’un cargo dans le Pacifique Nord ; des mois plus tard, on les retrouve sur les côtes de l’Alaska. Qu’est-ce qui met en mouvement l’air et l’eau de notre planète, et comment ces mouvements façonnent-ils les climats ?",
          ancrage: "Mistral et épisodes méditerranéens, données de la station météo du collège et de Météo-France, bouées dérivantes réelles.",
          lien: "Une planète habitable n’est pas immobile : les enveloppes fluides étudiées en partie 1 circulent en permanence.",
          attendus: ["Distinguer météorologie et climat, du local au global", "Caractériser vents et courants à partir de données satellitaires", "Modéliser l’origine des mouvements (inégale répartition de l’énergie solaire)", "Identifier le couplage océan/atmosphère"],
          chapitres: [
            {
              code: "I", titre: "Météo ou climat ?", pb: "Une journée de mistral glacial remet-elle en cause le réchauffement climatique ?",
              sections: [
                { code: "A", titre: "Du temps qu’il fait au climat local", seances: [
                  { s: 10, h: 1, type: "act", st: "nouvelle", titre: "La météo du collège face aux normales climatiques",
                    q: "Le temps d’aujourd’hui suffit-il à décrire le climat de notre ville ?",
                    desc: "- Relever température, vent, pluie (station du collège sur microcontrôleur ou station Météo-France) pendant une semaine.\n- Comparer aux normales climatiques sur 30 ans (Infoclimat / Météo-France) : échelle de temps et d’espace.",
                    fds: "Opinion ou savoir : « Il a gelé, donc le réchauffement n’existe pas » — un fait isolé contre une tendance mesurée sur 30 ans.",
                    comp: ["D4.2", "D1.3"], res: ["web:https://www.infoclimat.fr/|Infoclimat", "html:activites/4eme-C2-climats-vents-courants.html"] }
                ]},
                { code: "B", titre: "Les grandes zones climatiques", seances: [
                  { s: 10, h: 1, type: "act", st: "adaptee", titre: "Les zones climatiques du globe",
                    q: "Pourquoi fait-il plus chaud à l’équateur qu’aux pôles ?",
                    desc: "- Cartographier les grandes zones climatiques à partir de diagrammes ombrothermiques de villes réelles.\n- Formuler l’hypothèse d’un lien avec l’énergie solaire reçue (testée au chapitre III).",
                    comp: ["D4.3", "D4.2"], res: ["s:4eme/s23"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Les mouvements des enveloppes fluides", pb: "Comment se déplacent l’air et l’eau à l’échelle du globe ?",
              sections: [
                { code: "A", titre: "La circulation atmosphérique", seances: [
                  { s: 11, h: 1, type: "act", st: "adaptee", titre: "Lire le vent sur des cartes satellitaires",
                    q: "D’où vient le vent qui souffle sur notre région ?",
                    desc: "- Exploiter des cartes animées de vents (Windy, earth.nullschool) : direction, vitesse, grandes circulations ; cas du mistral.\n- Identifier la source des données (satellites, ballons-sondes). Limite : cellules atmosphériques et force de Coriolis hors programme.",
                    comp: ["D4.3", "D4.2"], res: ["web:https://www.windy.com/|Windy", "pack:pack_4e_origine_des_vents_et_des_courants", "s:4eme/s25"] }
                ]},
                { code: "B", titre: "Les courants océaniques", seances: [
                  { s: 12, h: 2, type: "tc", st: "nouvelle", titre: "Les canards du Pacifique : cartographier les courants",
                    q: "Comment des jouets perdus en mer peuvent-ils traverser un océan ?",
                    desc: "- Reconstituer la dérive des jouets de 1992 et la comparer à une carte des courants de surface ; découvrir le réseau de flotteurs Argo.\n- Modéliser un courant de profondeur : eau froide et salée colorée versée dans une cuve d’eau tiède.",
                    comp: ["D4.3", "D4.1", "D1.3"], act: "A5-COUR", res: ["s:4eme/s26"] }
                ]}
              ]
            },
            {
              code: "III", titre: "Le moteur des mouvements et le couplage océan-atmosphère", pb: "Quelle énergie met l’air et l’eau en mouvement, et comment ces deux enveloppes agissent-elles l’une sur l’autre ?",
              sections: [
                { code: "A", titre: "L’inégale répartition de l’énergie solaire", seances: [
                  { s: 13, h: 1, type: "tp", st: "adaptee", titre: "Modélisation : une lampe, un globe, des thermomètres",
                    q: "Toutes les régions reçoivent-elles la même énergie du Soleil ?",
                    desc: "- Mesurer l’échauffement de capteurs placés à différentes latitudes d’un globe éclairé par une lampe.\n- Cuve : eau chaude colorée / eau froide → mise en mouvement par différence de température. Critiquer les limites du modèle.",
                    comp: ["D4.1", "D4.2"], res: ["s:4eme/s25"] }
                ]},
                { code: "B", titre: "Le couplage océan-atmosphère et les climats", seances: [
                  { s: 14, h: 1, type: "tp", st: "nouvelle", titre: "Le vent entraîne l’océan : modèle et conséquences sur les climats",
                    q: "Pourquoi l’Europe de l’Ouest est-elle plus douce que le Canada à la même latitude ?",
                    desc: "- Modèle : un sèche-cheveux souffle à la surface d’une cuve (poivre ou confettis en surface) → courant de surface.\n- Comparer les températures moyennes d’hiver de villes situées à la même latitude des deux côtés de l’Atlantique ; rôle des courants dans les climats.",
                    comp: ["D4.1", "D4.3"] },
                  { s: 14, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : enveloppes fluides et climats",
                    desc: "- Sujet 10 points : données météo vs climat, carte de courants, interprétation d’une modélisation.",
                    comp: ["D4.3", "D4.1", "D1.3"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P3", titre: "Partie 3 — Les interactions Terre-vivant", officiel: "Thème « Les interactions Terre - vivant »", couleur: "#558b2f",
          problematique: "La vie n’occupe qu’une pellicule de quelques kilomètres d’épaisseur à la surface d’une planète de 6 371 km de rayon. Comment les êtres vivants y sont-ils organisés, comment obtiennent-ils leur énergie, et comment colonisent-ils les milieux ?",
          ancrage: "Microscopie, mesures de respiration avec capteurs, jardin du collège, berges envahies par la renouée du Japon.",
          lien: "Les êtres vivants occupent les interfaces des enveloppes étudiées en parties 1 et 2 et échangent avec elles (O2, CO2, eau).",
          attendus: ["Localiser la biosphère et ses dimensions", "Identifier uni/pluricellulaires, cellules spécialisées, microbiote non humain", "Mettre en évidence et mesurer la respiration ; écrire son bilan", "Relier prélèvement d’O2, transport et utilisation", "Caractériser la multiplication asexuée et ses usages agricoles"],
          chapitres: [
            {
              code: "I", titre: "La biosphère, une pellicule de vie", pb: "Où trouve-t-on la vie sur Terre ?",
              sections: [
                { code: "A", titre: "Dimensions et diversité des milieux de vie", seances: [
                  { s: 15, h: 1, type: "act", st: "nouvelle", titre: "Une maquette à l’échelle : la biosphère est-elle épaisse ?",
                    q: "Quelle place la vie occupe-t-elle à l’échelle de la planète ?",
                    desc: "- Placer sur une maquette à l’échelle les limites connues du vivant (fonds des fosses océaniques, bactéries du sous-sol profond, oiseaux en altitude).\n- Comparer l’épaisseur de la biosphère au rayon terrestre ; classer des milieux de vie selon leurs caractéristiques physico-chimiques.",
                    comp: ["D4.2", "D4.3"] }
                ]}
              ]
            },
            {
              code: "II", titre: "L’organisation des êtres vivants", pb: "Qu’ont en commun une levure, un chêne et un être humain ?",
              sections: [
                { code: "A", titre: "La cellule, unité du vivant", seances: [
                  { s: 16, h: 2, type: "tp", st: "adaptee", titre: "TP microscopie : unicellulaires et pluricellulaires",
                    q: "Tous les êtres vivants sont-ils faits de cellules ?",
                    desc: "- Observer et dessiner : levure, paramécie (eau de mare), épiderme d’oignon, feuille d’élodée, cellules buccales.\n- Classer uni/pluricellulaires ; chez l’unicellulaire, la cellule assure toutes les fonctions.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:4eme/cours un caractere commun aux etres vivants.pdf", "s:6eme/s55"] }
                ]},
                { code: "B", titre: "Cellules spécialisées, tissus, organes, appareils", seances: [
                  { s: 17, h: 1, type: "act", st: "nouvelle", titre: "Des cellules spécialisées aux appareils",
                    q: "Pourquoi les cellules d’un pluricellulaire sont-elles différentes ?",
                    desc: "- À partir de photos de microscopie (feuille, racine, muscle, sang de poisson), associer cellule spécialisée → tissu → organe → appareil → organisme.\n- Construire un schéma emboîté des niveaux d’organisation.",
                    comp: ["D1.3", "D4.1"] }
                ]},
                { code: "C", titre: "Un microbiote indispensable (hors être humain)", seances: [
                  { s: 18, h: 1, type: "act", st: "nouvelle", titre: "Vache, termite, corail : des partenaires microscopiques",
                    q: "Un organisme peut-il vivre sans les micro-organismes qu’il héberge ?",
                    desc: "- Étude de cas : le rumen de la vache digère la cellulose grâce à son microbiote ; le corail blanchit quand il perd ses algues symbiotiques.\n- Portrait : Lynn Margulis et l’importance des symbioses dans l’histoire du vivant.",
                    comp: ["D1.3", "D4.1"] }
                ]}
              ]
            },
            {
              code: "III", titre: "Le métabolisme respiratoire", pb: "Tous les êtres vivants respirent-ils, et à quoi sert réellement la respiration ?",
              sections: [
                { code: "A", titre: "Mettre en évidence la respiration", seances: [
                  { s: 18, h: 1, type: "tp", st: "nouvelle", titre: "Eau de chaux et êtres vivants : qui rejette du CO2 ?",
                    q: "Les plantes, les champignons, les animaux respirent-ils ?",
                    desc: "- Concevoir des montages avec témoin : graines germées, levures, criquets (enceintes fermées + eau de chaux).\n- Conclure : consommation de dioxygène et rejet de dioxyde de carbone par tous ces êtres vivants.",
                    fds: "Une expérience n’est concluante qu’avec un témoin qui ne diffère que par un seul facteur.",
                    comp: ["D4.1"], res: ["pack:pack_6e_les_besoins_nerg_tiques_de_l_organisme_e"] }
                ]},
                { code: "B", titre: "Mesurer la respiration cellulaire", seances: [
                  { s: 19, h: 1, type: "tp", st: "nouvelle", titre: "ExAO / microcontrôleur : des levures avec et sans glucose",
                    q: "De quoi une cellule a-t-elle besoin pour respirer ?",
                    desc: "- Mesurer l’évolution de [O2] et/ou [CO2] dans deux enceintes de levures (avec / sans glucose) avec capteurs.\n- Tracer et interpréter les courbes (données réelles produites par la classe).",
                    comp: ["D4.1", "D4.2"], act: "A5-RESP" }
                ]},
                { code: "C", titre: "Bilan et organes respiratoires", seances: [
                  { s: 20, h: 1, type: "cours", st: "nouvelle", titre: "Le bilan de la respiration aérobie",
                    q: "Que devient l’énergie du glucose ?",
                    desc: "- Construire le bilan : glucose + dioxygène → dioxyde de carbone + eau + énergie utilisable par la cellule.\n- Distinguer conversion d’énergie et « production » d’énergie (obstacle).",
                    comp: ["D1.3"] },
                  { s: 20, h: 1, type: "tp", st: "nouvelle", titre: "Branchies et circulation chez le poisson",
                    q: "Comment le dioxygène du milieu parvient-il à toutes les cellules ?",
                    desc: "- Observer/disséquer les branchies d’un poisson (achat poissonnerie) et le cœur ; comparer poumons/branchies selon le milieu de vie.\n- Schéma : lieu d’approvisionnement en O2 → système circulatoire → cellules (le système humain est réservé à la 4e).",
                    comp: ["D4.1", "D1.3"] }
                ]}
              ]
            },
            {
              code: "IV", titre: "La multiplication asexuée", pb: "Comment la renouée du Japon a-t-elle envahi les berges de nos rivières sans produire de graines ?",
              sections: [
                { code: "A", titre: "Un seul parent, des individus identiques", seances: [
                  { s: 21, h: 1, type: "act", st: "reprise", titre: "Stolons, tubercules, rhizomes : observer la multiplication asexuée",
                    q: "Comment une plante peut-elle produire de nouveaux individus sans fleur ?",
                    desc: "- Observer des stolons de fraisier, des tubercules de pomme de terre, un rhizome de renouée.\n- Relier multiplications cellulaires successives et groupe d’individus identiques (clone).",
                    comp: ["D4.1", "D1.3"], res: ["pdf:6eme/UNE PLANTE TRES ENVAHISSANTE.pdf", "pdf:6eme/correction activite fraisier.pdf", "pdf:6eme/cours multiplication vegetative.pdf", "pdf:4eme/Activite reproduction asexuee.pdf"] }
                ]},
                { code: "B", titre: "Coloniser rapidement un milieu", seances: [
                  { s: 22, h: 1, type: "tp", st: "nouvelle", titre: "Mettre en œuvre le bouturage",
                    q: "Un fragment de plante peut-il redonner une plante entière ?",
                    desc: "- Réaliser des boutures (saule, géranium, plectranthus) avec conditions variées et témoin ; suivi photographique sur 3 semaines.\n- Lancer un carnet de suivi (lien avec le jardin du collège).",
                    comp: ["D4.1"], res: ["pdf:6eme/la_multiveget.pdf"] },
                  { s: 22, h: 1, type: "terrain", st: "nouvelle", titre: "Classe de terrain : cartographier une colonie clonale",
                    q: "Pourquoi trouve-t-on des tapis de la même plante sur les berges ?",
                    desc: "- Cartographier aux abords du collège une colonie (renouée, lierre, chiendent, fraisier) ; mesurer sa surface ; identifier les organes de multiplication.\n- Relier multiplication asexuée et colonisation des milieux (espèce invasive).",
                    comp: ["D4.3", "D5"], res: ["pdf:4eme/Activite espece invasive.pdf"] }
                ]},
                { code: "C", titre: "La multiplication asexuée dans l’agriculture", seances: [
                  { s: 23, h: 1, type: "act", st: "nouvelle", titre: "Clones agricoles : atouts et fragilités (la banane Cavendish)",
                    q: "Pourquoi les agriculteurs multiplient-ils les plantes par clonage… et quel risque prennent-ils ?",
                    desc: "- Bouturage, marcottage, culture in vitro : intérêts (rapidité, caractères conservés).\n- Étude de cas : les bananiers Cavendish, tous clones, menacés par la maladie de Panama (TR4) ; métiers de l’horticulture et de l’agronomie.",
                    comp: ["D1.3", "D5"] }
                ]},
                { code: "D", titre: "Bilan et évaluation", seances: [
                  { s: 24, h: 1, type: "cours", st: "nouvelle", titre: "Carte mentale : le vivant dans la biosphère", desc: "- Relier biosphère, cellule, métabolisme respiratoire, microbiote et multiplication asexuée ; correction des boutures.", comp: ["D1.3"] },
                  { s: 24, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : organisation et fonctionnement du vivant", desc: "- Sujet 10 points : courbes de respiration (capteurs), schéma d’organisation, cas de multiplication asexuée.", comp: ["D4.2", "D4.1", "D1.3"] }
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
          code: "P1", titre: "Partie 1 — L’activité physique", officiel: "Thème « L’activité physique »", couleur: "#c62828",
          problematique: "Le cross du collège approche : que se passe-t-il dans notre corps pendant l’effort, et comment progresser sans se mettre en danger ?",
          ancrage: "Co-intervention avec l’EPS, mesures réelles sur les élèves (cardiofréquencemètre, oxymètre), ODD 3 « Bonne santé et bien-être ».",
          lien: "Comme tous les êtres vivants étudiés au thème 1, nous respirons : que devient ce fonctionnement lorsque les besoins des muscles augmentent ?",
          attendus: ["Identifier cerveau et moelle épinière dans la commande du mouvement", "Interpréter des paramètres physiologiques repos/effort", "Argumenter sur entraînement raisonné, surentraînement, dopage, sédentarité"],
          chapitres: [
            {
              code: "I", titre: "La commande nerveuse du mouvement", pb: "Qui donne l’ordre à nos muscles de se contracter ?",
              sections: [
                { code: "A", titre: "Centres nerveux, nerfs et muscles", seances: [
                  { s: 25, h: 1, type: "act", st: "adaptee", titre: "Étude de cas : quand la moelle épinière est atteinte",
                    q: "Pourquoi une lésion de la colonne vertébrale peut-elle paralyser les jambes ?",
                    desc: "- Exploiter des cas cliniques (hernie discale, paraplégie) pour localiser cerveau, moelle épinière et nerfs dans la commande motrice.\n- Schéma : centres nerveux → nerfs → muscles (le détail du message nerveux est vu en 4e).",
                    comp: ["D4.1", "D1.3"], res: ["pdf:4eme/Activite hernie discale.pdf", "pdf:4eme/correction tetraplegie.pdf", "pdf:4eme/cours role moelle epiniere.pdf", "pdf:4eme/Activite les organes qui permettent le mouvement.pdf"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Les adaptations de l’organisme à l’effort", pb: "Pourquoi notre cœur s’accélère-t-il et pourquoi s’essouffle-t-on pendant un effort ?",
              sections: [
                { code: "A", titre: "Mesurer les paramètres physiologiques", seances: [
                  { s: 26, h: 2, type: "tp", st: "nouvelle", titre: "TP en co-intervention EPS : le cross du collège",
                    q: "Comment évoluent fréquence cardiaque et fréquence respiratoire pendant l’effort ?",
                    desc: "- Mesurer FC, FR (et SpO2 si oxymètre) au repos, pendant et après un effort calibré ; saisie au tableur et graphique.\n- Comparer élèves entraînés / non entraînés (données anonymisées).",
                    comp: ["D4.2", "D4.1"], act: "A5-EFF" }
                ]},
                { code: "B", titre: "Satisfaire les besoins des muscles", seances: [
                  { s: 27, h: 1, type: "act", st: "nouvelle", titre: "Plus d’O2 et de nutriments pour les muscles",
                    q: "À quoi servent ces modifications ?",
                    desc: "- Relier hausse de FC/FR et besoins accrus des muscles en dioxygène et nutriments (réinvestissement : respiration cellulaire).\n- Exploiter un document de répartition du débit sanguin au repos et à l’effort.",
                    comp: ["D4.1", "D1.3"] }
                ]}
              ]
            },
            {
              code: "III", titre: "Une activité physique raisonnée", pb: "S’entraîner pour progresser : jusqu’où peut-on aller sans danger ?",
              sections: [
                { code: "A", titre: "Capacités, limites, entraînement", seances: [
                  { s: 28, h: 1, type: "act", st: "nouvelle", titre: "Entraînement raisonné ou surentraînement ?",
                    q: "Pourquoi un sportif entraîné a-t-il un cœur plus lent au repos ?",
                    desc: "- Comparer des paramètres de sportifs entraînés et de sédentaires ; repérer capacités (fonctionnement optimal) et limites (maximal).\n- Hygiène de vie : sommeil, hydratation, alimentation ; risques de blessure.",
                    comp: ["D4.2", "D1.3"] }
                ]},
                { code: "B", titre: "Le dopage", seances: [
                  { s: 28, h: 1, type: "debat", st: "nouvelle", titre: "Débat argumenté : l’affaire Festina (1998) et l’EPO",
                    q: "Un produit qui améliore les performances est-il sans danger ?",
                    desc: "- Documents : effet de l’EPO (augmentation des globules rouges) et risques (sang plus visqueux, thromboses).\n- Débat argumenté à partir de faits ; distinguer opinion et argument scientifique.",
                    fds: "Distinguer un argument fondé sur des faits établis d’une opinion (« tout le monde le fait »).",
                    comp: ["D1.3", "D5"] }
                ]},
                { code: "C", titre: "Sédentarité et santé", seances: [
                  { s: 29, h: 1, type: "act", st: "nouvelle", titre: "Bouger 60 minutes par jour : défi de classe",
                    q: "Que risque-t-on à ne pas bouger ?",
                    desc: "- Recommandation OMS (5-17 ans) : au moins 60 min/jour d’activité modérée à soutenue ; comparer avec un relevé personnel d’une semaine.\n- Découverte des métiers du sport et de la santé (kinésithérapeute, médecin du sport, éducateur).",
                    comp: ["D4.2", "D5"], res: ["web:https://www.who.int/fr/news-room/fact-sheets/detail/physical-activity|OMS — activité physique"] }
                ]},
                { code: "D", titre: "Évaluation", seances: [
                  { s: 30, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : l’organisme pendant l’effort", desc: "- Sujet 10 points : graphique FC/FR, cas de dopage, argumentation sur l’entraînement.", comp: ["D4.2", "D4.1", "D1.3"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P2", titre: "Partie 2 — Virus, micro-organismes et interactions avec l’être humain", officiel: "Thème « Virus, micro-organismes et interactions avec l’être humain »", couleur: "#6a1b9a",
          problematique: "Cette année, la vaccination contre les papillomavirus humains (HPV) est proposée gratuitement au collège aux élèves de 5e. De quoi protège-t-elle, et comment se protéger des micro-organismes pathogènes ?",
          ancrage: "Campagne nationale de vaccination HPV au collège, infirmière scolaire, gestes du quotidien (lavage des mains, désinfection d’une plaie).",
          lien: "Pendant l’effort comme au repos, notre corps est en contact permanent avec des micro-organismes : amorce du concept « une seule santé ».",
          attendus: ["Distinguer contamination et infection", "Choisir entre asepsie et antisepsie", "Relier type d’infection et traitement (antibiotique / antiviral)", "Expliquer les bénéfices individuels et collectifs de la vaccination (HPV)"],
          chapitres: [
            {
              code: "I", titre: "Contamination et infection", pb: "Être en contact avec un microbe, est-ce forcément tomber malade ?",
              sections: [
                { code: "A", titre: "Les barrières naturelles et la contamination", seances: [
                  { s: 30, h: 1, type: "tp", st: "adaptee", titre: "Des micro-organismes sur nos mains ?",
                    q: "Où sont les micro-organismes et comment entrent-ils dans l’organisme ?",
                    desc: "- Empreintes de doigts sur gélose (avant/après lavage), boîtes scellées et jamais rouvertes (sécurité) ; lecture la séance suivante.\n- Rôle des barrières naturelles (peau, muqueuses) ; contamination = franchissement des barrières.",
                    comp: ["D4.1"], res: ["s:3eme/s01", "s:3eme/s02", "html:activites/3eme-C1-risques-infectieux-immunite.html"] }
                ]},
                { code: "B", titre: "De la contamination à l’infection", seances: [
                  { s: 31, h: 1, type: "act", st: "adaptee", titre: "Multiplication des microbes et symptômes",
                    q: "Pourquoi les symptômes n’apparaissent-ils pas tout de suite… et parfois jamais ?",
                    desc: "- Lire les boîtes de la séance précédente ; courbe de multiplication bactérienne.\n- Distinguer contamination et infection ; l’infection n’est pas systématique.",
                    comp: ["D4.2", "D1.3"], res: ["s:3eme/s10"] }
                ]}
              ]
            },
            {
              code: "II", titre: "Lutter contre la contamination et l’infection", pb: "Antiseptique, antibiotique, antiviral, vaccin : quel moyen pour quelle situation ?",
              sections: [
                { code: "A", titre: "Asepsie et antisepsie", seances: [
                  { s: 32, h: 1, type: "act", st: "reprise", titre: "Semmelweis (1847) et le lavage des mains",
                    q: "Pourquoi tant de mères mouraient-elles après l’accouchement dans un service de l’hôpital de Vienne ?",
                    desc: "- Analyse des données historiques de Semmelweis ; choisir entre asepsie et antisepsie dans des situations (bloc opératoire, plaie au genou).",
                    fds: "Exemple historique : une idée juste rejetée à l’époque, faute d’explication (les microbes ne seront mis en évidence que plus tard).",
                    comp: ["D4.1", "D1.3"], res: ["s:3eme/s08"] }
                ]},
                { code: "B", titre: "Antibiotiques et antiviraux", seances: [
                  { s: 32, h: 1, type: "act", st: "nouvelle", titre: "Décoder une ordonnance : antibiotique ou non ?",
                    q: "Pourquoi le médecin ne prescrit-il pas d’antibiotique contre la grippe ?",
                    desc: "- Associer infection (angine bactérienne, rhume, grippe, gastro-entérite) et traitement ; antibiotiques uniquement contre les bactéries.\n- Existence d’antiviraux récents pour certains virus ; la plupart des infections virales guérissent sans traitement.",
                    comp: ["D1.3", "D5"] }
                ]},
                { code: "C", titre: "La vaccination, protection individuelle et collective", seances: [
                  { s: 33, h: 1, type: "act", st: "nouvelle", titre: "Simulation d’épidémie : l’effet de la couverture vaccinale",
                    q: "En me faisant vacciner, est-ce que je protège aussi les autres ?",
                    desc: "- Jeu de simulation (cartes ou tableur) : propagation d’une maladie dans une classe avec 0 %, 50 %, 90 % de vaccinés.\n- Un vaccin contient des éléments de l’agent pathogène qui stimulent la protection naturelle (mécanismes en 4e).",
                    comp: ["D4.2", "D5"] },
                  { s: 34, h: 1, type: "debat", st: "nouvelle", titre: "HPV : des faits pour décider (avec l’infirmière scolaire)",
                    q: "Pourquoi vacciner filles et garçons de 11-14 ans contre les HPV ?",
                    desc: "- Documents Santé publique France / INCa : HPV et cancers, campagne au collège ; trier informations, rumeurs et opinions sur les réseaux sociaux.",
                    fds: "Savoir scientifique, croyance, opinion : analyser des messages en ligne sur la vaccination et identifier leurs sources.",
                    comp: ["D1.3", "D5"], res: ["web:https://www.e-cancer.fr/|INCa"] }
                ]},
                { code: "D", titre: "Évaluation", seances: [
                  { s: 34, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : micro-organismes et santé", desc: "- Sujet 10 points : choisir asepsie/antisepsie, relier infection et traitement, interpréter une simulation de couverture vaccinale.", comp: ["D1.3", "D4.1", "D5"] }
                ]}
              ]
            }
          ]
        },
        {
          code: "P3", titre: "Partie 3 — Procréation humaine", officiel: "Thème « Procréation humaine »", couleur: "#ad1457",
          problematique: "À partir de la puberté, notre corps devient capable de procréer : comment fonctionnent les appareils sexuels, et comment se forme la première cellule d’un futur être humain ?",
          ancrage: "Programme EVARS, questions anonymes des élèves (boîte à questions), intervention de l’infirmière scolaire.",
          lien: "Après la défense de l’organisme, le fonctionnement d’un appareil qui se met en route à la puberté ; première éducation au choix d’avoir ou non un enfant.",
          attendus: ["Situer la production des cellules sexuelles", "Calculer le moment de l’ovulation (14 jours avant les règles)", "Reconstituer le trajet des cellules sexuelles et situer la fécondation", "Légender les appareils sexuels (clitoris compris)"],
          chapitres: [
            {
              code: "I", titre: "Le fonctionnement des appareils sexuels", pb: "Que se passe-t-il dans les appareils sexuels à partir de la puberté ?",
              sections: [
                { code: "A", titre: "Anatomie des appareils sexuels", seances: [
                  { s: 35, h: 1, type: "act", st: "adaptee", titre: "Légender et comparer les appareils sexuels",
                    q: "Comment sont organisés les appareils sexuels féminin et masculin ?",
                    desc: "- Boîte à questions anonyme, puis légende des appareils sur schémas et modèles (dont le clitoris en 3D).\n- Vocabulaire : « cellules sexuelles » (et non « gamètes ») ; « procréation ».",
                    comp: ["D1.3"], res: ["pdf:4eme/Activite appareils reproducteurs et gametes.pdf", "pdf:4eme/correction appareils reproducteurs et gametes.pdf", "pdf:4eme/reproduction-humaine_organes-genitaux2.pdf", "s:4eme/s47"] }
                ]},
                { code: "B", titre: "Un fonctionnement continu et un fonctionnement cyclique", seances: [
                  { s: 36, h: 1, type: "act", st: "adaptee", titre: "Les spermatozoïdes : une production continue",
                    q: "Où et quand sont produites les cellules sexuelles masculines ?",
                    desc: "- Observer des spermatozoïdes (photos/vidéos de microscopie) ; production continue dans les testicules dès la puberté, qualité diminuant avec l’âge.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:4eme/cours appareils reproducteurs et production des gametes.pdf"] },
                  { s: 36, h: 1, type: "act", st: "reprise", titre: "Le cycle féminin : règles et ovulation",
                    q: "Peut-on prévoir le jour de l’ovulation ?",
                    desc: "- Calendriers de cycles : calculer la date d’ovulation (14 jours avant le début des règles) ; épaississement puis élimination de la paroi utérine ; ménopause.",
                    comp: ["D4.2"], res: ["pdf:4eme/Activite cycle menstruel.pdf", "pdf:4eme/correction activite cycle menstruel.pdf", "pdf:4eme/cours le cycle utérin.pdf", "s:4eme/s50"] }
                ]},
                { code: "C", titre: "Puberté et santé", seances: [
                  { s: 37, h: 1, type: "act", st: "reprise", titre: "La puberté : mise en route des appareils sexuels",
                    q: "Qu’est-ce qui change à la puberté ?",
                    desc: "- Repérer les modifications des organes à la puberté et la mise en fonctionnement des appareils sexuels ; respect des différences de rythme.",
                    comp: ["D1.3"], res: ["pdf:4eme/Activite modifications des organes a la puberte.pdf", "pdf:4eme/correction modifications organes puberte.pdf", "pdf:4eme/quelles-sont-les-transformations-a-la-puberte.pdf"] }
                ]}
              ]
            },
            {
              code: "II", titre: "La formation d’une cellule-œuf", pb: "Où et comment les cellules sexuelles se rencontrent-elles ?",
              sections: [
                { code: "A", titre: "Le trajet des cellules sexuelles et la fécondation", seances: [
                  { s: 38, h: 1, type: "act", st: "reprise", titre: "Reconstituer le trajet des cellules sexuelles",
                    q: "Où a lieu la fécondation ?",
                    desc: "- À partir d’un rapport sexuel avec pénétration vaginale : trajet des spermatozoïdes et de l’ovule ; situer la fécondation dans la trompe.",
                    comp: ["D4.1", "D1.3"], res: ["pdf:4eme/Activite etapes de la fecondation.pdf", "pdf:4eme/correction etapes de la fecondation.pdf"] },
                  { s: 38, h: 1, type: "act", st: "adaptee", titre: "La cellule-œuf, première cellule d’un futur embryon",
                    q: "Que se passe-t-il au moment de la fécondation ?",
                    desc: "- Vidéo de microscopie de fécondation ; fusion ovule-spermatozoïde → cellule-œuf.",
                    fds: "Histoire des sciences : des théories anciennes de la procréation (préformisme) aux observations au microscope.",
                    comp: ["D1.3"], res: ["pdf:4eme/activite histoire des sciences.pdf", "pdf:4eme/cours fecondation.pdf"] }
                ]},
                { code: "B", titre: "Choisir d’avoir ou non un enfant", seances: [
                  { s: 39, h: 1, type: "debat", st: "nouvelle", titre: "Premier niveau d’éducation au choix (EVARS)",
                    q: "La compréhension de la fécondation permet-elle de faire des choix ?",
                    desc: "- Échange encadré avec l’infirmière : comprendre que la rencontre des cellules sexuelles peut être évitée ; ressources et lieux d’information (approfondissement en 4e).",
                    comp: ["D5"] }
                ]},
                { code: "C", titre: "Bilan et évaluation", seances: [
                  { s: 40, h: 1, type: "cours", st: "nouvelle", titre: "Schéma bilan : de la puberté à la cellule-œuf", desc: "- Schéma fonctionnel des appareils, du cycle et de la fécondation.", comp: ["D1.3"] },
                  { s: 40, h: 1, type: "eval", st: "nouvelle", titre: "Évaluation sommative (10 pts) : procréation", desc: "- Sujet 10 points : calcul d’ovulation, trajet des cellules sexuelles, légende.", comp: ["D4.2", "D1.3"] }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      code: "T3", titre: "Temps d’ajustement & projets", officiel: "Semaines tampon (sorties, absences, retards)",
      parties: [
        {
          code: "P1", titre: "Projets de fin d’année", officiel: "Réinvestissement transversal", couleur: "#757575",
          problematique: "Que retenir de l’année pour comprendre notre planète et notre corps ?",
          ancrage: "Jardin du collège, sorties, forum des métiers.",
          lien: "Semaines mobilisables à tout moment de l’année si une séance déborde.",
          attendus: ["Réinvestir les compétences de l’année"],
          chapitres: [
            { code: "I", titre: "Réinvestissement", pb: "Comment mobiliser ce que l’on a appris ?",
              sections: [
                { code: "A", titre: "Projets", seances: [
                  { s: 41, h: 1, type: "terrain", st: "nouvelle", titre: "Classe de terrain : bilan des boutures et biodiversité du jardin", desc: "- Bilan des boutures (taux de réussite, conditions) et observation des êtres vivants du jardin.", comp: ["D4.1", "D4.2"] },
                  { s: 42, h: 2, type: "projet", st: "nouvelle", titre: "Mini-congrès scientifique de la classe", desc: "- Par groupes : présenter une question de l’année sous forme de poster (problème, hypothèses, résultats, conclusion) et le soumettre aux questions des pairs.", fds: "Préfiguration de l’évaluation par les pairs vue en 3e.", comp: ["D1.3", "D4.1"] },
                  { s: 43, h: 1, type: "projet", st: "nouvelle", titre: "Forum des métiers des SVT", desc: "- Météorologie, agronomie, santé, sport : fiches métiers et rencontres.", comp: ["D5"] },
                  { s: 44, h: 2, type: "cours", st: "nouvelle", titre: "Bilan annuel et passerelle vers la 4e", desc: "- Retour sur le fil rouge ; positionnement LSU ; annonce des cycles du carbone et des plaques.", comp: ["D1.3"] }
                ]}
              ]
            }
          ]
        }
      ]
    }
  ]
};
