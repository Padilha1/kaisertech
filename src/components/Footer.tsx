import { Instagram, Linkedin } from "lucide-react";
import type { LocaleCopy } from "../lib/i18n";

type FooterProps = {
  currentYear: number;
  homePath: string;
  t: LocaleCopy;
};

export function Footer({ currentYear, homePath, t }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand" href={homePath} aria-label="Kaiser Tech home">
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
          <a href={`${homePath}#solutions`}>{t.nav.services}</a>
          <a href={`${homePath}#cases`}>{t.nav.cases}</a>
          <a href={`${homePath}#method`}>{t.nav.method}</a>
          <a href={`${homePath}#proof`}>{t.nav.proof}</a>
          <a href={`${homePath}#contact`}>{t.nav.contact}</a>
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
