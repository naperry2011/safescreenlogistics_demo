# DATA_FLOW

System-level data movement. App is content-driven (static data modules) with three mocked write paths.

## Static Content Render
Source: src/data/*.ts (typed modules)
Transport: ES import
Processor: Server Components (pages) + presentational components
Storage: none (compiled into static/SSG HTML)
Downstream Consumers: rendered pages (/, /services, /menu, /learn, /about, /contact)

## Service / Article Detail (SSG)
Source: data/services.ts, data/articles.ts
Transport: generateStaticParams → params → getService/getArticle lookup
Processor: src/app/services/[slug]/page.tsx, src/app/learn/[slug]/page.tsx
Storage: prerendered static HTML per slug
Downstream Consumers: visitor browser

## Booking Submission
Source: BookingWizard form state (client) — incl. optional drip when service is iv-therapy
Transport: fetch POST /api/book (JSON: serviceSlug, drip?, mode, …)
Processor: src/app/api/book/route.ts (zod validate → mock confirmation)
Storage: none (MOCK; TODO Cal.com/Stripe/email)
Downstream Consumers: wizard success screen (confirmationId, message)

## Contact Submission
Source: ContactForm state (client)
Transport: fetch POST /api/contact (JSON)
Processor: src/app/api/contact/route.ts (zod validate → mock success)
Storage: none (MOCK; TODO email/CRM)
Downstream Consumers: form success state

## Newsletter Signup
Source: NewsletterForm input (client; footer/panel)
Transport: fetch POST /api/newsletter (JSON)
Processor: src/app/api/newsletter/route.ts (zod validate → mock success)
Storage: none (MOCK; TODO list provider)
Downstream Consumers: inline success message

## Query-Param Prefill
Source: links e.g. /book?service=iv-therapy&drip=full-body-restart (from DripCard / menu / IV page)
Transport: URL search params (useSearchParams)
Processor: BookingWizard initial state (service + drip)
Downstream Consumers: wizard step 0 default selection + inline drip picker

## SEO Artifacts
Source: data/services, data/articles + static route list
Transport: build-time generation
Processor: src/app/sitemap.ts, robots.ts
Storage: /sitemap.xml, /robots.txt
Downstream Consumers: crawlers
