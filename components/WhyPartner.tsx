import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    title: "Long-Term Mindset",
    body: "We make decisions with decades in mind.",
    icon: IconClock,
  },
  {
    title: "Operational Expertise",
    body: "We focus on creating value after acquisition.",
    icon: IconGears,
  },
  {
    title: "Flexible Structures",
    body: "We tailor solutions to each situation.",
    icon: IconStructure,
  },
  {
    title: "Confidential Conversations",
    body: "Every opportunity is handled professionally and privately.",
    icon: IconLock,
  },
];

export default function WhyPartner() {
  return (
    <section className="relative bg-navy-900 py-28 sm:py-36">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="wrap">
        <SectionHeading
          eyebrow="Why Partner With Us"
          title="A buyer you can trust with what you built."
          align="center"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <article className="card h-full p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-gold">
                  <r.icon />
                </span>
                <h3 className="mt-7 font-serif text-xl font-light text-ivory">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-soft">
                  {r.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function IconGears() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
    </svg>
  );
}
function IconStructure() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <rect x="9" y="3" width="6" height="6" rx="1" />
      <rect x="3" y="15" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M12 9v3M12 12H6v3M12 12h6v3" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
