/**
 * Visibility study harness.
 *
 * Measures, for a list of real business websites, the signals that decide
 * whether a search engine or an AI assistant can read and quote them. Produces
 * a JSON dataset and a Markdown summary. The published study is written from
 * the dataset, never by hand.
 *
 * WHAT THIS DELIBERATELY DOES NOT DO
 * - No AI mentions. That axis needs model API keys and a fixed prompt set, and
 *   it is not in this script. A study that claims it without measuring it is a
 *   fabrication.
 * - No Google Business Profile data. That needs a Places API key.
 * - Nothing that is not public: this fetches a homepage and a handful of
 *   well-known files. No personal data, no marketplaces, no scraping behind a
 *   login.
 *
 * KNOWN LIMITATION, STATE IT IN ANY PUBLISHED METHOD
 * Structured data is read from the server-rendered HTML. A site that injects
 * JSON-LD with JavaScript will be recorded as having none. That understates,
 * it never overstates — but a published study has to say so.
 *
 * MANNERS
 * Sequential, one request at a time, with a delay between hosts. Identifies
 * itself with a contact URL. Honours robots.txt for its own user agent.
 *
 *   node scripts/visibility-study.mjs domains.txt --out data/study-2026.json
 *
 * domains.txt is one domain per line: `example.ch` or `example.ch,CH,Handwerk`.
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const UA = "RelayStack-VisibilityStudy/1.0 (+https://relaystack.github.io/)";
const TIMEOUT = 15_000;
const DELAY_MS = 1_200;

const argv = process.argv.slice(2);
const listPath = argv.find((a) => !a.startsWith("--")) ?? "domains.txt";
const outIdx = argv.indexOf("--out");
const outPath = outIdx > -1 ? argv[outIdx + 1] : "data/study.json";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url) {
  try {
    const res = await fetch(url, {
      headers: { "user-agent": UA, accept: "text/html,application/xhtml+xml,text/plain,*/*" },
      redirect: "follow",
      signal: AbortSignal.timeout(TIMEOUT),
    });
    const body = res.ok ? await res.text() : "";
    return { ok: res.ok, status: res.status, url: res.url, body, bytes: body.length };
  } catch (error) {
    return { ok: false, status: 0, url, body: "", bytes: 0, error: String(error).slice(0, 80) };
  }
}

/** robots.txt, and whether it blocks AI crawlers generally. */
async function robots(origin) {
  const res = await get(`${origin}/robots.txt`);
  if (!res.ok) return { present: false, blocksAi: false };
  const text = res.body.toLowerCase();
  const blocksAi = /user-agent:\s*(gptbot|ccbot|perplexitybot|claudebot|anthropic-ai|google-extended)/.test(text);
  const blocksAll = /user-agent:\s*\*[^]*?disallow:\s*\/\s*(\n|$)/.test(text);
  return { present: true, blocksAi, blocksAll };
}

