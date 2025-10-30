# 🚀 Guide de Démarrage Rapide

## Pour Rania - Portfolio Version 2

---

## ✅ Checklist Avant Déploiement

### 1. Vérifications Immédiates
```
☐ Ouvrir index_v2.html dans un navigateur
☐ Tester sur mobile (responsive)
☐ Cliquer sur tous les liens
☐ Tester le formulaire de contact
☐ Vérifier les liens sociaux
☐ Télécharger le CV (le lien fonctionne ?)
```

### 2. Liens à Vérifier
```
☐ LinkedIn : https://www.linkedin.com/in/rania-zeramdini/
☐ GitHub : https://github.com/raniazerr
☐ GitHub Projets :
   ☐ Gestion_Materiel
   ☐ Gestion_Adherents
   ☐ Sondage
☐ CV PDF : images/CV_Rania.pdf
```

### 3. Informations à Personnaliser (optionnel)
```
☐ Ajouter des screenshots de projets
☐ Mettre à jour la photo de profil
☐ Ajouter d'autres projets si nécessaire
☐ Ajuster les pourcentages de compétences
```

---

## 🖥️ Comment Tester Localement

### Option 1 : Double-clic (le plus simple)
1. Double-cliquer sur `index_v2.html`
2. Ça s'ouvre dans votre navigateur par défaut
3. ✅ **C'est tout !**

### Option 2 : Avec Python (recommandé)
```bash
# Ouvrir le terminal dans le dossier
cd "/Users/U1097655/Documents/Amine/CV site rania/rania_portfolio"

# Lancer un serveur local
python3 -m http.server 8000

# Ouvrir dans le navigateur
# http://localhost:8000/index_v2.html
```

### Option 3 : Avec Visual Studio Code
1. Installer l'extension "Live Server"
2. Clic droit sur `index_v2.html`
3. Choisir "Open with Live Server"
4. ✅ Le site s'ouvre automatiquement

---

## 📱 Comment Tester sur Mobile

### Sur le même réseau WiFi
```bash
# 1. Lancer le serveur Python
python3 -m http.server 8000

# 2. Trouver votre IP locale
# Sur Mac : Préférences Système → Réseau
# Exemple : 192.168.1.10

# 3. Sur votre téléphone, ouvrir :
# http://192.168.1.10:8000/index_v2.html
```

### Outils de développement
```
Chrome DevTools :
1. F12 (ou Cmd+Option+I sur Mac)
2. Cliquer sur l'icône mobile
3. Tester différentes tailles d'écran
```

---

## 🌐 Comment Déployer en Ligne

### Option 1 : GitHub Pages (GRATUIT ✨)

#### Étape 1 : Préparer les fichiers
```bash
# Renommer les fichiers (dans le terminal ou manuellement)
cd "/Users/U1097655/Documents/Amine/CV site rania/rania_portfolio"

# Sauvegarder l'ancienne version
mv index.html index_old.html
mv style.css style_old.css

# Activer la nouvelle version
mv index_v2.html index.html
mv style_v2.css style.css
mv script_v2.js script.js
```

#### Étape 2 : Mettre à jour les liens dans index.html
Ouvrir `index.html` et changer :
```html
<!-- De ça -->
<link rel="stylesheet" href="style_v2.css">
<script src="script_v2.js"></script>

<!-- À ça -->
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

#### Étape 3 : Push sur GitHub
```bash
# Ajouter les modifications
git add .
git commit -m "🚀 Portfolio V2 - Version modernisée"
git push origin main
```

#### Étape 4 : Activer GitHub Pages
1. Aller sur https://github.com/raniazerr/portfolio
2. Cliquer sur "Settings"
3. Dans le menu : "Pages"
4. Source : "Deploy from branch"
5. Branch : "main"
6. Folder : "/ (root)"
7. Cliquer sur "Save"
8. ⏳ Attendre 1-2 minutes
9. ✅ Votre site est en ligne sur : https://raniazerr.github.io/portfolio/

### Option 2 : Netlify (GRATUIT et RAPIDE ⚡)

1. Aller sur https://netlify.com
2. Créer un compte (gratuit)
3. "Add new site" → "Deploy manually"
4. Glisser-déposer le dossier `rania_portfolio`
5. ✅ Site en ligne instantanément !
6. URL : `https://random-name-123.netlify.app`
7. Vous pouvez changer le nom dans les settings

### Option 3 : Vercel (GRATUIT ⚡)

1. Aller sur https://vercel.com
2. Créer un compte (gratuit)
3. "New Project"
4. Importer depuis GitHub
5. ✅ Auto-déploiement à chaque push !

---

## ✏️ Comment Modifier le Contenu

### Modifier les Informations Personnelles

#### Dans `index.html` :

**Email** :
```html
<a href="mailto:rania0270@outlook.fr">rania0270@outlook.fr</a>
<!-- Changez ici si besoin -->
```

**Téléphone** :
```html
<a href="tel:+33781790068">07 81 79 00 68</a>
```

**Localisation** :
```html
<p>Lyon et alentours</p>
```

### Modifier les Couleurs

#### Dans `style.css` (au début du fichier) :

