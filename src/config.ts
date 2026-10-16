/**
 * One source of truth for the business, so the footer, schema, llms.txt and
 * the price page can never disagree with each other.
 *
 * PRICES: derived from the DACH market research recorded in `market`. They are
 * the owner's own numbers, placed against that research rather than invented.
 * Change them here and every surface follows.
 */

export const site = {
  name: "RelayStack",
  url: "https://relaystack.github.io",
  /** The one action on the whole site. */
  telegram: "https://t.me/relaystack",
  telegramLabel: "@relaystack",

  headline: "Websites, die man findet",
  claim:
    "Astro-Websites und Sichtbarkeit für deutschsprachige Unternehmen. Gemessen, mit Datum und Quelle — nicht behauptet.",

  /** Deliberately no city, no canton, no region. */
  serviceArea: "Deutschland, Österreich und die Schweiz",
  languages: "Deutsch und Englisch",

  /** Real, verifiable artefacts. The only proof this site is allowed to use. */
  proof: [
    {
      name: "astro-seo-toolkit",
      href: "https://github.com/RelayStack/astro-seo-toolkit",
      note: "llms.txt, Sitemap, robots.txt, JSON-LD und IndexNow für Astro. Veröffentlicht als npm-Paket, 33 Tests, keine Abhängigkeiten.",
    },
    {
      name: "astro-local-business",
      href: "https://github.com/RelayStack/astro-local-business",
      note: "Vorlage für lokale Dienstleister: Leistungen und Orte als Inhalte, Schema, Sitemap und llms.txt beim Build.",
    },
    {
      name: "smmscout-data",
      href: "https://github.com/RelayStack/smmscout-data",
      note: "Offener Datensatz: 129 Anbieter mit gemessener Latenz und Risikowerten.",
    },
  ],

  /**
   * Market figures used to place the prices. Every line is attributable, and
   * the price page shows them next to the prices rather than hiding them.
   */
  market: [
    {
      label: "Website mit sieben Seiten",
      detail: "Freelancer im Schnitt CHF 2’100, Kleinagenturen CHF 6’800, Grossagenturen CHF 29’500",
      source: "Preisvergleichsstudie Zürich 2026, 31 ausgewertete Offerten",
    },
    {
      label: "Webdesign KMU Schweiz",
      detail: "üblich CHF 1’500 bis 7’000 einmalig, laufend CHF 40 bis 150 pro Monat",
      source: "Marktübersicht Schweizer KMU-Webdesign 2026",
    },
    {
      label: "Google-Unternehmensprofil",
      detail: "CHF 990 bis 5’000; lokales SEO-Paket um CHF 2’400",
      source: "Preisübersicht SEO Schweiz 2026",
    },
    {
      label: "Laufende SEO-Betreuung",
      detail: "Deutschland klein/lokal EUR 1’000 bis 2’000, Schweiz CHF 3’000 bis 7’000 pro Monat",
      source: "Branchenumfragen SEO-Kosten DACH 2026",
    },
    {
      label: "Stundensatz SEO",
      detail: "Freelancer EUR 70 bis 150, Agenturen EUR 90 bis 180, Schweiz CHF 150 bis 260",
      source: "Branchenumfragen SEO-Kosten DACH 2026",
    },
    {
      label: "Sichtbarkeit in KI-Antworten",
      detail: "Erstprüfung USD 500 bis 2’000 einmalig, Monitoring USD 500 bis 1’500 pro Monat",
      source: "US-Agenturpreise 2026 — der Markt ist jung, die Zahlen sind es auch",
    },
  ],
} as const;

export const prices = [
  {
    slug: "website",
    name: "Website",
    chf: "2’900",
    eur: "2’700",
    unit: "einmalig",
    summary: "Fünf bis acht Seiten, eine eigene Seite je Leistung.",
    includes: [
      "Aufbau mit Astro, statisch ausgeliefert",
      "Eine eigene Seite pro Leistung statt einer Sammelseite",
      "Kontaktweg direkt, ohne Formular-Zwischenstelle",
      "Strukturierte Daten und Sitemap beim Build",
      "Einweisung und Übergabe",
    ],
  },
  {
    slug: "lokale-sichtbarkeit",
    name: "Lokale Sichtbarkeit",
    chf: "1’900",
    eur: "1’800",
    unit: "einmalig",
    summary: "Google-Unternehmensprofil, Ortsseiten, Bewertungsweg.",
    includes: [
      "Unternehmensprofil vollständig aufgesetzt",
      "Name, Adresse, Telefon überall gleich — auch auf der Website",
      "Eine Seite je Ort, mit etwas, das dort wirklich gilt",
      "Ablauf für Bewertungen, ohne Anreize",
      "Übergabe als Prüfliste",
    ],
  },
  {
    slug: "ki-sichtbarkeit",
    name: "KI-Sichtbarkeit",
    chf: "1’400",
    eur: "1’300",
    unit: "einmalig",
    summary: "Gemessen, was Assistenten über Sie sagen — und warum.",
    includes: [
      "Ausgangsmessung über mehrere Assistenten, jeweils fünf Abfragen",
      "Auswertung, welche Seiten zitiert werden",
      "llms.txt und zitierfähige Antwortblöcke",
      "Bericht mit Datum, Zahl und Grenzen",
      "Was nicht wirkt, wird genauso benannt",
    ],
  },
  {
    slug: "betreuung",
    name: "Betreuung",
    chf: "590",
    eur: "540",
    unit: "pro Monat, sechs Monate",
    summary: "Monatlich: Inhalte, Messung, kleine Änderungen.",
    includes: [
      "Pflege der Leistungs- und Ortsseiten",
      "Monatliche Messung und kurzer Bericht",
      "Kleine Änderungen ohne Zusatzrechnung",
      "Antwort innerhalb eines Werktags",
    ],
  },
] as const;

export const bundle = {
  name: "Website und Lokale Sichtbarkeit zusammen",
  chf: "4’400",
  eur: "4’100",
  note: "400 Franken weniger als einzeln gebucht.",
};

export const absoluteUrl = (path: string) => new URL(path, site.url).href;
