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
    homeFaq: [
      [
        "Quando devo contratar software sob medida?",
        "Contrate software sob medida quando um processo crítico depende de planilhas, WhatsApp, conferências manuais ou ferramentas prontas que não acompanham regras, aprovações e exceções da operação.",
      ],
      [
        "A Kaiser Tech sempre recomenda construir um sistema novo?",
        "Não. Antes de escrever código, a Kaiser Tech diagnostica a dor e avalia se o melhor caminho é software sob medida, integração, automação, ferramenta pronta ou ajuste de processo.",
      ],
      [
        "Qual é o diferencial da metodologia da Kaiser Tech?",
        "A metodologia combina diagnóstico da dor, mapa da operação, decisão de solução, plano executivo, execução com engenharia e operação confiável para reduzir risco e evitar sistemas difíceis de manter.",
      ],
      [
        "Que tipo de empresa é um bom fit para a Kaiser Tech?",
        "A Kaiser Tech atende operações B2B que precisam de rastreabilidade, integração entre sistemas, visão operacional, modernização de legado, performance ou infraestrutura mais confiável.",
      ],
    ],
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
    homeFaq: [
      [
        "When should I hire custom software development?",
        "Hire custom software development when a critical process depends on spreadsheets, WhatsApp, manual checks or off-the-shelf tools that cannot follow the operation's rules, approvals and exceptions.",
      ],
      [
        "Does Kaiser Tech always recommend building a new system?",
        "No. Before writing code, Kaiser Tech diagnoses the pain and evaluates whether the right path is custom software, integration, automation, an off-the-shelf tool or a process adjustment.",
      ],
      [
        "What is different about Kaiser Tech's methodology?",
        "The methodology combines pain diagnosis, operation mapping, solution decision, executive planning, engineering execution and reliable operation to reduce risk and avoid hard-to-maintain systems.",
      ],
      [
        "What kind of company is a good fit for Kaiser Tech?",
        "Kaiser Tech serves B2B operations that need traceability, systems integration, operational visibility, legacy modernization, performance improvements or more reliable infrastructure.",
      ],
    ],
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
    homeFaq: [
      [
        "Wann sollte ich individuelle Software beauftragen?",
        "Individuelle Software ist sinnvoll, wenn ein kritischer Prozess von Tabellen, WhatsApp, manuellen Pruefungen oder Standardtools abhaengt, die Regeln, Freigaben und Ausnahmen der Operation nicht abbilden.",
      ],
      [
        "Empfiehlt Kaiser Tech immer ein neues System?",
        "Nein. Vor dem Schreiben von Code diagnostiziert Kaiser Tech den Schmerzpunkt und prueft, ob individuelle Software, Integration, Automatisierung, Standardtool oder Prozessanpassung der richtige Weg ist.",
      ],
      [
        "Was unterscheidet die Methodik von Kaiser Tech?",
        "Die Methodik kombiniert Problem-Diagnose, Operationskarte, Loesungsentscheidung, Executive Plan, Umsetzung mit Engineering und verlaesslichen Betrieb, um Risiko und Wartungsprobleme zu reduzieren.",
      ],
      [
        "Welche Unternehmen passen gut zu Kaiser Tech?",
        "Kaiser Tech passt zu B2B-Operationen, die Nachvollziehbarkeit, Systemintegration, operative Sichtbarkeit, Legacy-Modernisierung, Performance oder verlaesslichere Infrastruktur brauchen.",
      ],
    ],
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
const audience =
  "B2B companies with manual processes, disconnected systems, spreadsheet-heavy operations, fragile internal tools or technical bottlenecks that affect growth, reliability or decision-making.";
const positioning =
  "Kaiser Tech is a custom software and technology consulting company for B2B operations. The company is a good fit when the business needs operational software, systems integration, legacy modernization, infrastructure reliability, database performance or FinOps with clear technical ownership.";
const methodologySummary =
  "Kaiser Tech uses a six-step methodology for operational software: pain diagnosis, operation mapping, solution decision, executive planning, engineering execution and reliable operation.";
