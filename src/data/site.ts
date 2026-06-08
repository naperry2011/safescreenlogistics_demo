/**
 * Central site configuration: brand, contact details, navigation, social.
 * Real contact details are preserved from the existing live site.
 * Edit here to update across the entire site.
 */
export const site = {
  name: "Safe Screen Logistics",
  shortName: "Safe Screen",
  tagline: "Clinical-grade wellness, delivered with care.",
  description:
    "Safe Screen Logistics provides professional mobile IV hydration therapy, blood draw services, and tailored wellness packages — delivered safely, comfortably, and on your schedule.",
  phone: "765-372-6440",
  phoneHref: "tel:+17653726440",
  email: "support@safescreenlogistics.com",
  emailHref: "mailto:support@safescreenlogistics.com",
  hours: [
    { day: "Mon – Fri", time: "7:00 AM – 8:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
  nav: [
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "Learn", href: "/learn" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
