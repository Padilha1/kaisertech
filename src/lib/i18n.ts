export type Locale = "pt" | "en" | "de";

export const dictionary = {
  pt: {
    seo: {
      lang: "pt-BR",
      title: "Kaiser Tech | Software sob medida para operações B2B",
      description:
        "Kaiser Tech cria software sob medida, integra processos e transforma gargalos operacionais em sistemas rastreáveis, mantíveis e prontos para escalar.",
      ogTitle: "Kaiser Tech | Software sob medida no centro",
      ogDescription:
        "Consultoria de tecnologia para empresas que precisam sair do improviso, integrar processos e escalar com engenharia forte.",
      ogLocale: "pt_BR",
    },
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
    servicePages: [
      {
        lead:
          "Criamos sistemas internos e produtos B2B para empresas que já tentaram adaptar planilhas, ferramentas prontas ou processos manuais e chegaram no limite.",
        deliverables: [
          "Mapeamento do fluxo real da operação antes de definir telas e arquitetura.",
          "Frontend, backend, banco de dados, autenticação, permissões e deploy preparados para evolução.",
          "Produto construído com rastreabilidade, validação de dados, integrações e visão operacional.",
        ],
        fit: [
          "A operação depende de planilhas, WhatsApp ou conferências manuais.",
          "Ferramentas prontas não acompanham regras internas, aprovações ou exceções.",
          "Gestores precisam enxergar gargalos, status e histórico sem pedir relatório para o time.",
        ],
        examples: [
          "Portais internos para equipes comerciais, operacionais ou administrativas.",
          "Sistemas de agendamento, checklists, rastreabilidade, inspeções e gestão de ativos.",
          "Produtos B2B criados do zero para substituir processos frágeis.",
        ],
        faq: [
          [
            "Quando software sob medida vale a pena?",
            "Quando o processo gera receita, reduz risco ou consome tempo suficiente para justificar uma solução própria. Se uma ferramenta pronta resolver melhor, apontamos esse caminho.",
          ],
          [
            "A Kaiser Tech pega projetos do zero?",
            "Sim. Atuamos do diagnóstico ao deploy, incluindo produto, arquitetura, implementação e próximos passos de evolução.",
          ],
        ],
      },
      {
        lead:
          "Conectamos sistemas que precisam conversar sem transformar a operação em uma cadeia de conferências manuais, exports e retrabalho.",
        deliverables: [
          "Desenho do fluxo de dados entre sistemas, responsabilidades e pontos de falha.",
          "APIs, webhooks, filas, jobs e validações para sincronização confiável.",
          "Logs, alertas e rastreabilidade para descobrir rapidamente onde uma integração falhou.",
        ],
        fit: [
          "ERP, CRM, gateway, planilhas ou sistemas legados guardam partes diferentes da mesma operação.",
          "Times perdem tempo copiando informação ou corrigindo divergências.",
          "A empresa precisa automatizar sem perder controle sobre erros e exceções.",
        ],
        examples: [
          "Integração entre sistema interno e ERP/CRM.",
          "Sincronização com gateways de pagamento, marketplaces ou serviços externos.",
          "Camadas de API para organizar acesso a sistemas legados.",
        ],
        faq: [
          [
            "Integração sob medida é só conectar APIs?",
            "Não. O trabalho principal é desenhar contrato, falhas, retentativas, auditoria e regras de negócio para que a operação confie nos dados.",
          ],
          [
            "Vocês integram sistemas antigos?",
            "Sim, desde que exista algum caminho técnico viável: API, banco, arquivo, fila, automação controlada ou camada intermediária.",
          ],
        ],
      },
      {
        lead:
          "Modernizamos sistemas existentes sem apostar a operação inteira em uma reescrita arriscada.",
        deliverables: [
          "Diagnóstico de acoplamento, gargalos, domínios críticos e pontos de maior risco.",
          "Plano incremental para refatorar, modularizar, testar e substituir partes do legado.",
          "Pipelines, testes e documentação suficiente para o time evoluir com menos medo.",
        ],
        fit: [
          "O sistema funciona, mas cada mudança pequena ameaça quebrar produção.",
          "O conhecimento ficou concentrado em poucas pessoas ou em código difícil de ler.",
          "A empresa quer evoluir sem paralisar a operação para reescrever tudo.",
        ],
        examples: [
          "Separação de domínios em sistemas monolíticos.",
          "Criação de testes em fluxos críticos antes de mudanças estruturais.",
          "Migração gradual de partes do sistema para arquitetura mais clara.",
        ],
        faq: [
          [
            "Vocês preferem refatorar ou reescrever?",
            "Depende do risco. Na maioria dos casos, uma modernização incremental preserva operação e caixa melhor do que reescrever tudo.",
          ],
          [
            "Dá para trabalhar em código legado gerado por IA?",
            "Sim. Organizamos estrutura, contratos, testes, padrões e pipelines para reduzir fragilidade.",
          ],
        ],
      },
      {
        lead:
          "Ajustamos infraestrutura para suportar crescimento com disponibilidade, observabilidade e custo controlado.",
        deliverables: [
          "Diagnóstico de arquitetura, deploy, gargalos, custos e riscos operacionais.",
          "Automação de infraestrutura, ambientes, pipelines e configurações reproduzíveis.",
          "Plano de escala com Kubernetes, arquitetura elástica ou simplificação quando fizer mais sentido.",
        ],
        fit: [
          "A cloud cresce sem clareza de custo, dono ou necessidade real.",
          "Deploys são tensos, manuais ou dependem de conhecimento informal.",
          "O produto precisa melhorar disponibilidade, performance ou previsibilidade operacional.",
        ],
        examples: [
          "Revisão de clusters, workloads, autoscaling e observabilidade.",
          "Infraestrutura como código com Terraform, Ansible ou Helm.",
          "Migração de ambientes frágeis para arquitetura mais elástica.",
        ],
        faq: [
          [
            "Kubernetes sempre é a melhor solução?",
            "Não. Kubernetes mal configurado vira custo e complexidade. Recomendamos quando ele resolve um problema real de operação.",
          ],
          [
            "Vocês cuidam de custo junto com infraestrutura?",
            "Sim. Disponibilidade sem governança de custo vira desperdício. Olhamos as duas coisas juntas.",
          ],
        ],
      },
      {
        lead:
          "Organizamos bases de código difíceis de evoluir para que novas features deixem de depender de sorte.",
        deliverables: [
          "Leitura crítica de arquitetura, padrões, duplicações e pontos de fragilidade.",
          "Refatoração orientada a fluxo de negócio, testes e redução de acoplamento.",
          "CI/CD, lint, testes e revisões que pegam erro antes de chegar em produção.",
        ],
        fit: [
          "O time evita mexer em partes do sistema porque não sabe o que pode quebrar.",
          "Código gerado por IA acelerou entrega, mas deixou estrutura inconsistente.",
          "A empresa precisa aumentar velocidade sem acumular dívida técnica invisível.",
        ],
        examples: [
          "Reorganização de módulos, camadas e contratos.",
          "Introdução de testes em jornadas críticas.",
          "Padronização de TypeScript, Go, Rust ou backend/frontend existente.",
        ],
        faq: [
          [
            "Refatoração atrasa o produto?",
            "Refatoração sem foco atrasa. Refatoração ligada a fluxos críticos reduz retrabalho e melhora velocidade real.",
          ],
          [
            "Vocês trabalham junto com o time interno?",
            "Sim. Podemos executar, orientar arquitetura e deixar padrões para o time continuar.",
          ],
        ],
      },
      {
        lead:
          "Melhoramos consultas, modelos e cache para reduzir latência onde o banco realmente trava a operação.",
        deliverables: [
          "Análise de queries críticas, índices, cardinalidade, locks e padrões de acesso.",
          "Ajustes de modelagem, cache, particionamento ou sharding quando fizer sentido.",
          "Medição antes/depois para provar ganho e evitar otimização cosmética.",
        ],
        fit: [
          "Relatórios, telas ou APIs ficam lentas conforme dados crescem.",
          "O banco virou gargalo, mas não está claro se o problema é query, índice, cache ou arquitetura.",
          "A operação precisa reduzir latência sem trocar tudo de uma vez.",
        ],
        examples: [
          "Revisão de consultas PostgreSQL e estratégia de índices.",
          "Cache com Redis para leituras repetidas e fluxos críticos.",
          "Modelagem para alto volume com Postgres, Redis ou ScyllaDB.",
        ],
        faq: [
          [
            "Performance de banco é só criar índice?",
            "Não. Índice ajuda, mas também pode piorar escrita e custo. Olhamos query, modelo, volume, cache e uso real.",
          ],
          [
            "Vocês fazem otimização sem derrubar produção?",
            "Sim. O trabalho precisa ser medido, gradual e reversível quando envolve sistema crítico.",
          ],
        ],
      },
      {
        lead:
          "Reduzimos gasto de cloud sem tratar custo como corte cego: primeiro entendemos operação, risco e arquitetura.",
        deliverables: [
          "Mapa de recursos ociosos, superdimensionados ou sem dono claro.",
          "Ajustes de instâncias, storage, autoscaling, spot e arquitetura quando aplicável.",
          "Relatório pragmático separando economia rápida, risco técnico e próximos passos.",
        ],
        fit: [
          "A conta de cloud cresce mais rápido que o uso real do produto.",
          "Existem ambientes, bancos, volumes ou workloads ativos sem clareza de necessidade.",
          "A empresa quer reduzir custo sem comprometer disponibilidade ou entrega.",
        ],
        examples: [
          "Remoção de recursos ociosos e ajuste de tamanhos.",
          "Uso controlado de instâncias spot para workloads adequados.",
          "Revisão arquitetural para evitar desperdício recorrente.",
        ],
        faq: [
          [
            "FinOps é só reduzir custo?",
            "Não. FinOps bom reduz desperdício sem matar confiabilidade. A meta é custo proporcional ao valor gerado.",
          ],
          [
            "Dá para ter economia rápida?",
            "Frequentemente sim, principalmente em recursos ociosos e superdimensionados. Mudanças estruturais exigem mais cuidado.",
          ],
        ],
      },
    ],
    casesTitle: "Cases de software que viram operação",
    casesIntro:
      "Projetos criados do zero para transformar processos reais em sistemas internos, produtos digitais e operação rastreável.",
    caseModalClose: "Fechar case",
    caseSiteLabel: "Acessar site",
    detail: {
      viewService: "Ver solução completa",
      viewCase: "Ver case completo",
      backHome: "Voltar para a landing",
      serviceEyebrow: "Solução Kaiser Tech",
      caseEyebrow: "Case Kaiser Tech",
      whatWeDeliver: "O que entregamos",
      goodFit: "Quando faz sentido",
      examples: "Exemplos de aplicação",
      faq: "Perguntas frequentes",
      technologies: "Tecnologias",
      talkAboutThis: "Quero esta solução",
      relatedSolutions: "Soluções relacionadas",
      relatedCases: "Cases relacionados",
      caseImpact: "Contexto do projeto",
      futureGerman: "Versão de-DE ativa para o mercado alemão.",
    },
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
        deliverables: [
          "Software sob medida",
          "Integrações sob medida",
          "Melhora na qualidade de rastreabilidade",
          "Melhora no mapeamento de ativos e funcionários dos clientes",
          "Aumento da qualidade das informações para auditorias",
        ],
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
        subtitle: "Sistema sob medida para gestão de facilities",
        imageLabel: "Amicord",
        imageSrc: "/amicord.webp",
        siteUrl: "https://amicord.com",
        accent: "#36255C",
        description:
          "Plataforma sob medida para empresas terceirizadas de facilities gerenciarem equipes, clientes, unidades, atividades operacionais e checklists de campo em tempo real. A solução une painel web, operação mobile, dashboards, API própria e infraestrutura cloud escalável com React, React Native, Go, PostgreSQL/PostGIS, AWS Lambda, Terraform e Cloudflare.",
        deliverables: [
          {
            title: "Plataforma web de gestão",
            body: "Painel administrativo para organizar clientes, unidades, postos de trabalho, regiões, colaboradores, usuários, permissões, escalas, checklists, atividades, ocorrências, monitoramento e relatórios.",
          },
          {
            title: "Operação em campo com rastreabilidade",
            body: "Fluxos preparados para uso operacional com validação por localização, QR Code, registro de atividades e acompanhamento da execução diária dos colaboradores.",
          },
          {
            title: "Checklists e atividades personalizadas",
            body: "Criação e controle de checklists, tarefas e rotinas operacionais adaptadas ao funcionamento da empresa, reduzindo controles manuais e melhorando a padronização.",
          },
          {
            title: "Monitoramento e indicadores",
            body: "Dashboards e relatórios para acompanhar status dos colaboradores, desempenho por região, eventos recentes, ocorrências e informações críticas da operação.",
          },
          {
            title: "Arquitetura cloud escalável",
            body: "Backend em Go, API estruturada, PostgreSQL/PostGIS, deploy serverless em AWS Lambda, infraestrutura com Terraform e configuração de domínio/DNS via Cloudflare.",
          },
          {
            title: "Integrações e automações sob medida",
            body: "APIs, autenticação, recuperação de senha por email, documentação OpenAPI e estrutura preparada para integração com sistemas externos conforme a necessidade do cliente.",
          },
          {
            title: "Transparência técnica e comercial",
            body: "Clareza sobre escopo, limitações, responsabilidades e pontos que não fazem parte da solução, evitando promessas vagas e alinhando a entrega à realidade da operação.",
          },
        ],
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
      submitting: "Enviando...",
      success: "Recebemos sua dor. Vamos responder com um diagnóstico inicial em breve.",
      error: "Não conseguimos enviar agora. Tente novamente em instantes.",
    },
    footer: {
      tagline:
        "Software sob medida para operações que precisam sair do improviso e escalar com rastreabilidade.",
      navLabel: "Navegação do rodapé",
      navTitle: "Navegação",
      privacyPolicy: "Política de Privacidade",
      legalName: "Kaiser Labs Tecnologia LTDA",
      country: "Brazil",
      socialLabel: "Links sociais",
      instagramLabel: "Instagram de Matheus Padilha",
      linkedinLabel: "LinkedIn de Matheus Padilha",
      rightsPrefix: "Direitos reservados",
      developedBy: "Desenvolvido por Matheus Padilha",
    },
  },
  en: {
    seo: {
      lang: "en",
      title: "Kaiser Tech | Custom software for B2B operations",
      description:
        "Kaiser Tech builds custom software, integrates processes and turns operational bottlenecks into traceable, maintainable systems ready to scale.",
      ogTitle: "Kaiser Tech | Custom software at the center",
      ogDescription:
        "Technology consulting for companies that need to leave improvisation behind, integrate processes and scale with strong engineering.",
      ogLocale: "en_US",
    },
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
    servicePages: [
      {
        lead:
          "We build internal systems and B2B products for companies that have outgrown spreadsheets, off-the-shelf tools and manual workflows.",
        deliverables: [
          "Mapping of the real operational flow before screens and architecture are defined.",
          "Frontend, backend, database, authentication, permissions and deployment prepared for evolution.",
          "A product built with traceability, data validation, integrations and operational visibility.",
        ],
        fit: [
          "The operation depends on spreadsheets, WhatsApp or manual checks.",
          "Off-the-shelf tools cannot follow internal rules, approvals or exceptions.",
          "Managers need to see bottlenecks, status and history without asking the team for reports.",
        ],
        examples: [
          "Internal portals for sales, operations or administrative teams.",
          "Scheduling, checklist, traceability, inspection and asset-management systems.",
          "B2B products built from scratch to replace fragile workflows.",
        ],
        faq: [
          [
            "When is custom software worth it?",
            "When the process generates revenue, reduces risk or consumes enough time to justify owning the solution. If an off-the-shelf tool is better, we say so.",
          ],
          [
            "Can Kaiser Tech start from zero?",
            "Yes. We work from diagnosis to deployment, including product thinking, architecture, implementation and evolution planning.",
          ],
        ],
      },
      {
        lead:
          "We connect systems that need to work together without turning the operation into exports, manual checks and rework.",
        deliverables: [
          "Design of data flow, ownership and failure points between systems.",
          "APIs, webhooks, queues, jobs and validations for reliable synchronization.",
          "Logs, alerts and traceability to quickly understand where an integration failed.",
        ],
        fit: [
          "ERP, CRM, gateways, spreadsheets or legacy systems hold different parts of the same operation.",
          "Teams lose time copying information or fixing inconsistencies.",
          "The company needs automation without losing control over errors and exceptions.",
        ],
        examples: [
          "Integration between internal systems and ERP/CRM platforms.",
          "Synchronization with payment gateways, marketplaces or external services.",
          "API layers to organize access to legacy systems.",
        ],
        faq: [
          [
            "Is custom integration just connecting APIs?",
            "No. The real work is designing contracts, failures, retries, auditability and business rules so the operation can trust the data.",
          ],
          [
            "Do you integrate older systems?",
            "Yes, when there is a viable technical path: API, database, file, queue, controlled automation or an intermediate layer.",
          ],
        ],
      },
      {
        lead:
          "We modernize existing systems without betting the whole operation on a risky rewrite.",
        deliverables: [
          "Diagnosis of coupling, bottlenecks, critical domains and high-risk areas.",
          "An incremental plan to refactor, modularize, test and replace parts of the legacy system.",
          "Pipelines, tests and enough documentation for the team to evolve with less fear.",
        ],
        fit: [
          "The system works, but every small change threatens production.",
          "Knowledge is concentrated in a few people or hidden in hard-to-read code.",
          "The company wants to evolve without stopping operations for a full rewrite.",
        ],
        examples: [
          "Domain separation inside monolithic systems.",
          "Tests around critical flows before structural changes.",
          "Gradual migration of parts of the system to a clearer architecture.",
        ],
        faq: [
          [
            "Do you prefer refactoring or rewriting?",
            "It depends on risk. In most cases, incremental modernization protects operations and cash better than rewriting everything.",
          ],
          [
            "Can you work with AI-generated legacy code?",
            "Yes. We organize structure, contracts, tests, patterns and pipelines to reduce fragility.",
          ],
        ],
      },
      {
        lead:
          "We adjust infrastructure so growth is supported by availability, observability and controlled cost.",
        deliverables: [
          "Diagnosis of architecture, deployment, bottlenecks, costs and operational risks.",
          "Infrastructure automation, environments, pipelines and reproducible configuration.",
          "A scaling plan with Kubernetes, elastic architecture or simplification when that is the better answer.",
        ],
        fit: [
          "Cloud usage grows without clear cost, ownership or real necessity.",
          "Deployments are tense, manual or dependent on informal knowledge.",
          "The product needs better availability, performance or operational predictability.",
        ],
        examples: [
          "Review of clusters, workloads, autoscaling and observability.",
          "Infrastructure as code with Terraform, Ansible or Helm.",
          "Migration from fragile environments to a more elastic architecture.",
        ],
        faq: [
          [
            "Is Kubernetes always the best solution?",
            "No. Poorly configured Kubernetes becomes cost and complexity. We recommend it when it solves a real operational problem.",
          ],
          [
            "Do you look at cost together with infrastructure?",
            "Yes. Availability without cost governance becomes waste. We look at both together.",
          ],
        ],
      },
      {
        lead:
          "We organize codebases that are hard to evolve so new features stop depending on luck.",
        deliverables: [
          "Critical review of architecture, patterns, duplication and fragile areas.",
          "Refactoring guided by business flows, tests and lower coupling.",
          "CI/CD, linting, tests and reviews that catch errors before production.",
        ],
        fit: [
          "The team avoids touching parts of the system because nobody knows what may break.",
          "AI-generated code accelerated delivery but left inconsistent structure behind.",
          "The company needs more speed without accumulating invisible technical debt.",
        ],
        examples: [
          "Reorganization of modules, layers and contracts.",
          "Introduction of tests around critical journeys.",
          "Standardization of TypeScript, Go, Rust or existing frontend/backend code.",
        ],
        faq: [
          [
            "Does refactoring slow the product down?",
            "Unfocused refactoring does. Refactoring tied to critical flows reduces rework and improves real speed.",
          ],
          [
            "Can you work alongside an internal team?",
            "Yes. We can execute, guide architecture and leave patterns for the team to continue.",
          ],
        ],
      },
      {
        lead:
          "We improve queries, models and cache strategy to reduce latency where the database is actually blocking the operation.",
        deliverables: [
          "Analysis of critical queries, indexes, cardinality, locks and access patterns.",
          "Modeling, cache, partitioning or sharding adjustments when they make sense.",
          "Before/after measurement to prove gains and avoid cosmetic optimization.",
        ],
        fit: [
          "Reports, screens or APIs become slow as data grows.",
          "The database is a bottleneck, but the cause may be query, index, cache or architecture.",
          "The operation needs lower latency without replacing everything at once.",
        ],
        examples: [
          "PostgreSQL query review and indexing strategy.",
          "Redis cache for repeated reads and critical flows.",
          "High-volume modeling with Postgres, Redis or ScyllaDB.",
        ],
        faq: [
          [
            "Is database performance just adding indexes?",
            "No. Indexes can help, but they can also hurt writes and cost. We look at query, model, volume, cache and real usage.",
          ],
          [
            "Can this be done without taking production down?",
            "Yes. Work on critical systems needs to be measured, gradual and reversible whenever possible.",
          ],
        ],
      },
      {
        lead:
          "We reduce cloud spend without treating cost as blind cutting: first we understand operation, risk and architecture.",
        deliverables: [
          "Mapping of idle, oversized or ownerless resources.",
          "Adjustments to instances, storage, autoscaling, spot usage and architecture when applicable.",
          "A pragmatic report separating quick savings, technical risk and next steps.",
        ],
        fit: [
          "Cloud spend grows faster than real product usage.",
          "There are environments, databases, volumes or workloads running without clear need.",
          "The company wants to reduce cost without compromising availability or delivery.",
        ],
        examples: [
          "Removal of idle resources and right-sizing.",
          "Controlled use of spot instances for suitable workloads.",
          "Architectural review to prevent recurring waste.",
        ],
        faq: [
          [
            "Is FinOps just cost reduction?",
            "No. Good FinOps reduces waste without killing reliability. The goal is cost proportional to value generated.",
          ],
          [
            "Can savings happen quickly?",
            "Often yes, especially with idle and oversized resources. Structural changes require more care.",
          ],
        ],
      },
    ],
    casesTitle: "Software cases that become operations",
    casesIntro:
      "Projects built from scratch to turn real processes into internal systems, digital products and traceable operations.",
    caseModalClose: "Close case",
    caseSiteLabel: "Visit site",
    detail: {
      viewService: "See full solution",
      viewCase: "See full case",
      backHome: "Back to landing page",
      serviceEyebrow: "Kaiser Tech solution",
      caseEyebrow: "Kaiser Tech case",
      whatWeDeliver: "What we deliver",
      goodFit: "When it makes sense",
      examples: "Application examples",
      faq: "Frequently asked questions",
      technologies: "Technologies",
      talkAboutThis: "I want this solution",
      relatedSolutions: "Related solutions",
      relatedCases: "Related cases",
      caseImpact: "Project context",
      futureGerman: "de-DE version active for the German market.",
    },
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
        deliverables: [
          "Custom software",
          "Custom integrations",
          "Improved traceability quality",
          "Improved mapping of clients' assets and employees",
          "Higher quality information for audits",
        ],
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
        subtitle: "Custom facilities management system",
        imageLabel: "Amicord",
        imageSrc: "/amicord.webp",
        siteUrl: "https://amicord.com.br",
        accent: "#36255C",
        description:
          "Custom platform for outsourced facilities companies to manage teams, clients, units, operational activities and field checklists in real time. The solution combines a web dashboard, mobile operation, dashboards, a dedicated API and scalable cloud infrastructure with React, React Native, Go, PostgreSQL/PostGIS, AWS Lambda, Terraform and Cloudflare.",
        deliverables: [
          {
            title: "Web management platform",
            body: "Administrative dashboard to organize clients, units, work posts, regions, employees, users, permissions, schedules, checklists, activities, incidents, monitoring and reports.",
          },
          {
            title: "Traceable field operation",
            body: "Operational flows with location validation, QR Code, activity records and daily execution tracking for field employees.",
          },
          {
            title: "Custom checklists and activities",
            body: "Creation and control of checklists, tasks and operational routines adapted to the company, reducing manual controls and improving standardization.",
          },
          {
            title: "Monitoring and indicators",
            body: "Dashboards and reports to track employee status, regional performance, recent events, incidents and critical operational information.",
          },
          {
            title: "Scalable cloud architecture",
            body: "Go backend, structured API, PostgreSQL/PostGIS, serverless deployment on AWS Lambda, Terraform infrastructure and domain/DNS configuration through Cloudflare.",
          },
          {
            title: "Custom integrations and automations",
            body: "APIs, authentication, password recovery by email, OpenAPI documentation and structure prepared for integrations with external systems as needed.",
          },
          {
            title: "Technical and commercial transparency",
            body: "Clear scope, limitations, responsibilities and points outside the solution, avoiding vague promises and aligning delivery with operational reality.",
          },
        ],
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
      submitting: "Sending...",
      success: "We received your pain. We will reply with an initial diagnosis soon.",
      error: "We could not send it right now. Please try again shortly.",
    },
    footer: {
      tagline:
        "Custom software for operations that need to leave improvisation behind and scale with traceability.",
      navLabel: "Footer navigation",
      navTitle: "Navigation",
      privacyPolicy: "Privacy Policy",
      legalName: "Kaiser Labs Tecnologia LTDA",
      country: "Brazil",
      socialLabel: "Social links",
      instagramLabel: "Matheus Padilha on Instagram",
      linkedinLabel: "Matheus Padilha on LinkedIn",
      rightsPrefix: "All rights reserved",
      developedBy: "Developed by Matheus Padilha",
    },
  },
  de: {
    seo: {
      lang: "de-DE",
      title: "Kaiser Tech | Individuelle Software fuer B2B-Operationen",
      description:
        "Kaiser Tech entwickelt individuelle Software, integriert Prozesse und verwandelt operative Engpaesse in nachvollziehbare, wartbare und skalierbare Systeme.",
      ogTitle: "Kaiser Tech | Individuelle Software im Zentrum",
      ogDescription:
        "Technologieberatung fuer Unternehmen in Deutschland und DACH, die Prozesse integrieren und mit starker Softwaretechnik skalieren wollen.",
      ogLocale: "de_DE",
    },
    nav: {
      services: "Loesungen",
      cases: "Cases",
      method: "Methode",
      proof: "Technischer Nachweis",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Individuelle Software fuer anspruchsvolle Operationen",
      title: "Wir bringen Struktur in Ihre Operation.",
      subtitle:
        "Kaiser Tech entwickelt interne Systeme, integriert Prozesse und verwandelt operative Engpaesse in nachvollziehbare, wartbare und skalierbare Software.",
      cta: "Problem besprechen",
      secondary: "Arbeitsweise ansehen",
      trust:
        "Beschreiben Sie den Engpass. Die erste Antwort trennt Symptom, wahrscheinliche Ursache und naechste Schritte.",
      metrics: [
        [
          "6+ Jahre",
          "Erfahrung mit Govtechs, Industrie und privaten Unternehmen",
        ],
        ["Operationen", "fuer Management und Teams, die echte Kontrolle brauchen"],
        ["Massgeschneidert", "wenn Standardtools nicht zum Prozess passen"],
      ],
    },
    pain: {
      title: "Wenn Operationen wachsen, wird Improvisation teuer",
      items: [
        {
          title: "Manuelle Prozesse",
          body: "Tabellen, Nacharbeit und verteilte Freigaben verlangsamen Entscheidungen, die einfach sein sollten.",
        },
        {
          title: "Systeme ohne Verbindung",
          body: "Doppelte Daten, fragile Integrationen und Teams, die weiter manuell pruefen muessen.",
        },
        {
          title: "Fehlende Transparenz",
          body: "Fuehrungskraefte arbeiten ohne verlaessliche Daten, ohne Nachvollziehbarkeit und ohne klare Sicht auf Engpaesse.",
        },
      ],
    },
    servicesTitle: [
      "Individuelle Software im Zentrum.",
      "Starke Softwaretechnik drumherum.",
    ],
    servicesIntro:
      "Die Hauptloesung ist das richtige System fuer den Prozess. Weitere Schwerpunkte integrieren, stabilisieren und skalieren diese Software verlaesslich.",
    services: [
      {
        title: "Massgeschneiderte Software",
        body: "Interne Systeme, Portale, Automatisierungen und B2B-Produkte, entwickelt aus dem realen Ablauf Ihrer Operation.",
        stack: "TypeScript / Go / React",
      },
      {
        title: "Massgeschneiderte Integrationen",
        body: "Wir verbinden ERPs, CRMs, Gateways, Tabellen, Legacy-APIs und externe Services, ohne Nachvollziehbarkeit zu verlieren.",
        stack: "REST / Webhooks / Queues",
      },
      {
        title: "Legacy-Refactoring",
        body: "Wenn bereits eine Basis existiert, reduzieren wir Risiko, strukturieren Domaenen und schaffen inkrementelle Wege zur Modernisierung.",
        stack: "Architecture / CI/CD / Testing",
      },
      {
        title: "Infrastruktur-Optimierung",
        body: "Migration von monolithischen Clustern zu elastischen Architekturen oder sauber konfiguriertem Kubernetes, mit Fokus auf Verfuegbarkeit.",
        stack: "Terraform / Ansible / Helm",
      },
      {
        title: "Code-Refactoring",
        body: "Wir strukturieren KI-generierten oder gewachsenen Code, setzen solide Muster ein und bauen CI/CD-Pipelines, die Fehler wirklich finden.",
        stack: "Go / Rust / TypeScript",
      },
      {
        title: "Datenbank-Performance",
        body: "Indexierung, Sharding und Cache-Strategien, die die Latenz der wichtigsten Abfragen senken.",
        stack: "Postgres / Redis / ScyllaDB",
      },
      {
        title: "FinOps",
        body: "Schnelle Reduktion von Cloud-Kosten durch Spot-Instanzen, Entfernung ungenutzter Ressourcen und architekturelle Anpassungen.",
        stack: "AWS / GCP / Observability",
      },
    ],
    servicePages: [
      {
        lead:
          "Wir entwickeln interne Systeme und B2B-Produkte fuer Unternehmen, die mit Tabellen, Standardtools oder manuellen Ablaeufen an Grenzen kommen.",
        deliverables: [
          "Abbildung des realen operativen Ablaufs, bevor Oberflaechen und Architektur definiert werden.",
          "Frontend, Backend, Datenbank, Authentifizierung, Berechtigungen und Deployment vorbereitet fuer Weiterentwicklung.",
          "Produkt mit Nachvollziehbarkeit, Datenvalidierung, Integrationen und operativer Sichtbarkeit.",
        ],
        fit: [
          "Die Operation haengt von Tabellen, WhatsApp oder manuellen Pruefungen ab.",
          "Standardtools bilden interne Regeln, Freigaben oder Ausnahmen nicht sauber ab.",
          "Manager brauchen Status, Historie und Engpaesse ohne manuelle Reports vom Team.",
        ],
        examples: [
          "Interne Portale fuer Vertrieb, Operationen oder Administration.",
          "Systeme fuer Terminplanung, Checklisten, Nachvollziehbarkeit, Inspektionen und Asset-Management.",
          "B2B-Produkte, die fragile Workflows ersetzen.",
        ],
        faq: [
          [
            "Wann lohnt sich individuelle Software?",
            "Wenn ein Prozess Umsatz erzeugt, Risiko reduziert oder genug Zeit bindet, um eine eigene Loesung zu rechtfertigen. Wenn ein Standardtool besser passt, sagen wir das.",
          ],
          [
            "Kann Kaiser Tech bei null starten?",
            "Ja. Wir arbeiten von Diagnose bis Deployment, inklusive Produktdenken, Architektur, Implementierung und Evolutionsplanung.",
          ],
        ],
      },
      {
        lead:
          "Wir verbinden Systeme, die zusammenarbeiten muessen, ohne die Operation in Exporte, manuelle Pruefungen und Nacharbeit zu verwandeln.",
        deliverables: [
          "Design von Datenfluss, Verantwortlichkeiten und Fehlerpunkten zwischen Systemen.",
          "APIs, Webhooks, Queues, Jobs und Validierungen fuer verlaessliche Synchronisierung.",
          "Logs, Alerts und Nachvollziehbarkeit, um Fehler in Integrationen schnell zu finden.",
        ],
        fit: [
          "ERP, CRM, Gateways, Tabellen oder Legacy-Systeme halten verschiedene Teile derselben Operation.",
          "Teams verlieren Zeit mit Kopieren von Daten oder Korrigieren von Abweichungen.",
          "Das Unternehmen braucht Automatisierung, ohne Kontrolle ueber Fehler und Ausnahmen zu verlieren.",
        ],
        examples: [
          "Integration zwischen internem System und ERP/CRM.",
          "Synchronisierung mit Payment-Gateways, Marketplaces oder externen Services.",
          "API-Schichten, um Zugriff auf Legacy-Systeme zu organisieren.",
        ],
        faq: [
          [
            "Ist Integration nur das Verbinden von APIs?",
            "Nein. Die eigentliche Arbeit liegt in Vertrag, Fehlern, Wiederholungen, Auditierbarkeit und Geschaeftsregeln, damit die Operation den Daten vertrauen kann.",
          ],
          [
            "Integrieren Sie auch alte Systeme?",
            "Ja, wenn es einen technisch tragfaehigen Weg gibt: API, Datenbank, Datei, Queue, kontrollierte Automatisierung oder Zwischenschicht.",
          ],
        ],
      },
      {
        lead:
          "Wir modernisieren bestehende Systeme, ohne die gesamte Operation auf ein riskantes Rewrite zu setzen.",
        deliverables: [
          "Diagnose von Kopplung, Engpaessen, kritischen Domaenen und Risikobereichen.",
          "Inkrementeller Plan zum Refactoring, Modularisieren, Testen und Ersetzen von Teilen des Legacy-Systems.",
          "Pipelines, Tests und genug Dokumentation, damit das Team mit weniger Risiko weiterentwickeln kann.",
        ],
        fit: [
          "Das System funktioniert, aber jede kleine Aenderung gefaehrdet Produktion.",
          "Wissen ist auf wenige Personen konzentriert oder in schwer lesbarem Code verborgen.",
          "Das Unternehmen will weiterentwickeln, ohne die Operation fuer ein komplettes Rewrite zu stoppen.",
        ],
        examples: [
          "Trennung von Domaenen in monolithischen Systemen.",
          "Tests um kritische Ablaeufe vor strukturellen Aenderungen.",
          "Schrittweise Migration von Systemteilen zu klarerer Architektur.",
        ],
        faq: [
          [
            "Bevorzugen Sie Refactoring oder Rewrite?",
            "Das haengt vom Risiko ab. In den meisten Faellen schuetzt inkrementelle Modernisierung Operation und Cashflow besser als ein kompletter Rewrite.",
          ],
          [
            "Koennen Sie mit KI-generiertem Legacy-Code arbeiten?",
            "Ja. Wir strukturieren Aufbau, Vertraege, Tests, Muster und Pipelines, um Fragilitaet zu reduzieren.",
          ],
        ],
      },
      {
        lead:
          "Wir passen Infrastruktur so an, dass Wachstum durch Verfuegbarkeit, Observability und kontrollierte Kosten getragen wird.",
        deliverables: [
          "Diagnose von Architektur, Deployment, Engpaessen, Kosten und operativen Risiken.",
          "Automatisierung von Infrastruktur, Umgebungen, Pipelines und reproduzierbarer Konfiguration.",
          "Skalierungsplan mit Kubernetes, elastischer Architektur oder Vereinfachung, wenn das sinnvoller ist.",
        ],
        fit: [
          "Cloud-Nutzung waechst ohne klare Kosten, Ownership oder echte Notwendigkeit.",
          "Deployments sind angespannt, manuell oder von informellem Wissen abhaengig.",
          "Das Produkt braucht bessere Verfuegbarkeit, Performance oder operative Vorhersagbarkeit.",
        ],
        examples: [
          "Review von Clustern, Workloads, Autoscaling und Observability.",
          "Infrastructure as Code mit Terraform, Ansible oder Helm.",
          "Migration fragiler Umgebungen zu elastischerer Architektur.",
        ],
        faq: [
          [
            "Ist Kubernetes immer die beste Loesung?",
            "Nein. Schlecht konfiguriertes Kubernetes erzeugt Kosten und Komplexitaet. Wir empfehlen es, wenn es ein reales operatives Problem loest.",
          ],
          [
            "Betrachten Sie Kosten zusammen mit Infrastruktur?",
            "Ja. Verfuegbarkeit ohne Kostengovernance wird schnell Verschwendung. Wir betrachten beides zusammen.",
          ],
        ],
      },
      {
        lead:
          "Wir strukturieren Codebasen, die schwer weiterzuentwickeln sind, damit neue Features nicht von Glueck abhaengen.",
        deliverables: [
          "Kritische Analyse von Architektur, Mustern, Duplikationen und fragilen Bereichen.",
          "Refactoring entlang von Geschaeftsablaeufen, Tests und geringerer Kopplung.",
          "CI/CD, Linting, Tests und Reviews, die Fehler vor Produktion finden.",
        ],
        fit: [
          "Das Team vermeidet Aenderungen an Systemteilen, weil niemand weiss, was brechen kann.",
          "KI-generierter Code hat Lieferung beschleunigt, aber inkonsistente Struktur hinterlassen.",
          "Das Unternehmen braucht mehr Geschwindigkeit, ohne unsichtbare technische Schulden aufzubauen.",
        ],
        examples: [
          "Neuordnung von Modulen, Schichten und Vertraegen.",
          "Einfuehrung von Tests fuer kritische Journeys.",
          "Standardisierung von TypeScript, Go, Rust oder bestehendem Frontend/Backend.",
        ],
        faq: [
          [
            "Verlangsamt Refactoring das Produkt?",
            "Unfokussiertes Refactoring ja. Refactoring an kritischen Ablaeufen reduziert Nacharbeit und verbessert reale Geschwindigkeit.",
          ],
          [
            "Arbeiten Sie mit internen Teams zusammen?",
            "Ja. Wir koennen umsetzen, Architektur begleiten und Muster hinterlassen, die das Team weiter nutzen kann.",
          ],
        ],
      },
      {
        lead:
          "Wir verbessern Abfragen, Modelle und Cache-Strategien, um Latenz dort zu senken, wo die Datenbank die Operation wirklich blockiert.",
        deliverables: [
          "Analyse kritischer Queries, Indizes, Kardinalitaet, Locks und Zugriffsmuster.",
          "Anpassungen an Modellierung, Cache, Partitionierung oder Sharding, wenn es sinnvoll ist.",
          "Messung vorher/nachher, um Gewinn zu belegen und kosmetische Optimierung zu vermeiden.",
        ],
        fit: [
          "Reports, Oberflaechen oder APIs werden langsamer, wenn Daten wachsen.",
          "Die Datenbank ist ein Engpass, aber Ursache kann Query, Index, Cache oder Architektur sein.",
          "Die Operation braucht geringere Latenz, ohne alles auf einmal zu ersetzen.",
        ],
        examples: [
          "Review von PostgreSQL-Queries und Indexstrategie.",
          "Redis-Cache fuer wiederholte Lesezugriffe und kritische Ablaeufe.",
          "Modellierung fuer hohes Volumen mit Postgres, Redis oder ScyllaDB.",
        ],
        faq: [
          [
            "Ist Datenbank-Performance nur Indexe anlegen?",
            "Nein. Indexe koennen helfen, aber auch Schreiblast und Kosten erhoehen. Wir betrachten Query, Modell, Volumen, Cache und reale Nutzung.",
          ],
          [
            "Geht das ohne Produktionsausfall?",
            "Ja. Arbeit an kritischen Systemen muss gemessen, schrittweise und wenn moeglich reversibel sein.",
          ],
        ],
      },
      {
        lead:
          "Wir senken Cloud-Kosten, ohne Kosten als blindes Sparen zu behandeln: zuerst verstehen wir Operation, Risiko und Architektur.",
        deliverables: [
          "Karte von ungenutzten, ueberdimensionierten oder ownerlosen Ressourcen.",
          "Anpassungen an Instanzen, Storage, Autoscaling, Spot-Nutzung und Architektur, wo passend.",
          "Pragmatischer Bericht mit schneller Einsparung, technischem Risiko und naechsten Schritten.",
        ],
        fit: [
          "Cloud-Ausgaben wachsen schneller als die reale Produktnutzung.",
          "Es laufen Umgebungen, Datenbanken, Volumes oder Workloads ohne klare Notwendigkeit.",
          "Das Unternehmen will Kosten senken, ohne Verfuegbarkeit oder Lieferung zu gefaehrden.",
        ],
        examples: [
          "Entfernung ungenutzter Ressourcen und Right-Sizing.",
          "Kontrollierte Nutzung von Spot-Instanzen fuer geeignete Workloads.",
          "Architekturreview, um wiederkehrende Verschwendung zu vermeiden.",
        ],
        faq: [
          [
            "Ist FinOps nur Kostensenkung?",
            "Nein. Gute FinOps reduziert Verschwendung, ohne Zuverlaessigkeit zu zerstoeren. Ziel sind Kosten im Verhaeltnis zum erzeugten Wert.",
          ],
          [
            "Sind schnelle Einsparungen moeglich?",
            "Oft ja, besonders bei ungenutzten und ueberdimensionierten Ressourcen. Strukturelle Aenderungen brauchen mehr Sorgfalt.",
          ],
        ],
      },
    ],
    casesTitle: "Software-Cases, die Operationen werden",
    casesIntro:
      "Projekte, die reale Prozesse in interne Systeme, digitale Produkte und nachvollziehbare Operationen verwandeln.",
    caseModalClose: "Case schliessen",
    caseSiteLabel: "Website besuchen",
    detail: {
      viewService: "Loesung vollstaendig ansehen",
      viewCase: "Case vollstaendig ansehen",
      backHome: "Zur Landingpage",
      serviceEyebrow: "Kaiser Tech Loesung",
      caseEyebrow: "Kaiser Tech Case",
      whatWeDeliver: "Was wir geliefert haben",
      goodFit: "Wann es sinnvoll ist",
      examples: "Anwendungsbeispiele",
      faq: "Haeufige Fragen",
      technologies: "Technologien",
      talkAboutThis: "Ich moechte diese Loesung",
      relatedSolutions: "Verwandte Loesungen",
      relatedCases: "Verwandte Cases",
      caseImpact: "Projektkontext",
      futureGerman: "de-DE ist als aktive Sprachversion verfuegbar.",
    },
    cases: [
      {
        title: "ACIPG Bolao",
        subtitle: "Internes Tippspielsystem mit Sponsoring fuer ACIPG",
        imageLabel: "ACIPG",
        imageSrc: "/acipgBolao.webp",
        accent: "#FC4103",
        description:
          "Internes Produkt zur Verwaltung eines gesponserten Tippspiels, entwickelt als TypeScript-Monorepo mit Fastify API, Prisma, MySQL, React, Vite und Tailwind. Gemeinsame Zod-Schemas halten API- und Web-Vertraege konsistent, die API laeuft auf Azure.",
      },
      {
        title: "S4 Treinamentos",
        subtitle: "Inspektionen, Schulungen und operative Nachvollziehbarkeit",
        imageLabel: "S4",
        imageSrc: "/s4.webp",
        siteUrl: "https://s4treinamentos.com.br",
        accent: "#7C5CFF",
        description:
          "Institutionelle Website sowie Web- und Mobile-Systeme fuer Inspektionen und Schulungsmanagement, mit QR-Code-Tracking fuer Assets, Ausruestung und Mitarbeitende. Die Loesung wurde fuer praeventionsorientierte Operationen mit React, Vite, Node.js, AWS und React Native entwickelt.",
        deliverables: [
          "Massgeschneiderte Software",
          "Massgeschneiderte Integrationen",
          "Verbesserte Qualitaet der Nachvollziehbarkeit",
          "Besseres Mapping von Assets und Mitarbeitenden der Kunden",
          "Hoehere Informationsqualitaet fuer Audits",
        ],
      },
      {
        title: "Routini",
        subtitle: "Terminplanung fuer kleine Dienstleistungsunternehmen",
        imageLabel: "Routini",
        imageSrc: "/routini.webp",
        siteUrl: "https://routini.com.br",
        accent: "#F7F5F2",
        description:
          "Terminplanungssystem, das kleinen Unternehmern hilft, die Abhaengigkeit von WhatsApp fuer Buchungen zu reduzieren. Entwickelt fuer Routinen wie Pedikuere, Beauty-Salons, Barbershops und Massagetherapie, mit React/Vite-Frontend, Node.js-Backend und AWS-Infrastruktur.",
      },
      {
        title: "Amicord",
        subtitle: "Massgeschneidertes System fuer Facilities Management",
        imageLabel: "Amicord",
        imageSrc: "/amicord.webp",
        siteUrl: "https://amicord.com.br",
        accent: "#36255C",
        description:
          "Massgeschneiderte Plattform fuer ausgelagerte Facilities-Unternehmen zur Verwaltung von Teams, Kunden, Einheiten, operativen Aktivitaeten und Feld-Checklisten in Echtzeit. Die Loesung kombiniert Web-Dashboard, mobile Operation, Dashboards, eigene API und skalierbare Cloud-Infrastruktur mit React, React Native, Go, PostgreSQL/PostGIS, AWS Lambda, Terraform und Cloudflare.",
        deliverables: [
          {
            title: "Web-Plattform fuer Management",
            body: "Administratives Dashboard zur Organisation von Kunden, Einheiten, Arbeitsplaetzen, Regionen, Mitarbeitenden, Nutzern, Berechtigungen, Schichten, Checklisten, Aktivitaeten, Vorfaellen, Monitoring und Reports.",
          },
          {
            title: "Nachvollziehbare Feldoperation",
            body: "Operative Ablaeufe mit Standortvalidierung, QR Code, Aktivitaetsnachweisen und taeglichem Ausfuehrungstracking fuer Mitarbeitende im Feld.",
          },
          {
            title: "Individuelle Checklisten und Aktivitaeten",
            body: "Erstellung und Steuerung von Checklisten, Aufgaben und operativen Routinen, angepasst an das Unternehmen, mit weniger manueller Kontrolle und besserer Standardisierung.",
          },
          {
            title: "Monitoring und Kennzahlen",
            body: "Dashboards und Reports fuer Mitarbeitendenstatus, regionale Performance, aktuelle Ereignisse, Vorfaelle und kritische operative Informationen.",
          },
          {
            title: "Skalierbare Cloud-Architektur",
            body: "Go-Backend, strukturierte API, PostgreSQL/PostGIS, serverless Deployment auf AWS Lambda, Terraform-Infrastruktur und Domain/DNS-Konfiguration ueber Cloudflare.",
          },
          {
            title: "Individuelle Integrationen und Automatisierungen",
            body: "APIs, Authentifizierung, Passwort-Wiederherstellung per Email, OpenAPI-Dokumentation und Struktur fuer externe Integrationen nach Kundenbedarf.",
          },
          {
            title: "Technische und kommerzielle Transparenz",
            body: "Klarheit ueber Scope, Grenzen, Verantwortlichkeiten und Punkte ausserhalb der Loesung, damit Lieferung und operative Realitaet zusammenpassen.",
          },
        ],
      },
    ],
    method: {
      title: "Wie Kaiser Tech arbeitet",
      steps: [
        [
          "01",
          "Diagnose",
          "Wir erfassen den Schmerzpunkt, die finanzielle Auswirkung und die technischen Ursachen hinter dem Problem.",
        ],
        [
          "02",
          "Executive Plan",
          "Wir priorisieren Initiativen mit klarem ROI, kontrolliertem Risiko und pruefbarer Lieferung.",
        ],
        [
          "03",
          "Technische Umsetzung",
          "Wir bauen, refaktorisieren oder migrieren mit kurzen Checkpoints und konstanter Sichtbarkeit.",
        ],
        [
          "04",
          "Verlaesslicher Betrieb",
          "Wir hinterlassen Metriken, Dokumentation, Automatisierung und Pipelines, die Weiterentwicklung tragen.",
        ],
      ],
    },
    proof: {
      title: "Nicht jeder Schmerzpunkt muss Software werden",
      copy: "Wenn Prozess, Standardtool oder operative Anpassung besser loesen, sagen wir das klar. Wenn Software sinnvoll ist, bauen wir mit technischer Tiefe, Geschaeftskontext und Verantwortung fuer Wartbarkeit.",
      bullets: [
        "Mehr als 6 Jahre Markterfahrung",
        "Erfahrung mit Govtechs, Industrie und privaten Unternehmen",
        "Vertrauliche Projekte, wenn erforderlich",
        "Transparenz darueber, was wir nicht tun",
      ],
    },
    form: {
      title: "Beschreiben Sie den Engpass",
      subtitle:
        "Senden Sie den technischen oder operativen Engpass. Die erste Antwort soll Chance, wahrscheinliche Ursache und naechste Schritte identifizieren.",
      name: "Name",
      email: "Email",
      company: "Unternehmen",
      painType: "Art des Problems",
      painTypePlaceholder: "Option auswaehlen",
      painTypes: [
        "Manueller Prozess",
        "Schwaches internes System",
        "Zu viele Tabellen",
        "Integration zwischen Systemen",
        "Keine verlaesslichen Daten",
        "Infrastruktur, Kosten oder Performance",
        "Andere",
      ],
      pain: "Welches Problem moechten Sie loesen?",
      submit: "Diagnose senden",
      submitting: "Wird gesendet...",
      success: "Wir haben Ihre Anfrage erhalten und antworten bald mit einer ersten Diagnose.",
      error: "Wir konnten gerade nicht senden. Bitte versuchen Sie es gleich erneut.",
    },
    footer: {
      tagline:
        "Individuelle Software fuer Operationen, die Improvisation hinter sich lassen und mit Nachvollziehbarkeit skalieren wollen.",
      navLabel: "Footer-Navigation",
      navTitle: "Navigation",
      privacyPolicy: "Datenschutzerklaerung",
      legalName: "Kaiser Labs Tecnologia LTDA",
      country: "Brazil",
      socialLabel: "Social Links",
      instagramLabel: "Matheus Padilha auf Instagram",
      linkedinLabel: "Matheus Padilha auf LinkedIn",
      rightsPrefix: "Alle Rechte vorbehalten",
      developedBy: "Entwickelt von Matheus Padilha",
    },
  },
} as const;

export type LocaleCopy = (typeof dictionary)[Locale];
