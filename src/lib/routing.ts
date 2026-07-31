import type { Locale } from "./i18n";

export type RouteKind = "home" | "service" | "case" | "privacy";

export type AppRoute = {
  kind: RouteKind;
  locale: Locale;
  index?: number;
};

export const siteUrl = "https://kaisertec.com.br";

export const localePaths: Record<Locale, string> = {
  pt: "/pt-br",
  en: "/en",
  de: "/de-de",
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

const localeAliases: Record<string, Locale> = {
  "pt-br": "pt",
  pt: "pt",
  en: "en",
  "de-de": "de",
  de: "de",
};

const validLocaleParts = new Set(Object.keys(localeAliases));

const normalizeSlug = (slug = "") => slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const findSlugIndex = (slugs: string[], slug: string) => {
  const exactIndex = slugs.indexOf(slug);
  if (exactIndex >= 0) return exactIndex;

  const normalizedSlug = normalizeSlug(slug);
  return slugs.findIndex((candidate) => normalizeSlug(candidate) === normalizedSlug);
};

const decodePathPart = (part: string) => {
  try {
    return decodeURIComponent(part);
  } catch {
    return part;
  }
};

export const parseRoute = (pathname: string): AppRoute => {
  const parts = pathname.split("/").filter(Boolean).map(decodePathPart);
  const localePart = parts[0]?.toLowerCase();
  const locale: Locale = localeAliases[localePart] ?? "pt";
  const offset = localePart && validLocaleParts.has(localePart) ? 1 : 0;
  const section = parts[offset];
  const slug = parts[offset + 1];
  const normalizedSection = normalizeSlug(section);

  if (normalizedSection === routeSegments[locale].privacy) {
    return { kind: "privacy", locale };
  }

  if (normalizedSection === routeSegments[locale].services && slug) {
    const index = findSlugIndex(serviceSlugs[locale], slug);
    if (index >= 0) return { kind: "service", locale, index };
  }

  if (normalizedSection === routeSegments[locale].cases && slug) {
    const index = findSlugIndex(caseSlugs[locale], slug);
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

export const getCanonicalPathForPathname = (pathname: string) => getRoutePath(parseRoute(pathname));
