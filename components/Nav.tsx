"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Approach", href: "#approach" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-navy-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="wrap flex h-20 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3" aria-label="Wayne Capital home">
          <Mark />
          <span className="font-serif text-lg tracking-tight text-ivory">
            Wayne Capital
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-soft transition-colors duration-300 hover:text-gold-light"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-6 !py-2.5">
            Submit an Opportunity
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-ivory transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ivory transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ivory transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-navy-950/[0.98] backdrop-blur-xl transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col justify-center gap-2 px-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/[0.06] py-5 font-serif text-3xl text-ivory transition-colors hover:text-gold-light"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-8 w-full"
          >
            Submit an Opportunity
          </a>
        </div>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center rounded-md border border-gold/40">
      <span className="font-serif text-base leading-none text-gold-light">W</span>
    </span>
  );
}
