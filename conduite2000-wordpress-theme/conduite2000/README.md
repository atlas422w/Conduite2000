# Thème WordPress — Conduite 2000

Design identique au site original, avec tout le contenu éditable via **ACF Free**.

---

## 📦 Installation — étape par étape

### 1. Héberger WordPress

Si tu n'as pas encore d'hébergement :
- **Test local (gratuit)** : installe [LocalWP](https://localwp.com) → crée un site → ouvre le dossier `app/public`
- **En ligne** : o2switch (~7€/mois), OVH, Infomaniak — ils ont tous un installateur WordPress en 1 clic

### 2. Installer le plugin ACF

1. Dans WordPress → **Extensions > Ajouter**
2. Rechercher **"Advanced Custom Fields"**
3. Installer et **Activer**  
   *(Gratuit, 2 millions d'installations)*

### 3. Installer le thème

**Option A — ZIP (recommandé) :**
1. Zippe le dossier `conduite2000/` → `conduite2000.zip`
2. WordPress → **Apparence > Thèmes > Ajouter > Téléverser**
3. Upload `conduite2000.zip` → Activer

**Option B — FTP/LocalWP :**
1. Copie le dossier `conduite2000/` dans `/wp-content/themes/`
2. WordPress → **Apparence > Thèmes** → Active "Conduite 2000"

### 4. Configurer la page d'accueil

1. WordPress → **Pages > Ajouter** → titre : "Accueil" → Publier
2. WordPress → **Réglages > Lecture**
3. Coche **"Une page statique"** → Sélectionner "Accueil"
4. Enregistrer

### 5. Modifier le contenu

Va sur **Pages > Accueil > Modifier**.  
Descend en bas de la page d'édition : tu trouveras **8 blocs ACF** :

| Bloc | Ce que tu peux modifier |
|------|------------------------|
| ⚙️ Paramètres généraux | Téléphone, email, liens Instagram/Facebook |
| 🦸 Section Hero | Mot accentué, texte d'accroche, statistiques |
| 👥 À propos | Texte introductif, équipe (noms, photos, rôles) |
| 📍 Agences | Adresses, horaires jour par jour |
| 📚 Formations | Tout le contenu de chaque formation |
| 💶 Tarifs | Tous les prix et lignes de tarifs |
| ✉️ Contact | Bloc "Actualité" |

---

## 📧 Formulaire de contact

Les demandes de devis arrivent par **email** sur l'adresse configurée dans "Paramètres généraux" (ou l'email admin si vide).

Pour un formulaire plus avancé (anti-spam, notifications améliorées), installe le plugin **WPForms Lite** (gratuit).

---

## 🖼️ Images de l'équipe

Les photos sont actuellement dans `/Images/`. Pour les remplacer :
1. WordPress → **Médias > Ajouter** → Upload la photo
2. Dans ACF → Bloc "À propos" → Membres de l'équipe → choisis la photo depuis la médiathèque

---

## 🌐 Images des agences sur une carte

Pour ajouter une carte Google Maps sur les agences, installe le plugin **WP Google Maps** (gratuit) et utilise le shortcode dans les horaires ACF.

---

## 📂 Structure des fichiers

```
conduite2000/
├── style.css          ← En-tête du thème WordPress
├── functions.php      ← Setup + enqueue + ACF champs
├── front-page.php     ← Template principal (page d'accueil)
├── index.php          ← Fallback WordPress requis
├── assets/
│   ├── styles.css     ← Styles originaux
│   ├── animations.css ← Animations originales
│   ├── script.js      ← JS original (modals, nav)
│   ├── animations.js  ← JS animations
│   └── logo.png       ← Logo
└── Images/            ← Photo de Valérie
```
