import MediaSlot from "./MediaSlot";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Cinematic full-bleed background. Swap the image in MediaSlot/ /public. */}
      <MediaSlot />

      <div className="wrap relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div
            className="flex animate-fade-up items-center gap-3 opacity-0"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-px w-8 bg-accent" />
            <span className="label text-accent">Private Investment Company</span>
          </div>

          {/* H1 — two calm serif lines; the second carries the gold. */}
          <h1
            className="mt-7 animate-fade-up font-serif text-[clamp(2.5rem,6.2vw,5.25rem)] font-light leading-[1.04] tracking-[-0.02em] text-fg opacity-0"
            style={{ animationDelay: "120ms" }}
          >
            Too small for Wall Street.
            <br />
            <span className="italic text-accent">Just right for you.</span>
          </h1>

          {/* Subhead */}
          <p
            className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted opacity-0 sm:text-xl"
            style={{ animationDelay: "280ms" }}
          >
            Wayne Capital acquires and builds established businesses across the
            Midwest — the ones too small for the big funds and too important to
            flip. We keep the teams that made them great and grow them for the
            long term.
          </p>

          {/* Primary + secondary CTA. */}
          <div
            className="mt-10 flex animate-fade-up flex-col gap-4 opacity-0 sm:flex-row sm:items-center"
            style={{ animationDelay: "440ms" }}
          >
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
