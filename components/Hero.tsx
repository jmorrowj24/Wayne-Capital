export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[100svh] flex-col justify-center pb-[90px] pt-[140px]"
      style={{
        background:
          "radial-gradient(110% 80% at 50% -10%, #fff 0%, #F6F5F2 70%)",
      }}
    >
      <div className="wrap">
        <div
          className="label animate-fade-in opacity-0"
          style={{ animationDelay: "100ms" }}
        >
          Private Investment Firm · Midwest
        </div>

        <h1
          className="mt-[22px] max-w-[14ch] animate-fade-up text-[clamp(2.6rem,6.4vw,5.2rem)] font-medium leading-[1.02] tracking-[-0.03em] opacity-0"
          style={{ animationDelay: "180ms" }}
        >
          Where Main Street meets{" "}
          <em className="font-serif font-light italic">Wall Street</em>.
        </h1>

        <p
          className="mt-[26px] max-w-[54ch] animate-fade-up text-[clamp(1.05rem,1.6vw,1.3rem)] text-muted opacity-0"
          style={{ animationDelay: "320ms" }}
        >
          Wayne Capital is a private investment firm. We bring Wall Street
          discipline to the established Main Street businesses that power the
          Midwest — the companies, real estate, and operators we know and
          believe in.
        </p>

        <div
          className="mt-[38px] flex animate-fade-up flex-wrap gap-[14px] opacity-0"
          style={{ animationDelay: "460ms" }}
        >
          <a href="/#join" className="btn btn-solid">
            Join Wayne Capital →
          </a>
          <a href="/#what" className="btn btn-line">
            What We Do
          </a>
        </div>

        <div
          className="mt-16 flex animate-fade-in items-center gap-3 text-faint opacity-0"
          style={{ animationDelay: "800ms" }}
        >
          <span className="h-px w-[46px] bg-black/10" />
          <span className="label">Scroll</span>
        </div>
      </div>
    </section>
  );
}
