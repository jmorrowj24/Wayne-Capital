import Reveal from "./Reveal";

const sectors = [
  {
    n: "01",
    h: "Home & Commercial Services",
    p: "Essential, recurring-demand service businesses.",
  },
  {
    n: "02",
    h: "Skilled Trades & Contracting",
    p: "Established trade and contracting operations.",
  },
  {
    n: "03",
    h: "Light Industrial & Manufacturing",
    p: "Niche manufacturers and industrial suppliers.",
  },
  {
    n: "04",
    h: "Distribution & Logistics",
    p: "Regional distribution and supply businesses.",
  },
  {
    n: "05",
    h: "Essential B2B Services",
    p: "Sticky, repeat-revenue business services.",
  },
  {
    n: "06",
    h: "Multifamily & Commercial Real Estate",
    p: "Cash-flowing real assets in growing markets.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what" className="bg-cream py-[84px] md:py-[120px]">
      <div className="wrap">
        <Reveal className="max-w-[64ch]">
          <div className="label">What We Do</div>
          <h2 className="mt-[18px] text-[clamp(2rem,4vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.02em]">
            What we focus on.
          </h2>
          <p className="mt-5 max-w-[54ch] text-[1.15rem] text-muted">
            A private investment firm focused on established, cash-flowing
            businesses and real assets across the Midwest. We acquire, invest in
            growth, and build lasting value.
          </p>
        </Reveal>

        {/* Sectors grid — 1px gridlines via gap on a line-colored bg. */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.h} delay={i * 60}>
              <div className="group h-full bg-cream px-[26px] py-[30px] transition-colors duration-300 hover:bg-white">
                <div className="text-xs font-semibold tracking-[0.04em] text-faint">
                  {s.n}
                </div>
                <h3 className="mt-3.5 text-[1.2rem] font-semibold tracking-[-0.01em]">
                  {s.h}
                </h3>
                <p className="mt-1.5 text-[0.95rem] text-muted">{s.p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-[0.95rem] text-faint">
          Don&rsquo;t see your exact category? If it&rsquo;s an established Main
          Street business with steady cash flow, we&rsquo;d still like to hear
          from you.
        </p>
      </div>
    </section>
  );
}
