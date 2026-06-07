import Logo from "./Logo";

const links = [
  { label: "Approach", href: "#approach" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "What We Look For", href: "#what-we-look-for" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-base py-16">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="group flex items-center gap-3">
              <Logo size={38} />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-fg">
                Wayne Capital
              </span>
            </div>
            <p className="mt-6 font-serif text-2xl font-light text-fg">
              Buy. Build. <span className="italic text-accent">Own.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A private investment company. We invest our own capital and hold
              for the long term.
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

        <div className="mt-14 border-t border-white/10 pt-8">
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
            <p className="label">Buy. Build. Own.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
