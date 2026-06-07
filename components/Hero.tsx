export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Soft dark glow for depth — calm, no animation. */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[30%] h-[620px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgb(var(--accent) / 0.10), transparent 68%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-base" />
      </div>

      <div className="wrap relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow label */}
          <div
            className="flex animate-fade-up items-center gap-3 opacity-0"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-px w-8 bg-accent" />
            <span className="label text-accent">Private Investment Company</span>
          </div>

          {/* H1 — calm serif; "Own." carries the gold. */}
          <h1
            className="mt-7 animate-fade-up font-serif text-[clamp(3rem,10vw,7.5rem)] font-light leading-[0.98] tracking-[-0.02em] text-fg opacity-0"
            style={{ animationDelay: "120ms" }}
          >
            Buy. Build. <span className="italic text-accent">Own.</span>
          </h1>

          {/* Subhead */}
          <p
            className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted opacity-0 sm:text-xl"
            style={{ animationDelay: "280ms" }}
          >
            Wayne Capital is a private investment company that acquires
            businesses, invests in real estate, takes positions in public
            companies, and builds new ventures — and holds them for the long
            term.
          </p>

          {/* One primary CTA + a quiet secondary link. */}
          <div
            className="mt-10 flex animate-fade-up flex-col gap-4 opacity-0 sm:flex-row sm:items-center sm:gap-8"
            style={{ animationDelay: "440ms" }}
          >
            <a href="#contact" className="btn-primary">
              Submit an Opportunity
              <Arrow />
            </a>
            <a
              href="#approach"
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-muted transition-colors duration-300 hover:text-fg"
            >
              Our Approach
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                <Arrow />
              </span>
            </a>
          </div>
        </div>
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
