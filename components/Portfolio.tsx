import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ventures = [
  {
    name: "First Turn",
    initials: "FT",
    category: "Operations Platform",
    body: "Apartment turnover operations platform.",
  },
  {
    name: "Best & Final",
    initials: "BF",
    category: "Acquisition Marketplace",
    body: "Ownership free agency marketplace for business acquisitions.",
  },
  {
    name: "Move Match",
    initials: "MM",
    category: "Demand Network",
    body: "Private homeowner demand discovery network.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 sm:py-36">
      <div className="wrap">
        <SectionHeading
          eyebrow="Venture Portfolio"
          title="Companies we are building."
          intro="Operating companies built in-house to solve real problems in large, fragmented markets — owned and developed for the long term."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={i * 100}>
              <article className="card group flex h-full flex-col p-8 sm:p-9">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold/25 font-serif text-lg text-gold-light"
                    style={{
                      background:
                        "linear-gradient(140deg, rgba(197,165,114,0.12), rgba(255,255,255,0.02))",
                    }}
                  >
                    {v.initials}
                  </span>
                  <span className="text-[10px] uppercase tracking-eyebrow text-slate-muted">
                    {v.category}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-2xl font-light text-ivory">
                  {v.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-soft">
                  {v.body}
                </p>

                <div className="mt-8 flex items-center gap-2 border-t border-white/[0.07] pt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-xs uppercase tracking-wider text-slate-muted">
                    Wayne Capital Venture
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