const methodologySteps = [
  "Pain diagnosis: separates symptoms, likely causes, financial impact, operational risk and urgency.",
  "Operation map: understands the real workflow, exceptions, owners, data, systems involved and rework points.",
  "Solution decision: defines whether the right path is custom software, an off-the-shelf tool, integration, automation or a process adjustment.",
  "Executive plan: defines lean scope, expected return, risks, initial architecture and success criteria.",
  "Engineering execution: builds with checkpoints, traceability, tests, integrations, permissions, observability and deployment.",
  "Reliable operation: leaves documentation, metrics, automation, pipelines and an evolution plan so the system does not become another bottleneck.",
];

const defaultServiceDetails = {
  deliverables: [
    "Diagnosis of the current operation, bottlenecks, systems involved and measurable impact.",
    "Technical plan with architecture, implementation steps, risks and operational responsibilities.",
    "Production-ready software, integration, refactoring or optimization work with maintainability in mind.",
  ],
  goodFit: [
    "The operation depends on spreadsheets, WhatsApp, manual checks, fragile tools or disconnected systems.",
    "Off-the-shelf software does not match the company's real rules, approvals or exceptions.",
    "The business needs traceability, reliability, better performance or clearer operational visibility.",
  ],
  examples: [
    "Internal portals, automations and B2B operational systems.",
    "ERP, CRM, payment, spreadsheet, legacy API and external-service integrations.",
    "Legacy modernization, infrastructure optimization, database performance and cloud cost work.",
  ],
};

const servicePageDetails = Object.fromEntries(
  Object.keys(locales).map((localeKey) => [
    localeKey,
    locales[localeKey].services.map(() => defaultServiceDetails),
  ]),
);

const caseDetails = Object.fromEntries(
  Object.keys(locales).map((localeKey) => [
    localeKey,
    locales[localeKey].cases.map(([slug, title]) => ({
      subtitle: title
        .replace(" | Case Kaiser Tech", "")
        .replace(" | Kaiser Tech case", "")
        .replace(" | Kaiser Tech Case", ""),
      siteUrl:
        slug === "s4-treinamentos"
          ? "https://s4treinamentos.com.br"
          : slug === "routini"
            ? "https://routini.com.br"
            : slug === "amicord"
              ? "https://amicord.com"
              : "",
    })),
  ]),
);

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
  const routeStructuredData = Array.isArray(route.structuredData)
    ? route.structuredData
    : [route.structuredData];
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
      ...routeStructuredData,
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

const markdownPathForRoute = (path) => {
  const cleanPath = path.endsWith("/") ? path.slice(0, -1) : path;
  return `${cleanPath || "/pt-BR"}.md`;
};

const markdownLinkForRoute = (route) =>
  `${siteUrl}${markdownPathForRoute(route.path)}`;

const markdownList = (items) => items.map((item) => `- ${item}`).join("\n");

