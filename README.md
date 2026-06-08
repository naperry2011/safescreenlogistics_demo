# Safe Screen Logistics

A complete rebuild of [safescreenlogistics.com](https://safescreenlogistics.com) — a refined,
clinical-and-trustworthy site for a mobile IV therapy & wellness business. Built on **Next.js 16
(App Router) + TypeScript + Tailwind v4**, designed to deploy on **Vercel**.

## Highlights

- **Multi-step booking wizard** (`/book`) — choose service → drip (for IV therapy) → mobile/clinic →
  date & time → details → confirm. Submissions hit a mocked API designed to plug into real
  scheduling/payments later.
- **IV drip menu** (`/menu`) — flagship Full Body Restart + the $250 drip grid, each booking-linked.
- **Education hub** (`/learn`) — article index + detail pages and an accessible FAQ.
- **Service & drip pages**, **About**, **Contact** — all with polished, scroll-revealed sections.
- Custom design system: deep spruce teal + warm paper, an aqua/mint vitality accent, Fraunces display
  serif, Geist body/mono. Accessible (single h1 per page, focus states, reduced-motion support).

## Where the content lives

All copy/pricing/contact details are centralized and easy to edit:

| Content | File |
| --- | --- |
| Brand, contact, nav, hours, social | `src/data/site.ts` |
| Services (copy, benefits, steps) | `src/data/services.ts` |
| IV drip menu & pricing | `src/data/drips.ts` |
| Testimonials | `src/data/testimonials.ts` |
| FAQs | `src/data/faqs.ts` |
| Education articles | `src/data/articles.ts` |

## Mocked integrations (next phase)

`src/app/api/{book,contact,newsletter}/route.ts` validate input with zod and return realistic
responses. Each has a `TODO(integration)` comment marking where to wire real services:

- **Booking/scheduling** → e.g. Cal.com API
- **Payments** → e.g. Stripe
- **Email / lists** → e.g. Resend, Mailchimp

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the repo. Framework preset auto-detects **Next.js**; no extra
   config needed.
3. Deploy. Add the `safescreenlogistics.com` domain in **Project → Settings → Domains** when ready to
   cut over from Hostinger.
