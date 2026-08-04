import { ArrowRight } from "lucide-react";
import { trackCtaClick } from "../lib/analytics";
import type { LocaleCopy } from "../lib/i18n";

type GlossaryPageProps = {
  homePath: string;
  navigate: (path: string) => void;
  t: LocaleCopy;
};

export function GlossaryPage({ homePath, navigate, t }: GlossaryPageProps) {
  return (
    <main className="detail-page glossary-page">
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
        <div className="eyebrow">{t.glossary.eyebrow}</div>
        <h1>{t.glossary.title}</h1>
        <p>{t.glossary.lead}</p>
        <div className="detail-actions">
          <a
            className="primary-button"
            href={`${homePath}#contact`}
            onClick={(event) => {
              event.preventDefault();
              trackCtaClick("glossary_primary", `${homePath}#contact`);
              navigate(`${homePath}#contact`);
            }}
          >
            {t.detail.talkAboutThis}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="detail-content glossary-content">
        <article className="detail-panel detail-panel--wide" data-animate>
          <span>{t.glossary.summaryLabel}</span>
          <h2>{t.glossary.summaryTitle}</h2>
          <p>{t.glossary.summary}</p>
        </article>
        {t.glossary.terms.map((term) => (
          <article className="detail-panel" key={term.name} data-animate>
            <span>{term.category}</span>
            <h2>{term.name}</h2>
            <p>{term.definition}</p>
            <p>{term.context}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
