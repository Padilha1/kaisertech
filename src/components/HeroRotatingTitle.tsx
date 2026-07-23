import { useEffect, useState } from "react";

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
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentTextIndex((index) => (index + 1) % copy.texts.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [copy.texts.length]);

  return (
    <h1 className="hero-rotating-title">
      <span>{copy.prefix}</span>
      <span className="hero-rotating-word" aria-live="polite">
        <span className="hero-rotating-word-value" key={copy.texts[currentTextIndex]}>
          {copy.texts[currentTextIndex]}
        </span>
      </span>
    </h1>
  );
}
