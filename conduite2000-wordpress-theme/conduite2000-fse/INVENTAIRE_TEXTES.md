# INVENTAIRE EXHAUSTIF — Textes visibles du theme conduite2000-fse

> Date : 2026-06-20
> Statut : ETAPE 1 — inventaire (aucune conversion effectuee)

Legende :
- **Bloc** : `wp:html` = non editable | `wp:heading` / `wp:paragraph` / etc. = deja editable
- **CSS/JS** : selecteurs CSS ou JS qui ciblent cet element (vide = CSS generique seulement)
- [ ] = a convertir | [x] = deja editable ou converti | [?] = A DECIDER

---

## SECTION 01 — HEADER (`parts/header.html`)

Tout le fichier est un seul bloc `wp:html` (lignes 1-41).
JS : `#navBurger`, `#navMobileMenu`, `.nav-inner` (script.js L320-349)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 1 | `alt="Conduite 2000"` (img) | header.html:5 | wp:html | `.nav-brand img` |
| 2 | **Conduite 2000** | header.html:7 | wp:html | `.nav-brand b` |
| 3 | Depuis 1984 | header.html:8 | wp:html | `.nav-brand span` |
| 4 | A propos | header.html:12 | wp:html | `.nav-links a` |
| 5 | Agences | header.html:13 | wp:html | `.nav-links a` |
| 6 | Formations | header.html:14 | wp:html | `.nav-links a` |
| 7 | Tarifs | header.html:15 | wp:html | `.nav-links a` |
| 8 | Contact | header.html:16 | wp:html | `.nav-links a` |
| 9 | 06 19 02 28 32 | header.html:20 | wp:html | `.nav-cta span` |
| 10 | `aria-label="Ouvrir le menu"` | header.html:22 | wp:html | `#navBurger` **JS** |
| 11 | 01 | header.html:28 | wp:html | `.nav-mobile-num` |
| 12 | A propos (mobile) | header.html:28 | wp:html | `.nav-mobile-links a` |
| 13 | 02 | header.html:29 | wp:html | `.nav-mobile-num` |
| 14 | Agences (mobile) | header.html:29 | wp:html | `.nav-mobile-links a` |
| 15 | 03 | header.html:30 | wp:html | `.nav-mobile-num` |
| 16 | Formations (mobile) | header.html:30 | wp:html | `.nav-mobile-links a` |
| 17 | 04 | header.html:31 | wp:html | `.nav-mobile-num` |
| 18 | Tarifs (mobile) | header.html:31 | wp:html | `.nav-mobile-links a` |
| 19 | 05 | header.html:32 | wp:html | `.nav-mobile-num` |
| 20 | Contact (mobile) | header.html:32 | wp:html | `.nav-mobile-links a` |
| 21 | 06 19 02 28 32 (mobile) | header.html:37 | wp:html | `.nav-mobile-cta` |

**Statut : [ ] A DECIDER** — Le header est un seul bloc wp:html avec structure complexe
(`<header>`, `<nav>`, burger, menu mobile). Les IDs `#navBurger` et `#navMobileMenu` sont
cibles par le JS (script.js L320-338), et `.nav-inner` par L342. WP FSE ne genere pas de
`<header>` ni `<nav>` via ses blocs natifs avec ces classes. Convertir en blocs natifs
casserait la structure DOM attendue par le JS et le CSS.
**Raison** : la balise `<header class="nav">` avec ses sous-elements `<nav class="nav-links">`,
le burger `#navBurger` et le menu mobile `#navMobileMenu` forment un ensemble indissociable
cible par le JS. Les blocs natifs WP (wp:navigation, wp:site-title) produisent un markup
different qui casserait le CSS et le JS.

---

## SECTION 02 — HERO (`patterns/hero.php`)

### Blocs deja editables (natifs)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 22 | [x] Apprendre a conduire avec **serenite**. | hero.php:27 | wp:heading h1 | `.hero-h1`, `.accent`, `.since` — **JS** animations.js L147 (line splitting `.hero h1`) |
| 23 | [x] Conduite 2000 vous forme a la conduite depuis 1984. | hero.php:27 | wp:heading h1 (span.since) | `.since` |
| 24 | [x] Auto-ecole familiale en Ille-et-Vilaine... | hero.php:31 | wp:paragraph | `.hero-lede` |

### wp:html bloc 1 — hero-tag (lignes 19-24)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 25 | [ ] **EST. 1984** | hero.php:21 | wp:html | `.hero-tag b` |
| 26 | [ ] 40+ annees d'expertise . Bourgbarre . Orgeres | hero.php:22 | wp:html | `.hero-tag span` |

### wp:html bloc 2 — hero-actions (lignes 34-42)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 27 | [ ] Demander un devis | hero.php:37 | wp:html | `.btn.btn-primary` (contient SVG fleche) |
| 28 | [ ] Voir les formations | hero.php:40 | wp:html | `.btn.btn-ghost` |

### wp:html bloc 3 — hero-stats (lignes 44-59)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 29 | [ ] 40 **+** | hero.php:47 | wp:html | `.hero-stats b`, `.unit` |
| 30 | [ ] annees d'experience | hero.php:48 | wp:html | `.hero-stats span` |
| 31 | [ ] 2 | hero.php:51 | wp:html | `.hero-stats b` |
| 32 | [ ] agences a votre service | hero.php:52 | wp:html | `.hero-stats span` |
| 33 | [ ] 1 **EUR** | hero.php:55 | wp:html | `.hero-stats b`, `.unit` |
| 34 | [ ] par jour, c'est possible | hero.php:56 | wp:html | `.hero-stats span` |

### wp:html bloc 4 — hero-visual (lignes 64-84)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 35 | [ ] B (icone carte) | hero.php:67 | wp:html | `.hero-card-1 .icon` |
| 36 | [ ] **Permis B** | hero.php:68 | wp:html | `.hero-card-1 b` |
| 37 | [ ] Traditionnel . AAC . Supervisee | hero.php:68 | wp:html | `.hero-card-1 span` |
| 38 | [ ] EUR (icone carte) | hero.php:71 | wp:html | `.hero-card-2 .icon.dark` |
| 39 | [ ] **Permis a 1EUR/jour** | hero.php:72 | wp:html | `.hero-card-2 b` |
| 40 | [ ] 15-25 ans . sans interets | hero.php:72 | wp:html | `.hero-card-2 span` |

