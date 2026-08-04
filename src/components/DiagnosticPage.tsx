import { ArrowRight, Check } from "lucide-react";
import { trackCtaClick } from "../lib/analytics";
import type { LocaleCopy } from "../lib/i18n";

type DiagnosticPageProps = {
  homePath: string;
  navigate: (path: string) => void;
  t: LocaleCopy;
};

export function DiagnosticPage({ homePath, navigate, t }: DiagnosticPageProps) {
  return (
    <main className="detail-page diagnostic-page">
      <section className="detail-hero" data-animate>
        <a
          className="detail-back"
          href={homePath}
          onClick={(event) => {
            event.preventDefault();
            navigate(homePath);
          }}
        >
          {t.detail.backHome}
        </a>
        <div className="eyebrow">{t.diagnostic.eyebrow}</div>
        <h1>{t.diagnostic.title}</h1>
        <p>{t.diagnostic.lead}</p>
        <div className="detail-actions">
          <a
            className="primary-button"
            href={`${homePath}#contact`}
            onClick={(event) => {
              event.preventDefault();
              trackCtaClick("diagnostic_primary", `${homePath}#contact`);
              navigate(`${homePath}#contact`);
            }}
          >
            {t.detail.talkAboutThis}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="detail-content">
        <article className="detail-panel detail-panel--wide" data-animate>
          <span>{t.diagnostic.summaryLabel}</span>
          <h2>{t.diagnostic.summaryTitle}</h2>
          <p>{t.diagnostic.summary}</p>
        </article>

        <article className="detail-panel" data-animate>
          <span>{t.diagnostic.signalsTitle}</span>
          <ul>
            {t.diagnostic.signals.map((signal) => (
              <li key={signal}>
                <Check size={16} />
                {signal}
              </li>
            ))}
          </ul>
        </article>

        <article className="detail-panel" data-animate>
          <span>{t.diagnostic.checklistTitle}</span>
          <ul>
            {t.diagnostic.checklist.map((question) => (
              <li key={question}>
                <Check size={16} />
                {question}
              </li>
            ))}
          </ul>
        </article>

        <article className="detail-panel detail-panel--full" data-animate>
          <span>{t.diagnostic.matrixTitle}</span>
          <div className="decision-matrix">
            {t.diagnostic.matrix.map(([name, description]) => (
              <div key={name}>
                <strong>{name}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
