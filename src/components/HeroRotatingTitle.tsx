import { RotatingText } from "./ui/RotatingText";

type HeroRotatingTitleProps = {
  lang: "pt-BR" | "en" | "de-DE";
};

const heroRotatingCopy: Record<
  HeroRotatingTitleProps["lang"],
  {
    prefix: string;
    texts: string[];
  }
> = {
  "pt-BR": {
    prefix: "Tiramos sua operação",
    texts: [
      "do improviso",
      "da planilha",
      "do retrabalho",
      "da dependência manual",
      "dos gargalos invisíveis",
    ],
  },
  en: {
    prefix: "We move your operation beyond",
    texts: [
      "improvisation",
      "spreadsheets",
      "rework",
      "manual dependency",
      "invisible bottlenecks",
    ],
  },
  "de-DE": {
    prefix: "Wir bringen Ihre Operation weg von",
    texts: [
      "Improvisation",
      "Tabellen",
      "Nacharbeit",
      "manueller Abhängigkeit",
      "unsichtbaren Engpässen",
    ],
  },
};

export function HeroRotatingTitle({ lang }: HeroRotatingTitleProps) {
  const copy = heroRotatingCopy[lang];

  return (
    <h1 className="hero-rotating-title">
      <span>{copy.prefix}</span>
      <RotatingText
        texts={copy.texts}
        mainClassName="hero-rotating-word"
        splitBy="words"
        staggerFrom="last"
        initial={{ y: "105%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-110%", opacity: 0 }}
        staggerDuration={0.035}
        splitLevelClassName="hero-rotating-word-split"
        transition={{ type: "spring", damping: 32, stiffness: 420 }}
        rotationInterval={2600}
      />
    </h1>
  );
}
