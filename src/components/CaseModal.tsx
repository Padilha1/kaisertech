import { X } from "lucide-react";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

export type CaseModalContent = {
  title: string;
  subtitle: string;
  description: string;
  imageLabel: string;
  imageSrc?: string;
  siteUrl?: string;
  detailUrl?: string;
  accent: string;
};

type CaseModalProps = {
  caseItem: CaseModalContent | null;
  closeLabel: string;
  detailLabel: string;
  siteLabel: string;
  onClose: () => void;
};

export function CaseModal({ caseItem, closeLabel, detailLabel, siteLabel, onClose }: CaseModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isClosingRef = useRef(false);

  const requestClose = useCallback(() => {
    if (isClosingRef.current) return;

    isClosingRef.current = true;
    setIsClosing(true);
    closeTimeoutRef.current = window.setTimeout(() => {
      onClose();
      setIsClosing(false);
      isClosingRef.current = false;
      closeTimeoutRef.current = null;
    }, 180);
  }, [onClose]);

  useEffect(() => {
    if (!caseItem) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        requestClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        panelRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      isClosingRef.current = false;
      if (previousFocusRef.current?.isConnected) {
        previousFocusRef.current.focus();
      }
    };
  }, [caseItem, requestClose]);

  if (!caseItem) return null;

  return (
    <div className={isClosing ? "case-modal case-modal--closing" : "case-modal"} role="dialog" aria-modal="true" aria-labelledby="case-modal-title">
      <button className="case-modal__backdrop" type="button" aria-label={closeLabel} onClick={requestClose} />
      <article className="case-modal__panel" ref={panelRef} tabIndex={-1}>
        <button className="case-modal__close" type="button" aria-label={closeLabel} onClick={requestClose} ref={closeButtonRef}>
          <X size={20} />
        </button>
        <div className="case-modal__image" style={{ "--case-accent": caseItem.accent } as CSSProperties}>
          {caseItem.imageSrc ? <img src={caseItem.imageSrc} alt="" /> : null}
          <span>{caseItem.imageLabel}</span>
        </div>
        <div className="case-modal__content">
          <p>{caseItem.subtitle}</p>
          <h2 id="case-modal-title">{caseItem.title}</h2>
          <div>{caseItem.description}</div>
          <div className="case-modal__actions">
            {caseItem.detailUrl ? (
              <a className="case-modal__link" href={caseItem.detailUrl}>
                {detailLabel}: {caseItem.title}
              </a>
            ) : null}
            {caseItem.siteUrl ? (
              <a className="case-modal__link case-modal__link--secondary" href={caseItem.siteUrl} target="_blank" rel="noreferrer noopener">
                {siteLabel}
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
}
