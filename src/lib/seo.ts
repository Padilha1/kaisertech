import type { AppRoute } from "./routing";
import { getRoutePath, siteUrl } from "./routing";
import type { Locale, LocaleCopy } from "./i18n";

type SeoArgs = {
  canonicalUrl: string;
  route: AppRoute;
  t: LocaleCopy;
  servicePage: LocaleCopy["services"][number] | null;
  serviceCopy: LocaleCopy["servicePages"][number] | null;
  casePage: LocaleCopy["cases"][number] | null;
};

const setMetaContent = (selector: string, content: string) => {
  document.head.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
};

const ensureMeta = (selector: string, attributes: Record<string, string>) => {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement("meta");
    document.head.appendChild(meta);
  }

  Object.entries(attributes).forEach(([key, value]) => meta?.setAttribute(key, value));
};

const ensureLink = (selector: string, attributes: Record<string, string>) => {
  let link = document.head.querySelector<HTMLLinkElement>(selector);

  if (!link) {
    link = document.createElement("link");
    document.head.appendChild(link);
  }

  Object.entries(attributes).forEach(([key, value]) => link?.setAttribute(key, value));
};

const setStructuredData = (data: object) => {
  let script = document.head.querySelector<HTMLScriptElement>("#seo-jsonld");

  if (!script) {
    script = document.createElement("script");
    script.id = "seo-jsonld";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

const locales: Array<{ locale: Locale; hreflang: string }> = [
  { locale: "pt", hreflang: "pt-BR" },
  { locale: "en", hreflang: "en" },
  { locale: "de", hreflang: "de-DE" },
];

const areaServed = ["Brazil", "Germany", "DACH", "International"];
const socialImageUrl = `${siteUrl}/social-preview-og-whatsapp.webp`;
const twitterImageUrl = `${siteUrl}/social-preview-twitter.png`;
const socialImageAlt = "Kaiser Tech - Tire sua operação do improviso";
const maxSocialDescriptionLength = 125;
const privacySeo: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: "Política de Privacidade | Kaiser Tech",
    description:
      "Como a Kaiser Tech coleta, usa, compartilha e protege dados pessoais no site, considerando LGPD no Brasil e práticas aplicáveis a visitantes dos EUA.",
  },
  en: {
    title: "Privacy Policy | Kaiser Tech",
    description:
      "How Kaiser Tech collects, uses, shares and protects personal data on its website, considering Brazil's LGPD and visitors in the United States.",
  },
  de: {
    title: "Datenschutzerklaerung | Kaiser Tech",
    description:
      "Wie Kaiser Tech personenbezogene Daten auf der Website erhebt, nutzt, weitergibt und schuetzt, mit Hinweisen zu Brasilien und den USA.",
  },
};

const methodologySeo: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: "Metodologia para software sob medida | Kaiser Tech",
    description:
      "Como a Kaiser Tech diagnostica dores operacionais, mapeia processos, decide solução, executa engenharia e mantém sistemas confiáveis.",
  },
  en: {
    title: "Custom software methodology | Kaiser Tech",
    description:
      "How Kaiser Tech diagnoses operational pain, maps workflows, decides solutions, executes engineering and keeps systems reliable.",
  },
  de: {
    title: "Methodik fuer individuelle Software | Kaiser Tech",
    description:
      "Wie Kaiser Tech operative Probleme diagnostiziert, Prozesse abbildet, Loesungen entscheidet und verlaessliche Systeme baut.",
  },
};

const glossarySeo: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: "Glossário de software operacional | Kaiser Tech",
    description:
      "Definições curtas sobre software sob medida, integrações, rastreabilidade, legado, FinOps e performance de banco.",
  },
  en: {
    title: "Operational software glossary | Kaiser Tech",
    description:
      "Short definitions for custom software, integrations, traceability, legacy systems, FinOps and database performance.",
  },
  de: {
    title: "Glossar fuer operative Software | Kaiser Tech",
    description:
      "Kurze Definitionen zu individueller Software, Systemintegration, Nachvollziehbarkeit, Legacy, FinOps und Datenbank-Performance.",
  },
};

