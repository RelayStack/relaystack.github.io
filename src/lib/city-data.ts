export interface CityData {
  id: string;
  name: string;
  population: number;
  canton: string;
  localStats: {
    businesses: number;
    businessLabel: { en: string; de: string };
    competitionLevel: { en: string; de: string };
    avgSeoScore: string;
  };
  competitorInsight: { en: string; de: string };
  painPoints: { en: string; de: string }[];
  headline: { en: string; de: string };
  subheadline: { en: string; de: string };
  problemTitle: { en: string; de: string };
  ctaText: { en: string; de: string };
  schemaAddress: {
    street: string;
    postalCode: string;
    addressLocality: string;
    addressRegion: string;
  };
}

export const cities: Record<string, CityData> = {
  basel: {
    id: 'basel',
    name: 'Basel',
    population: 177000,
    canton: 'Basel-Stadt',
    localStats: {
      businesses: 18500,
      businessLabel: { en: 'registered businesses', de: 'registrierte Unternehmen' },
      competitionLevel: { en: 'High', de: 'Hoch' },
      avgSeoScore: '42/100',
    },
    competitorInsight: {
      en: 'Most Basel agencies use generic templates and ignore local German-Swiss search intent. They rank for broad terms but miss "Basel + service" long-tail keywords that convert.',
      de: 'Die meisten Basler Agenturen verwenden generische Templates und ignorieren die lokale Deutsch-Schweizer Suchintention. Sie ranken für allgemeine Begriffe, verpassen aber Long-Tail-Keywords wie "Basel + Dienstleistung", die konvertieren.',
    },
    painPoints: [
      { en: 'Pharma & biotech giants dominate ad auctions — small businesses get priced out', de: 'Pharma- und Biotech-Riesen dominieren die Auktionen — kleine Unternehmen werden verdrängt' },
      { en: 'Border traffic from Germany/France means multilingual SEO is ignored', de: 'Grenzverkehr aus Deutschland/Frankreich bedeutet, dass mehrsprachiges SEO ignoriert wird' },
      { en: 'Art Basel tourism floods search results, pushing local businesses down', de: 'Der Art-Basel-Tourismus überflutet die Suchergebnisse und drückt lokale Unternehmen nach unten' },
    ],
    headline: {
      en: 'SEO in Basel: More Customers Through Google',
      de: 'SEO in Basel: Mehr Kunden durch Google',
    },
    subheadline: {
      en: '18,500 businesses compete for attention in Basel. Most have terrible SEO. That is your advantage.',
      de: '18.500 Unternehmen konkurrieren in Basel um Aufmerksamkeit. Die meisten haben schlechtes SEO. Das ist Ihr Vorteil.',
    },
    problemTitle: {
      en: 'Why Basel businesses lose on Google',
      de: 'Warum Basler Unternehmen bei Google verlieren',
    },
    ctaText: {
      en: 'Get your free SEO audit for your Basel business.',
      de: 'Holen Sie sich Ihr kostenloses SEO-Audit für Ihr Basler Unternehmen.',
    },
    schemaAddress: {
      street: 'St. Alban-Vorstadt 20',
      postalCode: '4052',
      addressLocality: 'Basel',
      addressRegion: 'BS',
    },
  },
  zuerich: {
    id: 'zuerich',
    name: 'Zürich',
    population: 443000,
    canton: 'Zürich',
    localStats: {
      businesses: 52000,
      businessLabel: { en: 'registered businesses', de: 'registrierte Unternehmen' },
      competitionLevel: { en: 'Very High', de: 'Sehr hoch' },
      avgSeoScore: '38/100',
    },
    competitorInsight: {
      en: 'Zürich agencies charge CHF 300+ per hour but deliver cookie-cutter audits. They overload clients with jargon and underdeliver on rankings.',
      de: 'Zürcher Agenturen verlangen CHF 300+ pro Stunde, liefern aber Einheits-Audits. Sie überladen Kunden mit Fachjargon und enttäuschen bei den Rankings.',
    },
    painPoints: [
      { en: 'Banking & fintech SEO budgets crush local service businesses', de: 'Banking- und Fintech-SEO-Budgets zerstören lokale Dienstleister' },
      { en: 'ETH & University spin-offs create hyper-competitive tech niches', de: 'ETH- und Uni-Spin-offs schaffen hyperkompetitive Tech-Nischen' },
      { en: 'High rent forces businesses to rely on cheap web builders with zero SEO', de: 'Hohe Mieten zwingen Unternehmen zu günstigen Website-Baukästen ohne SEO' },
    ],
    headline: {
      en: 'SEO in Zürich: More Customers Through Google',
      de: 'SEO in Zürich: Mehr Kunden durch Google',
    },
    subheadline: {
      en: '52,000 businesses in Zürich. Only 12% invest in proper SEO. Be in that 12%.',
      de: '52.000 Unternehmen in Zürich. Nur 12% investieren in richtiges SEO. Gehören Sie zu diesen 12%.',
    },
    problemTitle: {
      en: 'Why Zürich businesses lose on Google',
      de: 'Warum Zürcher Unternehmen bei Google verlieren',
    },
    ctaText: {
      en: 'Get your free SEO audit for your Zürich business.',
      de: 'Holen Sie sich Ihr kostenloses SEO-Audit für Ihr Zürcher Unternehmen.',
    },
    schemaAddress: {
      street: 'Bahnhofstrasse 42',
      postalCode: '8001',
      addressLocality: 'Zürich',
      addressRegion: 'ZH',
    },
  },
  bern: {
    id: 'bern',
    name: 'Bern',
    population: 145000,
    canton: 'Bern',
    localStats: {
      businesses: 21000,
      businessLabel: { en: 'registered businesses', de: 'registrierte Unternehmen' },
      competitionLevel: { en: 'Medium-High', de: 'Mittel-Hoch' },
      avgSeoScore: '45/100',
    },
    competitorInsight: {
      en: 'Bern businesses rely on government proximity and word-of-mouth. Their websites are outdated, slow, and invisible to Google — especially in German.',
      de: 'Berner Unternehmen verlassen sich auf Nähe zur Regierung und Mundpropaganda. Ihre Websites sind veraltet, langsam und für Google unsichtbar — besonders auf Deutsch.',
    },
    painPoints: [
      { en: 'Government sector dominates search, pushing private businesses to page 2', de: 'Der Staatssektor dominiert die Suche und drängt private Unternehmen auf Seite 2' },
      { en: 'Tourism (Old City, bears) hijacks local business keywords', de: 'Der Tourismus (Altstadt, Bären) kapert lokale Geschäfts-Keywords' },
      { en: 'Bilingual Bern (German/French) websites are almost never optimized for both', de: 'Zweisprachige Berner Websites sind fast nie für beide Sprachen optimiert' },
    ],
    headline: {
      en: 'SEO in Bern: More Customers Through Google',
      de: 'SEO in Bern: Mehr Kunden durch Google',
    },
    subheadline: {
      en: '21,000 businesses in the capital. Most still treat their website like a digital brochure. Yours can be a customer magnet.',
      de: '21.000 Unternehmen in der Hauptstadt. Die meisten behandeln ihre Website wie eine digitale Broschüre. Ihre kann ein Kundenmagnet sein.',
    },
    problemTitle: {
      en: 'Why Bern businesses lose on Google',
      de: 'Warum Berner Unternehmen bei Google verlieren',
    },
    ctaText: {
      en: 'Get your free SEO audit for your Bern business.',
      de: 'Holen Sie sich Ihr kostenloses SEO-Audit für Ihr Berner Unternehmen.',
    },
    schemaAddress: {
      street: 'Spitalgasse 22',
      postalCode: '3011',
      addressLocality: 'Bern',
      addressRegion: 'BE',
    },
  },
  luzern: {
    id: 'luzern',
    name: 'Luzern',
    population: 83000,
    canton: 'Luzern',
    localStats: {
      businesses: 12000,
      businessLabel: { en: 'registered businesses', de: 'registrierte Unternehmen' },
      competitionLevel: { en: 'Medium', de: 'Mittel' },
      avgSeoScore: '48/100',
    },
    competitorInsight: {
      en: 'Luzern competitors focus on visuals (lake, mountains) but neglect technical SEO. Their sites look great but load in 4+ seconds and have no schema markup.',
      de: 'Luzern-Konkurrenten fokussieren sich auf Visuals (See, Berge), vernachlässigen aber technisches SEO. Ihre Sites sehen toll aus, laden aber 4+ Sekunden und haben kein Schema Markup.',
    },
    painPoints: [
      { en: 'Tourism-focused websites drown out local service providers', de: 'Tourismus-lastige Websites übertönen lokale Dienstleister' },
      { en: 'Small market means one dominant competitor can own page 1', de: 'Der kleine Markt bedeutet, dass ein dominanter Konkurrent Seite 1 beherrschen kann' },
      { en: 'Cross-canton commuters search in Zürich or Bern, not Luzern', de: 'Pendler aus anderen Kantonen suchen in Zürich oder Bern, nicht in Luzern' },
    ],
    headline: {
      en: 'SEO in Luzern: More Customers Through Google',
      de: 'SEO in Luzern: Mehr Kunden durch Google',
    },
    subheadline: {
      en: '12,000 businesses in one of Switzerland\'s most beautiful cities. Beauty alone does not rank on Google.',
      de: '12.000 Unternehmen in einer der schönsten Städte der Schweiz. Schönheit allein rankt nicht auf Google.',
    },
    problemTitle: {
      en: 'Why Luzern businesses lose on Google',
      de: 'Warum Luzerner Unternehmen bei Google verlieren',
    },
    ctaText: {
      en: 'Get your free SEO audit for your Luzern business.',
      de: 'Holen Sie sich Ihr kostenloses SEO-Audit für Ihr Luzerner Unternehmen.',
    },
    schemaAddress: {
      street: 'Pilatusstrasse 10',
      postalCode: '6003',
      addressLocality: 'Luzern',
      addressRegion: 'LU',
    },
  },
  'st-gallen': {
    id: 'st-gallen',
    name: 'St. Gallen',
    population: 77000,
    canton: 'St. Gallen',
    localStats: {
      businesses: 11000,
      businessLabel: { en: 'registered businesses', de: 'registrierte Unternehmen' },
      competitionLevel: { en: 'Medium', de: 'Mittel' },
      avgSeoScore: '44/100',
    },
    competitorInsight: {
      en: 'St. Gallen businesses often use the same local web agency. Result: identical websites, duplicate content, and no differentiation in Google\'s eyes.',
      de: 'St. Galler Unternehmen nutzen oft dieselbe lokale Webagentur. Ergebnis: identische Websites, Duplicate Content und keine Differenzierung in den Augen von Google.',
    },
    painPoints: [
      { en: 'Textile industry decline left many businesses without digital strategy', de: 'Der Niedergang der Textilindustrie hinterliess viele Unternehmen ohne Digitalstrategie' },
      { en: 'University students create cheap competitor sites that outrank established firms', de: 'Studenten erstellen günstige Konkurrenz-Sites, die etablierte Firmen outranken' },
      { en: 'Appenzell and Thurgau borders split the search market', de: 'Die Grenzen zu Appenzell und Thurgau teilen den Suchmarkt' },
    ],
    headline: {
      en: 'SEO in St. Gallen: More Customers Through Google',
      de: 'SEO in St. Gallen: Mehr Kunden durch Google',
    },
    subheadline: {
      en: '11,000 businesses in the east. The textile legacy taught resilience. Now it is time to dominate digital.',
      de: '11.000 Unternehmen im Osten. Das Textilerbe lehrte Widerstandsfähigkeit. Jetzt ist es Zeit, digital zu dominieren.',
    },
    problemTitle: {
      en: 'Why St. Gallen businesses lose on Google',
      de: 'Warum St. Galler Unternehmen bei Google verlieren',
    },
    ctaText: {
      en: 'Get your free SEO audit for your St. Gallen business.',
      de: 'Holen Sie sich Ihr kostenloses SEO-Audit für Ihr St. Galler Unternehmen.',
    },
    schemaAddress: {
      street: 'Marktgasse 5',
      postalCode: '9000',
      addressLocality: 'St. Gallen',
      addressRegion: 'SG',
    },
  },
  winterthur: {
    id: 'winterthur',
    name: 'Winterthur',
    population: 116000,
    canton: 'Zürich',
    localStats: {
      businesses: 16000,
      businessLabel: { en: 'registered businesses', de: 'registrierte Unternehmen' },
      competitionLevel: { en: 'Medium-High', de: 'Mittel-Hoch' },
      avgSeoScore: '41/100',
    },
    competitorInsight: {
      en: 'Winterthur businesses compete against Zürich agencies that poach their local clients. Most Winterthur companies have no local SEO strategy and lose to Zürich-based competitors.',
      de: 'Winterthurer Unternehmen konkurrieren mit Zürcher Agenturen, die ihre lokalen Kunden abwerben. Die meisten Winterthurer Firmen haben keine Local-SEO-Strategie und verlieren gegen Zürcher Konkurrenten.',
    },
    painPoints: [
      { en: 'Proximity to Zürich means local searches default to the bigger city', de: 'Die Nähe zu Zürich bedeutet, dass lokale Suchen standardmässig zur grösseren Stadt gehen' },
      { en: 'Industrial heritage means many businesses still rely on trade fairs, not Google', de: 'Das industrielle Erbe bedeutet, dass viele Unternehmen noch auf Messen statt auf Google setzen' },
      { en: 'Tech scene growth created sudden competition no one prepared for', de: 'Das Wachstum der Tech-Szene schuf plötzliche Konkurrenz, auf die niemand vorbereitet war' },
    ],
    headline: {
      en: 'SEO in Winterthur: More Customers Through Google',
      de: 'SEO in Winterthur: Mehr Kunden durch Google',
    },
    subheadline: {
      en: '16,000 businesses in Switzerland\'s sixth-largest city. Do not let Zürich steal your search traffic.',
      de: '16.000 Unternehmen in der sechstgrössten Stadt der Schweiz. Lassen Sie Zürich nicht Ihren Such-Traffic stehlen.',
    },
    problemTitle: {
      en: 'Why Winterthur businesses lose on Google',
      de: 'Warum Winterthurer Unternehmen bei Google verlieren',
    },
    ctaText: {
      en: 'Get your free SEO audit for your Winterthur business.',
      de: 'Holen Sie sich Ihr kostenloses SEO-Audit für Ihr Winterthurer Unternehmen.',
    },
    schemaAddress: {
      street: 'Marktgasse 16',
      postalCode: '8400',
      addressLocality: 'Winterthur',
      addressRegion: 'ZH',
    },
  },
  lausanne: {
    id: 'lausanne',
    name: 'Lausanne',
    population: 142000,
    canton: 'Vaud',
    localStats: {
      businesses: 19000,
      businessLabel: { en: 'registered businesses', de: 'registrierte Unternehmen' },
      competitionLevel: { en: 'High', de: 'Hoch' },
      avgSeoScore: '40/100',
    },
    competitorInsight: {
      en: 'Lausanne agencies optimize for French only, missing the 30% German-speaking business market. They also ignore EPFL-related tech startup keywords.',
      de: 'Lausanner Agenturen optimieren nur für Französisch und verpassen den 30% deutschsprachigen Geschäftsmarkt. Sie ignorieren auch EPFL-bezogene Tech-Startup-Keywords.',
    },
    painPoints: [
      { en: 'French-only SEO misses the German-speaking Lake Geneva market', de: 'Französisch-only SEO verpasst den deutschsprachigen Genfersee-Markt' },
      { en: 'Olympic headquarters tourism overshadows local business results', de: 'Der Tourismus rund um das Olympische Komitee überschattet lokale Geschäftsergebnisse' },
      { en: 'EPFL startups with VC funding outspend traditional local businesses on ads', de: 'EPFL-Startups mit VC-Finanzierung überbieten traditionelle lokale Unternehmen bei Werbung' },
    ],
    headline: {
      en: 'SEO in Lausanne: More Customers Through Google',
      de: 'SEO in Lausanne: Mehr Kunden durch Google',
    },
    subheadline: {
      en: '19,000 businesses in the Olympic Capital. Compete in both French and German search — or lose half your market.',
      de: '19.000 Unternehmen in der Olympischen Hauptstadt. Konkurrieren Sie in der französischen und deutschen Suche — oder verlieren Sie die Hälfte Ihres Marktes.',
    },
    problemTitle: {
      en: 'Why Lausanne businesses lose on Google',
      de: 'Warum Lausanner Unternehmen bei Google verlieren',
    },
    ctaText: {
      en: 'Get your free SEO audit for your Lausanne business.',
      de: 'Holen Sie sich Ihr kostenloses SEO-Audit für Ihr Lausanner Unternehmen.',
    },
    schemaAddress: {
      street: 'Rue de Bourg 8',
      postalCode: '1003',
      addressLocality: 'Lausanne',
      addressRegion: 'VD',
    },
  },
  genf: {
    id: 'genf',
    name: 'Genf',
    population: 203000,
    canton: 'Genève',
    localStats: {
      businesses: 28000,
      businessLabel: { en: 'registered businesses', de: 'registrierte Unternehmen' },
      competitionLevel: { en: 'Very High', de: 'Sehr hoch' },
      avgSeoScore: '36/100',
    },
    competitorInsight: {
      en: 'Genève competitors target international NGOs and banks with English SEO but completely neglect French local search. Their sites are bloated, slow, and fail Core Web Vitals.',
      de: 'Genfer Konkurrenten zielen mit englischem SEO auf internationale NGOs und Banken ab, vernachlässigen aber komplett die lokale französische Suche. Ihre Sites sind aufgebläht, langsam und scheitern bei den Core Web Vitals.',
    },
    painPoints: [
      { en: 'UN & NGO presence inflates keyword competition beyond local budgets', de: 'UN- und NGO-Präsenz treibt die Keyword-Konkurrenz über lokale Budgets hinaus' },
      { en: 'Cross-border workers search in France, not Genève — local SEO is ignored', de: 'Grenzgänger suchen in Frankreich, nicht in Genf — Local SEO wird ignoriert' },
      { en: 'Luxury sector spends on brand, not search — opening gaps for smart players', de: 'Der Luxussektor investiert in Marke, nicht in Suche — das eröffnet Lücken für kluge Spieler' },
    ],
    headline: {
      en: 'SEO in Genf: More Customers Through Google',
      de: 'SEO in Genf: Mehr Kunden durch Google',
    },
    subheadline: {
      en: '28,000 businesses in Switzerland\'s most international city. Stand out where others blend in.',
      de: '28.000 Unternehmen in der internationalsten Stadt der Schweiz. Heben Sie sich ab, wo andere untergehen.',
    },
    problemTitle: {
      en: 'Why Genf businesses lose on Google',
      de: 'Warum Genfer Unternehmen bei Google verlieren',
    },
    ctaText: {
      en: 'Get your free SEO audit for your Genf business.',
      de: 'Holen Sie sich Ihr kostenloses SEO-Audit für Ihr Genfer Unternehmen.',
    },
    schemaAddress: {
      street: 'Rue du Rhône 42',
      postalCode: '1204',
      addressLocality: 'Genève',
      addressRegion: 'GE',
    },
  },
} as const;

export type CityId = keyof typeof cities;

export function getCityData(id: CityId) {
  return cities[id];
}

export function getAllCities() {
  return Object.keys(cities) as CityId[];
}
