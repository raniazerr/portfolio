# Portfolio V2 - Rania Zeramdini

## 🎨 Version Améliorée - Modernisée

Cette version du portfolio a été complètement repensée avec un design moderne, des animations fluides et une meilleure expérience utilisateur.

---

## ✨ Nouvelles Fonctionnalités

### 🎯 Design & UX
- **Design moderne** avec glassmorphism et gradients
- **Animations fluides** au scroll avec Intersection Observer
- **Navigation sticky** avec effet de transparence
- **Badge "Disponible pour stage"** bien visible avec animation pulse
- **Floating cards** animées dans le hero
- **Curseur personnalisé** (desktop uniquement)
- **Indicateur de scroll** animé
- **Transitions et hover effects** sur tous les éléments interactifs

### 📱 Responsive
- **Mobile-first design** optimisé pour tous les écrans
- **Menu hamburger** animé pour mobile
- **Grids adaptatifs** qui s'ajustent automatiquement
- **Typography responsive** avec clamp()

### 🎨 Sections Améliorées

#### Hero Section
- Badge de disponibilité avec animation
- Présentation claire du profil
- Call-to-action évidents (Contact + CV)
- Liens sociaux bien visibles
- Floating cards avec parallax

#### À Propos
- Biographie professionnelle structurée
- Carte d'informations avec icônes
- Highlights des qualités (Autonome, Perfectionniste, Curieuse)
- Langues avec barres de progression visuelles

#### Formation & Expérience
- Timeline verticale moderne avec icônes
- Distinction visuelle formation/expérience
- Tags de technologies/compétences
- Effet hover avec translation

#### Projets
- Cards avec hover effects
- Overlay GitHub au survol
- Tags de technologies colorés
- Rôle dans chaque projet
- Placeholder avec icônes Font Awesome

#### Compétences
- Organisation par catégories
- Barres de progression animées (langages)
- Badges interactifs (frameworks, outils)
- Icônes pour chaque technologie
- Animation au scroll

#### Contact
- Formulaire stylisé avec glassmorphism
- Informations de contact claires
- Liens sociaux
- Messages de succès/erreur
- Animation d'envoi

---

## 🚀 Technologies Utilisées

- **HTML5** sémantique
- **CSS3** moderne (Grid, Flexbox, Custom Properties)
- **JavaScript Vanilla** (ES6+)
- **Font Awesome** pour les icônes
- **Google Fonts** (Poppins)

---

## 📂 Structure des Fichiers

```
portfolio/
├── index_v2.html      # Nouvelle version HTML
├── style_v2.css       # Styles modernes
├── script_v2.js       # JavaScript interactif
├── index.html         # Version originale (conservée)
├── style.css          # Styles originaux
└── images/            # Dossier d'images
```

---

## 🎯 Informations Mises à Jour

### Profil
- Bachelor 3 Développement Full-Stack & DevOps à IPSSI (2025-2026)
- Recherche stage format saccadé (3 semaines / 1 semaine cours)
- Disponible immédiatement
- Domaines : Full-Stack, UX/UI, IA

### Formations
- IPSSI - Bachelor 3 (2025-2026)
- Les Chassagnes - BTS SIO SLAM (2022-2024)
- Faculté Jean Moulin - LEA (2021-2022)

### Expériences
- SITIV - Formatrice Logiciel (2024)
- Altares - Développeuse Web & BDD (2023)
- CHU Saint-Denis - Secrétaire RH (2021)

### Compétences Actualisées
- **Langages**: JavaScript, PHP, Python, C#, HTML/CSS
- **Frameworks**: React, Node.js, Angular, Laravel, Symfony, Vue.js, Flutter
- **Bases de données**: MySQL, MariaDB, SQL Server, MongoDB, Sequelize
- **DevOps**: Docker, CI/CD, Git, GitHub, GitLab
- **Système**: Linux, Ubuntu, Debian, Kali Linux, VMWare

### Langues
- Français (Langue maternelle)
- Anglais (C1 - Courant)
- Espagnol (A2 - Intermédiaire)
- Coréen (A1 - Notions)

---

## 🔧 Installation & Utilisation

### Option 1 : Ouverture directe
1. Ouvrir `index_v2.html` dans un navigateur moderne
2. Tout fonctionne localement !

### Option 2 : Serveur local (recommandé)
```bash
# Python 3
python3 -m http.server 8000

# Node.js (avec npx)
npx serve

# VS Code
# Utiliser l'extension "Live Server"
```

Puis ouvrir : `http://localhost:8000/index_v2.html`

### Option 3 : Déploiement GitHub Pages
1. Renommer `index_v2.html` en `index.html`
2. Renommer `style_v2.css` en `style.css`
3. Renommer `script_v2.js` en `script.js`
4. Mettre à jour les liens dans le HTML
5. Push sur GitHub
6. Activer GitHub Pages dans les settings

---

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans les variables CSS (`:root` dans `style_v2.css`) :
```css
--primary: #ff004f;        /* Rose principal */
--secondary: #6a1b9a;      /* Violet */
--accent: #00d4ff;         /* Bleu clair */
```

### Animations
Ajuster la vitesse des animations :
```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Typographie
Modifier les tailles dans la section `:root` ou utiliser les fonctions `clamp()` existantes.

---

## 📊 Performances

- ✅ **Mobile-friendly** : Design responsive
- ✅ **SEO optimisé** : Meta tags et structure sémantique
- ✅ **Lightweight** : Pas de dépendances lourdes
- ✅ **Animations optimisées** : Utilisation de `transform` et `opacity`
- ✅ **Lazy loading** prêt pour les images
- ✅ **Intersection Observer** pour animations au scroll

---

## 🔄 Compatibilité

### Navigateurs supportés
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Fonctionnalités modernes utilisées
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API
- ES6+ JavaScript
- CSS backdrop-filter (glassmorphism)

---

## 📝 TODO / Améliorations Futures

- [ ] Ajouter des screenshots de projets
- [ ] Créer une section "Veille Technologique" moderne
- [ ] Ajouter un blog (optionnel)
- [ ] Implémenter un toggle dark/light mode
- [ ] Ajouter des micro-animations supplémentaires
- [ ] Optimiser les images (WebP)
- [ ] Ajouter Google Analytics
- [ ] Créer une version multilingue (FR/EN)

---

## 💡 Conseils d'Utilisation

### Pour Rania
1. **Ajouter des screenshots** de vos projets dans `images/` et les intégrer dans les project cards
2. **Mettre à jour régulièrement** vos expériences et projets
3. **Tester sur mobile** avant de partager
4. **Vérifier les liens** GitHub et sociaux
5. **Personnaliser les couleurs** selon vos préférences

### Pour le déploiement
1. Tester localement d'abord
2. Vérifier tous les liens (CV, GitHub, LinkedIn)
3. Optimiser les images avant upload
4. Tester sur plusieurs navigateurs
5. Valider le HTML/CSS

---

## 📞 Contact

**Rania Zeramdini**  
📧 rania0270@outlook.fr  
📱 07 81 79 00 68  
📍 Lyon et alentours

**Liens**  
🔗 [LinkedIn](https://www.linkedin.com/in/rania-zeramdini/)  
💻 [GitHub](https://github.com/raniazerr)

---

## 📄 Licence

© 2025 Rania Zeramdini. Tous droits réservés.

---

## 🙏 Remerciements

Design inspiré des meilleurs portfolios modernes et des tendances UX/UI 2025.

---

**Version** : 2.0  
**Date** : Octobre 2025  
**Status** : ✅ Prêt pour production



