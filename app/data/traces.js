/* Traces écrites visées — Cycle 4, nouveaux programmes (projet CSP 2025, applicables 2027-2028).
   Clé d'un chapitre : "<n° de partie dans le niveau, de 1 à n>-<code du chapitre>" (ex. "2-III").
   bilan  : la trace écrite attendue en fin de chapitre (ce que l'élève doit pouvoir écrire / schématiser).
   notions: vocabulaire et notions à stabiliser.
   sec    : trace écrite courte par section (A, B, C…), à réinvestir dans le cahier / la carte mentale.
   Rédaction : formulations accessibles à des élèves de cycle 4, calibrées sur les attendus des programmes. */
window.PROG = window.PROG || { levels: {}, activites: {} };
PROG.traces = PROG.traces || {};

/* =============================== 5e =============================== */
PROG.traces["5e"] = {

  "1-I": {
    bilan: "La Terre est formée d'enveloppes concentriques : un noyau métallique (fer et nickel), un manteau de roches (péridotite), une croûte de roches plus légères (basalte sous les océans, granite sous les continents), puis l'hydrosphère et l'atmosphère. La densité des matériaux augmente de la surface vers le centre. La croûte océanique est mince, dense et située plus bas que la croûte continentale, plus épaisse et plus légère : c'est pourquoi les océans occupent les creux de la surface.",
    notions: ["noyau", "manteau", "croûte océanique / continentale", "basalte, granite, péridotite", "densité", "enveloppes concentriques", "altitude / profondeur"],
    sec: {
      A: "On ne peut pas aller voir l'intérieur de la Terre : on le connaît grâce à des mesures indirectes et à l'étude de roches. La Terre est constituée d'enveloppes successives de plus en plus denses vers le centre.",
      B: "Les océans et les continents diffèrent par leur altitude moyenne, leur épaisseur et leurs roches : croûte océanique (basalte, dense, ~7 km) et croûte continentale (granite, moins dense, 30 à 70 km)."
    }
  },

  "1-II": {
    bilan: "Pour qu'une planète soit habitable, il faut de l'eau liquide : cela dépend de la température (distance au Soleil) et de la pression (présence d'une atmosphère retenue par la gravité de la planète). La Terre réunit ces conditions. Mars, plus petite et plus froide, a perdu l'essentiel de son atmosphère puis son eau liquide : vallées, deltas et minéraux hydratés prouvent qu'elle en a possédé. La vie existe pourtant dans des milieux extrêmes (sources hydrothermales) tant qu'il y a de l'eau liquide et une source d'énergie.",
    notions: ["habitabilité", "eau liquide", "atmosphère", "pression, température", "gravité", "preuves d'eau passée (delta, minéraux hydratés)", "milieux extrêmes"],
    sec: {
      A: "L'eau liquide n'existe que dans une gamme de températures et de pressions : la distance au Soleil et l'atmosphère de la planète en sont les facteurs essentiels.",
      B: "Sur Mars, des formes de relief (vallées, deltas) et des minéraux formés dans l'eau prouvent qu'il y a eu de l'eau liquide ; l'atmosphère s'est raréfiée et l'eau a disparu ou gelé.",
      C: "La vie peut exister sans lumière du Soleil : autour des sources hydrothermales, des êtres vivants utilisent l'énergie chimique de l'eau chaude. Les conditions de la vie sont donc de l'eau liquide, de l'énergie et des éléments chimiques."
    }
  },

  "1-III": {
    bilan: "L'eau circule entre des réservoirs (océans, glaces, eaux souterraines, eaux de surface, atmosphère, êtres vivants) grâce à des flux (évaporation, précipitations, ruissellement, infiltration) : c'est un cycle biogéochimique. Le temps de résidence dans un réservoir se calcule en divisant la quantité d'eau stockée par le flux de sortie : quelques jours dans l'atmosphère, plusieurs milliers d'années dans l'océan. Une pollution se diffuse d'un réservoir à l'autre et dure d'autant plus longtemps que le temps de résidence est grand ; les fleuves apportent aussi des nutriments à la mer, ce qui peut déclencher des blooms.",
    notions: ["réservoir", "flux", "cycle biogéochimique", "temps de résidence = stock ÷ flux", "évaporation, précipitation, ruissellement, infiltration", "pollution", "nutriments, bloom planctonique"],
    sec: {
      A: "Du bassin versant à l'échelle du globe, l'eau passe de réservoir en réservoir par des flux : c'est un cycle.",
      B: "Temps de résidence = quantité stockée ÷ flux sortant. Il est très court dans l'atmosphère et très long dans l'océan et les glaces : un réservoir à long temps de résidence se renouvelle très lentement.",
      C: "Les polluants circulent avec l'eau (nappes, rivières, mer) et persistent longtemps dans les réservoirs lents. Les nutriments apportés par les fleuves nourrissent le plancton, mais un excès provoque des blooms et déséquilibre le milieu."
    }
  },

  "2-I": {
    bilan: "La météo décrit l'état de l'atmosphère à un instant et en un lieu donnés (température, précipitations, vent). Le climat est la statistique de ces conditions sur de longues durées (au moins 30 ans) : un événement ponctuel, comme une journée froide, ne dit rien du changement climatique. À l'échelle du globe, on distingue de grandes zones climatiques (chaude, tempérée, froide) organisées selon la latitude.",
    notions: ["météo / météorologie", "climat", "normale climatique (30 ans)", "moyenne", "zones climatiques", "latitude"],
    sec: {
      A: "Météo = ce qui se passe à un moment précis ; climat = ce qui se passe en moyenne sur au moins 30 ans. On compare une mesure du jour aux normales climatiques.",
      B: "Les climats se répartissent en bandes selon la latitude : zones chaudes près de l'équateur, tempérées aux latitudes moyennes, froides vers les pôles."
    }
  },

  "2-II": {
    bilan: "L'air et l'eau des océans sont en mouvement permanent à l'échelle du globe. Les vents sont des déplacements d'air, des zones de hautes pressions vers les zones de basses pressions ; les courants océaniques sont de grands déplacements d'eau, surtout en surface. Les satellites permettent de les observer et de les cartographier ; on peut aussi suivre des objets dérivants (bouées, objets flottants).",
    notions: ["vent", "pression atmosphérique", "courant océanique", "enveloppes fluides", "données satellitaires", "dérive"],
    sec: {
      A: "Sur les cartes satellitaires, le vent se lit comme un déplacement d'air organisé à grande échelle, des hautes pressions vers les basses pressions.",
      B: "Les courants marins sont des déplacements d'eau organisés ; en suivant des objets flottants et grâce aux satellites, on dessine leur trajet à l'échelle des océans."
    }
  },

  "2-III": {
    bilan: "Le Soleil chauffe inégalement la Terre : l'énergie reçue par m² est plus grande à l'équateur qu'aux pôles, car les rayons y arrivent plus perpendiculairement. Ces différences de température mettent l'air et l'eau en mouvement et transportent de la chaleur vers les hautes latitudes. L'atmosphère et l'océan sont couplés : le vent entraîne l'eau de surface, et l'océan restitue de la chaleur et de l'eau à l'atmosphère. Ce couplage influence les climats (exemple : le Gulf Stream et le climat doux de l'Europe de l'Ouest).",
    notions: ["énergie solaire", "angle d'incidence des rayons", "inégale répartition", "transfert de chaleur", "couplage océan-atmosphère", "influence sur les climats"],
    sec: {
      A: "Avec une lampe et un globe : la zone où la lumière arrive de face chauffe davantage. L'équateur reçoit plus d'énergie solaire que les pôles.",
      B: "Le vent met en mouvement l'eau de surface ; les courants transportent la chaleur et modifient les climats. Océan et atmosphère forment un système couplé."
    }
  },

  "3-I": {
    bilan: "La biosphère est l'ensemble des milieux où la vie existe. À l'échelle de la Terre, c'est une pellicule très mince (quelques dizaines de kilomètres d'épaisseur au plus, pour un rayon terrestre de 6 371 km) située à l'interface entre la lithosphère, l'hydrosphère et l'atmosphère. Elle est très diversifiée : milieux terrestres, aquatiques, souterrains, extrêmes.",
    notions: ["biosphère", "interface", "échelle", "diversité des milieux de vie"],
    sec: {
      A: "Sur une maquette à l'échelle, l'épaisseur de la biosphère est très faible par rapport au rayon de la Terre : la vie est une fine pellicule."
    }
  },

  "3-II": {
    bilan: "La cellule est l'unité structurale et fonctionnelle de tous les êtres vivants. Certains sont unicellulaires (levure, bactérie), d'autres pluricellulaires. Chez les pluricellulaires, les cellules se spécialisent et s'organisent : cellules → tissus → organes → appareils → organisme. De nombreux êtres vivants hébergent un microbiote (bactéries, etc.) avec lequel ils vivent en partenariat et qui leur est utile (digestion chez la vache et le termite, nutrition du corail).",
    notions: ["cellule", "unicellulaire / pluricellulaire", "cellule spécialisée", "tissu, organe, appareil", "microscope", "microbiote", "symbiose (partenariat)"],
    sec: {
      A: "Tous les êtres vivants sont constitués d'une ou de plusieurs cellules, observables au microscope.",
      B: "Chez un organisme pluricellulaire, les cellules sont spécialisées et regroupées en tissus, organes et appareils qui coopèrent.",
      C: "De nombreux êtres vivants vivent avec des micro-organismes (microbiote) qui leur rendent des services indispensables : c'est un partenariat à bénéfices réciproques."
    }
  },

  "3-III": {
    bilan: "Tous les êtres vivants respirent : ils prélèvent du dioxygène dans leur milieu et rejettent du dioxyde de carbone (mis en évidence par l'eau de chaux ou une mesure ExAO). Au niveau des cellules, le dioxygène permet de transformer les nutriments (ex. glucose) en libérant de l'énergie utilisable ; du dioxyde de carbone et de l'eau sont produits. Bilan : glucose + dioxygène → dioxyde de carbone + eau + énergie. Les organes respiratoires (poumons, branchies, trachées…) et la circulation permettent d'amener le dioxygène jusqu'aux cellules.",
    notions: ["respiration", "dioxygène O₂", "dioxyde de carbone CO₂", "eau de chaux", "glucose", "énergie", "organe respiratoire (poumon, branchie)", "transport par le sang"],
    sec: {
      A: "L'eau de chaux se trouble en présence de CO₂ : les êtres vivants rejettent du dioxyde de carbone en respirant.",
      B: "Les mesures montrent que les cellules vivantes consomment du dioxygène et produisent du dioxyde de carbone, à condition de disposer de nutriments (levures avec glucose).",
      C: "Bilan de la respiration : nutriments + O₂ → CO₂ + eau + énergie. Les organes respiratoires prélèvent l'O₂ et le sang le distribue aux cellules."
    }
  },

  "3-IV": {
    bilan: "La multiplication asexuée est la formation de nouveaux individus à partir d'un seul parent, sans cellules sexuelles : les descendants sont des clones génétiquement identiques au parent (stolons, rhizomes, tubercules, bouturage). Elle permet de coloniser rapidement un milieu (renouée du Japon) et elle est utilisée en agriculture pour conserver des variétés, mais des populations de clones sont toutes sensibles aux mêmes maladies (banane Cavendish).",
    notions: ["multiplication asexuée", "clone", "un seul parent", "stolon, rhizome, tubercule", "bouturage", "colonisation d'un milieu", "fragilité des monocultures"],
    sec: {
      A: "Un seul parent donne des individus identiques entre eux (clones) : stolons, tubercules, rhizomes.",
      B: "La multiplication asexuée est rapide et efficace : elle permet à une espèce de coloniser un milieu et au jardinier de bouturer.",
      C: "L'agriculture utilise des clones pour obtenir des plantes identiques, mais ces plantes ont la même sensibilité aux maladies : une seule maladie peut les détruire toutes."
    }
  }
};

