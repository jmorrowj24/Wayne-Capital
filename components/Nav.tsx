"use client";

import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";

const links = [
  { label: "Who We Are", href: "/#who" },
  { label: "What We Do", href: "/#what" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed inset-x-0 top-0 z-50 bg-paper/80 backdrop-blur-[14px] transition-[border-color,background] duration-300 ${
        scrolled ? "border-b border-black/10" : "border-b border-transparent"
      }`}
    >
      <nav className="wrap flex h-[74px] items-center justify-between">
        <a href="/#top" className="group" aria-label="Wayne Capital home">
          <Wordmark />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-[34px] md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href="/#join" className="btn btn-solid">
            Join Wayne Capital
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-[60] flex w-[30px] flex-col gap-[5px] md:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={`h-[1.5px] bg-ink transition-all duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] bg-ink transition-all duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-paper transition-transform duration-[400ms] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="p-3.5 text-2xl text-ink"
          >
            {l.label}
          </a>
        ))}
        <a
          href="/#join"
          onClick={() => setOpen(false)}
          className="btn btn-solid mt-4 text-base"
        >
          Join Wayne Capital
        </a>
      </div>
    </header>
  );
}
