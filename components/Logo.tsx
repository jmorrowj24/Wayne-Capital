/**
 * Wayne Capital monogram.
 *
 * A clean circular "W" monogram drawn in pure SVG — knockout/white so it reads
 * on the near-black UI. No image asset required; stays crisp at any size.
 *
 * ─── Swapping in your real logo ────────────────────────────────────────────
 * Your real logo is BLACK, so on this dark site you need a WHITE / knockout
 * version.
 * 1. Export a white-on-transparent SVG/PNG of your mark into /public, e.g.
 *    /public/wayne-mark-white.svg
 * 2. Replace the <svg>…</svg> below with:
 *
 *      import Image from "next/image";
 *      ...
 *      <Image src="/wayne-mark-white.svg" alt="Wayne Capital" fill
 *             className="object-contain p-1.5" priority />
 *
 *    (keep the wrapping <span> with its size / border classes).
 * 3. If you only have the black file, add the Tailwind class `invert` to the
 *    <Image> to knock it out to white — though a true white export looks cleaner.
 * ───────────────────────────────────────────────────────────────────────────
 */

type LogoProps = {
  /** Diameter in pixels. */
  size?: number;
  className?: string;
};

export default function Logo({ size = 38, className = "" }: LogoProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.02] transition-colors duration-300 group-hover:border-accent/60 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 32"
        width={size * 0.56}
        height={size * 0.56}
        fill="none"
        className="text-fg"
      >
        {/* Stylized "W" — two strokes meeting at a center peak. */}
        <path
          d="M5 8 L11 24 L16 13 L21 24 L27 8"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
