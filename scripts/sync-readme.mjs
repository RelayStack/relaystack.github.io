/**
 * Splices the price table into README.md from the single source of truth.
 *
 * `src/config.ts` is where prices live. The README is Markdown, so it cannot
 * read from it — this keeps the two from quietly disagreeing, which is exactly
 * what happened before this existed.
 *
 *   npm run sync:readme            # write
 *   npm run sync:readme -- --check # fail if out of date (used by CI)
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { prices, bundle, fx, site } from "../src/config.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const readmePath = join(root, "README.md");
const START = "<!-- prices:start -->";
const END = "<!-- prices:end -->";

const es = (v) => v.replace(/'/g, "’");

const row = (name, chf, eur, unit, summary, href) => {
  const label = href ? `**[${name}](${href})**` : `**${name}**`;
  return `| ${label} | **CHF ${es(chf)}** / EUR ${es(eur)} | ${summary} *(${unit})* |`;
};

const block = [
  START,
  `Alle Preise: Franken und Euro, umgerechnet zum Kurs ${fx.rate}, ${fx.note}. Massgeblich ist der Franken-Betrag.`,
  "",
  "| Leistung | Preis | Worum es geht |",
  "| --- | --- | --- |",
  ...prices.map((p) =>
    row(p.name, p.chf, p.eur, p.unit, p.summary, `${site.url}/leistungen/${p.slug}/`),
  ),
  row(bundle.name, bundle.chf, bundle.eur, "zusammen", bundle.note, null),
  END,
].join("\n");

const readme = await readFile(readmePath, "utf8");
const start = readme.indexOf(START);
const end = readme.indexOf(END);
if (start === -1 || end === -1) {
  console.error(`README.md is missing the ${START} / ${END} markers.`);
  process.exit(1);
}

const next = readme.slice(0, start) + block + readme.slice(end + END.length);
const check = process.argv.includes("--check");

if (next === readme) {
  console.log("README price table is in sync with src/config.ts.");
} else if (check) {
  console.error(
    "README price table is out of date.\nRun: npm run sync:readme",
  );
  process.exit(1);
} else {
  await writeFile(readmePath, next);
  console.log("README price table updated from src/config.ts.");
}
