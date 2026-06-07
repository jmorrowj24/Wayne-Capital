# Wayne Capital — Marketing Website

A premium, minimalist, production-ready marketing site for **Wayne Capital**, a private investment
company. Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

> Buy. Build. Own.

## Design

- **Palette** — deep navy, ivory white, slate, and a restrained gold accent
- **Type** — Fraunces (serif display) + Hanken Grotesk (body), via `next/font`
- **Feel** — editorial, credible, lots of whitespace; inspired by Berkshire
  Hathaway, Permanent Equity, Constellation Software, and the Blackstone letter
- Subtle gradient atmosphere, hairline dividers, film-grain texture, and
  staggered scroll-reveal animations (IntersectionObserver, reduced-motion aware)
- Fully responsive desktop + mobile, with an animated mobile menu

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx          Homepage (assembles all sections)
  globals.css       Design tokens, base styles, grain + reveal
components/
  Nav.tsx           Sticky, scroll-aware nav + mobile menu
  Hero.tsx          Hero with positioning and CTAs
  WhatWeDo.tsx      Four-pillar cards
  Philosophy.tsx    Investment philosophy statement
  CurrentFocus.tsx  Three current focus areas
  Criteria.tsx      Acquisition criteria checklist
  WhyPartner.tsx    Four value cards
  Portfolio.tsx     Venture portfolio (First Turn, Best & Final, Move Match)
  Contact.tsx       Deal-submission form (client)
  Footer.tsx        Footer + legal disclaimer
  SectionHeading.tsx / Reveal.tsx   Shared UI helpers
tailwind.config.ts  Colors, fonts, animations
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com](https://vercel.com) — Next.js is auto-detected,
   no configuration needed.
3. Vercel builds and gives you a live URL in ~60 seconds. Add a custom domain
   under the project's **Domains** settings (HTTPS is automatic).

Every push to the connected branch triggers an automatic redeploy.

## Wiring up the form

`components/Contact.tsx` currently simulates submission and shows a success
state. To make it live, replace the placeholder in `handleSubmit` with a call to
your endpoint (e.g. a Next.js route handler at `app/api/contact/route.ts`, or a
service like Formspree / Resend). The commented `fetch` block shows the shape.

## Notes on positioning

Copy is intentionally written to present Wayne Capital as a private investment
company sourcing opportunities — **not** as an investment adviser, broker-dealer,
public fund, or financial planning firm, and it does not solicit outside
investors. A matching disclaimer lives in the footer and beneath the form.
