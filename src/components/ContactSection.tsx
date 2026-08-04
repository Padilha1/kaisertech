import { ArrowRight, PhoneCall } from "lucide-react";
import type { FormEvent } from "react";
import type { LocaleCopy } from "../lib/i18n";

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactSectionProps = {
  formStatus: FormStatus;
  handleContactSubmit: (event: FormEvent<HTMLFormElement>) => void;
  t: LocaleCopy;
};

export function ContactSection({ formStatus, handleContactSubmit, t }: ContactSectionProps) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy" data-animate>
        <h2>{t.form.title}</h2>
        <p>{t.form.subtitle}</p>
        <a
          className="contact-whatsapp"
          href="https://wa.me/5542998366677"
          target="_blank"
          rel="noreferrer"
          aria-label={`${t.form.whatsappLabel} Matheus Padilha, (42) 9 9836-6677`}
        >
          <PhoneCall size={18} />
          <span>{t.form.whatsappLabel}</span>
          <strong>(42) 9 9836-6677 - Matheus Padilha</strong>
        </a>
      </div>
      <form className="contact-form" onSubmit={handleContactSubmit} data-animate>
        <input className="form-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <label>
          {t.form.name}
          <input name="name" type="text" autoComplete="name" placeholder={t.form.namePlaceholder} required />
        </label>
        <label>
          {t.form.email}
          <input name="email" type="email" autoComplete="email" placeholder={t.form.emailPlaceholder} required />
        </label>
        <label>
          {t.form.phone}
          <input name="phone" type="tel" autoComplete="tel" placeholder={t.form.phonePlaceholder} required />
        </label>
        <label>
          {t.form.company}
          <input name="company" type="text" autoComplete="organization" placeholder={t.form.companyPlaceholder} />
        </label>
        <label>
          {t.form.role}
          <input name="role" type="text" autoComplete="organization-title" placeholder={t.form.rolePlaceholder} />
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
          <textarea name="pain" rows={6} placeholder={t.form.painPlaceholder} required />
        </label>
        <button className="primary-button" type="submit" disabled={formStatus === "submitting"}>
          {formStatus === "submitting" ? t.form.submitting : t.form.submit}
          <ArrowRight size={18} />
        </button>
        {formStatus === "success" ? <p className="form-status form-status--success">{t.form.success}</p> : null}
        {formStatus === "error" ? <p className="form-status form-status--error">{t.form.error}</p> : null}
      </form>
    </section>
  );
}
