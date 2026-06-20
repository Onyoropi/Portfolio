# Portfolio

Portfolio personnel style macOS, construit en HTML / CSS / JS vanilla (pas de framework).

## Arborescence

```
portfolio-site/
├── index.html              ← Page principale
├── README.md               ← Ce fichier
│
├── css/                    ← Styles (un fichier = un rôle)
│   ├── reset.css           ← Reset CSS (normalise les navigateurs)
│   ├── base.css            ← Variables globales, fond animé, body
│   ├── menubar.css         ← Barre de menu du haut
│   ├── dock.css            ← Le dock et ses icônes
│   ├── window.css          ← Les fenêtres (glass, boutons, header)
│   ├── content.css         ← Styles du contenu à l'intérieur des fenêtres
│   └── responsive.css      ← Adaptations mobile / tablette
│
├── js/                     ← Scripts (un fichier = un module)
│   ├── config.js           ← Configuration des fenêtres et du dock
│   ├── clock.js            ← Horloge de la barre de menu
│   ├── draggable.js        ← Logique de drag & drop
│   ├── window-manager.js   ← Gestion des fenêtres (ouvrir, fermer...)
│   ├── dock.js             ← Construction du dock
│   └── main.js             ← Point d'entrée qui démarre tout
│
└── assets/
    └── icons/
        └── favicon.svg     ← Favicon du site
```

## Comment l'utiliser

Ouvre simplement `index.html` dans ton navigateur. Pas de serveur nécessaire,
pas de build, pas d'installation. Double-clic et c'est parti.

## Comment modifier le contenu

### Changer le texte des fenêtres
→ Édite les `<template>` dans `index.html` (tout en bas du `<body>`).

### Changer les icônes du dock, leurs couleurs ou leur ordre
→ `js/config.js` pour les icônes (SVG) et l'ordre.
→ `css/dock.css` section "Dégradés par icône" pour les couleurs.

### Changer les couleurs générales du site
→ `css/base.css` en haut, section `:root { ... }`.
  Toutes les couleurs sont centralisées là.

### Ajouter une nouvelle section / fenêtre
1. Ajouter une entrée dans `CONFIG.windows` (`js/config.js`)
2. Ajouter son id dans `CONFIG.dockOrder` (même fichier)
3. Ajouter un `<template>` correspondant dans `index.html`
4. Ajouter la couleur du dégradé dans `css/dock.css`
