import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    n: "01",
    title: "Business Acquisitions",
    body: "We acquire and improve durable service businesses with strong fundamentals, recurring demand, and long-term growth potential.",
    icon: IconBusiness,
  },
  {
    n: "02",
    title: "Real Estate",
    body: "We invest in residential, multifamily, commercial, and value-add real estate opportunities in growing markets.",
    icon: IconRealEstate,
  },
  {
    n: "03",
    title: "Public Markets",
    body: "We build concentrated ownership positions in exceptional public companies with durable competitive advantages.",
    icon: IconMarkets,
  },
  {
    n: "04",
    title: "Venture Building",
    body: "We launch and scale businesses where we see meaningful inefficiency and opportunity.",
    icon: IconVentures,
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-b border-white/[0.06] py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading
          eyebrow="What We Do"
          title="Four disciplines. One long-term owner."
          intro="We put capital into operating businesses, real assets, public equities, and new ventures — and we hold what we build."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="card group h-full p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-accent transition-colors duration-500 group-hover:border-accent/40">
                    <p.icon />
                  </span>
                  <span className="font-mono text-xs text-dim">{p.n}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-fg">
                  {p.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconBusiness() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 11h.01M15 11h.01" />
    </svg>
  );
}
function IconRealEstate() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-5h4v5" />
    </svg>
  );
}
function IconMarkets() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <path d="M4 19h16M5 16l4-5 3 3 6-8" />
      <path d="M21 5v4h-4" />
    </svg>
  );
}
function IconVentures() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8.9.8 1.6h5.4c0-.7.3-1.2.8-1.6A6 6 0 0 0 12 3Z" />
    </svg>
  );
}
