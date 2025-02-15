import type { Link } from "../types";

export const SITE = {
  title: "Equilibrio Vital",
  description:
    "Equilibrio Vital es un espacio digital pensado para difundir conocimientos, experiencias y novedades en el ámbito de las terapias alternativas y el bienestar integral.",
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
    text: "Noticias",
  },
  {
    href: "/categories/eventos",
    text: "Eventos",
  },
  {
    href: "/categories/personalidades",
    text: "Personalidades",
  },
  {
    href: "/categories/testimonios",
    text: "Testimonios",
  },
  {
    href: "/categories/health",
    text: "Health",
  },
  {
    href: "/categories/finance",
    text: "Finance",
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
    href: "https://twitter.com",
    text: "Twitter",
    icon: "newTwitter",
  },
  {
    href: "https://www.facebook.com",
    text: "Facebook",
    icon: "facebook",
  },
];
