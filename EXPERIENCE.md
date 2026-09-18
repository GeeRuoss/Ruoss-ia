# Galerie de sites Ruoss

La source active est `src/pages/experience.astro` dans ce dépôt. Elle utilise le layout, la navigation, le logo, la police Inter et les couleurs de Ruoss. Le prototype autonome initial est archivé et ne doit plus servir de source de style.

Les six projets, leurs liens, leurs pages et leurs prestations sont dans `public/experience/api/projects.json`. Coppey Bois de feu et PhysioVerbier utilisent leurs aperçus publics GitHub Pages. La scène WebGL, ses captures et Three.js sont servis localement dans `public/experience/`.

La fonction Netlify `netlify/functions/project-site.mjs` vérifie les en-têtes sur une liste fermée de domaines HTTPS. Le contenu des sites est chargé directement dans une iframe sandboxée, sans proxy. Bex refuse les iframes et s’ouvre dans un onglet.

## Aperçu du dépôt

```sh
npm run build
node scripts/preview-site.mjs
```

Ouvrir `http://127.0.0.1:4338/experience/`. Ce serveur local inclut la même vérification des sites que la fonction Netlify. La page est indexable et incluse dans le sitemap de production.

## Vérifications du 18 septembre 2026

Compilation de 21 pages et diff vérifiés. Aucun caractère de flèche ni ancienne icône SVG de flèche dans les liens ou boutons du HTML compilé. Six pages partagées contrôlées à 320 et 1440 px sans débordement horizontal. Galerie et menu contrôlés à 390 px ; navigation Projets vers la galerie confirmée. Visites réelles testées dans Chrome. Le navigateur intégré de Codex peut laisser les iframes externes vides ; le lien direct reste disponible.

Les boutons et liens du site ont été corrigés dans leurs composants partagés. Une capture d’un site client dans un moniteur conserve naturellement le contenu propre à ce site.

Page préparée pour publication sur `https://www.ruosscommunication.com/experience/`, avec un accès depuis Projets.

## Aperçu téléphone

Le mode Téléphone garde un écran de 390 × 844 pixels CSS à l’intérieur d’une coque proportionnée. La coque entière se réduit pour tenir dans la fenêtre ; la mise en page du site ne s’étire plus avec la hauteur du bureau. À 760 px et moins, le site visité occupe toute la largeur, sans seconde coque. Vérifié à 1280 × 800, 390 × 844 et 320 × 640, avec changement de page et retour au mode Ordinateur.
