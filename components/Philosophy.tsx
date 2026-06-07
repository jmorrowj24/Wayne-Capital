import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Philosophy() {
  return (
    <section id="approach" className="border-t border-white/10 py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading eyebrow="Who We Are" title="We are owners, not a fund." />

        <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
          <Reveal>
            <p>
              We invest our own capital. There are no outside investors, no fund
              to raise, and no clock forcing a sale. That freedom is the whole
              point: it lets us back good operators, hold what we buy, and let it
              compound for the long term.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              We are not chasing a quick exit. We buy businesses worth owning,
              support the people who run them, reinvest the cash they generate,
              and stay. Patience is our advantage — and we intend to keep it.
            </p>
          </Reveal>
        </div>

        {/* One subtle line about ventures — not a showcase. */}
        <Reveal delay={160}>
          <p className="mt-10 border-t border-white/10 pt-6 text-base text-dim">
            We&apos;re also building a small number of operating companies of our
            own.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
