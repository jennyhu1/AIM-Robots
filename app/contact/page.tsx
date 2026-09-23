import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SITE } from "../site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AIMRO in Herndon, Virginia about AIMEX and adaptable industrial robotics.",
  openGraph: {
    title: "Contact AIMRO",
    description:
      "Contact AIMRO in Herndon, Virginia about AIMEX and adaptable industrial robotics.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Contact AIMRO",
    description:
      "Contact AIMRO in Herndon, Virginia about AIMEX and adaptable industrial robotics.",
    images: [],
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader interior />

      <main className="contact-page" id="contact">
        <section className="contact-page-hero" aria-labelledby="contact-title">
          <div className="contact-page-label">
            <span>05</span>
            <p>Contact</p>
          </div>

          <div className="contact-page-heading">
            <p className="eyebrow">Contact AIMRO</p>
            <h1 id="contact-title">Start a conversation about the work.</h1>
            <p>
              Reach out about AIMRO, AIMEX, or a manufacturing problem where
              more adaptable robotics could help.
            </p>
          </div>

          <div className="contact-location-mark" aria-hidden="true">
            <span>Herndon</span>
            <strong>VA</strong>
          </div>
        </section>

        <section className="contact-page-details" aria-label="Contact details">
          <div className="contact-channel">
            <p className="eyebrow">Direct email</p>
            <h2>Write to us directly.</h2>
            <a className="button button-primary" href={`mailto:${SITE.email}`}>
              Send an email
              <span aria-hidden="true">→</span>
            </a>
            <a className="contact-email" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <p className="contact-channel-note">
              This link opens your email application. You can also copy the
              address above and write from any email service.
            </p>
          </div>

          <div className="contact-office">
            <p className="eyebrow">Herndon lab</p>
            <h2>Based in Northern Virginia.</h2>
            <address>
              <span>{SITE.address.street}</span>
              <span>{SITE.address.suite}</span>
              <span>{SITE.address.cityRegionPostal}</span>
              <span>{SITE.address.country}</span>
            </address>
            <Link className="text-link" href="/#technology">
              Explore AIMEX
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
