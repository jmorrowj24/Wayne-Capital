const links = [
  { label: "Home", href: "#top" },
  { label: "Investment Philosophy", href: "#approach" },
  { label: "Acquisition Criteria", href: "#criteria" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-navy-950 py-16">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-gold/40">
                <span className="font-serif text-base leading-none text-gold-light">
                  W
                </span>
              </span>
              <span className="font-serif text-lg tracking-tight text-ivory">
                Wayne Capital
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-muted">
              Private Investment Company. Buying, building, and owning exceptional
              businesses, real estate, public market investments, and new ventures.
            </p>
          </div>

          <nav className="flex flex-col gap-4">
            <span className="eyebrow">Navigate</span>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-soft transition-colors duration-300 hover:text-gold-light"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 border-t border-white/[0.07] pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-slate-muted">
            Wayne Capital is a private investment company that invests its own
            capital. Nothing on this website constitutes an offer to sell or a
            solicitation of an offer to buy any security, nor does it constitute
            investment, legal, tax, or financial advice. Wayne Capital is not a
            registered investment adviser, broker-dealer, or fund and does not
            solicit or accept outside investors.
          </p>
          <div className="mt-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-slate-muted">
              © {new Date().getFullYear()} Wayne Capital. All rights reserved.
            </p>
            <p className="text-xs uppercase tracking-eyebrow text-slate-muted">
              Buy. Build. Own.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