**Note hero-visual** : `aria-hidden="true"`, `.hero-visual` et `.scene` sont cibles par
le JS parallax (animations.js L171-201). La scene isometrique (buildings, trees, road, cars)
est purement decorative CSS, pas de texte. Les 2 hero-cards contiennent du texte mais sont
dans le meme div `.hero-visual` cible par le JS.
**Statut #35-40 : [ ] A DECIDER** — Les textes des hero-cards sont a l'interieur du
`div.hero-visual` qui est cible par le JS parallax (`animations.js` L171, L188).
Separer les hero-cards du reste du visual casserait la structure.

---

## SECTION 03 — MARQUEE (`patterns/marquee.php`)

Tout le fichier est un seul bloc `wp:html` (lignes 11-18).
`aria-hidden="true"` sur le wrapper.
JS : `.marquee` cible par animations.js REVEAL_RULES (fade).
CSS : `.marquee-track` utilise animation CSS `marquee-scroll` pour le defilement infini.
Les 7 spans sont dupliques (lignes 14-15) pour l'effet de boucle sans trou.

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 41 | [ ] Permis B | marquee.php:14 | wp:html | `.marquee-track span` |
| 42 | [ ] Conduite Accompagnee | marquee.php:14 | wp:html | `.marquee-track span` |
| 43 | [ ] Conduite Supervisee | marquee.php:14 | wp:html | `.marquee-track span` |
| 44 | [ ] Permis a 1EUR/jour | marquee.php:14 | wp:html | `.marquee-track span` |
| 45 | [ ] Code en salle & en ligne | marquee.php:14 | wp:html | `.marquee-track span` |
| 46 | [ ] Perfectionnement | marquee.php:14 | wp:html | `.marquee-track span` |
| 47 | [ ] Bourgbarre . Orgeres | marquee.php:14 | wp:html | `.marquee-track span` |

(Memes textes dupliques ligne 15 pour la boucle infinie.)

**Statut : [ ] A DECIDER** — La duplication des spans (x2) est necessaire pour la boucle
CSS infinie. Si on convertit en blocs natifs, il faut trouver un moyen de dupliquer
automatiquement le contenu (ou accepter que la cliente edite les 2 jeux). De plus, la structure
`div.marquee > div.marquee-track > span` ne se mappe pas directement sur des blocs WP natifs
sans wrapper intermediaire.

---

## SECTION 04 — A PROPOS (`patterns/about.php`)

### Blocs deja editables (natifs)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 48 | [x] 01 — Qui sommes-nous | about.php:19 | wp:paragraph | `.eyebrow` |
| 49 | [x] Une equipe humaine, une expertise *de quatre decennies*. | about.php:22 | wp:heading h2 | `.h-italic` |
| 50 | [x] Conduite 2000 forme des conducteurs **depuis plus de 40 ans**... | about.php:33 | wp:paragraph | (bento lead) |
| 51 | [x] Une equipe a taille humaine. | about.php:75 | wp:heading h3 | (bento team) |
| 52 | [x] Vous etes suivi.e du debut a la fin par les memes personnes. | about.php:78 | wp:paragraph | (bento team) |
| 53 | [x] Easy Web | about.php:108 | wp:heading h3 | (bento partner) |
| 54 | [x] Plateforme en ligne simple et flexible... | about.php:111 | wp:paragraph | (bento partner) |

### wp:html bloc A1 — avatars + legende (lignes 35-49)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 55 | [ ] V (avatar initiale) | about.php:39 | wp:html | style inline |
| 56 | [ ] M (avatar initiale) | about.php:41 | wp:html | style inline |
| 57 | [ ] M (avatar initiale) | about.php:42 | wp:html | style inline |
| 58 | [ ] **Valerie & 2 moniteurs** | about.php:45 | wp:html | style inline |
| 59 | [ ] Une equipe restreinte qui vous connait | about.php:46 | wp:html | style inline |

### wp:html bloc A2 — value-rows (lignes 55-68)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 60 | [ ] 01 | about.php:57 | wp:html | `.value-row .num` |
| 61 | [ ] **De A a Z** | about.php:58 | wp:html | `.value-row b` |
| 62 | [ ] De l'inscription au permis definitif : aucune etape oubliee, jamais. | about.php:58 | wp:html | `.value-row p` |
| 63 | [ ] 02 | about.php:61 | wp:html | `.value-row .num` |
| 64 | [ ] **Humain avant tout** | about.php:62 | wp:html | `.value-row b` |
| 65 | [ ] Une equipe restreinte. On vous reconnait, on vous ecoute. | about.php:62 | wp:html | `.value-row p` |
| 66 | [ ] 03 | about.php:65 | wp:html | `.value-row .num` |
| 67 | [ ] **40 ans d'expertise** | about.php:66 | wp:html | `.value-row b` |
| 68 | [ ] Notre maison forme des conducteurs sereins depuis 1984. | about.php:66 | wp:html | `.value-row p` |

### wp:html bloc A3 — team-grid (lignes 80-98)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 69 | [ ] V (avatar) | about.php:83 | wp:html | `.team-card .avatar b` |
| 70 | [ ] Valerie | about.php:84 | wp:html | `.team-card .name` |
| 71 | [ ] gerante | about.php:85 | wp:html | `.team-card .role` |
| 72 | [ ] M (avatar) | about.php:88 | wp:html | `.team-card .avatar b` |
| 73 | [ ] Moniteur 1 | about.php:89 | wp:html | `.team-card .name` |
| 74 | [ ] enseignant | about.php:90 | wp:html | `.team-card .role` |
| 75 | [ ] M (avatar) | about.php:93 | wp:html | `.team-card .avatar b` |
| 76 | [ ] Moniteur 2 | about.php:94 | wp:html | `.team-card .name` |
| 77 | [ ] enseignant | about.php:95 | wp:html | `.team-card .role` |

### wp:html bloc A4 — eyebrow partenaire (lignes 104-106)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 78 | [ ] Partenaire code | about.php:105 | wp:html | `.eyebrow` |

### wp:html bloc A5 — badge Easy Web (lignes 113-118)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 79 | [ ] W (icone lettre) | about.php:115 | wp:html | style inline |
| 80 | [ ] Acces code en ligne **6 mois** inclus dans le forfait | about.php:116 | wp:html | style inline |

### wp:html bloc A6 — bento CTA (lignes 124-130)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 81 | [ ] 04 | about.php:126 | wp:html | `.eyebrow` |
| 82 | [ ] Une question ? Appelez-nous. | about.php:127 | wp:html | `h3` dans `.bento.cta` |
| 83 | [ ] -> (fleche lien tel) | about.php:129 | wp:html | `.arrow` |

---

## SECTION 05 — AGENCES (`patterns/agencies.php`)

