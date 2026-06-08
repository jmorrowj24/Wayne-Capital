/**
 * Wayne Capital wordmark — set in Jost. "WAYNE" bold ink, "CAPITAL" light muted,
 * wide tracking, baseline-aligned. No circle/monogram (per brand direction).
 *
 * To swap in a real logo file later, replace the two <span>s with a next/image
 * pointing at your asset in /public; keep the wrapping <a>/<span> for sizing.
 */
export default function Wordmark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span className={`inline-flex items-baseline gap-2 font-jost leading-none ${className}`}>
      <span className="text-[18px] font-semibold tracking-[0.2em] text-ink">
        WAYNE
      </span>
      <span className="text-[18px] font-light tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-ink">
        CAPITAL
      </span>
    </span>
  );
}
