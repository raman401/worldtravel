export type Destination = {
  id: string;
  name: string;
  region: string;
  tagline: string;
  /** Typical daily budget in USD for a mid-range traveler */
  budgetPerDayUsd: { min: number; max: number };
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    id: "kyoto",
    name: "Kyoto",
    region: "Japan",
    tagline: "Temples, gardens, and quiet lanes.",
    budgetPerDayUsd: { min: 90, max: 180 },
    highlights: ["Arashiyama bamboo", "Fushimi Inari", "Tea houses"],
  },
  {
    id: "lisbon",
    name: "Lisbon",
    region: "Portugal",
    tagline: "Hills, trams, and Atlantic light.",
    budgetPerDayUsd: { min: 70, max: 140 },
    highlights: ["Alfama", "Pastéis de Belém", "Day trips to Sintra"],
  },
  {
    id: "cape-town",
    name: "Cape Town",
    region: "South Africa",
    tagline: "Mountain, ocean, and wine country nearby.",
    budgetPerDayUsd: { min: 60, max: 130 },
    highlights: ["Table Mountain", "V&A Waterfront", "Stellenbosch"],
  },
  {
    id: "reykjavik",
    name: "Reykjavík",
    region: "Iceland",
    tagline: "Nordic base for wild landscapes.",
    budgetPerDayUsd: { min: 150, max: 280 },
    highlights: ["Golden Circle", "Blue Lagoon", "Northern lights (seasonal)"],
  },
];
