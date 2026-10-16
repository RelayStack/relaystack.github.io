import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/** One entry per offer. Each becomes /leistungen/<id>/. */
const leistungen = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/leistungen" }),
  schema: z.object({
    title: z.string(),
    /** Becomes the meta description and the llms.txt line. */
    description: z.string().min(50).max(220),
    summary: z.string(),
    order: z.number().default(99),
    includes: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

/** Owner-language articles. Frontmatter may carry extra authoring keys. */
const wissen = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/wissen" }),
  schema: z.looseObject({
    title: z.string(),
    description: z.string().min(50).max(260),
    order: z.number().default(99),
  }),
});

export const collections = { leistungen, wissen };
