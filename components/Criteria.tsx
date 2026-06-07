import Reveal from "./Reveal";

const criteria = [
  "Service businesses with durable demand",
  "$500K–$5M+ annual revenue",
  "Recurring customers",
  "Strong local reputation",
  "Existing management team",
  "Owner transition opportunities",
  "Real estate with cash flow or appreciation upside",
];

export default function Criteria() {
  return (
    <section id="criteria" className="relative py-28 sm:py-36">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold/60" />
              <span className="eyebrow">Acquisition Criteria</span>
            </div>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.015em] text-ivory">
              What we look for
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-slate-soft">
              A focused set of characteristics that signal durable value. If your
              business or asset reflects most of these, we should talk.
            </p>
            <a href="#contact" className="btn-ghost mt-10">
              Start a conversation
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] sm:grid-cols-2">
            {criteria.map((c, i) => (
              <Reveal key={c} delay={i * 70} as="li">
                <div className="flex h-full items-start gap-4 bg-navy-950/40 p-7 transition-colors duration-500 hover:bg-white/[0.03]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6.2l2.2 2.3 4.8-5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed text-slate-soft">{c}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
