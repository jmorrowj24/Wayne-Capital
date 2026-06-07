import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const principles = [
  "We buy to own — not to flip",
  "Operators lead; we back them",
  "No outside investors, no clock",
  "Capital that compounds quietly",
];

export default function Philosophy() {
  return (
    <section id="thesis" className="border-b border-white/[0.06] py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading eyebrow="Thesis" title="We are not a fund. We are owners." />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted">
            <p>
              A fund raises other people&apos;s money, charges fees, and races a
              clock to give it back. We are the opposite. Wayne Capital holds its
              own capital and answers to no one else. There is no fund to close,
              no investors to placate, and no date by which we are forced to sell.
            </p>
            <p>
              We buy good businesses and back the operators who run them. We own
              real estate and reinvest the cash it produces. We take concentrated
              positions in companies we understand and let them work. Nothing here
              is built to be flipped. It is built to be owned — and to compound,
              quietly, over decades.
            </p>
          </Reveal>

          <Reveal className="space-y-px" delay={120}>
            {principles.map((p, i) => (
              <div
                key={p}
                className="group flex items-baseline gap-5 border-t border-white/[0.06] py-5 transition-colors duration-300 hover:border-accent/30"
              >
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <span className="font-display text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                  {p}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
