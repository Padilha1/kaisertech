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

export const syncSeo = ({ canonicalUrl, route, t, servicePage, serviceCopy, casePage }: SeoArgs) => {
  let pageTitle: string = t.seo.title;
  let pageDescription: string = t.seo.description;

  if (servicePage) {
    pageTitle = `${servicePage.title} | Kaiser Tech`;
    pageDescription = serviceCopy?.lead ?? servicePage.body;
  }

  if (casePage) {
    pageTitle = `${casePage.title} | Case Kaiser Tech`;
    pageDescription = casePage.description;
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
  setMetaContent('meta[property="og:description"]', pageDescription);
  setMetaContent('meta[property="og:url"]', canonicalUrl);
  setMetaContent('meta[property="og:locale"]', t.seo.ogLocale);
  setMetaContent('meta[name="twitter:title"]', pageTitle);
  setMetaContent('meta[name="twitter:description"]', pageDescription);
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
    "@graph": [organization, professionalService, routeEntity],
  });
};