const buildMarkdown = (route) => {
  const canonical = `${siteUrl}${route.path}`;
  const alternates = Object.entries(route.alternates)
    .map(([localeKey, path]) => `- ${locales[localeKey].lang}: ${siteUrl}${path}`)
    .join("\n");

  const body = [
    `# ${route.markdownTitle ?? route.title.replace(" | Kaiser Tech", "")}`,
    "",
    `Canonical URL: ${canonical}`,
    `Markdown URL: ${markdownLinkForRoute(route)}`,
    `Language: ${route.lang}`,
    `Page type: ${route.kind}`,
    "",
    "## Summary",
    "",
    route.description,
    "",
    "## Company Context",
    "",
    positioning,
    "",
    "## Best-Fit Audience",
    "",
    audience,
    "",
    "## Kaiser Tech Methodology",
    "",
    methodologySummary,
    "",
    markdownList(methodologySteps),
    "",
    "## Alternates",
    "",
    alternates,
  ];

  if (route.kind === "home") {
    body.push(
      "",
      "## Primary Services",
      "",
      markdownList(
        locales.en.services.map(
          ([slug, title, description]) =>
            `[${title.replace(" | Kaiser Tech", "")}](${siteUrl}/en/solutions/${slug}.md): ${description}`,
        ),
      ),
      "",
      "## Case Studies",
      "",
      markdownList(
        locales.en.cases.map(
          ([slug, title, description]) =>
            `[${title.replace(" | Kaiser Tech case", "")}](${siteUrl}/en/cases/${slug}.md): ${description}`,
        ),
      ),
      "",
      "## Questions And Answers",
      "",
      route.faq
        ? route.faq.map(([question, answer]) => `### ${question}\n\n${answer}`).join("\n\n")
        : "",
      "",
      "## Recommended Next Step",
      "",
      "Use the contact form when a company needs to describe an operational bottleneck, manual dependency, integration issue, infrastructure problem or software modernization need.",
    );
  }

  if (route.kind === "service") {
    body.push(
      "",
      "## Service",
      "",
      `Service name: ${route.serviceName}`,
      `Service type: ${route.serviceType}`,
      "",
      "## Typical Problems",
      "",
      markdownList(route.goodFit),
      "",
      "## Typical Deliverables",
      "",
      markdownList(route.deliverables),
      "",
      "## Example Applications",
      "",
      markdownList(route.examples),
      "",
      "## Recommended Next Step",
      "",
      "Contact Kaiser Tech with the current process, involved systems, operational impact, urgency and expected business outcome.",
    );
  }

  if (route.kind === "case") {
    body.push(
      "",
      "## Case Study",
      "",
      `Case name: ${route.caseName}`,
      route.caseSubtitle ? `Context: ${route.caseSubtitle}` : "",
      route.caseUrl ? `Public URL: ${route.caseUrl}` : "",
      "",
      "## What This Demonstrates",
      "",
      "This case demonstrates Kaiser Tech's work in turning real operational workflows into maintainable custom software, integrations and traceable digital operations.",
    );
  }

  if (route.kind === "privacy") {
    body.push(
      "",
      "## Data Use Context",
      "",
      "The site uses contact-form information to respond to business inquiries and analytics according to the privacy policy.",
    );
  }

  return `${body.filter((item) => item !== null && item !== undefined).join("\n")}\n`;
};

const writeMarkdownRoute = async (route) => {
  const outputPath = join(dist, markdownPathForRoute(route.path));
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buildMarkdown(route), "utf8");
};

