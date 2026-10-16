// @ts-check
import { defineConfig } from "astro/config";

// The site is served from GitHub Pages for now. Every canonical URL, sitemap
// entry and schema `url` is derived from this, so it must be correct.
//
// No @astrojs/sitemap: sitemap.xml, robots.txt and llms.txt are native
// endpoints built from the same content collections as the pages, so they
// cannot drift from what the site actually serves.
export default defineConfig({
  site: "https://relaystack.github.io",
  trailingSlash: "always",
  build: { inlineStylesheets: "auto" },
});