### Blocs deja editables (natifs)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 84 | [x] 02 — Nos agences | agencies.php:19 | wp:paragraph | `.eyebrow` |
| 85 | [x] Deux poles, *une meme equipe*. | agencies.php:22 | wp:heading h2 | `.h-italic` |
| 86 | [x] Conduite 2000 vous accueille a Bourgbarre et a Orgeres... | agencies.php:25 | wp:paragraph | |

### wp:html — agencies-grid complet (lignes 30-100)

JS : `.agency` = reveal (animations.js L107), `.agencies-grid` = stagger (animations.js L129).
CSS : `.agency.reveal`, `.pin`, `.city`, `.addr`, `.lbl`, `.hours-list`, `.h-row`, `.day`,
`.slot`, `.slot-closed`, `.agency-phone`

**Agence 1 — Bourgbarre :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 87 | [ ] Agence n. 01 | agencies.php:37 | wp:html | `.city` |
| 88 | [ ] Bourgbarre | agencies.php:38 | wp:html | `h3` |
| 89 | [ ] Adresse | agencies.php:41 | wp:html | `.lbl` |
| 90 | [ ] Centre commercial du Pont du Gue / 35230 Bourgbarre | agencies.php:42 | wp:html | `.addr div` |
| 91 | [ ] Horaires | agencies.php:45 | wp:html | `.lbl` |
| 92 | [ ] Lundi | agencies.php:47 | wp:html | `.day` |
| 93 | [ ] Ferme | agencies.php:47 | wp:html | `.slot-closed` |
| 94 | [ ] Mardi | agencies.php:48 | wp:html | `.day` |
| 95 | [ ] Ferme | agencies.php:48 | wp:html | `.slot-closed` |
| 96 | [ ] Mercredi | agencies.php:49 | wp:html | `.day` |
| 97 | [ ] 18:00 — 19:00 | agencies.php:49 | wp:html | `.slot` |
| 98 | [ ] Jeudi | agencies.php:50 | wp:html | `.day` |
| 99 | [ ] 09:00 — 12:00 | agencies.php:50 | wp:html | `.slot` |
| 100 | [ ] 14:00 — 19:00 | agencies.php:50 | wp:html | `.slot` |
| 101 | [ ] Vendredi | agencies.php:51 | wp:html | `.day` |
| 102 | [ ] 09:00 — 13:00 | agencies.php:51 | wp:html | `.slot` |
| 103 | [ ] 14:00 — 18:00 | agencies.php:51 | wp:html | `.slot` |
| 104 | [ ] Samedi | agencies.php:52 | wp:html | `.day` |
| 105 | [ ] 11:00 — 12:00 | agencies.php:52 | wp:html | `.slot` |
| 106 | [ ] Dimanche | agencies.php:53 | wp:html | `.day` |
| 107 | [ ] Ferme | agencies.php:53 | wp:html | `.slot-closed` |
| 108 | [ ] Appeler l'agence | agencies.php:59 | wp:html | `.agency-phone span` |
| 109 | [ ] 06 19 02 28 32 | agencies.php:60 | wp:html | `.agency-phone b` |

**Agence 2 — Orgeres :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 110 | [ ] Agence n. 02 | agencies.php:70 | wp:html | `.city` |
| 111 | [ ] Orgeres | agencies.php:71 | wp:html | `h3` |
| 112 | [ ] Adresse | agencies.php:74 | wp:html | `.lbl` |
| 113 | [ ] 36, rue de Rennes / 35230 Orgeres | agencies.php:75 | wp:html | `.addr div` |
| 114 | [ ] Horaires | agencies.php:78 | wp:html | `.lbl` |
| 115 | [ ] Lundi | agencies.php:80 | wp:html | `.day` |
| 116 | [ ] Ferme | agencies.php:80 | wp:html | `.slot-closed` |
| 117 | [ ] Mardi | agencies.php:81 | wp:html | `.day` |
| 118 | [ ] 19:00 — 20:00 | agencies.php:81 | wp:html | `.slot` |
| 119 | [ ] Mercredi | agencies.php:82 | wp:html | `.day` |
| 120 | [ ] 19:00 — 20:00 | agencies.php:82 | wp:html | `.slot` |
| 121 | [ ] Jeudi | agencies.php:83 | wp:html | `.day` |
| 122 | [ ] 19:15 — 20:15 | agencies.php:83 | wp:html | `.slot` |
| 123 | [ ] Vendredi | agencies.php:84 | wp:html | `.day` |
| 124 | [ ] Ferme | agencies.php:84 | wp:html | `.slot-closed` |
| 125 | [ ] Samedi | agencies.php:85 | wp:html | `.day` |
| 126 | [ ] 12:00 — 13:00 | agencies.php:85 | wp:html | `.slot` |
| 127 | [ ] Dimanche | agencies.php:86 | wp:html | `.day` |
| 128 | [ ] Ferme | agencies.php:86 | wp:html | `.slot-closed` |
| 129 | [ ] Appeler l'agence | agencies.php:92 | wp:html | `.agency-phone span` |
| 130 | [ ] 06 19 02 28 32 | agencies.php:93 | wp:html | `.agency-phone b` |

**Statut #87-130 : [ ] A DECIDER** — La structure `article.agency.reveal` avec ses
sous-elements (`.pin` SVG, `.city`, `h3`, `.addr`, `.hours-list` avec `.h-row`, `.day`,
`.slot`, `.dot`, `.agency-phone` SVG) est complexe. Le JS cible `.agency` (reveal) et
`.agencies-grid` (stagger). Les classes `.h-row.closed` conditionnent l'affichage CSS.
La structure DOM interne de chaque agence ne se mappe pas facilement sur des blocs natifs WP
sans perdre les classes CSS. Il faudrait des wp:group imbriques avec les bonnes classNames.

---

## SECTION 06 — FORMATIONS (`patterns/formations.php`)

### Blocs deja editables (natifs)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 131 | [x] 03 — Formations disponibles | formations.php:19 | wp:paragraph | `.eyebrow` |
| 132 | [x] La bonne formule, *pour chaque parcours*. | formations.php:22 | wp:heading h2 | `.h-italic` |
| 133 | [x] Cinq formations pour repondre a tous les profils... | formations.php:25 | wp:paragraph | |

### wp:html — formations-grid complet (lignes 30-110)

JS : `.formation` = reveal (animations.js L104), `.formations-grid` = stagger (L127).
JS : `[data-modal]` sur chaque article = ouverture modale (script.js L270).

