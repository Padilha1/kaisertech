import { ArrowRight, Check } from "lucide-react";
import { trackCtaClick } from "../lib/analytics";
import type { LocaleCopy } from "../lib/i18n";

type MethodologyPageProps = {
  homePath: string;
  navigate: (path: string) => void;
  t: LocaleCopy;
};

export function MethodologyPage({ homePath, navigate, t }: MethodologyPageProps) {
  return (
    <main className="detail-page methodology-page">
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
        <div className="eyebrow">{t.nav.method}</div>
        <h1>{t.method.title}</h1>
        <p>{t.method.lead}</p>
        <div className="detail-actions">
          <a
            className="primary-button"
            href={`${homePath}#contact`}
            onClick={(event) => {
              event.preventDefault();
              trackCtaClick("methodology_primary", `${homePath}#contact`);
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
          <span>{t.nav.method}</span>
          <h2>{t.method.summaryTitle}</h2>
          <p>{t.method.summary}</p>
          <ul>
            {t.method.outcomes.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
        </article>
        {t.method.steps.map(([number, title, body]) => (
          <article className="detail-panel" key={number} data-animate>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
