import HeroAtmosphere from "./HeroAtmosphere";

const words = [
  { text: "Buy.", accent: false },
  { text: "Build.", accent: false },
  { text: "Own.", accent: true },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <HeroAtmosphere />

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

          {/* H1 — each word animates in; "Own." in the accent. */}
          <h1 className="mt-7 font-display text-[clamp(3.25rem,11vw,8.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
            {words.map((w, i) => (
              <span
                key={w.text}
                className={`mr-[0.28em] inline-block animate-fade-up opacity-0 ${
                  w.accent ? "text-accent" : "text-fg"
                }`}
                style={{ animationDelay: `${140 + i * 130}ms` }}
              >
                {w.text}
              </span>
            ))}
          </h1>

          {/* Subhead */}
          <p
            className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted opacity-0 sm:text-xl"
            style={{ animationDelay: "560ms" }}
          >
            Wayne Capital acquires businesses, invests in real estate, takes
            positions in public companies, and builds new ventures — and holds
            them for the long term.{" "}
            <span className="text-fg">
              No funds. No flipping. No expiration date.
            </span>
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex animate-fade-up flex-col gap-3 opacity-0 sm:flex-row sm:items-center"
            style={{ animationDelay: "680ms" }}
          >
            <a href="#contact" className="btn-primary">
              Submit an Opportunity
              <Arrow />
            </a>
            <a href="#operators" className="btn-ghost">
              For Operators
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-fade-in flex-col items-center gap-2 opacity-0 sm:flex"
        style={{ animationDelay: "1000ms" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-label text-dim">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-dim to-transparent" />
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
