/**
 * Central site configuration: brand, contact details, navigation, social.
 * Real contact details are preserved from the existing live site.
 * Edit here to update across the entire site.
 */
export const site = {
  name: "Safe Screen Logistics",
  shortName: "Safe Screen",
  domain: "gosafescreen.com",
  url: "https://gosafescreen.com",
  tagline: "Testing, blood draws and IV therapy that come to you.",
  description:
    "Safe Screen Logistics provides DOT and non-DOT testing, annual and insurance blood draws, and mobile IV hydration therapy, collected on site and on your schedule.",
  phone: "765-372-6440",
  phoneHref: "tel:+17653726440",
  email: "safescreenlogistics@gmail.com",
  emailHref: "mailto:safescreenlogistics@gmail.com",
  hours: [
    { day: "Mon – Fri", time: "7:00 AM – 8:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  /** Real account URLs only. The footer hides the row while this is empty. */
  social: [] as { label: string; href: string }[],
  nav: [
    { label: "Services", href: "/services" },
    { label: "Drip Menu", href: "/menu" },
    { label: "Learn", href: "/learn" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
