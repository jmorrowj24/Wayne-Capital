export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />
        <div
          className="absolute -top-40 left-1/2 h-[640px] w-[920px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(197,165,114,0.16), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="wrap relative z-10 flex min-h-[100svh] flex-col justify-center pb-24 pt-32">
        <div className="max-w-4xl">
          <div className="flex animate-fade-in items-center gap-4 opacity-0">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow">Private Investment Company</span>
          </div>

          <h1 className="mt-8 animate-fade-up font-serif text-[clamp(3.25rem,9vw,7rem)] font-light leading-[0.98] tracking-[-0.02em] text-ivory opacity-0">
            Wayne Capital
          </h1>

          <p
            className="mt-6 animate-fade-up font-serif text-[clamp(1.5rem,3.4vw,2.5rem)] font-light italic leading-tight text-gold-light opacity-0"
            style={{ animationDelay: "120ms" }}
          >
            Buy. Build. Own.
          </p>

          <p
            className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-soft opacity-0 sm:text-xl"
            style={{ animationDelay: "220ms" }}
          >
            Wayne Capital is a private investment company focused on acquiring
            businesses, investing in real estate, launching new ventures, and
            compounding capital for the long term.
          </p>

          <div
            className="mt-12 flex animate-fade-up flex-col gap-4 opacity-0 sm:flex-row sm:items-center"
            style={{ animationDelay: "320ms" }}
          >
            <a href="#contact" className="btn-primary">
              Submit an Opportunity
              <Arrow />
            </a>
            <a href="#approach" className="btn-ghost">
              Our Approach
            </a>
          </div>
        </div>

        {/* Foundational pillars strip */}
        <div
          className="mt-20 grid max-w-3xl animate-fade-up grid-cols-2 gap-x-8 gap-y-8 border-t border-white/[0.07] pt-10 opacity-0 sm:grid-cols-4"
          style={{ animationDelay: "440ms" }}
        >
          {[
            ["Businesses", "Acquired & operated"],
            ["Real Estate", "Owned long-term"],
            ["Public Markets", "Concentrated"],
            ["Ventures", "Built from zero"],
          ].map(([title, sub]) => (
            <div key={title}>
              <p className="font-serif text-base text-ivory">{title}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-muted">
                {sub}
              </p>
            </div>
          ))}
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
