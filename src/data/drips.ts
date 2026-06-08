import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Leaf,
  Zap,
  Sprout,
  Sun,
  Gem,
  Trophy,
  Waves,
  Droplets,
  GlassWater,
  Star,
} from "lucide-react";

/**
 * The real IV drip menu, sourced from the live shop (safescreenlogistics.com/shop):
 * ten condition-targeted drips at $250 and a flagship "Full Body Restart" at $500.
 * Descriptions are written placeholders (the shop lists none) — swap with clinical
 * copy when available. Pricing/blurbs all live here so they're easy to edit.
 */
export type Drip = {
  slug: string;
  name: string;
  price: string;
  icon: LucideIcon;
  /** Short menu blurb. */
  blurb: string;
  /** "Best for" chips. */
  bestFor: string[];
  flagship?: boolean;
};

export const drips: Drip[] = [
  {
    slug: "full-body-restart",
    name: "Full Body Restart",
    price: "$500",    icon: Sparkles,
    flagship: true,
    blurb:
      "Our most complete infusion — a high-dose blend of hydration, vitamins, antioxidants, and amino acids designed to reset you from head to toe. The flagship reset for when you want everything, all at once.",
    bestFor: ["Deep recovery", "Total reset", "Run-down & depleted"],
  },
  {
    slug: "rehydration",
    name: "Rehydration Therapy",
    price: "$250",    icon: Droplets,
    blurb:
      "Fast, balanced fluids and electrolytes to bring you back to baseline after heat, exertion, or a long day.",
    bestFor: ["Dehydration", "Post-workout", "Hot days"],
  },
  {
    slug: "energy-boost",
    name: "Energy Boost Therapy",
    price: "$250",    icon: Zap,
    blurb:
      "A B-vitamin and amino-acid forward blend to lift fatigue and restore steady, clean energy.",
    bestFor: ["Low energy", "Busy weeks", "Afternoon slumps"],
  },
  {
    slug: "rejuvenate-hangover",
    name: "Rejuvenate (Hangover) Therapy",
    price: "$250",    icon: GlassWater,
    blurb:
      "Rapid rehydration plus anti-nausea and replenishing nutrients to help you bounce back quickly.",
    bestFor: ["Morning after", "Travel recovery", "Quick bounce-back"],
  },
  {
    slug: "athletic-performance",
    name: "Athletic Performance Therapy",
    price: "$250",    icon: Trophy,
    blurb:
      "Amino acids and electrolytes to support endurance, muscle recovery, and faster turnaround between sessions.",
    bestFor: ["Athletes", "Training blocks", "Race recovery"],
  },
  {
    slug: "beauty",
    name: "Beauty Therapy",
    price: "$250",    icon: Gem,
    blurb:
      "A glow-focused blend with antioxidants and skin-supporting nutrients to nourish hair, skin, and nails.",
    bestFor: ["Skin glow", "Hair & nails", "Special occasions"],
  },
  {
    slug: "anxiety",
    name: "Anxiety Therapy",
    price: "$250",    icon: Waves,
    blurb:
      "Magnesium and calming nutrients formulated to ease tension and support a steadier, more grounded state.",
    bestFor: ["Stress relief", "Tension", "Calm reset"],
  },
  {
    slug: "depression",
    name: "Depression Support Therapy",
    price: "$250",    icon: Sun,
    blurb:
      "A mood-supportive blend of vitamins and nutrients intended to complement your broader wellness routine.",
    bestFor: ["Mood support", "Low motivation", "Whole-person care"],
  },
  {
    slug: "gut-health",
    name: "Gut Health Therapy",
    price: "$250",    icon: Leaf,
    blurb:
      "Nutrients chosen to support digestion and gut comfort while keeping you well hydrated.",
    bestFor: ["Digestive comfort", "Bloating", "Reset routine"],
  },
  {
    slug: "hair-growth",
    name: "Hair Growth Therapy",
    price: "$250",    icon: Sprout,
    blurb:
      "Biotin and supporting nutrients to nourish follicles and complement a healthy hair routine.",
    bestFor: ["Hair health", "Thinning", "Stronger strands"],
  },
  {
    slug: "aging",
    name: "Aging (Anti-Aging) Therapy",
    price: "$250",    icon: Star,
    blurb:
      "Antioxidant-rich support, including glutathione-style nutrients, to help you look and feel refreshed.",
    bestFor: ["Vitality", "Antioxidant support", "Refreshed look"],
  },
];

export const flagshipDrip = drips.find((d) => d.flagship) ?? drips[0];
export const standardDrips = drips.filter((d) => !d.flagship);

export function getDrip(slug: string) {
  return drips.find((d) => d.slug === slug);
}
