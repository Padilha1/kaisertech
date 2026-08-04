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
const defaultLastmod = "2026-08-04";
const privacyLastmod = "2026-07-22";

const locales = {
  pt: {
    base: "/pt-br",
    lang: "pt-BR",
    ogLocale: "pt_BR",
    servicesSegment: "solucoes",
    casesSegment: "cases",
    methodologySegment: "metodologia",
    glossarySegment: "glossario",
    diagnosticSegment: "diagnostico-operacional",
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
    methodology: {
      title: "Metodologia para software sob medida | Kaiser Tech",
      markdownTitle: "Metodologia da Kaiser Tech para software sob medida",
      description:
        "Como a Kaiser Tech diagnostica dores operacionais, mapeia processos, decide solução, executa engenharia e mantém sistemas confiáveis.",
      summary:
        "A metodologia da Kaiser Tech transforma uma dor operacional em uma decisão técnica clara antes de construir software. Primeiro entendemos impacto, processo real e risco; depois escolhemos entre sistema sob medida, integração, automação, ferramenta pronta ou ajuste de processo.",
      outcomes: [
        "Menos risco de construir um sistema que não resolve a causa real.",
        "Mais clareza sobre retorno, urgência, responsáveis e critérios de sucesso.",
        "Base técnica preparada para manutenção, integrações e crescimento.",
      ],
    },
    glossary: {
      title: "Glossário de software operacional | Kaiser Tech",
      markdownTitle: "Glossário de software operacional",
      description:
        "Definições curtas sobre software sob medida, integrações, rastreabilidade, legado, FinOps e performance de banco.",
      summary:
        "Este glossário define termos que aparecem quando uma empresa tenta trocar planilhas, retrabalho e sistemas desconectados por software operacional confiável.",
      terms: [
        [
          "Software sob medida",
          "Software sob medida é um sistema criado para acompanhar regras, fluxos e exceções específicas de uma operação, em vez de forçar a empresa a se adaptar a uma ferramenta pronta.",
        ],
        [
          "Integração entre sistemas",
          "Integração entre sistemas é a conexão controlada entre ERPs, CRMs, APIs, planilhas, gateways e sistemas legados para que dados circulem sem conferência manual.",
        ],
        [
          "Rastreabilidade operacional",
          "Rastreabilidade operacional é a capacidade de saber quem fez o quê, quando, em qual etapa, com qual dado e qual impacto aquilo teve no processo.",
        ],
        [
          "Sistema legado",
          "Sistema legado é um software existente que ainda sustenta a operação, mas ficou difícil de manter, integrar, testar ou evoluir com segurança.",
        ],
        [
          "FinOps",
          "FinOps é a prática de controlar custo de cloud com responsabilidade técnica, conectando gasto, arquitetura, uso real e risco operacional.",
        ],
        [
          "Performance de banco de dados",
          "Performance de banco de dados é o trabalho de reduzir latência e travamentos analisando queries, índices, modelo, locks, cache e volume real de acesso.",
        ],
      ],
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
    methodologySegment: "methodology",
    glossarySegment: "glossary",
    diagnosticSegment: "operational-diagnosis",
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
    methodology: {
      title: "Custom software methodology | Kaiser Tech",
      markdownTitle: "Kaiser Tech custom software methodology",
      description:
        "How Kaiser Tech diagnoses operational pain, maps workflows, decides solutions, executes engineering and keeps systems reliable.",
      summary:
        "Kaiser Tech's methodology turns operational pain into a clear technical decision before software is built. First we understand impact, real workflow and risk; then we choose between custom software, integration, automation, an off-the-shelf tool or a process adjustment.",
      outcomes: [
        "Lower risk of building a system that does not solve the real cause.",
        "Clearer return, urgency, owners and success criteria.",
        "A technical foundation prepared for maintenance, integrations and growth.",
      ],
    },
    glossary: {
      title: "Operational software glossary | Kaiser Tech",
      markdownTitle: "Operational software glossary",
      description:
        "Short definitions for custom software, integrations, traceability, legacy systems, FinOps and database performance.",
      summary:
        "This glossary defines terms that appear when a company moves from spreadsheets, rework and disconnected systems to reliable operational software.",
      terms: [
        [
          "Custom software",
          "Custom software is a system built around the specific rules, workflows and exceptions of an operation instead of forcing the company to adapt to an off-the-shelf tool.",
        ],
        [
          "System integration",
          "System integration is the controlled connection between ERPs, CRMs, APIs, spreadsheets, payment gateways and legacy systems so data can move without manual checks.",
        ],
        [
          "Operational traceability",
          "Operational traceability is the ability to know who did what, when, at which step, with which data and what impact it had on the process.",
        ],
        [
          "Legacy system",
          "A legacy system is existing software that still supports the operation but has become hard to maintain, integrate, test or evolve safely.",
        ],
        [
          "FinOps",
          "FinOps is the practice of controlling cloud cost with technical responsibility by connecting spend, architecture, real usage and operational risk.",
        ],
        [
          "Database performance",
          "Database performance is the work of reducing latency and bottlenecks by analyzing queries, indexes, models, locks, cache and real access volume.",
        ],
      ],
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
    base: "/de-de",
    lang: "de-DE",
    ogLocale: "de_DE",
    servicesSegment: "loesungen",
    casesSegment: "cases",
    methodologySegment: "methodik",
    glossarySegment: "glossar",
    diagnosticSegment: "operations-diagnose",
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
    methodology: {
      title: "Methodik fuer individuelle Software | Kaiser Tech",
      markdownTitle: "Kaiser Tech Methodik fuer individuelle Software",
      description:
        "Wie Kaiser Tech operative Probleme diagnostiziert, Prozesse abbildet, Loesungen entscheidet und verlaessliche Systeme baut.",
      summary:
        "Die Methodik von Kaiser Tech verwandelt operative Probleme in eine klare technische Entscheidung, bevor Software gebaut wird. Zuerst verstehen wir Auswirkung, realen Ablauf und Risiko; dann entscheiden wir zwischen individueller Software, Integration, Automatisierung, Standardtool oder Prozessanpassung.",
      outcomes: [
        "Weniger Risiko, ein System zu bauen, das die echte Ursache nicht loest.",
        "Mehr Klarheit ueber Return, Dringlichkeit, Verantwortliche und Erfolgskriterien.",
        "Technische Basis fuer Wartung, Integrationen und Wachstum.",
      ],
    },
    glossary: {
      title: "Glossar fuer operative Software | Kaiser Tech",
      markdownTitle: "Glossar fuer operative Software",
      description:
        "Kurze Definitionen zu individueller Software, Systemintegration, Nachvollziehbarkeit, Legacy, FinOps und Datenbank-Performance.",
      summary:
        "Dieses Glossar definiert Begriffe, die relevant werden, wenn ein Unternehmen Tabellen, Nacharbeit und getrennte Systeme durch verlaessliche operative Software ersetzt.",
      terms: [
        [
          "Individuelle Software",
          "Individuelle Software ist ein System, das fuer spezifische Regeln, Ablaeufe und Ausnahmen einer Operation entwickelt wird, statt das Unternehmen an ein Standardtool anzupassen.",
        ],
        [
          "Systemintegration",
          "Systemintegration ist die kontrollierte Verbindung von ERPs, CRMs, APIs, Tabellen, Payment-Gateways und Legacy-Systemen, damit Daten ohne manuelle Pruefung fliessen.",
        ],
        [
          "Operative Nachvollziehbarkeit",
          "Operative Nachvollziehbarkeit bedeutet zu wissen, wer was wann in welchem Schritt mit welchen Daten getan hat und welche Auswirkung das hatte.",
        ],
        [
          "Legacy-System",
          "Ein Legacy-System ist bestehende Software, die die Operation weiter traegt, aber schwer wartbar, integrierbar, testbar oder sicher erweiterbar geworden ist.",
        ],
        [
          "FinOps",
          "FinOps ist die Praxis, Cloud-Kosten mit technischer Verantwortung zu steuern, indem Kosten, Architektur, reale Nutzung und operatives Risiko verbunden werden.",
        ],
        [
          "Datenbank-Performance",
          "Datenbank-Performance reduziert Latenz und Engpaesse durch Analyse von Queries, Indizes, Modell, Locks, Cache und realem Zugriffsvolumen.",
        ],
      ],
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
  if (kind === "methodology") return `${locale.base}/${locale.methodologySegment}`;
  if (kind === "glossary") return `${locale.base}/${locale.glossarySegment}`;
  if (kind === "diagnostic") return `${locale.base}/${locale.diagnosticSegment}`;
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

const caseDiscovery = {
  pt: {
    "acipg-bolao": {
      problem: "A ACIPG precisava organizar um bolão interno com participação patrocinada sem depender de controles soltos e conferência manual.",
      solution: "Foi criado um produto interno com API, frontend e contratos compartilhados para gerir participantes, regras e operação do bolão.",
      stack: "TypeScript, Fastify, Prisma, MySQL, React, Vite, Tailwind e Azure.",
      outcome: "A operação ganhou um fluxo digital mais rastreável para participação, gestão interna e manutenção do produto.",
    },
    "s4-treinamentos": {
      problem: "Treinamentos, inspeções e ativos precisavam de rastreabilidade para reduzir controles manuais e melhorar a qualidade das informações em auditorias.",
      solution: "A solução combinou site institucional, sistemas web/mobile, rastreamento por QR Code e fluxos digitais para prevenção operacional.",
      stack: "React, Vite, Node.js, AWS, React Native e QR Code.",
      outcome: "A S4 melhorou o mapeamento de ativos e colaboradores, aumentou a qualidade das informações para auditorias e reduziu dependência de processos manuais.",
    },
    routini: {
      problem: "Pequenos negócios de serviço dependiam do WhatsApp para agendar horários, confirmar clientes e organizar a rotina.",
      solution: "Foi criado um sistema de agendamento para centralizar disponibilidade, marcações e fluxo de serviços em uma experiência digital.",
      stack: "React, Vite, Node.js e AWS.",
      outcome: "O negócio ganha mais previsibilidade de agenda e reduz a dependência de conversas soltas no WhatsApp para organizar atendimentos.",
    },
    amicord: {
      problem: "Empresas de facilities precisam controlar equipes, unidades, atividades, checklists e ocorrências em campo sem perder rastreabilidade.",
      solution: "Foi criada uma plataforma sob medida com painel web, app mobile, validação por localização, QR Code, checklists, dashboards e API própria.",
      stack: "React, React Native, Go, PostgreSQL/PostGIS, AWS Lambda, Terraform e Cloudflare.",
      outcome: "A operação passou a ter execução de campo mais rastreável, indicadores por região e melhor visibilidade sobre atividades críticas.",
    },
  },
  en: {
    "acipg-bolao": {
      problem: "ACIPG needed to organize an internal sponsored pool without scattered controls and manual checking.",
      solution: "Kaiser Tech built an internal product with API, frontend and shared contracts to manage participants, rules and pool operations.",
      stack: "TypeScript, Fastify, Prisma, MySQL, React, Vite, Tailwind and Azure.",
      outcome: "The operation gained a more traceable digital flow for participation, internal management and product maintenance.",
    },
    "s4-treinamentos": {
      problem: "Training, inspections and assets needed traceability to reduce manual controls and improve information quality for audits.",
      solution: "The solution combined an institutional site, web/mobile systems, QR Code tracking and digital workflows for prevention-focused operations.",
      stack: "React, Vite, Node.js, AWS, React Native and QR Code.",
      outcome: "S4 improved asset and employee mapping, raised audit information quality and reduced dependency on manual processes.",
    },
    routini: {
      problem: "Small service businesses relied on WhatsApp to schedule appointments, confirm clients and organize daily routines.",
      solution: "Kaiser Tech built a scheduling system to centralize availability, bookings and service flow in a digital experience.",
      stack: "React, Vite, Node.js and AWS.",
      outcome: "The business gains clearer scheduling and reduces dependence on scattered WhatsApp conversations to organize appointments.",
    },
    amicord: {
      problem: "Facilities companies need to control teams, units, activities, checklists and field incidents without losing traceability.",
      solution: "Kaiser Tech built a custom platform with web dashboard, mobile app, location validation, QR Code, checklists, dashboards and a dedicated API.",
      stack: "React, React Native, Go, PostgreSQL/PostGIS, AWS Lambda, Terraform and Cloudflare.",
      outcome: "The operation gained more traceable field execution, regional indicators and better visibility over critical activities.",
    },
  },
  de: {
    "acipg-bolao": {
      problem: "ACIPG musste ein internes Tippspiel mit Sponsoring organisieren, ohne verteilte Kontrollen und manuelle Pruefung.",
      solution: "Kaiser Tech entwickelte ein internes Produkt mit API, Frontend und gemeinsamen Vertraegen fuer Teilnehmende, Regeln und Betrieb.",
      stack: "TypeScript, Fastify, Prisma, MySQL, React, Vite, Tailwind und Azure.",
      outcome: "Die Operation erhielt einen nachvollziehbareren digitalen Ablauf fuer Teilnahme, interne Verwaltung und Wartung.",
    },
    "s4-treinamentos": {
      problem: "Schulungen, Inspektionen und Assets brauchten Nachvollziehbarkeit, um manuelle Kontrollen zu reduzieren und Audit-Informationen zu verbessern.",
      solution: "Die Loesung kombinierte Website, Web-/Mobile-Systeme, QR-Code-Tracking und digitale Workflows fuer praeventionsorientierte Operationen.",
      stack: "React, Vite, Node.js, AWS, React Native und QR Code.",
      outcome: "S4 verbesserte Mapping von Assets und Mitarbeitenden, erhoehte Informationsqualitaet fuer Audits und reduzierte manuelle Prozesse.",
    },
    routini: {
      problem: "Kleine Dienstleistungsunternehmen nutzten WhatsApp fuer Termine, Kundenbestaetigungen und Tagesorganisation.",
      solution: "Kaiser Tech entwickelte ein Terminplanungssystem, das Verfuegbarkeit, Buchungen und Servicefluss digital zentralisiert.",
      stack: "React, Vite, Node.js und AWS.",
      outcome: "Das Unternehmen gewinnt planbarere Termine und reduziert die Abhaengigkeit von verstreuten WhatsApp-Gespraechen.",
    },
    amicord: {
      problem: "Facilities-Unternehmen muessen Teams, Einheiten, Aktivitaeten, Checklisten und Vorfaelle im Feld kontrollieren, ohne Nachvollziehbarkeit zu verlieren.",
      solution: "Kaiser Tech entwickelte eine Plattform mit Web-Dashboard, mobiler App, Standortvalidierung, QR Code, Checklisten, Dashboards und eigener API.",
      stack: "React, React Native, Go, PostgreSQL/PostGIS, AWS Lambda, Terraform und Cloudflare.",
      outcome: "Die Operation erhielt nachvollziehbarere Feldausfuehrung, regionale Kennzahlen und bessere Sicht auf kritische Aktivitaeten.",
    },
  },
};

const diagnosticDetails = {
  pt: {
    title: "Diagnóstico operacional para software sob medida | Kaiser Tech",
    markdownTitle: "Diagnóstico operacional para decidir software sob medida",
    description:
      "Checklist e matriz para decidir entre ferramenta pronta, automação, integração ou software sob medida em operações B2B.",
    summary:
      "Uma empresa tende a precisar de software próprio quando o processo é crítico, tem regras específicas, envolve muitos sistemas e perde rastreabilidade com planilhas ou ferramentas prontas.",
    checklist: [
      "Qual processo trava crescimento, qualidade ou entrega hoje?",
      "Quanto tempo ou dinheiro o improviso consome por semana?",
      "Quais sistemas, planilhas e pessoas participam do fluxo?",
      "Que dado precisa ser confiável para a decisão acontecer?",
      "O que acontece quando esse processo falha?",
      "Qual seria o primeiro resultado mensurável de uma solução melhor?",
    ],
    matrix: [
      "Ferramenta pronta: boa quando o processo é padrão e a empresa aceita trabalhar do jeito da ferramenta.",
      "Automação leve: boa quando o gargalo é repetitivo e pode ser resolvido conectando ferramentas existentes.",
      "Integração sob medida: boa quando sistemas existem, mas dados e erros precisam circular com rastreabilidade.",
      "Software sob medida: bom quando a operação é crítica, específica e precisa de regras, telas e dados próprios.",
    ],
  },
  en: {
    title: "Operational diagnosis for custom software | Kaiser Tech",
    markdownTitle: "Operational diagnosis for deciding custom software",
    description:
      "Checklist and matrix to decide between off-the-shelf tools, automation, integration or custom software for B2B operations.",
    summary:
      "A company tends to need custom software when the process is critical, has specific rules, involves many systems and loses traceability with spreadsheets or off-the-shelf tools.",
    checklist: [
      "Which process blocks growth, quality or delivery today?",
      "How much time or money does improvisation consume each week?",
      "Which systems, spreadsheets and people participate in the flow?",
      "Which data needs to be reliable for the decision to happen?",
      "What happens when this process fails?",
      "What would be the first measurable result of a better solution?",
    ],
    matrix: [
      "Off-the-shelf tool: good when the process is standard and the company accepts working the tool's way.",
      "Light automation: good when the bottleneck is repetitive and can be solved by connecting existing tools.",
      "Custom integration: good when systems exist, but data and errors need to move with traceability.",
      "Custom software: good when the operation is critical, specific and needs its own rules, screens and data.",
    ],
  },
  de: {
    title: "Operations-Diagnose fuer individuelle Software | Kaiser Tech",
    markdownTitle: "Operations-Diagnose fuer individuelle Software",
    description:
      "Checkliste und Matrix fuer Standardtool, Automatisierung, Integration oder individuelle Software in B2B-Operationen.",
    summary:
      "Ein Unternehmen braucht eher individuelle Software, wenn der Prozess kritisch ist, spezifische Regeln hat, viele Systeme einbindet und mit Tabellen oder Standardtools Nachvollziehbarkeit verliert.",
    checklist: [
      "Welcher Prozess blockiert heute Wachstum, Qualitaet oder Lieferung?",
      "Wie viel Zeit oder Geld kostet Improvisation pro Woche?",
      "Welche Systeme, Tabellen und Personen sind beteiligt?",
      "Welche Daten muessen verlaesslich sein, damit Entscheidungen passieren?",
      "Was passiert, wenn dieser Prozess fehlschlaegt?",
      "Was waere das erste messbare Ergebnis einer besseren Loesung?",
    ],
    matrix: [
      "Standardtool: gut, wenn der Prozess standardisiert ist und das Unternehmen nach Logik des Tools arbeiten kann.",
      "Leichte Automatisierung: gut, wenn der Engpass repetitiv ist und bestehende Tools verbunden werden koennen.",
      "Individuelle Integration: gut, wenn Systeme existieren, aber Daten und Fehler nachvollziehbar fliessen muessen.",
      "Individuelle Software: gut, wenn die Operation kritisch und spezifisch ist und eigene Regeln, Oberflaechen und Daten braucht.",
    ],
  },
};

const alternateSlug = (localeKey, kind, index) => {
  if (kind === "service") return locales[localeKey].services[index][0];
  if (kind === "case") return locales[localeKey].cases[index][0];
  if (kind === "methodology") return locales[localeKey].methodologySegment;
  if (kind === "glossary") return locales[localeKey].glossarySegment;
  if (kind === "diagnostic") return locales[localeKey].diagnosticSegment;
  if (kind === "privacy") return locales[localeKey].privacySegment;
  return "";
};

const buildAlternates = (kind = "home", index = 0) =>
  Object.fromEntries(
    Object.keys(locales).map((localeKey) => [
      localeKey,
      routePath(localeKey, kind, alternateSlug(localeKey, kind, index)),
    ]),
  );

const escapeAttribute = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
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

const replaceAlternateLink = (html, hreflang, href) => {
  const escapedHreflang = escapeAttribute(hreflang);
  const escapedHref = escapeAttribute(href);
  return html.replace(
    new RegExp(`<link\\s+rel="alternate"\\s+hreflang="${escapedHreflang}"\\s+href="[^"]*"\\s*/>`, "s"),
    `<link rel="alternate" hreflang="${escapedHreflang}" href="${escapedHref}" />`,
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
    html = replaceAlternateLink(html, hreflang, `${siteUrl}${route.alternates[localeKey]}`);
  }
  html = replaceAlternateLink(html, "x-default", `${siteUrl}${route.alternates.pt}`);
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
  return `${cleanPath || "/pt-br"}.md`;
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
      route.discovery ? "" : null,
      route.discovery ? "## Problem" : null,
      route.discovery ? "" : null,
      route.discovery?.problem,
      route.discovery ? "" : null,
      route.discovery ? "## Solution" : null,
      route.discovery ? "" : null,
      route.discovery?.solution,
      route.discovery ? "" : null,
      route.discovery ? "## Stack" : null,
      route.discovery ? "" : null,
      route.discovery?.stack,
      route.discovery ? "" : null,
      route.discovery ? "## Impact" : null,
      route.discovery ? "" : null,
      route.discovery?.outcome,
      "",
      "## What This Demonstrates",
      "",
      "This case demonstrates Kaiser Tech's work in turning real operational workflows into maintainable custom software, integrations and traceable digital operations.",
    );
  }

  if (route.kind === "methodology") {
    body.push(
      "",
      "## Methodology Details",
      "",
      route.methodologySummary,
      "",
      "## Expected Outcomes",
      "",
      markdownList(route.outcomes),
      "",
      "## Process Steps",
      "",
      markdownList(methodologySteps),
      "",
      "## Recommended Next Step",
      "",
      "Contact Kaiser Tech with the operational pain, involved systems, manual work, visible impact and urgency so the diagnosis can separate symptom, cause and possible solution paths.",
    );
  }

  if (route.kind === "glossary") {
    body.push(
      "",
      "## Defined Terms",
      "",
      route.terms.map(([term, definition]) => `### ${term}\n\n${definition}`).join("\n\n"),
      "",
      "## Recommended Next Step",
      "",
      "Use these definitions to describe the operational pain precisely before asking for custom software, integrations, modernization, infrastructure or database work.",
    );
  }

  if (route.kind === "diagnostic") {
    body.push(
      "",
      "## Framework Summary",
      "",
      route.diagnostic.summary,
      "",
      "## Diagnostic Checklist",
      "",
      markdownList(route.diagnostic.checklist),
      "",
      "## Decision Matrix",
      "",
      markdownList(route.diagnostic.matrix),
      "",
      "## Recommended Next Step",
      "",
      "Use this framework before building software to decide whether the right next step is an off-the-shelf tool, light automation, custom integration or custom software.",
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
  const methodologyRoutes = routes.filter((route) => route.kind === "methodology");
  const glossaryRoutes = routes.filter((route) => route.kind === "glossary");
  const diagnosticRoutes = routes.filter((route) => route.kind === "diagnostic");
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

## Methodology Pages

${markdownList(methodologyRoutes.map((route) => `[${route.lang} methodology](${markdownLinkForRoute(route)}): ${route.description}`))}

## Glossary Pages

${markdownList(glossaryRoutes.map((route) => `[${route.lang} glossary](${markdownLinkForRoute(route)}): ${route.description}`))}

## Diagnostic Framework Pages

${markdownList(diagnosticRoutes.map((route) => `[${route.lang} diagnostic framework](${markdownLinkForRoute(route)}): ${route.description}`))}

## Commercial Questions

${locales.en.homeFaq.map(([question, answer]) => `### ${question}\n\n${answer}`).join("\n\n")}

## Good-Fit Searches

- [Software sob medida](https://kaisertec.com.br/pt-br/solucoes/software-sob-medida.md): Consultoria de software sob medida para operacoes B2B no Brasil.
- [Integracoes sob medida](https://kaisertec.com.br/pt-br/solucoes/integracoes-sob-medida.md): Integracao entre sistemas empresariais, ERPs, CRMs, APIs e planilhas.
- [Custom software consulting](https://kaisertec.com.br/en/solutions/custom-software.md): Custom software consulting company for B2B operations.
- [B2B system integration](https://kaisertec.com.br/en/solutions/custom-integrations.md): Software consultancy for operational workflows and business integrations.
- [Individuelle Softwareentwicklung](https://kaisertec.com.br/de-de/loesungen/massgeschneiderte-software.md): Individuelle Softwareentwicklung fuer B2B-Unternehmen.
- [Systemintegration fuer Unternehmen](https://kaisertec.com.br/de-de/loesungen/massgeschneiderte-integrationen.md): B2B Softwareberatung fuer operative Workflows.

## Proof Points

- [Cases](https://kaisertec.com.br/en/#cases): Public examples include ACIPG Bolao, S4 Treinamentos, Routini and Amicord.
- [Methodology](https://kaisertec.com.br/en/methodology.md): Kaiser Tech uses a six-step methodology from pain diagnosis to reliable operation.
- [Operational diagnosis](https://kaisertec.com.br/en/operational-diagnosis.md): Decision framework for off-the-shelf tools, automation, integrations and custom software.
- [Glossary](https://kaisertec.com.br/en/glossary.md): Short definitions for the operational software terms used across the site.
- [Technical proof](https://kaisertec.com.br/en/#proof): The company focuses on traceable systems, integrations, maintainability and operational reliability.
- [Contact](https://kaisertec.com.br/en/#contact): The best next step is to describe the operational pain through the site form.

## Legal

${markdownList(privacyRoutes.map((route) => `[${route.title}](${markdownLinkForRoute(route)})`))}

## Optional

- [Sitemap](https://kaisertec.com.br/sitemap.xml): Canonical indexable URLs and localized alternates.
- [Robots](https://kaisertec.com.br/robots.txt): Crawl access directives for search and AI-related crawlers.
`;
};

const buildSitemap = (routes) => {
  const urlEntries = routes
    .map((route) => {
      const alternates = Object.entries(localeHreflangs)
        .map(([localeKey, hreflang]) => {
          const href = `${siteUrl}${route.alternates[localeKey]}`;
          return `    <xhtml:link rel="alternate" hreflang="${escapeXml(hreflang)}" href="${escapeXml(href)}" />`;
        })
        .join("\n");

      return `  <url>
    <loc>${escapeXml(`${siteUrl}${route.path}`)}</loc>
    <lastmod>${escapeXml(route.lastmod)}</lastmod>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${siteUrl}${route.alternates.pt}`)}" />
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;
};

const routes = [];

for (const localeKey of Object.keys(locales)) {
  const locale = locales[localeKey];
  routes.push({
    kind: "home",
    path: routePath(localeKey),
    lastmod: defaultLastmod,
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
    lastmod: privacyLastmod,
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

  routes.push({
    kind: "methodology",
    path: routePath(localeKey, "methodology"),
    lastmod: defaultLastmod,
    lang: locale.lang,
    ogLocale: locale.ogLocale,
    title: locale.methodology.title,
    markdownTitle: locale.methodology.markdownTitle,
    description: locale.methodology.description,
    methodologySummary: locale.methodology.summary,
    outcomes: locale.methodology.outcomes,
    structuredData: {
      "@type": "WebPage",
      "@id": `${siteUrl}${routePath(localeKey, "methodology")}#methodology`,
      name: locale.methodology.title,
      description: locale.methodology.description,
      url: `${siteUrl}${routePath(localeKey, "methodology")}`,
      inLanguage: locale.lang,
      publisher: { "@id": `${siteUrl}/#organization` },
      about: {
        "@type": "Thing",
        name: locale.methodology.markdownTitle,
        description: locale.methodology.summary,
      },
    },
    alternates: buildAlternates("methodology"),
  });

  routes.push({
    kind: "glossary",
    path: routePath(localeKey, "glossary"),
    lastmod: defaultLastmod,
    lang: locale.lang,
    ogLocale: locale.ogLocale,
    title: locale.glossary.title,
    markdownTitle: locale.glossary.markdownTitle,
    description: locale.glossary.description,
    terms: locale.glossary.terms,
    structuredData: {
      "@type": "DefinedTermSet",
      "@id": `${siteUrl}${routePath(localeKey, "glossary")}#glossary`,
      name: locale.glossary.title,
      description: locale.glossary.description,
      url: `${siteUrl}${routePath(localeKey, "glossary")}`,
      inLanguage: locale.lang,
      publisher: { "@id": `${siteUrl}/#organization` },
      hasDefinedTerm: locale.glossary.terms.map(([term, definition]) => ({
        "@type": "DefinedTerm",
        name: term,
        description: definition,
        inDefinedTermSet: `${siteUrl}${routePath(localeKey, "glossary")}#glossary`,
      })),
    },
    alternates: buildAlternates("glossary"),
  });

  routes.push({
    kind: "diagnostic",
    path: routePath(localeKey, "diagnostic"),
    lastmod: defaultLastmod,
    lang: locale.lang,
    ogLocale: locale.ogLocale,
    title: diagnosticDetails[localeKey].title,
    markdownTitle: diagnosticDetails[localeKey].markdownTitle,
    description: diagnosticDetails[localeKey].description,
    diagnostic: diagnosticDetails[localeKey],
    structuredData: {
      "@type": "WebPage",
      "@id": `${siteUrl}${routePath(localeKey, "diagnostic")}#diagnostic-framework`,
      name: diagnosticDetails[localeKey].title,
      description: diagnosticDetails[localeKey].description,
      url: `${siteUrl}${routePath(localeKey, "diagnostic")}`,
      inLanguage: locale.lang,
      publisher: { "@id": `${siteUrl}/#organization` },
      about: {
        "@type": "Thing",
        name: diagnosticDetails[localeKey].markdownTitle,
        description: diagnosticDetails[localeKey].summary,
      },
      mainEntity: {
        "@type": "ItemList",
        name: "Operational diagnosis checklist",
        itemListElement: diagnosticDetails[localeKey].checklist.map((item, itemIndex) => ({
          "@type": "ListItem",
          position: itemIndex + 1,
          name: item,
        })),
      },
    },
    alternates: buildAlternates("diagnostic"),
  });

  locale.services.forEach(([slug, title, description], index) => {
    const serviceName = title.replace(" | Kaiser Tech", "");
    const serviceCopy = servicePageDetails[localeKey][index];
    routes.push({
      kind: "service",
      path: routePath(localeKey, "service", slug),
      lastmod: defaultLastmod,
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
    const discovery = caseDiscovery[localeKey][slug];
    routes.push({
      kind: "case",
      path: routePath(localeKey, "case", slug),
      lastmod: defaultLastmod,
      lang: locale.lang,
      ogLocale: locale.ogLocale,
      title,
      description,
      caseName,
      caseSubtitle: caseCopy.subtitle,
      caseUrl: caseCopy.siteUrl,
      discovery,
      structuredData: {
        "@type": "CreativeWork",
        "@id": `${siteUrl}${routePath(localeKey, "case", slug)}#case`,
        name: caseName,
        description: discovery ? `${description} Problem: ${discovery.problem} Solution: ${discovery.solution} Impact: ${discovery.outcome}` : description,
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
await writeFile(join(dist, "sitemap.xml"), buildSitemap(routes), "utf8");

console.log(`Generated ${routes.length} localized SEO entrypoints, Markdown pages and sitemap.`);