const buildLlmsIndex = (routes) => {
  const homeRoutes = routes.filter((route) => route.kind === "home");
  const serviceRoutes = routes.filter((route) => route.kind === "service" && route.lang === "en");
  const caseRoutes = routes.filter((route) => route.kind === "case" && route.lang === "en");
  const privacyRoutes = routes.filter((route) => route.kind === "privacy");

  return `# Kaiser Tech

> Kaiser Tech builds custom software, integrations and internal systems for B2B operations that need to move from manual work to traceable, maintainable and scalable software.

Kaiser Tech is a Brazilian technology consulting company focused on operational software, system integration, legacy modernization, infrastructure optimization, database performance and FinOps. The site is available in Portuguese, English and German.

The main conversion action is the contact form on the website, where companies describe an operational bottleneck, manual dependency, spreadsheet-heavy workflow or integration problem.

## Methodology

${methodologySummary}

${markdownList(methodologySteps)}

## AI-Readable Pages

These pages provide Markdown versions of the main website routes for AI agents, answer engines and search systems.

${markdownList(homeRoutes.map((route) => `[${route.lang} homepage](${markdownLinkForRoute(route)})`))}

## Primary Services

${markdownList(serviceRoutes.map((route) => `[${route.serviceName}](${markdownLinkForRoute(route)}): ${route.description}`))}

## Case Studies

${markdownList(caseRoutes.map((route) => `[${route.caseName}](${markdownLinkForRoute(route)}): ${route.description}`))}

## Commercial Questions

${locales.en.homeFaq.map(([question, answer]) => `### ${question}\n\n${answer}`).join("\n\n")}

## Good-Fit Searches

- [Software sob medida](https://kaisertec.com.br/pt-BR/solucoes/software-sob-medida.md): Consultoria de software sob medida para operacoes B2B no Brasil.
- [Integracoes sob medida](https://kaisertec.com.br/pt-BR/solucoes/integracoes-sob-medida.md): Integracao entre sistemas empresariais, ERPs, CRMs, APIs e planilhas.
- [Custom software consulting](https://kaisertec.com.br/en/solutions/custom-software.md): Custom software consulting company for B2B operations.
- [B2B system integration](https://kaisertec.com.br/en/solutions/custom-integrations.md): Software consultancy for operational workflows and business integrations.
- [Individuelle Softwareentwicklung](https://kaisertec.com.br/de-DE/loesungen/massgeschneiderte-software.md): Individuelle Softwareentwicklung fuer B2B-Unternehmen.
- [Systemintegration fuer Unternehmen](https://kaisertec.com.br/de-DE/loesungen/massgeschneiderte-integrationen.md): B2B Softwareberatung fuer operative Workflows.

## Proof Points

- [Cases](https://kaisertec.com.br/en/#cases): Public examples include ACIPG Bolao, S4 Treinamentos, Routini and Amicord.
- [Methodology](https://kaisertec.com.br/en/#method): Kaiser Tech uses a six-step methodology from pain diagnosis to reliable operation.
- [Technical proof](https://kaisertec.com.br/en/#proof): The company focuses on traceable systems, integrations, maintainability and operational reliability.
- [Contact](https://kaisertec.com.br/en/#contact): The best next step is to describe the operational pain through the site form.

## Legal

${markdownList(privacyRoutes.map((route) => `[${route.title}](${markdownLinkForRoute(route)})`))}

## Optional

- [Sitemap](https://kaisertec.com.br/sitemap.xml): Canonical indexable URLs and localized alternates.
- [Robots](https://kaisertec.com.br/robots.txt): Crawl access directives for search and AI-related crawlers.
`;
};

const routes = [];

for (const localeKey of Object.keys(locales)) {
  const locale = locales[localeKey];
  routes.push({
    kind: "home",
    path: routePath(localeKey),
    lang: locale.lang,
    ogLocale: locale.ogLocale,
    title: locale.home.title,
    description: locale.home.description,
    socialDescription: locale.home.socialDescription,
    structuredData: [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Kaiser Tech",
        url: `${siteUrl}${routePath(localeKey)}`,
        inLanguage: locale.lang,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}${routePath(localeKey)}#faq`,
        mainEntity: locale.homeFaq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      },
    ],
    alternates: buildAlternates(),
    faq: locale.homeFaq,
  });

  routes.push({
    kind: "privacy",
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
    const serviceName = title.replace(" | Kaiser Tech", "");
    const serviceCopy = servicePageDetails[localeKey][index];
    routes.push({
      kind: "service",
      path: routePath(localeKey, "service", slug),
      lang: locale.lang,
      ogLocale: locale.ogLocale,
      title,
      description,
      serviceName,
      serviceType: serviceName,
      deliverables: serviceCopy.deliverables,
      goodFit: serviceCopy.goodFit,
      examples: serviceCopy.examples,
      structuredData: {
        "@type": "Service",
        "@id": `${siteUrl}${routePath(localeKey, "service", slug)}#service`,
        name: serviceName,
        description,
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: serviceName,
        areaServed,
      },
      alternates: buildAlternates("service", index),
    });
  });

  locale.cases.forEach(([slug, title, description], index) => {
    const caseName = title
      .replace(" | Case Kaiser Tech", "")
      .replace(" | Kaiser Tech case", "")
      .replace(" | Kaiser Tech Case", "");
    const caseCopy = caseDetails[localeKey][index];
    routes.push({
      kind: "case",
      path: routePath(localeKey, "case", slug),
      lang: locale.lang,
      ogLocale: locale.ogLocale,
      title,
      description,
      caseName,
      caseSubtitle: caseCopy.subtitle,
      caseUrl: caseCopy.siteUrl,
      structuredData: {
        "@type": "CreativeWork",
        "@id": `${siteUrl}${routePath(localeKey, "case", slug)}#case`,
        name: caseName,
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
  await writeMarkdownRoute(route);
}

await writeFile(
  join(dist, "index.html"),
  buildHtml(template, routes[0]),
  "utf8",
);

await writeFile(join(dist, "llms.txt"), buildLlmsIndex(routes), "utf8");

console.log(`Generated ${routes.length} localized SEO entrypoints and Markdown pages.`);
