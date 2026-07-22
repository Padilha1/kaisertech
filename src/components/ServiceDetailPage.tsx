import { ArrowRight, Check } from "lucide-react";
import type { Locale, LocaleCopy } from "../lib/i18n";
import { getServicePath } from "../lib/routing";
import { FaqSection } from "./FaqSection";

type ServiceDetailPageProps = {
  homePath: string;
  locale: Locale;
  navigate: (path: string) => void;
  serviceIndex: number;
  t: LocaleCopy;
};

export function ServiceDetailPage({ homePath, locale, navigate, serviceIndex, t }: ServiceDetailPageProps) {
  const servicePage = t.services[serviceIndex];
  const serviceCopy = t.servicePages[serviceIndex];

  return (
    <main className="detail-page">
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
        <div className="eyebrow">{t.detail.serviceEyebrow}</div>
        <h1>{servicePage.title}</h1>
        <p>{serviceCopy.lead}</p>
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
          {/*
          <a className="secondary-button" href={`${homePath}#cases`}>
            {t.detail.relatedCases}
          </a>
          */}
        </div>
      </section>

      <section className="detail-content">
        <article className="detail-panel detail-panel--wide" data-animate>
          <span>{t.detail.whatWeDeliver}</span>
          <h2>{servicePage.title}</h2>
          <p>{serviceCopy.lead}</p>
          <ul>
            {serviceCopy.deliverables.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="detail-panel" data-animate>
          <span>{t.detail.goodFit}</span>
          <ul>
            {serviceCopy.fit.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="detail-panel" data-animate>
          <span>{t.detail.examples}</span>
          <ul>
            {serviceCopy.examples.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="detail-panel detail-panel--full" data-animate>
          <span>{t.detail.technologies}</span>
          <h2>{servicePage.stack}</h2>
          <p>{t.proof.copy}</p>
        </article>
      </section>

      <FaqSection items={serviceCopy.faq} title={t.detail.faq} />

      <section className="related-section">
        <div className="section-heading" data-animate>
          <h2>{t.detail.relatedSolutions}</h2>
        </div>
        <div className="related-grid">
          {t.services.map((service, index) => (
            <a className={index === 0 ? "related-card related-card--wide" : "related-card"} href={getServicePath(locale, index)} key={service.title} data-animate>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service.title}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
