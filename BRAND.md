# Wayne Capital — Brand System

A private investment company. We buy, build, and own — for the long term.
This document is the source of truth for voice, logo, color, and type. The
homepage is built directly on these tokens.

The look: **premium and restrained** — Berkshire/Blackstone gravitas, but
darker, sleeker, and more modern. Near-black canvas, one warm-gold accent,
elegant serif headlines, generous whitespace. Credibility over scale.

---

## Voice

**Confident, intelligent, direct, premium.** We sound like a principal, not a
brochure.

- **Short, declarative sentences.** Make the point, then stop.
- **Plain words.** No jargon, no buzzwords. If a banker would say it, we don't.
- **A clear point of view.** We invest our own capital, back operators, and never
  race a clock. Say so plainly.
- **Premium, not loud.** Restraint signals confidence. Never oversell — and never
  inflate size, metrics, or portfolio. The site exists to source deals and earn
  trust, not to look big.

**On-brand:** "We are owners, not a fund." · "We invest our own capital." ·
"Patience is our advantage."

**Off-brand:** "Leveraging our world-class platform to unlock synergies." · Hype,
hedging, filler, or invented numbers.

The anthem — **Buy. Build. Own.** — is the spine of the brand. Use it in the hero
and the footer; the gold falls on "Own."

---

## Logo

A **circular monogram** — a clean knockout/white "W" on the near-black UI
(`components/Logo.tsx`), drawn in SVG so it stays crisp at any size.

### Usage
- **Knockout/white on dark.** The mark and wordmark read in warm off-white
  (`#F5F3EE`); the gold ring appears only on hover.
- **Wordmark:** "WAYNE CAPITAL" in Hanken Grotesk, uppercase, wide tracking
  (`0.2em`). Calm and institutional next to the geometric mark.
- Give the mark clear space. Don't fill the mark with gold (gold is for accents).

### Swapping in the real logo
Your real logo is **black**, so on this dark site you need a **white / knockout**
version.
1. Export a white-on-transparent SVG/PNG into `/public`, e.g.
   `/public/wayne-mark-white.svg`.
2. In `components/Logo.tsx`, replace the inline `<svg>` with a `next/image`
   `<Image src="/wayne-mark-white.svg" … fill className="object-contain p-1.5" />`
   (full instructions are in the file header). Keep the wrapping `<span>`.
3. Only have the black file? Add Tailwind `invert` to knock it out to white.

---

## Color

Near-black canvas, one restrained gold. Gold is used **sparingly** — a thin rule,
one word, a small dot, button fills, hover states. Subtle gradients are allowed
for depth; **never** flashy fills.

| Token            | Value       | Role                                   |
| ---------------- | ----------- | -------------------------------------- |
| `base`           | `#0B0B0D`   | Page canvas (near-black)               |
| `surface`        | `#141416`   | Cards / elevated bands                 |
| `surface-raised` | `#1A1A1D`   | Card gradient bottom / nested surfaces |
| `fg`             | `#F5F3EE`   | Primary text (warm off-white)          |
| `muted`          | `#9A988F`   | Body / secondary text                  |
| `dim`            | `#5E5C55`   | Labels, captions, disclaimers          |
| hairline         | `rgba(255,255,255,0.10)` | Borders / dividers         |
| `accent`         | see below   | Gold — accents only                    |

### The accent — re-theme from one line
The accent is a CSS variable in `app/globals.css`, written as **RGB channels**
(no commas) so Tailwind can apply opacity (`text-accent`, `border-accent/30`,
`bg-accent/10`):

```css
:root {
  --accent: 201 166 107;        /* restrained warm gold #C9A66B (default) */
  /* --accent: 226 192 120; */  /* brighter gold      #E2C078            */
}
```

Change that one line and the whole site re-themes — buttons, rules, the gold
"Own.", hover states, the hero glow. Tailwind exposes it as
`accent: rgb(var(--accent) / <alpha-value>)` in `tailwind.config.ts`.

---

## Type

Two families, calm and premium. Big calm serif headlines + generous spacing is
the whole look.

| Family             | Tailwind     | CSS var        | Role                                     |
| ------------------ | ------------ | -------------- | ---------------------------------------- |
| **Fraunces**       | `font-serif` | `--font-serif` | Display / headlines (editorial, high-end) |
| **Hanken Grotesk** | `font-sans`  | `--font-sans`  | Body copy (default on `<body>`)          |

Loaded via `next/font/google` in `app/layout.tsx` (zero layout shift).

### Conventions
- **Headlines:** `font-serif`, light weight, slightly tight tracking, generous
  size. Let them breathe. The gold falls on a single word.
- **Body:** `font-sans`, relaxed leading, `muted` color.
- **Labels / eyebrows:** the `.label` utility — Hanken uppercase, `11px`,
  wide `tracking-label` (`0.22em`), `muted`. This wide-tracked sans is the
  refined "tech-but-quiet" signal; the eyebrow rule + label can take the gold.
- Pair one calm serif headline with a small wide-tracked label above it.

---

## Motion

Moderate and tasteful — Tailwind + CSS only, no animation libraries. Everything
respects `prefers-reduced-motion` (a global reduce block in `globals.css`).

- **Hero:** gentle staggered `fade-up` on load + a soft dark radial glow for depth.
- **Sections:** `.reveal` fade-up as they enter view (`components/Reveal.tsx`).
- **Cards/buttons:** smooth hover; a faint gold sheen sweeps across cards on hover
  (`.card::after` in `globals.css`).

Explicitly **not** used: marquee, cursor-follow glow, count-up stats, aurora.
Calm and confident, not flashy.

---

## Page structure

One page, five sections, no filler: **Hero → Who We Are → What We Do → What We
Look For → Connect**, plus nav and footer. The contact form posts to
`/api/contact` (validates + logs). Production domain: **capitalwayne.com**.