**Formation 1 — AAC (f-1, data-modal="aac") :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 134 | [ ] AAC | formations.php:34 | wp:html | `.f-icon` |
| 135 | [ ] F.01 / Formation phare | formations.php:35 | wp:html | `.num` |
| 136 | [ ] Conduite accompagnee (AAC) | formations.php:36 | wp:html | `h3` |
| 137 | [ ] Des 17 ans. La voie que nous preconisons... | formations.php:37 | wp:html | `.summary` |
| 138 | [ ] 17 ans . 15 ans pour l'examen theorique | formations.php:39 | wp:html | `li` |
| 139 | [ ] ~ 25h de conduite encadree | formations.php:40 | wp:html | `li` |
| 140 | [ ] 3000 km . 2 rendez-vous pedagogiques | formations.php:41 | wp:html | `li` |
| 141 | [ ] Avenant assurance obligatoire | formations.php:42 | wp:html | `li` |
| 142 | [ ] 15-18 mois | formations.php:45 | wp:html | `.meta span` |
| 143 | [ ] Details & PDF -> | formations.php:46 | wp:html | `.read-more` |

**Formation 2 — Permis B (f-2, data-modal="permisB") :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 144 | [ ] B | formations.php:51 | wp:html | `.f-icon` |
| 145 | [ ] F.02 | formations.php:52 | wp:html | `.num` |
| 146 | [ ] Permis traditionnel | formations.php:53 | wp:html | `h3` |
| 147 | [ ] Permis B classique. Vehicules <= 3 500 kg... | formations.php:54 | wp:html | `.summary` |
| 148 | [ ] 18 ans . 17 ans pour le code | formations.php:56 | wp:html | `li` |
| 149 | [ ] Code : 35/40 minimum | formations.php:57 | wp:html | `li` |
| 150 | [ ] Epreuve pratique : 32 minutes | formations.php:58 | wp:html | `li` |
| 151 | [ ] 6-9 mois | formations.php:61 | wp:html | `.meta span` |
| 152 | [ ] Details & PDF -> | formations.php:62 | wp:html | `.read-more` |

**Formation 3 — 1EUR/jour (f-3, data-modal="permis1euro") :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 153 | [ ] EUR | formations.php:67 | wp:html | `.f-icon` |
| 154 | [ ] F.03 . Aide d'Etat | formations.php:68 | wp:html | `.num` |
| 155 | [ ] Permis a 1EUR par jour | formations.php:69 | wp:html | `h3` |
| 156 | [ ] Un pret a taux zero pour les 15-25 ans... | formations.php:70 | wp:html | `.summary` |
| 157 | [ ] 15 a 25 ans revolus | formations.php:72 | wp:html | `li` |
| 158 | [ ] Permis B ou A (> 125 cm3) | formations.php:73 | wp:html | `li` |
| 159 | [ ] Caution parentale ou co-emprunt | formations.php:74 | wp:html | `li` |
| 160 | [ ] Etale sur 3 a 5 ans | formations.php:77 | wp:html | `.meta span` |
| 161 | [ ] Details & PDF -> | formations.php:78 | wp:html | `.read-more` |

**Formation 4 — Supervisee (f-4, data-modal="supervisee") :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 162 | [ ] CS | formations.php:83 | wp:html | `.f-icon` |
| 163 | [ ] F.04 | formations.php:84 | wp:html | `.num` |
| 164 | [ ] Conduite supervisee | formations.php:85 | wp:html | `h3` |
| 165 | [ ] L'alternative a l'AAC pour les majeurs... | formations.php:86 | wp:html | `.summary` |
| 166 | [ ] Pour les 18 ans et plus | formations.php:88 | wp:html | `li` |
| 167 | [ ] ~ 30h de conduite | formations.php:89 | wp:html | `li` |
| 168 | [ ] RDV prealable recommande | formations.php:90 | wp:html | `li` |
| 169 | [ ] Sur mesure | formations.php:93 | wp:html | `.meta span` |
| 170 | [ ] Details & PDF -> | formations.php:94 | wp:html | `.read-more` |

**Formation 5 — Perfectionnement (f-5, data-modal="perfectionnement") :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 171 | [ ] P+ | formations.php:99 | wp:html | `.f-icon` |
| 172 | [ ] F.05 | formations.php:100 | wp:html | `.num` |
| 173 | [ ] Perfectionnement | formations.php:101 | wp:html | `h3` |
| 174 | [ ] Bilan post-permis pour novices, reactualisation pour aguerris... | formations.php:102 | wp:html | `.summary` |
| 175 | [ ] Volontaire | formations.php:104 | wp:html | `.meta span` |
| 176 | [ ] Details -> | formations.php:105 | wp:html | `.read-more` |

**Statut #134-176 : [ ] A DECIDER** — Chaque `article.formation` porte un `data-modal`
cible par le JS (script.js L270) et la classe `.formation` ciblee par le reveal+stagger.
La structure interne (`.f-icon`, `.num`, `h3`, `.summary`, `ul`, `.meta`, `.read-more`)
est complexe. La conversion en blocs natifs est possible si on reproduit l'`article` comme
un `wp:group` avec `tagName: article` et les bonnes classes, mais le `data-modal` n'est
pas un attribut standard des blocs WP — il faudrait le passer via un attribut HTML anchor
ou un autre mecanisme.

---

## SECTION 07 — PERMIS 1EUR (`patterns/permis-1euro.php`)

Tout le contenu texte est dans un seul bloc `wp:html` (lignes 16-51).
JS : `.perm1` = reveal scale (animations.js L112), `[data-modal="permis1euro"]` = modale (script.js L270).

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 177 | [ ] Aide financiere de l'Etat | permis-1euro.php:20 | wp:html | `.eyebrow` |
| 178 | [ ] 1EUR | permis-1euro.php:22 | wp:html | `.num` dans `h2` |
| 179 | [ ] par jour, pour decrocher votre permis. | permis-1euro.php:23 | wp:html | `h2` |
| 180 | [ ] Un pret a taux zero mis en place par l'Etat pour les 15-25 ans... | permis-1euro.php:26-28 | wp:html | `p` |
| 181 | [ ] **30EUR par mois** | permis-1euro.php:28 | wp:html | `b` dans `p` |
| 182 | [ ] Comment en beneficier ? | permis-1euro.php:32 | wp:html | `.btn.btn-primary` `[data-modal]` **JS** |
| 183 | [ ] Nous contacter | permis-1euro.php:35 | wp:html | `.btn.btn-ghost` |
| 184 | [ ] 30 **EUR** | permis-1euro.php:39 | wp:html | `.fact b`, `.unit` |
| 185 | [ ] de remboursement / mois | permis-1euro.php:39 | wp:html | `.fact span` |
| 186 | [ ] 15-25 **ans** | permis-1euro.php:40 | wp:html | `.fact b`, `.unit` |
| 187 | [ ] tranche d'age eligible | permis-1euro.php:40 | wp:html | `.fact span` |
| 188 | [ ] Categorie B (vehicules legers) ou A (> 125 cm3) | permis-1euro.php:43 | wp:html | `.fact.full li` |
| 189 | [ ] Caution parentale, co-emprunt ou caution publique possibles | permis-1euro.php:44 | wp:html | `.fact.full li` |
| 190 | [ ] Premiere inscription en ecole de conduite partenaire | permis-1euro.php:45 | wp:html | `.fact.full li` |

