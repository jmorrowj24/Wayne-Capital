import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const criteria = [
  "Service businesses with durable demand",
  "$500K–$5M+ annual revenue",
  "Recurring customers",
  "Strong local reputation",
  "Existing management team",
  "Owner transition or succession opportunities",
  "Real estate with cash flow or appreciation upside",
];

export default function Criteria() {
  return (
    <section
      id="what-we-look-for"
      className="border-t border-white/10 py-24 sm:py-32"
    >
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="What We Look For"
            title="What we look for"
            intro="If you own, broker, or operate a business that fits, we want to hear from you. We move quickly, keep it confidential, and deal directly."
          />
          <Reveal delay={120}>
            <a href="#contact" className="btn-primary mt-9">
              Submit an Opportunity
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] sm:grid-cols-2">
            {criteria.map((c, i) => (
              <Reveal key={c} delay={i * 60} as="li">
                <div className="flex h-full items-start gap-4 bg-gradient-to-b from-surface to-surface-raised p-6 transition-colors duration-500 hover:from-surface-raised">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6.2l2.2 2.3 4.8-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed text-muted">{c}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
