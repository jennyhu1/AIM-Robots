/* eslint-disable @next/next/no-img-element -- Web-ready company images are served directly. */
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SiteLink as Link } from "./components/SiteLink";
import { SITE } from "./site-data";

const learningPath = [
  {
    number: "01",
    title: "Observe the work",
    body: "A person demonstrates the task while cameras and equipment signals capture the relevant workcell context.",
  },
  {
    number: "02",
    title: "Understand the task",
    body: "The system identifies the objects, required result, operating conditions, and evidence needed to proceed.",
  },
  {
    number: "03",
    title: "Execute and verify",
    body: "AIMEX connects the task to guarded robot execution and checks whether the intended physical result occurred.",
  },
  {
    number: "04",
    title: "Reuse with validation",
    body: "Qualified task knowledge can be adapted to a similar workcell, then configured and tested for that station.",
  },
];

const applications = [
  {
    number: "01",
    status: "Current development focus",
    title: "Assembly and part placement",
    body: "Controlled workcell tasks with defined parts, sequences, and completion conditions provide the starting point for AIMEX.",
  },
  {
    number: "02",
    status: "Planned application direction",
    title: "Material handling",
    body: "The same task-centered approach could support movement between production steps after the hardware and workflow are validated.",
  },
  {
    number: "03",
    status: "Planned application direction",
    title: "Inspection within a workflow",
    body: "Visual and equipment evidence could help confirm a defined result before production moves to the next step.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">AIM AIOS / Industrial AI for manufacturing</p>
            <h1 id="hero-title">Turn manufacturing know-how into reusable robotic work</h1>
            <p className="hero-intro">
              AIMRO is building an AI operating system for physical labor. AIMEX
              is the station-level product direction: a trainable robotic worker
              that turns human demonstrations and production evidence into
              structured tasks a robot can execute and verify.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Discuss a Manufacturing Task
              </Link>
            </div>
          </div>

          <figure className="hero-visual">
            <img
              src="/images/aimex-hero.jpg"
              alt="AIMEX robotic arm and camera system on a mobile work platform"
              width="1448"
              height="1086"
            />
            <figcaption>AIMEX industrial robotics development system</figcaption>
          </figure>
        </section>

        <section className="home-section home-about">
          <header className="section-heading section-heading-wide">
            <p className="eyebrow">The manufacturing problem</p>
            <h2>Factories repeat too much training and engineering</h2>
          </header>

          <div className="about-editorial">
            <p className="about-lead">
              Valuable production knowledge often remains with experienced
              people or inside one custom automation project.
            </p>
            <div className="about-body">
              <p>
                A new worker, product, or workcell can require another cycle of
                instruction, programming, and integration. Traditional
                automation performs fixed processes well, but adapting it to a
                changed task can be costly and slow.
              </p>
              <p>
                AIMRO is developing a way to capture what the work requires,
                connect that knowledge to robot execution, and retain qualified
                skills for later use. The goal is to make manufacturing
                expertise easier to inspect, validate, and apply again.
              </p>
            </div>
          </div>

          <div className="company-principle" aria-label="AIMRO development approach">
            <p>Human process knowledge</p>
            <span aria-hidden="true">→</span>
            <p>Explicit task intelligence</p>
            <span aria-hidden="true">→</span>
            <p>Local AIMEX execution</p>
            <span aria-hidden="true">→</span>
            <p>Qualified skill reuse</p>
          </div>
        </section>

        <section className="home-section home-technology">
          <header className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">From demonstration to execution</p>
              <h2>A manufacturing skill includes more than motion</h2>
            </div>
            <p>
              AIMRO&apos;s proof-of-concept system connects a human demonstration
              to explicit task understanding, robot execution, and result
              verification. Productizing that bridge for factory deployment is
              the current development work.
            </p>
          </header>

          <div className="technology-stage">
            <figure className="demo-visual">
              <img
                src="/images/aimex-demo-hardware.jpg"
                alt="Close-up of circuit boards inside the AIMRO demonstration system"
                width="852"
                height="473"
                loading="lazy"
              />
              <figcaption>
                <span>Proof-of-concept hardware</span>
                <strong>AIMRO development system</strong>
              </figcaption>
            </figure>

            <ol className="learning-path">
              {learningPath.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="home-section home-platform" aria-labelledby="platform-title">
          <header className="section-heading section-heading-wide">
            <p className="eyebrow">AIM AI Operating System</p>
            <h2 id="platform-title">Local intelligence at the workcell, coordination at the factory level</h2>
          </header>

          <div className="platform-intro">
            <p>
              AIOS is AIMRO&apos;s broader manufacturing intelligence architecture.
              It is intended to preserve task knowledge, connect it to physical
              execution, and support coordination as more robotic roles are
              validated.
            </p>
            <p>
              The architecture does not place one central brain above passive
              machines. Each AIMEX combines its own task intelligence,
              workcell integration, and execution capability. AIM Tower is
              being developed as the layer that coordinates assignments,
              production status, material flow, and exceptions across those
              locally capable systems.
            </p>
          </div>

          <div className="platform-tiers">
            <article className="platform-tier platform-tier-primary">
              <p>Current productization focus</p>
              <h3>AIMEX</h3>
              <strong>Workcell execution</strong>
              <p>
                Learns or receives a task, connects it to station-specific
                sensing and hardware, performs the work, and reports verified
                status and results.
              </p>
            </article>
            <div className="platform-exchange" aria-label="Information exchanged between AIMEX and AIM Tower">
              <span>Task assignment</span>
              <b aria-hidden="true">↕</b>
              <span>Status and results</span>
            </div>
            <article className="platform-tier">
              <p>Development direction</p>
              <h3>AIM Tower</h3>
              <strong>Factory coordination</strong>
              <p>
                Coordinates work across stations and production workflows while
                leaving execution decisions and task verification inside each
                AIMEX.
              </p>
            </article>
          </div>
        </section>

        <section className="home-section home-applications">
          <header className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">Manufacturing applications</p>
              <h2>Start with work that can be demonstrated and verified</h2>
            </div>
            <p>
              AIMRO begins with controlled assembly workcells. Additional
              factory roles remain application directions until their hardware
              integration, task skills, and operating performance are validated.
            </p>
          </header>

          <div className="application-showcase">
            <figure className="application-collage">
              <img
                className="application-collage-main"
                src="/images/application-robot-arm.jpg"
                alt="Concept illustration of a robotic arm for manufacturing tasks"
                width="1254"
                height="1254"
                loading="lazy"
              />
              <div className="application-collage-stack">
                <img
                  src="/images/application-material-handling.jpg"
                  alt="Concept illustration of a mobile robot for material movement"
                  width="1536"
                  height="1024"
                  loading="lazy"
                />
                <img
                  src="/images/application-operator-console.jpg"
                  alt="Concept illustration of a manufacturing monitoring console"
                  width="1536"
                  height="1024"
                  loading="lazy"
                />
              </div>
              <figcaption>Illustrative equipment and operating contexts</figcaption>
            </figure>

            <ol className="application-list">
              {applications.map((application) => (
                <li key={application.title}>
                  <span>{application.number}</span>
                  <div>
                    <p>{application.status}</p>
                    <h3>{application.title}</h3>
                    <p>{application.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="home-section home-contact">
          <div className="contact-rail">
            <div>
              <p className="eyebrow">Contact AIMRO</p>
              <h2>Tell us about the manufacturing work you want to understand</h2>
              <Link className="button button-primary" href="/contact">
                Contact AIMRO <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="contact-rail-details">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <address>
                <span>{SITE.address.street}</span>
                <span>{SITE.address.suite}</span>
                <span>{SITE.address.cityRegionPostal}</span>
                <span>{SITE.address.country}</span>
              </address>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
