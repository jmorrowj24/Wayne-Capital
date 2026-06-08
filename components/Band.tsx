import Reveal from "./Reveal";

const meta = [
  { b: "Acquire", t: "Established businesses" },
  { b: "Invest", t: "Capital & growth" },
  { b: "Midwest", t: "Where we focus" },
];

export default function Band() {
  return (
    <section className="bg-dark py-[84px] text-cream md:py-[120px]">
      <Reveal className="wrap">
        <div className="label text-white/50">Our Approach</div>
        <p className="mt-3.5 max-w-[20ch] font-serif text-[clamp(1.8rem,4vw,3.2rem)] font-light leading-[1.25] tracking-[-0.015em]">
          Main Street businesses, backed with Wall Street discipline.
        </p>
        <div className="mt-10 flex flex-wrap gap-10 text-sm text-white/55">
          {meta.map((m) => (
            <div key={m.b}>
              <b className="mb-1 block font-serif text-2xl font-semibold text-cream">
                {m.b}
              </b>
              {m.t}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
