import Reveal from "./Reveal";
import SplitSection from "./SplitSection";

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
    <SplitSection
      id="what-we-look-for"
      index="03"
      label="What We Look For"
      side="left"
      tone="cold"
    >
      <Reveal>
        <h2 className="max-w-2xl font-serif text-[clamp(2.1rem,4.6vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-fg">
          What we look for
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          If you own, broker, or operate a business that fits, we want to hear from
          you. We move quickly, keep it confidential, and deal directly.
        </p>
      </Reveal>

      {/* Cold / structured: a monospace spec sheet. */}
      <div className="mt-12 grid gap-x-10 border-t border-white/10 sm:grid-cols-2">
        {criteria.map((c, i) => (
          <Reveal key={c} delay={i * 60}>
            <div className="flex items-baseline gap-4 border-b border-white/10 py-4">
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-sm leading-relaxed text-fg/90">
                {c}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <a href="#contact" className="btn-primary mt-10">
          Submit an Opportunity
        </a>
      </Reveal>
    </SplitSection>
  );
}
