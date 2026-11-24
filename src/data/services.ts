import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, Droplets, Syringe } from "lucide-react";

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
  /** "What to expect": ordered steps during a visit. */
  expect: { title: string; detail: string }[];
  /** Who this is a good fit for. */
  goodFor: string[];
  startingPrice: string;
  duration: string;
  /** True when this service offers the IV drip menu (drives the drip picker). */
  hasDrips?: boolean;
  /** Named variants of the service, shown on cards and the detail page. */
  options?: { name: string; detail: string }[];
  /** Short label used where space is tight (hero rack, chips). */
  shortName: string;
};

export const services: Service[] = [
  {
    slug: "iv-therapy",
    name: "IV Hydration Therapy",
    icon: Droplets,
    summary:
      "Tailored hydration and nutrient infusions for recovery, energy, and everyday wellness.",
    intro:
      "Replenish at the cellular level. Our licensed clinicians build each drip around your goals (rehydration, recovery, immunity, or a clear-headed reset) using sterile, single-use equipment in the comfort of your chosen location.",
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
    shortName: "IV therapy",
  },
  {
    slug: "drug-testing",
    name: "DOT & Non-DOT Testing",
    shortName: "Testing",
    icon: ClipboardCheck,
    summary:
      "Drug and alcohol testing for regulated drivers and everyday employers, collected on site.",
    intro:
      "Whether your team falls under Department of Transportation rules or your own company policy, we handle the collection and the paperwork. We come to your workplace, so nobody loses half a day at a clinic.",
    options: [
      {
        name: "DOT testing",
        detail:
          "For safety-sensitive transportation employees such as CDL drivers. Collections follow the federal 49 CFR Part 40 procedure, with the federal custody and control form.",
      },
      {
        name: "Non-DOT testing",
        detail:
          "For employers outside DOT rules. The panel and the reasons for testing follow your company policy, with the same careful custody handling.",
      },
    ],
    benefits: [
      "DOT collections follow 49 CFR Part 40",
      "Non-DOT panels matched to your policy",
      "On-site collection at your workplace",
      "Chain-of-custody paperwork handled for you",
    ],
    expect: [
      {
        title: "Tell us what you need",
        detail:
          "DOT or non-DOT, the reason for the test, and how many people we are collecting from.",
      },
      {
        title: "Collection on site",
        detail:
          "A trained collector verifies ID and completes the collection privately.",
      },
      {
        title: "Sealed and documented",
        detail:
          "Each specimen is sealed in front of the donor and logged on the custody form.",
      },
      {
        title: "Sent to the lab",
        detail:
          "Specimens go to the laboratory and results are reported to the right contact.",
      },
    ],
    goodFor: [
      "CDL drivers and motor carriers",
      "Pre-employment screening",
      "Random and post-accident testing",
      "Drug-free workplace programs",
    ],
    startingPrice: "Contact for pricing",
    duration: "About 15 min",
  },
  {
    slug: "blood-draws",
    name: "Mobile Blood Draws",
    shortName: "Blood draws",
    icon: Syringe,
    summary:
      "Annual and insurance blood draws, collected wherever you are with careful handling.",
    intro:
      "Skip the waiting room. Our phlebotomists perform safe, comfortable blood draws wherever you are, with careful labeling and prompt, compliant handling so your results stay accurate and on time.",
    options: [
      {
        name: "Annual blood draws",
        detail:
          "The yearly lab work your doctor or wellness program orders, drawn at home or at work instead of a waiting room.",
      },
      {
        name: "Insurance blood draws",
        detail:
          "Draws your insurer asks for, such as for a policy application, collected and documented to their requirements.",
      },
    ],
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
      "Annual physicals and routine lab work",
      "Insurance applications and exams",
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
