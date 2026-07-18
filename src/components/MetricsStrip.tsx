import type { LocaleCopy } from "../lib/i18n";

type MetricsStripProps = {
  t: LocaleCopy;
};

export function MetricsStrip({ t }: MetricsStripProps) {
  return (
    <section className="metrics-strip" aria-label="Kaiser Tech metrics" data-animate>
      {t.hero.metrics.map(([value, label]) => (
        <div className="metric" key={value}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}
