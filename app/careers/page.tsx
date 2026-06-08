import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";

// ─────────────────────────────────────────────────────────────────────────
// OPEN ROLES — edit this array to add / remove roles. Set it to [] to show the
// graceful "no open roles right now" state. Each role: title, location, type,
// and a short description.
// ─────────────────────────────────────────────────────────────────────────
const roles = [
  {
    title: "Acquisitions Associate",
    location: "Midwest · Hybrid",
    type: "Full-time",
    description:
      "Source, evaluate, and help close acquisitions of established Main Street businesses. Build models, run diligence, and work directly with owners.",
  },
  {
    title: "Operating Partner",
    location: "Midwest · On-site",
    type: "Full-time",
    description:
      "Step into an acquired business and help run and grow it alongside the existing team — operations, hiring, and steady, durable growth.",
  },
];

export const metadata: Metadata = {
  title: "Open Roles — Wayne Capital",
  description:
    "Work at Wayne Capital — a private investment firm bringing Wall Street discipline to Main Street businesses across the Midwest.",
};

export default function CareersPage() {
  const hasRoles = roles.length > 0;

  return (
    <>
      <Nav />
      <main>
        {/* Intro */}
        <section className="bg-paper pb-16 pt-[140px] md:pb-20">
          <div className="wrap max-w-[64ch]">
            <div className="label">Open Roles</div>
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.025em]">
              Build with us.
            </h1>
            <p className="mt-6 text-[1.15rem] leading-relaxed text-muted">
              Wayne Capital is a small, growing firm. We buy and build essential
              Main Street businesses across the Midwest — and we hire people who
              want real ownership of their work, close to the businesses we back.
            </p>
          </div>
        </section>

        {/* Roles */}
        <section className="bg-cream py-[84px] md:py-[110px]">
          <div className="wrap">
            <Reveal className="max-w-[64ch]">
              <div className="label">{hasRoles ? "Now Hiring" : "Roles"}</div>
              <h2 className="mt-[18px] text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium tracking-[-0.02em]">
                {hasRoles ? "Where we're hiring." : "No open roles right now."}
              </h2>
            </Reveal>

            {hasRoles ? (
              <div className="mt-12 border-t border-black/10">
                {roles.map((r, i) => (
                  <Reveal key={r.title} delay={i * 70}>
                    <div className="grid grid-cols-1 gap-4 border-b border-black/10 py-8 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
                      <div>
                        <h3 className="text-[1.4rem] font-medium tracking-[-0.01em]">
                          {r.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-faint">
                          <span>{r.location}</span>
                          <span aria-hidden>·</span>
                          <span>{r.type}</span>
                        </div>
                        <p className="mt-3 max-w-[60ch] text-muted">
                          {r.description}
                        </p>
                      </div>
                      <a href="#apply" className="btn btn-line justify-self-start md:justify-self-end">
                        Apply →
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <p className="mt-6 max-w-[56ch] text-[1.15rem] leading-relaxed text-muted">
                  We don&rsquo;t have a specific opening posted at the moment — but
                  we&rsquo;re always glad to meet good people. Tell us about
                  yourself below and we&rsquo;ll keep you in mind as we grow.
                </p>
              </Reveal>
            )}
          </div>
        </section>

        {/* Apply */}
        <section id="apply" className="bg-paper py-[84px] md:py-[110px]">
          <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="label">Apply</div>
              <h2 className="mt-[18px] text-[clamp(1.8rem,3.6vw,2.8rem)] font-medium tracking-[-0.02em]">
                {hasRoles ? "Tell us about yourself." : "Send us your info."}
              </h2>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted">
                {hasRoles
                  ? "Pick the role you're interested in, add a short note, and attach links if you'd like. A principal reads every application."
                  : "No open role today is fine. Share your background and what you're looking for, and we'll reach out when there's a fit."}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <LeadForm
                types={hasRoles ? [...roles.map((r) => r.title), "General interest"] : undefined}
                contextLine={hasRoles ? undefined : "Careers — general interest (no specific role)"}
                hidden={{ source: "careers" }}
                submitLabel="Submit application"
                messagePlaceholder="A short note about you — and a link to your resume or LinkedIn."
                successTitle="Application received."
                successText="Thanks for your interest in Wayne Capital. We read every application personally and will be in touch if there's a fit."
                disclaimer={
                  <>
                    Wayne Capital is an equal-opportunity employer. Submitting this
                    form is an application for employment only and is not an offer
                    or solicitation of any investment or security.
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
