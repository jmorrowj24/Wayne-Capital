import Reveal from "./Reveal";
import MediaSlot from "./MediaSlot";
import SplitSection from "./SplitSection";

export default function Philosophy() {
  return (
    <SplitSection id="approach" index="01" label="Who We Are" side="left" tone="warm">
      <Reveal>
        <h2 className="max-w-2xl font-serif text-[clamp(2.1rem,4.6vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-fg">
          Built for the long term.
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="max-w-xl space-y-6 text-lg leading-relaxed text-muted">
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
          <Reveal delay={160}>
            <p className="border-t border-white/10 pt-6 text-base text-dim">
              We&apos;re also building a small number of operating companies of our
              own.
            </p>
          </Reveal>
        </div>

        {/* Warm image block — the human side. Swap the photo in MediaSlot. */}
        <Reveal delay={120}>
          <div className="relative aspect-[5/4] overflow-hidden rounded-xl border border-white/10">
            <MediaSlot />
          </div>
        </Reveal>
      </div>
    </SplitSection>
  );
}
