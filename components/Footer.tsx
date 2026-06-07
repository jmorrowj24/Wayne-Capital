import Logo from "./Logo";

const links = [
  { label: "Thesis", href: "#thesis" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Companies", href: "#portfolio" },
  { label: "Operators", href: "#operators" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-16">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="group flex items-center gap-3">
              <Logo size={36} />
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-fg">
                Wayne Capital
              </span>
            </div>
            <p className="mt-6 font-display text-2xl font-bold tracking-tight text-fg">
              Buy. Build. <span className="text-accent">Own.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A private investment company that buys businesses, owns real estate,
              takes positions in public companies, and builds new ventures — for
              the long term.
            </p>
          </div>

          <nav className="flex flex-col gap-4">
            <span className="label">Navigate</span>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors duration-300 hover:text-fg"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 border-t border-white/[0.06] pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-dim">
            Wayne Capital is a private investment company that invests its own
            capital. Nothing on this website constitutes an offer to sell or a
            solicitation of an offer to buy any security, nor does it constitute
            investment, legal, tax, or financial advice. Wayne Capital is not a
            registered investment adviser, broker-dealer, or fund, and does not
            solicit or accept outside investors.
          </p>
          <div className="mt-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-dim">
              © {new Date().getFullYear()} Wayne Capital. All rights reserved.
            </p>
            <p className="font-mono text-xs uppercase tracking-label text-dim">
              Buy. Build. Own.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