---

## SECTION 08 — TARIFS (`patterns/tarifs.php`)

### Blocs deja editables (natifs)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 191 | [x] 04 — Tarifs | tarifs.php:19 | wp:paragraph | `.eyebrow` |
| 192 | [x] Des tarifs clairs, *sans surprise*. | tarifs.php:22 | wp:heading h2 | `.h-italic` |
| 193 | [x] Voici nos quatre formules principales... | tarifs.php:25 | wp:paragraph | |

### wp:html bloc T1 — tarifs-grid (lignes 30-121)

JS : `.tarif` = reveal (animations.js L105), `.tarifs-grid` = stagger (L128).
JS : `.tarif .price b` = **count-up** (animations.js L82) — CRITIQUE.

**Tarif 1 — AAC avec code :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 194 | [ ] Conduite accompagnee | tarifs.php:36 | wp:html | `.tarif h3` |
| 195 | [ ] avec code . forfait complet | tarifs.php:37 | wp:html | `.sub` |
| 196 | [ ] Recommande | tarifs.php:39 | wp:html | `.badge.red` |
| 197 | [ ] EUR 1 784 | tarifs.php:42 | wp:html | `.price b` **JS count-up** |
| 198 | [ ] a partir de 568EUR sans frais | tarifs.php:43 | wp:html | `.note` |
| 199 | [ ] Frais de gestion / 50EUR | tarifs.php:46 | wp:html | `li span` |
| 200 | [ ] 20h de conduite / 1 040EUR | tarifs.php:47 | wp:html | `li span` |
| 201 | [ ] 2 RDV prealables (2x1h) / 104EUR | tarifs.php:48 | wp:html | `li span` |
| 202 | [ ] 2 RDV pedagogiques (2x1h) / 176EUR | tarifs.php:49 | wp:html | `li span` |
| 203 | [ ] Accompagnement examen / 52EUR | tarifs.php:50 | wp:html | `li span` |
| 204 | [ ] Evaluation (1h) / 52EUR | tarifs.php:51 | wp:html | `li span` |
| 205 | [ ] Forfait code / 310EUR | tarifs.php:52 | wp:html | `li span` |

**Tarif 2 — AAC sans code :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 206 | [ ] Conduite accompagnee | tarifs.php:59 | wp:html | `.tarif h3` |
| 207 | [ ] sans code . vous avez deja le code | tarifs.php:60 | wp:html | `.sub` |
| 208 | [ ] AAC | tarifs.php:62 | wp:html | `.badge` |
| 209 | [ ] EUR 1 548 | tarifs.php:65 | wp:html | `.price b` **JS count-up** |
| 210 | [ ] a partir de 471EUR sans frais | tarifs.php:66 | wp:html | `.note` |
| 211 | [ ] Frais de gestion / 100EUR | tarifs.php:69 | wp:html | `li span` |
| 212 | [ ] 20h de conduite / 1 060EUR | tarifs.php:70 | wp:html | `li span` |
| 213 | [ ] 2 RDV prealables (2x1h) / 106EUR | tarifs.php:71 | wp:html | `li span` |
| 214 | [ ] 2 RDV pedagogiques (2x1h) / 176EUR | tarifs.php:72 | wp:html | `li span` |
| 215 | [ ] Accompagnement examen / 53EUR | tarifs.php:73 | wp:html | `li span` |
| 216 | [ ] Evaluation (1h) / 53EUR | tarifs.php:74 | wp:html | `li span` |

**Tarif 3 — Traditionnelle avec code (featured) :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 217 | [ ] Conduite traditionnelle | tarifs.php:81 | wp:html | `.tarif.featured h3` |
| 218 | [ ] avec code . forfait complet | tarifs.php:82 | wp:html | `.sub` |
| 219 | [ ] B | tarifs.php:84 | wp:html | `.badge` |
| 220 | [ ] EUR 1 504 | tarifs.php:87 | wp:html | `.price b` **JS count-up** |
| 221 | [ ] a partir de 416EUR sans frais | tarifs.php:88 | wp:html | `.note` |
| 222 | [ ] Frais de gestion / 50EUR | tarifs.php:91 | wp:html | `li span` |
| 223 | [ ] 20h de conduite / 1 040EUR | tarifs.php:92 | wp:html | `li span` |
| 224 | [ ] Accompagnement examen / 52EUR | tarifs.php:93 | wp:html | `li span` |
| 225 | [ ] Evaluation (1h) / 52EUR | tarifs.php:94 | wp:html | `li span` |
| 226 | [ ] Forfait code / 310EUR | tarifs.php:95 | wp:html | `li span` |

**Tarif 4 — Code seul :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 227 | [ ] Forfait code seul | tarifs.php:102 | wp:html | `.tarif h3` |
| 228 | [ ] code en salle + en ligne 6 mois | tarifs.php:103 | wp:html | `.sub` |
| 229 | [ ] Code | tarifs.php:105 | wp:html | `.badge` |
| 230 | [ ] EUR 310 | tarifs.php:108 | wp:html | `.price b` **JS count-up** |
| 231 | [ ] tout compris | tarifs.php:109 | wp:html | `.note` |
| 232 | [ ] Frais de gestion (ANTS, Rapido) / 50EUR | tarifs.php:112 | wp:html | `li span` |
| 233 | [ ] Forfait code en salle / 150EUR | tarifs.php:113 | wp:html | `li span` |
| 234 | [ ] Kit pedagogique / 70EUR | tarifs.php:114 | wp:html | `li span` |
| 235 | [ ] Code en ligne 6 mois / 40EUR | tarifs.php:115 | wp:html | `li span` |
| 236 | [ ] Evaluation 52EUR et heure de conduite supp. 52EUR non incluses... | tarifs.php:117 | wp:html | `.note-foot` |

