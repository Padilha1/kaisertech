import { Instagram, Linkedin } from "lucide-react";
import type { MouseEvent } from "react";
import type { Locale, LocaleCopy } from "../lib/i18n";
import { getPrivacyPath } from "../lib/routing";

type FooterProps = {
  currentYear: number;
  homePath: string;
  locale: Locale;
  navigate: (path: string) => void;
  t: LocaleCopy;
};

const sectionLinks = [
  ["solutions", "services"],
  ["cases", "cases"],
  ["method", "method"],
  ["proof", "proof"],
  ["contact", "contact"],
] as const;

export function Footer({ currentYear, homePath, locale, navigate, t }: FooterProps) {
  const handleInternalLink = (path: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(path);
  };
  const privacyPath = getPrivacyPath(locale);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand" href={homePath} aria-label="Kaiser Tech home" onClick={handleInternalLink(homePath)}>
            <span>
              <img src="/logo_branco.png" alt="" />
            </span>
            Kaiser Tech
          </a>
          <p>{t.footer.tagline}</p>
          <a className="footer-domain" href="https://kaisertec.com.br" target="_blank" rel="noreferrer noopener">
            kaisertec.com.br
          </a>
        </div>

        <nav className="footer-nav" aria-label={t.footer.navLabel}>
          <strong>{t.footer.navTitle}</strong>
          {sectionLinks.map(([sectionId, label]) => {
            const path = `${homePath}#${sectionId}`;

            return (
              <a href={path} key={sectionId} onClick={handleInternalLink(path)}>
                {t.nav[label]}
              </a>
            );
          })}
          <a href={privacyPath} onClick={handleInternalLink(privacyPath)}>
            {t.footer.privacyPolicy}
          </a>
        </nav>

        <div className="footer-legal">
          <strong>{t.footer.legalName}</strong>
          <div>
            <span>CNPJ 66.557.573/0001-66</span>
            <span>{t.footer.country}</span>
          </div>
          <div className="footer-socials" aria-label={t.footer.socialLabel}>
            <a href="https://www.instagram.com/matheus.padilha" target="_blank" rel="noreferrer noopener" aria-label={t.footer.instagramLabel}>
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/padilha--matheus/" target="_blank" rel="noreferrer noopener" aria-label={t.footer.linkedinLabel}>
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          {t.footer.rightsPrefix} @ {currentYear} {t.footer.legalName}
        </span>
        <span>{t.footer.developedBy}</span>
      </div>
    </footer>
  );
}
