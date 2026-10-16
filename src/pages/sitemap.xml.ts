import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { absoluteUrl } from "../config";

/**
 * Native endpoint rather than @astrojs/sitemap, so the site has no extra
 * dependency and the URL list is explicit. Add new static routes here.
 */
export const GET: APIRoute = async () => {
  const [leistungen, wissen] = await Promise.all([
    getCollection("leistungen"),
    getCollection("wissen"),
  ]);

  const paths = [
    "/",
    "/en/",
    "/leistungen/",
    "/preise/",
    "/wissen/",
    "/kontakt/",
    ...leistungen.map((e) => `/leistungen/${e.id}/`),
    ...wissen.map((e) => `/wissen/${e.id}/`),
    // /impressum/ and /datenschutz/ are intentionally excluded: the Impressum is
    // a marked draft and the Datenschutz page is noindex until the details land.
  ];

  const urls = paths
    .map((p) => `  <url><loc>${absoluteUrl(p)}</loc></url>`)
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
};
