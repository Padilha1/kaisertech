import type { LocaleCopy } from "../lib/i18n";

type MethodSectionProps = {
  t: LocaleCopy;
};

export function MethodSection({ t }: MethodSectionProps) {
  return (
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
  );
}
