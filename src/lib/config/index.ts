import type { Link } from "../types";

export const SITE = {
  title: "ElSaltoWeb.social",
  description:
    "Potenciamos tu marca con estrategias de redes sociales y automatizaciones inteligentes..",
  author: "Andrés Tobío",
  url: "https://astro-news-six.vercel.app",
  github: "https://github.com/Mrahmani71/astro-news",
  locale: "es-ES",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 4,
};

export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/categories/noticias",
    text: "Noticias y Tendencias",
  },
  {
    href: "/categories/recursos",
    text: "Herramientas",
  },
  {
    href: "/categories/estrategia",
    text: "Estrategia",
  },
  {
    href: "/categories/edicion",
    text: "Edición",
  },
  {
    href: "/categories/colaboraciones",
    text: "Colaboraciones",
  },
  {
    href: "/categories/automatizaciones",
    text: "Automatizaciones",
  },
];
export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "About us",
  },
  {
    href: "/authors",
    text: "Authors",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy",
  },
  {
    href: "https://astro-news-six.vercel.app/rss.xml",
    text: "RSS",
  },
  {
    href: "https://astro-news-six.vercel.app/sitemap-index.xml",
    text: "Sitemap",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com",
    text: "GitHub",
    icon: "github",
  },
  {
    href: "httpe://www.t.me",
    text: "Telegram",
    icon: "telegram",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
