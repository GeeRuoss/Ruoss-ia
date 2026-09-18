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
  reviewLink: 'https://g.page/r/CWjVRYSfhKvoEBM/review',
  maps: 'https://www.google.com/maps/place/Ruoss!+Communication/data=!4m2!3m1!1s0x0:0xe8ab849f8445d568',
  founder: 'Guillermo Ruoss',
} as const;

export const NAV = [
  { label: 'Graphisme & 3D', href: '/services/graphisme-branding-valais/' },
  { label: 'Web & développement', href: '/services/creation-site-internet-valais/' },
  { label: 'IA', href: '/services/intelligence-artificielle-valais/' },
  { label: 'Projets', href: '/projects-2/' },
  { label: 'Studio', href: '/studio/' },
  { label: 'Contact', href: '/contact/' },
] as const;

// Trois domaines : graphisme, développement web et IA.
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
  href: string;
  desc: string;
  tagLabel: 'Categories' | 'Services';
  tags: string[];
  tiles: string[]; // vignettes empilées
}

export const SERVICES: Service[] = [
  {
    num: '(001)', title: 'Graphisme & 3D',
    href: '/services/graphisme-branding-valais/',
    desc: 'Le cœur du studio. Logos, identités, affiches et images 3D : des créations dessinées à la main, avec une direction artistique singulière et le soin du détail.',
    tagLabel: 'Services',
    tags: ['Identité visuelle', 'Affiches & édition', 'Direction artistique', 'Modélisation & rendu 3D'],
    tiles: ['/img/1aNBz6OHulTp3IunAt8E8Ixvg9M.jpg', '/img/Cq0gHsa8HW5KX7IapBrtFJESTE.jpg', '/img/hghbpIDZCx1nXzMeQEYH5p1r2mo.jpg'],
  },
  {
    num: '(002)', title: 'Sites web & développement',
    href: '/services/creation-site-internet-valais/',
    desc: 'Création et refonte de sites internet à Verbier et en Valais : design sur mesure, référencement local, applications web et réservations, avec un interlocuteur pour tout le projet.',
    tagLabel: 'Services',
    tags: ['Sites sur mesure', 'Applications web', 'Réservations', 'Outils métier'],
    tiles: ['/img/M84O8r2oa0Cn7cFcuoQW0uhlxY.jpg', '/img/7aTjPHDEIHlVgn0dR4LMop9ReE.jpg'],
  },
  {
    num: '(003)', title: 'Intelligence artificielle',
    href: '/services/intelligence-artificielle-valais/',
    desc: 'Apprendre à utiliser l’IA ou développer une solution pour votre entreprise : formations, assistants et automatisations réunis dans un même accompagnement.',
    tagLabel: 'Services',
    tags: ['Formations pratiques', 'Assistants IA', 'Automatisations'],
    tiles: ['/img/AJRl3xcIDVMdSDmwpm9LfszmMkw.webp', '/img/VXpQonqJjWFrwAoUQbKVCkYuHg.jpg'],
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
