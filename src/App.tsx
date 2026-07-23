import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CaseDetailPage } from "./components/CaseDetailPage";
import { CaseModal, type CaseModalContent } from "./components/CaseModal";
import { CookieConsentBanner } from "./components/CookieConsentBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { ServiceDetailPage } from "./components/ServiceDetailPage";
import { trackContactFormSubmit, trackPageView } from "./lib/analytics";
import { dictionary, type Locale } from "./lib/i18n";
import { getHomePath, getPrivacyPath, getRoutePath, parseRoute, siteUrl, type AppRoute } from "./lib/routing";
import { syncSeo } from "./lib/seo";

gsap.registerPlugin(ScrollTrigger);

type FormStatus = "idle" | "submitting" | "success" | "error";
const availableLocales: Locale[] = ["pt", "en", "de"];

export function App() {
  const [route, setRoute] = useState<AppRoute>(() => parseRoute(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseModalContent | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const appRef = useRef<HTMLDivElement>(null);

  const locale = route.locale;
  const t = dictionary[locale];
  const currentYear = new Date().getFullYear();
  const homePath = getHomePath(locale);
  const privacyPath = getPrivacyPath(locale);
  const canonicalPath = getRoutePath(route);
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const servicePage = route.kind === "service" && typeof route.index === "number" ? t.services[route.index] : null;
  const serviceCopy = route.kind === "service" && typeof route.index === "number" ? t.servicePages[route.index] : null;
  const casePage = route.kind === "case" && typeof route.index === "number" ? t.cases[route.index] : null;

  const navigate = (path: string) => {
    window.history.pushState(null, "", path);
    setRoute(parseRoute(window.location.pathname));
    setMenuOpen(false);
    const targetId = window.location.hash.slice(1);

    if (targetId) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  };

  useEffect(() => {
    syncSeo({ canonicalUrl, casePage, route, serviceCopy, servicePage, t });
  }, [canonicalUrl, casePage, route, serviceCopy, servicePage, t]);

  useEffect(() => {
    trackPageView(canonicalPath);
  }, [canonicalPath]);

  useEffect(() => {
    const handlePopState = () => setRoute(parseRoute(window.location.pathname));

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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

    ScrollTrigger.refresh();
    return () => context.revert();
  }, [canonicalPath]);

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
      trackContactFormSubmit();
    } catch {
      setFormStatus("error");
    }
  };

  const mainContent =
    route.kind === "service" && typeof route.index === "number" ? (
      <ServiceDetailPage homePath={homePath} locale={locale} navigate={navigate} serviceIndex={route.index} t={t} />
    ) : route.kind === "case" && typeof route.index === "number" ? (
      <CaseDetailPage caseIndex={route.index} homePath={homePath} navigate={navigate} t={t} />
    ) : route.kind === "privacy" ? (
      <PrivacyPolicyPage locale={locale} navigate={navigate} />
    ) : (
      <HomePage
        formStatus={formStatus}
        handleContactSubmit={handleContactSubmit}
        locale={locale}
        setSelectedCase={(caseItem) => setSelectedCase(caseItem)}
        t={t}
      />
    );

  return (
    <div className="app-shell" ref={appRef}>
      <Header
        availableLocales={availableLocales}
        homePath={homePath}
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        navigate={navigate}
        route={route}
        setMenuOpen={setMenuOpen}
        t={t}
      />
      {mainContent}
      <Footer currentYear={currentYear} homePath={homePath} locale={locale} navigate={navigate} t={t} />
      <CookieConsentBanner
        canonicalPath={canonicalPath}
        locale={locale}
        navigate={navigate}
        privacyPath={privacyPath}
      />
      <CaseModal
        caseItem={selectedCase}
        closeLabel={t.caseModalClose}
        detailLabel={t.detail.viewCase}
        siteLabel={t.caseSiteLabel}
        onClose={() => setSelectedCase(null)}
      />
    </div>
  );
}
