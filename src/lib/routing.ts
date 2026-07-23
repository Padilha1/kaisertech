import type { Locale } from "./i18n";

export type RouteKind = "home" | "service" | "case" | "privacy";

export type AppRoute = {
  kind: RouteKind;
  locale: Locale;
  index?: number;
};

export const siteUrl = "https://kaisertec.com.br";

export const localePaths: Record<Locale, string> = {
  pt: "/pt-BR",
  en: "/en",
  de: "/de-DE",
};

export const routeSegments = {
  pt: {
    services: "solucoes",
    cases: "cases",
    privacy: "politica-de-privacidade",
  },
  en: {
    services: "solutions",
    cases: "cases",
    privacy: "privacy-policy",
  },
  de: {
    services: "loesungen",
    cases: "cases",
    privacy: "datenschutz",
  },
} as const;

export const serviceSlugs: Record<Locale, string[]> = {
  pt: [
    "software-sob-medida",
    "integracoes-sob-medida",
    "refatoracoes-de-legado",
    "otimizacao-de-infraestrutura",
    "refatoracao-de-codigo",
    "performance-de-banco-de-dados",
    "finops",
  ],
  en: [
    "custom-software",
    "custom-integrations",
    "legacy-refactoring",
    "infrastructure-optimization",
    "code-refactoring",
    "database-performance",
    "finops",
  ],
  de: [
    "massgeschneiderte-software",
    "massgeschneiderte-integrationen",
    "legacy-refactoring",
    "infrastruktur-optimierung",
    "code-refactoring",
    "datenbank-performance",
    "finops",
  ],
};

export const caseSlugs: Record<Locale, string[]> = {
  pt: ["acipg-bolao", "s4-treinamentos", "routini", "amicord"],
  en: ["acipg-bolao", "s4-treinamentos", "routini", "amicord"],
  de: ["acipg-bolao", "s4-treinamentos", "routini", "amicord"],
};

export const parseRoute = (pathname: string): AppRoute => {
  const parts = pathname.split("/").filter(Boolean);
  const localePart = parts[0]?.toLowerCase();
  const locale: Locale = localePart === "en" ? "en" : localePart === "de-de" ? "de" : "pt";
  const offset = localePart === "en" || localePart === "pt-br" || localePart === "de-de" ? 1 : 0;
  const section = parts[offset];
  const slug = parts[offset + 1];

  if (section === routeSegments[locale].privacy) {
    return { kind: "privacy", locale };
  }

  if (section === routeSegments[locale].services && slug) {
    const index = serviceSlugs[locale].indexOf(slug);
    if (index >= 0) return { kind: "service", locale, index };
  }

  if (section === routeSegments[locale].cases && slug) {
    const index = caseSlugs[locale].indexOf(slug);
    if (index >= 0) return { kind: "case", locale, index };
  }

  return { kind: "home", locale };
};

export const getHomePath = (locale: Locale) => `${localePaths[locale]}/`;

export const getServicePath = (locale: Locale, index: number) =>
  `${localePaths[locale]}/${routeSegments[locale].services}/${serviceSlugs[locale][index]}`;

export const getCasePath = (locale: Locale, index: number) =>
  `${localePaths[locale]}/${routeSegments[locale].cases}/${caseSlugs[locale][index]}`;

export const getPrivacyPath = (locale: Locale) => `${localePaths[locale]}/${routeSegments[locale].privacy}`;

export const getRoutePath = (route: AppRoute, targetLocale = route.locale) => {
  if (route.kind === "service" && typeof route.index === "number") return getServicePath(targetLocale, route.index);
  if (route.kind === "case" && typeof route.index === "number") return getCasePath(targetLocale, route.index);
  if (route.kind === "privacy") return getPrivacyPath(targetLocale);
  return getHomePath(targetLocale);
};
