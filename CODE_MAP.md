# CODE_MAP

Feature-oriented map of the Safe Screen Logistics site (Next.js 16 App Router, TS, Tailwind v4).
Domain: gosafescreen.com (set in src/data/site.ts).

## Design System / UI Primitives
Category: UI
Primary Files:
- src/components/ui/button.tsx (Button, ButtonLink: variants/sizes)
- src/components/ui/section-heading.tsx (SectionHeading: title + optional description, h1/h2 sizes)
- src/components/ui/container.tsx (max-width wrapper)
- src/app/globals.css (design tokens, @theme, base styles, hero and liquid keyframes)
Supporting Files:
- src/lib/utils.ts (cn class merge)
- src/components/logo.tsx (brand mark)
Fonts: Bricolage Grotesque (display), Instrument Sans (body), Geist Mono (mono); loaded in layout.tsx.
Palette: deep petrol (spruce), cool label-white (paper), mint, plus tube-cap accents
(lavender, gold, crimson, amber).
Conventions: no label above headings, no icon chips, no scroll-reveal wrapper. Lists use
hairline-divided rows instead of card grids. No em dashes in copy or comments.
External Integrations: none

## Hero and Motion
Category: UI
Primary Files:
- src/components/specimen-rack.tsx (home hero: specimen cup, two blood tubes, IV bag; each
  links to its service; fills once on load; server component, CSS-only)
- src/components/fluid/liquid-fill.tsx (scroll-driven liquid vessel on the home drip teaser; client)
Supporting Files:
- src/app/globals.css (.vessel-liquid, .vessel-in, .iv-drop, .bubble, .wave-anim, reduced-motion guard)
Note: these are the only two animated pieces. The earlier fluid set (goo blobs, bubbles, wave
dividers, droplet cursor, gooey filter) and the Reveal wrapper were removed.
External Integrations: none

## Layout & Chrome
Category: UI
Primary Files:
- src/app/layout.tsx (root layout, fonts, metadata, Header/Footer mount)
- src/components/header.tsx (solid sticky nav + mobile menu, client)
- src/components/footer.tsx (nav, phone, email, domain, newsletter mount; social row hidden
  while site.social is empty)
Entry Points: src/app/layout.tsx (wraps all routes)

## Booking
Category: UI + API
Primary Files:
- src/app/book/page.tsx (Suspense wrapper)
- src/components/booking-wizard.tsx (5-step client wizard)
- src/app/api/book/route.ts (mocked POST handler, zod)
Supporting Files:
- src/data/services.ts (service options), src/data/drips.ts (drip picker)
External Integrations: MOCK. TODO seams for Cal.com (scheduling), Stripe (payments), email
Note: partner locations in the wizard are placeholders, not confirmed client facts.

## Services
Category: UI
Primary Files:
- src/app/services/page.tsx (one wide band per service: price, visit length, options, booking)
- src/app/services/[slug]/page.tsx (detail, generateStaticParams; options panel when present)
Supporting Files:
- src/data/services.ts, src/data/faqs.ts
- src/components/faq.tsx, src/components/cta-band.tsx
Services: iv-therapy, drug-testing (DOT and non-DOT), blood-draws (annual and insurance).

## Drip Menu
Category: UI
Primary Files:
- src/app/menu/page.tsx (flagship Full Body Restart panel + two-column $250 menu list)
- src/components/drip-card.tsx (menu line: name, dotted leader, price; links to
  /book?service=iv-therapy&drip=<slug>)
Supporting Files:
- src/data/drips.ts (11 drips: 10 at $250 + flagship $500), src/data/faqs.ts
- src/components/faq.tsx, src/components/cta-band.tsx
Note: also surfaced on the home page and on src/app/services/[slug]/page.tsx for iv-therapy.

## Education Hub (Learn)
Category: UI
Primary Files:
- src/app/learn/page.tsx (lead article + rows)
- src/app/learn/[slug]/page.tsx (article renderer, generateStaticParams)
Supporting Files:
- src/data/articles.ts (typed Block[] content)
- src/data/faqs.ts, src/components/faq.tsx

## Marketing Pages
Category: UI
Primary Files:
- src/app/page.tsx (home: hero rack, service rows, drip teaser, steps, testimonials when
  present, learn rows, CTA)
- src/app/about/page.tsx
- src/app/not-found.tsx
Supporting Files:
- src/components/{cta-band,testimonial-card,specimen-rack}.tsx
- src/data/{services,testimonials,articles,drips,site}.ts

## Contact
Category: UI + API
Primary Files:
- src/app/contact/page.tsx (phone, email, hours, area note + form)
- src/components/contact-form.tsx (client)
- src/app/api/contact/route.ts (mocked POST, zod)
External Integrations: MOCK. TODO seam for email/CRM

## Newsletter
Category: UI + API
Primary Files:
- src/components/newsletter-form.tsx (client; used in footer)
- src/app/api/newsletter/route.ts (mocked POST, zod)
External Integrations: MOCK. TODO seam for list provider

## SEO / Metadata
Category: Infra
Primary Files:
- src/app/sitemap.ts (derives from services + articles; base URL from site.url)
- src/app/robots.ts (sitemap URL from site.url)
- src/app/layout.tsx (metadata, OG; metadataBase from site.url)

## Content Data Layer
Category: Other (config/content)
Primary Files:
- src/data/site.ts (brand, domain, url, phone, email, nav, hours, social)
- src/data/services.ts (three services; optional `options` variants, `shortName`)
- src/data/drips.ts (drip menu), faqs.ts, articles.ts
- src/data/testimonials.ts (type + empty list; real client quotes only)
Note: single source of truth for all copy/pricing/contact; swappable.
Empty-by-design: `testimonials` and `site.social` are empty until the client supplies real
ones; the home section and footer row render only when they have entries.
Unconfirmed placeholders still in data: hours, service area, DOT testing copy.
