# ENTRY_POINTS

Next.js App Router. Page entry points are file-system routed under `src/app`.
API entry points are Route Handlers (`route.ts`). No CLI/worker/cron/lambda processes.

## Root Layout
Path: src/app/layout.tsx
Responsibility: HTML shell, fonts (Bricolage Grotesque, Instrument Sans, Geist Mono), global
metadata/OG, mounts Header + Footer around all pages.
Invokes: Header, Footer, imports globals.css
Depends On: src/data/site.ts (name, description, url)

## Home Page
Path: src/app/page.tsx
Responsibility: Marketing landing (hero rack, service rows, drip teaser, how-it-works,
testimonials when the list has entries, learn rows, CTA).
Invokes: SpecimenRack, LiquidFill, DripCard, TestimonialCard, CtaBand, SectionHeading
Depends On: data/{services,site,testimonials,articles,drips}

## Services Pages
Path: src/app/services/page.tsx ; src/app/services/[slug]/page.tsx
Responsibility: Service overview (IV Therapy, DOT and Non-DOT Testing, Blood Draws);
per-service detail (SSG). Detail shows an options panel when the service has `options`,
and the iv-therapy detail also renders a drip-menu section.
Invokes: DripCard, FaqList, CtaBand, SectionHeading
Depends On: data/services, data/drips, data/faqs

## Drip Menu Page
Path: src/app/menu/page.tsx
Responsibility: Flagship Full Body Restart panel + two-column list of $250 drips; each links
into booking.
Invokes: DripCard, FaqList, CtaBand, SectionHeading
Depends On: data/drips, data/services (dripService), data/faqs

## Book Page
Path: src/app/book/page.tsx
Responsibility: Hosts BookingWizard inside Suspense (reads ?service / ?drip query).
Invokes: BookingWizard, SectionHeading
Depends On: posts to /api/book

## Learn Pages
Path: src/app/learn/page.tsx ; src/app/learn/[slug]/page.tsx
Responsibility: Lead article + article rows; article detail renderer (SSG).
Depends On: data/articles, data/faqs

## About Page
Path: src/app/about/page.tsx
Responsibility: What the business does + "How we work" list + CTA.

## Contact Page
Path: src/app/contact/page.tsx
Responsibility: Phone, email, hours, area note + ContactForm.
Invokes: ContactForm, which posts to /api/contact
Depends On: data/site

## 404
Path: src/app/not-found.tsx
Responsibility: Custom not-found screen.

## API: Booking
Path: src/app/api/book/route.ts
Responsibility: POST. Validate (zod) + return mocked confirmation. TODO: Cal.com/Stripe/email.

## API: Contact
Path: src/app/api/contact/route.ts
Responsibility: POST. Validate + mocked success. TODO: email/CRM.

## API: Newsletter
Path: src/app/api/newsletter/route.ts
Responsibility: POST. Validate email + mocked success. TODO: list provider.

## SEO Generators
Path: src/app/sitemap.ts ; src/app/robots.ts
Responsibility: Generate /sitemap.xml and /robots.txt at build, using site.url
(https://gosafescreen.com) as the base.
Depends On: data/site, data/services, data/articles
