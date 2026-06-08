import MediaSlot from "./MediaSlot";

// Cold "ticker" — words, not numbers (no fabricated market data).
const ticker = "PRIVATE · LONG-TERM · OPERATOR-LED · MIDWEST · OWNED, NOT FLIPPED";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid min-h-[100svh] grid-cols-1 lg:grid-cols-2">
        {/* ───────────── COLD · Wall Street (left / top) ───────────── */}
        <div className="relative flex min-h-[56svh] flex-col justify-center overflow-hidden bg-base px-6 pb-16 pt-28 sm:px-10 lg:min-h-0 lg:px-14 lg:pt-0">
          {/* faint data-grid texture, faded toward the divide */}
          <div
            className="grid-texture pointer-events-none absolute inset-0 opacity-70"
            style={{
              maskImage:
                "linear-gradient(to right, #000 30%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, #000 30%, transparent 100%)",
            }}
          />
          {/* ticker strip */}
          <div className="pointer-events-none absolute inset-x-0 top-20 overflow-hidden lg:top-10">
            <p className="whitespace-nowrap px-6 font-mono text-[10px] uppercase tracking-[0.3em] text-dim sm:px-10 lg:px-14">
              {ticker} · {ticker}
            </p>
          </div>

          <div className="relative animate-fade-up opacity-0 lg:text-right">
            <span className="label font-mono text-muted">
              Private Investment Company
            </span>
            <h1 className="mt-6 font-mono text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[1.08] tracking-tight text-fg">
              Too small
              <br className="hidden sm:block" /> for Wall Street.
            </h1>
          </div>
        </div>

        {/* ───────────── WARM · Main Street / you (right / bottom) ───────────── */}
        <div className="relative flex min-h-[60svh] flex-col justify-center overflow-hidden px-6 pb-20 pt-12 sm:px-10 lg:min-h-0 lg:px-14 lg:pt-0">
          <MediaSlot />

          <div
            className="relative z-10 max-w-xl animate-fade-up opacity-0"
            style={{ animationDelay: "160ms" }}
          >
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.25rem)] font-light italic leading-[1.0] text-accent">
              Just right
              <br /> for you.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-fg/85 sm:text-lg">
              Wayne Capital acquires and builds established businesses across the
              Midwest — the ones too small for the big funds and too important to
              flip. We keep the teams that made them great and grow them for the
              long term.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="btn-primary">
                Let&apos;s Talk
                <Arrow />
              </a>
              <a href="#what-we-do" className="btn-ghost">
                See What We Buy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ───────────── The divide ───────────── */}
      {/* Desktop: vertical hairline drawing down, with a gold node. */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="h-full w-px origin-top animate-draw-y bg-white/15" />
        <span className="divider-node absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 animate-fade-in opacity-0" />
      </div>
      {/* Mobile: horizontal seam hairline with a gold node at the world boundary. */}
      <div className="pointer-events-none absolute inset-x-0 top-[56svh] flex -translate-y-1/2 items-center lg:hidden">
        <div className="h-px w-full origin-left animate-draw-x bg-white/15" />
        <span className="divider-node absolute left-1/2 -translate-x-1/2 rotate-45" />
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
