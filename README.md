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
- Hébergement : [Netlify](https://app.netlify.com/projects/ruoss-communication) (projet `ruoss-communication`),
  déploiement automatique à chaque push sur `main` (`netlify.toml` : `npm run build`, dossier `dist`).
  Domaine `www.ruosscommunication.com` + apex, HTTPS Let's Encrypt géré par Netlify.
- DNS chez 1ahosting (zone 20i/StackCP) : A apex → `75.2.60.5`, `www` CNAME → `ruoss-communication.netlify.app`.
  Mail (stackmail : MX, SPF, imap/smtp/pop3/mail) et ftp inchangés.

## Évolution web et IA — 17 septembre 2026

- Quatre pages métiers dans `src/data/offers.ts`, rendues par `src/pages/services/[slug].astro`.
- Accueil : agence web à Verbier ; studio : agence de communication ; services : web, formation IA, solutions IA et graphisme.
- URL canoniques avec slash final, conformes aux URL servies par Netlify. Ancien `/projects` redirigé vers `/projects-2/` dans `public/_redirects`.
- Sitemap : 17 pages indexables ; `/merci/` et 404 exclus. La 404 est rendue par `src/pages/404.astro`.
- JSON-LD de services et fils d’Ariane ; métadonnées et maillage des études de cas.
- Le domaine, l’hébergement et les accès existants sont conservés.
- Les données Search Console et le rapport d’audit restent dans le dossier privé de travail, hors dépôt.

## Réalisations web et galerie

Les cinq références web et leurs liens sont dans `src/data/web-projects.ts`. La page `/projects-2/` propose huit projets, des filtres et la galerie historique dépliable. Voir `WEB-PROJECTS.md` pour les composants et les médias.
