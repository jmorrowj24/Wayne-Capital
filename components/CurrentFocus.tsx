import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const focus = [
  {
    n: "I",
    title: "Service Business Acquisitions",
    body: "Service businesses with recurring customers, strong local brands, and clear room for operational improvement.",
  },
  {
    n: "II",
    title: "Real Estate Expansion",
    body: "Residential, multifamily, and commercial assets in attractive Midwest growth markets.",
  },
  {
    n: "III",
    title: "Technology Ventures",
    body: "Scalable software and marketplace businesses that solve real operational problems.",
  },
];

export default function CurrentFocus() {
  return (
    <section className="border-b border-white/[0.06] bg-surface py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading
          eyebrow="Current Focus"
          title="Where we are deploying capital today."
        />

        <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {focus.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="group grid items-baseline gap-3 py-9 transition-colors duration-500 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-1">
                  <span className="font-mono text-lg text-accent">{f.n}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-fg md:col-span-4">
                  {f.title}
                </h3>
                <p className="leading-relaxed text-muted md:col-span-7">
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
