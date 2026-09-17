# ruoss-communication (Ruoss-ia)

Refonte du site du studio ruosscommunication.com : migration Framer → Astro, puis positionnement web, IA et design (septembre 2026).
Le site vit sur main. Domaine canonique : https://www.ruosscommunication.com (hébergé sur Netlify).

## Stack
- Astro statique, zéro framework JS. Inter Variable self-hostée (fontsource).
- Tokens design dans `src/styles/global.css` (source : DESIGN.md).
- Contenu centralisé : `src/data/site.ts` (global) et `src/data/projects.ts` (études de cas).
- Contact : préparation locale du message WhatsApp ; lien e-mail direct en complément.

## Règles
1. Jamais déployer sans validation de Guillermo.
2. Préserver le positionnement web/formation IA/solutions IA et les pages de services ajoutées le 17 septembre 2026.
3. Images : noms hashés d'origine Framer dans `public/img/`, mapping sémantique dans les data files.
4. `npm run dev -- --port 4322` (4321 = bikeverbier).

## Références
- DESIGN.md : tokens et composants extraits du site live.
- CONTENU.md : copy complet + coquilles à arbitrer.
- SEO.md : meta, JSON-LD, llms.txt, robots IA.
