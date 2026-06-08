import type { LucideIcon } from "lucide-react";
import { Droplets, Syringe } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  /** One-line summary for cards and overview grids. */
  summary: string;
  /** Longer intro paragraph for the detail page hero. */
  intro: string;
  /** Headline benefits, shown as a bulleted/iconed list. */
  benefits: string[];
  /** "What to expect" — ordered steps during a visit. */
  expect: { title: string; detail: string }[];
  /** Who this is a good fit for. */
  goodFor: string[];
  startingPrice: string;
  duration: string;
  /** True when this service offers the IV drip menu (drives the drip picker). */
  hasDrips?: boolean;
};

export const services: Service[] = [
  {
    slug: "iv-therapy",
    name: "IV Hydration Therapy",
    icon: Droplets,
    summary:
      "Tailored hydration and nutrient infusions for recovery, energy, and everyday wellness.",
    intro:
      "Replenish at the cellular level. Our licensed clinicians build each drip around your goals — rehydration, recovery, immunity, or a clear-headed reset — using sterile, single-use equipment in the comfort of your chosen location.",
    benefits: [
      "Rapid rehydration and electrolyte balance",
      "Customizable vitamin and mineral blends",
      "Faster recovery after travel, training, or illness",
      "Administered by licensed clinical staff",
    ],
    expect: [
      {
        title: "Brief consultation",
        detail:
          "We review your history and goals, then confirm the right blend for you.",
      },
      {
        title: "Comfortable placement",
        detail:
          "A clinician places your line using sterile, single-use supplies.",
      },
      {
        title: "Relax during the drip",
        detail:
          "Most sessions run 30–60 minutes. Sit back, hydrate, and unwind.",
      },
      {
        title: "Aftercare guidance",
        detail: "We share simple tips to help you get the most from your session.",
      },
    ],
    goodFor: [
      "Athletes and active recovery",
      "Busy professionals",
      "Post-travel and post-event reset",
      "General hydration and wellness",
    ],
    startingPrice: "from $250",
    duration: "30–60 min",
    hasDrips: true,
  },
  {
    slug: "blood-draws",
    name: "Mobile Blood Draws",
    icon: Syringe,
    summary:
      "Professional, comfortable specimen collection with quick, reliable handling.",
    intro:
      "Skip the waiting room. Our phlebotomists perform safe, comfortable blood draws wherever you are, with careful labeling and prompt, compliant handling so your results stay accurate and on time.",
    benefits: [
      "Trained, certified phlebotomists",
      "Comfortable, low-stress experience",
      "Careful labeling and chain-of-custody handling",
      "Convenient scheduling around your day",
    ],
    expect: [
      {
        title: "Confirm your order",
        detail:
          "We verify your requisition or testing requirements before arrival.",
      },
      {
        title: "Gentle collection",
        detail:
          "Our phlebotomist draws your sample quickly and comfortably.",
      },
      {
        title: "Secure handling",
        detail:
          "Specimens are labeled, stored, and transported per protocol.",
      },
    ],
    goodFor: [
      "Routine lab work",
      "Wellness and hormone panels",
      "Homebound or busy individuals",
      "Pre-employment and screening needs",
    ],
    startingPrice: "Contact for pricing",
    duration: "15–20 min",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** The single service that offers the drip menu (currently IV therapy). */
export const dripService = services.find((s) => s.hasDrips) ?? services[0];
