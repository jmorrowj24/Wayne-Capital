const phrases = [
  "Permanent Capital",
  "Operator-Led",
  "Long-Term Ownership",
  "No Outside Investors",
  "Built to Compound",
  "Owners, Not Traders",
];

export default function Marquee() {
  return (
    <section
      aria-label="What we stand for"
      className="relative border-y border-white/[0.06] bg-surface py-5"
    >
      <div className="marquee-mask overflow-hidden">
        {/* Two identical tracks; the animation shifts -50% for a seamless loop. */}
        <div className="flex w-max animate-marquee">
          <Track />
          <Track aria-hidden />
        </div>
      </div>
    </section>
  );
}

function Track({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center"
    >
      {phrases.map((p, i) => (
        <li key={`${p}-${i}`} className="flex items-center">
          <span className="font-mono text-xs uppercase tracking-label text-muted sm:text-sm">
            {p}
          </span>
          <span className="mx-7 inline-block h-1 w-1 rounded-full bg-accent sm:mx-10" />
        </li>
      ))}
    </ul>
  );
}
