// Études de cas — contenu du site live, une entrée par projet.

export interface CaseStudy {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  year: string;
  industry: string;
  services: string;
  duration: string;
  challengesLabel: string; // « Challenges », « L'esprit »…
  challengesTitle?: string;
  challenges: string[];
  linkLabel: string;
  linkHref: string;
  closingLabel?: string;
  closingTitle?: string;
  closing?: string[];
  gallery: string[]; // ordre du site live ; [0] et [1] côte à côte, le reste pleine largeur
}

const img = (f: string) => `/img/${f}`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'nirlab',
    name: 'NIRLAB SA',
    metaTitle: 'NIRLAB SA | Projet Design Verbier | Ruoss!',
    metaDescription:
      "Découvrez le projet NIRLAB SA réalisé par Ruoss! Communication, studio de design à Verbier. Direction artistique, logo, charte graphique, app design, site web et 3D.",
    intro: [
      "NIRLAB SA est une entreprise suisse fondée en 2018, issue de l'Institut de sciences forensiques de Lausanne.",
      "Elle accompagne les forces de l'ordre grâce à un dispositif NIR portatif de pointe, dédié à l'identification et à la quantification rapides de substances illicites. Reliée à une plateforme cloud hautement sécurisée, la solution NIRLAB convertit les données de terrain en renseignements fiables et directement exploitables pour les opérations de lutte contre le trafic de stupéfiants.",
    ],
    year: '2025',
    industry: 'Innovation',
    services: 'Direction artistique / Logo / Charte graphique / App design / Site Web / Modelisation 3D / Rendu 3D',
    duration: 'Indéterminé',
    challengesLabel: 'Challenges',
    challenges: [
      "La mise à jour de la charte graphique est prévue pour début 2026. Le positionnement international de l'entreprise a représenté un défi exigeant et stimulant, que nous avons relevé avec plaisir aux côtés de la jeune équipe dynamique de NIRLAB.",
      "Cette collaboration nous permet de développer une communication globale cohérente, capable de s'adapter à des contextes culturels et opérationnels variés, tout en conservant une identité forte et lisible à l'échelle mondiale.",
    ],
    linkLabel: 'vers le site web',
    linkHref: 'https://nirlab.com',
    closingLabel: 'En route vers le futur !',
    closing: [
      "Ce projet s'inscrit pour nous dans une collaboration solide et durable, fondée sur la confiance, l'exigence et une vision partagée.",
      "Accompagner NIRLAB dans son développement international, sur des enjeux technologiques et institutionnels forts, représente un travail structurant et stimulant, que nous poursuivons avec engagement et cohérence dans le temps.",
    ],
    gallery: [
      'lP13y08cvm6JxlakO38ENxW9FoE.jpg',
      'SYPYLbVYDLEnKSqEegKF0lqLZo.jpg',
      'EfOQGK0iIeUF8cZulPGtsesxSc.jpg',
      'mnvBBOHt0sfmMmx9z6aQugmEiI4.jpg',
      'vow6sPMLGObX5YF8bXjWwtsMo.jpg',
      'Ih8b31z7p5Ahlr6cKAqyZ57xT8.jpg',
      'QGh7RMBf6pTdV62foVjbzGkdMUI.jpg',
      'F6Annm6glWls4IM0vCwdEO6aq8.jpg',
      'gIEE9L5q5z1ZXG47u2TwW1FYoDQ.jpg',
      'IVuA1PXFWyz4OvBlzKevkLEbY.jpg',
      'hYmqMtNn9voNBbCKl6cZw5968.jpg',
    ].map(img),
  },
  {
    slug: 'domaine-du-raffort',
    name: 'Domaine du Raffort',
    metaTitle: 'Domaine du Raffort | Projet Design Verbier | Ruoss!',
    metaDescription:
      "Découvrez le projet Domaine du Raffort réalisé par Ruoss! Communication, studio de design à Verbier. Logo, charte graphique et création d'étiquettes.",
    intro: [
      "Mon histoire s'inscrit dans celle des Forains du Val de Bagnes, ces montagnards qui descendaient en plaine pour cultiver leurs vignes avant de remonter. Une tradition de va-et-vient entre terre et altitude, travail et liberté, enracinement et mouvement.",
    ],
    year: '2024',
    industry: 'Viticulture',
    services: "Logo / Charte Graphique / Création d'étiquettes",
    duration: 'Indéterminé',
    challengesLabel: "L'esprit",
    challengesTitle: 'Des étiquettes comme des œuvres en mouvement.',
    challenges: [
      "Le défi consistait à créer une identité fidèle au travail de Bastien Dorsaz et à l'esprit du Domaine du Raffort. Le logo devait rester sobre et durable, tandis que les étiquettes, pensées comme de petites œuvres à l'esthétique picturale, devaient évoluer au rythme des saisons tout en conservant cohérence et lisibilité.",
    ],
    linkLabel: 'Vers le site',
    linkHref: 'https://domaine-du-raffort.ch',
    closingLabel: 'Santé !',
    closingTitle: 'Un design qui accompagne le vin, sans le figer.',
    closing: [
      "Le projet aboutit à une identité sensible et évolutive, où le logo structure l'ensemble et les étiquettes traduisent le temps et la matière. Une approche où le design soutient l'artisanat et l'ancrage local, tout en laissant place à l'émotion et à l'interprétation.",
    ],
    gallery: [
      'rQEDxm0bFTPdo6Wn9y3QBYqtuU.jpg',
      'x4iYblxoP84sezqLooMLBwT7SNo.jpg',
      'T8AoJ5xoMZkrNHCIPxPGghB8.jpg',
      'rGsKdYyYk7UGwZVqbzwXI7LuZY.jpg',
      'sMz16Tir303bfNKIPDQ2OFdc.jpg',
      'DcpcHu2ePKv45kvw7Lc9a1MDg.jpg',
      'ccRxxla8vJlHZGDl3AzlNVhqg.jpg',
      '1l3ZcQILHZ3NDfPYYMakbYjcfMs.jpg',
    ].map(img),
  },
  {
    slug: 'le-catogne',
    name: 'Le Catogne',
    metaTitle: 'Le Catogne | Projet Design Verbier | Ruoss!',
    metaDescription:
      'Découvrez le projet Le Catogne réalisé par Ruoss! Communication, studio de design à Verbier. Logo et direction artistique pour le restaurant de Verbier.',
    intro: [
      "Pour le restaurant du Catogne à Verbier, le projet consistait à retravailler le logo et la signalétique extérieure en respectant l'identité du lieu. L'objectif était de renforcer la lisibilité et la présence du restaurant sans altérer son caractère montagnard et authentique. Le panneau en vieux bois a été pensé comme une continuité naturelle de l'architecture existante, tandis que le logo a été simplifié pour fonctionner aussi bien sur le bâtiment que sur les supports de communication. Une intervention mesurée, ancrée dans le contexte local.",
    ],
    year: '2024',
    industry: 'Restauration',
    services: 'Logo / Direction artistique',
    duration: '1 mois',
    challengesLabel: 'Challenges',
    challenges: [
      "Le principal défi résidait dans l'équilibre entre tradition et lisibilité contemporaine. Le logo devait rester sobre, efficace et visible à distance, tout en conservant une identité chaleureuse. Le travail sur le panneau en vieux bois impliquait de composer avec la matière, ses irrégularités et son vieillissement naturel.",
      "Chaque choix graphique devait dialoguer avec le support et l'environnement, sans surinterprétation ni effets superflus, afin de préserver l'authenticité du lieu.",
    ],
    linkLabel: 'Vers le site',
    linkHref: 'https://www.restaurantlecatogne.ch',
    closingLabel: 'Conclusion',
    closing: [
      "Le projet aboutit à une identité discrète mais cohérente, intégrée à son environnement. Le logo et la signalétique renforcent la présence du restaurant tout en respectant son architecture et son histoire.",
      "Ce travail illustre une approche du design centrée sur le contexte, la durabilité et l'usage, où la forme sert avant tout le lieu et son ancrage local.",
    ],
    gallery: [
      'i0yZxtEdVpKDa6YZKlgfywUgjOY.jpg',
      'rkVggiNSSKS6NZlr9nkZtX7Xg.jpg',
      'r6Hg18YbPKGjThoWcZ8imEAP4.jpg',
      'Y9INoYUDJfzDG2ojHe4Q56lhY.jpg',
      'eCPU2UCAg2vWPtCcFTW0jVLAqMM.jpg',
      'vNEo5M2ScHkY8c49oAQHyHYrAsc.jpg',
      'b4Iy8uiJTIxQDO11JqdsnkLgd70.jpg',
      'voavumyqpZ4u7kzkTOCw0VwDLGg.jpg',
      'p2hVe6LoH2clN1qfcT2tcV6WNIM.jpg',
      'Ax1YppVDihdghlKvAYGpwcbGkXA.jpg',
    ].map(img),
  },
  {
    slug: 'skipatrol-verbier',
    name: 'Skipatrol Verbier',
    metaTitle: 'Skipatrol Verbier | Projet Design Verbier | Ruoss!',
    metaDescription:
      'Découvrez le projet Skipatrol Verbier réalisé par Ruoss! Communication, studio de design à Verbier. Logo, photographie et design d’auto-collants.',
    intro: [
      "Les Patrouilleurs de Verbier sont ceux qui veillent sur le domaine, guident, sécurisent et connaissent chaque piste dans ses moindres détails. Présents par tous les temps, ils incarnent la maîtrise du terrain, l'engagement et la confiance.",
    ],
    year: '2025',
    industry: 'Sécurité / Sauvetage',
    services: 'Logo / Photographie / Design auto-collants',
    duration: '3 semaines',
    challengesLabel: 'Challenges',
    challenges: [
      "Le défi était de concevoir un logo abstrait, ouvert à plusieurs lectures.",
      "La forme devait pouvoir évoquer à la fois un lever de soleil, une explosion ou une étoile, tout en restant simple, lisible et identifiable. L'enjeu consistait à créer un symbole fort sans imposer une interprétation unique.",
    ],
    linkLabel: 'Téléverbier.ch',
    linkHref: 'https://verbier4vallees.ch/fr',
    gallery: [
      '1aNBz6OHulTp3IunAt8E8Ixvg9M.jpg',
      'CasH05CJW7vUzBX1q5CUfQL5Ao.jpg',
      'qnzGF3eJYYlOPmypKv1VT7axQ.jpg',
      '4Vnz7w6s6nkQ41SmCaqEqZuTIY.jpg',
      'DAjhAQMzRgpdgXrepLaFKmARII.jpg',
      'uDmoDgSBiLiVv8moz5BncXvzzQ.jpg',
      'uBP8V2Oguqo0bli8VbDhGdFnGg.jpg',
      '6qpUpi5B8JbRK4tupn42qKezNQ8.jpg',
      '8ajRjZMdA1hpxHb2ZXI8rJfvaIM.jpg',
    ].map(img),
  },
  {
    slug: 'bikeverbier',
    name: 'Bikeverbier.ch',
    metaTitle: 'Bikeverbier.ch | Projet Design Verbier | Ruoss!',
    metaDescription:
      'Découvrez le projet Bikeverbier.ch réalisé par Ruoss! Communication, studio de design à Verbier. Site web, logo et identité graphique.',
    intro: [
      "Bikeverbier.ch est une plateforme de guides VTT locaux basés à Verbier, spécialisée dans l'organisation de sorties à vélo dans les environs de Verbier ainsi qu'au Népal, adaptées à tous les niveaux du débutant au cycliste expérimenté avec une connaissance intime des sentiers et traditions alpines.",
    ],
    year: '2025',
    industry: 'Guides et Loisirs',
    services: 'Site web / Logo / Identité Graphique',
    duration: 'Indéfini',
    challengesLabel: 'Challenges',
    challenges: [
      "L'identité graphique de BikeVerbier s'éloigne des codes évidents du VTT et de la montagne. Elle réinterprète l'edelweiss, symbole alpin fort, de manière contemporaine et minimale, sans folklore. Une écriture visuelle pensée pour durer, ancrée dans le territoire sans en reproduire les clichés.",
    ],
    linkLabel: 'www.bikeverbier.ch',
    linkHref: 'https://www.bikeverbier.ch/#hero',
    closingLabel: 'Pensées Finales',
    closing: [
      "Dès la première saison, la charte graphique et la communication globale ont permis à BikeVerbier de trouver ses premiers clients et d'asseoir sa visibilité, malgré une concurrence particulièrement rude.",
    ],
    gallery: [
      'WSYhLDsU5KIKqYDhYFLG3funM.jpg',
      '9cM8Fiu0u6e5Qv8AdF1c2Fypq4.jpg',
      'QgDCFxH3IkTy7qUy8OPXPkQmQM.jpg',
      'hF7DQCvir7sum4wraUSh7eGEubg.jpg',
      '11n8TvTJCg8fA4eX7WNZL5mJV30.jpg',
      'fvke0td01gvMWaldtLP3NwpuA.jpg',
      'nLbQcH5q9lWEXha1J8rnA8VPlY.jpg',
      '8k2MJoF5mkH2CkG82AepB3XH9Dw.jpg',
    ].map(img),
  },
];