### wp:html bloc T2 — tarifs-foot (lignes 123-134)

JS : `.tarifs-foot` = reveal (animations.js L114), `[data-modal="tarifs"]` = modale (script.js L270).

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 237 | [ ] **Conduite traditionnelle sans code** | tarifs.php:126 | wp:html | `.tarifs-foot b` |
| 238 | [ ] 1 266EUR . a partir de 318EUR sans frais | tarifs.php:127 | wp:html | `.tarifs-foot span` |
| 239 | [ ] Grille tarifaire complete (PDF) | tarifs.php:130 | wp:html | `.btn.btn-dark` `[data-modal]` **JS** |

---

## SECTION 09 — DOCS & LABEL (`patterns/docs-label.php`)

### Blocs deja editables (natifs)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 240 | [x] 05 — Inscription & labellisation | docs-label.php:19 | wp:paragraph | `.eyebrow` |
| 241 | [x] Preparez votre dossier *en quelques minutes*. | docs-label.php:22 | wp:heading h2 | `.h-italic` |
| 242 | [x] Auto-ecole labellisee Qualite. | docs-label.php:64 | wp:heading h3 | |
| 243 | [x] Notre engagement dans une demarche qualite reconnue par l'Etat... | docs-label.php:67 | wp:paragraph | |

### wp:html bloc D1 — docs (lignes 30-56)

JS : `.docs` = reveal slide-left (animations.js L108), `[data-modal="docs"]` = modale (script.js L270).

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 244 | [ ] Documents a fournir | docs-label.php:32 | wp:html | `.docs h3` |
| 245 | [ ] Liste pour mineur — la liste majeure est identique sans les pieces parentales. | docs-label.php:33 | wp:html | `.docs p` |
| 246 | [ ] Carte d'identite eleve (recto-verso) | docs-label.php:35 | wp:html | `.docs li` |
| 247 | [ ] Attestation de recensement ou JDC | docs-label.php:36 | wp:html | `.docs li` |
| 248 | [ ] Carte d'identite d'un parent (recto-verso) | docs-label.php:37 | wp:html | `.docs li` |
| 249 | [ ] 4 photos numerisees agreees ANTS | docs-label.php:38 | wp:html | `.docs li` |
| 250 | [ ] Attestation d'hebergement (a telecharger) | docs-label.php:39 | wp:html | `.docs li` |
| 251 | [ ] Mandat ANTS (a telecharger) | docs-label.php:40 | wp:html | `.docs li` |
| 252 | [ ] Justificatif de domicile (< 6 mois) | docs-label.php:41 | wp:html | `.docs li` |
| 253 | [ ] Photocopie ASSR2 et BSR si obtention | docs-label.php:42 | wp:html | `.docs li` |
| 254 | [ ] Avenant a l'assurance (pour AAC) | docs-label.php:43 | wp:html | `.docs li` |
| 255 | [ ] Attestation d'hebergement (PDF) | docs-label.php:47 | wp:html | `.btn.btn-primary` `[data-modal]` **JS** |
| 256 | [ ] Mandat ANTS (PDF) | docs-label.php:51 | wp:html | `.btn.btn-ghost` `[data-modal]` **JS** |

### wp:html bloc D2 — stamp (lignes 60-62)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 257 | [ ] QE | docs-label.php:61 | wp:html | `.stamp` |

### wp:html bloc D3 — label-tags (lignes 69-76)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 258 | [ ] Permis a 1EUR partenaire | docs-label.php:71 | wp:html | `.label-tags span` |
| 259 | [ ] Transparence tarifaire | docs-label.php:72 | wp:html | `.label-tags span` |
| 260 | [ ] Suivi pedagogique | docs-label.php:73 | wp:html | `.label-tags span` |
| 261 | [ ] Formation continue moniteurs | docs-label.php:74 | wp:html | `.label-tags span` |

---

## SECTION 10 — CONTACT (`patterns/contact.php`)

### Blocs deja editables (natifs)

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 262 | [x] 06 — Contact | contact.php:19 | wp:paragraph | `.eyebrow` |
| 263 | [x] Une question ? *Ecrivons-nous*. | contact.php:22 | wp:heading h2 | `.h-italic` |

### wp:html — contact-grid complet (lignes 27-110)

JS : `#contactForm` = submit handler (script.js L284-303), nonce injection (functions.php L56-72).
JS : `.contact-form` = reveal slide-left (animations.js L110).
JS : `.contact-side > *` = reveal slide-right stagger (animations.js L111, L131).
JS : `button[type="submit"]` = innerHTML remplacement pendant submit (script.js L289-299).

**Formulaire :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 264 | [ ] Demander un devis | contact.php:33 | wp:html | `#contactForm h3` |
| 265 | [ ] Reponse sous 24h ouvrees. Tous les champs marques d'un * sont obligatoires. | contact.php:34 | wp:html | `.sub` |
| 266 | [ ] Prenom * | contact.php:36 | wp:html | `label` |
| 267 | [ ] Nom * | contact.php:37 | wp:html | `label` |
| 268 | [ ] Email * | contact.php:38 | wp:html | `label` |
| 269 | [ ] Telephone | contact.php:39 | wp:html | `label` |
| 270 | [ ] Formation qui vous interesse | contact.php:41 | wp:html | `label` |
| 271 | [ ] Permis traditionnel B | contact.php:43 | wp:html | `option` |
| 272 | [ ] Conduite accompagnee (AAC) | contact.php:44 | wp:html | `option` |
| 273 | [ ] Conduite supervisee | contact.php:45 | wp:html | `option` |
| 274 | [ ] Permis a 1EUR par jour | contact.php:46 | wp:html | `option` |
| 275 | [ ] Forfait code seul | contact.php:47 | wp:html | `option` |
| 276 | [ ] Perfectionnement | contact.php:48 | wp:html | `option` |
| 277 | [ ] Je ne sais pas encore | contact.php:49 | wp:html | `option` |
| 278 | [ ] Agence preferee | contact.php:53 | wp:html | `label` |
| 279 | [ ] Bourgbarre | contact.php:55 | wp:html | `option` |
| 280 | [ ] Orgeres | contact.php:56 | wp:html | `option` |
| 281 | [ ] Indifferent | contact.php:57 | wp:html | `option` |
| 282 | [ ] Votre message * | contact.php:61 | wp:html | `label` |
| 283 | [ ] Parlez-nous de votre projet, vos disponibilites... (placeholder) | contact.php:62 | wp:html | `textarea[placeholder]` |
| 284 | [ ] En envoyant ce formulaire, vous acceptez que vos donnees soient utilisees... | contact.php:66 | wp:html | `small` |
| 285 | [ ] Envoyer le message | contact.php:68 | wp:html | `button[type=submit]` **JS innerHTML** |

