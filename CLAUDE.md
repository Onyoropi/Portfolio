# CLAUDE.md — Portfolio Cléo Le Bastard

> Mis à jour : 2026-06-15 (session 3). À enrichir à chaque session.

---

## Qui

**Cléo Le Bastard** — 19 ans, étudiant (masculin) en 2ème année de BUT Science des Données (parcours EMS — Exploration et Modélisation Statistique), IUT de Vannes. Alternant Data au Groupe La Poste (Maison de l'Innovation) depuis 2024.

Stack : R, Python, SQL, Neo4j, RShiny, Scikit-learn, Pandas, Talend, Power BI, LaTeX, Git, Linux.

Style de communication : français familier, va droit au but, autonome techniquement — pas besoin d'expliquer les bases.

---

## But du projet

Portfolio étudiant BUT SD pour candidatures alternance/stage futures. Vitrine de compétences et projets réalisés en formation.

---

## Architecture des fichiers

```
portfolio-site/
├── index.html                Hero + À propos + 4 cards compétences
├── contact.html              Page contact (email, LinkedIn, GitHub)
├── CLAUDE.md                 Ce fichier
├── README.md
├── assets/
│   └── icons/favicon.svg
├── css/
│   ├── reset.css             Normalisation navigateur
│   ├── base.css              Variables CSS globales (ancien thème macOS — inactif)
│   ├── style.css             ★ MAIN — toutes les pages portfolio (~1360 lignes)
│   ├── menubar.css           Menubar macOS (ancien thème — inactif)
│   ├── window.css            Fenêtres draggables (ancien thème — inactif)
│   ├── dock.css              Dock bottom (ancien thème — inactif)
│   ├── content.css           Contenu des fenêtres (ancien thème — inactif)
│   └── responsive.css        Breakpoints mobiles/tablette
├── js/
│   ├── app.js                Canvas réseau animé + nav scroll + scroll reveal
│   ├── main.js               Initialisation Clock/WindowManager/Dock (ancien thème)
│   ├── config.js             Config fenêtres + ordre dock (ancien thème)
│   ├── window-manager.js     Open/close/focus/maximize (ancien thème)
│   ├── draggable.js          Drag des fenêtres (ancien thème)
│   ├── dock.js               Rendu et interactions dock (ancien thème)
│   └── clock.js              Horloge menubar en français (ancien thème)
├── competences/
│   ├── traiter.html          Compétence 01 — Gérer le cycle de vie de la donnée
│   ├── analyser.html         Compétence 02 — Analyse statistique
│   ├── modeliser.html        Compétence 03 — Modélisation statistique (EMS)
│   └── valoriser.html        Compétence 04 — Restitution & communication
└── projets/
    ├── sae-101.html          SQL Reporting — Base films (Access, SQL, Excel) ✓ COMPLET
    ├── sae-102.html          Automatisation Python — Traitement fichiers ✓ COMPLET
    ├── sae-103.html          Analyse exploratoire Agreste — Femmes agriculture ✓ COMPLET
    ├── sae-104-105.html      Étude de marché Centigon USA ✓ COMPLET
    ├── sae-201.html          BDD relationnelle CompuDistri ✓ COMPLET
    ├── sae-202.html          Estimation par sondage — Villes Bretagne ✓ COMPLET
    ├── sae-203.html          Régression linéaire — Données réelles ✓ COMPLET
    ├── sae-205.html          Simulation d'entreprise & indicateurs de performance ✓ COMPLET
    ├── sae-206.html          AP-HP — vue globale ✓ COMPLET
    ├── sae-206-traiter.html  AP-HP — vue Traiter ✓ COMPLET
    ├── sae-206-analyser.html AP-HP — vue Analyser ✓ COMPLET
    ├── sae-206-valoriser.html AP-HP — vue Valoriser ✓ COMPLET
    ├── sae-302.html          Datawarehouse & pipeline ETL Talend ✓ COMPLET
    ├── sae-303.html          Trafic autoroutier — Séries temporelles ✓ COMPLET
    ├── sae-401.html          Boston Housing — vue principale ✓ COMPLET
    ├── sae-401-analyser.html Boston Housing — vue Analyser ✓ COMPLET
    ├── sae-401-modeliser.html Boston Housing — vue Modéliser ✓ COMPLET
    ├── sae-401-valoriser.html Boston Housing — vue Valoriser ✓ COMPLET
    ├── sae-402.html          WildfireAlert — Classification feux de forêt, vue principale ✓ COMPLET
    ├── sae-402-traiter.html  WildfireAlert — vue Traiter ✓ COMPLET
    ├── sae-402-analyser.html WildfireAlert — vue Analyser ✓ COMPLET
    └── sae-402-valoriser.html WildfireAlert — vue Valoriser ✓ COMPLET
```

---

## Direction artistique

**Thème : Terminal / Data Lab**

| Token | Valeur |
|-------|--------|
| `--bg` | `#07091a` — navy profond |
| `--bg-surface` | `#0c1020` |
| `--bg-card` | `#101622` |
| `--accent` | `#00d4ff` — cyan vif |
| `--accent-2` | `#6d28d9` — violet |
| `--accent-3` | `#10b981` — vert |
| `--text` | `#dde5f0` |
| `--text-muted` | `#7b8ca0` |
| `--font-display` | Space Grotesk |
| `--font-body` | Inter |
| `--font-mono` | JetBrains Mono |

Canvas réseau de 55 points animés en fond. Glassmorphism (`backdrop-filter: blur`). Scroll reveal avec `[data-reveal]` + IntersectionObserver.

---

## Structure des pages

### index.html
- **Nav** fixe : logo "CLB.", liens (À propos, Compétences, Contact), bouton GitHub
- **Hero** : titre clamp() + sous-titre alternance + 2 CTAs
- **À propos** : grid 2 colonnes (bio + stats) + timeline 3 items
- **Compétences** : grille 2×2 de skill-cards avec tags `--high/--mid/--low` (contenu domaines, pas outils bruts)
- **Footer** : année dynamique

### competences/*.html
Structure A + B pour les 4 pages :
- **Hero** : pagination (01/04 … 04/04), titre, tagline
- **Bloc A — Présentation** : description de la compétence + barres d'outils
- **Bloc B — Projets associés** : projets splitté par niveau avec header `.ac-level` :
  - `Niveau 1 · BUT1` → bento grid des projets BUT1
  - `Niveau 2 · BUT2` → bento grid des projets BUT2
  - (Modéliser : un seul niveau `Niveau 2 · BUT2 EMS`)
- **Nav** Précédente/Suivante circulaire

**Les ACs ont été supprimées des pages compétences** — remplacées par les projets par niveau.

Ordre de navigation : Traiter → Analyser → Modéliser → Valoriser → (boucle)

**Sélection des projets par compétence (définitive) :**

| Compétence | Niveau 1 BUT1 | Niveau 2 BUT2 |
|---|---|---|
| Traiter | SAÉ 101, SAÉ 206 | SAÉ 302, SAÉ 402 |
| Analyser | SAÉ 202, SAÉ 206 | SAÉ 303, SAÉ 402 |
| Modéliser | — | SAÉ 401 |
| Valoriser | SAÉ 205, SAÉ 206 | SAÉ 401, SAÉ 402 |

Les liens pointent vers les variantes par compétence quand elles existent (ex. `sae-206-traiter.html`, `sae-402-analyser.html`).

### projets/sae-*.html
Structure **A → E** identique pour tous :
- **Hero** : retour vers la compétence mère, pagination SAÉ, titre, tagline
- **Bloc A — Objectifs du programme national** : ce que le PN BUT SD vise pour cette SAÉ
- **Bloc B — Problématique & livrables** : problématique imposée (gauche) + livrables + logiciels (droite, `.tools-bar`)
- **Bloc C — Méthodologie** : étapes numérotées (`.proj-steps` / `.proj-step`)
- **Bloc D — Résultats obtenus** : résultats concrets + bouton `.btn--primary` "Voir les résultats →" (lien `#` à remplacer par PDF)
- **Bloc E — Ce que j'en retire** : grille `.acq-grid` avec codes AC, description, badge Acquis/En cours

Les SAÉ qui couvrent plusieurs compétences ont des **variantes par compétence** (ex. `sae-206-traiter.html` pour le volet Traiter).

### contact.html
3 cards : email, LinkedIn, GitHub

---

## Règles CSS importantes

- Tout le style actif est dans `css/style.css`. Les autres CSS (base, menubar, window, dock, content) sont des résidus de l'ancien thème macOS — **ne pas modifier**.
- **Nouvelles classes ajoutées en session 2** (dans style.css) :
  - `.proj-steps` / `.proj-step` / `.proj-step__num` / `.proj-step__body` : étapes numérotées de méthodologie
  - `.proj-cta` : bloc bouton résultats (margin-top: 28px)
- Les tags de compétence : `.stag--high` (cyan), `.stag--mid` (muted), `.stag--low` (dim)
- Les cartes bento : `.bento` (3 col desktop) → 2 col à 1024px → 1 col à 600px
- Les animations scroll : `[data-reveal]` sur les éléments, classe `.in-view` ajoutée par `app.js`
- Les ACs dans les pages projets : `.acq-grid`, `.acq-item`, `.acq-item__code`, `.acq-badge--ok` (vert), `.acq-badge--progress` (jaune)

---

## JS important

- `app.js` gère tout sur index.html : canvas, nav, scroll reveal, burger menu, année footer
- Les autres JS (main, config, window-manager, dock, draggable, clock) : ancien thème macOS, toujours présents mais non utilisés sur les pages compétences/projets

---

## État actuel (2026-06-15, session 3)

**Pages compétences :** toutes restructurées (A + B projets par niveau, ACs supprimées)

**Pages projets complètes :**
- SAÉ 101, 102, 103, 104-105, 201, 202, 203 — contenu complet (BUT1)
- SAÉ 205 — Simulation d'entreprise & indicateurs de performance (Excel + Power BI)
- SAÉ 206 (principale + traiter + analyser + valoriser) — contenu complet (AP-HP/ComPaRe)
- SAÉ 302 — Datawarehouse & pipeline ETL Talend (3 zones + job maître + vues matérialisées)
- SAÉ 303 — Trafic autoroutier, séries temporelles (modèle Mix, EQM = 0,089)
- SAÉ 401 (principale + analyser + modeliser + valoriser) — Boston Housing, régression multiple (RMSE = 3,63 k$)
- SAÉ 402 (principale + traiter + analyser + valoriser) — WildfireAlert, Random Forest / ACP feux de forêt (AUC = 0,774, RShiny déployé)

**Pages projets À compléter :** aucune — toutes les SAÉ sont complètes.

**Boutons "Voir les résultats →"** : tous pointent sur `#` pour l'instant — à remplacer par les liens PDF quand les documents seront prêts.

---

## SAÉ 206 — AP-HP / ComPaRe (référence)

Projet le plus complexe, 4 variantes. Points clés à retenir :
- **Données** : 10 CSV, 277 variables, 50 patients fictifs anonymisés, 12 maladies
- **Scores** : 9 scores AP-HP (IPAQ, SIDORKIEWICZ, TBQ, EQ-5D-5L, PHQ-9, GAD-7, PSQI, EPICES, MYMOP) + IMC ajouté
- **EQ-5D-5L** : nécessite le package R `eq5d` — seul outil dispo pour ce calcul
- **Performance** : 50 fiches PDF générées en 38 secondes (≈ 12h pour 60 000 patients)
- **Stack** : R (readxl, dplyr, eq5d, ggplot2, grid, gridtext, png) + Flask (Python) + rpy2 + HTML/CSS/JS
- **3 réunions AP-HP** : chacune a orienté une itération (données corrigées → fiche R → site Flask)
- **Nomenclature PDF** : `fichePatient_PART_X_JJ_MM_AAAA[_filtres].pdf`

---

## Contacts / liens

- Email : cleo.lebastard@gmail.com
- GitHub : https://github.com/Onyoropi
- LinkedIn : https://www.linkedin.com/in/cléo-le-bastard-032003330/
