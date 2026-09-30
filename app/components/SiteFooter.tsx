import { SITE } from "../site-data";
import { SiteLink as Link } from "./SiteLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="wordmark footer-wordmark" href="/">
            {SITE.brandName}
          </Link>
          <p>{SITE.legalName}</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="footer-contact">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <p>© {new Date().getFullYear()} {SITE.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
