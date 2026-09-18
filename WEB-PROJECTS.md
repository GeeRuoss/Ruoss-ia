# Réalisations web

Les références sont centralisées dans `src/data/web-projects.ts`. Joshua Ruoss, Carron + Deslarzes et les Pontonniers de Bex ont une nouvelle page de projet ; Bikeverbier et NIRLAB conservent leurs URL et études de cas existantes.

`WebProjects.astro` affiche les références dans les services et les études de cas. La page `/projects-2/` possède sa galerie dédiée décrite ci-dessous. Les 51 visuels historiques y sont visibles sans panneau dépliable, les liens restent accessibles sans JavaScript et les animations respectent la préférence de mouvement réduit.

## Médias

- `joshua-ruoss.webp` : aperçu de partage du site Joshua Ruoss, issu de l’identité et de l’emblème fournis pour ce projet. [Site public](https://joshruoss.ch/).
- `carron-deslarzes.webp` : photographie du chalet déjà affichée à l’accueil du site client. [Site public](https://carron-deslarzes.ch/).
- `pontonniers-bex.webp` : photographie d’accueil du site du club. [Site public](https://www.pontonniersbex.ch/).
- Bikeverbier, NIRLAB et les identités : médias déjà utilisés dans le portfolio Ruoss!.

Les nouveaux fichiers sont des copies WebP optimisées à 1200 pixels, sans métadonnées de prise de vue. Les originaux sont conservés dans les projets respectifs. Ces médias illustrent les réalisations du studio et ne sont pas présentés comme des ressources libres de droits. Les deux photographies sont des visuels des projets, pas des captures des interfaces.

Le positionnement « design dessiné à la main, sur mesure » a été confirmé par Guillermo le 17 septembre 2026. Aucun résultat commercial chiffré n’a été ajouté aux études de cas.

## Galerie Projets, 18 septembre 2026

La page réunit les 51 originaux, les cinq identités présentées avec leurs vrais logos, les sept sites du catalogue 3D et Fais ton sac. Les grands filtres Tout, Graphisme, Sites web et IA remplacent les pilules. Les offres Solutions IA et Formation & guide sont présentées comme accompagnements, sans étude de cas client inventée.

- Originaux et légendes : `src/data/portfolio-artworks.json`, sources conservées dans `public/img/`.
- Variantes WebP 640/1200 px et aperçus des sites : `node scripts/prepare-portfolio.mjs`, à lancer quand les sources changent. Le build ne regénère pas les images.
- Interface : `src/pages/projects-2.astro`, `src/styles/portfolio.css`, `src/scripts/portfolio.ts`.
- Les liens `/experience/?projet=<id>` ouvrent la galerie 3D sur le bon site.
- Aperçu de partage : `public/brand/og-projets-v2.jpg`.

Validation locale : build statique, 51 originaux comparés à la version précédente, 1 109 liens et médias internes sans cible manquante, filtres et visionneuse testés, visite Joshua intégrée, vues 320/390/1280 px, aucune erreur JavaScript observée. Publication GitHub Pages uniquement, builds Netlify maintenus à l’arrêt.


## Graphisme & 3D, 18 septembre 2026

La page `/services/graphisme-branding-valais/` présente désormais le rendu MX908 de 908 Devices, deux visuels NIRLAB, les liens vers les neuf fiches projets et un aperçu menant à toute la galerie `/projects-2/`. Les logos et les médias existants sont conservés.

- `src/components/GraphicProjects.astro` : présentation des créations et des projets, grands liens textuels et grille responsive.
- `/projects/908-devices/` : deux rendus et un film de six secondes. Le lecteur démarre uniquement sur demande, avec commandes natives et `preload="none"`.
- `public/img/graphisme/mx908-*` : exports WebP du rendu final validé `MX908-face-verre.png` et de la vue `MX908-studio-verre.png`, issus du projet 3D du studio. Les fichiers de travail ne sont pas publiés.
- `public/video/projects/mx908-film-verre.mp4` : film original du projet, sans modification et sans piste sonore, environ 564 Ko.
- `public/img/graphisme/nirlab-*` : variantes optimisées des créations déjà publiées dans la fiche NIRLAB. Les onze images de cette fiche restent disponibles.
- Aperçus de partage dédiés : `og-graphisme-v1.jpg` et `og-mx908-v1.jpg`.
- La galerie contient 67 entrées, dont 57 dans Graphisme, avec le nouveau projet 908 Devices.

Validation : build de 23 pages, 1 180 liens et médias internes sans cible manquante, vues 320/390/1280 px sans débordement, lecture complète du film dans le navigateur, navigation vers NIRLAB et la galerie, filtre Graphisme et retour arrière, absence d’erreur JavaScript observée. Les pages Web et Formation IA ont également été contrôlées. Publication GitHub Pages uniquement ; la configuration de pause Netlify reste inchangée.
