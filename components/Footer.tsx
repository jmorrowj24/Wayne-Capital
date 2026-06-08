import Wordmark from "./Wordmark";

const links = [
  { label: "Who We Are", href: "/#who" },
  { label: "What We Do", href: "/#what" },
  { label: "Join Wayne Capital", href: "/#join" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-cream pb-10 pt-[54px]">
      <div className="wrap">
        <div className="flex flex-wrap justify-between gap-10">
          <div>
            <a href="/#top" className="group inline-block" aria-label="Wayne Capital home">
              <Wordmark />
            </a>
            <p className="mt-[30px] max-w-[64ch] text-xs leading-[1.7] text-faint">
              Wayne Capital is a private firm that invests its own capital.
              Nothing on this site is an offer to sell or a solicitation of an
              offer to buy any security, or an offer of any investment or
              partnership, nor is it investment, legal, or tax advice. Wayne
              Capital is not a registered investment adviser, broker-dealer, or
              fund. Any investment or partnership is explored only through direct,
              individual discussions with appropriate parties.
            </p>
          </div>

          <nav className="flex flex-wrap gap-[26px]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-9 text-xs text-faint">
          © {new Date().getFullYear()} Wayne Capital. Buy · Build · Own.
        </div>
      </div>
    </footer>
  );
}
