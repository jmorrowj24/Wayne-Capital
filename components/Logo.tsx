/**
 * Wayne Capital monogram.
 *
 * This is a clean, circular "W" monogram placeholder drawn in pure SVG, white
 * for the dark UI. It needs no image asset and stays crisp at any size.
 *
 * ─── Swapping in your real logo ────────────────────────────────────────────
 * Your real logo is black, so on this dark site you need the WHITE version.
 * 1. Export a white-on-transparent PNG/SVG of your mark and drop it in /public,
 *    e.g. /public/wayne-mark-white.svg
 * 2. Replace the <svg>…</svg> below with:
 *
 *      import Image from "next/image";
 *      ...
 *      <Image
 *        src="/wayne-mark-white.svg"
 *        alt="Wayne Capital"
 *        fill
 *        className="object-contain p-1.5"
 *        priority
 *      />
 *
 *    (keep the wrapping <span> with its size/border classes).
 * 3. If you only have the black logo, you can invert it on the fly with the
 *    Tailwind class `invert` on the <Image>, though a true white export looks
 *    cleaner.
 * ───────────────────────────────────────────────────────────────────────────
 */

type LogoProps = {
  /** Diameter in pixels. */
  size?: number;
  className?: string;
};

export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] transition-colors duration-300 group-hover:border-accent/60 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 32"
        width={size * 0.58}
        height={size * 0.58}
        fill="none"
        className="text-fg"
      >
        {/* Stylized "W" — two strokes meeting at a center peak. */}
        <path
          d="M5 8 L11 24 L16 13 L21 24 L27 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
