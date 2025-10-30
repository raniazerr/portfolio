# Portfolio - Rania Zeramdini

Portfolio professionnel pour l'épreuve E4 de ma formation en BTS SIO option SLAM.

**🔗 Lien du site** : https://raniazerr.github.io/portfolio/

---

## 📁 Structure du projet

### 🌐 Site Web Portfolio
Le site web principal contient :
- **index.html** : Page principale du portfolio
- **style.css** : Feuille de styles
- **script.js** : Scripts JavaScript
- **images/** : Images et ressources visuelles incluant le CV PDF

### 📄 CV LaTeX (`cv_latex/`)
Dossier contenant tous les fichiers nécessaires pour générer le CV en LaTeX :

- **Fichiers principaux :**
  - `cv_rania_zeramdini.tex` : CV principal de Rania
  - `cv_template_variables.tex` : Template avec variables réutilisables
  - `deedy_resume-reversed.tex` : Template alternatif Deedy Resume
  - `deedy-resume-reversed.cls` : Classe LaTeX personnalisée

- **Ressources :**
  - `fonts/` : Polices Lato et Raleway
  - `*.svg` : Icônes pour contact (email, GitHub, LinkedIn, téléphone, site web)
  - `publications.bib` : Fichier de bibliographie BibTeX

#### Compilation du CV
Pour compiler le CV LaTeX :
```bash
cd cv_latex
pdflatex cv_rania_zeramdini.tex
```

---

## 📚 Documentation
- **GUIDE_DEMARRAGE.md** : Guide pour démarrer avec le projet
- **COMPARAISON_V1_V2.md** : Comparaison entre les versions
- **README_V2.md** : Documentation détaillée de la version 2

---

## 🚀 Déploiement
Le site est déployé automatiquement via GitHub Pages à chaque push sur la branche `main`.