**Sidebar :**

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 286 | [ ] Le plus rapide | contact.php:76 | wp:html | `.ey` |
| 287 | [ ] Appelez-nous au | contact.php:77 | wp:html | `.big` |
| 288 | [ ] 06 19 02 28 32 | contact.php:77 | wp:html | `.big span` |
| 289 | [ ] Un standard unique pour nos deux agences. Valerie ou un moniteur vous repond directement. | contact.php:79 | wp:html | `p` |
| 290 | [ ] Actualite | contact.php:82 | wp:html | `.actu small` |
| 291 | [ ] **Inscriptions ouvertes** pour la rentree. Permis a 1EUR disponible toute l'annee... | contact.php:83 | wp:html | `.actu p` |
| 292 | [ ] @conduite.2000 | contact.php:91 | wp:html | `.contact-mini b` |
| 293 | [ ] Suivez-nous sur Instagram | contact.php:91 | wp:html | `.contact-mini span` |
| 294 | [ ] Suivez-nous sur Facebook | contact.php:98 | wp:html | `.contact-mini b` |
| 295 | [ ] Actualites, photos d'eleves, conseils | contact.php:98 | wp:html | `.contact-mini span` |
| 296 | [ ] contact@conduite2000.fr | contact.php:105 | wp:html | `.contact-mini b` |
| 297 | [ ] Reponse sous 24h ouvrees | contact.php:105 | wp:html | `.contact-mini span` |

