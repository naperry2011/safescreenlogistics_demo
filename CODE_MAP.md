# CODE_MAP

Feature-oriented map of the Safe Screen Logistics site (Next.js 16 App Router, TS, Tailwind v4).

## Design System / UI Primitives
Category: UI
Primary Files:
- src/components/ui/button.tsx (Button, ButtonLink — variants/sizes)
- src/components/ui/section-heading.tsx (SectionHeading, Eyebrow)
- src/components/ui/container.tsx (max-width wrapper)
- src/app/globals.css (design tokens, @theme, base styles)
Supporting Files:
- src/lib/utils.ts (cn class merge)
- src/components/logo.tsx (brand mark)
- src/components/reveal.tsx (scroll-reveal motion wrapper)
External Integrations: none

## Fluid Identity ("Fluid & living" motion system)
Category: UI
Primary Files:
- src/components/fluid/fluid-defs.tsx (global SVG gooey filter; mounted once in layout)
- src/components/fluid/goo-blobs.tsx (drifting metaball background)
- src/components/fluid/wave-divider.tsx (animated SVG wave section dividers)
- src/components/fluid/liquid-fill.tsx (scroll-driven liquid vessel; client)
- src/components/fluid/bubbles.tsx (rising bubbles)
- src/components/fluid/droplet-cursor.tsx (lagging droplet cursor + click ripple; client, mounted in layout)
Supporting Files:
- src/app/globals.css (fluid keyframes, .goo/.bubble/.wave-anim helpers, reduced-motion guard)
External Integrations: none. All effects degrade on touch + prefers-reduced-motion.

## Layout & Chrome
Category: UI
Primary Files:
- src/app/layout.tsx (root layout, fonts, metadata, Header/Footer mount)
- src/components/header.tsx (sticky nav + mobile menu, client)
- src/components/footer.tsx (nav, contact, newsletter mount)
Entry Points: src/app/layout.tsx (wraps all routes)

## Booking
Category: UI + API
Primary Files:
- src/app/book/page.tsx (Suspense wrapper)
- src/components/booking-wizard.tsx (5-step client wizard)
- src/app/api/book/route.ts (mocked POST handler, zod)
Supporting Files:
- src/data/services.ts (service options)
External Integrations: MOCK — TODO seams for Cal.com (scheduling), Stripe (payments), email

## Services
Category: UI
Primary Files:
- src/app/services/page.tsx (overview grid)
- src/app/services/[slug]/page.tsx (detail, generateStaticParams)
- src/components/service-card.tsx
Supporting Files:
- src/data/services.ts, src/data/faqs.ts
- src/components/faq.tsx, src/components/cta-band.tsx

## Drip Menu
Category: UI
Primary Files:
- src/app/menu/page.tsx (flagship Full Body Restart hero + $250 drip grid)
- src/components/drip-card.tsx (links to /book?service=iv-therapy&drip=<slug>)
Supporting Files:
- src/data/drips.ts (11 drips: 10×$250 + flagship $500), src/data/faqs.ts
- src/components/faq.tsx, src/components/cta-band.tsx, fluid/* (goo, bubbles, wave)
Note: also surfaced as a section on src/app/services/[slug]/page.tsx for the iv-therapy slug.

## Education Hub (Learn)
Category: UI
Primary Files:
- src/app/learn/page.tsx (index + featured)
- src/app/learn/[slug]/page.tsx (article renderer, generateStaticParams)
Supporting Files:
- src/data/articles.ts (typed Block[] content)
- src/data/faqs.ts, src/components/faq.tsx

## Marketing Pages
Category: UI
Primary Files:
- src/app/page.tsx (home)
- src/app/about/page.tsx
- src/app/not-found.tsx
Supporting Files:
- src/components/{cta-band,testimonial-card,service-card}.tsx
- src/data/{services,testimonials,articles}.ts

## Contact
Category: UI + API
Primary Files:
- src/app/contact/page.tsx
- src/components/contact-form.tsx (client)
- src/app/api/contact/route.ts (mocked POST, zod)
External Integrations: MOCK — TODO seam for email/CRM

## Newsletter
Category: UI + API
Primary Files:
- src/components/newsletter-form.tsx (client; used in footer + panel)
- src/app/api/newsletter/route.ts (mocked POST, zod)
External Integrations: MOCK — TODO seam for list provider

## SEO / Metadata
Category: Infra
Primary Files:
- src/app/sitemap.ts (derives from services + articles)
- src/app/robots.ts
- src/app/layout.tsx (metadata, OG)

## Content Data Layer
Category: Other (config/content)
Primary Files:
- src/data/site.ts (brand, contact, nav, hours, social)
- src/data/services.ts (IV Therapy + Blood Draws), drips.ts (drip menu),
  testimonials.ts, faqs.ts, articles.ts
Note: single source of truth for all copy/pricing/contact; swappable.
Removed: packages.ts (membership tiers) — replaced by the real drips.ts catalog.
