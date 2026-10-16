import { site } from "../config";

/**
 * Structured data. One Organization node per page that references a single
 * @id, plus a Service node per offer. No postal address is emitted because
 * none is published — an invented address would be worse than none.
 */

const countries = [
  { "@type": "Country", name: "Deutschland" },
  { "@type": "Country", name: "Österreich" },
  { "@type": "Country", name: "Schweiz" },
];

export const organization = (extra: Record<string, unknown> = {}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#org`,
  name: site.name,
  url: site.url,
  description: site.claim,
  areaServed: countries,
  knowsLanguage: ["de", "en"],
  sameAs: [...site.proof.map((p) => p.href), site.telegram],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      url: site.telegram,
      availableLanguage: ["de", "en"],
    },
  ],
  ...extra,
});

export const service = (input: { name: string; description: string; path: string; price?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: input.name,
  description: input.description,
  url: new URL(input.path, site.url).href,
  serviceType: input.name,
  provider: { "@id": `${site.url}/#org` },
  areaServed: countries,
  ...(input.price
    ? {
        offers: {
          "@type": "Offer",
          priceCurrency: "CHF",
          price: input.price,
          description: `${input.name}, einmalig in Franken. Euro-Preis auf der Preisseite.`,
        },
      }
    : {}),
});

export const faqPage = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbs = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: new URL(item.path, site.url).href,
  })),
});
