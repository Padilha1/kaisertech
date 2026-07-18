type FaqSectionProps = {
  items: readonly (readonly [string, string])[];
  title: string;
};

export function FaqSection({ items, title }: FaqSectionProps) {
  return (
    <section className="faq-section">
      <div className="section-heading" data-animate>
        <h2>{title}</h2>
      </div>
      <div className="faq-grid">
        {items.map(([question, answer]) => (
          <article className="faq-card" key={question} data-animate>
            <h3>{question}</h3>
            <p>{answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
