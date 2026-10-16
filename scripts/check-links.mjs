/**
 * Fails if any internal link in the built site points at a page that does not
 * exist. Three did — two articles linked to `/leistungen/lokale-seo/` and
 * `/leistungen/astro-website/`, neither of which is a real slug. On a site
 * whose whole pitch is "I measure what I sell", a 404 is the worst defect in
 * the build, and nothing was catching it.
 *
 *   node scripts/check-links.mjs [dist]
 */
import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const dist = process.argv[2] ?? "dist";

async function walk(dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else out.push(full);
  }
  return out;
}

const files = await walk(dist);
const htmlFiles = files.filter((f) => f.endsWith(".html"));
const all = new Set(files.map((f) => f.replace(dist, "")));

const exists = async (path) => {
  if (all.has(path)) return true;
  try {
    return (await stat(join(dist, path))).isFile();
  } catch {
    return false;
  }
};

const skip = /^(https?:|\/\/|mailto:|tel:|data:|#|javascript:)/i;
const broken = [];
let checked = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const page = relative(dist, file);
  for (const [, attr, url] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (skip.test(url)) continue;
    const path = url.split("#")[0].split("?")[0];
    if (!path) continue;
    checked++;

    const candidates = path.endsWith("/")
      ? [`${path}index.html`]
      : /\.[a-z0-9]{2,5}$/i.test(path)
        ? [path]
        : [`${path}/index.html`, `${path}.html`];

    if (!(await Promise.all(candidates.map(exists))).some(Boolean)) {
      broken.push({ page, attr, url });
    }
  }
}

if (broken.length > 0) {
  console.error(`\n${broken.length} broken internal reference(s) in ${htmlFiles.length} page(s):\n`);
  for (const b of broken) console.error(`  ${b.page}\n    ${b.attr}="${b.url}"`);
  console.error("");
  process.exit(1);
}

console.log(`Checked ${checked} internal references across ${htmlFiles.length} pages — none broken.`);
