import Reveal from "./Reveal";

const points = [
  {
    h: "Main Street focus",
    p: "We invest in the essential businesses that power local economies.",
  },
  {
    h: "Wall Street discipline",
    p: "Institutional capital, rigor, and a clear approach to growth.",
  },
  {
    h: "A clean exit for owners",
    p: "Fair, confidential, and respectful — your life's work in good hands.",
  },
];

export default function Philosophy() {
  return (
    <section id="who" className="bg-paper py-[84px] md:py-[120px]">
      <div className="wrap">
        <Reveal className="max-w-[64ch]">
          <div className="label">Who We Are</div>
          <p className="mt-3.5 max-w-[24ch] font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] font-light leading-[1.32] tracking-[-0.01em]">
            The best opportunities in America aren&rsquo;t on Wall Street.
            They&rsquo;re on Main Street.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="max-w-[48ch] text-[1.15rem] text-muted">
              We love Main Street — the essential, profitable, owner-built
              businesses that quietly power local economies. They are dependable,
              deeply rooted, and built by people who care.
              <br />
              <br />
              As a private investment firm, we bring Wall Street discipline to
              these businesses — sound capital, financial rigor, and a
              clear-eyed approach to growth. We help them scale and build lasting
              value, and we give the owners who built them a clean, confident
              exit.
            </p>
          </Reveal>

          <Reveal className="flex flex-col">
            {points.map((pt, i) => (
              <div
                key={pt.h}
                className={`border-t border-black/10 py-[26px] ${
                  i === points.length - 1 ? "border-b" : ""
                }`}
              >
                <h4 className="text-[1.15rem] font-semibold">{pt.h}</h4>
                <p className="mt-2 text-muted">{pt.p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