**Statut formulaire #264-285 : [ ] A DECIDER** — Le `<form id="contactForm">` est cible par
le JS (script.js L284 submit handler, functions.php L56-72 nonce injection). Les labels,
options de select, et le bouton submit (dont le innerHTML est remplace par le JS pendant
l'envoi) ne peuvent pas etre des blocs natifs WP car ils sont a l'interieur d'un `<form>`.
Les blocs natifs WP ne produisent pas de `<form>`, `<input>`, `<select>`, `<textarea>`.

---

## SECTION 11 — MODALE (`templates/front-page.html`)

### wp:html — shell de la modale (lignes 24-39)

JS : `#modalOverlay`, `#modalEye`, `#modalTitle`, `#modalBody` (script.js L249-252).
Le contenu visible est injecte dynamiquement par le JS (objet MODAL_CONTENT dans script.js).

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 298 | [ ] Formation (placeholder #modalEye) | front-page.html:29 | wp:html | `#modalEye` **JS** |
| 299 | [ ] Titre (placeholder #modalTitle) | front-page.html:30 | wp:html | `#modalTitle` **JS** |
| 300 | [ ] `aria-label="Fermer"` | front-page.html:32 | wp:html | `.modal-close` **JS** |

**Statut #298-300 : [ ] A DECIDER** — Ce bloc est un shell vide dont le contenu est injecte
par JS. Les placeholders "Formation" et "Titre" sont immediatement remplaces par le JS
a l'ouverture. Ce bloc DOIT rester en wp:html car les IDs sont critiques pour le JS.

---

## SECTION 12 — CONTENU DES MODALES (dans `assets/script.js`)

Ces textes sont dans l'objet JS `MODAL_CONTENT` et ne sont PAS dans des fichiers HTML/PHP.
Ils sont injectes via `modalBody.innerHTML` par le JS.

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 301 | [ ] "Formation . F.01" (eye AAC) | script.js:8 | JS | `MODAL_CONTENT.aac.eye` |
| 302 | [ ] "Conduite accompagnee (AAC)" (titre AAC) | script.js:9 | JS | `MODAL_CONTENT.aac.title` |
| 303 | [ ] Corps HTML modal AAC (~30 lignes) | script.js:10-41 | JS | `MODAL_CONTENT.aac.body` |
| 304 | [ ] "Formation . F.02" (eye Permis B) | script.js:44 | JS | `MODAL_CONTENT.permisB.eye` |
| 305 | [ ] "Permis traditionnel (B)" (titre) | script.js:45 | JS | `MODAL_CONTENT.permisB.title` |
| 306 | [ ] Corps HTML modal Permis B (~34 lignes) | script.js:46-79 | JS | `MODAL_CONTENT.permisB.body` |
| 307 | [ ] "Aide d'Etat . F.03" (eye 1EUR) | script.js:82 | JS | `MODAL_CONTENT.permis1euro.eye` |
| 308 | [ ] "Permis a 1EUR par jour" (titre) | script.js:83 | JS | `MODAL_CONTENT.permis1euro.title` |
| 309 | [ ] Corps HTML modal 1EUR (~36 lignes) | script.js:84-120 | JS | `MODAL_CONTENT.permis1euro.body` |
| 310 | [ ] "Formation . F.04" (eye Supervisee) | script.js:123 | JS | `MODAL_CONTENT.supervisee.eye` |
| 311 | [ ] "Conduite supervisee" (titre) | script.js:124 | JS | `MODAL_CONTENT.supervisee.title` |
| 312 | [ ] Corps HTML modal Supervisee (~23 lignes) | script.js:125-148 | JS | `MODAL_CONTENT.supervisee.body` |
| 313 | [ ] "Formation . F.05" (eye Perf.) | script.js:151 | JS | `MODAL_CONTENT.perfectionnement.eye` |
| 314 | [ ] "Perfectionnement a la conduite" (titre) | script.js:152 | JS | `MODAL_CONTENT.perfectionnement.title` |
| 315 | [ ] Corps HTML modal Perfectionnement (~24 lignes) | script.js:153-177 | JS | `MODAL_CONTENT.perfectionnement.body` |
| 316 | [ ] "Tarifs complets" (eye Tarifs) | script.js:180 | JS | `MODAL_CONTENT.tarifs.eye` |
| 317 | [ ] "Grille tarifaire detaillee" (titre) | script.js:181 | JS | `MODAL_CONTENT.tarifs.title` |
| 318 | [ ] Corps HTML modal Tarifs (~30 lignes) | script.js:182-212 | JS | `MODAL_CONTENT.tarifs.body` |
| 319 | [ ] "Documents a telecharger" (eye Docs) | script.js:215 | JS | `MODAL_CONTENT.docs.eye` |
| 320 | [ ] "Documents pour l'inscription" (titre) | script.js:216 | JS | `MODAL_CONTENT.docs.title` |
| 321 | [ ] Corps HTML modal Docs (~27 lignes) | script.js:217-244 | JS | `MODAL_CONTENT.docs.body` |

**Statut #301-321 : [ ] A DECIDER** — Ces textes vivent dans le JS, pas dans le HTML.
Pour les rendre editables via l'editeur WP, il faudrait une approche differente :
- Option A : Champs ACF (Advanced Custom Fields) lus par le JS via wp_localize_script
- Option B : Blocs natifs caches dans le HTML, lus par le JS au chargement
- Option C : Custom block WP avec InnerBlocks pour chaque modal
Aucune de ces options ne releve d'une simple conversion wp:html -> bloc natif.

---

## SECTION 13 — FOOTER (`parts/footer.html`)

Tout le fichier est un seul bloc `wp:html` (lignes 1-62).
JS : `.footer-grid > *` = reveal stagger (animations.js L115, L132).

| # | Texte | Fichier:Ligne | Bloc | CSS/JS |
|---|---|---|---|---|
| 322 | [ ] `alt="Conduite 2000"` (img) | footer.html:7 | wp:html | `.footer-brand img` |
| 323 | [ ] **Conduite 2000** | footer.html:9 | wp:html | `.footer-brand b` |
| 324 | [ ] Auto-ecole depuis 1984 | footer.html:10 | wp:html | `.footer-brand div` |
| 325 | [ ] Une equipe humaine au service de votre permis, sur deux agences en Ille-et-Vilaine. | footer.html:13 | wp:html | `.footer-brand p` |
| 326 | [ ] `aria-label="Facebook"` | footer.html:15 | wp:html | `.footer-socials a` |
| 327 | [ ] `aria-label="Instagram"` | footer.html:18 | wp:html | `.footer-socials a` |
| 328 | [ ] `aria-label="Telephone"` | footer.html:21 | wp:html | `.footer-socials a` |
| 329 | [ ] `aria-label="Email"` | footer.html:24 | wp:html | `.footer-socials a` |
| 330 | [ ] Navigation | footer.html:30 | wp:html | `h4` |
| 331 | [ ] A propos | footer.html:32 | wp:html | `li a` |
| 332 | [ ] Nos agences | footer.html:33 | wp:html | `li a` |
| 333 | [ ] Formations | footer.html:34 | wp:html | `li a` |
| 334 | [ ] Tarifs | footer.html:35 | wp:html | `li a` |
| 335 | [ ] Contact | footer.html:36 | wp:html | `li a` |
| 336 | [ ] Bourgbarre | footer.html:40 | wp:html | `h4` |
| 337 | [ ] Centre commercial du Pont du Gue | footer.html:42 | wp:html | `li` |
| 338 | [ ] 35230 Bourgbarre | footer.html:43 | wp:html | `li` |
| 339 | [ ] 06 19 02 28 32 | footer.html:44 | wp:html | `li a` |
| 340 | [ ] Orgeres | footer.html:48 | wp:html | `h4` |
| 341 | [ ] 36, rue de Rennes | footer.html:50 | wp:html | `li` |
| 342 | [ ] 35230 Orgeres | footer.html:51 | wp:html | `li` |
| 343 | [ ] 06 19 02 28 32 | footer.html:52 | wp:html | `li a` |
| 344 | [ ] (c) 2025 Conduite 2000 — Tous droits reserves | footer.html:57 | wp:html | `.footer-bottom span` |
| 345 | [ ] Permis a 1EUR par jour . Auto-ecole labellisee | footer.html:58 | wp:html | `.footer-bottom span` |

---

## IMAGES A CHEMIN CODE EN DUR

| # | Image | Fichier:Ligne | Chemin |
|---|---|---|---|
| I1 | Logo header | header.html:5 | `/wp-content/themes/conduite2000-fse/assets/logo.png` |
| I2 | Logo footer | footer.html:7 | `/wp-content/themes/conduite2000-fse/assets/logo.png` |
| I3 | team-valerie.jpeg | (non utilise) | `assets/team-valerie.jpeg` — present mais non reference |

---

## COMPTE TOTAL

| Categorie | Nombre |
|---|---|
| Chaines de texte dans **wp:html** (HTML/PHP) | 300 |
| Chaines de texte dans **JS** (MODAL_CONTENT) | 21 |
| Chaines de texte **deja editables** (blocs natifs) | 24 |
| **TOTAL chaines de texte detectees** | **345** |
| dont images a chemin code en dur | 2 (+1 non utilisee) |

### Repartition par statut

| Statut | Nombre | Detail |
|---|---|---|
| [x] Deja editables | 24 | h1, h2, h3, paragraphes natifs |
| [ ] A convertir (conversion possible) | ~150 | hero-tag, hero-stats, about values/team, docs, label-tags, footer colonnes... |
| [?] A DECIDER | ~171 | Header, marquee, hero-visual, formations (data-modal), agences, tarifs (count-up JS), contact (form), modale shell, contenu modales JS |

### Resume des cas A DECIDER

| Zone | Raison du blocage |
|---|---|
| **Header** (#1-21) | Structure `<header>/<nav>` + IDs JS (`#navBurger`, `#navMobileMenu`) — les blocs natifs WP produisent un markup different |
| **Hero-visual** (#35-40) | Texte dans `div.hero-visual` cible par JS parallax — separation impossible sans casser le parallax |
| **Marquee** (#41-47) | Duplication x2 pour boucle infinie CSS + structure `div > div > span` non reproductible en blocs natifs |
| **Formations grid** (#134-176) | `data-modal` sur chaque `<article>` cible par JS — pas d'attribut equivalent en blocs natifs WP |
| **Agences grid** (#87-130) | Structure complexe `.agency > .addr > .hours-list > .h-row` avec classes conditionnelles `.closed` |
| **Tarifs grid** (#194-236) | `.tarif .price b` cible par JS count-up — structure doit rester identique |
| **Tarifs foot** (#237-239) | `data-modal` sur bouton |
| **Permis 1EUR** (#177-190) | `data-modal` sur bouton + structure `.perm1 > .perm1-grid > .facts` |
| **Formulaire contact** (#264-285) | `<form>`, `<input>`, `<select>`, `<textarea>` — pas de blocs natifs equivalents |
| **Sidebar contact** (#286-297) | Enfants de `.contact-side` cibles par JS stagger |
| **Modale shell** (#298-300) | IDs `#modalOverlay/Eye/Title/Body` critiques pour le JS |
| **Contenu modales JS** (#301-321) | Textes dans script.js, pas dans le HTML — necessite ACF ou custom block |
| **Footer** (#322-345) | Structure `footer > .footer-grid > div` avec stagger JS + `.footer-bottom` |
