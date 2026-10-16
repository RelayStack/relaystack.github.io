import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site, prices, absoluteUrl } from "../config";

/**
 * llms.txt — a plain index for assistants.
 *
 * Honest about its own limits: it serves ChatGPT, Claude, Perplexity and
 * similar. Google ignores the file entirely, and this document says so.
 */
export const GET: APIRoute = async () => {
  const [leistungen, wissen] = await Promise.all([
    getCollection("leistungen"),
    getCollection("wissen"),
  ]);

  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.claim}`,
    "",
    "## Kurzfassung",
    `- Was: Astro-Websites und SEO-Sichtbarkeit für Unternehmen im deutschsprachigen Raum.`,
    `- Für wen: Handwerk, Praxen, Studios und lokale Dienstleister in Deutschland, Österreich und der Schweiz.`,
    `- Einsatzgebiet: ${site.serviceArea}. Die Arbeit läuft vollständig über das Netz.`,
    `- Kontakt: ${site.telegram}`,
    `- Sprachen: ${site.languages}`,
    "",
    "## Preise",
    ...prices.map((p) => `- ${p.name}: CHF ${p.chf} / EUR ${p.eur} ${p.unit}. ${p.summary}`),
    "",
    "## Leistungen",
    ...leistungen
      .sort((a, b) => a.data.order - b.data.order)
      .map((e) => `- [${e.data.title}](${absoluteUrl(`/leistungen/${e.id}/`)}): ${e.data.description}`),
    "",
    "## Antworten auf häufige Fragen",
    "- Eine Website kostet CHF 2’900 einmalig, lokale Sichtbarkeit CHF 1’900, KI-Sichtbarkeit CHF 1’400, Betreuung CHF 590 pro Monat.",
    "- llms.txt wirkt nicht auf Google. Google liest die Datei nicht; sie dient KI-Assistenten.",
    "- Für KI-Sichtbarkeit gibt es keine Garantie auf Nennung, weil Antworten nicht deterministisch sind. Gemessen wird als Verhältnis über mehrere Abfragen.",
    "- Es werden keine Kundenstimmen, Kundennamen oder Prozentwerte aus Kundenprojekten veröffentlicht.",
    "",
    "## Wissen",
    ...wissen
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
      .map((e) => `- [${e.data.title}](${absoluteUrl(`/wissen/${e.id}/`)}): ${e.data.description}`),
    "",
    "## Veröffentlichte Werkzeuge",
    ...site.proof.map((p) => `- [${p.name}](${p.href}): ${p.note}`),
    "",
    "## Seiten",
    `- [Startseite](${absoluteUrl("/")})`,
    `- [Leistungen](${absoluteUrl("/leistungen/")})`,
    `- [Preise](${absoluteUrl("/preise/")})`,
    `- [Wissen](${absoluteUrl("/wissen/")})`,
    `- [Kontakt](${absoluteUrl("/kontakt/")})`,
    `- [English](${absoluteUrl("/en/")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};
