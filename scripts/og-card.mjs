/**
 * Regenerates public/og-card.png — the 1200x630 social share card.
 *
 * The card is a real page (/og-card/) rendered by the site's own stylesheet and
 * self-hosted typefaces, so the image can never drift from the brand. This
 * script only captures it at the published size.
 *
 * Puppeteer is deliberately NOT a dependency: the deploy workflow runs `npm ci`
 * and should not download a browser. Install it ad hoc when you need the card:
 *
 *   npm run preview            # in one terminal
 *   npm i --no-save puppeteer  # in another
 *   node scripts/og-card.mjs
 */
import puppeteer from "puppeteer";

const base = process.argv[2] ?? "http://localhost:4321";
const out = "public/og-card.png";

let browser;
try {
  browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
} catch (error) {
  console.error(
    "Could not start a browser. If it is missing:\n" +
      "  npx puppeteer browsers install chrome\n\n" +
      String(error),
  );
  process.exit(1);
}

const page = await browser.newPage();
try {
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.goto(`${base}/og-card/`, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out });

  const { width, height } = await page.evaluate(() => ({
    width: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight,
  }));
  if (width !== 1200 || height !== 630) {
    console.error(`Wrote ${out}, but the page measured ${width}x${height} instead of 1200x630.`);
    process.exitCode = 1;
  } else {
    console.log(`Wrote ${out} (1200x630).`);
  }
} catch (error) {
  console.error(`Could not reach ${base}/og-card/ — run \`npm run preview\` first.\n`, String(error));
  process.exitCode = 1;
} finally {
  await browser.close();
}