/* =============================== 4e =============================== */
PROG.traces["4e"] = {

  "1-I": {
    bilan: "Le carbone est présent dans tous les grands réservoirs de la Terre, sous des formes chimiques différentes : dioxyde de carbone (CO₂) et méthane (CH₄) dans l'atmosphère, carbone dissous (CO₂, ions hydrogénocarbonates) dans l'hydrosphère, matière organique dans la biosphère, roches carbonatées (calcaire CaCO₃) et combustibles fossiles (charbon, pétrole, gaz) dans la lithosphère. Le carbone circule entre ces réservoirs par des flux (en Gt de carbone par an). Le temps de résidence (stock ÷ flux sortant) varie de quelques années (atmosphère) à des millions d'années (roches) ; avant 1850 le cycle était à peu près équilibré.",
    notions: ["cycle biogéochimique du carbone", "réservoirs : atmosphère, hydrosphère, biosphère, lithosphère", "CO₂, CH₄, CaCO₃, matière organique", "flux (Gt C/an)", "temps de résidence", "équilibre"],
    sec: {
      A: "Le carbone existe sous plusieurs formes chimiques selon les réservoirs : CO₂ et CH₄ (air), CO₂ dissous et hydrogénocarbonates (eau), matière organique (êtres vivants), CaCO₃ et combustibles fossiles (roches).",
      B: "Temps de résidence = quantité de carbone du réservoir ÷ flux de sortie. L'atmosphère se renouvelle en quelques années, la biosphère en quelques décennies, la lithosphère en dizaines de millions d'années."
    }
  },

  "1-II": {
    bilan: "Depuis 1850, l'être humain brûle charbon, pétrole et gaz : il libère rapidement dans l'atmosphère du carbone stocké pendant des millions d'années. Le flux vers l'atmosphère dépasse celui que la biosphère et l'océan peuvent absorber : la teneur en CO₂ est passée d'environ 280 ppm à plus de 420 ppm. Les gaz à effet de serre (CO₂, CH₄) retiennent une partie de l'énergie émise par la Terre : leur augmentation est corrélée à la hausse de la température moyenne mondiale (environ +1,1 °C depuis la fin du XIXe siècle). Les activités humaines sont à l'origine du réchauffement climatique actuel.",
    notions: ["énergies fossiles", "combustion", "gaz à effet de serre", "ppm", "déséquilibre des flux", "corrélation", "anomalie de température", "réchauffement climatique"],
    sec: {
      A: "Brûler des combustibles fossiles transfère du carbone de la lithosphère vers l'atmosphère, bien plus vite que les processus naturels ne l'évacuent : la concentration en CO₂ augmente.",
      B: "Les courbes de CO₂ et CH₄ et la hausse de température évoluent ensemble depuis 1880 : on établit une corrélation et on conclut à la responsabilité des activités humaines dans le réchauffement (le détail physique de l'effet de serre n'est pas exigible)."
    }
  },

  "2-I": {
    bilan: "La lithosphère (croûte et haut du manteau, rigide) est découpée en plaques qui se déplacent lentement les unes par rapport aux autres. Les frontières de plaques sont des zones actives où se concentrent séismes et volcans. Les mesures GPS montrent des déplacements de quelques centimètres par an : les plaques se rapprochent (convergence), s'éloignent (divergence) ou coulissent.",
    notions: ["lithosphère", "plaque lithosphérique", "frontière de plaques", "séisme, volcan", "GPS", "convergence, divergence, coulissage", "cm/an"],
    sec: {
      A: "Les séismes et les volcans ne sont pas répartis au hasard : leur localisation dessine les limites de plaques.",
      B: "Les vecteurs GPS mesurent les déplacements actuels des plaques (quelques cm/an) et permettent de reconnaître convergence, divergence ou coulissage."
    }
  },

  "2-II": {
    bilan: "Les mouvements des plaques accumulent des contraintes dans les roches : celles-ci se déforment puis cassent brutalement le long d'une faille, ce qui libère de l'énergie sous forme d'ondes sismiques (le foyer est le lieu de la rupture, l'épicentre est son point en surface). Un volcan émet du magma ; si le magma est fluide et pauvre en gaz, l'éruption est effusive (coulées de lave, Piton de la Fournaise) ; s'il est visqueux et riche en gaz, l'éruption est explosive (cendres, nuées ardentes, Montagne Pelée).",
    notions: ["contrainte, déformation", "faille", "foyer, épicentre", "ondes sismiques", "magma, lave", "viscosité", "éruption effusive / explosive"],
    sec: {
      A: "Les roches se déforment lentement sous la contrainte, puis rompent brutalement : l'énergie est libérée sous forme d'ondes sismiques.",
      B: "La viscosité du magma et sa teneur en gaz déterminent le type d'éruption : effusive (magma fluide) ou explosive (magma visqueux riche en gaz)."
    }
  },

  "2-III": {
    bilan: "L'aléa est la probabilité qu'un phénomène naturel dangereux (séisme, éruption, cyclone…) se produise ; la vulnérabilité est la sensibilité des personnes et des biens exposés ; le risque résulte de la combinaison de l'aléa et de la vulnérabilité. On ne peut pas empêcher un séisme, mais on peut réduire le risque : prévoir (surveillance), prévenir (construire aux normes, aménager), alerter et protéger (consignes, exercices). Au collège, le PPMS indique comment réagir selon les risques majeurs locaux.",
    notions: ["aléa", "vulnérabilité", "enjeux", "risque", "prévention, protection, alerte", "PPMS", "risque majeur"],
    sec: {
      A: "Risque = aléa × vulnérabilité : deux régions soumises au même aléa peuvent courir des risques très différents selon la préparation et les constructions.",
      B: "Le PPMS organise la sécurité de l'établissement : connaître les risques locaux, les consignes (se confiner, évacuer, s'abriter) et l'alerte permet de réduire le risque."
    }
  },

  "3-I": {
    bilan: "Les cellules chlorophylliennes des végétaux réalisent la photosynthèse : en présence de lumière, elles utilisent l'eau, les sels minéraux et le dioxyde de carbone pour produire de la matière organique (sucres, amidon) et du dioxygène. C'est la production primaire, base des réseaux alimentaires. L'eau et les sels minéraux (sève brute) sont prélevés par les poils absorbants des racines et montent par les vaisseaux conducteurs ; le CO₂ entre par les stomates des feuilles ; les sucres produits (sève élaborée) sont distribués dans toute la plante. Des champignons s'associent aux racines (mycorhizes) : ils fournissent eau et sels minéraux contre des sucres, au bénéfice des deux partenaires.",
    notions: ["photosynthèse", "matière minérale / organique", "lumière, chlorophylle", "amidon (test à l'eau iodée)", "production primaire", "sève brute / élaborée", "stomate, poil absorbant, vaisseau", "mycorhize (symbiose)"],
    sec: {
      A: "Photosynthèse : eau + CO₂ + lumière → matière organique (dont amidon) + dioxygène, dans les feuilles vertes éclairées. L'amidon se met en évidence avec l'eau iodée.",
      B: "Les poils absorbants prélèvent l'eau et les sels minéraux ; les vaisseaux les conduisent aux feuilles ; les stomates permettent les échanges de gaz ; les sucres circulent dans la sève élaborée.",
      C: "Les mycorhizes sont une symbiose entre racines et champignons : échanges d'eau et de sels minéraux contre des sucres. Les êtres photosynthétiques sont très divers (plantes, algues, certaines bactéries)."
    }
  },

  "3-II": {
    bilan: "L'information génétique est portée par l'ADN, localisé dans les chromosomes du noyau de chaque cellule. Une cellule humaine contient 46 chromosomes (23 paires) ; les cellules sexuelles (spermatozoïdes, ovules) n'en contiennent que 23. La fécondation réunit les chromosomes de deux cellules sexuelles : la cellule-œuf retrouve 46 chromosomes, moitié de chaque parent. Les cellules sexuelles de chaque parent sont toutes différentes (brassage de l'information génétique) et la rencontre au hasard de deux d'entre elles fait que chaque enfant est unique, sauf les vrais jumeaux.",
    notions: ["ADN", "chromosome, caryotype", "gène", "cellule sexuelle (gamète)", "fécondation, cellule-œuf", "brassage génétique", "unicité de l'individu"],
    sec: {
      A: "Le caryotype montre les chromosomes ; l'ADN qu'ils portent est le support de l'hérédité. L'espèce humaine a 46 chromosomes (23 paires) dans ses cellules.",
      B: "Chaque parent produit des cellules sexuelles génétiquement différentes (23 chromosomes) ; leur association au hasard à la fécondation donne des enfants tous différents (brassage)."
    }
  },

  "3-III": {
    bilan: "Les outils d'identification par intelligence artificielle (Pl@ntNet, BirdNET) aident à recenser la biodiversité, mais leurs réponses sont des probabilités qui dépendent de la qualité de la photo ou du son et des bases de données : il faut les vérifier et garder un esprit critique. Dans un écosystème, les espèces interagissent (alimentation, compétition, symbiose) et communiquent par des signaux chimiques (arbres qui s'alertent), sonores ou visuels.",
    notions: ["biodiversité", "inventaire / science participative", "IA d'identification : limites et biais", "interaction, symbiose, compétition, prédation", "communication chimique, sonore"],
    sec: {
      A: "Sur le terrain, on recense les espèces avec Pl@ntNet et BirdNET ; on vérifie les propositions de l'IA par des observations et des clés de détermination.",
      B: "Les êtres vivants d'un écosystème sont en interaction et peuvent communiquer : signaux chimiques émis par les arbres attaqués, chants et cris chez les animaux."
    }
  },

  "4-I": {
    bilan: "Les aliments sont transformés dans l'appareil digestif : par une digestion mécanique (mastication, brassage) et surtout chimique grâce aux enzymes (exemple : l'amylase transforme l'amidon en sucres simples). Les nutriments sont absorbés dans l'intestin grêle et passent dans le sang ; le microbiote intestinal aide à digérer certains aliments (fibres) et participe à la santé. Les nutriments et le dioxygène (échangé au niveau des alvéoles pulmonaires) sont transportés par le sang, mis en mouvement par le cœur, jusqu'à toutes les cellules. Les reins filtrent le sang et éliminent l'urée et l'eau en excès dans l'urine. Don du sang et don d'organes sont régis par la loi : bénévolat et anonymat pour le sang ; consentement présumé pour le don d'organes (refus possible).",
    notions: ["digestion mécanique / chimique", "enzyme (amylase)", "nutriment, absorption (villosités)", "microbiote intestinal", "alvéole pulmonaire, échanges gazeux", "sang, cœur, circulation", "rein, urée, urine", "don d'organes / de sang"],
    sec: {
      A: "L'amylase digère l'amidon en sucres simples (test à l'eau iodée puis à la liqueur de Fehling) : la digestion chimique est assurée par des enzymes.",
      B: "Les bactéries du microbiote intestinal aident à digérer ; les nutriments traversent la paroi de l'intestin grêle (villosités) vers le sang. Sans microbiote (souris axéniques), la santé et la digestion sont perturbées."
    }
  },

  "4-II": {
    bilan: "À la surface des alvéoles pulmonaires, très fines et très vascularisées, le dioxygène passe de l'air vers le sang et le dioxyde de carbone du sang vers l'air. Le sang circule dans un circuit fermé et double (poumons, organes) : il apporte O₂ et nutriments aux organes et emporte CO₂ et déchets. Les reins épurent le sang de l'urée, déchet produit par les cellules, et forment l'urine. Le don d'organes et de sang est un acte citoyen encadré par la loi.",
    notions: ["alvéole", "surface d'échange", "circulation double", "vaisseaux : artère, veine, capillaire", "rein : filtration, excrétion", "citoyenneté, solidarité"],
    sec: {
      A: "L'alvéole est une surface d'échange vaste et fine : O₂ entre dans le sang, CO₂ en sort.",
      B: "Le cœur propulse le sang dans les vaisseaux jusqu'aux organes ; les reins filtrent le sang et excrètent l'urée dans l'urine.",
      C: "En France, tout adulte est considéré comme donneur d'organes sauf s'il s'y est opposé (registre national des refus) ; le don du sang est volontaire, anonyme et bénévole."
    }
  },

  "4-III": {
    bilan: "Un stimulus est détecté par un récepteur sensoriel, qui envoie un message nerveux par les nerfs sensitifs jusqu'aux centres nerveux (cerveau, moelle épinière) ; la réponse est transmise par les nerfs moteurs aux muscles. Dans le réflexe, le trajet est court et passe par la moelle épinière. Les cellules sensorielles, comme les cellules ciliées de l'oreille interne, ne se régénèrent pas : un son trop fort ou trop prolongé les détruit définitivement. La prévention et les règles de santé publique (limitation du volume sonore, information) protègent les sens.",
    notions: ["stimulus, récepteur sensoriel", "message nerveux", "nerf sensitif / moteur", "centres nerveux", "réflexe", "cellule ciliée", "décibel, risque auditif"],
    sec: {
      A: "Voie du réflexe : récepteur → nerf sensitif → moelle épinière → nerf moteur → muscle.",
      B: "Au-delà de 85 dB pendant longtemps, les cellules ciliées se détruisent sans possibilité de réparation : l'audition se protège (baisser le volume, limiter la durée)."
    }
  },

  "5-I": {
    bilan: "Quand des micro-organismes pénètrent dans l'organisme, les globules blancs réagissent. La phagocytose est une réaction rapide et non spécifique : un phagocyte reconnaît, englobe puis détruit l'intrus. La réponse spécifique produit des anticorps, qui se fixent uniquement sur l'antigène correspondant et le neutralisent, ce qui permet son élimination par les phagocytes. Les anticorps sont transmissibles par sérum (expérience de Von Behring).",
    notions: ["antigène", "phagocytose, phagocyte", "globule blanc (leucocyte)", "réaction non spécifique / spécifique", "anticorps", "neutralisation", "sérum"],
    sec: {
      A: "Phagocytose : reconnaissance, englobement, digestion. Elle agit contre tous les intrus, dès les premières heures.",
      B: "Les anticorps sont spécifiques d'un seul antigène : ils le neutralisent. Le sérum d'un animal immunisé protège un animal malade (Von Behring)."
    }
  },

  "5-II": {
    bilan: "Lors d'un premier contact avec un antigène, la réponse est lente ; l'organisme garde la mémoire de ce contact : lors d'un deuxième contact (rappel), la production d'anticorps est plus rapide et plus intense. La vaccination utilise cette mémoire : on injecte un antigène inoffensif pour préparer l'organisme à une future infection. Le VIH est un virus qui infecte et détruit des lymphocytes T4, cellules clés de l'immunité ; l'immunité affaiblie laisse la place aux infections opportunistes : c'est le SIDA. On se protège avec le préservatif et on traite avec des antirétroviraux ; le dépistage est essentiel.",
    notions: ["mémoire immunitaire", "rappel de vaccin", "vaccination", "VIH / SIDA", "lymphocyte T4", "infection opportuniste", "préservatif, dépistage, traitement antirétroviral"],
    sec: {
      A: "La courbe d'anticorps après un rappel monte plus vite et plus haut qu'après la première injection : c'est la mémoire immunitaire, base de l'efficacité vaccinale.",
      B: "Le VIH détruit des cellules immunitaires ; sans traitement, l'organisme ne peut plus se défendre (SIDA). Prévention : préservatif, dépistage, traitement."
    }
  },

  "6-I": {
    bilan: "Au moment de la puberté, des hormones commandent le fonctionnement des gonades. Le cerveau (hypothalamus) agit sur l'hypophyse qui libère des hormones (LH, FSH) véhiculées par le sang jusqu'aux testicules ou aux ovaires. Chez l'homme, les testicules produisent des spermatozoïdes en continu et la testostérone. Chez la femme, un cycle d'environ 28 jours est contrôlé par les hormones de l'hypophyse et des ovaires (œstrogènes, progestérone) : maturation d'un follicule, ovulation vers le 14e jour, préparation de l'utérus, puis règles si pas de fécondation. Les ovaires et l'utérus retro-agissent sur le cerveau (régulation).",
    notions: ["hormone", "hypophyse", "gonade (testicule, ovaire)", "LH, FSH, testostérone, œstrogènes, progestérone", "cycle féminin", "ovulation", "régulation"],
    sec: {
      A: "Des expériences historiques (castrations, greffes) ont prouvé que les testicules agissent à distance par une substance transportée dans le sang : une hormone ; le cerveau contrôle ces glandes.",
      B: "Le cycle féminin est un dialogue entre le cerveau, les ovaires et l'utérus : ovulation vers J14, règles en l'absence de fécondation."
    }
  },

  "6-II": {
    bilan: "Le pénis et le clitoris sont des organes homologues, de même origine embryonnaire : le clitoris est un organe en grande partie interne, d'une dizaine de centimètres, dont seul le gland est visible ; il possède de très nombreuses terminaisons nerveuses. Le plaisir sexuel est une sensation produite par le cerveau : des récepteurs sensoriels envoient des messages nerveux au cerveau, qui active le circuit de la récompense (dopamine). Il est indépendant de la reproduction.",
    notions: ["clitoris, pénis : homologie", "zones érogènes", "récepteurs sensoriels", "message nerveux", "circuit de la récompense", "dopamine", "plaisir ≠ procréation"],
    sec: {
      A: "Les modèles anatomiques réels montrent la structure complète du clitoris (gland, corps, racines, bulbes) et sa ressemblance avec le pénis.",
      B: "Capteurs sensoriels → nerfs → cerveau : le plaisir naît dans le cerveau, par l'activation du circuit de la récompense."
    }
  },

  "6-III": {
    bilan: "Les méthodes de contraception empêchent une grossesse en bloquant l'ovulation (pilule, implant), en empêchant la rencontre des gamètes (préservatif, stérilet) ; seul le préservatif protège aussi des IST. Une relation sexuelle doit reposer sur un consentement libre, éclairé, enthousiaste, spécifique et révocable à tout moment ; l'absence de consentement est interdite et punie par la loi. Avant 15 ans, la loi présume l'absence de consentement face à un majeur.",
    notions: ["contraception", "ovulation, rencontre des gamètes", "préservatif, IST", "consentement : libre, éclairé, réversible", "loi, majorité sexuelle (15 ans)", "respect mutuel"],
    sec: {
      A: "Chaque méthode agit à un endroit précis du fonctionnement de l'organisme : blocage de l'ovulation ou obstacle à la rencontre des gamètes ; seul le préservatif protège des IST.",
      B: "Consentir, c'est dire oui librement, clairement, et pouvoir dire non à tout moment ; aucun oui n'est valide sous pression, sous emprise ou sous alcool/drogue."
    }
  }
};

