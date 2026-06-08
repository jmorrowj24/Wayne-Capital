import Link from "next/link";
import Reveal from "./Reveal";

const paths = [
  {
    href: "/investors",
    label: "Investors & Projects",
    h: "Bring us an opportunity",
    p: "For owners and brokers with a business or real-estate project — and for partners looking to invest or build alongside us.",
    cta: "Explore opportunities →",
  },
  {
    href: "/careers",
    label: "Open Roles",
    h: "Build with us",
    p: "We're a growing firm. See where we're hiring and how to join the Wayne Capital team.",
    cta: "View open roles →",
  },
];

export default function Join() {
  return (
    <section id="join" className="bg-paper py-[84px] md:py-[120px]">
      <div className="wrap">
        <Reveal className="mx-auto max-w-[64ch] text-center">
          <div className="label">Join Wayne Capital</div>
          <h2 className="mt-[18px] text-[clamp(2.2rem,4.6vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.025em]">
            Two ways to work with us.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.href} delay={i * 80}>
              <Link
                href={p.href}
                className="group block h-full rounded-2xl border border-black/10 bg-cream p-10 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-white hover:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.4)]"
              >
                <div className="label">{p.label}</div>
                <h3 className="mt-3.5 text-[1.7rem] font-medium tracking-[-0.02em]">
                  {p.h}
                </h3>
                <p className="mt-3 text-[1.05rem] text-muted">{p.p}</p>
                <span className="mt-6 inline-block text-[0.95rem] font-semibold">
                  {p.cta}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
