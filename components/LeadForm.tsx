"use client";

import { useState, type FormEvent } from "react";

type Props = {
  /** Dropdown options for "Type". Omit to hide the Type field (e.g. careers). */
  types?: string[];
  /** Extra fields merged into the POST body (e.g. { role: "..." }). */
  hidden?: Record<string, string>;
  /** A line prepended to the logged message (e.g. "Applying for: Analyst"). */
  contextLine?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  successTitle?: string;
  successText?: string;
  /** Small print under the button. */
  disclaimer?: React.ReactNode;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm({
  types,
  hidden,
  contextLine,
  messagePlaceholder = "Tell us about the business, asset, or opportunity.",
  submitLabel = "Send",
  successTitle = "Thank you.",
  successText = "Your message has been received. We review every submission personally and will be in touch if there's a fit.",
  disclaimer,
}: Props) {
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
      const message = contextLine
        ? `${contextLine}\n\n${form.message}`
        : form.message;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, message, ...hidden }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-black/10 bg-cream p-8 sm:p-10">
        <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink text-ink">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h3 className="mt-6 font-serif text-2xl font-light">{successTitle}</h3>
          <p className="mt-3 max-w-sm text-muted">{successText}</p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-black/10 bg-cream p-8 sm:p-10"
    >
      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" required value={form.name} onChange={update("name")} placeholder="Your full name" />
          <Field label="Email" type="email" required value={form.email} onChange={update("email")} placeholder="you@company.com" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone" type="tel" value={form.phone} onChange={update("phone")} placeholder="(000) 000-0000" />
          {types && (
            <div>
              <Label>Type</Label>
              <select value={form.type} onChange={update("type")} className="field appearance-none">
                <option value="" disabled>Select one</option>
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div>
          <Label required>Message</Label>
          <textarea value={form.message} onChange={update("message")} rows={5} placeholder={messagePlaceholder} className="field resize-none" />
        </div>

        {status === "error" && (
          <p className="text-sm text-ink">Please complete name, email, and a brief message.</p>
        )}

        <button type="submit" disabled={status === "submitting"} className="btn btn-solid w-full disabled:opacity-60">
          {status === "submitting" ? "Sending…" : submitLabel}
        </button>

        {disclaimer && (
          <p className="text-xs leading-relaxed text-faint">{disclaimer}</p>
        )}
      </div>

      <style>{`
        .field {
          width: 100%;
          margin-top: 0.5rem;
          border-radius: 0.625rem;
          border: 1px solid rgba(0,0,0,0.10);
          background: #fff;
          padding: 0.8rem 1rem;
          color: #17181C;
          font-size: 0.95rem;
          outline: none;
          transition: border-color .25s;
        }
        .field::placeholder { color: #9A9CA3; }
        .field:focus { border-color: #17181C; }
      `}</style>
    </form>
  );
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="label">
      {children}
      {required && <span className="text-ink"> *</span>}
    </label>
  );
}

function Field({
  label,
  required,
  ...props
}: { label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input {...props} className="field" />
    </div>
  );
}