/* =============================== 3e =============================== */
PROG.traces["3e"] = {

  "1-I": {
    bilan: "Les roches du bâti local (calcaire, grès, granite…) se reconnaissent par des tests simples (aspect, dureté, effervescence à l'acide chlorhydrique). Une roche sédimentaire se forme en plusieurs étapes : altération et érosion des roches en surface, transport des fragments par l'eau ou le vent, dépôt (sédimentation) puis transformation des sédiments en roche (compaction, cimentation). Les roches sont ensuite enfouies, transformées (métamorphisme) ou fondues (magmas), puis remontent : c'est le cycle des roches, qui se déroule sur des millions d'années.",
    notions: ["roche sédimentaire / magmatique / métamorphique", "altération, érosion, transport, sédimentation", "compaction, cimentation", "effervescence à l'acide", "cycle des roches", "durée géologique"],
    sec: {
      A: "On identifie les roches des façades et des monuments par des tests simples : couleur, grains, dureté, effervescence à l'acide.",
      B: "De l'altération à la sédimentation : une roche est fragmentée, ses débris sont transportés puis déposés en couches (strates).",
      C: "Les roches changent de nature selon les conditions : sédimentaire, magmatique, métamorphique : leur transformation est cyclique et lente."
    }
  },

  "1-II": {
    bilan: "Une ressource renouvelable (bois, eau, vent, soleil) se reconstitue à l'échelle humaine ; une réserve non renouvelable (pétrole, gaz, charbon, minerais comme le lithium) s'est formée en millions d'années et est consommée bien plus vite qu'elle ne se forme. L'utilisation des combustibles carbonés libère du CO₂ qui renforce l'effet de serre et réchauffe la planète. L'océan stocke l'essentiel de la chaleur excédentaire, absorbe une partie du CO₂ (acidification) et gonfle (dilatation). Pour agir : atténuer (réduire les émissions) et s'adapter aux changements inévitables.",
    notions: ["ressource renouvelable / réserve non renouvelable", "temps de formation / vitesse de consommation", "combustibles fossiles", "forçage radiatif, effet de serre additionnel", "acidification des océans", "atténuation / adaptation"],
    sec: {
      A: "Comparer le temps de formation d'une ressource (pétrole : des millions d'années) avec sa vitesse de consommation (quelques siècles) montre qu'une réserve peut s'épuiser.",
      B: "L'océan absorbe plus de 90 % de l'excès de chaleur et une part du CO₂ émis : il se réchauffe, s'acidifie et son niveau monte."
    }
  },

  "2-I": {
    bilan: "Les fossiles sont des archives de la vie passée : en comparant avec les êtres vivants actuels (principe d'actualisme), on reconstitue les paléoenvironnements. Les successions de faunes dans les couches montrent que la vie a changé. Il y a eu des crises biologiques majeures : à la limite Crétacé-Paléogène (−66 Ma), une chute d'astéroïde et un volcanisme intense ont provoqué la disparition d'environ 75 % des espèces, dont les dinosaures non aviens. La crise actuelle présente une vitesse d'extinction très élevée, liée aux activités humaines.",
    notions: ["fossile", "paléoenvironnement", "actualisme", "strates, datation relative", "crise biologique, extinction de masse", "limite K-Pg (66 Ma)", "crise actuelle de la biodiversité"],
    sec: {
      A: "Les fossiles et leur ordre dans les couches renseignent sur les milieux anciens : un fossile de corail = mer chaude peu profonde.",
      B: "Crise K-Pg : impact d'astéroïde + volcanisme → perturbation du climat et des écosystèmes → extinction massive. On compare avec la crise actuelle."
    }
  },

  "2-II": {
    bilan: "Dans une population, les individus ne sont pas tous identiques : il existe une variabilité génétique. Si le milieu change, les individus porteurs de caractères avantageux survivent et se reproduisent davantage : la fréquence de ces caractères augmente au fil des générations (sélection naturelle). Ainsi les bactéries résistantes aux antibiotiques ou les phalènes sombres se sont répandues. Il n'y a pas de volonté de s'adapter : le milieu trie. Quand des populations sont isolées l'une de l'autre, elles accumulent des différences : si elles ne peuvent plus se reproduire entre elles, de nouvelles espèces apparaissent (spéciation).",
    notions: ["variabilité génétique", "mutation (hasard)", "sélection naturelle", "avantage reproductif", "fréquence d'un caractère", "isolement", "spéciation"],
    sec: {
      A: "Sélection naturelle : variabilité → survie et reproduction différentielles → évolution de la fréquence du caractère dans la population.",
      B: "Isolement géographique ou écologique → différences génétiques qui s'accumulent → impossibilité de se reproduire entre elles = nouvelles espèces (exemple des moustiques du métro de Londres)."
    }
  },

  "2-III": {
    bilan: "Pour protéger la biodiversité, on préserve et relie les milieux : trames verte (milieux terrestres), bleue (cours d'eau) et noire (obscurité) assurent des déplacements et des cycles de vie. Le concept One Health montre que la santé humaine, la santé animale et la santé des écosystèmes sont liées (zoonoses, antibiorésistance). Les biotechnologies utilisent des organismes ou des molécules du vivant (production d'insuline, bio-inspiration) ; les solutions fondées sur la nature (zones humides, mangroves, végétalisation) utilisent le fonctionnement des écosystèmes pour répondre à des problèmes sociétaux.",
    notions: ["trame verte, bleue, noire", "corridor écologique", "pollution lumineuse", "One Health (une seule santé)", "zoonose", "biotechnologie", "bio-inspiration", "solution fondée sur la nature"],
    sec: {
      A: "Cartographier les trames autour du collège (SIG) montre où la faune circule et où elle est bloquée (routes, lumières, urbanisation).",
      B: "La nature inspire et soigne : biotechnologies pour la santé, solutions fondées sur la nature pour protéger des inondations ou de la chaleur."
    }
  },

  "3-I": {
    bilan: "Les neurones communiquent au niveau des synapses : le message nerveux électrique d'un neurone provoque la libération d'un neurotransmetteur dans la fente synaptique ; ce messager chimique se fixe sur des récepteurs du neurone suivant et déclenche un nouveau message. Apprendre modifie le cerveau : les synapses se créent et se renforcent par la répétition (plasticité cérébrale) ; le sommeil consolide les apprentissages et la mémoire.",
    notions: ["neurone, synapse", "neurotransmetteur", "récepteur", "message nerveux", "plasticité cérébrale", "mémorisation, sommeil", "répétition"],
    sec: {
      A: "À la synapse, le signal passe du chimique à l'électrique : le neurotransmetteur est libéré, traverse la fente et se fixe sur ses récepteurs.",
      B: "Pendant le sommeil, le cerveau consolide ce qui a été appris : dormir suffisamment est une condition d'apprentissage."
    }
  },

  "3-II": {
    bilan: "Une émotion (peur, joie, colère, tristesse…) est une réponse du cerveau à une situation, qui se manifeste dans le corps (rythme cardiaque, respiration, sudation, tension musculaire) et dans le comportement. Les émotions sont utiles et naturelles ; on peut apprendre à les identifier et à les réguler (respirer, parler, s'exprimer) : ce sont des compétences psychosociales.",
    notions: ["émotion", "amygdale, cerveau", "signaux corporels", "régulation émotionnelle", "compétences psychosociales (CPS)", "empathie"],
    sec: {
      A: "Chaque émotion s'accompagne de signaux corporels mesurables (pouls, respiration, transpiration).",
      B: "Reconnaître son émotion et la réguler aide à mieux vivre avec les autres."
    }
  },

  "3-III": {
    bilan: "Les drogues, les jeux vidéo et les écrans (réseaux sociaux) activent le circuit de la récompense et provoquent une libération importante de dopamine. En cas de répétition, le cerveau s'adapte : il faut davantage pour ressentir le même effet (tolérance), le manque apparaît et le contrôle diminue : c'est l'addiction. Les troubles des conduites alimentaires (anorexie, boulimie) sont des maladies complexes, liées à des facteurs psychologiques, sociaux et biologiques, qui se soignent avec un accompagnement.",
    notions: ["circuit de la récompense", "dopamine", "addiction, tolérance, manque", "écrans, jeux vidéo, drogues", "TCA (anorexie, boulimie)", "aide, prévention"],
    sec: {
      A: "Drogues et écrans stimulent le même circuit cérébral de la récompense, ce qui peut conduire à l'addiction.",
      B: "Les TCA sont des maladies : demander de l'aide à un adulte ou un professionnel de santé est la bonne démarche."
    }
  },

  "4-I": {
    bilan: "Un antibiogramme permet de mesurer l'efficacité d'antibiotiques sur une bactérie : plus la zone d'inhibition autour du disque est grande, plus la bactérie y est sensible ; absence de zone = résistance. La résistance s'explique par la sélection naturelle : dans une population bactérienne, certaines bactéries portent par hasard un gène de résistance ; l'antibiotique tue les sensibles et laisse se multiplier les résistantes. L'usage excessif d'antibiotiques (médecine, élevage) et leur dispersion dans l'environnement favorisent ces souches : il faut les utiliser à bon escient.",
    notions: ["antibiotique", "antibiogramme, zone d'inhibition", "résistance", "mutation", "sélection naturelle", "usage raisonné (« Les antibiotiques, c'est pas automatique »)", "dispersion dans les écosystèmes"],
    sec: {
      A: "Lecture d'un antibiogramme : diamètre de la zone d'inhibition → sensibilité ; pas de zone → résistance.",
      B: "Antibiotique = pression de sélection : les bactéries résistantes se multiplient et se transmettent de l'élevage à l'hôpital, via l'eau et l'alimentation."
    }
  },

  "4-II": {
    bilan: "Les papillomavirus humains (HPV) se transmettent notamment lors de rapports sexuels ; une infection persistante peut dérégler la division des cellules et, des années plus tard, provoquer un cancer (col de l'utérus, etc.) : une multiplication cellulaire incontrôlée. La vaccination (recommandée à partir de 11 ans, filles et garçons) protège contre les HPV les plus dangereux ; quand la couverture vaccinale est élevée, la circulation du virus diminue (exemple de l'Australie) : bénéfice individuel et collectif.",
    notions: ["HPV, virus", "infection persistante", "cancer, multiplication cellulaire incontrôlée", "vaccination, couverture vaccinale", "protection individuelle et collective", "épidémiologie"],
    sec: {
      A: "Le virus HPV perturbe le matériel génétique des cellules : celles-ci se divisent sans contrôle, d'où le cancer.",
      B: "Plus la couverture vaccinale est haute, plus le virus recule : la comparaison des pays montre l'intérêt d'une politique de vaccination."
    }
  },

  "5-I": {
    bilan: "Toutes les cellules du corps (cellules somatiques) ont le même caryotype (46 chromosomes) car lors de la multiplication cellulaire chaque chromosome est copié puis réparti identiquement entre les deux cellules filles (mitose). Le développement du fœtus dépend des échanges au niveau du placenta : O₂ et nutriments passent du sang de la mère vers celui du fœtus, CO₂ et déchets en sens inverse, sans mélange des sangs. Alcool, tabac, drogues et certains médicaments traversent le placenta et peuvent être toxiques. L'accouchement est déclenché par des signaux hormonaux (ocytocine) qui provoquent les contractions de l'utérus.",
    notions: ["mitose", "chromosome copié et réparti", "cellule somatique, caryotype (46)", "placenta, cordon ombilical", "échanges fœto-maternels", "substances toxiques", "ocytocine, contractions"],
    sec: {
      A: "Mitose : chaque chromosome est dupliqué puis réparti : les deux cellules filles ont le même caryotype que la cellule mère.",
      B: "Le placenta est une zone d'échange perméable aux nutriments, aux gaz et aussi à des toxiques : protéger le fœtus, c'est éviter alcool, tabac et drogues.",
      C: "À la fin de la grossesse, des hormones (ocytocine) déclenchent les contractions de l'utérus qui permettent la naissance."
    }
  },

  "5-II": {
    bilan: "La médecine offre des réponses encadrées par la loi : la PMA aide un couple ou une personne à avoir un enfant ; l'IVG permet d'interrompre une grossesse non désirée dans un cadre légal (jusqu'à 14 semaines de grossesse en France) ; l'IMG est possible en cas de danger grave pour la mère ou le fœtus ; la contraception d'urgence réduit le risque de grossesse après un rapport non protégé. Un consentement n'est valide que s'il est libre, éclairé et donné par une personne en capacité de le faire : il est absent en cas de contrainte, de menace, d'emprise, d'alcool ou de drogue, ou de personne trop jeune.",
    notions: ["PMA", "IVG", "IMG", "contraception d'urgence", "bioéthique", "consentement valide", "loi, droits et devoirs"],
    sec: {
      A: "Chaque technique répond à une situation précise et a des conditions légales : se renseigner auprès d'un professionnel de santé (infirmière scolaire, planning familial).",
      B: "Critères d'un consentement valide : libre, éclairé, spécifique, enthousiaste et réversible ; en cas de doute ou d'absence de consentement, c'est interdit."
    }
  }
};

