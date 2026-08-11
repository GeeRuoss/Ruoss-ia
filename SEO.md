# SEO ruosscommunication.com

Règle d'or : la refonte ne doit rien casser. Les URLs du site Framer sont conservées à l'identique
(`/projects-2`, `/projects/<slug>`, pas d'extension).

## Meta par page
Titres et descriptions repris du site live (voir chaque page Astro). Domaine canonique : `https://www.ruosscommunication.com` (www).

## Données structurées
JSON-LD `ProfessionalService` + `LocalBusiness` sur toutes les pages (Layout.astro) : adresse Verbier,
géo, fondateur, offres (4 services), sameAs Instagram/Behance.

## IA / LLM
- `public/llms.txt` : fiche complète du studio pour les moteurs IA.
- `public/robots.txt` : tous les bots IA autorisés (GPTBot, ClaudeBot, Perplexity, etc.).

## Sitemap
`@astrojs/sitemap` → `/sitemap-index.xml`, référencé dans robots.txt et le `<head>`. `/merci` en noindex.

## À faire au moment du switch DNS
1. Vérifier la Search Console (propriété existante Framer).
2. Soumettre le sitemap.
3. Contrôler que les 10 URLs répondent 200 (pas de redirects internes).