async function probe(entry) {
  const { domain, country, sector } = entry;
  const origin = `https://${domain}`;

  const home = await get(origin);
  const html = home.body;
  const found = {
    finalUrl: home.url,
    status: home.status,
    https: home.url.startsWith("https://"),
    bytes: home.bytes,
    title: (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim().slice(0, 120) || null,
    metaDescription: /<meta[^>]+name=["']description["'][^>]*>/i.test(html),
    viewport: /<meta[^>]+name=["']viewport["']/i.test(html),
    canonical: /<link[^>]+rel=["']canonical["']/i.test(html),
    lang: html.match(/<html[^>]+lang=["']([^"']+)/i)?.[1] ?? null,
    ogImage: /<meta[^>]+property=["']og:image["']/i.test(html),
    h1Count: (html.match(/<h1[\s>]/gi) ?? []).length,
    jsonLdTypes: [
      ...new Set(
        [...html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)]
          .flatMap((m) => [...m[1].matchAll(/"@type"\s*:\s*"([^"]+)"/g)].map((t) => t[1]))
          .filter((t) => t.length < 40),
      ),
    ].slice(0, 12),
  };

  found.hasLocalBusiness = found.jsonLdTypes.some((t) =>
    /LocalBusiness|Organization|ProfessionalService|Store|Restaurant|Dentist|AutoRepair/.test(t),
  );
  found.hasFaq = found.jsonLdTypes.includes("FAQPage");

  await sleep(DELAY_MS);
  const rb = await robots(origin);
  await sleep(DELAY_MS);
  const sitemap = await get(`${origin}/sitemap.xml`);
  const sitemapOk = sitemap.ok && /<urlset|<sitemapindex/i.test(sitemap.body);
  await sleep(DELAY_MS);
  const llms = await get(`${origin}/llms.txt`);
  const llmsOk = llms.ok && llms.body.trim().length > 0;

  return {
    domain,
    country: country ?? null,
    sector: sector ?? null,
    ...found,
    robots: rb,
    sitemap: sitemapOk,
    llmsTxt: llmsOk,
  };
}

const raw = await readFile(listPath, "utf8");
const entries = raw
  .split("\n")
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"))
  .map((l) => {
    const [domain, country, sector] = l.split(",").map((v) => v?.trim());
    return { domain: domain.replace(/^https?:\/\//, "").replace(/\/$/, ""), country, sector };
  });

if (entries.length === 0) {
  console.error(`No domains found in ${listPath}.`);
  process.exit(1);
}

console.log(`Probing ${entries.length} site(s), sequentially, ${DELAY_MS}ms apart.`);
const results = [];
for (const [i, entry] of entries.entries()) {
  const r = await probe(entry);
  results.push(r);
  console.log(
    `${String(i + 1).padStart(3)}/${entries.length}  ${entry.domain.padEnd(34)} ` +
      `${r.status || "ERR"}  schema=${r.jsonLdTypes.length}  faq=${r.hasFaq ? "y" : "n"}  ` +
      `sitemap=${r.sitemap ? "y" : "n"}  llms=${r.llmsTxt ? "y" : "n"}`,
  );
  await sleep(DELAY_MS);
}

const pct = (n) => `${Math.round((n / results.length) * 100)} %`;
const count = (fn) => results.filter(fn).length;

const summary = {
  generated: new Date().toISOString().slice(0, 10),
  sample: results.length,
  findings: {
    reachable: count((r) => r.status === 200),
    https: count((r) => r.https),
    mobileViewport: count((r) => r.viewport),
    metaDescription: count((r) => r.metaDescription),
    canonical: count((r) => r.canonical),
    titleOver60: count((r) => (r.title ?? "").length > 60),
    structuredDataAny: count((r) => r.jsonLdTypes.length > 0),
    localBusinessSchema: count((r) => r.hasLocalBusiness),
    faqSchema: count((r) => r.hasFaq),
    sitemap: count((r) => r.sitemap),
    llmsTxt: count((r) => r.llmsTxt),
    robotsBlocksAi: count((r) => r.robots.blocksAi),
    ogImage: count((r) => r.ogImage),
    multipleH1: count((r) => r.h1Count > 1),
  },
};

const lines = [
  "# Visibility study — dataset",
  "",
  `Generated ${summary.generated} · sample ${summary.sample} sites.`,
  "",
  "This is a **technical readiness** measurement only. It does not measure whether any of these",
  "businesses are named by an AI assistant — that needs model API keys and a fixed prompt set, and",
  "is not in this dataset. Do not describe these numbers as AI visibility.",
  "",
  "Structured data is read from server-rendered HTML. Sites that inject JSON-LD with JavaScript are",
  "recorded as having none, so this **understates** and never overstates.",
  "",
  "## Findings",
  "",
  ...Object.entries(summary.findings).map(([k, v]) => `- ${k}: ${v} (${pct(v)})`),
  "",
];

await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, JSON.stringify({ summary, results }, null, 2));
await writeFile(outPath.replace(/\.json$/, ".md"), lines.join("\n"));

console.log(`\nWrote ${outPath} and ${outPath.replace(/\.json$/, ".md")}`);
