// Données globales du site. Une seule source de vérité (cf. CONTENU.md).

export const SITE = {
  name: 'Ruoss! Communication',
  domain: 'https://www.ruosscommunication.com',
  phoneDisplay: '077 450 67 26',
  phoneHref: 'tel:+41774506726',
  whatsapp: 'https://wa.me/41774506726',
  email: 'guillermo@ruosscommunication.com',
  instagram: 'https://www.instagram.com/ruoss_communication/',
  behance: 'https://www.behance.net/guillermoruoss1',
  reviewLink: 'https://www.google.com/search?q=Ruoss!+Communication',
  founder: 'Guillermo Ruoss',
} as const;

export const NAV = [
  { label: 'Studio', href: '/studio' },
  { label: 'Projets', href: '/projects-2' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
] as const;

// Compteurs animés (valeurs finales du site live).
export const COUNTERS = [
  { value: 112, suffix: '', label: 'Clients accompagnés depuis 2021' },
  { value: 5, suffix: 'ans', label: "d'expérience et d'évolutions à votre service" },
  { value: 50, suffix: '+', label: 'Le nombre de pays ou nos designs vivent' },
] as const;

export interface ProjectCard {
  slug: string;
  name: string;
  year: string;
  logo: string; // logo blanc posé sur l'image
  cover: string; // image de fond assombrie
  logoWidth: number; // largeur d'affichage du logo (px @1440)
}

// Cartes projets (ordre de la home).
export const PROJECTS: ProjectCard[] = [
  { slug: 'nirlab', name: 'NIRLAB SA', year: '2025', logo: '/img/ADfrW50QkoLAl8YIMa49LzQULE.png', cover: '/img/cuBte4dkgRgFCuNCb7XiBpahAhg.jpg', logoWidth: 200 },
  { slug: 'domaine-du-raffort', name: 'Domaine du Raffort', year: '2024', logo: '/img/FsptT7kYVDBDNzjhqitmHUrgOQ.png', cover: '/img/mNUjuUgH99v2d3OIKeh7J5k15RU.jpg', logoWidth: 150 },
  { slug: 'le-catogne', name: 'Le Catogne', year: '2024', logo: '/img/qnzGYUfbDN5EBTMuGlG4RTYYV8.png', cover: '/img/gaHGBIuuoAv4HTdZciH5le6pnM.jpg', logoWidth: 210 },
  { slug: 'skipatrol-verbier', name: 'Skipatrol Verbier', year: '2025', logo: '/img/eGbci3iuwvOb9hxYbBp5cLRqQ.png', cover: '/img/QoTnY5PP6N3Bf8OA7WzU9Z9Mw.jpg', logoWidth: 190 },
  { slug: 'bikeverbier', name: 'Bikeverbier.ch', year: '2025', logo: '/img/Xu1uqs9y0udWytU4DPCEGCuIfus.png', cover: '/img/gPgftrAGsKYEwr63438RZIvsdoo.jpg', logoWidth: 240 },
];

// Sixième carte : collage « Autres projets », sans page dédiée.
export const OTHER_PROJECTS_CARD = {
  name: 'Autres projets',
  year: '2020-2026',
  logo: '/img/x96avzzcOIT6YM6qcNzygWIz0k.png',
  cover: '/img/veRzjIfpXnrUF0XpDYnksEPMs.jpg',
  logoWidth: 260,
};

export interface Service {
  num: string;
  title: string;
  desc: string;
  tagLabel: 'Categories' | 'Services';
  tags: string[];
  tiles: string[]; // vignettes empilées
}

export const SERVICES: Service[] = [
  {
    num: '(001)',
    title: 'Formation IA',
    desc: "Des formations pensées pour rendre les équipes autonomes avec l'intelligence artificielle, sur leurs vrais cas métier et au service de leur productivité.",
    tagLabel: 'Categories',
    tags: ['Agents IA sur mesure', 'Productivité au quotidien', 'Formation en entreprise', 'Bons réflexes & données', "Cas d'usage métier"],
    tiles: ['/img/AJRl3xcIDVMdSDmwpm9LfszmMkw.webp', '/img/VXpQonqJjWFrwAoUQbKVCkYuHg.jpg', '/img/tlJTX5Ux18kUx3r8ndlVe55ZE7s.png'],
  },
  {
    num: '(002)',
    title: 'Logo & Branding',
    desc: 'Identités de marque stratégiques conçues pour clarifier le positionnement, renforcer la reconnaissance et assurer une cohérence durable.',
    tagLabel: 'Services',
    tags: ['Création de logo sur mesure', 'Identité visuelle complète', 'Illustration', 'Direction artistique globale', 'Rebranding & repositionnement de marque', 'Chartes graphiques (print & digital)'],
    tiles: ['/img/1aNBz6OHulTp3IunAt8E8Ixvg9M.jpg', '/img/Cq0gHsa8HW5KX7IapBrtFJESTE.jpg', '/img/hghbpIDZCx1nXzMeQEYH5p1r2mo.jpg'],
  },
  {
    num: '(003)',
    title: 'Sites internet',
    desc: 'Sites centrés utilisateur, pensés pour transmettre des messages clairs, offrir une navigation fluide et générer des résultats mesurables.',
    tagLabel: 'Categories',
    tags: ['Sites internet', 'Community management', 'UX & architecture de contenu', 'UI design', 'Maintenance & évolutions continues', 'Optimisation mobile & responsive'],
    tiles: ['/img/M84O8r2oa0Cn7cFcuoQW0uhlxY.jpg', '/img/7aTjPHDEIHlVgn0dR4LMop9ReE.jpg'],
  },
  {
    num: '(004)',
    title: 'Design avancé',
    desc: 'Solutions de design combinant 3D, produit, UX et UI pour créer des expériences fonctionnelles et impactantes.',
    tagLabel: 'Categories',
    tags: ['Design produit & prototypage', 'Modélisation 3D & rendus réalistes', "Design d'objets et concepts", 'Visualisation avancée & simulations', "Création d'affiches", 'Illustration'],
    tiles: ['/img/pUCS4TBS6MtRY9iQz9kl7OzjMB8.jpg', '/img/Udxjrd1L0GmN6XLWkogckkNO5p8.jpg', '/img/gRP7p0jTGCvMVpM0IsQNTg6VQ.jpg'],
  },
];

export const REVIEWS = [
  {
    name: 'Rosine',
    company: "L'Orpin Rose",
    avatar: '/img/nBuZLXDK015mGy3INQHggoX44MI.jpg',
    text: "Excellente collaboration avec Ruoss communication pour le lancement de mon entreprise, tant sur l'identité graphique que les outils marketing. Je le recommande!",
  },
  {
    name: 'Morane',
    company: 'Graitriks Festival',
    avatar: '/img/fcWmHgZLGzVVccV0cu0zn0ifSbc.jpg',
    text: 'Le top, très bonne créativité, à l’écoute et réactif.',
  },
  {
    name: 'Bastien',
    company: 'Easyclean VS',
    avatar: '/img/gG3b2lEDNok5rncKU5TayUcQkE.jpg',
    text: 'Disponibilité rapide, à l’écoute des besoins et demandes, création avec une touche artistique parfaitement conforme aux attentes, en résumé simple, efficace, fiable.\nJe recommande !',
  },
] as const;

export const IMG = {
  founder: '/img/ZbRwx4kEaXsUTBjPn7KbT5YfXw.jpg',
  contactBg: '/img/vrhxHFTuxnCduP4nljUulqZcuQ.jpg',
  ogDefault: '/brand/og-default.jpg',
  studioParaglide: '/img/DmR27oMHcKTaN6e8jFll4jAGRac.jpg',
} as const;

// Logos clients (home, ordre du site live).
export const CLIENT_LOGOS = [
  '/img/Krhtyh7K3PzS4DEV53x0nrJOoSw.png',
  '/img/PKW63L4TLtHJ8Lo3NEeTM7uCKRQ.png',
  '/img/a9lekTXeLdaHkmVBEL3ACStnl2E.png',
  '/img/QSc7skDIUJwZphJfxBbjrH6epA.png',
  '/img/0ITDno1auLXslxalTdgDAsS5bE.png',
  '/img/SZYSJB7EiFcSEIYIjoHNDTNWk.png',
] as const;

// Partenaires (page studio, grille 3×3, ordre du site live).
export const STUDIO_PARTNERS = [
  '/img/kAtoKRr8r8RcUDoMzf66GdBGT5U.jpg',
  '/img/PKW63L4TLtHJ8Lo3NEeTM7uCKRQ.png',
  '/img/a9lekTXeLdaHkmVBEL3ACStnl2E.png',
  '/img/0ITDno1auLXslxalTdgDAsS5bE.png',
  '/img/QSc7skDIUJwZphJfxBbjrH6epA.png',
  '/img/SZYSJB7EiFcSEIYIjoHNDTNWk.png',
  '/img/ByElM14vOhI4BwHSnyAKMmorXU8.jpg',
  '/img/UJn5S8yYWl2eQQFJ6FMD9Yos.jpg',
  '/img/Ercnt8rikY5Cz0nMPMPD9Yabxe8.jpg',
] as const;
