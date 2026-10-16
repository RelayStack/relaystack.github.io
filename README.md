# Websites und SEO für Handwerk, Praxen und lokale Betriebe

**Sichtbar bei Google — und in KI-Antworten.** Für Betriebe in Deutschland, Österreich und der
Schweiz. Festpreise, gemessene Werte, kein Baukasten.

**[→ Live ansehen](https://relaystack.github.io/)** · **[→ Auf Telegram fragen](https://t.me/relaystack)**

---

## Für wen

Handwerk, Praxen, Studios und lokale Dienstleister — Betriebe, die von Anfragen aus der Umgebung
leben und deren Website bisher wenig bringt. Keine Onlineshops, keine Konzerne, keine Startups.

## Das Problem in einem Satz

Die meisten Betriebe haben eine Website, aber keine Anfragen. Nicht weil sie schlecht aussieht,
sondern weil Google und KI-Assistenten nicht auslesen können, was dort steht: welche Leistung,
welcher Ort, welche Öffnungszeiten, was es kostet.

Zwei Dinge entscheiden, ob Sie gefunden werden — beide sind messbar:

| | Was zählt | Woran es meistens scheitert |
| --- | --- | --- |
| **Google** | Sitemap, Indexierung, zitierfähige Inhalte, ein vollständiges Unternehmensprofil | eine Sammelseite für sechs Leistungen statt je einer Seite |
| **KI-Assistenten** | strukturierte Angaben, klare Antwortabsätze, `llms.txt` | nichts davon vorhanden — also wird die Konkurrenz genannt |

## Leistungen und Preise

Alle Preise als Festpreis. Jede Zahl steht mit Marktvergleich auf der
[Preisseite](https://relaystack.github.io/preise/).

<!-- prices:start -->
Alle Preise: Franken und Euro, umgerechnet zum Kurs 1 EUR = 0.93 CHF, gerundet auf 50. Massgeblich ist der Franken-Betrag.

| Leistung | Preis | Worum es geht |
| --- | --- | --- |
| **[Website](https://relaystack.github.io/leistungen/website/)** | **CHF 3’200** / EUR 3’450 | Fünf bis acht Seiten, eine eigene Seite je Leistung. *(einmalig)* |
| **[Lokale Sichtbarkeit](https://relaystack.github.io/leistungen/lokale-sichtbarkeit/)** | **CHF 2’400** / EUR 2’600 | Google-Unternehmensprofil, Ortsseiten, Bewertungsweg. *(einmalig)* |
| **[KI-Sichtbarkeit](https://relaystack.github.io/leistungen/ki-sichtbarkeit/)** | **CHF 1’600** / EUR 1’700 | Gemessen, was Assistenten über Sie sagen — und warum. *(einmalig)* |
| **[Betreuung](https://relaystack.github.io/leistungen/betreuung/)** | **CHF 890** / EUR 950 | Monatlich: Inhalte, Messung, kleine Änderungen. *(pro Monat, sechs Monate)* |
| **Website und Lokale Sichtbarkeit zusammen** | **CHF 5’100** / EUR 5’500 | 500 Franken weniger als einzeln gebucht. *(zusammen)* |
<!-- prices:end -->

Zur Einordnung: Für eine siebenseitige Website verlangen Freelancer im Schnitt CHF 2’100 und
Kleinagenturen CHF 6’800 — erhoben in einer Zürcher Preisstudie 2026 mit 31 ausgewerteten Offerten.
Deutsche SEO-Betreuung startet bei rund EUR 750 im Monat.

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

## In drei Schritten

1. **Sie schreiben** — zwei Sätze: was Sie anbieten und wo. Über
   [Telegram](https://t.me/relaystack), kein Formular, kein Portal.
2. **Ich messe** — Ladezeit, strukturierte Daten, Unternehmensprofil, Nennung in KI-Antworten.
   Kostenlos, Ergebnis mit Datum.
3. **Wir entscheiden** — auf Basis der Messung, nicht auf Basis eines Verkaufsgesprächs. Wenn sich
   nichts lohnt, sage ich das.

## Diese Website selbst

Gebaut mit Astro, statisch ausgeliefert, **0 KB JavaScript**, Schriftarten selbst gehostet, keine
Tracker und damit kein Zustimmungsfenster — weil ich das messe, was ich verkaufe. Gemessen mit Lighthouse: **100/100/100/100** auf dem Handy wie auf dem Desktop, LCP 1.4 s,
Layout-Shift 0 — bei 22 Seiten und 11 KB CSS.

## Für Entwickler

Der Quellcode dieser Website liegt hier, und die Dokumentation dazu steht in
**[DEVELOPING.md](DEVELOPING.md)**: Stack, lokales Setup, wo Geschäftsdaten und Preise liegen, wie
eine Leistung oder ein Artikel entsteht, wie die SEO-Dateien generiert werden, wie deployed wird —
und die Gestaltungs- und Inhaltsregeln, die das Projekt zusammenhalten.

Die oben verlinkten Werkzeuge stehen unter MIT-Lizenz und sind zur Wiederverwendung gedacht.

## Rechtliches

[Impressum](https://relaystack.github.io/impressum/) ·
[Datenschutzerklärung](https://relaystack.github.io/datenschutz/)

Der Quellcode dieser geschäftlichen Website ist nicht zur Wiederverwendung freigegeben.
