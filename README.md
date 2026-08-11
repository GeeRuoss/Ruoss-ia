# ruosscommunication.com — refonte Astro

Migration du site du studio [Ruoss! Communication](https://www.ruosscommunication.com) (Framer) vers Astro,
pixel perfect, sans dépendance payante. Même stack et mêmes conventions que
[bikeverbier](https://github.com/GeeRuoss/bikeverbier).

## Démarrer

```bash
npm install
npm run dev -- --port 4322
```

Build de production : `npm run build` → `dist/`.

## Structure

- `src/pages/` — accueil, studio, services, projects-2 (galerie), contact, merci + `projects/[slug]` (5 études de cas)
- `src/data/site.ts` — coordonnées, nav, services, avis, compteurs, cartes projets
- `src/data/projects.ts` — contenu des études de cas
- `src/styles/global.css` — design tokens (cf. DESIGN.md)
- `public/img/` — images du site (noms hashés d'origine), `public/video/hero.mp4` — vidéo N/B des télésièges
- `public/brand/` — logo script SVG, étoiles, favicons, image OG

## Docs

- [DESIGN.md](DESIGN.md) — tokens extraits du site live
- [CONTENU.md](CONTENU.md) — copy + coquilles à arbitrer
- [SEO.md](SEO.md) — meta, JSON-LD, llms.txt, robots IA

## Notes

- Formulaires : [Formsubmit](https://formsubmit.co) vers l'email du studio — **à activer au premier envoi réel**
  (email de confirmation Formsubmit), redirection vers `/merci`.
- Pas encore déployé : le DNS pointe toujours vers Framer.
