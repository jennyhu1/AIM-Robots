import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SiteLink as Link } from "../components/SiteLink";
import { SITE } from "../site-data";

export const metadata: Metadata = {
  title: "About AIMRO",
  description:
    "Learn about AIMRO's mission, manufacturing focus, research approach, and development path for reusable robotic work.",
};

const researchPrinciples = [
  {
    number: "01",
    title: "Start with real manufacturing work",
    body: "Study the parts, process requirements, equipment, and completion criteria that define a useful task on the production floor.",
  },
  {
    number: "02",
    title: "Make task meaning explicit",
    body: "Retain what the system observed, what the work requires, which conditions permit an action, and how completion should be checked.",
  },
  {
    number: "03",
    title: "Develop software and hardware together",
    body: "Connect perception, simulation, task intelligence, cameras, tooling, and robot integration as parts of one workcell system.",
  },
  {
    number: "04",
    title: "Validate before reuse",
    body: "Carry qualified knowledge forward while configuring and testing each new station, rather than assuming one demonstration works everywhere.",
  },
];

const developmentPath = [
  {
    label: "Demonstrated foundation",
    title: "Live proof of concept",
    body: "AIMRO has demonstrated the core bridge from human demonstration to explicit task understanding, guarded robot execution, result verification, and bounded recovery on real hardware.",
  },
  {
    label: "Current work",
    title: "Factory-deployable AIMEX",
    body: "The present focus is productizing and hardening the workcell system for controlled factory trials and repeatable deployment.",
  },
  {
    label: "Broader direction",
    title: "Coordinated robotic factories",
    body: "AIM Tower and additional AIMEX roles are intended to extend the architecture across factory workflows as their integrations and operating performance are validated.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="content-page about-page">
        <section className="page-hero about-page-hero about-mission-hero" aria-labelledby="about-title">
          <div className="page-hero-copy">
            <p className="eyebrow">About AIMRO</p>
            <h1 id="about-title">Building reusable intelligence for manufacturing</h1>
          </div>
          <div className="about-page-intro">
            <p>
              AIM Robots is a U.S.-based industrial AI and robotics company
              developing an AI operating system for physical labor. The company
              starts with trainable robotic workcells and the practical problem
              of turning human manufacturing know-how into robot work.
            </p>
            <p>
              AIMRO&apos;s near-term product direction is AIMEX, a station-level
              system that combines task intelligence, robot integration, and
              physical workcell hardware. The broader AIOS architecture is
              designed to support coordination and knowledge reuse across more
              factory roles over time.
            </p>
          </div>
        </section>

        <section className="about-manifesto about-mission" aria-label="AIMRO mission">
          <p className="eyebrow">Our mission</p>
          <p>
            Make manufacturing expertise reusable by turning demonstrated work
            and production evidence into robotic skills that can be inspected,
            verified, and applied again.
          </p>
        </section>

        <section className="story-section about-problem" aria-labelledby="about-problem-title">
          <div className="about-problem-heading">
            <p className="eyebrow">Why this work matters</p>
            <h2 id="about-problem-title">Manufacturing knowledge does not scale easily</h2>
          </div>
          <div className="about-problem-copy">
            <p>
              Skilled production knowledge is often tacit. It lives with people,
              in work instructions that do not capture every judgment, or inside
              custom automation created for one line. When experienced workers
              leave or a product changes, factories may need to train and
              engineer the work again.
            </p>
            <p>
              Traditional automation delivers repeatability for fixed processes,
              but it can be difficult to reconfigure for the long tail of tasks
              and variations. AIMRO is researching a more adaptable model in
              which a system can learn the meaning of a task, connect it to
              controlled execution, and retain the knowledge that future
              workcells may reuse.
            </p>
          </div>
        </section>

        <section className="story-section about-approach">
          <div className="story-heading story-heading-wide">
            <p className="eyebrow">Research and development approach</p>
            <h2>Build around the task and the evidence that proves it</h2>
            <p>
              Useful industrial AI must work with physical equipment and real
              operating constraints. AIMRO brings software development into the
              lab so task understanding and robot behavior can be evaluated
              together.
            </p>
          </div>

          <div className="about-principles about-principles-four">
            {researchPrinciples.map((item) => (
              <article key={item.title}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story-section development-section" aria-labelledby="development-title">
          <header className="development-heading">
            <p className="eyebrow">Development path</p>
            <h2 id="development-title">Prove the workcell before expanding the factory architecture</h2>
            <p>
              AIMRO separates what the current system demonstrates from what the
              company is productizing now and what the broader architecture is
              intended to support later.
            </p>
          </header>

          <ol className="development-path">
            {developmentPath.map((stage, index) => (
              <li key={stage.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{stage.label}</p>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="story-section location-feature about-location">
          <div>
            <p className="eyebrow">Herndon lab</p>
            <h2>Working where software meets the machine</h2>
            <p>
              AIMRO&apos;s lab in Herndon, Virginia brings model development,
              simulation, cameras, robot hardware, and hands-on integration into
              the same working environment.
            </p>
            <Link className="text-link" href="/contact">
              Contact AIMRO <span aria-hidden="true">↗</span>
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
            <p className="eyebrow">Work with AIMRO</p>
            <h2>Explore the current opening or discuss a manufacturing task</h2>
          </div>
          <div className="page-cta-actions">
            <Link className="button button-primary" href="/careers">
              View Careers
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
