export type Package = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: "essential",
    name: "Essential Drip",
    price: "$129",
    cadence: "per session",
    blurb: "A single tailored hydration session — perfect to try us out.",
    features: [
      "One IV hydration session",
      "Standard vitamin blend",
      "Licensed clinician visit",
      "Flexible scheduling",
    ],
  },
  {
    id: "revive",
    name: "Revive Membership",
    price: "$299",
    cadence: "per month",
    blurb: "Our most popular plan for a consistent wellness rhythm.",
    featured: true,
    features: [
      "Two IV sessions monthly",
      "Premium add-on of your choice",
      "Priority scheduling",
      "10% off additional services",
      "Dedicated point of contact",
    ],
  },
  {
    id: "performance",
    name: "Performance Plus",
    price: "$549",
    cadence: "per month",
    blurb: "For athletes and high performers who recover hard and often.",
    features: [
      "Four IV sessions monthly",
      "All premium add-ons included",
      "Quarterly wellness blood panel",
      "Priority same-day booking",
      "15% off for household members",
    ],
  },
];
