# Référencement : Ruoss! Communication

Domaine canonique : https://www.ruosscommunication.com/. Hébergement GitHub Pages, HTTPS obligatoire et adresses avec slash final. Les déploiements Netlify restent arrêtés.

## Intentions et pages

| Recherche | Page principale | Preuves et liens |
| --- | --- | --- |
| Agence web Verbier, agence web Val de Bagnes | Accueil | Présentation du studio, accès au service web, Joshua Ruoss, Bikeverbier, Carron + Deslarzes |
| Création de site internet Verbier, création et refonte de site en Valais | `/services/creation-site-internet-valais/` | Réalisations locales avec liens HTML, galerie interactive, processus et questions pratiques |
| Graphiste Verbier, graphiste Valais, identité visuelle et 3D | `/services/graphisme-branding-valais/` | NIRLAB, 908 Devices et autres identités |
| Formation IA Valais | `/services/formation-ia-valais/` | Programme et forfait confirmé |
| Solutions IA pour entreprises | `/services/solutions-ia-entreprise/` | Approches locales et cloud |
| Ruoss Communication, Guillermo Ruoss | Accueil et `/studio/` | Identité du studio, services et coordonnées |

Les pages existantes sont renforcées sans créer de pages locales interchangeables. Les expressions prioritaires apparaissent dans les titres et les textes utiles. Les liens vers les réalisations existent dans le HTML initial, y compris en complément de la galerie WebGL. Les données et chiffres privés Search Console restent hors du dépôt public.

## Indexation et identité

- Titres, descriptions, H1 et canoniques propres à chaque page.
- Entités JSON-LD reliées : studio `/#studio`, site `/#website`, pages `#webpage` et prestations `#service`. Aucun avis agrégé ou résultat commercial inventé.
- Profil Maps officiel relié à l’identité du studio. Le bouton d’avis utilise le lien fourni par Google Business Profile.
- `robots.txt` annonce `/sitemap-index.xml`. Merci, 404 et l’ancienne route `/projects/` sont exclus du sitemap.
- `/projects/` conserve une redirection HTML immédiate vers `/projects-2/`, adaptée à l’hébergement statique ; elle ne doit pas être présentée comme une redirection serveur 301.
- `llms.txt` reste un annuaire complémentaire, sans promesse de citation ou de classement.

## Images et vérification

`node scripts/prepare-site-images.mjs` génère les variantes WebP et `src/data/responsive-images.json` depuis les sources existantes. Les originaux restent intacts. Les cartes projets, logos clients, miniatures de services et portraits utilisent les tailles adaptées avec dimensions explicites. Le build n’effectue pas cette régénération.

Contrôler le rendu mobile et bureau, le HTML initial, les liens, les données structurées, les canoniques et les fichiers du sitemap avant publication. Après publication, vérifier les réponses HTTPS et demander la réexploration des pages prioritaires dans Search Console. Distinguer demande d’indexation acceptée, page indexée et évolution des positions.

Références : [principes SEO Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [titres dans les résultats](https://developers.google.com/search/docs/appearance/title-link), [liens explorables](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), [visibilité locale](https://support.google.com/business/answer/7091?hl=fr).
