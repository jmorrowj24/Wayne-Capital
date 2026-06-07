# Wayne Capital — Brand System

A private investment company. We buy, build, and own — for the long term.
This document is the source of truth for voice, logo, color, and type. The
homepage is built directly on these tokens.

---

## Voice

**Confident, intelligent, direct, premium.** We sound like a principal, not a
brochure.

- **Short, declarative sentences.** Make the point, then stop.
- **Plain words.** No jargon, no buzzwords, no "synergies" or "leverage our
  platform." If a banker would say it, we don't.
- **A clear point of view.** We are not a fund. We hold our own capital, back
  operators, and never race a clock. Say so plainly.
- **Premium, not loud.** Restraint signals confidence. We don't oversell.

**On-brand:** "We buy to own — not to flip." · "Operators lead; we back them." ·
"No funds. No flipping. No expiration date."

**Off-brand:** "Leveraging our world-class platform to unlock synergistic
value." · Hype, hedging, or filler.

The three-word anthem — **Buy. Build. Own.** — is the spine of the brand. Use it
in the hero, the footer, and sparingly elsewhere.

---

## Logo

The mark is a **circular monogram** — a clean white "W" on the dark UI
(`components/Logo.tsx`). It's drawn in SVG, so it stays crisp at any size and
needs no asset.

### Usage
- **Always white on dark.** The site canvas is near-black; the mark and wordmark
  read in white (`#FAFAFA`). The accent ring appears only on hover.
- **Wordmark:** "WAYNE CAPITAL" set in JetBrains Mono, uppercase, wide tracking
  (`0.18em`). The mono wordmark next to the geometric mark is the "tech" signal.
- Give the mark clear space; don't crowd it. Don't recolor the mark with the
  accent (the accent is for highlights, not fills).

### Swapping in the real logo
Your real logo is **black**, so on this dark site you need the **white version**.

1. Export a white-on-transparent `SVG` (or PNG) of your mark into `/public`,
   e.g. `/public/wayne-mark-white.svg`.
2. In `components/Logo.tsx`, replace the inline `<svg>…</svg>` with a `next/image`
   `<Image src="/wayne-mark-white.svg" … fill className="object-contain p-1.5" />`
   (instructions are in the file's header comment). Keep the wrapping `<span>`.
3. No white export? Add the Tailwind class `invert` to flip a black logo to
   white — though a true white export looks cleaner.

---

## Color

True-dark canvas, one electric accent. The accent is used **sparingly** — one
word, a thin rule, a status dot, an active/hover state. **Never large fills.**

| Token            | Value       | Role                                  |
| ---------------- | ----------- | ------------------------------------- |
| `ink`            | `#0A0A0C`   | Page canvas (true dark)               |
| `surface`        | `#0E0E12`   | Cards, raised bands                   |
| `surface-raised` | `#141419`   | Hover / nested surfaces               |
| `fg`             | `#FAFAFA`   | Primary text                          |
| `muted`          | `#9A9AA6`   | Body / secondary text                 |
| `dim`            | `#5A5A66`   | Labels, captions, disclaimers         |
| `accent`         | see below   | Highlights only — one word, rules, dots |

### The accent — re-theme the whole site from one line
The accent is a CSS variable in `app/globals.css`, written as **RGB channels**
(no commas) so Tailwind can apply opacity (`text-accent`, `border-accent/20`,
`bg-accent/10`):

```css
:root {
  --accent: 198 242 78;        /* electric lime (default) */
  /* --accent: 245 200 75; */  /* gold          */
  /* --accent: 78 178 255; */  /* electric blue */
}
```

Change that one line and the entire site re-themes — buttons, dots, rules, the
hero glow, the accent word in headlines. Tailwind exposes it as
`accent: rgb(var(--accent) / <alpha-value>)` in `tailwind.config.ts`.

---

## Type

Three families, each with a job. Big bold display + small wide-tracked mono
labels is the core of the modern look.

| Family                  | Tailwind        | CSS var          | Role                                            |
| ----------------------- | --------------- | ---------------- | ----------------------------------------------- |
| **Bricolage Grotesque** | `font-display`  | `--font-display` | Big, bold display headlines (H1/H2, stats)      |
| **Hanken Grotesk**      | `font-sans`     | `--font-sans`    | Body copy (the default on `<body>`)             |
| **JetBrains Mono**      | `font-mono`     | `--font-mono`    | Small uppercase labels / eyebrows / stats / nav |

Loaded via `next/font/google` in `app/layout.tsx` (zero layout shift, self-hosted).

### Conventions
- **Headlines:** `font-display`, bold/extrabold, tight tracking (`-0.02em` to
  `-0.03em`), tight leading. Let them be large.
- **Body:** `font-sans`, relaxed leading, `muted` color.
- **Labels / eyebrows:** the `.label` utility — `font-mono`, `11px`, uppercase,
  `tracking-label` (`0.24em`), `muted`. The eyebrow's leading rule and label can
  take the accent.
- Pair one big display headline with a small mono eyebrow above it. That contrast
  is the signature.

---

## Motion

Heavy but cheap — Tailwind + CSS keyframes + minimal React only, **no animation
libraries**. Everything respects `prefers-reduced-motion` (a global reduce block
in `globals.css` plus per-component guards).

- **Hero:** cursor-following accent glow, slow drifting aurora blob, faint masked
  grid (`components/HeroAtmosphere.tsx`).
- **Load:** staggered word-by-word reveal of the H1; eyebrow → headline → subhead
  → CTAs cascade.
- **Marquee:** infinite looping band of brand phrases.
- **Stats:** count-up on scroll (IntersectionObserver + rAF).
- **Sections:** scroll-reveal via `components/Reveal.tsx` (`.reveal` → `.is-visible`).
- **Cards:** lift + accent sheen sweep on hover (`.card` in `globals.css`).
- **Status dots:** pulsing accent for "Active" ventures.

Keep motion confident and unhurried. Ease-out curves, no bounce.
