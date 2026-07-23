type PageViewPayload = {
  page_location: string;
  page_path: string;
  page_title: string;
};

type AnalyticsEventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, payload: AnalyticsEventPayload) => void;
  }
}

const trackEvent = (eventName: string, payload: AnalyticsEventPayload = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

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
