import Reveal from "./Reveal";

type Props = {
  id?: string;
  /** Section index, e.g. "01". */
  index: string;
  /** Mono label, e.g. "WHO WE ARE". */
  label: string;
  /** Which side the cold mono index column sits on — alternate down the page. */
  side?: "left" | "right";
  /** "cold" adds the Wall-Street data-grid texture; "warm" stays clean. */
  tone?: "cold" | "warm";
  children: React.ReactNode;
};

/**
 * The recurring "Split" layout: a cold monospace index/label column, a hairline
 * divider with a gold node, and the content column. Alternating `side` makes the
 * divide zig-zag down the page so the two-worlds idea is a through-line.
 */
export default function SplitSection({
  id,
  index,
  label,
  side = "left",
  tone = "cold",
  children,
}: Props) {
  const indexCol = (
    <Reveal>
      <div className="flex items-center gap-4 lg:block">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted lg:mt-3 lg:block">
          {label}
        </span>
        <span className="ml-1 h-px w-8 bg-white/15 lg:ml-0 lg:mt-4 lg:block" />
      </div>
    </Reveal>
  );

  const content = (
    <div
      className={`relative border-white/10 ${
        side === "left" ? "lg:border-l lg:pl-12" : "lg:border-r lg:pr-12"
      }`}
    >
      <span
        className={`divider-node absolute top-1 hidden rotate-45 animate-fade-in opacity-0 lg:block ${
          side === "left" ? "-left-[3px]" : "-right-[3px]"
        }`}
      />
      {children}
    </div>
  );

  return (
    <section
      id={id}
      className="relative border-t border-white/10 py-24 sm:py-32"
    >
      {tone === "cold" && (
        <div
          className="grid-texture pointer-events-none absolute inset-0 opacity-40"
          style={{
            maskImage:
              "radial-gradient(80% 70% at 50% 0%, #000, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(80% 70% at 50% 0%, #000, transparent 80%)",
          }}
        />
      )}
      <div className="wrap relative">
        <div
          className={`grid grid-cols-1 gap-8 lg:gap-12 ${
            side === "left"
              ? "lg:grid-cols-[170px_1fr]"
              : "lg:grid-cols-[1fr_170px]"
          }`}
        >
          {side === "left" ? (
            <>
              {indexCol}
              {content}
            </>
          ) : (
            <>
              {content}
              {indexCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
