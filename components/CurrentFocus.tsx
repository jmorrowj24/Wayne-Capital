import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const focus = [
  {
    n: "I",
    title: "Service Business Acquisitions",
    body: "Targeting service businesses with recurring customers, strong local brands, and opportunities for operational improvement.",
  },
  {
    n: "II",
    title: "Real Estate Expansion",
    body: "Seeking residential, multifamily, and commercial assets in attractive Midwest growth markets.",
  },
  {
    n: "III",
    title: "Technology Ventures",
    body: "Building scalable software and marketplace businesses that solve real operational problems.",
  },
];

export default function CurrentFocus() {
  return (
    <section className="relative bg-navy-900 py-28 sm:py-36">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="wrap">
        <SectionHeading
          eyebrow="Current Focus"
          title="Where we are deploying capital today."
        />

        <div className="mt-16 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {focus.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group grid items-baseline gap-4 py-10 transition-colors duration-500 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-1">
                  <span className="font-serif text-2xl text-gold/70 transition-colors duration-500 group-hover:text-gold-light">
                    {f.n}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-light text-ivory md:col-span-4">
                  {f.title}
                </h3>
                <p className="leading-relaxed text-slate-soft md:col-span-7">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
