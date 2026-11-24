# IMPORT_GRAPH_SUMMARY

High-level coupling overview. No circular dependencies. Flat, acyclic graph: pages -> components -> ui/data/lib.

## Core Dependency Nodes
- src/data/site.ts: imported by layout, header, footer, home, contact, cta-band, logo, sitemap, robots; central brand/contact/nav/domain source
- src/lib/utils.ts (cn): imported by nearly every component
- src/components/ui/button.tsx (Button/ButtonLink): used across pages, cta-band, header, wizard
- src/components/ui/container.tsx: layout wrapper on every page/section
- src/components/ui/section-heading.tsx: headings across pages
- src/components/cta-band.tsx: reused on home, services, menu, learn, about
- src/components/faq.tsx + src/data/faqs.ts: shared by services detail, menu, learn
- src/components/drip-card.tsx: home, menu, services detail (iv-therapy)
- src/data/services.ts: home, services pages, menu, footer, drip-card, booking-wizard, sitemap
- src/data/articles.ts: home, learn pages, sitemap

## Coupling Notes
- Highest fan-in: utils.cn, ui/container, ui/button, data/site (intentional shared primitives)
- Pages are leaf importers (no page imports another page)
- Client islands: header, faq, booking-wizard, contact-form, newsletter-form, fluid/liquid-fill ("use client")
- specimen-rack is a server component with hardcoded service links (/services/drug-testing, /services/blood-draws, /services/iv-therapy); renaming a slug in data/services means updating it too
- API routes (book/contact/newsletter) depend only on zod + next/server (book also imports nothing from data; wizard supplies serviceSlug)

## Potential Refactor Risk Areas
- src/data/site.ts (broad fan-in; shape changes ripple to layout/header/footer/contact)
- src/components/ui/button.tsx (variant/size API change touches many call sites)
- src/components/ui/section-heading.tsx (`as` prop + styling shared by many headings)
- src/data/services.ts slugs (hardcoded in specimen-rack links and the home `serviceMark` color map)
- src/data/faqs.ts (single FAQ list reused on 3 pages: divergent needs would force a split)
