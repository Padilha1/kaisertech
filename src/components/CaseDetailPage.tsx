import { ArrowRight, Check } from "lucide-react";
import type { CSSProperties } from "react";
import type { LocaleCopy } from "../lib/i18n";

type CaseDetailPageProps = {
  caseIndex: number;
  homePath: string;
  navigate: (path: string) => void;
  t: LocaleCopy;
};

export function CaseDetailPage({ caseIndex, homePath, navigate, t }: CaseDetailPageProps) {
  const casePage = t.cases[caseIndex];
  const deliverables =
    "deliverables" in casePage && casePage.deliverables
      ? casePage.deliverables
      : [t.services[0].title, t.services[1].title, t.proof.bullets[3]];

  return (
    <main className="detail-page">
      <section className="detail-hero detail-hero--case" data-animate>
        <a className="detail-back" href={homePath}>
          {t.detail.backHome}
        </a>
        <div className="eyebrow">{t.detail.caseEyebrow}</div>
        <h1>{casePage.title}</h1>
        <p>{casePage.subtitle}</p>
        <div className="detail-actions">
          <a
            className="primary-button"
            href={`${homePath}#contact`}
            onClick={(event) => {
              event.preventDefault();
              navigate(`${homePath}#contact`);
            }}
          >
            {t.detail.talkAboutThis}
            <ArrowRight size={18} />
          </a>
          {"siteUrl" in casePage && casePage.siteUrl ? (
            <a className="secondary-button" href={casePage.siteUrl} target="_blank" rel="noreferrer noopener">
              {t.caseSiteLabel}
            </a>
          ) : null}
        </div>
      </section>

      <section className="case-detail-media" style={{ "--case-accent": casePage.accent } as CSSProperties} data-animate>
        {casePage.imageSrc ? <img src={casePage.imageSrc} alt="" /> : null}
        <span>{casePage.imageLabel}</span>
      </section>

      <section className="detail-content">
        <article className="detail-panel detail-panel--wide" data-animate>
          <span>{t.detail.caseImpact}</span>
          <h2>{casePage.subtitle}</h2>
          <p>{casePage.description}</p>
        </article>
        <article className="detail-panel" data-animate>
          <span>{t.detail.whatWeDeliver}</span>
          <ul>
            {deliverables.map((deliverable) => {
              const title = typeof deliverable === "string" ? deliverable : deliverable.title;
              const body = typeof deliverable === "string" ? null : deliverable.body;

              return (
                <li key={title}>
                  <Check size={16} />
                  <div>
                    <strong>{title}</strong>
                    {body ? <p>{body}</p> : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
      </section>

      {/*
      <section className="related-section">
        <div className="section-heading" data-animate>
          <h2>{t.detail.relatedCases}</h2>
        </div>
        <div className="related-grid">
          {t.cases.map((caseItem) => (
            <a className="related-card" href="#" key={caseItem.title}>
              <span>{caseItem.imageLabel}</span>
              <strong>{caseItem.title}</strong>
            </a>
          ))}
        </div>
      </section>
      */}
    </main>
  );
}
