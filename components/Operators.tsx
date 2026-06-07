import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    title: "Run the business",
    body: "You hold the wheel. We do not parachute in managers or run the company by committee. The operator who knows the business runs the business.",
  },
  {
    title: "Real ownership",
    body: "Meaningful equity, not a token grant. When the business compounds, you compound with it. Incentives are aligned because ownership is shared.",
  },
  {
    title: "Permanent backing",
    body: "Capital that does not expire and a partner that does not flip. We are here for the long arc — through cycles, reinvestment, and the patient work of building.",
  },
];

export default function Operators() {
  return (
    <section id="operators" className="border-b border-white/[0.06] py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading
          eyebrow="For Operators"
          title="Operators, not spectators."
          intro="We back people who run things, not people who watch them. If you operate a great business, we want to own it with you — and let you keep building it."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <div className="card h-full p-8">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-fg">
                  {it.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12">
            <a href="#contact" className="btn-primary">
              Start a conversation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
