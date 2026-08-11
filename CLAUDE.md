# ruoss-communication (Ruoss-ia)

Refonte du site du studio ruosscommunication.com : migration Framer → Astro, pixel perfect.
Le site vit sur main. Domaine canonique : https://www.ruosscommunication.com (pas encore branché).

## Stack
- Astro statique, zéro framework JS. Inter Variable self-hostée (fontsource).
- Tokens design dans `src/styles/global.css` (source : DESIGN.md).
- Contenu centralisé : `src/data/site.ts` (global) et `src/data/projects.ts` (études de cas).
- Formulaires : Formsubmit vers guillermo@ruosscommunication.com (à activer au 1er envoi réel).

## Règles
1. Jamais déployer sans validation de Guillermo.
2. Copy du site live reproduit tel quel (coquilles connues listées dans CONTENU.md).
3. Images : noms hashés d'origine Framer dans `public/img/`, mapping sémantique dans les data files.
4. `npm run dev -- --port 4322` (4321 = bikeverbier).

## Références
- DESIGN.md : tokens et composants extraits du site live.
- CONTENU.md : copy complet + coquilles à arbitrer.
- SEO.md : meta, JSON-LD, llms.txt, robots IA.
