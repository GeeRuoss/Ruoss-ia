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

- Contact : formulaire local de préparation WhatsApp, envoi final par le visiteur. Aucun stockage de saisie, lien e-mail et téléphone en complément.
- Hébergement cible : **GitHub Pages**, publication du build statique par `.github/workflows/deploy.yml` à chaque push sur `main`.
- Domaine canonique : `www.ruosscommunication.com`, à définir dans les réglages Pages du dépôt (mode GitHub Actions).
- DNS chez 1ahosting : `www` CNAME vers `geeruoss.github.io`, apex vers les quatre adresses `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. La messagerie et les autres enregistrements restent chez le fournisseur existant.
- Netlify : builds arrêtés le 18/09/2026 pour préserver le quota. Ne pas réactiver ni déployer par CLI. `netlify.toml` contient aussi une instruction d’annulation des builds.
- Galerie : catalogue et réponses JSON statiques, actualisés pendant le build. Aucun appel à une fonction Netlify depuis le site.

## Évolution web et IA — 17 septembre 2026

- Quatre pages métiers dans `src/data/offers.ts`, rendues par `src/pages/services/[slug].astro`.
- Accueil : agence web à Verbier ; studio : agence de communication ; services : web, formation IA, solutions IA et graphisme.
- URL canoniques avec slash final. Ancien `/projects/` conservé par une page HTML de compatibilité vers `/projects-2/` ; GitHub Pages ne permet pas de configurer cette redirection en HTTP 301.
- Sitemap : 18 pages indexables ; `/merci/` et 404 exclus. La 404 est rendue par `src/pages/404.astro`.
- JSON-LD de services et fils d’Ariane ; métadonnées et maillage des études de cas.
- Le domaine et les accès existants sont conservés ; la migration de l’hébergement est décrite ci-dessus.
- Les données Search Console et le rapport d’audit restent dans le dossier privé de travail, hors dépôt.

## Réalisations web et galerie

Les cinq références web et leurs liens sont dans `src/data/web-projects.ts`. La page `/projects-2/` propose huit projets, des filtres et la galerie historique dépliable. Voir `WEB-PROJECTS.md` pour les composants et les médias.

## Positionnement du studio

Trois domaines : Graphisme & 3D (en premier), Sites web & développement (applications, réservations et outils métier), Intelligence artificielle (formations et solutions réunies). Les pages détaillées IA restent accessibles depuis leur page commune. Le Studio présente le portrait et l’approche de Guillermo.

## Galerie de sites en 3D

La page `/experience/` partage le layout et le design du site. Sources et vérifications dans [EXPERIENCE.md](EXPERIENCE.md). Les boutons et liens utilisent des libellés sans flèche.
