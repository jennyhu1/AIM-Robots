/* eslint-disable @next/next/no-img-element -- Web-ready company images are served directly. */
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SiteLink as Link } from "../components/SiteLink";
import { OPEN_ROLE, SITE } from "../site-data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities with AIMRO's robotics AI team in Herndon, Virginia.",
};

const workAreas = [
  {
    number: "01",
    title: "Software meets hardware",
    body: "Work can move from perception models and simulation to cameras, robot arms, calibration, and integration in the lab.",
  },
  {
    number: "02",
    title: "Meaningful technical ownership",
    body: "A small team means contributing to real product problems and seeing how decisions affect the complete robotics system.",
  },
  {
    number: "03",
    title: "Room to grow across the stack",
    body: "Learn how data capture, model development, tooling, and robot execution fit together while developing deeper expertise.",
  },
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader />

      <main className="content-page careers-page">
        <section className="page-hero careers-page-hero" aria-labelledby="careers-title">
          <div className="page-hero-copy careers-hero-copy">
            <p className="eyebrow">Careers at AIMRO</p>
            <h1 id="careers-title">Build robotics AI where software meets the machine</h1>
            <p>
              Join a small team developing AIMEX across perception, simulation,
              task intelligence, and hands-on robot integration.
            </p>
            <div className="careers-hero-actions">
              <a className="button button-primary" href="#open-roles">
                View Open Position
              </a>
              <Link className="button button-secondary" href="/contact">
                Contact AIMRO
              </Link>
            </div>
          </div>

          <figure className="page-hero-media careers-hero-media">
            <img
              src="/images/aimex-demo-hardware.jpg"
              alt="Circuit boards and development hardware used in the AIMRO demonstration system"
              width="852"
              height="473"
            />
            <figcaption>
              <span>Herndon lab</span>
              <strong>AIMRO development hardware</strong>
            </figcaption>
          </figure>
        </section>

        <section className="story-section careers-work" aria-labelledby="careers-work-title">
          <div className="careers-work-heading">
            <p className="eyebrow">What the work looks like</p>
            <h2 id="careers-work-title">Learn by building complete robotics systems</h2>
            <p>
              The work crosses disciplines because useful robotics depends on
              every layer working together—from the model to the physical task.
            </p>
          </div>

          <ol className="careers-work-list">
            {workAreas.map((area) => (
              <li key={area.number}>
                <span>{area.number}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="careers-openings" id="open-roles" aria-labelledby="open-roles-title">
          <header className="careers-openings-heading">
            <div>
              <p className="eyebrow">Open roles</p>
              <h2 id="open-roles-title">Current opportunity</h2>
            </div>
            <p>
              Based in Herndon, Virginia, with a hybrid working arrangement and
              direct access to the lab environment.
            </p>
          </header>

          <article className="position careers-position">
            <div className="position-status">
              <span className={OPEN_ROLE.open ? "status-dot" : "status-dot closed"} />
              {OPEN_ROLE.open ? "Open position" : "Position closed"}
            </div>

            <div className="position-heading">
              <div>
                <h3>{OPEN_ROLE.title}</h3>
                <p>{OPEN_ROLE.subtitle}</p>
              </div>
              {OPEN_ROLE.open ? (
                <Link className="button button-secondary" href={OPEN_ROLE.href}>
                  View Position
                </Link>
              ) : (
                <span className="closed-label">Position Closed</span>
              )}
            </div>

            <ul className="position-meta" aria-label="Position details">
              <li>{OPEN_ROLE.location}</li>
              <li>{OPEN_ROLE.workplace}</li>
              <li>{OPEN_ROLE.type}</li>
              <li>{OPEN_ROLE.compensation}</li>
            </ul>
          </article>
        </section>

        <section className="careers-contact">
          <div>
            <p className="eyebrow">Questions about working at AIMRO?</p>
            <h2>Talk with the team directly.</h2>
          </div>
          <div className="careers-contact-details">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <Link className="text-link" href="/contact">
              Contact details <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
