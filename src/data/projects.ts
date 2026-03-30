export type Project = {
  slug: string;
  href: string;
  title: string;
  description: string;
  period: string;
  imageAlt: string;
  imageSrc?: string;
  /** Показывать карточку как «в разработке»: заглушка, без перехода в кейс */
  inDevelopment?: boolean;
  hoverImages?: {
    main: string;
    left?: string;
    right?: string;
  };
  tags: {
    label: string;
    variant: "work" | "device";
  }[];
};

export const projects: Project[] = [
  {
    slug: "admin-service",
    href: "/projects/admin-service",
    title: "Сервис администрирования",
    description:
      "Единая точка управления продуктами команды корпоративного поиска",
    period: "июль — сентябрь 2025",
    imageAlt: "Сервис администрирования",
    imageSrc: "/the-administration-system.png",
    tags: [
      { label: "GPN", variant: "work" },
      { label: "WEB", variant: "device" },
    ],
  },
  {
    slug: "service-dd",
    href: "/projects/ServiceDD",
    title: "Сервис ДД",
    description:
      "Внутренний сервис для юристов и финансистов, который позволяет анализировать и сопоставлять договорные документы с правилами заполнения",
    period: "2025 - наст. вр",
    imageAlt: "Сервис ДД",
    hoverImages: {
      main: "/service-doc.png",
    },
    tags: [
      { label: "GPN", variant: "work" },
      { label: "WEB", variant: "device" },
    ],
  },
  {
    slug: "design-system",
    href: "/projects/DesignSystem",
    title: "Consta",
    description: "Дизайн-система компании «Газпром нефть»",
    period: "2022 - наст. вр",
    imageAlt: "Consta",
    inDevelopment: true,
    hoverImages: {
      main: "/Consta.png",
    },
    tags: [
      { label: "GPN", variant: "work" },
      { label: "WEB", variant: "device" },
    ],
  },
  {
    slug: "arc",
    href: "/projects/arc",
    title: "profit architect",
    description:
      "Телеграм бот для инвестиций в криптовалюты и заработка с рефрельной программы",
    period: "2026",
    imageAlt: "profit architect",
    imageSrc: "/Arc.png",
    inDevelopment: true,
    tags: [
      { label: "FREELANCE", variant: "work" },
      { label: "MOB", variant: "device" },
    ],
  },
  {
    slug: "material-search",
    href: "/projects/material-search",
    title: "Поиск по материалам",
    description:
      "Внутренний сервис для работы с нормативно-справочной информацией предприятия",
    period: "2022 - 2025",
    imageAlt: "Поиск по материалами",
    hoverImages: {
      main: "/Search-NSI.png",
    },
    tags: [
      { label: "GPN", variant: "work" },
      { label: "WEB", variant: "device" },
    ],
  },
  {
    slug: "corp-search",
    href: "/projects/corp-search",
    title: "Единое поисковое окно компании",
    description:
      "Внутренний сервис для всех сотрудников компании, который позволяет выполнять поиск по внутренним информационным ресурсам «Газпром нефти»",
    period: "2022 - 2024",
    imageAlt: "Единое поисковое окно компании",
    hoverImages: {
      main: "/Korp-Search.png",
    },
    tags: [
      { label: "GPN", variant: "work" },
      { label: "WEB", variant: "device" },
    ],
  },
];

