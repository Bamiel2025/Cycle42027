# Script pour générer les activités additionnelles (anciennes récupérées + nouvelles 2027)
import json

new_activities = {
  # -------------------------------------------------------------
  # CLASSE DE 4EME : ACTIVITES COMPLEMENTAIRES
  # -------------------------------------------------------------
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
        { "id": "E1", "consigne": "Relever sur le Document 1 les trois grands types de reliefs sous-marins ou continentaux qui coïncident avec des alignements de séismes et de volcans.", "competence": "D4.3", "points": 2 },
        { "id": "E2", "consigne": "Identifier une plaque entièrement océanique et une plaque mixte (océanique et continentale) en donnant leur nom.", "competence": "D1.3", "points": 2.5 },
        { "id": "E3", "consigne": "Décrire la répartition des séismes au niveau de la cordillère des Andes en précisant comment varie leur profondeur d'ouest en est.", "competence": "D4.1", "points": 2.5 },
        { "id": "E4", "consigne": "Bilan : Définir la notion de 'plaque lithosphérique' et expliquer en quoi les zones actives constituent leurs frontières.", "competence": "D1.3", "points": 3 }
      ]
    },
    "documents": [
      { "numero": "Doc 1", "titre": "Carte mondiale de sismicité (USGS / Tectoglob3D)", "contenu": "Plus de 90 % de l'énergie sismique mondiale est libérée le long de ceintures étroites : la ceinture de feu du Pacifique (fosses océaniques et arcs volcaniques), le réseau mondial des dorsales médio-océaniques (65 000 km de long) et la ceinture alpine-himalayenne. Les grands boucliers continentaux (Canada, Afrique de l'Ouest, Sibérie) sont quasi-aséismiques." },
      { "numero": "Doc 2", "titre": "Profil de sismicité sous la fosse du Pérou-Chili (cordillère des Andes)", "contenu": "Distance à la fosse : 50 km -> profondeur des séismes = 20-30 km ; distance 150 km -> séismes à 80-120 km ; distance 350 km -> séismes à 250-400 km ; distance 600 km -> séismes jusqu'à 650 km. Ce plan incliné de séismes matérialise l'enfoncement de la plaque Nazca rigide dans le manteau sous la plaque Amérique du Sud." },
      { "numero": "Doc 3", "titre": "Les 13 plaques lithosphériques majeures", "contenu": "Plaques mixtes : Eurasie, Amérique du Nord, Amérique du Sud, Afrique, Indo-Australie, Antarctique. Plaques océaniques : Pacifique (la plus grande, 103 millions de km²), Nazca, Cocos, Philippines. Plaques continentales pures : quasi-inexistantes." }
    ],
    "grille_lsu": {
      "D4_3": { "MI": "Ne parvient pas à lire une carte mondiale ou à repérer les frontières.", "MF": "Repère les zones actives mais confond continents et plaques.", "MS": "Délimite correctement les plaques à partir des alignements sismiques et volcaniques.", "TBM": "Analyse cartographique fine, distinction rigoureuse des types de reliefs et maîtrise de Tectoglob3D." },
      "D1_3": { "MI": "Définition incomplète ou erronée d'une plaque.", "MF": "Définition correcte mais oublie la lithosphère rigide.", "MS": "Rédige une synthèse claire reliant zones actives et découpage de la lithosphère.", "TBM": "Argumentation scientifique exemplaire, vocabulaire géologique précis (lithosphère, dorsale, fosse, subduction)." }
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
        { "id": "E1", "consigne": "À l'aide du Document 1, relever la direction et la vitesse annuelle (en mm/an) du déplacement de la balise REYK située en Islande.", "competence": "D4.2", "points": 2 },
        { "id": "E2", "consigne": "Calculer la distance en mètres dont s'ouvrira l'océan Atlantique au niveau de l'Islande en 100 000 ans, sachant que la vitesse d'écartement est de 23 mm/an.", "competence": "D4.2", "points": 2.5 },
        { "id": "E3", "consigne": "Comparer le mouvement observé au niveau de la fosse du Pérou (Amérique du Sud) avec celui de la dorsale médio-atlantique.", "competence": "D4.1", "points": 2.5 },
        { "id": "E4", "consigne": "Bilan : Expliquer comment les technologies spatiales modernes confirment la théorie de la tectonique des plaques.", "competence": "D1.3", "points": 3 }
      ]
    },
    "documents": [
      { "numero": "Doc 1", "titre": "Vecteurs vitesses GPS dans le réseau mondial IGS (JPL / NASA)", "contenu": "Station REYK (Islande, plaque Eurasie) : déplacement vers le Nord-Est à 12,2 mm/an. Station KELY (Groenland, plaque Amérique du Nord) : déplacement vers le Nord-Ouest à 10,8 mm/an. Frontière : dorsale médio-atlantique axiale." },
      { "numero": "Doc 2", "titre": "Mesures GPS au niveau de la ceinture péruvienne", "contenu": "Station EISL (île de Pâques, plaque Nazca) : déplacement vers l'Est (N085°) à 68 mm/an. Station AREQ (Arequipa, plaque Amérique du Sud) : déplacement vers le Nord-Est (N060°) à 12 mm/an. Vitesse de convergence relative = environ 65 mm/an (soit 6,5 cm/an)." },
      { "numero": "Doc 3", "titre": "Ordres de grandeur des vitesses tectoniques mondiales", "contenu": "Ouverture la plus lente : dorsale Arctique (Gakkel) = 10 mm/an. Ouverture la plus rapide : dorsale Pacifique Est = 150 mm/an. Faille de San Andreas (coulissage) = 35 mm/an. Rapprochement Inde / Asie (collision) = 45 mm/an." }
    ],
    "grille_lsu": {
      "D4_2": { "MI": "Incapable de lire une échelle graphique ou d'effectuer le calcul.", "MF": "Lecture correcte mais erreur de conversion (mm en m ou cm).", "MS": "Calculs de vitesses relatives justes (23 mm/an et 2 300 m en 100 000 ans).", "TBM": "Calculs parfaits, conversions irréprochables et interprétation physique rigoureuse des ordres de grandeur." },
      "D1_3": { "MI": "Confusion entre divergence et convergence.", "MF": "Notions acquises mais vocabulaire approximatif.", "MS": "Texte explicatif clair distinguant divergence, convergence et coulissage.", "TBM": "Démonstration scientifique limpide reliant mesures spatiales instantanées et déformations géologiques sur les temps longs." }
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
        { "id": "E1", "consigne": "À partir du Document 1, comparer la teneur en silice et en gaz dissous des magmas du Piton de la Fournaise et de la Montagne Pelée.", "competence": "D4.1", "points": 2 },
        { "id": "E2", "consigne": "Réaliser le protocole expérimental de modélisation du dégazage et noter vos observations pour le liquide fluide et pour le liquide visqueux.", "competence": "D4.1", "points": 3 },
        { "id": "E3", "consigne": "Relier les observations du modèle aux manifestations volcaniques réelles (coulées de lave vs nuées ardentes).", "competence": "D4.1", "points": 2.5 },
        { "id": "E4", "consigne": "Bilan : Rédiger un tableau comparatif résumant caractéristiques du magma, type d'éruption et risque associé.", "competence": "D1.3", "points": 2.5 }
      ]
    },
    "documents": [
      { "numero": "Doc 1", "titre": "Analyses géochimiques des laves (IPGP / Observatoires volcanologiques)", "contenu": "Basalte (Piton de la Fournaise) : Silice (SiO2) = 48 %, Température = 1 150 °C, Viscosité = 10 à 100 Pa·s (très fluide), Gaz dissous = 1 % (H2O, CO2, SO2). Andésite/Rhyolite (Montagne Pelée) : Silice (SiO2) = 63 %, Température = 850 °C, Viscosité = 10 000 à 1 000 000 Pa·s (extrêmement pâteux), Gaz dissous = 4 à 6 % sous haute pression." },
      { "numero": "Doc 2", "titre": "Protocole expérimental de modélisation", "contenu": "Matériel : Deux béchers, purée de flocons fine (visqueuse) et eau colorée (fluide), paille ou tubulure reliée à une seringue de 50 mL. Injecter 30 mL d'air à débit constant au fond de chaque bécher et observer la formation des bulles, l'expansion et les projections éventuelles." },
      { "numero": "Doc 3", "titre": "Dangers et aléas associés aux éruptions", "contenu": "Volcanisme effusif : coulées de lave progressant à quelques km/h (aléa faible pour les personnes si évacuation précoce, dégâts matériels). Volcanisme explosif : nuée ardente (mélange de gaz brûlants à 500 °C et de cendres dévalant les pentes à 300 km/h), retombées de bombes et de cendres, lahars (coulées de boue volcanique) : aléa mortel et dévastateur." }
    ],
    "grille_lsu": {
      "D4_1": { "MI": "Expérience non réalisée ou manipulations dangereuses.", "MF": "Expérience réalisée mais sans mise en relation rigoureuse avec le modèle géologique.", "MS": "Protocole bien exécuté, compte rendu précis reliant viscosité observée et type d'éruption.", "TBM": "Excellente rigueur expérimentale, identification claire des limites du modèle analogique." },
      "D1_3": { "MI": "Description confuse sans vocabulaire scientifique.", "MF": "Emploie les termes sans distinguer magma et lave.", "MS": "Tableau comparatif complet et rigoureux (effusif vs explosif).", "TBM": "Communication scientifique parfaite, distinction nette magma (profondeur + gaz) / lave (dégazée en surface)." }
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
        { "id": "E1", "consigne": "À l'aide du Document 1, décrire la structure d'une mycorhize et préciser où se situent les échanges cellulaires.", "competence": "D4.1", "points": 2 },
        { "id": "E2", "consigne": "Calculer, à partir du Document 2, le pourcentage d'augmentation de la biomasse sèche d'un plant de pin après 6 mois d'inoculation mycorhizienne.", "competence": "D4.2", "points": 2.5 },
        { "id": "E3", "consigne": "Indiquer ce que le champignon ne peut pas fabriquer par lui-même et expliquer pourquoi il dépend de la photosynthèse de l'arbre.", "competence": "D4.1", "points": 2.5 },
        { "id": "E4", "consigne": "Bilan : Compléter le schéma fonctionnel montrant les flux réciproques d'eau, de sels minéraux et de matière organique.", "competence": "D1.3", "points": 3 }
      ]
    },
    "documents": [
      { "numero": "Doc 1", "titre": "Micrographie d'une endomycorhize à arbuscules (x 400)", "contenu": "Les hyphes (filaments) du champignon Glomus pénètrent dans le cortex racinaire et s'invaginent dans les cellules hôtes en formant des arbuscules très ramifiés. La membrane plasmique végétale n'est jamais rompue : les échanges se font par diffusion à travers cette immense surface de contact intime." },
      { "numero": "Doc 2", "titre": "Expérience agronomique sur Pin d'Alep (INRAE)", "contenu": "Culture en sol sableux pauvre en phosphore pendant 6 mois : Plant témoin (sol désinfecté sans champignon) : biomasse sèche = 1,4 g ; teneur foliaire en phosphore = 0,8 mg. Plant mycorhizé (avec champignon Pisolithus) : biomasse sèche = 4,8 g (multipliée par 3,4) ; teneur en phosphore = 2,6 mg (multipliée par 3,25)." },
      { "numero": "Doc 3", "titre": "Traçage au carbone 14 radioactif (¹⁴C)", "contenu": "Lorsqu'on expose les aiguilles d'un arbre à du ¹⁴CO2, 20 % de la radioactivité incorporée dans les sucres est retrouvée dans le mycélium du champignon quelques heures plus tard. Le champignon, dépourvu de chlorophylle (hétérotrophe), dépend vitalement de cette source d'énergie carbonée." }
    ],
    "grille_lsu": {
      "D4_2": { "MI": "Calculs de pourcentages non réalisés ou faux.", "MF": "Calcul posé mais erreur de lecture sur le graphique.", "MS": "Calculs exacts (hausse de +243 % de biomasse et x3,25 de phosphore).", "TBM": "Calculs parfaits avec justifications mathématiques et interprétation biologique rigoureuse." },
      "D1_3": { "MI": "Schéma incomplet ou sans flèches de flux.", "MF": "Schéma correct mais oublie les éléments échangés.", "MS": "Schéma fonctionnel soigné avec légende complète des échanges bidirectionnels.", "TBM": "Schéma de synthèse remarquable, digne du lycée, intégrant le concept de symbiose mutualiste." }
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
        { "id": "E1", "consigne": "À l'aide du Document 1, relever le seuil de danger pour l'oreille humaine et indiquer le niveau sonore maximal bridé d'un smartphone.", "competence": "D4.2", "points": 2 },
        { "id": "E2", "consigne": "Comparer les micrographies du Document 2 et décrire les altérations subies par les cellules ciliées après un concert à fort volume.", "competence": "D4.1", "points": 2.5 },
        { "id": "E3", "consigne": "Calculer le temps d'exposition toléré à 94 dB sachant que la durée de sécurité est divisée par 2 tous les 3 dB (en partant de 8h à 85 dB).", "competence": "D4.2", "points": 2.5 },
        { "id": "E4", "consigne": "Bilan : Énoncer la règle des '30-30-30' ou 3 règles d'or pour protéger son capital auditif au quotidien.", "competence": "D5", "points": 3 }
      ]
    },
    "documents": [
      { "numero": "Doc 1", "titre": "Échelle des décibels (dB) et durées limites d'exposition (INRS)", "contenu": "0 dB = seuil d'audibilité ; 40 dB = bibliothèque silencieuse ; 60 dB = conversation normale ; 85 dB = seuil de risque professionnel (8 h/j max) ; 88 dB = 4 h max ; 91 dB = 2 h max ; 94 dB = 1 h max ; 97 dB = 30 min max ; 100 dB = baladeur au volume max (15 min max) ; 105 dB = concert / discothèque (5 min max) ; 120 dB = seuil de douleur immédiate (réacteur d'avion à 50 m)." },
      { "numero": "Doc 2", "titre": "Micrographie électronique à balayage de la cochlée humaine (x 2 500)", "contenu": "Cochlée saine : les cellules ciliées externes sont alignées en 3 rangées régulières en forme de V parfait, avec leurs stéréocils dressés et intacts. Cochlée après traumatisme acoustique : cils fusionnés, pliés, cisaillés, et zones chauves où les cellules ciliées sont mortes et remplacées par une cicatrice fibreuse non conductrice." },
      { "numero": "Doc 3", "titre": "Symptômes d'alerte et surdité irréversible", "contenu": "Les acouphènes (bourdonnements, sifflements aigus permanents) et l'hyperacousie (douleur aux sons du quotidien) sont les premiers signes de destruction des fibres du nerf auditif. Aucun traitement médical ou chirurgical ne peut faire repousser une cellule ciliée humaine." }
    ],
    "grille_lsu": {
      "D4_2": { "MI": "Incapable d'exploiter la règle des 3 dB.", "MF": "Comprend le doublement mais se trompe sur le temps limite.", "MS": "Calcul exact : à 94 dB le temps limite est de 1 heure (à 100 dB : 15 min).", "TBM": "Maîtrise remarquable de l'échelle logarithmique et conversion parfaite temps/décibels." },
      "D5": { "MI": "Aucune recommandation citoyenne pertinente.", "MF": "Conseils vagues ('baisser le son').", "MS": "Formule 3 règles comportementales précises (volume à 60%, pauses de 10 min par heure, bouchons en concert).", "TBM": "Posture d'ambassadeur de santé publique exemplaire, argumentation civique et scientifique percutante." }
    }
  },

  # -------------------------------------------------------------
  # CLASSE DE 3EME : ACTIVITES COMPLEMENTAIRES
  # -------------------------------------------------------------
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
        { "id": "E1", "consigne": "Réaliser la pesée de chaque échantillon à la balance de précision et consigner la masse m (en g) dans un tableau de mesures.", "competence": "D4.1", "points": 2 },
        { "id": "E2", "consigne": "Mesurer le volume V de chaque échantillon par déplacement d'eau dans une éprouvette graduée de 100 mL.", "competence": "D4.1", "points": 2.5 },
        { "id": "E3", "consigne": "Calculer la masse volumique ρ = m / V pour le granite et le basalte en précisant les unités.", "competence": "D4.2", "points": 2.5 },
        { "id": "E4", "consigne": "Bilan : Comparer la masse volumique du granite (2,7) et du basalte (3,0) à celle du manteau (3,3) et expliquer l'altitude élevée des continents.", "competence": "D1.3", "points": 3 }
      ]
    },
    "documents": [
      { "numero": "Doc 1", "titre": "Protocole expérimental de déplacement d'eau", "contenu": "Matériel : Balance au dixième de gramme, éprouvette graduée en verre de 100 mL ou 250 mL, fil nylon, coupelle, eau distillée. Formule : ρ = m / V. Rappel : 1 mL = 1 cm³ = 10⁻⁶ m³." },
      { "numero": "Doc 2", "titre": "Composition minéralogique et densité des roches", "contenu": "Granite (croûte continentale) : quartz (d=2,65), feldspaths (d=2,56), micas (d=2,8). Masse volumique globale = 2,7 g/cm³. Basalte / Gabbro (croûte océanique) : plagioclase, pyroxènes (d=3,4), olivine (d=3,3). Masse volumique globale = 3,0 g/cm³. Péridotite (manteau lithosphérique) : olivine (60%) et pyroxènes (40%). Masse volumique globale = 3,3 g/cm³." },
      { "numero": "Doc 3", "titre": "L'isostasie : équilibre de flottabilité des enveloppes terrestres", "contenu": "La lithosphère rigide repose en équilibre hydrostatique sur l'asthénosphère déformable plus dense (3,3 g/cm³). Tout comme un bloc de bois de pin (moins dense) émerge davantage au-dessus de l'eau qu'un bloc de chêne (plus dense), la croûte continentale granitique épaisse (30 à 70 km) et légère (2,7 g/cm³) culmine en moyenne à +840 m d'altitude, tandis que la croûte océanique dense (3,0 g/cm³) s'enfonce sous -3 800 m d'eau." }
    ],
    "grille_lsu": {
      "D4_1": { "MI": "Mesures non réalisées ou éprouvette cassée.", "MF": "Mesures approximatives sans lecture correcte du ménisque d'eau.", "MS": "Protocole expérimental mené avec rigueur et sécurité, tableau de valeurs complet.", "TBM": "Excellente précision des mesures expérimentales (calcul d'incertitude apprécié)." },
      "D4_2": { "MI": "Formule fausse ou calculs inexistants.", "MF": "Formule connue mais erreur dans les unités.", "MS": "Calculs de masse volumique justes (ρ granite ≈ 2,7 g/cm³, ρ basalte ≈ 3,0 g/cm³).", "TBM": "Conversions parfaites g/cm³ <-> kg/m³, raisonnement mathématique et physique impeccable." }
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
        { "id": "E1", "consigne": "À l'aide du Document 1, définir l'anorexie mentale et la boulimie en relevant leurs symptômes principaux.", "competence": "D1.3", "points": 2 },
        { "id": "E2", "consigne": "À partir du Document 2, expliquer comment les réseaux sociaux peuvent altérer l'image corporelle et déclencher un comportement de restriction.", "competence": "D5", "points": 2.5 },
        { "id": "E3", "consigne": "Identifier sur le Document 3 les conséquences médicales graves de la dénutrition sur le cœur, les os et le cerveau.", "competence": "D4.1", "points": 2.5 },
        { "id": "E4", "consigne": "Bilan : Citer 3 personnes ou organismes vers lesquels orienter un camarade en souffrance.", "competence": "D5", "points": 3 }
      ]
    },
    "documents": [
      { "numero": "Doc 1", "titre": "Critères diagnostiques des TCA (Haute Autorité de Santé - HAS)", "contenu": "Anorexie mentale : restriction drastique des apports énergétiques menant à un poids significativement bas (IMC < 17), peur intense de prendre du poids, altération de la perception du corps (dysmophophobie). Boulimie : épisodes récurrents de crises d'hyperphagie incontrôlée au moins 1 fois par semaine pendant 3 mois, accompagnés de comportements compensatoires inappropriés (vomissements provoqués, laxatifs, jeûne)." },
      { "numero": "Doc 2", "titre": "Étude Inserm sur l'impact des algorithmes de recommandation", "contenu": "Chez les adolescents passant plus de 3 heures par jour sur les réseaux sociaux d'images, le risque d'insatisfaction corporelle est multiplié par 2,4. L'exposition répétée à des corps retouchés crée un biais cognitif où la norme naturelle est perçue comme anormale." },
      { "numero": "Doc 3", "titre": "Conséquences physiologiques et prise en charge médicale", "contenu": "Dénutrition sévère : bradycardie (cœur qui bat trop lentement, < 45 bpm), risque d'arrêt cardiaque par hypokaliémie (chute du potassium), ostéoporose précoce, arrêt des cycles menstruels (aménorrhée), isolement social. Prise en charge : elle n'est jamais punitive mais repose sur une alliance thérapeutique (médecin, nutritionniste, psychologue, famille)." }
    ],
    "grille_lsu": {
      "D5": { "MI": "Jugements moralisateurs ou déni de la gravité médicale.", "MF": "Reconnaît la maladie mais propose des solutions inadaptées.", "MS": "Postulat bienveillant, identification claire des personnes ressources et des lignes d'aide.", "TBM": "Remarquable maturité citoyenne et empathique, promotion exemplaire des compétences psychosociales." },
      "D1_3": { "MI": "Texte confus ou incomplet.", "MF": "Vocabulaire médical basique sans explication.", "MS": "Texte clair, structuré, distinguant rigoureusement anorexie et boulimie.", "TBM": "Qualité de communication exceptionnelle, adaptée aux pairs, ton juste et scientifique." }
    }
  }
}

# Sauvegardons ces activités dans un fichier json intermédiaire
with open('app/data/activites_extra.json', 'w', encoding='utf-8') as f:
    json.dump(new_activities, f, ensure_ascii=False, indent=2)

print(f"Activités additionnelles générées : {len(new_activities)} activités prêtes à être fusionnées !")
