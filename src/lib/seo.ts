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
    "@graph": [organization, professionalService, routeEntity],
  });
};
