/* eslint-disable @next/next/no-img-element -- Source photos are already compressed and served directly. */
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { OPEN_ROLE, SITE } from "./site-data";

const capabilities = [
  {
    number: "01",
    title: "Learning from human demonstrations",
    body: "AIMEX is designed to learn assembly work from examples performed by people, helping translate practical know-how into robot actions.",
  },
  {
    number: "02",
    title: "Computer vision and perception",
    body: "Cameras and vision models help the system interpret the work area, the objects involved, and what is happening during a task.",
  },
  {
    number: "03",
    title: "Simulation and synthetic data",
    body: "Simulation creates controlled environments and additional training data before work moves to physical equipment.",
  },
  {
    number: "04",
    title: "Robot integration",
    body: "The team connects perception and learned actions with cameras, grippers, and industrial robot arms in the lab.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Industrial robotics, taught by people</p>
            <h1 id="hero-title">Teaching robots how assembly work gets done</h1>
            <p className="hero-intro">
              AIMRO is developing AIMEX, an AI platform that turns human
              demonstrations into actions industrial robots can perform.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#technology">
                Explore Our Technology
              </a>
              <a className="button button-secondary" href="#careers">
                View Open Roles
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
            <h2>AI for practical industrial assembly</h2>
            <div className="about-copy">
              <p>
                AIMRO develops AIMEX, an AI platform that teaches industrial
                robots to perform assembly tasks by learning from human
                demonstrations.
              </p>
              <p>
                The team brings together computer vision, simulation, and robot
                integration to turn human demonstrations into robot actions.
                AIMRO has a lab in Herndon, Virginia.
              </p>
            </div>
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
              <h2>A learning platform for industrial robot work</h2>
            </div>
            <p>
              AIMEX brings perception, simulation, and physical robot systems
              into one development loop. The goal is to help robots learn
              assembly tasks from the way people perform them.
            </p>
          </div>

          <div className="technology-layout">
            <figure className="system-visual">
              <img
                src="/images/aimex-system.png"
                alt="AIMEX robotic arm with an overhead camera and mobile base"
                width="245"
                height="371"
              />
            </figure>

            <div className="capability-list">
              {capabilities.map((capability) => (
                <article className="capability" key={capability.number}>
                  <span>{capability.number}</span>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.body}</p>
                  </div>
                </article>
              ))}
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
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2>Contact AIMRO</h2>
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
