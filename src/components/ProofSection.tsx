import { Check, ShieldCheck } from "lucide-react";
import type { LocaleCopy } from "../lib/i18n";

type ProofSectionProps = {
  t: LocaleCopy;
};

export function ProofSection({ t }: ProofSectionProps) {
  return (
    <section className="proof-section" id="proof">
      <div data-animate>
        <div className="eyebrow">
          <ShieldCheck size={16} />
          {t.nav.proof}
        </div>
        <h2>{t.proof.title}</h2>
        <p>{t.proof.copy}</p>
      </div>
      <div className="proof-list" data-animate>
        {t.proof.bullets.map((bullet) => (
          <div key={bullet}>
            <Check size={18} />
            {bullet}
          </div>
        ))}
      </div>
    </section>
  );
}
