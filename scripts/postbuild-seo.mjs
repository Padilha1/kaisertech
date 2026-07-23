import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const siteUrl = "https://kaisertec.com.br";
const socialImageUrl = `${siteUrl}/social-preview-og-whatsapp.webp`;
const twitterImageUrl = `${siteUrl}/social-preview-twitter.png`;
const socialImageAlt = "Kaiser Tech - Tire sua operação do improviso";
const maxSocialDescriptionLength = 125;

const locales = {
  pt: {
    base: "/pt-BR",
    lang: "pt-BR",
    ogLocale: "pt_BR",
    servicesSegment: "solucoes",
    casesSegment: "cases",
    privacySegment: "politica-de-privacidade",
    home: {
      title: "Kaiser Tech | Software sob medida para operações B2B",
      description:
        "Kaiser Tech desenvolve software sob medida, integra processos e transforma gargalos operacionais em sistemas rastreáveis, mantíveis e prontos para escalar.",
      socialDescription:
        "Consultoria de tecnologia para empresas que precisam sair do improviso, integrar processos e escalar com engenharia forte.",
    },
    services: [
      [
        "software-sob-medida",
        "Software sob medida | Kaiser Tech",
        "Criamos sistemas internos e produtos B2B para empresas que já tentaram adaptar planilhas, ferramentas prontas ou processos manuais e chegaram no limite.",
      ],
      [
        "integracoes-sob-medida",
        "Integrações sob medida | Kaiser Tech",
        "Conectamos sistemas que precisam conversar sem transformar a operação em uma cadeia de conferências manuais, exports e retrabalho.",
      ],
      [
        "refatoracoes-de-legado",
        "Refatorações de legado | Kaiser Tech",
        "Modernizamos sistemas existentes sem apostar a operação inteira em uma reescrita arriscada.",
      ],
      [
        "otimizacao-de-infraestrutura",
        "Otimização de infraestrutura | Kaiser Tech",
        "Ajustamos infraestrutura para suportar crescimento com disponibilidade, observabilidade e custo controlado.",
      ],
      [
        "refatoracao-de-codigo",
        "Refatoração de código | Kaiser Tech",
        "Organizamos bases de código difíceis de evoluir para que novas features deixem de depender de sorte.",
      ],
      [
        "performance-de-banco-de-dados",
        "Performance de banco de dados | Kaiser Tech",
        "Melhoramos consultas, modelos e cache para reduzir latência onde o banco realmente trava a operação.",
      ],
      [
        "finops",
        "FinOps | Kaiser Tech",
        "Reduzimos gasto de cloud sem tratar custo como corte cego: primeiro entendemos operação, risco e arquitetura.",
      ],
    ],
    cases: [
      [
        "acipg-bolao",
        "ACIPG Bolão | Case Kaiser Tech",
        "Produto interno para gestão de bolão com participação patrocinada, monorepo TypeScript, Fastify, Prisma, MySQL, React e Azure.",
      ],
      [
        "s4-treinamentos",
        "S4 Treinamentos | Case Kaiser Tech",
        "Site institucional e sistemas web/mobile para inspeções, treinamentos e rastreabilidade por QR Code.",
      ],
      [
        "routini",
        "Routini | Case Kaiser Tech",
        "Sistema de agendamento de serviços para pequenos negócios reduzirem dependência do WhatsApp.",
      ],
      [
        "amicord",
        "Amicord | Case Kaiser Tech",
        "Sistema de gestão de facilities com checklists, atividades, app mobile, GPS e QR Code.",
      ],
    ],
    privacy: {
      title: "Política de Privacidade | Kaiser Tech",
      description:
        "Como a Kaiser Tech coleta, usa, compartilha e protege dados pessoais no site, considerando LGPD no Brasil e práticas aplicáveis a visitantes dos EUA.",
    },
  },
  en: {
    base: "/en",
    lang: "en",
    ogLocale: "en_US",
    servicesSegment: "solutions",
    casesSegment: "cases",
    privacySegment: "privacy-policy",
    home: {
      title: "Kaiser Tech | Custom software for B2B operations",
      description:
        "Kaiser Tech builds custom software, integrates processes and turns operational bottlenecks into traceable, maintainable systems ready to scale.",
      socialDescription:
        "Technology consulting for companies that need to leave improvisation behind and scale with strong engineering.",
    },
    services: [
      [
        "custom-software",
        "Custom software | Kaiser Tech",
        "We build internal systems and B2B products for companies that have outgrown spreadsheets, off-the-shelf tools and manual workflows.",
      ],
      [
        "custom-integrations",
        "Custom integrations | Kaiser Tech",
        "We connect systems that need to work together without turning the operation into exports, manual checks and rework.",
      ],
      [
        "legacy-refactoring",
        "Legacy refactoring | Kaiser Tech",
        "We modernize existing systems without betting the whole operation on a risky rewrite.",
      ],
      [
        "infrastructure-optimization",
        "Infrastructure optimization | Kaiser Tech",
        "We adjust infrastructure so growth is supported by availability, observability and controlled cost.",
      ],
      [
        "code-refactoring",
        "Code refactoring | Kaiser Tech",
        "We organize codebases that are hard to evolve so new features stop depending on luck.",
      ],
      [
        "database-performance",
        "Database performance | Kaiser Tech",
        "We improve queries, models and cache strategy to reduce latency where the database is actually blocking the operation.",
      ],
      [
        "finops",
        "FinOps | Kaiser Tech",
        "We reduce cloud spend without treating cost as blind cutting: first we understand operation, risk and architecture.",
      ],
    ],
    cases: [
      [
        "acipg-bolao",
        "ACIPG Bolao | Kaiser Tech case",
        "Internal sponsored pool system built with TypeScript monorepo, Fastify, Prisma, MySQL, React and Azure.",
      ],
      [
        "s4-treinamentos",
        "S4 Treinamentos | Kaiser Tech case",
        "Institutional website plus web/mobile systems for inspections, training and QR Code traceability.",
      ],
      [
        "routini",
        "Routini | Kaiser Tech case",
        "Service scheduling system for small businesses reducing dependence on WhatsApp.",
      ],
      [
        "amicord",
        "Amicord | Kaiser Tech case",
        "Facilities management system with checklists, activities, mobile app, GPS and QR Code.",
      ],
    ],
    privacy: {
      title: "Privacy Policy | Kaiser Tech",
      description:
        "How Kaiser Tech collects, uses, shares and protects personal data on its website, considering Brazil's LGPD and visitors in the United States.",
    },
  },
  de: {
    base: "/de-DE",
    lang: "de-DE",
    ogLocale: "de_DE",
    servicesSegment: "loesungen",
    casesSegment: "cases",
    privacySegment: "datenschutz",
    home: {
      title: "Kaiser Tech | Individuelle Software fuer B2B-Operationen",
      description:
        "Kaiser Tech entwickelt individuelle Software, integriert Prozesse und verwandelt operative Engpaesse in nachvollziehbare, wartbare und skalierbare Systeme.",
      socialDescription:
        "Technologieberatung fuer Unternehmen, die Prozesse integrieren und mit starker Softwaretechnik skalieren wollen.",
    },
    services: [
      [
        "massgeschneiderte-software",
        "Massgeschneiderte Software | Kaiser Tech",
        "Wir entwickeln interne Systeme und B2B-Produkte fuer Unternehmen, die mit Tabellen, Standardtools oder manuellen Ablaeufen an Grenzen kommen.",
      ],
      [
        "massgeschneiderte-integrationen",
        "Massgeschneiderte Integrationen | Kaiser Tech",
        "Wir verbinden Systeme, die zusammenarbeiten muessen, ohne die Operation in Exporte, manuelle Pruefungen und Nacharbeit zu verwandeln.",
      ],
      [
        "legacy-refactoring",
        "Legacy-Refactoring | Kaiser Tech",
        "Wir modernisieren bestehende Systeme, ohne die gesamte Operation auf ein riskantes Rewrite zu setzen.",
      ],
      [
        "infrastruktur-optimierung",
        "Infrastruktur-Optimierung | Kaiser Tech",
        "Wir passen Infrastruktur so an, dass Wachstum durch Verfuegbarkeit, Observability und kontrollierte Kosten getragen wird.",
      ],
      [
        "code-refactoring",
        "Code-Refactoring | Kaiser Tech",
        "Wir strukturieren Codebasen, die schwer weiterzuentwickeln sind, damit neue Features nicht von Glueck abhaengen.",
      ],
      [
        "datenbank-performance",
        "Datenbank-Performance | Kaiser Tech",
        "Wir verbessern Abfragen, Modelle und Cache-Strategien, um Latenz dort zu senken, wo die Datenbank die Operation wirklich blockiert.",
      ],
      [
        "finops",
        "FinOps | Kaiser Tech",
        "Wir senken Cloud-Kosten, ohne Kosten als blindes Sparen zu behandeln: zuerst verstehen wir Operation, Risiko und Architektur.",
      ],
    ],
    cases: [
      [
        "acipg-bolao",
        "ACIPG Bolao | Kaiser Tech Case",
        "Internes gesponsertes Tippspielsystem mit TypeScript-Monorepo, Fastify, Prisma, MySQL, React und Azure.",
      ],
      [
        "s4-treinamentos",
        "S4 Treinamentos | Kaiser Tech Case",
        "Institutionelle Website sowie Web- und Mobile-Systeme fuer Inspektionen, Schulungen und QR-Code-Nachvollziehbarkeit.",
      ],
      [
        "routini",
        "Routini | Kaiser Tech Case",
        "Terminplanungssystem fuer kleine Dienstleistungsunternehmen, das die Abhaengigkeit von WhatsApp reduziert.",
      ],
      [
        "amicord",
        "Amicord | Kaiser Tech Case",
        "Facilities-Management-System mit Checklisten, Aktivitaeten, mobiler Operation, GPS und QR Code.",
      ],
    ],
    privacy: {
      title: "Datenschutzerklaerung | Kaiser Tech",
      description:
        "Wie Kaiser Tech personenbezogene Daten auf der Website erhebt, nutzt, weitergibt und schuetzt, mit Hinweisen zu Brasilien und den USA.",
    },
  },
};

