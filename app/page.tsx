/* eslint-disable @next/next/no-img-element -- Source photos are already compressed and served directly. */
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { OPEN_ROLE, SITE } from "./site-data";

const capabilities = [
  {
    number: "01",
    title: "Learning from human demonstrations",
    body: "AIMEX is designed to learn assembly work from examples performed by people, capturing practical know-how without programming every motion by hand.",
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

const manufacturingChallenges = [
  {
    title: "Skilled workers are difficult to replace",
    body: "Critical production knowledge often lives with individual people and can be hard to reproduce across shifts or facilities.",
  },
  {
    title: "Tasks keep changing",
    body: "Products, parts, and processes change, while conventional automation is usually built around a fixed sequence.",
  },
  {
    title: "Reprogramming adds friction",
    body: "Adapting a traditional robot to new work can require specialized programming and additional integration effort.",
  },
];

const productLayers = [
  {
    scope: "Workcell",
    title: "AIMEX",
    body: "The primary platform under development, focused on learning from human demonstrations and executing robot tasks within an individual workcell.",
  },
  {
    scope: "Production line",
    title: "AIM Tower",
    body: "A planned line-level layer intended to coordinate robot work and production flow across multiple workcells.",
  },
  {
    scope: "System architecture",
    title: "AIM AIOS",
    body: "The broader software architecture intended to connect workcell learning and execution with line-level coordination.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Demonstrate",
    body: "A person performs the task while cameras capture the work area, objects, and motion.",
  },
  {
    number: "02",
    title: "Interpret",
    body: "Perception and learning models organize the scene and the sequence of actions involved.",
  },
  {
    number: "03",
    title: "Transfer",
    body: "The task is tested in simulation and connected to a physical robot workcell.",
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
            <div className="manufacturing-problems">
              {manufacturingChallenges.map((challenge) => (
                <article className="manufacturing-problem" key={challenge.title}>
                  <h4>{challenge.title}</h4>
                  <p>{challenge.body}</p>
                </article>
              ))}
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
              <h2>A practical learning and execution stack for industrial robots</h2>
            </div>
            <p>
              AIMEX connects perception, simulation, demonstration data, and
              physical robots in one development loop. The focus is helping
              workcells learn assembly tasks and adapt as manufacturing needs
              change.
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

            <ol className="workflow-steps">
              {workflowSteps.map((step) => (
                <li className="workflow-step" key={step.number}>
                  <span>{step.number}</span>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>

            <div className="workflow-media">
              <figure>
                <img
                  src="/images/manufacturing-workcell.jpg"
                  alt="Industrial robot arm operating in a manufacturing workcell"
                  width="1400"
                  height="933"
                  loading="lazy"
                />
                <figcaption>Industrial robot workcell</figcaption>
              </figure>
              <figure>
                <img
                  src="/images/perception-visualization.jpg"
                  alt="Color-coded machine vision view of industrial equipment"
                  width="1000"
                  height="566"
                  loading="lazy"
                />
                <figcaption>Example of visual perception data</figcaption>
              </figure>
            </div>
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

            <div className="product-layer-list">
              {productLayers.map((layer, index) => (
                <article className="product-layer" key={layer.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{layer.scope}</p>
                    <h3>{layer.title}</h3>
                    <p className="product-layer-body">{layer.body}</p>
                  </div>
                </article>
              ))}
            </div>

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
