/**
 * MediaSlot — full-bleed cinematic background media for the hero.
 *
 * Renders a cover-fit background image behind the hero content, with dark scrims
 * so the headline stays legible on any image, plus a faint warm-gold glow.
 *
 * ─── Swapping in your real photo ───────────────────────────────────────────
 * The default is a tasteful placeholder at /public/hero-bg.svg. To use a real
 * photo:
 *   1. Drop a high-res image in /public, e.g. /public/hero-bg.jpg
 *      (landscape, ~2000px wide, dark/moody works best with the scrims).
 *   2. Pass it in: <MediaSlot src="/hero-bg.jpg" />  (or change the default below).
 * The scrims are tuned for text on the LEFT — if your focal point is on the
 * left, flip the horizontal gradient direction.
 * ───────────────────────────────────────────────────────────────────────────
 */

type MediaSlotProps = {
  /** Path to the background image in /public. */
  src?: string;
};

export default function MediaSlot({ src = "/hero-bg.svg" }: MediaSlotProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* The image. Using a CSS background so any /public asset (svg/jpg/webp)
          works without next/image SVG config; swap the URL for your photo. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${src}')` }}
      />

      {/* Legibility scrims — darker on the left where the headline sits. */}
      <div className="absolute inset-0 bg-gradient-to-r from-base via-base/80 to-base/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-base/40" />

      {/* Faint warm-gold glow for depth, consistent with the accent. */}
      <div
        className="absolute right-[12%] top-[24%] h-[520px] w-[520px] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--accent) / 0.10), transparent 68%)",
        }}
      />

      {/* Settle the bottom edge into the page. */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-base" />
    </div>
  );
}
