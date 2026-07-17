import { ArrowRight, Check, GitBranch, Globe2, Instagram, Linkedin, Maximize2, Menu, Server, ShieldCheck, TrendingUp, X } from "lucide-react";
import type { CSSProperties, FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CaseModal, type CaseModalContent } from "./components/CaseModal";
import { ShaderAnimation } from "./components/ui/shader-animation";
import { dictionary, type Locale } from "./lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type FormStatus = "idle" | "submitting" | "success" | "error";

export function App() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseModalContent | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const appRef = useRef<HTMLDivElement>(null);
  const t = dictionary[locale];
  const painIcons = [TrendingUp, Server, GitBranch] as const;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > 18);

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  useEffect(() => {
    const root = appRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-copy > *",
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.15,
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-animate]:not(.solution-card):not(.case-card)").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "top 62%",
              scrub: 0.45,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".solution-card").forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 64, rotateX: 6 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 58%",
              scrub: 0.55,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".case-card").forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 72, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 54%",
              scrub: 0.65,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".case-card__image").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.88, filter: "brightness(0.72)" },
          {
            scale: 1,
            filter: "brightness(1)",
            ease: "none",
            scrollTrigger: {
              trigger: image.closest(".case-card") ?? image,
              start: "top 92%",
              end: "bottom 58%",
              scrub: 0.8,
            },
          },
        );
      });
    }, root);

    return () => context.revert();
  }, []);

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact form failed");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="app-shell" ref={appRef}>
      <header className={isScrolled ? "site-header site-header--scrolled" : "site-header"}>
        <a className="brand" href="#top" aria-label="Kaiser Tech home">
          <span>
            <img src="/logo_branco.png" alt="" />
          </span>
          Kaiser Tech
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#solutions">{t.nav.services}</a>
          <a href="#cases">{t.nav.cases}</a>
          <a href="#method">{t.nav.method}</a>
          <a href="#proof">{t.nav.proof}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="header-actions">
          <button className="language-toggle" type="button" onClick={() => setLocale(locale === "pt" ? "en" : "pt")}>
            <Globe2 size={16} />
            {locale === "pt" ? "EN" : "PT"}
          </button>
          <a className="header-cta" href="#contact">
            {t.hero.cta}
          </a>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#solutions" onClick={() => setMenuOpen(false)}>
            {t.nav.services}
          </a>
          <a href="#cases" onClick={() => setMenuOpen(false)}>
            {t.nav.cases}
          </a>
          <a href="#method" onClick={() => setMenuOpen(false)}>
            {t.nav.method}
          </a>
          <a href="#proof" onClick={() => setMenuOpen(false)}>
            {t.nav.proof}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t.nav.contact}
          </a>
        </nav>
      ) : null}

      <main>
      <section className="hero-section" id="top">
        <div className="hero-shader" aria-hidden="true">
          <ShaderAnimation />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            {t.hero.eyebrow}
          </div>
          <h1>{t.hero.title}</h1>
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

      <section className="metrics-strip" aria-label="Kaiser Tech metrics" data-animate>
        {t.hero.metrics.map(([value, label]) => (
          <div className="metric" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="pain-section">
        <div className="section-heading compact" data-animate>
          <h2>{t.pain.title}</h2>
        </div>
        <div className="pain-grid">
          {t.pain.items.map((item, index) => {
            const PainIcon = painIcons[index] ?? TrendingUp;

            return (
              <article className="pain-card" key={item.title} data-animate>
                <PainIcon size={20} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>

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
            <article className={index === 0 ? "solution-card featured" : "solution-card"} key={service.title} data-animate>
              <div className="solution-index">{String(index + 1).padStart(2, "0")}</div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <span>{service.stack}</span>
            </article>
          ))}
        </div>
      </section>

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
              onClick={() => setSelectedCase(caseItem)}
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

      <section className="method-section" id="method">
        <div className="section-heading" data-animate>
          <h2>{t.method.title}</h2>
        </div>
        <div className="method-grid">
          {t.method.steps.map(([number, title, body]) => (
            <article className="method-step" key={number} data-animate>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-section" id="proof">
        <div data-animate>
          <div className="eyebrow">
            <ShieldCheck size={16} />
            {t.nav.proof}
          </div>
          <h2>{t.proof.title}</h2>
          <p>{t.proof.copy}</p>
        </div>
        <div className="proof-list" data-animate>
          {t.proof.bullets.map((bullet) => (
            <div key={bullet}>
              <Check size={18} />
              {bullet}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy" data-animate>
          <h2>{t.form.title}</h2>
          <p>{t.form.subtitle}</p>
        </div>
        <form className="contact-form" onSubmit={handleContactSubmit} data-animate>
          <input className="form-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label>
            {t.form.name}
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            {t.form.email}
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            {t.form.company}
            <input name="company" type="text" autoComplete="organization" />
          </label>
          <label>
            {t.form.painType}
            <select name="painType" defaultValue="">
              <option value="" disabled>
                {t.form.painTypePlaceholder}
              </option>
              {t.form.painTypes.map((painType) => (
                <option value={painType} key={painType}>
                  {painType}
                </option>
              ))}
            </select>
          </label>
          <label className="full">
            {t.form.pain}
            <textarea name="pain" rows={6} required />
          </label>
          <button className="primary-button" type="submit" disabled={formStatus === "submitting"}>
            {formStatus === "submitting" ? t.form.submitting : t.form.submit}
            <ArrowRight size={18} />
          </button>
          {formStatus === "success" ? <p className="form-status form-status--success">{t.form.success}</p> : null}
          {formStatus === "error" ? <p className="form-status form-status--error">{t.form.error}</p> : null}
        </form>
      </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#top" aria-label="Kaiser Tech home">
              <span>
                <img src="/logo_branco.png" alt="" />
              </span>
              Kaiser Tech
            </a>
            <p>Software sob medida para operações que precisam sair do improviso e escalar com rastreabilidade.</p>
            <a className="footer-domain" href="https://kaisertec.com.br" target="_blank" rel="noreferrer noopener">
              kaisertec.com.br
            </a>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <strong>Navegação</strong>
            <a href="#solutions">{t.nav.services}</a>
            <a href="#cases">{t.nav.cases}</a>
            <a href="#method">{t.nav.method}</a>
            <a href="#proof">{t.nav.proof}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="footer-legal">
            <strong>Kaiser Labs Tecnologia LTDA</strong>
            <div>
              <span>CNPJ 66.557.573/0001-66</span>
              <span>Brazil</span>
            </div>
            <div className="footer-socials" aria-label="Social links">
              <a href="https://www.instagram.com/matheus.padilha" target="_blank" rel="noreferrer noopener" aria-label="Instagram de Matheus Padilha">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/padilha--matheus/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn de Matheus Padilha">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Direitos reservados @ {currentYear} Kaiser Labs Tecnologia LTDA</span>
          <span>Desenvolvido por Matheus Padilha</span>
        </div>
      </footer>
      <CaseModal caseItem={selectedCase} closeLabel={t.caseModalClose} siteLabel={t.caseSiteLabel} onClose={() => setSelectedCase(null)} />
    </div>
  );
}
