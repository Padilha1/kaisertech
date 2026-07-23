type PageViewPayload = {
  page_location: string;
  page_path: string;
  page_title: string;
};

type AnalyticsEventPayload = Record<string, string | number | boolean | undefined>;
type ConsentModeValue = "granted" | "denied";
type ConsentModePayload = {
  analytics_storage: ConsentModeValue;
  ad_storage: "denied";
  ad_user_data: "denied";
  ad_personalization: "denied";
};
export type CookieConsent = "accepted" | "rejected";

declare global {
  interface Window {
    gtag?: {
      (command: "event", eventName: string, payload: AnalyticsEventPayload): void;
      (command: "consent", action: "default" | "update", payload: ConsentModePayload): void;
    };
  }
}

export const COOKIE_CONSENT_STORAGE_KEY = "kaisertech_cookie_consent";
let runtimeCookieConsent: CookieConsent | null = null;

export const getCookieConsent = (): CookieConsent | null => {
  if (runtimeCookieConsent) return runtimeCookieConsent;
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    runtimeCookieConsent = stored === "accepted" || stored === "rejected" ? stored : null;
    return runtimeCookieConsent;
  } catch {
    return runtimeCookieConsent;
  }
};

export const setCookieConsent = (consent: CookieConsent) => {
  runtimeCookieConsent = consent;
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, consent);
  } catch {
    // Consent still applies for the current session through gtag update.
  }
};

export const hasAnalyticsConsent = () => getCookieConsent() === "accepted";

export const updateAnalyticsConsent = (consent: CookieConsent) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: consent === "accepted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

const trackEvent = (eventName: string, payload: AnalyticsEventPayload = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!hasAnalyticsConsent()) return;

  window.gtag("event", eventName, payload);
};

export const trackPageView = (path: string) => {
  if (typeof window === "undefined") return;

  trackEvent("page_view", {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
  } satisfies PageViewPayload);
};

export const trackCtaClick = (source: string, target: string) => {
  if (typeof window === "undefined") return;

  trackEvent("cta_click", {
    cta_source: source,
    link_url: target,
    page_location: window.location.href,
  });
};

export const trackContactFormSubmit = () => {
  if (typeof window === "undefined") return;

  trackEvent("contact_form_submit", {
    page_location: window.location.href,
  });
};
