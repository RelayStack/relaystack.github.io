# Developing this site

Developer documentation for the RelayStack site. The sales copy lives in
[README.md](README.md) — this file covers how the thing is built, deployed and kept consistent.

## Stack

- **Astro 7**, static output. One runtime dependency; two dev dependencies.
- **Zero client-side JavaScript.** The numbers below are from the built output, not an aspiration.
- **Self-hosted variable fonts** (Archivo, Archivo Narrow). No `fonts.googleapis.com`, so there is
  no third-party request and therefore no cookie banner.
- Native endpoints for `sitemap.xml`, `robots.txt` and `llms.txt` — no `@astrojs/sitemap`, so the
  URL list is explicit and reviewable.

```
19 pages built   0 JS files   10.6 KB stylesheet   368 KB total
astro check      0 errors, 0 warnings, 0 hints
```

## Running it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview    # serve the built output
npm run check      # astro check: types, content schemas, a11y hints
```

## Editing the business

**`src/config.ts` is the one file that matters.** Business name, the Telegram contact, the service
area, the published prices, and the market research the prices were placed against. The footer, the
schema, the price page and `llms.txt` all read from it, so they cannot contradict each other.

**One exception:** the price table in `README.md` is hand-written Markdown, not generated. If you
change a price, update `src/config.ts` *and* the README table — nothing will fail the build if you
forget, and the two will quietly disagree.

Prices are the owner's own numbers, sitting against recorded market figures rather than invented
ones. The euro price is converted at a stated rate — if you change it, change the rate note too.

## Adding a service

Drop a Markdown file in `src/content/leistungen/`. The filename becomes the URL.

```md
---
seoTitle: "Website erstellen lassen – Festpreis, wartungsfrei"   # <title>
h1: "Website erstellen lassen"                                    # on-page heading
title: Website                                                    # short name for nav and lists
description: 50–220 characters. Becomes the meta description and the llms.txt line.
summary: One sentence for listings.
order: 1
includes:
  - "A concrete, checkable inclusion"
faqs:
  - q: A question a customer actually asks
    a: A short, self-contained answer.
---

Body copy. The FAQ frontmatter is emitted as FAQPage schema **and** rendered as a
`<details>` block from the same source, so the two can never disagree.
```

Then add the matching entry to `prices` in `src/config.ts`, and add the route to
`src/pages/sitemap.xml.ts` (the collection pages are picked up automatically; the static list is not).

## Adding an article

Drop a Markdown file in `src/content/wissen/`. Same pattern, no `includes`. Extra frontmatter keys
are allowed and ignored. The `h1` is rendered by the layout, so start the body with the answer — the
first paragraph is the part assistants quote.

## How the SEO files are generated

All three read the same content collections the pages do:

| File | Source |
| --- | --- |
| `sitemap.xml` | static route list + both collections, with `lastmod` |
| `robots.txt` | AI crawlers allowed on purpose — blocking them removes you from AI answers |
| `llms.txt` | services, prices, articles and contact details |

`/impressum/` is excluded from the sitemap and set to `noindex` until its mandatory details are
filled in. Nothing else is.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds, verifies that `sitemap.xml`, `robots.txt`
and `llms.txt` exist and are non-empty, and deploys to GitHub Pages. A build that ships without
them fails rather than publishing.

One-time setup, already done for this repo: **Settings → Pages → Source = GitHub Actions**. It must
not be left on "Deploy from a branch" — that mode serves files straight from the branch without
running a build, which is why this repo's Pages previously sat in an errored state with a 404.

## The share card

`public/og-card.png` is committed, but it is generated — `/og-card/` is a real page rendered by the
site's own stylesheet and typefaces, then captured at exactly 1200×630. Regenerate it after any
change to the headline or the palette:

```bash
npm run preview            # in one terminal
npm i --no-save puppeteer  # in another
node scripts/og-card.mjs
```

Puppeteer is deliberately not a dependency: the deploy runs `npm ci` and should not download a
browser.

## Design rules

The site is built in one world — the embossed label tape of a German workshop — and these rules are
what hold it together. Breaking one is a decision, not an edit.

- **The tape strip is the only container.** Headings, section labels and actions are tape. There are
  no cards, no pills and no rounded panels anywhere.
- **One orange strip per screen, and it is always the action.** The accent is functional.
- **Two faces, both self-hosted.** Tape and display type is Archivo Narrow; text is Archivo.
- **Depth is the tape's own lift and emboss.** Nothing else casts a shadow.
- **No JavaScript.** Interaction is `<details>`, `:target` and scroll-driven CSS, all of which
  degrade to something that still works.

## Content rules

These are correctness rules, not preferences. The site's credibility rests on them.

- **No location is published.** No city, no canton, no region. The business is explicitly remote.
- **No invented proof.** No testimonials, no client names, no percentages, no guarantees, no
  years-of-experience claims. Client work is described by sector only.
- **Illustrative values are labelled as such.** Any example measurement on the site carries a visible
  note saying it is not real client data.
- **Numbers cite their source.** Market figures come with an attribution or they do not ship.
- **The Impressum must be completed before commercial use.** A DACH Impressum requires a name and an
  address; the page is a marked draft until those exist.

## Structure

```
src/
  config.ts              business facts, prices, market research  ← edit this first
  content.config.ts      collection schemas
  content/
    leistungen/          one Markdown file per service
    wissen/              articles
  lib/schema.ts          Organization, Service, FAQPage, BreadcrumbList
  components/            Footer, JsonLd, IconTelegram, Mechanism
  layouts/Base.astro     head, meta, nav, canonical, hreflang
  pages/                 routes; sitemap.xml.ts, robots.txt.ts, llms.txt.ts, og-card.astro
  styles/                fonts.css (self-hosted faces), global.css (the design system)
public/
  fonts/                 variable woff2
  og-card.png            generated; see above
scripts/og-card.mjs      regenerates it
```
