import type { Link } from "../types";

export const SITE = {
  title: "ElSaltoWeb.social",
  description:
    "Potenciamos tu marca con estrategias de redes sociales y automatizaciones inteligentes..",
  author: "Andrés Tobío",
  url: "https://social.elsaltoweb.es",
  github: "https://github.com/AndrewUru",
  instagram: "https://www.instagram.com/elsaltoweb/",
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
    href: "/categories/automatizaciones",
    text: "Automatizaciones",
  },
  {
    href: "/categories/colaboraciones",
    text: "Colaboraciones",
  },
];
export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "Sobre Nosotros",
  },
  {
    href: "/precios",
    text: "Planes & Beneficios",
  },
  {
    href: "/authors",
    text: "Autores",
  },
  {
    href: "/contact",
    text: "Contacto",
  },
  {
    href: "/privacy",
    text: "Pólitica de Privacidad",
  },
  {
    href: "/terms",
    text: "Terminos y Condiciones",
  },
  {
    href: "/cookie-policy",
    text: "Pólitica de Cookies",
  },
  {
    href: "https://astro-news-six.vercel.app/rss.xml",
    text: "RSS",
  },
  {
    href: "https://astro-news-six.vercel.app/sitemap-index.xml",
    text: "Mapa del Sitio",
  },
];

export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://github.com/AndrewUru",
    text: "GitHub",
    icon: "github",
  },

  {
    href: "https://www.instagram.com/elsaltoweb/",
    text: "Instagram",
    icon: "instagram",
  },
  {
    href: "https://www.linkedin.com/in/andr%C3%A9s-tob%C3%ADo-037b33241/",
    text: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://www.youtube.com/@ElSaltoWeb-rk9kc",
    text: "YouTube",
    icon: "youtube",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61559127094568",
    text: "Facebook",
    icon: "facebook",
  },
];
