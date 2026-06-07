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
    <section id="portfolio" className="border-b border-white/[0.06] py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading
          eyebrow="Companies"
          title="Companies we are building."
          intro="Operating companies built in-house to solve real problems in large, fragmented markets — owned and developed for the long term."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={i * 100}>
              <article className="card group flex h-full flex-col p-8 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] font-display text-lg font-bold text-fg transition-colors duration-500 group-hover:border-accent/40">
                    {v.initials}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-label text-dim">
                    {v.category}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-fg">
                  {v.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{v.body}</p>

                <div className="mt-8 flex items-center gap-2.5 border-t border-white/[0.06] pt-5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-accent-pulse" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-label text-muted">
                    Active
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
