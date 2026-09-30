/* eslint-disable @next/next/no-img-element -- Web-ready company images are served directly. */
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SiteLink as Link } from "./components/SiteLink";
import { SITE } from "./site-data";

const learningPath = [
  {
    number: "01",
    title: "Demonstrate",
    body: "A person shows the task in its real workcell context.",
  },
  {
    number: "02",
    title: "Understand",
    body: "Vision and task intelligence organize what matters and what should happen next.",
  },
  {
    number: "03",
    title: "Execute",
    body: "AIMEX connects the learned task to guarded robot execution.",
  },
  {
    number: "04",
    title: "Verify",
    body: "The system checks the result and can recheck, recover, or request help.",
  },
];

const applications = [
  {
    number: "01",
    status: "Development focus",
    title: "Assembly",
    body: "Teaching robot workcells to perform repeatable assembly tasks from human demonstrations.",
  },
  {
    number: "02",
    status: "Target application",
    title: "Material handling",
    body: "Applying reusable task knowledge to movement between production steps.",
  },
  {
    number: "03",
    status: "Target application",
    title: "Visual inspection",
    body: "Connecting perception and production evidence to support consistent inspection workflows.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">AI-powered robotics for manufacturing</p>
            <h1 id="hero-title">Teaching industrial robots to learn work from people</h1>
            <p className="hero-intro">
              AIMRO is developing AIMEX, a station-level system that turns human
              demonstrations into structured, reusable robot tasks for
              manufacturing.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/aimex">
                Discover AIMEX
              </Link>
              <Link className="button button-secondary" href="/applications">
                Explore Applications
              </Link>
            </div>
            <p className="hero-location">Developed in Herndon, Virginia</p>
          </div>

          <figure className="hero-visual">
            <img
              src="/images/aimex-hero.jpg"
              alt="AIMEX robotic arm and camera system on a mobile work platform"
              width="1448"
              height="1086"
            />
            <figcaption>AIMEX industrial robotics system</figcaption>
          </figure>
        </section>

        <section className="home-section home-about" id="about">
          <header className="section-heading section-heading-wide">
            <p className="eyebrow">About AIMRO</p>
            <h2>Manufacturing knowledge is difficult to scale.</h2>
          </header>

          <div className="about-editorial">
            <p className="about-lead">
              Critical production know-how often lives with individual workers.
              It takes time to transfer, and it can disappear when experienced
              people leave.
            </p>
            <div className="about-body">
              <p>
                Traditional automation performs fixed processes well, but new
                products and changing tasks can bring another cycle of
                programming and integration. AIMRO is working on a more adaptable
                path: turn demonstrated work into task intelligence a robot can
                use, check, and apply again.
              </p>
              <Link className="text-link" href="/about">
                About AIMRO <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="company-principle" aria-label="AIMRO company approach">
            <p>Human process knowledge</p>
            <span aria-hidden="true">→</span>
            <p>Reusable task intelligence</p>
            <span aria-hidden="true">→</span>
            <p>Adaptable robot work</p>
          </div>
        </section>

        <section className="home-section home-technology" id="technology">
          <header className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">Meet AIMEX</p>
              <h2>From a human demonstration to verified robot action</h2>
            </div>
            <p>
              AIMEX brings together perception, explicit task knowledge, and
              robot integration. The goal is to help a workcell learn what the
              task means—not only replay a sequence of motions.
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
                <span>Real demonstration hardware</span>
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

          <div className="architecture-block" id="technology-system">
            <div className="architecture-intro">
              <p className="eyebrow">AIM AI Operating System</p>
              <h3>One intelligence core across two operating tiers</h3>
              <p>
                AIM Tower coordinates production-line activity while AIMEX
                connects task intelligence with equipment at the workcell level.
                The diagram below follows the architecture shown in AIMRO&apos;s
                product materials.
              </p>
              <Link className="text-link" href="/aimex">
                Explore AIMEX in detail <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <figure className="architecture-slide">
              <a
                className="architecture-slide-viewport"
                href="/images/aim-aios-architecture.png"
                target="_blank"
                rel="noreferrer"
                aria-label="Open the AIM AI Operating System architecture diagram at full size"
              >
                <img
                  src="/images/aim-aios-architecture.png"
                  alt="AIM AI Operating System architecture showing AIM Tower above AIMEX, connected by execution, status, and feedback flows, with supported robotic equipment below"
                  width="2048"
                  height="1154"
                  loading="lazy"
                />
              </a>
              <figcaption>
                Architecture overview from AIMRO company materials.
                <span> On smaller screens, swipe horizontally to read the full diagram.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="home-section home-applications" id="applications">
          <header className="section-heading section-heading-split">
            <div>
              <p className="eyebrow">Manufacturing applications</p>
              <h2>Built around real work on the production floor</h2>
            </div>
            <p>
              AIMRO is starting with assembly. As the platform develops, the
              same learning and execution approach is intended to support
              adjacent manufacturing work.
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
              <li className="application-list-link">
                <Link className="text-link" href="/applications">
                  Explore application areas <span aria-hidden="true">↗</span>
                </Link>
              </li>
            </ol>
          </div>
        </section>

        <section className="home-section home-contact" id="contact">
          <div className="contact-rail">
            <div>
              <p className="eyebrow">Contact AIMRO</p>
              <h2>Start a conversation about adaptable robotics.</h2>
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