const diagnosticSeo: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: "Diagnóstico operacional para software sob medida | Kaiser Tech",
    description:
      "Checklist e matriz para decidir entre ferramenta pronta, automação, integração ou software sob medida em operações B2B.",
  },
  en: {
    title: "Operational diagnosis for custom software | Kaiser Tech",
    description:
      "Checklist and matrix to decide between off-the-shelf tools, automation, integration or custom software for B2B operations.",
  },
  de: {
    title: "Operations-Diagnose fuer individuelle Software | Kaiser Tech",
    description:
      "Checkliste und Matrix fuer Standardtool, Automatisierung, Integration oder individuelle Software in B2B-Operationen.",
  },
};

const clampSocialDescription = (description: string) => {
  if (description.length <= maxSocialDescriptionLength) return description;

  const clipped = description.slice(0, maxSocialDescriptionLength - 1);
  const lastSpace = clipped.lastIndexOf(" ");
  const trimmed = clipped.slice(0, lastSpace > 80 ? lastSpace : clipped.length).trim();

  return `${trimmed}…`;
};

export const syncSeo = ({ canonicalUrl, route, t, servicePage, serviceCopy, casePage }: SeoArgs) => {
  let pageTitle: string = t.seo.title;
  let pageDescription: string = t.seo.description;
  let socialDescription: string = t.seo.ogDescription;

  if (servicePage) {
    pageTitle = `${servicePage.title} | Kaiser Tech`;
    pageDescription = serviceCopy?.lead ?? servicePage.body;
    socialDescription = clampSocialDescription(servicePage.body);
  }

  if (casePage) {
    pageTitle = `${casePage.title} | Case Kaiser Tech`;
    pageDescription = casePage.description;
    socialDescription = clampSocialDescription(casePage.description);
  }

  if (route.kind === "privacy") {
    pageTitle = privacySeo[route.locale].title;
    pageDescription = privacySeo[route.locale].description;
    socialDescription = clampSocialDescription(pageDescription);
  }

  if (route.kind === "methodology") {
    pageTitle = methodologySeo[route.locale].title;
    pageDescription = methodologySeo[route.locale].description;
    socialDescription = clampSocialDescription(t.method.lead);
  }

  if (route.kind === "glossary") {
    pageTitle = glossarySeo[route.locale].title;
    pageDescription = glossarySeo[route.locale].description;
    socialDescription = clampSocialDescription(t.glossary.lead);
  }

  if (route.kind === "diagnostic") {
    pageTitle = diagnosticSeo[route.locale].title;
    pageDescription = diagnosticSeo[route.locale].description;
    socialDescription = clampSocialDescription(t.diagnostic.lead);
  }

  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Kaiser Tech",
    legalName: "Kaiser Labs Tecnologia LTDA",
    url: siteUrl,
    logo: `${siteUrl}/logo_branco.png`,
    sameAs: ["https://www.instagram.com/matheus.padilha", "https://www.linkedin.com/in/padilha--matheus/"],
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#professional-service`,
    name: "Kaiser Tech",
    url: siteUrl,
    areaServed,
    serviceType: t.services.map((service) => service.title),
  };

  const faqPage =
    route.kind === "home"
      ? {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          mainEntity: t.homeFaq.items.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer,
            },
          })),
        }
      : null;

  const routeEntity = servicePage
    ? {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: servicePage.title,
        description: serviceCopy?.lead ?? servicePage.body,
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: servicePage.title,
        areaServed,
      }
      : casePage
        ? {
            "@type": "CreativeWork",
          "@id": `${canonicalUrl}#case`,
          name: casePage.title,
          headline: casePage.subtitle,
          description: casePage.description,
          creator: { "@id": `${siteUrl}/#organization` },
            url: canonicalUrl,
          }
        : route.kind === "privacy"
          ? {
              "@type": "WebPage",
              "@id": `${canonicalUrl}#privacy-policy`,
              name: pageTitle,
              description: pageDescription,
              url: canonicalUrl,
              inLanguage: t.seo.lang,
              publisher: { "@id": `${siteUrl}/#organization` },
            }
          : route.kind === "methodology"
            ? {
                "@type": "WebPage",
                "@id": `${canonicalUrl}#methodology`,
                name: pageTitle,
                description: pageDescription,
                url: canonicalUrl,
                inLanguage: t.seo.lang,
                publisher: { "@id": `${siteUrl}/#organization` },
                about: {
                  "@type": "Thing",
                  name: t.method.title,
                  description: t.method.summary,
                },
              }
            : route.kind === "glossary"
              ? {
                  "@type": "DefinedTermSet",
                  "@id": `${canonicalUrl}#glossary`,
                  name: pageTitle,
                  description: pageDescription,
                  url: canonicalUrl,
                  inLanguage: t.seo.lang,
                  publisher: { "@id": `${siteUrl}/#organization` },
                  hasDefinedTerm: t.glossary.terms.map((term) => ({
                    "@type": "DefinedTerm",
                    name: term.name,
                    description: term.definition,
                    inDefinedTermSet: `${canonicalUrl}#glossary`,
                  })),
                }
              : route.kind === "diagnostic"
                ? {
                    "@type": "WebPage",
                    "@id": `${canonicalUrl}#diagnostic-framework`,
                    name: pageTitle,
                    description: pageDescription,
                    url: canonicalUrl,
                    inLanguage: t.seo.lang,
                    publisher: { "@id": `${siteUrl}/#organization` },
                    about: {
                      "@type": "Thing",
                      name: t.diagnostic.summaryTitle,
                      description: t.diagnostic.summary,
                    },
                    mainEntity: {
                      "@type": "ItemList",
                      name: t.diagnostic.checklistTitle,
                      itemListElement: t.diagnostic.checklist.map((item, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        name: item,
                      })),
                    },
                  }
                : {
            "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: "Kaiser Tech",
          url: canonicalUrl,
          inLanguage: t.seo.lang,
          publisher: { "@id": `${siteUrl}/#organization` },
        };

  document.documentElement.lang = t.seo.lang;
  document.title = pageTitle;
  setMetaContent('meta[name="description"]', pageDescription);
  setMetaContent('meta[property="og:title"]', pageTitle);
  setMetaContent('meta[property="og:description"]', socialDescription);
  setMetaContent('meta[property="og:url"]', canonicalUrl);
  setMetaContent('meta[property="og:locale"]', t.seo.ogLocale);
  setMetaContent('meta[name="twitter:title"]', pageTitle);
  setMetaContent('meta[name="twitter:description"]', socialDescription);
  ensureMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Kaiser Tech" });
  ensureMeta('meta[property="og:image"]', { property: "og:image", content: socialImageUrl });
  ensureMeta('meta[property="og:image:secure_url"]', {
    property: "og:image:secure_url",
    content: socialImageUrl,
  });
  ensureMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: socialImageAlt });
  ensureMeta('meta[property="og:image:type"]', { property: "og:image:type", content: "image/webp" });
  ensureMeta('meta[property="og:image:width"]', { property: "og:image:width", content: "1200" });
  ensureMeta('meta[property="og:image:height"]', { property: "og:image:height", content: "630" });
  ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: twitterImageUrl });
  ensureMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt", content: socialImageAlt });
  ensureLink('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl });
  locales.forEach(({ locale, hreflang }) => {
    ensureLink(`link[rel="alternate"][hreflang="${hreflang}"]`, {
      rel: "alternate",
      hreflang,
      href: `${siteUrl}${getRoutePath(route, locale)}`,
    });
  });
  ensureLink('link[rel="alternate"][hreflang="x-default"]', {
    rel: "alternate",
    hreflang: "x-default",
    href: `${siteUrl}${getRoutePath(route, "pt")}`,
  });
  setStructuredData({
    "@context": "https://schema.org",
    "@graph": [organization, professionalService, routeEntity, faqPage].filter(Boolean),
  });
};
