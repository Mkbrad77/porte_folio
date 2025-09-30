# Portfolio Auren Moyo - Next.js

Un portfolio moderne et responsive développé avec Next.js 15, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- **Design moderne et responsive** avec Tailwind CSS
- **Animations fluides** avec Framer Motion
- **Support multilingue** (Français/Anglais)
- **Optimisé pour les performances** avec Next.js 15
- **SEO optimisé** avec métadonnées appropriées
- **Composants réutilisables** et modulaires
- **Formulaire de contact** fonctionnel
- **Navigation fluide** avec scroll smooth

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animations
- **Lucide React** - Icônes
- **next-i18next** - Internationalisation

## 📁 Structure du projet

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   └── lib/
│       └── getStaticProps.ts
├── public/
│   ├── locales/
│   │   ├── fr/
│   │   │   └── common.json
│   │   └── en/
│   │       └── common.json
│   └── [images et certificats]
├── next.config.ts
├── next-i18next.config.js
└── package.json
```

## 🚀 Installation et démarrage

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd portfolio-nextjs
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🌐 Internationalisation

Le portfolio supporte deux langues :
- **Français** (par défaut) - `/`
- **Anglais** - `/en`

Les traductions sont gérées via les fichiers JSON dans `public/locales/`.

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte à tous les écrans :
- **Mobile** (< 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (> 1024px)

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans Tailwind CSS :
- **Primary**: Blue (500-600)
- **Secondary**: Purple (500-600)
- **Background**: Gray (800-900)

### Animations
Les animations sont configurées avec Framer Motion :
- **Fade in** sur scroll
- **Scale** sur hover
- **Smooth transitions**

## 📄 Sections

1. **Hero** - Présentation principale
2. **About** - À propos avec photo et informations de contact
3. **Skills** - Compétences techniques organisées par catégories
4. **Projects** - Projets réalisés avec technologies utilisées
5. **Experience** - Expérience professionnelle en timeline
6. **Education** - Formation académique
7. **Certifications** - Certifications obtenues
8. **Contact** - Formulaire de contact et informations

## 🔧 Scripts disponibles

```bash
npm run dev          # Démarrage en développement
npm run build        # Build de production
npm run start        # Démarrage en production
npm run lint         # Vérification ESLint
```

## 📦 Build et déploiement

```bash
# Build de production
npm run build

# Démarrage en production
npm run start
```

## 🌟 Fonctionnalités avancées

- **Scroll smooth** entre les sections
- **Navigation sticky** avec effet de transparence
- **Animations d'apparition** au scroll
- **Particules animées** en arrière-plan
- **Formulaire de contact** avec validation
- **Liens sociaux** dans le footer
- **Optimisation des images** avec Next.js Image

## 📞 Contact

- **Email**: moyobradley7@gmail.com
- **Téléphone**: +33 6 09 70 98 51
- **Localisation**: Antony, France
- **LinkedIn**: [Auren Bradley Moyo Kamdem](https://www.linkedin.com/in/auren-bradley-moyo-kamdem-a6a052268/)
- **GitHub**: [Mkbrad77](https://github.com/Mkbrad77)

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

Développé avec ❤️ par Auren Moyo