const routePath = (localeKey, kind = "home", slug = "") => {
  const locale = locales[localeKey];
  if (kind === "service")
    return `${locale.base}/${locale.servicesSegment}/${slug}`;
  if (kind === "case") return `${locale.base}/${locale.casesSegment}/${slug}`;
  if (kind === "privacy") return `${locale.base}/${locale.privacySegment}`;
  return `${locale.base}/`;
};

const localeHreflangs = {
  pt: "pt-BR",
  en: "en",
  de: "de-DE",
};

const areaServed = ["Brazil", "Germany", "DACH", "International"];

const buildAlternates = (kind = "home", index = 0) =>
  Object.fromEntries(
    Object.keys(locales).map((localeKey) => [
      localeKey,
      routePath(
        localeKey,
        kind,
        kind === "service"
          ? locales[localeKey].services[index][0]
          : kind === "case"
            ? locales[localeKey].cases[index][0]
            : kind === "privacy"
              ? locales[localeKey].privacySegment
            : "",
      ),
    ]),
  );

const escapeAttribute = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceMeta = (html, selector, content) => {
  const escaped = escapeAttribute(content);
  return html.replace(
    new RegExp(`(<meta\\s+${selector}\\s+content=")[^"]*("[^>]*>)`),
    `$1${escaped}$2`,
  );
};

