"use client";

import { useEffect, useRef } from "react";

/**
 * Hero backdrop motion — all pure CSS + a single rAF loop. No libraries.
 *  - A cursor-following accent glow (eased toward the pointer).
 *  - A slow drifting aurora blob (CSS keyframes).
 *  - A faint radial-masked grid.
 * Everything is pointer-events-none and disabled under prefers-reduced-motion.
 */
export default function HeroAtmosphere() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return; // leave the glow at its CSS default position

    // Target (pointer) and current (eased) positions, in viewport px.
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight * 0.32;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      // Ease current toward target for a smooth trailing feel.
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      glow.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Masked grid */}
      <div className="absolute inset-0 grid-mask" />

      {/* Slow drifting aurora blob (accent, very low opacity) */}
      <div
        className="absolute left-1/2 top-[28%] h-[460px] w-[460px] -translate-x-1/2 rounded-full blur-[120px] animate-aurora-drift sm:h-[620px] sm:w-[620px]"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--accent) / 0.16), transparent 65%)",
        }}
      />

      {/* Cursor-following glow */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[340px] w-[340px] rounded-full blur-[90px] will-change-transform"
        style={{
          transform: "translate3d(50vw, 32vh, 0) translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgb(var(--accent) / 0.10), transparent 70%)",
        }}
      />

      {/* Bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
    </div>
  );
}
