import type { APIRoute } from "astro";
import { absoluteUrl } from "../config";

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
    "",
    "# KI-Crawler sind absichtlich erlaubt: Diese Seite will zitiert werden.",
    "# Wer sie sperrt, verschwindet auch aus den KI-Antworten.",
  ].join("\n");

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};
