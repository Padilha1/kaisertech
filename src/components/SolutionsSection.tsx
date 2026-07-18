import type { Locale, LocaleCopy } from "../lib/i18n";
import { getServicePath } from "../lib/routing";

type SolutionsSectionProps = {
  locale: Locale;
  t: LocaleCopy;
};

export function SolutionsSection({ locale, t }: SolutionsSectionProps) {
  return (
    <section className="solutions-section" id="solutions">
      <div className="section-heading" data-animate>
        <h2 className="solutions-title">
          <span>{t.servicesTitle[0]}</span>
          <span>{t.servicesTitle[1]}</span>
        </h2>
        <p>{t.servicesIntro}</p>
      </div>
      <div className="solutions-grid">
        {t.services.map((service, index) => (
          <a className={index === 0 ? "solution-card featured" : "solution-card"} href={getServicePath(locale, index)} key={service.title} data-animate>
            <div className="solution-index">{String(index + 1).padStart(2, "0")}</div>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
            <span>{service.stack}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