/* =========== 5e (suite) : activité physique, micro-organismes, procréation =========== */
Object.assign(PROG.traces["5e"], {

  "4-I": {
    bilan: "Un mouvement volontaire est commandé par le cerveau : le message nerveux part des centres nerveux (cerveau, moelle épinière), est transmis par les nerfs aux muscles qui se contractent. Une lésion de la moelle épinière ou d'un nerf interrompt la commande et peut entraîner une paralysie.",
    notions: ["cerveau, moelle épinière", "nerf", "muscle", "message nerveux", "commande volontaire du mouvement", "paralysie"],
    sec: {
      A: "Centres nerveux → nerfs → muscles : si la moelle épinière est atteinte, l'ordre du cerveau n'arrive plus aux muscles situés en dessous de la lésion."
    }
  },

  "4-II": {
    bilan: "À l'effort, la fréquence cardiaque et la fréquence respiratoire augmentent : les muscles consomment plus de dioxygène et de nutriments pour produire l'énergie dont ils ont besoin et rejettent plus de dioxyde de carbone. Le cœur et les poumons s'adaptent pour augmenter l'apport de dioxygène et de nutriments aux muscles et pour évacuer les déchets. Après l'effort, les paramètres reviennent progressivement à leurs valeurs de repos.",
    notions: ["fréquence cardiaque", "fréquence respiratoire", "repos / effort", "dioxygène, nutriments", "débit sanguin", "récupération"],
    sec: {
      A: "On mesure pouls et respiration au repos puis à l'effort : ils augmentent avec l'intensité de l'effort et reviennent à la normale après la récupération.",
      B: "Plus un muscle travaille, plus il a besoin de dioxygène et de nutriments : le cœur bat plus vite et la respiration s'accélère pour les lui apporter."
    }
  },

  "4-III": {
    bilan: "Un entraînement raisonné (progressif, régulier, avec récupération) améliore les capacités de l'organisme ; un entraînement excessif (surentraînement) fatigue et blesse. Le dopage (ex. EPO) augmente artificiellement les performances mais est dangereux pour la santé, interdit et contraire à l'esprit du sport. À l'inverse, la sédentarité augmente le risque de maladies : il est recommandé de bouger au moins 60 minutes par jour à l'adolescence.",
    notions: ["entraînement raisonné", "surentraînement", "récupération", "dopage, EPO", "sédentarité", "recommandation : 60 min d'activité par jour"],
    sec: {
      A: "S'entraîner progressivement et se reposer permet de progresser ; trop d'entraînement sans récupération est dangereux.",
      B: "Le dopage fait courir des risques graves (cardiovasculaires notamment) et fausse la compétition : on peut argumenter à partir de cas réels (affaire Festina, 1998).",
      C: "Bouger chaque jour protège la santé (cœur, os, moral) ; la sédentarité (trop de temps assis ou devant un écran) est un facteur de risque."
    }
  },

  "5-I": {
    bilan: "Les micro-organismes (bactéries, virus, champignons) sont partout, y compris sur notre peau, et la plupart sont inoffensifs. La contamination est l'entrée de micro-organismes dans l'organisme, ou leur présence sur une surface ; l'infection est leur multiplication dans l'organisme, qui provoque parfois des symptômes (fièvre, douleur…). Les barrières naturelles (peau, muqueuses, larmes…) limitent l'entrée des micro-organismes : être contaminé ne signifie pas forcément être malade.",
    notions: ["micro-organisme : bactérie, virus, champignon", "contamination", "infection", "symptôme", "barrière naturelle (peau, muqueuses)", "multiplication"],
    sec: {
      A: "Les mains portent de nombreux micro-organismes (culture sur gélose) ; la peau et les muqueuses sont des barrières naturelles.",
      B: "Quand les micro-organismes se multiplient dans l'organisme (infection), des symptômes peuvent apparaître : contamination ≠ infection."
    }
  },

  "5-II": {
    bilan: "Pour lutter contre les micro-organismes, on distingue : l'asepsie (empêcher leur présence : lavage des mains, matériel stérile) et l'antisepsie (les détruire sur la peau ou une plaie avec un antiseptique). Les antibiotiques agissent contre les bactéries uniquement, jamais contre les virus ; les antiviraux ciblent certains virus. Le vaccin prépare l'organisme à une infection : il protège la personne vaccinée et, si beaucoup de personnes sont vaccinées, il limite la circulation de l'agent infectieux (protection collective). Le vaccin contre les HPV protège de certains cancers.",
    notions: ["asepsie / antisepsie", "antiseptique", "antibiotique (bactéries)", "antiviral (virus)", "vaccin", "protection individuelle / collective", "couverture vaccinale", "HPV"],
    sec: {
      A: "Semmelweis : se laver les mains avec une solution désinfectante a fait chuter la mortalité des accouchées : l'asepsie sauve des vies.",
      B: "Un antibiotique est efficace uniquement sur les bactéries : on le prend seulement sur prescription et en suivant la durée du traitement.",
      C: "La vaccination protège les vaccinés et, indirectement, ceux qui ne peuvent pas l'être : plus la couverture vaccinale est élevée, moins l'épidémie progresse."
    }
  },

  "6-I": {
    bilan: "À partir de la puberté, les appareils sexuels deviennent fonctionnels sous l'action d'hormones. Chez le garçon, les testicules produisent des spermatozoïdes en continu, sans interruption ; chez la fille, les ovaires libèrent environ un ovule par cycle (cycle d'environ 28 jours) : l'ovulation a lieu environ 14 jours avant les règles suivantes. Le clitoris fait partie de l'appareil sexuel féminin. La puberté est une étape normale du développement, avec des changements corporels et psychologiques.",
    notions: ["puberté", "testicule, spermatozoïde", "ovaire, ovule, ovulation", "règles, cycle menstruel", "production continue / cyclique", "organes génitaux (clitoris, vulve, pénis…)"],
    sec: {
      A: "On repère et on nomme les organes des appareils sexuels masculin et féminin (clitoris compris) sur des schémas et des modèles.",
      B: "Garçon : production continue de spermatozoïdes. Fille : ovulation environ tous les 28 jours, 14 jours avant les règles.",
      C: "La puberté déclenche la mise en route des appareils sexuels ; elle varie d'une personne à l'autre et il est normal de se poser des questions."
    }
  },

  "6-II": {
    bilan: "Lors d'un rapport sexuel avec éjaculation dans le vagin, des millions de spermatozoïdes sont déposés ; ils remontent à travers le col de l'utérus et l'utérus jusqu'aux trompes. Si un ovule est présent dans la trompe (moment de l'ovulation), un spermatozoïde peut y pénétrer : c'est la fécondation. La cellule-œuf, issue de l'union des deux cellules sexuelles, est la première cellule du futur embryon, qui se divise et s'implante dans l'utérus. Avoir ou non un enfant est un choix personnel, libre et responsable.",
    notions: ["fécondation", "spermatozoïde, ovule", "trompe, utérus", "cellule-œuf", "embryon", "choix libre et responsable (EVARS)"],
    sec: {
      A: "Trajet des cellules sexuelles : spermatozoïdes (vagin → utérus → trompe) et ovule (ovaire → trompe) ; la fécondation a lieu dans la trompe.",
      B: "Chacun a le droit de choisir d'avoir ou non un enfant, et le moment : la contraception et l'information permettent de choisir.",
      C: "On fait le bilan : de la puberté à la cellule-œuf."
    }
  }
});

