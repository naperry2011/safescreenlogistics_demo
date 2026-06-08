# ENTRY_POINTS

Next.js App Router. Page entry points are file-system routed under `src/app`.
API entry points are Route Handlers (`route.ts`). No CLI/worker/cron/lambda processes.

## Root Layout
Path: src/app/layout.tsx
Responsibility: HTML shell, fonts (Geist, Geist Mono, Fraunces), global metadata/OG, mounts Header + Footer around all pages.
Invokes: Header, Footer, imports globals.css
Depends On: src/data/site.ts

## Home Page
Path: src/app/page.tsx
Responsibility: Marketing landing (hero, services, how-it-works, testimonials, learn teaser, CTA).
Invokes: ServiceCard, TestimonialCard, CtaBand, Reveal, SectionHeading
Depends On: data/{services,testimonials,articles}

## Services Pages
Path: src/app/services/page.tsx ; src/app/services/[slug]/page.tsx
Responsibility: Service overview (IV Therapy + Blood Draws); per-service detail (SSG). The
iv-therapy detail also renders a drip-menu section.
Invokes: ServiceCard, DripCard, FaqList, CtaBand
Depends On: data/services, data/drips, data/faqs

## Drip Menu Page
Path: src/app/menu/page.tsx
Responsibility: Flagship Full Body Restart hero + grid of $250 drips; each links into booking.
Invokes: DripCard, GooBlobs, Bubbles, WaveDivider, FaqList, CtaBand
Depends On: data/drips, data/faqs

## Book Page
Path: src/app/book/page.tsx
Responsibility: Hosts BookingWizard inside Suspense (reads ?service / ?drip query).
Invokes: BookingWizard
Depends On: posts to /api/book

## Learn Pages
Path: src/app/learn/page.tsx ; src/app/learn/[slug]/page.tsx
Responsibility: Article index + featured; article detail renderer (SSG).
Depends On: data/articles, data/faqs

## About Page
Path: src/app/about/page.tsx
Responsibility: Story, stats, values + CTA.

## Contact Page
Path: src/app/contact/page.tsx
Responsibility: Contact info cards + ContactForm.
Invokes: ContactForm → posts to /api/contact
Depends On: data/site

## 404
Path: src/app/not-found.tsx
Responsibility: Custom not-found screen.

## API: Booking
Path: src/app/api/book/route.ts
Responsibility: POST — validate (zod) + return mocked confirmation. TODO: Cal.com/Stripe/email.

## API: Contact
Path: src/app/api/contact/route.ts
Responsibility: POST — validate + mocked success. TODO: email/CRM.

## API: Newsletter
Path: src/app/api/newsletter/route.ts
Responsibility: POST — validate email + mocked success. TODO: list provider.

## SEO Generators
Path: src/app/sitemap.ts ; src/app/robots.ts
Responsibility: Generate /sitemap.xml and /robots.txt at build.
Depends On: data/services, data/articles
