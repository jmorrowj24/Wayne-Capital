import Reveal from "./Reveal";
import SplitSection from "./SplitSection";

const pillars = [
  {
    n: "01",
    title: "Business Acquisitions",
    body: "We acquire and improve durable service businesses with strong fundamentals, recurring demand, and long-term growth potential.",
  },
  {
    n: "02",
    title: "Real Estate",
    body: "We acquire and operate residential, multifamily, and commercial real estate, focusing on durable cash flow and long-term value in select Midwest markets.",
  },
  {
    n: "03",
    title: "Public Markets",
    body: "We build concentrated ownership positions in exceptional public companies with durable competitive advantages.",
  },
  {
    n: "04",
    title: "New Ventures",
    body: "We build and back operating companies where we see meaningful inefficiency and opportunity.",
  },
];

export default function WhatWeDo() {
  return (
    <SplitSection id="what-we-do" index="02" label="What We Do" side="right" tone="cold">
      <Reveal>
        <h2 className="max-w-2xl font-serif text-[clamp(2.1rem,4.6vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-fg">
          Four disciplines. One long-term owner.
        </h2>
      </Reveal>

      {/* Cold / structured: a monospace ledger of capabilities. */}
      <div className="mt-12 border-t border-white/10">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="group grid grid-cols-1 gap-3 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[auto_1fr] sm:gap-8">
              <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                <span className="font-mono text-xs text-accent">{p.n}</span>
                <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-fg sm:w-44">
                  {p.title}
                </h3>
              </div>
              <p className="max-w-2xl leading-relaxed text-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SplitSection>
  );
}
