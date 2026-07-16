export type Locale = "pt" | "en";

export const dictionary = {
  pt: {
    nav: {
      services: "Soluções",
      cases: "Cases",
      method: "Método",
      proof: "Prova técnica",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Software sob medida para operações exigentes",
      title: "Tiramos sua operação do improviso.",
      subtitle:
        "A Kaiser Tech cria sistemas internos, integra processos e transforma gargalos operacionais em software rastreável, mantível e pronto para escalar.",
      cta: "Resolver minha dor",
      secondary: "Ver como atuamos",
      trust:
        "Conte sua dor. A resposta inicial separa sintoma, causa provável e próximos passos.",
      metrics: [
        [
          "6+ anos",
          "criando sistemas para govtechs, indústrias e empresas privadas",
        ],
        ["Operações", "para gestores e equipes que precisam de controle real"],
        ["Sob medida", "quando ferramenta pronta não acompanha o processo"],
      ],
    },
    pain: {
      title: "Quando a operação cresce, o improviso cobra juros",
      items: [
        {
          title: "Processos manuais",
          body: "Planilhas, retrabalho e aprovações espalhadas atrasam decisões que deveriam ser simples.",
        },
        {
          title: "Sistemas que não conversam",
          body: "Informações duplicadas, integrações frágeis e times dependendo de conferência manual.",
        },
        {
          title: "Falta de visibilidade",
          body: "Gestores operam sem dados confiáveis, sem rastreabilidade e sem clareza sobre gargalos.",
        },
      ],
    },
    servicesTitle: [
      "Software sob medida no centro.",
      "Engenharia forte ao redor.",
    ],
    servicesIntro:
      "A solução principal é construir o sistema certo para o processo. As demais frentes entram para integrar, estabilizar e escalar esse software com segurança.",
    services: [
      {
        title: "Software sob medida",
        body: "Sistemas internos, portais, automações e produtos B2B criados a partir do fluxo real da sua operação.",
        stack: "TypeScript / Go / React",
      },
      {
        title: "Integrações sob medida",
        body: "Conectamos ERPs, CRMs, gateways, planilhas, APIs legadas e serviços externos sem perder rastreabilidade.",
        stack: "REST / Webhooks / Queues",
      },
      {
        title: "Refatorações de legado",
        body: "Quando já existe uma base, reduzimos risco, organizamos domínios e criamos caminhos incrementais de modernização.",
        stack: "Architecture / CI/CD / Testing",
      },
      {
        title: "Otimização de infraestrutura",
        body: "Migração de clusters monolíticos para arquiteturas elásticas ou Kubernetes bem configurado, com foco em 99.99% de uptime.",
        stack: "Terraform / Ansible / Helm",
      },
      {
        title: "Refatoração de código",
        body: "Organizamos código gerado por IA, aplicamos padrões de projeto sólidos e criamos pipelines de CI/CD que realmente pegam bugs.",
        stack: "Go / Rust / TypeScript",
      },
      {
        title: "Performance de banco de dados",
        body: "Estratégias de indexação, sharding e cache que reduzem a latência das consultas mais críticas.",
        stack: "Postgres / Redis / ScyllaDB",
      },
      {
        title: "FinOps",
        body: "Redução imediata de gastos em cloud via instâncias spot, remoção de recursos ociosos e ajustes arquiteturais.",
        stack: "AWS / GCP / Observability",
      },
    ],
    casesTitle: "Cases de software que viram operação",
    casesIntro:
      "Projetos criados do zero para transformar processos reais em sistemas internos, produtos digitais e operação rastreável.",
    caseModalClose: "Fechar case",
    caseSiteLabel: "Acessar site",
    cases: [
      {
        title: "ACIPG Bolão",
        subtitle: "Bolão interno com patrocínios para a ACIPG",
        imageLabel: "ACIPG",
        imageSrc: "/acipgBolao.webp",
        accent: "#FC4103",
        description:
          "Produto interno para gestão de bolão com participação patrocinada, criado em monorepo TypeScript com API Fastify, Prisma, MySQL, frontend React, Vite e Tailwind. O projeto usa Zod compartilhado entre API e web para manter contrato consistente e API hospedada na Azure.",
      },
      {
        title: "S4 Treinamentos",
        subtitle: "Inspeções, treinamentos e rastreabilidade operacional",
        imageLabel: "S4",
        imageSrc: "/s4.webp",
        siteUrl: "https://s4treinamentos.com.br",
        accent: "#7C5CFF",
        description:
          "Site institucional e sistemas web/mobile para inspeções e gestão de treinamentos, com rastreamento por QR Code para ativos e colaboradores. A solução foi desenhada para prevenção operacional, usando React, Vite, Node.js, AWS e React Native.",
      },
      {
        title: "Routini",
        subtitle: "Agendamento de serviços para pequenos negócios",
        imageLabel: "Routini",
        imageSrc: "/routini.webp",
        siteUrl: "https://routini.com.br",
        accent: "#F7F5F2",
        description:
          "Sistema para agendamento de serviços que ajuda pequenos empreendedores a reduzirem dependência do WhatsApp para marcações. Pensado para rotinas como pedicure, salão de beleza, barbearia e massoterapia, com frontend React/Vite, backend Node.js e infraestrutura AWS.",
      },
      {
        title: "Amicord",
        subtitle: "Facilities com checklists, GPS e QR Code",
        imageLabel: "Amicord",
        imageSrc: "/amicord.webp",
        siteUrl: "https://amicord.com",
        accent: "#36255C",
        description:
          "Sistema de gestão de facilities para empresas terceirizadas e seus clientes, com criação de checklists, atividades para colaboradores e app mobile para operação diária com GPS e QR Code. A plataforma usa React 19, Vite 7, TanStack, Tailwind 4, Zustand, React Hook Form, Zod, Ky, Leaflet, Motion, Go, Echo, PostgreSQL/PostGIS, AWS Lambda, RDS, Terraform e Cloudflare.",
      },
    ],
    method: {
      title: "Como a Kaiser Tech trabalha",
      steps: [
        [
          "01",
          "Diagnóstico",
          "Mapeamos a dor, o impacto financeiro e os pontos técnicos que sustentam o problema.",
        ],
        [
          "02",
          "Plano executivo",
          "Priorizamos iniciativas com retorno claro, risco controlado e entregas verificáveis.",
        ],
        [
          "03",
          "Execução técnica",
          "Construímos, refatoramos ou migramos com checkpoints curtos e visibilidade constante.",
        ],
        [
          "04",
          "Operação confiável",
          "Deixamos métricas, documentação, automações e pipelines para sustentar evolução.",
        ],
      ],
    },
    proof: {
      title: "Nem toda dor precisa virar software",
      copy: "Quando processo, ferramenta pronta ou ajuste operacional resolver melhor, falamos isso com clareza. Quando software fizer sentido, construímos com domínio técnico, visão de negócio e responsabilidade sobre manutenção.",
      bullets: [
        "Mais de 6 anos de mercado",
        "Experiência com govtechs, indústrias e empresas privadas",
        "Projetos sob sigilo quando necessário",
        "Transparência para dizer o que não fazemos",
      ],
    },
    form: {
      title: "Conte sua dor",
      subtitle:
        "Envie o gargalo técnico ou operacional. A resposta inicial busca identificar oportunidade, causa provável e próximos passos.",
      name: "Nome",
      email: "Email",
      company: "Empresa",
      painType: "Tipo de dor",
      painTypePlaceholder: "Selecione uma opção",
      painTypes: [
        "Processo manual",
        "Sistema interno ruim",
        "Planilhas demais",
        "Integração entre sistemas",
        "Falta de dados confiáveis",
        "Infraestrutura, custo ou performance",
        "Outro",
      ],
      pain: "Qual dor você quer resolver?",
      submit: "Enviar diagnóstico",
    },
    footer: "Kaiser Tech - Consultoria de tecnologia",
  },
  en: {
    nav: {
      services: "Solutions",
      cases: "Cases",
      method: "Method",
      proof: "Technical proof",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Custom software for demanding operations",
      title: "We take operations out of improvisation.",
      subtitle:
        "Kaiser Tech builds internal systems, integrates processes and turns operational bottlenecks into traceable, maintainable software ready to scale.",
      cta: "Solve my pain",
      secondary: "See how we work",
      trust:
        "Tell us your pain. The first response separates symptom, likely cause and next steps.",
      metrics: [
        [
          "6+ years",
          "building systems for govtechs, industries and private companies",
        ],
        ["Operations", "for managers and teams that need real control"],
        ["Custom", "when off-the-shelf tools cannot follow the process"],
      ],
    },
    pain: {
      title: "When operations grow, improvisation gets expensive",
      items: [
        {
          title: "Manual processes",
          body: "Spreadsheets, rework and scattered approvals slow down decisions that should be simple.",
        },
        {
          title: "Disconnected systems",
          body: "Duplicated information, fragile integrations and teams depending on manual checks.",
        },
        {
          title: "Poor visibility",
          body: "Managers operate without reliable data, traceability or clarity around bottlenecks.",
        },
      ],
    },
    servicesTitle: [
      "Custom software at the center.",
      "Strong engineering around it.",
    ],
    servicesIntro:
      "The main solution is building the right system for the process. The other fronts support it with integration, stability and scale.",
    services: [
      {
        title: "Custom software",
        body: "Internal systems, portals, automations and B2B products built around your real operating flow.",
        stack: "TypeScript / Go / React",
      },
      {
        title: "Custom integrations",
        body: "We connect ERPs, CRMs, gateways, spreadsheets, legacy APIs and external services without losing traceability.",
        stack: "REST / Webhooks / Queues",
      },
      {
        title: "Legacy refactoring",
        body: "When a base already exists, we lower risk, organize domains and create incremental modernization paths.",
        stack: "Architecture / CI/CD / Testing",
      },
      {
        title: "Infrastructure optimization",
        body: "Migration from monolithic clusters to elastic architectures or well-configured Kubernetes, aiming at 99.99% uptime.",
        stack: "Terraform / Ansible / Helm",
      },
      {
        title: "Code refactoring",
        body: "We organize AI-generated code, apply solid design patterns and create CI/CD pipelines that actually catch bugs.",
        stack: "Go / Rust / TypeScript",
      },
      {
        title: "Database performance",
        body: "Indexing, sharding and cache strategies that reduce latency in the most critical queries.",
        stack: "Postgres / Redis / ScyllaDB",
      },
      {
        title: "FinOps",
        body: "Immediate cloud spend reduction through spot instances, idle resource cleanup and architectural adjustments.",
        stack: "AWS / GCP / Observability",
      },
    ],
    casesTitle: "Software cases that become operations",
    casesIntro:
      "Projects built from scratch to turn real processes into internal systems, digital products and traceable operations.",
    caseModalClose: "Close case",
    caseSiteLabel: "Visit site",
    cases: [
      {
        title: "ACIPG Bolao",
        subtitle: "Internal pool system with sponsorships for ACIPG",
        imageLabel: "ACIPG",
        imageSrc: "/acipgBolao.webp",
        accent: "#FC4103",
        description:
          "Internal product for managing a sponsored pool, built as a TypeScript monorepo with Fastify API, Prisma, MySQL, React, Vite and Tailwind. The project uses shared Zod schemas between API and web to keep contracts consistent, with the API hosted on Azure.",
      },
      {
        title: "S4 Treinamentos",
        subtitle: "Inspections, training and operational traceability",
        imageLabel: "S4",
        imageSrc: "/s4.webp",
        siteUrl: "https://s4treinamentos.com.br",
        accent: "#7C5CFF",
        description:
          "Institutional website plus web/mobile systems for inspections and training management, with QR Code tracking for assets, equipment and employees. The solution was designed for prevention-focused operations using React, Vite, Node.js, AWS and React Native.",
      },
      {
        title: "Routini",
        subtitle: "Service scheduling for small businesses",
        imageLabel: "Routini",
        imageSrc: "/routini.webp",
        siteUrl: "https://routini.com.br",
        accent: "#F7F5F2",
        description:
          "Scheduling system that helps small entrepreneurs reduce dependence on WhatsApp to book services. Designed for routines such as pedicure, beauty salons, barbershops and massage therapy, with React/Vite frontend, Node.js backend and AWS infrastructure.",
      },
      {
        title: "Amicord",
        subtitle: "Facilities with checklists, GPS and QR Code",
        imageLabel: "Amicord",
        imageSrc: "/amicord.webp",
        siteUrl: "https://amicord.com.br",
        accent: "#36255C",
        description:
          "Facilities management system for outsourced companies and their clients, with checklist creation, employee activities and a mobile app for daily operations using GPS and QR Code. The platform uses React 19, Vite 7, TanStack, Tailwind 4, Zustand, React Hook Form, Zod, Ky, Leaflet, Motion, Go, Echo, PostgreSQL/PostGIS, AWS Lambda, RDS, Terraform and Cloudflare.",
      },
    ],
    method: {
      title: "How Kaiser Tech works",
      steps: [
        [
          "01",
          "Diagnosis",
          "We map the pain, financial impact and technical causes behind the problem.",
        ],
        [
          "02",
          "Executive plan",
          "We prioritize initiatives with clear ROI, controlled risk and verifiable delivery.",
        ],
        [
          "03",
          "Technical execution",
          "We build, refactor or migrate with short checkpoints and constant visibility.",
        ],
        [
          "04",
          "Reliable operation",
          "We leave metrics, documentation, automation and pipelines to support evolution.",
        ],
      ],
    },
    proof: {
      title: "Not every pain needs to become software",
      copy: "When process, an off-the-shelf tool or an operational adjustment solves the problem better, we say it clearly. When software makes sense, we build it with technical depth, business context and responsibility for maintainability.",
      bullets: [
        "More than 6 years in the market",
        "Experience with govtechs, industries and private companies",
        "Confidential projects when required",
        "Transparency to say what we do not do",
      ],
    },
    form: {
      title: "Tell us your pain",
      subtitle:
        "Send the technical or operational bottleneck. The first response aims to identify opportunity, likely cause and next steps.",
      name: "Name",
      email: "Email",
      company: "Company",
      painType: "Pain type",
      painTypePlaceholder: "Select an option",
      painTypes: [
        "Manual process",
        "Poor internal system",
        "Too many spreadsheets",
        "Systems integration",
        "Lack of reliable data",
        "Infrastructure, cost or performance",
        "Other",
      ],
      pain: "Which pain do you want to solve?",
      submit: "Send diagnosis",
    },
    footer: "Kaiser Tech - Technology consulting",
  },
} as const;
