export const industries = {
  restaurants: {
    id: 'restaurants',
    icon: 'utensils',
    color: 'orange',
    headline: {
      en: 'More guests through Google',
      de: 'Mehr Gäste durch Google',
    },
    subheadline: {
      en: '74% of local searches lead to a visit within 24 hours. If you\'re not on page 1, your competitors get the reservation.',
      de: '74% der lokalen Suchen führen zu einem Besuch innerhalb von 24 Stunden. Wenn Sie nicht auf Seite 1 sind, bekommt die Konkurrenz die Reservierung.',
    },
    painPoints: [
      {
        en: 'Incomplete Google Business Profile',
        de: 'Unvollständiges Google Business Profil',
      },
      {
        en: 'Menu is invisible to Google (PDF only)',
        de: 'Speisekarte ist für Google unsichtbar (nur PDF)',
      },
      {
        en: 'Ignoring customer reviews',
        de: 'Kundenbewertungen werden ignoriert',
      },
    ],
    stats: {
      conversion: '74%',
      conversionLabel: { en: 'local searches → visit', de: 'lokale Suchen → Besuch' },
      revenue: '+340%',
      revenueLabel: { en: 'more reservations', de: 'mehr Reservierungen' },
    },
  },
  lawyers: {
    id: 'lawyers',
    icon: 'scale',
    color: 'blue',
    headline: {
      en: 'More clients through Google',
      de: 'Mehr Mandanten durch Google',
    },
    subheadline: {
      en: '67% of clients search online before asking friends. Page 1 or invisible.',
      de: '67% der Mandanten suchen online, bevor sie Freunde fragen. Seite 1 oder unsichtbar.',
    },
    painPoints: [
      {
        en: 'Competitors dominate featured snippets',
        de: 'Konkurrenz dominiert Featured Snippets',
      },
      {
        en: 'Google Ads cost CHF 15-45 per click',
        de: 'Google Ads kosten CHF 15-45 pro Klick',
      },
      {
        en: 'No localized content by canton',
        de: 'Keine lokalisierten Inhalte nach Kanton',
      },
    ],
    stats: {
      conversion: '67%',
      conversionLabel: { en: 'search before deciding', de: 'suchen vor Entscheidung' },
      revenue: '3x',
      revenueLabel: { en: 'more inquiries', de: 'mehr Anfragen' },
    },
  },
  trades: {
    id: 'trades',
    icon: 'wrench',
    color: 'yellow',
    headline: {
      en: 'More jobs through Google',
      de: 'Mehr Aufträge durch Google',
    },
    subheadline: {
      en: '78% of homeowners search online before hiring. 40% of tradesmen have no website.',
      de: '78% der Hausbesitzer suchen online vor der Beauftragung. 40% der Handwerker haben keine Website.',
    },
    painPoints: [
      {
        en: 'No website = invisible',
        de: 'Keine Website = unsichtbar',
      },
      {
        en: 'Emergency jobs go to first result',
        de: 'Notfall-Aufträge gehen an erstes Ergebnis',
      },
      {
        en: 'Only 8 reviews vs 50+ competitors',
        de: 'Nur 8 Bewertungen vs 50+ Konkurrenz',
      },
    ],
    stats: {
      conversion: '78%',
      conversionLabel: { en: 'search before hiring', de: 'suchen vor Beauftragung' },
      revenue: '3x',
      revenueLabel: { en: 'more jobs', de: 'mehr Aufträge' },
    },
  },
  ecommerce: {
    id: 'ecommerce',
    icon: 'shopping-cart',
    color: 'purple',
    headline: {
      en: 'More sales through organic search',
      de: 'Mehr Verkäufe durch organische Suche',
    },
    subheadline: {
      en: '60% of product searches start on Amazon. 40% start on Google. That\'s your battlefield.',
      de: '60% der Produktsuchen starten bei Amazon. 40% bei Google. Das ist Ihr Schlachtfeld.',
    },
    painPoints: [
      {
        en: 'Thin product descriptions (50 words)',
        de: 'Dünne Produktbeschreibungen (50 Wörter)',
      },
      {
        en: 'Duplicate content from manufacturer',
        de: 'Duplicate Content vom Hersteller',
      },
      {
        en: 'No product schema markup',
        de: 'Kein Product Schema Markup',
      },
    ],
    stats: {
      conversion: '35%',
      conversionLabel: { en: 'of revenue from SEO', de: 'des Umsatzes durch SEO' },
      revenue: '+65%',
      revenueLabel: { en: 'revenue increase', de: 'Umsatzsteigerung' },
    },
  },
  healthcare: {
    id: 'healthcare',
    icon: 'heart-pulse',
    color: 'green',
    headline: {
      en: 'More patients through Google',
      de: 'Mehr Patienten durch Google',
    },
    subheadline: {
      en: '82% of patients read reviews before choosing. What do they see when they search for you?',
      de: '82% der Patienten lesen Bewertungen vor der Wahl. Was sehen sie, wenn sie nach Ihnen suchen?',
    },
    painPoints: [
      {
        en: 'Patients Google symptoms first',
        de: 'Patienten googeln zuerst Symptome',
      },
      {
        en: 'No online appointment booking',
        de: 'Keine Online-Terminbuchung',
      },
      {
        en: 'Missing insurance information',
        de: 'Fehlende Versicherungs-Information',
      },
    ],
    stats: {
      conversion: '82%',
      conversionLabel: { en: 'read reviews first', de: 'lesen zuerst Bewertungen' },
      revenue: '5x',
      revenueLabel: { en: 'more inquiries', de: 'mehr Anfragen' },
    },
  },
} as const;

export type IndustryId = keyof typeof industries;

export function getIndustryData(id: IndustryId) {
  return industries[id];
}

export function getAllIndustries() {
  return Object.keys(industries) as IndustryId[];
}
