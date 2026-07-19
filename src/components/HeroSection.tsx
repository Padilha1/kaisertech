import { ArrowRight } from "lucide-react";
import type { LocaleCopy } from "../lib/i18n";
import { HeroRotatingTitle } from "./HeroRotatingTitle";
import { ShaderAnimation } from "./ui/shader-animation";

type HeroSectionProps = {
  t: LocaleCopy;
};

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-shader" aria-hidden="true">
        <ShaderAnimation />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-copy">
        <div className="eyebrow">{t.hero.eyebrow}</div>
        <HeroRotatingTitle lang={t.seo.lang} />
        <p>{t.hero.subtitle}</p>
        <div className="hero-actions">
          <a className="primary-button" href="#contact">
            {t.hero.cta}
            <ArrowRight size={18} />
          </a>
          <a className="secondary-button" href="#solutions">
            {t.hero.secondary}
          </a>
        </div>
        <p className="trust-line">{t.hero.trust}</p>
      </div>
    </section>
  );
}
