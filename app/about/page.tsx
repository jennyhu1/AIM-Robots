/* eslint-disable @next/next/no-img-element -- Web-ready company images are served directly. */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SITE } from "../site-data";

export const metadata: Metadata = {
  title: "About AIMRO",
  description:
    "Learn about AIMRO, its approach to adaptable manufacturing robotics, founder Jeff Cui, and its lab in Herndon, Virginia.",
};

const waysOfWorking = [
  {
    title: "Start with real manufacturing work",
    body: "The product is shaped around tasks, equipment, and operating conditions found on the production floor.",
  },
  {
    title: "Build software and hardware together",
    body: "Perception, simulation, learning, and robot integration are developed as parts of one system.",
  },
  {
    title: "Make task knowledge reusable",
    body: "The long-term direction is to capture practical know-how in a form that can be checked, adapted, and applied again.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="content-page about-page">
        <section className="page-hero about-page-hero" aria-labelledby="about-title">
          <div className="page-hero-copy">
            <p className="eyebrow">About AIMRO</p>
            <h1 id="about-title">Building a more adaptable way to automate manufacturing</h1>
          </div>
          <div className="about-page-intro">
            <p>
              AIMRO develops AI-driven robot technology for manufacturers. Its
              core product, AIMEX, is being built to teach industrial robots
              assembly tasks from human demonstrations.
            </p>
            <p>
              The team brings together computer vision, simulation, task
              intelligence, and robot integration to translate practical human
              know-how into robot actions.
            </p>
          </div>
        </section>

        <section className="about-manifesto" aria-label="AIMRO company direction">
          <p>
            Manufacturing does not only need more machines. It needs a better
            way to capture what skilled people know and turn that knowledge
            into robot work that can be reviewed, reused, and improved.
          </p>
        </section>

        <section className="story-section about-approach">
          <div className="story-heading compact-story-heading">
            <p className="eyebrow">How we work</p>
            <h2>Practical systems, built around the task</h2>
          </div>

          <div className="about-principles">
            {waysOfWorking.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section founder-feature" aria-labelledby="founder-title">
          <figure>
            <img
              src="/images/jeff-cui.jpg"
              alt="Jeff Cui, Founder and CEO of AIMRO"
              width="398"
              height="498"
            />
          </figure>
          <div>
            <p className="eyebrow">Leadership</p>
            <h2 id="founder-title">Jeff Cui</h2>
            <p className="founder-role">Founder &amp; CEO</p>
            <p>
              Jeff Cui is the Founder and CEO of AIM Robots, Inc. He is a
              manufacturing and robotics automation entrepreneur focused on
              factory reshoring and industrial automation.
            </p>
            <a
              className="text-link"
              href={SITE.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="story-section location-feature">
          <div>
            <p className="eyebrow">Herndon lab</p>
            <h2>Working where software meets the machine</h2>
            <p>
              AIMRO&apos;s lab in Herndon, Virginia brings model development,
              simulation, cameras, robot hardware, and hands-on integration
              into the same working environment.
            </p>
            <Link className="text-link" href="/contact">
              Contact the team <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <address>
            <span>{SITE.address.street}</span>
            <span>{SITE.address.suite}</span>
            <span>{SITE.address.cityRegionPostal}</span>
            <span>{SITE.address.country}</span>
          </address>
        </section>

        <section className="page-cta">
          <div>
            <p className="eyebrow">Careers at AIMRO</p>
            <h2>Join a small team working across robotics AI and real hardware.</h2>
          </div>
          <div className="page-cta-actions">
            <Link className="button button-primary" href="/#careers">
              View Open Roles
            </Link>
            <Link className="button button-secondary" href="/contact">
              Contact AIMRO
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
