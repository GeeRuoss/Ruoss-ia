# Design system ruosscommunication.com

Extrait du site Framer en live (CSS calculé réel, sondé au viewport 1440px). Reproduit dans `src/styles/global.css`.

## Police (1 seule famille)
| Rôle | Police | Détail |
|---|---|---|
| Tout le site | **Inter** (variable, self-hostée) | 400 corps, 500 UI/nav/leads, 600 display |

Le « R! » script (logo) et les 5 étoiles des avis sont des SVG, pas de la typo : `public/brand/`.

## Échelle typographique (desktop 1440px, fluide via clamp())
| Élément | Taille @1440 | Graisse | Line-height | Letter-spacing |
|---|---|---|---|---|
| Hero « Ruoss! » | ~164px (11.4vw) | 600 | 1.2 | -6% |
| H2 sections (Projets., Services., …) | 144px | 600 | 0.92 | -6% |
| Wordmark footer | ~195px | 600 | 0.9 | -6% |
| Titres cartes/services | 24px | 500 | 1.2 | -3% |
| Eyebrow (● + texte) | 16px | 500 | 1.4 | -4% |
| Corps | 15-16px | 400 | 1.4-1.55 | normal |
| Compteurs | ~100px | 600 | 1 | -6% |

## Couleurs
| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#f5f5f5` | Fond de page clair |
| `--ink` | `#0a0a0a` | Texte, boutons noirs |
| `--dark` | `#121212` | Panneaux sombres (hero, services, contact) |
| `--white` | `#ffffff` | Cartes, texte sur sombre |
| `--gray` | `#999999` | Eyebrows, texte secondaire |
| `--veil` | `rgba(46,46,46,0.5)` | Voile sur la vidéo |
| étoiles avis | `rgb(251,152,38)` | SVG stars |
| pastille WhatsApp | vert `#2bde5b` | Bouton « Whatsapp-moi ! » |

## Composants signature
- **Panneaux « sheet »** : sections sombres à coins arrondis (~20px) posées sur le fond clair, avec la **vidéo N/B des télésièges** (`public/video/hero.mp4`) + voile sombre. Hero, Services (page), « Prenons un verre. ».
- **Cartes projets** : barre blanche (nom + /année + ⋯) au-dessus du visuel assombri avec logo blanc centré.
- **Boutons pilule** : noir/blanc, `border-radius: 999px`. Variante avec pastille (verte WhatsApp, blanche submit).
- **Eyebrow** : pastille noire avec flèche ↗ + libellé, systématique en tête de section.
- **Croix « + »** : décorations grises aux articulations du layout (hero, footer, contact).
- **Compteurs animés** : 112 clients / 5 ans / 50+ pays, comptés au scroll (IntersectionObserver).
- **Fondateur** : carte blanche photo + « Fondateur / Guillermo Ruoss » + bouton WhatsApp, présente hero + contact.

## Vidéo
Une seule vidéo (7.4 Mo, boucle N/B télésièges) partout : hero home, fond Services (page), fond « Prenons un verre. ». `object-fit: cover` + `filter: grayscale(1)`.

## Responsive
Breakpoints Framer : 1200px et 810px. Mobile : tout empilé, nav → burger overlay sombre.
