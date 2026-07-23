import { Check, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import {
  getCookieConsent,
  setCookieConsent,
  trackPageView,
  updateAnalyticsConsent,
  type CookieConsent,
} from "../lib/analytics";
import type { Locale } from "../lib/i18n";

type CookieConsentBannerProps = {
  canonicalPath: string;
  locale: Locale;
  navigate: (path: string) => void;
  privacyPath: string;
};

const copy: Record<
  Locale,
  {
    title: string;
    body: string;
    accept: string;
    reject: string;
    privacy: string;
  }
> = {
  pt: {
    title: "Cookies e analytics",
    body: "Usamos Google Analytics para entender visitas e melhorar o site. Voce pode aceitar ou recusar analytics; o site continua funcionando normalmente.",
    accept: "Aceitar analytics",
    reject: "Recusar",
    privacy: "Politica de Privacidade",
  },
  en: {
    title: "Cookies and analytics",
    body: "We use Google Analytics to understand visits and improve the site. You can accept or reject analytics; the site keeps working normally.",
    accept: "Accept analytics",
    reject: "Reject",
    privacy: "Privacy Policy",
  },
  de: {
    title: "Cookies und Analytics",
    body: "Wir nutzen Google Analytics, um Besuche zu verstehen und die Website zu verbessern. Sie koennen Analytics akzeptieren oder ablehnen; die Website funktioniert weiter.",
    accept: "Analytics akzeptieren",
    reject: "Ablehnen",
    privacy: "Datenschutz",
  },
};

export function CookieConsentBanner({ canonicalPath, locale, navigate, privacyPath }: CookieConsentBannerProps) {
  const [consent, setConsentState] = useState<CookieConsent | null>(() => getCookieConsent());
  const t = copy[locale];

  if (consent) return null;

  const handleConsent = (nextConsent: CookieConsent) => {
    setCookieConsent(nextConsent);
    updateAnalyticsConsent(nextConsent);
    setConsentState(nextConsent);

    if (nextConsent === "accepted") {
      trackPageView(canonicalPath);
    }
  };

  return (
    <aside className="cookie-banner" aria-label={t.title}>
      <div className="cookie-banner__icon" aria-hidden="true">
        <ShieldCheck size={20} />
      </div>
      <div className="cookie-banner__copy">
        <strong>{t.title}</strong>
        <p>{t.body}</p>
        <a
          href={privacyPath}
          onClick={(event) => {
            event.preventDefault();
            navigate(privacyPath);
          }}
        >
          {t.privacy}
        </a>
      </div>
      <div className="cookie-banner__actions">
        <button
          className="cookie-banner__button cookie-banner__button--ghost"
          type="button"
          onClick={() => handleConsent("rejected")}
        >
          <X size={16} />
          {t.reject}
        </button>
        <button
          className="cookie-banner__button cookie-banner__button--primary"
          type="button"
          onClick={() => handleConsent("accepted")}
        >
          <Check size={16} />
          {t.accept}
        </button>
      </div>
    </aside>
  );
}
