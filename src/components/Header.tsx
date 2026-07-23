import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { trackCtaClick } from "../lib/analytics";
import type { Locale, LocaleCopy } from "../lib/i18n";
import type { AppRoute } from "../lib/routing";
import { getRoutePath } from "../lib/routing";

type HeaderProps = {
  availableLocales: Locale[];
  homePath: string;
  isScrolled: boolean;
  menuOpen: boolean;
  navigate: (path: string) => void;
  setMenuOpen: (open: boolean) => void;
  t: LocaleCopy;
  route: AppRoute;
};

const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  de: "DE",
};

const sectionLinks = [
  ["solutions", "services"],
  ["cases", "cases"],
  ["method", "method"],
  ["proof", "proof"],
  ["contact", "contact"],
] as const;

export function Header({ availableLocales, homePath, isScrolled, menuOpen, navigate, route, setMenuOpen, t }: HeaderProps) {
  const languageToggleClass = [
    "relative inline-flex items-center justify-center gap-2 border border-[var(--line)] bg-[rgba(247,245,242,0.05)] text-[var(--paper)] transition-[border-radius,min-height,background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-[rgba(247,245,242,0.3)] hover:bg-[rgba(247,245,242,0.09)] hover:shadow-[0_12px_34px_rgba(0,0,0,0.18)]",
    isScrolled ? "min-h-[38px] rounded-full px-3 max-[980px]:px-2.5" : "min-h-10 rounded-lg px-3 max-[980px]:px-2.5",
  ].join(" ");

  const goToLocale = (locale: Locale) => navigate(getRoutePath(route, locale));
  const handleInternalLink = (path: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(path);
  };
  const handleHeaderCtaClick = (path: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    trackCtaClick("header_cta", path);
    navigate(path);
  };

  return (
    <>
      <header className={isScrolled ? "site-header site-header--scrolled" : "site-header"}>
        <a className="brand" href={homePath} aria-label="Kaiser Tech home" onClick={handleInternalLink(homePath)}>
          <span>
            <img src="/logo_branco.png" alt="" />
          </span>
          Kaiser Tech
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {sectionLinks.map(([sectionId, label]) => {
            const path = `${homePath}#${sectionId}`;

            return (
              <a href={path} key={sectionId} onClick={handleInternalLink(path)}>
                {t.nav[label]}
              </a>
            );
          })}
        </nav>

        <div className="header-actions">
          <div className={languageToggleClass} aria-label="Language selector">
            <Globe2 size={16} />
            <div className="inline-flex items-center gap-1 max-[980px]:hidden">
              {availableLocales.map((locale) => (
                <button
                  aria-current={route.locale === locale ? "true" : undefined}
                  className="min-h-7 min-w-[30px] rounded-full border-0 bg-transparent px-2 py-0.5 text-[0.78rem] font-black text-[var(--muted)] transition-[color,background-color,box-shadow,transform] duration-150 hover:-translate-y-px hover:bg-[var(--orange)] hover:text-[#190f0b] hover:shadow-[0_8px_22px_rgba(252,65,3,0.28)] aria-[current=true]:bg-[rgba(247,245,242,0.12)] aria-[current=true]:text-[var(--paper)] aria-[current=true]:shadow-[inset_0_0_0_1px_rgba(247,245,242,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(252,65,3,0.86)]"
                  key={locale}
                  type="button"
                  onClick={() => goToLocale(locale)}
                >
                  {localeLabels[locale]}
                </button>
              ))}
            </div>
            <details className="group relative hidden max-[980px]:inline-flex">
              <summary className="inline-flex min-h-[38px] min-w-12 cursor-pointer list-none items-center gap-1 rounded-full text-[0.82rem] font-black text-[var(--paper)] marker:hidden [&::-webkit-details-marker]:hidden" aria-label="Select language">
                <span>{localeLabels[route.locale]}</span>
                <ChevronDown className="transition-transform duration-150 group-open:rotate-180" size={14} />
              </summary>
              <div className="absolute right-[-8px] top-[calc(100%+10px)] z-[70] grid min-w-[104px] gap-2 rounded-lg border border-[rgba(247,245,242,0.18)] bg-[rgba(18,16,25,0.96)] p-2 shadow-[0_18px_44px_rgba(0,0,0,0.36)] backdrop-blur-[22px] backdrop-saturate-150">
                {availableLocales.map((locale) => (
                  <button
                    aria-current={route.locale === locale ? "true" : undefined}
                    className="min-h-11 min-w-[88px] justify-start rounded-lg border-0 bg-transparent px-3.5 text-left text-[0.78rem] font-black text-[var(--muted)] transition-[color,background-color,box-shadow,transform] duration-150 hover:bg-[var(--orange)] hover:text-[#190f0b] aria-[current=true]:bg-[rgba(247,245,242,0.12)] aria-[current=true]:text-[var(--paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(252,65,3,0.86)]"
                    key={locale}
                    type="button"
                    onClick={(event) => {
                      event.currentTarget.closest("details")?.removeAttribute("open");
                      goToLocale(locale);
                    }}
                  >
                    {localeLabels[locale]}
                  </button>
                ))}
              </div>
            </details>
          </div>
          <a className="header-cta" href={`${homePath}#contact`} onClick={handleHeaderCtaClick(`${homePath}#contact`)}>
            {t.hero.cta}
          </a>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {sectionLinks.map(([sectionId, label]) => {
            const path = `${homePath}#${sectionId}`;

            return (
              <a href={path} key={sectionId} onClick={handleInternalLink(path)}>
                {t.nav[label]}
              </a>
            );
          })}
        </nav>
      ) : null}
    </>
  );
}
