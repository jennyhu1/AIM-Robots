import Link from "next/link";
import { NAV_ITEMS, SITE } from "../site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="wordmark footer-wordmark" href="/#home">
            {SITE.brandName}
          </Link>
          <p>{SITE.legalName}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={`/${item.href}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <p>© {new Date().getFullYear()} {SITE.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
