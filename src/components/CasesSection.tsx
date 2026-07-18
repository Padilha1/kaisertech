import { Maximize2 } from "lucide-react";
import type { CSSProperties } from "react";
import type { Locale, LocaleCopy } from "../lib/i18n";
import { getCasePath } from "../lib/routing";
import type { CaseModalContent } from "./CaseModal";

type CasesSectionProps = {
  locale: Locale;
  setSelectedCase: (caseItem: CaseModalContent) => void;
  t: LocaleCopy;
};

export function CasesSection({ locale, setSelectedCase, t }: CasesSectionProps) {
  return (
    <section className="cases-section" id="cases">
      <div className="section-heading" data-animate>
        <h2>{t.casesTitle}</h2>
        <p>{t.casesIntro}</p>
      </div>
      <div className="cases-grid">
        {t.cases.map((caseItem, index) => (
          <button
            className={`case-card case-card--${index + 1}`}
            type="button"
            key={caseItem.title}
            onClick={() => setSelectedCase({ ...caseItem, detailUrl: getCasePath(locale, index) })}
            aria-label={`${caseItem.title}: ${caseItem.subtitle}`}
            data-animate
          >
            <div className="case-card__image" style={{ "--case-accent": caseItem.accent } as CSSProperties}>
              {caseItem.imageSrc ? <img src={caseItem.imageSrc} alt="" /> : null}
              <span>{caseItem.imageLabel}</span>
            </div>
            <div className="case-card__content">
              <span>{caseItem.subtitle}</span>
              <h3>{caseItem.title}</h3>
            </div>
            <Maximize2 size={18} />
          </button>
        ))}
      </div>
    </section>
  );
}
