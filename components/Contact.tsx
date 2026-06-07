"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const opportunityTypes = [
  "Business Acquisition",
  "Real Estate",
  "Public Markets",
  "Venture",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-b border-white/[0.06] py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="label text-accent">Contact</span>
            </div>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.02em] text-fg">
              Have an opportunity?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              We welcome conversations with business owners, brokers, operators,
              real estate professionals, and strategic partners.
            </p>

            <div className="mt-10 space-y-4 border-t border-white/[0.06] pt-8">
              {[
                ["Confidential", "Every conversation is held in strict confidence."],
                ["Direct", "You speak with principals, not intermediaries."],
                ["No obligation", "An introduction, not a commitment."],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-muted">
                    <span className="text-fg">{k}.</span> {v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="card p-8 sm:p-10">
              {status === "success" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/50 text-accent">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12.5l4.5 4.5L19 7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-fg">
                    Thank you.
                  </h3>
                  <p className="mt-3 max-w-sm text-muted">
                    Your opportunity has been received. We review every submission
                    personally and will be in touch if there&apos;s a fit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label="Name"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your full name"
                    />
                    <Field
                      label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label="Phone"
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="(000) 000-0000"
                    />
                    <div>
                      <Label>Opportunity Type</Label>
                      <select
                        value={form.type}
                        onChange={update("type")}
                        className="input appearance-none"
                      >
                        <option value="" disabled>
                          Select a type
                        </option>
                        {opportunityTypes.map((t) => (
                          <option key={t} value={t} className="bg-surface-raised">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label required>Message</Label>
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      rows={5}
                      placeholder="Tell us about the business, asset, or opportunity."
                      className="input resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-accent">
                      Please complete name, email, and a brief message.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full disabled:opacity-60"
                  >
                    {status === "submitting" ? "Submitting…" : "Submit Opportunity"}
                  </button>
                  <p className="text-center text-xs leading-relaxed text-dim">
                    Wayne Capital is a private investment company. This form is for
                    opportunity sourcing only and is not an offer or solicitation
                    of any kind.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          margin-top: 0.5rem;
          border-radius: 0.625rem;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.02);
          padding: 0.85rem 1rem;
          color: #FAFAFA;
          font-size: 0.95rem;
          outline: none;
          transition: border-color .3s, background .3s;
        }
        .input::placeholder { color: #5A5A66; }
        .input:focus {
          border-color: rgb(var(--accent) / 0.55);
          background: rgba(255,255,255,0.035);
        }
      `}</style>
    </section>
  );
}

function Label({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="font-mono text-[11px] uppercase tracking-label text-muted">
      {children}
      {required && <span className="text-accent"> *</span>}
    </label>
  );
}

function Field({
  label,
  required,
  ...props
}: {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input {...props} className="input" />
    </div>
  );
}
