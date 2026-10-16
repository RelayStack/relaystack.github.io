# Websites und SEO für Handwerk, Praxen und lokale Betriebe

**Sichtbar bei Google — und in KI-Antworten.** Für Unternehmen in Deutschland, Österreich
und der Schweiz. Festpreise, gemessene Werte, kein Baukasten.

**[→ Live ansehen](https://relaystack.github.io/)** · **[→ Auf Telegram fragen](https://t.me/relaystack)**

---

## Das Problem in einem Satz

Die meisten Betriebe haben eine Website, aber keine Anfragen. Nicht weil die Seite schlecht
aussieht, sondern weil Google und KI-Assistenten nicht auslesen können, was dort steht: welche
Leistung, welcher Ort, welche Öffnungszeiten, was es kostet.

Zwei Dinge entscheiden darüber, ob Sie gefunden werden. Beide sind messbar:

| | Was zählt | Woran es meistens scheitert |
| --- | --- | --- |
| **Google** | Sitemap, Indexierung, zitierfähige Inhalte, ein vollständiges Unternehmensprofil | eine Sammelseite für sechs Leistungen statt je einer Seite |
| **KI-Assistenten** | strukturierte Angaben, klare Antwortabsätze, `llms.txt` | nichts davon vorhanden, also wird die Konkurrenz genannt |

## Leistungen und Preise

Alle Preise als Festpreis. Euro-Preis zum Kurs 1 EUR = 0.93 CHF. Jede Zahl steht mit
Marktvergleich auf der [Preisseite](https://relaystack.github.io/preise/).

| Leistung | Preis | Worum es geht |
| --- | --- | --- |
| **Website** | **CHF 3’200** / EUR 3’450 | Fünf bis acht Seiten, eine eigene Seite je Leistung, statisch ausgeliefert. Keine Plugins, keine Wartungsrechnung. |
| **Lokale Sichtbarkeit** | **CHF 2’400** / EUR 2’600 | Google-Unternehmensprofil, Ortsseiten, ein Bewertungsweg ohne Anreize. |
| **KI-Sichtbarkeit** | **CHF 1’600** / EUR 1’700 | Gemessen, was Assistenten über Sie sagen — fünf Abfragen je Modell, mit Datum. |
| **Betreuung** | **CHF 890** / EUR 950 pro Monat | Inhalte pflegen, monatlich messen, kleine Änderungen inklusive. |
| **Website + Lokale Sichtbarkeit** | **CHF 5’100** / EUR 5’500 | Beides zusammen, 500 Franken weniger. |

Zur Einordnung: Freelancer verlangen für eine siebenseitige Website im Schnitt CHF 2’100,
Kleinagenturen CHF 6’800 ([Preisstudie Zürich 2026](https://relaystack.github.io/preise/)).

## Was ich veröffentliche

Ohne Kundenstimmen bleibt der Code die Referenz — und der ist nachprüfbar:

- **[astro-seo-toolkit](https://github.com/RelayStack/astro-seo-toolkit)** — `llms.txt`, Sitemap,
  `robots.txt`, JSON-LD und IndexNow für Astro. Auf npm, 33 Tests, keine Abhängigkeiten.
- **[astro-local-business](https://github.com/RelayStack/astro-local-business)** — Vorlage für
  lokale Dienstleister: Leistungen und Orte als Inhalte, Schema und Sitemap beim Build.
- **[smmscout-data](https://github.com/RelayStack/smmscout-data)** — offener Datensatz mit 129
  Anbietern, gemessener Latenz und Risikowerten.

Kundenstimmen, Kundennamen und Prozentwerte aus fremden Projekten veröffentliche ich nicht. Nicht
weil es keine gäbe, sondern weil ich dafür die schriftliche Einwilligung des Betriebs bräuchte.
Die geprüften Zahlen bekommen Sie im Gespräch.

## Was nicht wirkt

Das steht hier, weil es sonst niemand schreibt:

- **`llms.txt` bringt nichts bei Google.** Google liest die Datei nicht. Sie wirkt auf Assistenten.
  Wer sie Ihnen als Ranking-Hebel verkauft, verkauft Ihnen eine Datei.
- **Keine Garantie auf Nennung.** KI-Antworten sind nicht deterministisch. Ich kann die Grundlagen
  herstellen, aber nicht versprechen, dass ein Modell Sie morgen nennt.
- **Keine Zahl ohne Quelle.** Die einzigen Zahlen auf dieser Seite sind Marktdaten mit Herkunft.

## So läuft es ab

1. **Sie schreiben** — zwei Sätze: was Sie anbieten und wo. Über
   [Telegram](https://t.me/relaystack), kein Formular.
2. **Ich messe** — Ladezeit, strukturierte Daten, Unternehmensprofil, Nennung in KI-Antworten.
   Kostenlos, Ergebnis mit Datum.
3. **Wir entscheiden** — auf Basis der Messung, nicht auf Basis eines Verkaufsgesprächs. Wenn sich
   nichts lohnt, sage ich das.

## Diese Seite selbst

Gebaut mit Astro, statisch ausgeliefert, **0 KB JavaScript**, Schriftarten selbst gehostet, keine
Tracker und damit kein Zustimmungsfenster. Gemessen: 19 Seiten, 10.6 KB CSS, 368 KB gesamt —
weil ich das messe, was ich verkaufe.

---

<details>
<summary><strong>Für Entwickler — Aufbau, Deployment, Mitbauen</strong></summary>

Die Entwicklerdokumentation steht in **[DEVELOPING.md](DEVELOPING.md)**: Stack, lokale Einrichtung,
wo Geschäftsdaten und Preise liegen, wie eine Leistung oder ein Artikel angelegt wird, wie die
SEO-Dateien entstehen, wie deployed wird und welche Gestaltungs- und Inhaltsregeln das Projekt
zusammenhalten.

</details>

## Rechtliches

Impressum und Datenschutzerklärung: [relaystack.github.io/impressum](https://relaystack.github.io/impressum/) ·
[relaystack.github.io/datenschutz](https://relaystack.github.io/datenschutz/)

Dieses Repository enthält den Quellcode der geschäftlichen Website. Er ist nicht zur
Wiederverwendung freigegeben. Die oben verlinkten Werkzeuge stehen unter MIT-Lizenz.
