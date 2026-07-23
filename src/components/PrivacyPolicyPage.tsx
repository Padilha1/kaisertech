import { ShieldCheck } from "lucide-react";
import type { Locale } from "../lib/i18n";
import { getHomePath } from "../lib/routing";

type PrivacyPolicyPageProps = {
  locale: Locale;
  navigate: (path: string) => void;
};

type PolicySection = {
  title: string;
  body?: string[];
  items?: string[];
};

type PolicyCopy = {
  backHome: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  updatedAt: string;
  controllerTitle: string;
  controllerRows: Array<[string, string]>;
  dataTableTitle: string;
  dataRows: Array<[string, string, string]>;
  sections: PolicySection[];
};

const policyCopy: Record<Locale, PolicyCopy> = {
  pt: {
    backHome: "Voltar para a página inicial",
    eyebrow: "Privacidade e proteção de dados",
    title: "Política de Privacidade",
    subtitle:
      "Esta política explica como a Kaiser Tech coleta, usa, compartilha e protege dados pessoais em seu site, considerando a LGPD brasileira e práticas aplicáveis a visitantes dos Estados Unidos.",
    updatedAt: "Última atualização: 22 de julho de 2026",
    controllerTitle: "Controlador e canal de contato",
    controllerRows: [
      ["Controlador", "Kaiser Labs Tecnologia LTDA"],
      ["CNPJ", "66.557.573/0001-66"],
      ["Canal de privacidade", "padilha.matheus@hotmail.com"],
      ["Site", "https://kaisertec.com.br"],
    ],
    dataTableTitle: "Dados que podemos tratar",
    dataRows: [
      [
        "Formulário de contato",
        "Nome, email, empresa, tipo de dor operacional e mensagem enviada.",
        "Responder solicitações, preparar diagnóstico inicial, administrar relacionamento comercial e proteger o site contra abuso.",
      ],
      [
        "Dados técnicos e de analytics",
        "Páginas acessadas, eventos de navegação, origem de tráfego, navegador, dispositivo, idioma, data/hora e identificadores técnicos gerados por ferramentas de analytics.",
        "Medir audiência, entender uso do site, melhorar conteúdo, corrigir problemas técnicos e avaliar desempenho de campanhas.",
      ],
      [
        "Comunicações comerciais",
        "Histórico de mensagens, respostas, preferências e informações fornecidas em conversas com a Kaiser Tech.",
        "Dar continuidade ao atendimento, elaborar propostas, cumprir obrigações contratuais ou pré-contratuais e manter registros necessários.",
      ],
    ],
    sections: [
      {
        title: "Bases legais",
        body: [
          "Quando a LGPD se aplica, tratamos dados pessoais com base em execução de contrato ou procedimentos preliminares, legítimo interesse, cumprimento de obrigação legal ou regulatória, exercício regular de direitos e, quando necessário, consentimento.",
          "O legítimo interesse pode ser usado para responder contatos comerciais, manter segurança do site, prevenir abuso, medir desempenho e melhorar nossos serviços, sempre considerando os direitos e liberdades dos titulares.",
        ],
      },
      {
        title: "Cookies, Google Analytics e eventos",
        body: [
          "Usamos Google Analytics, mediante consentimento quando aplicável, para entender visitas, páginas visualizadas e interações relevantes, como cliques em chamadas para contato e envio bem-sucedido do formulário. Essas informações ajudam a melhorar a experiência e medir a efetividade do site.",
          "Você pode aceitar ou recusar analytics pelo banner de cookies exibido no primeiro acesso. Também pode bloquear cookies pelo navegador ou usar ferramentas de opt-out disponibilizadas por provedores de analytics. A recusa ou bloqueio pode reduzir a precisão das métricas, mas não impede o uso essencial do site.",
        ],
      },
      {
        title: "Compartilhamento com terceiros",
        body: [
          "Podemos compartilhar dados com fornecedores necessários para hospedar o site, processar formulários, enviar emails, medir analytics, manter segurança, armazenar informações e apoiar operações administrativas ou jurídicas.",
          "Também podemos compartilhar dados quando necessário para cumprir lei, ordem de autoridade competente, proteger direitos da Kaiser Tech, investigar abuso ou responder a solicitações legítimas de titulares.",
        ],
      },
      {
        title: "Transferências internacionais",
        body: [
          "Alguns fornecedores podem processar dados fora do Brasil, inclusive nos Estados Unidos. Nesses casos, adotamos medidas contratuais, técnicas e organizacionais razoáveis para proteger os dados conforme a legislação aplicável.",
        ],
      },
      {
        title: "Retenção",
        body: [
          "Mantemos dados pelo tempo necessário para cumprir as finalidades desta política, responder solicitações, manter registros comerciais, cumprir obrigações legais, resolver disputas e proteger direitos.",
          "Dados de contato e relacionamento comercial podem ser mantidos enquanto houver interação ou expectativa razoável de continuidade e, em geral, por até 5 anos após a última interação relevante, salvo obrigação legal ou necessidade legítima de prazo maior.",
        ],
      },
      {
        title: "Direitos no Brasil",
        body: [
          "Titulares protegidos pela LGPD podem solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento, revisão de decisões automatizadas quando aplicável e revogação de consentimento.",
          "Para exercer direitos, envie uma solicitação pelo canal de privacidade. Podemos pedir informações adicionais para confirmar sua identidade e proteger seus dados.",
        ],
      },
      {
        title: "Aviso para visitantes dos Estados Unidos",
        body: [
          "A Kaiser Tech não vende dados pessoais. Também não coleta intencionalmente dados pessoais sensíveis por este site e não direciona seus serviços a crianças menores de 13 anos.",
          "Dependendo do estado em que você reside e da lei aplicável, você pode ter direitos de acesso, correção, exclusão, portabilidade, limitação de uso de dados sensíveis, oposição ou opt-out de determinadas formas de compartilhamento. Quando uma lei estadual aplicável conceder esses direitos, atenderemos solicitações pelo canal de privacidade.",
        ],
      },
      {
        title: "Segurança",
        body: [
          "Adotamos medidas técnicas e administrativas razoáveis para proteger dados contra acesso não autorizado, perda, alteração, divulgação ou destruição indevida. Nenhum sistema, entretanto, é absolutamente seguro.",
        ],
      },
      {
        title: "Dados sensíveis e informações desnecessárias",
        body: [
          "Não envie pelo formulário dados sensíveis, documentos, senhas, dados financeiros, informações de saúde ou dados de terceiros que não sejam necessários para o atendimento inicial.",
        ],
      },
      {
        title: "Alterações desta política",
        body: [
          "Podemos atualizar esta política para refletir mudanças legais, técnicas ou operacionais. A versão vigente será sempre publicada nesta página, com a data de atualização correspondente.",
        ],
      },
    ],
  },
  en: {
    backHome: "Back to home",
    eyebrow: "Privacy and data protection",
    title: "Privacy Policy",
    subtitle:
      "This policy explains how Kaiser Tech collects, uses, shares and protects personal data on its website, considering Brazil's LGPD and practices applicable to visitors in the United States.",
    updatedAt: "Last updated: July 22, 2026",
    controllerTitle: "Controller and contact channel",
    controllerRows: [
      ["Controller", "Kaiser Labs Tecnologia LTDA"],
      ["Brazilian company ID", "CNPJ 66.557.573/0001-66"],
      ["Privacy contact", "padilha.matheus@hotmail.com"],
      ["Website", "https://kaisertec.com.br"],
    ],
    dataTableTitle: "Data we may process",
    dataRows: [
      [
        "Contact form",
        "Name, email, company, operational pain type and message submitted.",
        "Respond to requests, prepare an initial diagnosis, manage commercial relationships and protect the site from abuse.",
      ],
      [
        "Technical and analytics data",
        "Pages visited, navigation events, traffic source, browser, device, language, date/time and technical identifiers generated by analytics tools.",
        "Measure audience, understand site usage, improve content, fix technical issues and evaluate campaign performance.",
      ],
      [
        "Business communications",
        "Message history, replies, preferences and information provided in conversations with Kaiser Tech.",
        "Continue support, prepare proposals, fulfill contractual or pre-contractual obligations and keep necessary records.",
      ],
    ],
    sections: [
      {
        title: "Legal bases",
        body: [
          "When Brazil's LGPD applies, we process personal data based on contract performance or pre-contractual steps, legitimate interests, legal or regulatory obligations, regular exercise of rights and, when necessary, consent.",
          "Legitimate interests may include responding to business inquiries, maintaining site security, preventing abuse, measuring performance and improving our services, while considering the rights and freedoms of data subjects.",
        ],
      },
      {
        title: "Cookies, Google Analytics and events",
        body: [
          "We use Google Analytics, subject to consent where applicable, to understand visits, page views and relevant interactions, such as contact CTA clicks and successful form submissions. This helps us improve the experience and measure site effectiveness.",
          "You may accept or reject analytics through the cookie banner shown on your first visit. You may also block cookies in your browser or use opt-out tools offered by analytics providers. Rejecting or blocking cookies may reduce measurement accuracy but does not prevent essential use of the site.",
        ],
      },
      {
        title: "Sharing with third parties",
        body: [
          "We may share data with vendors needed to host the site, process forms, send emails, measure analytics, maintain security, store information and support administrative or legal operations.",
          "We may also share data when necessary to comply with law, respond to competent authorities, protect Kaiser Tech's rights, investigate abuse or respond to legitimate data subject requests.",
        ],
      },
      {
        title: "International transfers",
        body: [
          "Some vendors may process data outside Brazil, including in the United States. In those cases, we use reasonable contractual, technical and organizational measures to protect data under applicable law.",
        ],
      },
      {
        title: "Retention",
        body: [
          "We keep data for as long as necessary to fulfill the purposes in this policy, respond to requests, maintain business records, comply with legal obligations, resolve disputes and protect rights.",
          "Contact and business relationship data may be kept while there is interaction or a reasonable expectation of continuity and, generally, for up to 5 years after the last relevant interaction, unless a legal obligation or legitimate need requires longer retention.",
        ],
      },
      {
        title: "Rights in Brazil",
        body: [
          "Individuals protected by the LGPD may request confirmation of processing, access, correction, anonymization, blocking, deletion, portability, information about sharing, review of automated decisions when applicable and withdrawal of consent.",
          "To exercise rights, contact us through the privacy channel. We may request additional information to confirm your identity and protect your data.",
        ],
      },
      {
        title: "Notice for United States visitors",
        body: [
          "Kaiser Tech does not sell personal data. We also do not intentionally collect sensitive personal data through this site and do not direct our services to children under 13.",
          "Depending on your state of residence and applicable law, you may have rights to access, correct, delete, port, limit use of sensitive data, object or opt out of certain forms of sharing. When an applicable state law grants these rights, we will handle requests through the privacy contact channel.",
        ],
      },
      {
        title: "Security",
        body: [
          "We use reasonable technical and administrative measures to protect data against unauthorized access, loss, alteration, disclosure or improper destruction. No system, however, is absolutely secure.",
        ],
      },
      {
        title: "Sensitive data and unnecessary information",
        body: [
          "Do not submit sensitive data, documents, passwords, financial data, health information or third-party data through the form unless strictly necessary for the initial request.",
        ],
      },
      {
        title: "Changes to this policy",
        body: [
          "We may update this policy to reflect legal, technical or operational changes. The current version will always be published on this page with its update date.",
        ],
      },
    ],
  },
  de: {
    backHome: "Zurueck zur Startseite",
    eyebrow: "Datenschutz und Datensicherheit",
    title: "Datenschutzerklaerung",
    subtitle:
      "Diese Erklaerung beschreibt, wie Kaiser Tech personenbezogene Daten auf dieser Website erhebt, nutzt, weitergibt und schuetzt, unter Beruecksichtigung der brasilianischen LGPD und relevanter Hinweise fuer Besucher aus den USA.",
    updatedAt: "Letzte Aktualisierung: 22. Juli 2026",
    controllerTitle: "Verantwortlicher und Kontakt",
    controllerRows: [
      ["Verantwortlicher", "Kaiser Labs Tecnologia LTDA"],
      ["Brasilianische Unternehmensnummer", "CNPJ 66.557.573/0001-66"],
      ["Datenschutzkontakt", "padilha.matheus@hotmail.com"],
      ["Website", "https://kaisertec.com.br"],
    ],
    dataTableTitle: "Daten, die wir verarbeiten koennen",
    dataRows: [
      [
        "Kontaktformular",
        "Name, E-Mail, Unternehmen, Art des operativen Problems und Nachricht.",
        "Anfragen beantworten, eine erste Diagnose vorbereiten, Geschaeftsbeziehungen verwalten und die Website vor Missbrauch schuetzen.",
      ],
      [
        "Technische und Analytics-Daten",
        "Besuchte Seiten, Navigationsereignisse, Traffic-Quelle, Browser, Geraet, Sprache, Datum/Uhrzeit und technische Kennungen von Analytics-Tools.",
        "Reichweite messen, Nutzung verstehen, Inhalte verbessern, technische Probleme beheben und Kampagnenleistung bewerten.",
      ],
      [
        "Geschaeftliche Kommunikation",
        "Nachrichtenverlauf, Antworten, Praeferenzen und Informationen aus Gespraechen mit Kaiser Tech.",
        "Betreuung fortsetzen, Angebote vorbereiten, vertragliche oder vorvertragliche Pflichten erfuellen und notwendige Nachweise aufbewahren.",
      ],
    ],
    sections: [
      {
        title: "Rechtsgrundlagen",
        body: [
          "Soweit die brasilianische LGPD gilt, verarbeiten wir personenbezogene Daten zur Vertragserfuellung oder fuer vorvertragliche Massnahmen, auf Basis berechtigter Interessen, gesetzlicher Pflichten, Rechtsausuebung und, falls erforderlich, Einwilligung.",
          "Berechtigte Interessen koennen die Beantwortung kommerzieller Anfragen, Sicherheit der Website, Missbrauchspraevention, Performance-Messung und Verbesserung unserer Services umfassen.",
        ],
      },
      {
        title: "Cookies, Google Analytics und Ereignisse",
        body: [
          "Wir nutzen Google Analytics, soweit erforderlich mit Einwilligung, um Besuche, Seitenaufrufe und relevante Interaktionen zu verstehen, etwa Klicks auf Kontakt-CTAs und erfolgreiche Formularsendungen.",
          "Sie koennen Analytics ueber das Cookie-Banner beim ersten Besuch akzeptieren oder ablehnen. Sie koennen Cookies auch im Browser blockieren oder Opt-out-Werkzeuge von Analytics-Anbietern nutzen. Ablehnung oder Blockierung kann die Messgenauigkeit verringern, verhindert aber nicht die wesentliche Nutzung der Website.",
        ],
      },
      {
        title: "Weitergabe an Dritte",
        body: [
          "Wir koennen Daten mit Dienstleistern teilen, die fuer Hosting, Formularverarbeitung, E-Mail-Versand, Analytics, Sicherheit, Speicherung sowie administrative oder rechtliche Unterstuetzung erforderlich sind.",
          "Ausserdem koennen wir Daten weitergeben, wenn dies gesetzlich erforderlich ist, zur Beantwortung zustaendiger Behoerden, zum Schutz unserer Rechte, zur Untersuchung von Missbrauch oder zur Bearbeitung berechtigter Anfragen.",
        ],
      },
      {
        title: "Internationale Uebermittlungen",
        body: [
          "Einige Dienstleister koennen Daten ausserhalb Brasiliens verarbeiten, einschliesslich in den Vereinigten Staaten. In solchen Faellen nutzen wir angemessene vertragliche, technische und organisatorische Schutzmassnahmen.",
        ],
      },
      {
        title: "Aufbewahrung",
        body: [
          "Wir speichern Daten so lange, wie es fuer die Zwecke dieser Erklaerung, zur Beantwortung von Anfragen, fuer Geschaeftsnachweise, gesetzliche Pflichten, Streitbeilegung und Rechtswahrung erforderlich ist.",
          "Kontakt- und Geschaeftsdaten koennen im Allgemeinen bis zu 5 Jahre nach der letzten relevanten Interaktion gespeichert werden, sofern keine laengere gesetzliche oder legitime Notwendigkeit besteht.",
        ],
      },
      {
        title: "Rechte in Brasilien",
        body: [
          "Unter der LGPD koennen betroffene Personen unter anderem Bestaetigung der Verarbeitung, Auskunft, Berichtigung, Anonymisierung, Sperrung, Loeschung, Portabilitaet, Informationen zur Weitergabe, Ueberpruefung automatisierter Entscheidungen und Widerruf einer Einwilligung verlangen.",
          "Zur Ausuebung dieser Rechte kontaktieren Sie uns ueber den Datenschutzkontakt. Wir koennen zusaetzliche Informationen anfordern, um Ihre Identitaet zu bestaetigen.",
        ],
      },
      {
        title: "Hinweis fuer Besucher aus den USA",
        body: [
          "Kaiser Tech verkauft keine personenbezogenen Daten. Wir erheben ueber diese Website nicht absichtlich sensible personenbezogene Daten und richten unsere Services nicht an Kinder unter 13 Jahren.",
          "Je nach US-Bundesstaat und anwendbarem Recht koennen Rechte auf Auskunft, Berichtigung, Loeschung, Portabilitaet, Einschraenkung sensibler Daten, Widerspruch oder Opt-out bestimmter Weitergaben bestehen. Soweit anwendbar, bearbeiten wir solche Anfragen ueber den Datenschutzkontakt.",
        ],
      },
      {
        title: "Sicherheit",
        body: [
          "Wir verwenden angemessene technische und administrative Massnahmen gegen unbefugten Zugriff, Verlust, Veraenderung, Offenlegung oder unzulaessige Vernichtung. Kein System ist jedoch absolut sicher.",
        ],
      },
      {
        title: "Sensible Daten und unnoetige Informationen",
        body: [
          "Senden Sie ueber das Formular keine sensiblen Daten, Dokumente, Passwoerter, Finanzdaten, Gesundheitsdaten oder Daten Dritter, sofern dies fuer die erste Anfrage nicht strikt erforderlich ist.",
        ],
      },
      {
        title: "Aenderungen dieser Erklaerung",
        body: [
          "Wir koennen diese Erklaerung aktualisieren, um rechtliche, technische oder operative Aenderungen abzubilden. Die aktuelle Version wird stets auf dieser Seite veroeffentlicht.",
        ],
      },
    ],
  },
};

export function PrivacyPolicyPage({ locale, navigate }: PrivacyPolicyPageProps) {
  const copy = policyCopy[locale];
  const homePath = getHomePath(locale);

  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <a
          className="detail-back"
          href={homePath}
          onClick={(event) => {
            event.preventDefault();
            navigate(homePath);
          }}
        >
          {copy.backHome}
        </a>
        <div className="eyebrow">
          <ShieldCheck size={16} />
          {copy.eyebrow}
        </div>
        <h1>{copy.title}</h1>
        <p>{copy.subtitle}</p>
        <span>{copy.updatedAt}</span>
      </section>

      <section className="privacy-layout">
        <aside className="privacy-summary" aria-label={copy.controllerTitle}>
          <strong>{copy.controllerTitle}</strong>
          {copy.controllerRows.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </aside>

        <article className="privacy-document">
          <section>
            <h2>{copy.dataTableTitle}</h2>
            <div className="privacy-table">
              {copy.dataRows.map(([category, data, purpose]) => (
                <div className="privacy-table-row" key={category}>
                  <strong>{category}</strong>
                  <p>{data}</p>
                  <p>{purpose}</p>
                </div>
              ))}
            </div>
          </section>

          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </section>
    </main>
  );
}