const replaceLink = (html, relSelector, href) => {
  const escaped = escapeAttribute(href);
  return html.replace(
    new RegExp(`(<link\\s+${relSelector}\\s+href=")[^"]*("[^>]*>)`),
    `$1${escaped}$2`,
  );
};

const clampSocialDescription = (description) => {
  if (description.length <= maxSocialDescriptionLength) return description;

  const clipped = description.slice(0, maxSocialDescriptionLength - 1);
  const lastSpace = clipped.lastIndexOf(" ");
  const trimmed = clipped.slice(0, lastSpace > 80 ? lastSpace : clipped.length).trim();

  return `${trimmed}…`;
};

const buildHtml = (template, route) => {
  const canonical = `${siteUrl}${route.path}`;
  const socialDescription = route.socialDescription ?? clampSocialDescription(route.description);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Kaiser Tech",
        legalName: "Kaiser Labs Tecnologia LTDA",
        url: siteUrl,
        logo: `${siteUrl}/logo_branco.png`,
        sameAs: [
          "https://www.instagram.com/matheus.padilha",
          "https://www.linkedin.com/in/padilha--matheus/",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: "Kaiser Tech",
        url: siteUrl,
        areaServed,
        serviceType: [
          "Custom software",
          "Custom integrations",
          "Internal systems",
          "Software sob medida",
          "Integracoes sob medida",
          "Massgeschneiderte Software",
          "Massgeschneiderte Integrationen",
        ],
      },
      route.structuredData,
    ],
  };
  let html = template
    .replace(/<html lang="[^"]+">/, `<html lang="${route.lang}">`)
    .replace(
      /<title>.*?<\/title>/,
      `<title>${escapeAttribute(route.title)}</title>`,
    );

  html = replaceMeta(html, 'name="description"', route.description);
  html = replaceMeta(html, 'property="og:title"', route.title);
  html = replaceMeta(html, 'property="og:description"', socialDescription);
  html = replaceMeta(html, 'property="og:url"', canonical);
  html = replaceMeta(html, 'property="og:site_name"', "Kaiser Tech");
  html = replaceMeta(html, 'property="og:locale"', route.ogLocale);
  html = replaceMeta(html, 'property="og:image"', socialImageUrl);
  html = replaceMeta(html, 'property="og:image:secure_url"', socialImageUrl);
  html = replaceMeta(html, 'property="og:image:alt"', socialImageAlt);
  html = replaceMeta(html, 'property="og:image:type"', "image/webp");
  html = replaceMeta(html, 'property="og:image:width"', "1200");
  html = replaceMeta(html, 'property="og:image:height"', "630");
  html = replaceMeta(html, 'name="twitter:card"', "summary_large_image");
  html = replaceMeta(html, 'name="twitter:title"', route.title);
  html = replaceMeta(html, 'name="twitter:description"', socialDescription);
  html = replaceMeta(html, 'name="twitter:image"', twitterImageUrl);
  html = replaceMeta(html, 'name="twitter:image:alt"', socialImageAlt);
  html = replaceLink(html, 'rel="canonical"', canonical);
  for (const [localeKey, hreflang] of Object.entries(localeHreflangs)) {
    html = replaceLink(
      html,
      `rel="alternate" hreflang="${hreflang}"`,
      `${siteUrl}${route.alternates[localeKey]}`,
    );
  }
  html = replaceLink(
    html,
    'rel="alternate" hreflang="x-default"',
    `${siteUrl}${route.alternates.pt}`,
  );
  html = html.replace(
    /<script id="seo-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script id="seo-jsonld" type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
  );

  return html;
};

