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
