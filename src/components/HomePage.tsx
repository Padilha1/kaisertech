import type { FormEvent } from "react";
import type { CaseModalContent } from "./CaseModal";
import { CasesSection } from "./CasesSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { MethodSection } from "./MethodSection";
import { MetricsStrip } from "./MetricsStrip";
import { PainSection } from "./PainSection";
import { ProofSection } from "./ProofSection";
import { SolutionsSection } from "./SolutionsSection";
import type { Locale, LocaleCopy } from "../lib/i18n";

type FormStatus = "idle" | "submitting" | "success" | "error";

type HomePageProps = {
  formStatus: FormStatus;
  handleContactSubmit: (event: FormEvent<HTMLFormElement>) => void;
  locale: Locale;
  setSelectedCase: (caseItem: CaseModalContent) => void;
  t: LocaleCopy;
};

export function HomePage({ formStatus, handleContactSubmit, locale, setSelectedCase, t }: HomePageProps) {
  return (
    <main>
      <HeroSection t={t} />
      <MetricsStrip t={t} />
      <PainSection t={t} />
      <SolutionsSection locale={locale} t={t} />
      <CasesSection locale={locale} setSelectedCase={setSelectedCase} t={t} />
      <MethodSection t={t} />
      <ProofSection t={t} />
      <ContactSection formStatus={formStatus} handleContactSubmit={handleContactSubmit} t={t} />
    </main>
  );
}
