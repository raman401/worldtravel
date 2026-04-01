export type Destination = {
  id: string;
  name: string;
  region: string;
  tagline: string;
  image: string;
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
    image: "/destinations/kyoto.svg",
    budgetPerDayUsd: { min: 90, max: 180 },
    highlights: ["Arashiyama bamboo", "Fushimi Inari", "Tea houses"],
  },
  {
    id: "lisbon",
    name: "Lisbon",
    region: "Portugal",
    tagline: "Hills, trams, and Atlantic light.",
    image: "/destinations/lisbon.svg",
    budgetPerDayUsd: { min: 70, max: 140 },
    highlights: ["Alfama", "Pastéis de Belém", "Day trips to Sintra"],
  },
  {
    id: "cape-town",
    name: "Cape Town",
    region: "South Africa",
    tagline: "Mountain, ocean, and wine country nearby.",
    image: "/destinations/cape-town.svg",
    budgetPerDayUsd: { min: 60, max: 130 },
    highlights: ["Table Mountain", "V&A Waterfront", "Stellenbosch"],
  },
  {
    id: "reykjavik",
    name: "Reykjavík",
    region: "Iceland",
    tagline: "Nordic base for wild landscapes.",
    image: "/destinations/reykjavik.svg",
    budgetPerDayUsd: { min: 150, max: 280 },
    highlights: ["Golden Circle", "Blue Lagoon", "Northern lights (seasonal)"],
  },
];