```css
:root {
    --primary: #ff004f;        /* 👈 Changez cette couleur */
    --secondary: #6a1b9a;      /* 👈 Et celle-ci */
    --accent: #00d4ff;         /* 👈 Et celle-ci aussi */
}
```

**Exemples de couleurs** :
- Rose actuel : `#ff004f`
- Bleu : `#0066ff`
- Violet : `#8b5cf6`
- Vert : `#10b981`
- Orange : `#f97316`

### Ajouter un Nouveau Projet

#### Dans `index.html`, copier ce bloc :

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-overlay">
            <a href="LIEN_GITHUB" target="_blank" class="project-link">
                <i class="fab fa-github"></i>
            </a>
        </div>
        <div class="project-placeholder">
            <i class="fas fa-code"></i> <!-- Changez l'icône -->
        </div>
    </div>
    <div class="project-content">
        <h3>Nom du Projet</h3>
        <p>Description du projet ici...</p>
        <div class="project-tech">
            <span class="tech-badge">React</span>
            <span class="tech-badge">Node.js</span>
        </div>
        <div class="project-role">
            <i class="fas fa-user-tag"></i>
            <span>Rôle: Développeuse Full-Stack</span>
        </div>
    </div>
</div>
```

### Modifier les Pourcentages de Compétences

#### Dans `index.html`, section compétences :

```html
<!-- Exemple pour JavaScript -->
<div class="skill-item">
    <div class="skill-header">
        <span>JavaScript</span>
        <span>90%</span> <!-- 👈 Changez ici -->
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="90"></div>
        <!-- 👆 Et ici aussi -->
    </div>
</div>
```

---

## 🎨 Personnalisation Avancée

### Changer les Animations

Dans `style.css`, chercher `@keyframes` :
```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    /* Modifiez les valeurs pour changer l'animation */
}
```

### Ajouter des Screenshots de Projets

1. Ajouter l'image dans le dossier `images/`
2. Dans `index.html`, remplacer :
```html
<!-- De ça -->
<div class="project-placeholder">
    <i class="fas fa-code"></i>
</div>

<!-- À ça -->
<img src="images/mon-projet.png" alt="Mon Projet">
```

---

## 🐛 Problèmes Courants

### Le site ne s'affiche pas correctement
```
✓ Vérifier que tous les fichiers sont dans le bon dossier
✓ Vérifier les chemins des fichiers CSS/JS
✓ Ouvrir la console (F12) pour voir les erreurs
✓ Vider le cache du navigateur (Ctrl+Shift+R)
```

### Les icônes ne s'affichent pas
```
✓ Vérifier la connexion internet (Font Awesome est en ligne)
✓ Vérifier le lien Font Awesome dans <head>
```

### Le formulaire ne fonctionne pas
```
✓ Vérifier l'URL du Google Script dans script.js
✓ Tester la connexion internet
✓ Ouvrir la console pour voir les erreurs
```

### Sur mobile, le menu ne se ferme pas
```
✓ Vérifier que script.js est bien chargé
✓ Ouvrir la console mobile pour voir les erreurs
```

---

## 📞 Support

### Si vous avez besoin d'aide :

1. **Problème technique** : Ouvrir la console (F12) et copier les erreurs
2. **Problème de design** : Faire une capture d'écran
3. **Autre** : Décrire précisément le problème

### Ressources utiles :
- Font Awesome icons : https://fontawesome.com/icons
- Color palette : https://coolors.co
- HTML/CSS guide : https://developer.mozilla.org

---

## 🎯 Prochaines Étapes

### Aujourd'hui
```
1. ✅ Tester localement
2. ✅ Vérifier tous les liens
3. ✅ Tester sur mobile
```

### Cette semaine
```
4. ✅ Ajouter screenshots projets
5. ✅ Déployer en ligne (GitHub Pages)
6. ✅ Partager sur LinkedIn
```

### Ce mois-ci
```
7. ✅ Mettre à jour régulièrement
8. ✅ Ajouter nouveaux projets
9. ✅ Suivre les statistiques
```

---

## 🌟 Conseils Pro

### Pour maximiser l'impact :
1. **Mettez à jour votre CV PDF** avec le même design
2. **Partagez sur LinkedIn** avec un post attractif
3. **Ajoutez le lien** dans votre signature email
4. **Mentionnez-le** dans vos candidatures
5. **Mettez-le à jour** régulièrement

### Message LinkedIn suggéré :
```
🚀 Nouveau portfolio en ligne !

Étudiante en Bachelor 3 Développement Full-Stack & DevOps, 
je recherche un stage en format saccadé.

Découvrez mes projets et compétences : 
https://raniazerr.github.io/portfolio/

#WebDev #FullStack #DevOps #Stage #Lyon

```

---

## ✅ Checklist Finale

```
☐ Site testé localement
☐ Testé sur mobile
☐ Tous les liens fonctionnent
☐ Formulaire de contact fonctionne
☐ CV téléchargeable
☐ Screenshots ajoutés (optionnel)
☐ Déployé en ligne
☐ URL partagée sur LinkedIn
☐ Email signature mis à jour
☐ Prêt à envoyer aux recruteurs !
```

---

**Bon courage pour votre recherche de stage ! 🎉**

---

*Guide créé en Octobre 2025*  
*Pour Rania Zeramdini*  
*Version 1.0*

