/* eslint-disable @next/next/no-img-element -- Source photos are already compressed and served directly. */
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import {
  ChallengeExplorer,
  ProductArchitecture,
  TechnologyExplorer,
  WorkflowExplorer,
} from "./components/InteractiveSections";
import { OPEN_ROLE, SITE } from "./site-data";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">AI-powered robotics for manufacturing</p>
            <h1 id="hero-title">Teaching robots how assembly work gets done</h1>
            <p className="hero-intro">
              AIMRO is developing AIMEX to help industrial robots learn assembly
              work from human demonstrations, making automation easier to adapt
              without programming every step by hand.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#technology">
                Explore Our Technology
              </a>
              <a className="button button-secondary" href="#about">
                About AIMRO
              </a>
            </div>
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

        <section className="section section-about" id="about">
          <div className="section-label">
            <span>01</span>
            <p>About AIMRO</p>
          </div>
          <div className="about-content">
            <h2>AI-powered robotics for adaptable manufacturing</h2>
            <div className="about-copy">
              <p>
                AIMRO develops AI-driven robot technology for manufacturers. Its
                core product, AIMEX, is being built to teach industrial robots
                assembly tasks from human demonstrations.
              </p>
              <p>
                The team brings together computer vision, simulation, and robot
                integration to translate practical human know-how into robot
                actions. AIMRO operates a lab in Herndon, Virginia.
              </p>
            </div>
          </div>

          <div className="manufacturing-context">
            <div>
              <p className="eyebrow">The manufacturing challenge</p>
              <h3>Why more adaptable automation matters</h3>
            </div>
            <ChallengeExplorer />
          </div>
        </section>

        <section className="section section-technology" id="technology">
          <div className="section-label">
            <span>02</span>
            <p>Technology</p>
          </div>

          <div className="technology-intro">
            <div>
              <p className="eyebrow">Meet AIMEX</p>
              <h2>A practical learning and execution stack for industrial robots</h2>
            </div>
            <p>
              AIMEX connects perception, simulation, demonstration data, and
              physical robots in one development loop. The focus is helping
              workcells learn assembly tasks and adapt as manufacturing needs
              change.
            </p>
          </div>

          <TechnologyExplorer />

          <div className="aimex-workflow" id="aimex-workflow">
            <div className="workflow-intro">
              <div>
                <p className="eyebrow">How the pieces connect</p>
                <h3>From demonstration to robot action</h3>
              </div>
              <p>
                AIMEX brings observation, perception, simulation, and robot
                integration into a practical development workflow for
                manufacturing tasks.
              </p>
            </div>

            <WorkflowExplorer />
          </div>

          <div className="product-system">
            <div className="product-system-intro">
              <div>
                <p className="eyebrow">Product direction</p>
                <h3>From one workcell to the production line</h3>
              </div>
              <p>
                AIMEX is the current development focus. AIM Tower and the broader
                AIM AI Operating System (AIOS) describe how the technology could
                extend from individual robot workcells to line-level coordination.
              </p>
            </div>

            <ProductArchitecture />

            <div className="application-direction">
              <p className="eyebrow">Application direction</p>
              <p>
                Assembly is the current development focus. Material handling and
                vision-based inspection are target applications as the platform
                develops.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-leadership" id="leadership">
          <div className="section-label">
            <span>03</span>
            <p>Leadership</p>
          </div>

          <div className="leadership-layout">
            <figure className="founder-photo">
              <img
                src="/images/jeff-cui.jpg"
                alt="Jeff Cui, Founder and CEO of AIMRO"
                width="398"
                height="498"
              />
            </figure>

            <div className="founder-copy">
              <p className="eyebrow">Meet Our Founder</p>
              <h2>Jeff Cui</h2>
              <p className="founder-role">Founder &amp; CEO</p>
              <p>
                Jeff Cui is the Founder and CEO of AIM Robots, Inc. He is a
                manufacturing and robotics automation entrepreneur with a track
                record of reshoring factories to the United States. He holds
                BS/MS degrees from Tsinghua University and the University of
                Maryland.
              </p>
              <a
                className="text-link"
                href={SITE.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                View LinkedIn
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section section-careers" id="careers">
          <div className="section-label">
            <span>04</span>
            <p>Careers</p>
          </div>

          <div className="careers-intro">
            <div>
              <p className="eyebrow">Work with us</p>
              <h2>Build across software and hardware</h2>
            </div>
            <p>
              AIMRO is a small team working on real robotics systems. The work
              moves between vision models, simulation, cameras, robot arms, and
              the practical details that make hardware function. That range
              creates room to learn, contribute, and grow.
            </p>
          </div>

          <article className="position">
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
                <a className="button button-secondary" href={OPEN_ROLE.href}>
                  View Position
                </a>
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

        <section className="section section-contact" id="contact">
          <div className="section-label">
            <span>05</span>
            <p>Contact</p>
          </div>

          <div className="contact-layout">
            <div className="contact-callout">
              <p className="eyebrow">Start a conversation</p>
              <h2>Let&apos;s talk about adaptable robotics.</h2>
              <p>
                For company, technology, and collaboration inquiries, contact
                AIMRO directly.
              </p>
              <a className="button button-primary" href="/contact">
                Contact AIMRO
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="contact-details">
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
