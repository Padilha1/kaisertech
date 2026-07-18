import { GitBranch, Server, TrendingUp } from "lucide-react";
import type { LocaleCopy } from "../lib/i18n";

type PainSectionProps = {
  t: LocaleCopy;
};

const painIcons = [TrendingUp, Server, GitBranch] as const;

export function PainSection({ t }: PainSectionProps) {
  return (
    <section className="pain-section">
      <div className="section-heading compact" data-animate>
        <h2>{t.pain.title}</h2>
      </div>
      <div className="pain-grid">
        {t.pain.items.map((item, index) => {
          const PainIcon = painIcons[index] ?? TrendingUp;

          return (
            <article className="pain-card" key={item.title} data-animate>
              <PainIcon size={20} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
