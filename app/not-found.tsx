import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
      {/* Faint accent glow, matching the hero atmosphere. */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--accent) / 0.12), transparent 65%)",
        }}
      />

      <div className="relative z-10 flex max-w-md flex-col items-center text-center">
        <div className="group">
          <Logo size={48} />
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-label text-accent">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-fg sm:text-6xl">
          Off the map.
        </h1>
        <p className="mt-5 leading-relaxed text-muted">
          This page does not exist — or never did. The opportunity is back home.
        </p>

        <a href="/" className="btn-primary mt-9">
          Back to Wayne Capital
        </a>
      </div>
    </main>
  );
}