const writeRoute = async (template, route) => {
  const outputPath = join(dist, route.path, "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buildHtml(template, route), "utf8");
};

const routes = [];

for (const localeKey of Object.keys(locales)) {
  const locale = locales[localeKey];
  routes.push({
    path: routePath(localeKey),
    lang: locale.lang,
    ogLocale: locale.ogLocale,
    title: locale.home.title,
    description: locale.home.description,
    socialDescription: locale.home.socialDescription,
    structuredData: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Kaiser Tech",
      url: `${siteUrl}${routePath(localeKey)}`,
      inLanguage: locale.lang,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    alternates: buildAlternates(),
  });

  routes.push({
    path: routePath(localeKey, "privacy"),
    lang: locale.lang,
    ogLocale: locale.ogLocale,
    title: locale.privacy.title,
    description: locale.privacy.description,
    structuredData: {
      "@type": "WebPage",
      "@id": `${siteUrl}${routePath(localeKey, "privacy")}#privacy-policy`,
      name: locale.privacy.title,
      description: locale.privacy.description,
      url: `${siteUrl}${routePath(localeKey, "privacy")}`,
      inLanguage: locale.lang,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    alternates: buildAlternates("privacy"),
  });

  locale.services.forEach(([slug, title, description], index) => {
    routes.push({
      path: routePath(localeKey, "service", slug),
      lang: locale.lang,
      ogLocale: locale.ogLocale,
      title,
      description,
      structuredData: {
        "@type": "Service",
        "@id": `${siteUrl}${routePath(localeKey, "service", slug)}#service`,
        name: title.replace(" | Kaiser Tech", ""),
        description,
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: title.replace(" | Kaiser Tech", ""),
        areaServed,
      },
      alternates: buildAlternates("service", index),
    });
  });

  locale.cases.forEach(([slug, title, description], index) => {
    routes.push({
      path: routePath(localeKey, "case", slug),
      lang: locale.lang,
      ogLocale: locale.ogLocale,
      title,
      description,
      structuredData: {
        "@type": "CreativeWork",
        "@id": `${siteUrl}${routePath(localeKey, "case", slug)}#case`,
        name: title
          .replace(" | Case Kaiser Tech", "")
          .replace(" | Kaiser Tech case", "")
          .replace(" | Kaiser Tech Case", ""),
        description,
        creator: { "@id": `${siteUrl}/#organization` },
        url: `${siteUrl}${routePath(localeKey, "case", slug)}`,
      },
      alternates: buildAlternates("case", index),
    });
  });
}

const template = await readFile(join(dist, "index.html"), "utf8");

for (const route of routes) {
  await writeRoute(template, route);
}

await writeFile(
  join(dist, "index.html"),
  buildHtml(template, routes[0]),
  "utf8",
);

console.log(`Generated ${routes.length} localized SEO entrypoints.`);
