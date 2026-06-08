/**
 * Education hub articles. Content is modeled as typed blocks so it renders
 * consistently and is easy to replace with real, client-provided copy (or to
 * migrate to MDX/a CMS) later.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  category: "Hydration" | "Recovery" | "Wellness" | "Lab Work";
  excerpt: string;
  readMinutes: number;
  date: string; // ISO
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "iv-therapy-basics",
    title: "IV Therapy 101: What It Is and Who It Helps",
    category: "Hydration",
    excerpt:
      "A clear, no-hype primer on how intravenous hydration works and the situations where it genuinely shines.",
    readMinutes: 5,
    date: "2026-05-12",
    body: [
      {
        type: "p",
        text: "Intravenous (IV) therapy delivers fluids, electrolytes, and select nutrients directly into the bloodstream. Because it bypasses digestion, your body can access what it needs quickly and completely.",
      },
      { type: "h2", text: "When it helps most" },
      {
        type: "ul",
        items: [
          "Rehydration after intense exercise, travel, or illness",
          "Recovery support when you're run-down",
          "A convenient way to maintain a hydration routine",
        ],
      },
      {
        type: "p",
        text: "IV therapy is not a substitute for medical care. Our clinicians screen every client and tailor each session to be both effective and safe.",
      },
      { type: "h2", text: "What a session feels like" },
      {
        type: "p",
        text: "Most people describe it as calm and easy — a brief pinch, then 30 to 60 minutes to relax while you rehydrate. Many notice they feel clearer and more energized within the hour.",
      },
    ],
  },
  {
    slug: "hydration-and-performance",
    title: "Hydration and Performance: Small Margins, Big Differences",
    category: "Recovery",
    excerpt:
      "Even mild dehydration quietly chips away at focus, endurance, and recovery. Here's how to stay ahead of it.",
    readMinutes: 4,
    date: "2026-05-28",
    body: [
      {
        type: "p",
        text: "Hydration isn't just about thirst. By the time you feel thirsty, performance markers like reaction time and endurance may already be slipping.",
      },
      { type: "h2", text: "The everyday basics" },
      {
        type: "ul",
        items: [
          "Front-load fluids earlier in the day, not all at once",
          "Pair water with electrolytes after heavy sweat",
          "Watch caffeine and alcohol, which accelerate fluid loss",
        ],
      },
      {
        type: "p",
        text: "When you need a faster, more complete reset — after a race, a long flight, or a demanding week — an IV session can restore balance in a single sitting.",
      },
    ],
  },
  {
    slug: "what-to-know-blood-draws",
    title: "Mobile Blood Draws: What to Know Before Your Appointment",
    category: "Lab Work",
    excerpt:
      "A few simple steps make your at-home blood draw faster, more comfortable, and more accurate.",
    readMinutes: 3,
    date: "2026-06-02",
    body: [
      {
        type: "p",
        text: "A mobile blood draw brings the lab to you. To make it smooth, a little preparation goes a long way.",
      },
      { type: "h2", text: "Before we arrive" },
      {
        type: "ul",
        items: [
          "Confirm any fasting requirements for your specific test",
          "Drink water beforehand — hydrated veins are easier to access",
          "Have your requisition or order details handy",
        ],
      },
      {
        type: "p",
        text: "Our phlebotomists handle the rest: a gentle, careful collection, precise labeling, and compliant transport so your results stay reliable.",
      },
    ],
  },
  {
    slug: "building-a-wellness-routine",
    title: "Building a Wellness Routine That Actually Sticks",
    category: "Wellness",
    excerpt:
      "Consistency beats intensity. Here's how to turn good intentions into a rhythm you'll keep.",
    readMinutes: 5,
    date: "2026-06-05",
    body: [
      {
        type: "p",
        text: "The best wellness plan is the one you'll actually follow. That usually means fewer, simpler commitments — done reliably.",
      },
      { type: "h2", text: "Make it frictionless" },
      {
        type: "ul",
        items: [
          "Schedule recurring sessions instead of deciding each time",
          "Bundle services you already use into one simple plan",
          "Pick a cadence that fits your real calendar, not an ideal one",
        ],
      },
      {
        type: "p",
        text: "That's the thinking behind our drip menu: pick a formula built around your goals and schedule it on a cadence that fits — so wellness becomes a habit, not a hassle.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
