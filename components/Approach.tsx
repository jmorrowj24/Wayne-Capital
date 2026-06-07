import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const criteria = [
  "Service businesses with durable demand",
  "$500K–$5M+ annual revenue",
  "Recurring customers",
  "Strong local reputation",
  "Existing management team",
  "Owner transition opportunities",
  "Real estate with cash flow or appreciation upside",
];

export default function Approach() {
  return (
    <section id="approach" className="border-b border-white/[0.06] py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading
          eyebrow="Approach"
          title="Patient capital. Operational discipline. Long-term ownership."
          intro="We allocate capital with discipline, run what we own with rigor, and let good businesses compound over decades. The work is unglamorous and the horizon is long — which is exactly the point."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
                What we look for
              </h3>
              <p className="mt-5 max-w-md leading-relaxed text-muted">
                A focused set of characteristics that signal durable value. If
                your business or asset reflects most of these, we should talk.
              </p>
              <a href="#contact" className="btn-ghost mt-9">
                Start a conversation
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2">
              {criteria.map((c, i) => (
                <Reveal key={c} delay={i * 60} as="li">
                  <div className="flex h-full items-start gap-4 bg-surface p-6 transition-colors duration-500 hover:bg-surface-raised">
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
      </div>
    </section>
  );
}
