/**
 * MediaSlot — the "warm / Main Street" cinematic image surface.
 *
 * Fills its parent (make the parent `relative`). Renders a cover-fit image with
 * a slow zoom, a treated warm overlay, and a vignette so it looks great EMPTY
 * (the placeholder below) and even better with a real photo.
 *
 * ─── Drop in your own photo ────────────────────────────────────────────────
 * Default placeholder: /public/media/hero.svg (a golden-hour skyline).
 * To use your photo:
 *   1. Add it to /public/media, e.g. /public/media/hero.jpg
 *      (warm Midwest business / building / crew, golden hour, landscape).
 *   2. Pass it: <MediaSlot src="/media/hero.jpg" />  (or change the default).
 * The overlay is tuned so a warm photo keeps its glow while text stays legible.
 * ───────────────────────────────────────────────────────────────────────────
 */

type MediaSlotProps = {
  /** Image in /public. */
  src?: string;
  /** Extra classes on the root (e.g. rounded corners for in-section media). */
  className?: string;
};

export default function MediaSlot({
  src = "/media/hero.svg",
  className = "",
}: MediaSlotProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* The image — slow cinematic zoom. */}
      <div
        className="absolute inset-0 animate-zoom-slow bg-cover bg-center"
        style={{ backgroundImage: `url('${src}')` }}
      />

      {/* Treated overlay — warm multiply keeps the gold; gradient adds depth. */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "linear-gradient(180deg, rgba(40,26,12,0.35) 0%, rgba(11,11,13,0.15) 45%, rgba(11,11,13,0.7) 100%)",
        }}
      />
      {/* Subtle gold light bloom. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 38%, rgb(var(--accent) / 0.16), transparent 70%)",
        }}
      />
      {/* Vignette + base settle for legibility. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </div>
  );
}
