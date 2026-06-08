# FEATURE_BOUNDARIES

Responsibility boundaries between systems.

## Content Data Layer (src/data)
Owns: all copy, pricing, contact details, nav, testimonials, FAQs, article content + lookup helpers
Does NOT Own: rendering, styling, network, validation
Communicates With: pages and presentational components (via import)
Isolation Level: Strong (pure data; no UI/runtime deps)

## Design System (src/components/ui + globals.css + lib/utils)
Owns: visual primitives, tokens, class merging, headings, buttons, container
Does NOT Own: page composition, data fetching, business content
Communicates With: all components/pages
Isolation Level: Strong (no data imports)

## Layout & Chrome (layout, header, footer)
Owns: global shell, fonts, metadata, persistent nav/footer, mobile menu state
Does NOT Own: page body content, API logic
Communicates With: data/site, ui primitives, newsletter-form
Isolation Level: Moderate (depends on site config)

## Booking (book page, booking-wizard, api/book)
Owns: multi-step booking UX, client form state, booking submission contract
Does NOT Own: real scheduling/payment (mocked), service definitions (reads data/services)
Communicates With: data/services, /api/book, ui/button
Isolation Level: Moderate (self-contained UI; API is a mock seam)

## Services (services pages, service-card)
Owns: service presentation (overview + detail), SSG params
Does NOT Own: service content (reads data/services), FAQ content (reads data/faqs)
Communicates With: data/services, data/faqs, faq, cta-band, service-card
Isolation Level: Moderate

## Packages (packages page)
Owns: pricing tier presentation
Does NOT Own: package content (data/packages), checkout
Communicates With: data/packages, data/faqs, faq, cta-band
Isolation Level: Moderate

## Education Hub (learn pages)
Owns: article index/featured layout, article block rendering, SSG params
Does NOT Own: article content (data/articles)
Communicates With: data/articles, data/faqs, faq, cta-band
Isolation Level: Moderate

## Contact (contact page, contact-form, api/contact)
Owns: contact UX + submission contract
Does NOT Own: real email/CRM delivery (mocked), contact details (data/site)
Communicates With: data/site, /api/contact
Isolation Level: Moderate

## Newsletter (newsletter-form, api/newsletter)
Owns: signup UX (footer/panel) + submission contract
Does NOT Own: real list provider (mocked)
Communicates With: /api/newsletter
Isolation Level: Strong (small, self-contained)

## SEO (sitemap, robots, layout metadata)
Owns: crawler artifacts + page metadata
Does NOT Own: route definitions (mirrors them), content
Communicates With: data/services, data/articles
Isolation Level: Moderate (must stay in sync with routes manually)
