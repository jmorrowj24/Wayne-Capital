import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Investors & Projects — Wayne Capital",
  description:
    "For owners and brokers bringing a business or real-estate project, and for partners exploring working alongside Wayne Capital. Introductory conversations only.",
};

const sectors = [
  "Home & Commercial Services",
  "Skilled Trades & Contracting",
  "Light Industrial & Manufacturing",
  "Distribution & Logistics",
  "Essential B2B Services",
  "Multifamily & Commercial Real Estate",
];

const steps = [
  {
    n: "01",
    h: "Introduction",
    p: "A short, confidential conversation about your business, project, or idea — no commitment, no pressure.",
  },
  {
    n: "02",
    h: "Review",
    p: "We study the fundamentals and share a clear, honest view of fit, timing, and how a deal or partnership could be structured.",
  },
  {
    n: "03",
    h: "Decision",
    p: "If it's a fit, we move quickly and respectfully toward terms. If it isn't, you'll know fast — and why.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Intro */}
        <section className="bg-paper pb-16 pt-[140px] md:pb-20">
          <div className="wrap max-w-[64ch]">
            <div className="label">Investors &amp; Projects</div>
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.025em]">
              Bring us an opportunity.
            </h1>
            <p className="mt-6 text-[1.15rem] leading-relaxed text-muted">
              For owners and brokers with an established business or a
              real-estate project — and for partners who want to build alongside
              us. We invest our own capital, move quickly, and keep every
              conversation confidential.
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
              If you&rsquo;re a potential capital partner, we&rsquo;re always glad
              to start an <span className="text-ink">introductory conversation</span>{" "}
              — a chance to get to know each other, nothing more.
            </p>
          </div>
        </section>

        {/* What we look for */}
        <section className="bg-cream py-[84px] md:py-[110px]">
          <div className="wrap">
            <Reveal className="max-w-[64ch]">
              <div className="label">What We Look For</div>
              <h2 className="mt-[18px] text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium tracking-[-0.02em]">
                Established Main Street businesses and real assets.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((s, i) => (
                <Reveal key={s} delay={i * 50}>
                  <div className="flex h-full items-baseline gap-4 bg-cream px-[26px] py-[28px]">
                    <span className="text-xs font-semibold text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.05rem] font-medium">{s}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-7 text-[0.95rem] text-faint">
              Don&rsquo;t see your exact category? If it&rsquo;s an established
              business with steady cash flow, we&rsquo;d still like to hear from
              you.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-paper py-[84px] md:py-[110px]">
          <div className="wrap">
            <Reveal className="max-w-[64ch]">
              <div className="label">How It Works</div>
              <h2 className="mt-[18px] text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium tracking-[-0.02em]">
                A simple, respectful process.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[14px] border border-black/10 bg-black/10 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 70}>
                  <div className="h-full bg-paper px-[26px] py-[34px]">
                    <div className="text-xs font-semibold text-faint">{s.n}</div>
                    <h3 className="mt-3.5 text-[1.25rem] font-semibold tracking-[-0.01em]">
                      {s.h}
                    </h3>
                    <p className="mt-2 text-muted">{s.p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="bg-cream py-[84px] md:py-[110px]">
          <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="label">Start a Conversation</div>
              <h2 className="mt-[18px] text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium tracking-[-0.02em]">
                Tell us what you&rsquo;re working on.
              </h2>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted">
                Share a few details and we&rsquo;ll follow up personally. Whether
                it&rsquo;s a business, a property, or a partnership idea, every
                note is read by a principal.
              </p>
              <div className="mt-10 space-y-4 border-t border-black/10 pt-8">
                {[
                  ["Confidential", "Held in strict confidence, always."],
                  ["Direct", "You speak with principals, not intermediaries."],
                  ["No obligation", "An introduction, not a commitment."],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    <p className="text-sm leading-relaxed text-muted">
                      <span className="text-ink">{k}.</span> {v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <LeadForm
                types={["Business", "Real estate", "Partnership"]}
                submitLabel="Send"
                messagePlaceholder="Tell us about the business, property, or partnership idea."
                disclaimer={
                  <>
                    Nothing on this page is an offer to sell or a solicitation of
                    an offer to buy any security, or an offer of any investment or
                    partnership. Wayne Capital is a private firm that invests its
                    own capital; any partnership or co-investment is explored only
                    through direct, individual discussions. This page is
                    informational only.
                  </>
                }
              />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
