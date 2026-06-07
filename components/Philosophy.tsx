import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section id="approach" className="relative overflow-hidden py-28 sm:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(21,39,63,0.9), transparent 75%)",
        }}
      />
      <div className="hairline absolute inset-x-0 top-0" />

      <div className="wrap relative">
        <Reveal>
          <span className="eyebrow">Investment Philosophy</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 max-w-5xl font-serif text-[clamp(2.25rem,6vw,4.75rem)] font-light leading-[1.04] tracking-[-0.02em] text-ivory">
            Patient Capital.{" "}
            <span className="text-slate-muted">Operational Discipline.</span>{" "}
            <span className="italic text-gold-light">Long-Term Ownership.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal delay={120} className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-slate-soft">
              Wayne Capital believes durable value is created through disciplined
              capital allocation, operational excellence, and a long-term
              ownership mindset. We are not chasing short-term trends. We are
              building a portfolio of businesses, real estate, and ventures
              designed to compound over decades.
            </p>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-5 lg:pl-10">
            <ul className="space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-10">
              {[
                ["Hold period", "Indefinite — we buy to own"],
                ["Posture", "Concentrated, not diversified for its own sake"],
                ["Edge", "Operating support, not just capital"],
              ].map(([k, v]) => (
                <li key={k} className="flex flex-col">
                  <span className="text-xs uppercase tracking-eyebrow text-gold">
                    {k}
                  </span>
                  <span className="mt-2 font-serif text-lg text-ivory">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