// Compléments de synthèse et projets
if (window.PROG && window.PROG.traces) {
  if (window.PROG.traces["5e"]) {
    window.PROG.traces["5e"]["7-I"] = {
      bilan: "La démarche scientifique repose sur l'observation, le questionnement, l'expérimentation et l'analyse critique des résultats. Les compétences développées en 5e (mesures, microscopie, modélisation, esprit critique) permettent de comprendre notre environnement et d'agir de manière responsable.",
      notions: ["démarche scientifique", "esprit critique", "expérimentation", "modélisation", "orientation"],
      sec: { A: "Réinvestir ses acquis dans un projet concret (biodiversité, communication scientifique) permet de valider les compétences du socle commun." }
    };
  }
  if (window.PROG.traces["4e"]) {
    window.PROG.traces["4e"]["7-I"] = {
      bilan: "Les sciences permettent de relier la dynamique interne et externe de la Terre aux métabolismes du vivant et à la santé humaine. Les transitions écologique et sociétale nécessitent des citoyens éclairés, capables de distinguer faits scientifiques et croyances, de repérer les biais des outils numériques et de valoriser les femmes scientifiques.",
      notions: ["fresque du climat", "démarche scientifique", "esprit critique", "égalité filles-garçons en sciences", "orientation"],
      sec: { A: "Mettre en relation les grands cycles biogéochimiques et les enjeux sociétaux permet d'agir en citoyen responsable et d'envisager les métiers des sciences et du développement durable." }
    };
  }
  if (window.PROG.traces["3e"]) {
    window.PROG.traces["3e"]["6-I"] = {
      bilan: "Méthodologie de l'épreuve de SVT au DNB (30 min, 25 points ou 10 points) : 1) Identifier le problème posé ; 2) Extraire les informations utiles des documents en citant les valeurs et unités précises ; 3) Convoquer ses connaissances de cours pour expliquer les données ; 4) Mettre en relation documents et connaissances avec des connecteurs logiques (or, donc, par conséquent) pour répondre directement à la question posée.",
      notions: ["méthodologie DNB", "analyse de documents", "argumentation scientifique", "connecteurs logiques", "rigueur scientifique"],
      sec: { A: "S'entraîner sur des sujets thématiques permet d'acquérir les automatismes de lecture de graphiques, de tableaux et de schémas bilan sous contrainte de temps." }
    };
    window.PROG.traces["3e"]["6-II"] = {
      bilan: "La science n'est pas une opinion : c'est une construction collective validée par la communauté des pairs (peer-review). L'esprit critique permet de vérifier les sources, d'identifier les biais et de rejeter les théories du complot. Au terme du Cycle 4, l'élève maîtrise les grands concepts unificateurs de la biologie et de la géologie (cellule, ADN, évolution, tectonique des plaques, cycles de matière).",
      notions: ["revue par les pairs (peer-review)", "consensus scientifique", "faits vs opinions", "synthèse de cycle 4", "passeport de compétences"],
      sec: { A: "La revue par les pairs garantit la fiabilité des savoirs scientifiques avant publication ; les compétences acquises au collège constituent le socle de la réussite au lycée." }
    };
  }
}
