import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Philosophy() {
  return (
    <section id="approach" className="border-t border-white/10 py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading eyebrow="Who We Are" title="Built for the long term." />

        <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
          <Reveal>
            <p>
              We acquire established businesses and keep what makes them work — the
              people, the name, and the standards that earned their customers. We
              invest our own capital, so we answer only to the business itself.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Then we stay. We support the teams who run these companies, reinvest
              the cash they generate, and grow them patiently — year after year,
              not quarter to quarter. We are here to own and build, for the long
              term.
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
