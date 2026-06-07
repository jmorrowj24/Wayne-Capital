"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  /** Numeric target to count up to. Null means a non-numeric glyph (e.g. ∞). */
  value: number | null;
  /** Rendered when value is null. */
  glyph?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 4, label: "Asset classes owned" },
  { value: 3, label: "Ventures in build" },
  { value: 100, suffix: "%", label: "Privately held" },
  { value: null, glyph: "∞", label: "Intended hold period" },
];

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Kick off the count-up the first time the band scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-b border-white/[0.06]">
      <div
        ref={ref}
        className="wrap grid grid-cols-2 gap-x-6 gap-y-12 py-16 sm:py-20 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} started={started} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ stat, started }: { stat: Stat; started: boolean }) {
  const display = useCountUp(stat.value, started);

  return (
    <div className="flex flex-col">
      <div className="font-display text-5xl font-bold tracking-tight text-fg sm:text-6xl">
        {stat.value === null ? (
          <span className="text-accent">{stat.glyph}</span>
        ) : (
          <>
            {display}
            {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
          </>
        )}
      </div>
      <div className="mt-4 h-px w-10 bg-accent/60" />
      <p className="mt-4 font-mono text-xs uppercase tracking-label text-muted">
        {stat.label}
      </p>
    </div>
  );
}

/** Counts from 0 to `target` over ~1.4s using requestAnimationFrame. */
function useCountUp(target: number | null, start: boolean) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start || target === null) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setN(target);
      return;
    }

    const duration = 1400;
    let raf = 0;
    let startTs: number | null = null;

    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      // Ease-out cubic for a confident, decelerating count.
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);

  return n;
}
