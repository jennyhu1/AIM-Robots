/* eslint-disable @next/next/no-img-element -- Web-ready company images are served directly. */
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SiteLink as Link } from "../components/SiteLink";

export const metadata: Metadata = {
  title: "AIMEX Technology",
  description:
    "Learn how AIMRO is developing AIMEX to turn human manufacturing demonstrations into structured, reusable robot tasks.",
};

const process = [
  {
    number: "01",
    title: "Demonstrate",
    body: "A person performs the task while the system observes the work area, objects, and sequence.",
  },
  {
    number: "02",
    title: "Understand",
    body: "Perception and task intelligence identify the current state, the goal, and the next required action.",
  },
  {
    number: "03",
    title: "Represent",
    body: "The task is organized into explicit steps and conditions that can be reviewed and reused.",
  },
  {
    number: "04",
    title: "Execute",
    body: "The robot performs each step through a controlled runtime connected to the workcell.",
  },
  {
    number: "05",
    title: "Verify",
    body: "The system checks the outcome and can recheck, recover, or ask for human input when needed.",
  },
];

const buildingBlocks = [
  {
    title: "Learning from demonstrations",
    body: "Captures practical task knowledge from examples performed by people, reducing the need to define every motion by hand.",
  },
  {
    title: "Computer vision and perception",
    body: "Uses cameras and vision models to interpret the work area, parts, and changing task state.",
  },
  {
    title: "Simulation and synthetic data",
    body: "Creates controlled environments and additional training data before work moves to physical equipment.",
  },
  {
    title: "Robot integration",
    body: "Connects learned actions with industrial robot arms, cameras, grippers, and other workcell equipment.",
  },
];

export default function AimexPage() {
  return (
    <>
      <SiteHeader />

      <main className="content-page aimex-page">
        <section className="page-hero page-hero-product" aria-labelledby="aimex-title">
          <div className="page-hero-copy">
            <p className="eyebrow">AIMEX / Workcell intelligence</p>
            <h1 id="aimex-title">A robot should understand the task before it moves.</h1>
            <p>
              AIMEX is AIMRO&apos;s station-level learning and execution system
              under development. It is designed to translate human
              demonstrations into explicit task knowledge, then connect that
              knowledge to physical robot work.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#how-it-works">
                How AIMEX Works
              </a>
              <Link className="button button-secondary" href="/applications">
                View Applications
              </Link>
            </div>
          </div>

          <figure className="page-hero-media">
            <img
              src="/images/aimex-demo-hardware.jpg"
              alt="Close-up of circuit boards inside the AIMRO demonstration system"
              width="852"
              height="473"
            />
            <figcaption>
              <span>Development system</span>
              <strong>Real hardware from the AIMRO demonstration setup</strong>
            </figcaption>
          </figure>
        </section>

        <section className="story-section" id="how-it-works">
          <div className="story-heading">
            <p className="eyebrow">The learning path</p>
            <h2>From demonstration to verified execution</h2>
            <p>
              The demonstration system brings the essential steps into one
              loop. The aim is to make robot behavior easier to inspect,
              validate, and adapt as work changes.
            </p>
          </div>

          <ol className="process-ribbon">
            {process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="story-section split-story">
          <div className="split-story-copy">
            <p className="eyebrow">Explicit task intelligence</p>
            <h2>Turning factory know-how into something a system can check</h2>
            <p>
              Demonstration alone is not enough. AIMEX is being designed to
              keep track of the evidence it observes, the conditions that must
              be true, the action it proposes, and whether the result was
              completed as expected.
            </p>
            <p>
              If the available evidence is incomplete, the intended behavior
              is to recheck the state, use bounded recovery, hold safely, or
              involve a person instead of guessing.
            </p>
          </div>

          <div className="evidence-model" aria-label="AIMEX task intelligence model">
            <article>
              <span>01</span>
              <h3>Evidence</h3>
              <p>What cameras, sensors, demonstrations, and equipment signals show.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Conditions</h3>
              <p>What must be true before a task step can move forward.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Action</h3>
              <p>The next step proposed within the current workcell state.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Verification</h3>
              <p>Evidence that the intended result actually happened.</p>
            </article>
          </div>
        </section>

        <section className="story-section capability-section">
          <div className="capability-section-heading">
            <div>
              <p className="eyebrow">Core building blocks</p>
              <h2>Software and hardware developed together</h2>
            </div>
            <p>
              AIMEX combines four practical disciplines so that learning can
              move from a demonstration into a working robot cell.
            </p>
          </div>

          <div className="capability-gallery">
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

            <div className="building-blocks">
              {buildingBlocks.map((block, index) => (
                <article key={block.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="architecture-reference">
          <div>
            <p className="eyebrow">AIM AI Operating System</p>
            <h2>See how AIMEX connects with AIM Tower and robotic equipment.</h2>
          </div>
          <Link className="text-link" href="/#technology-system">
            View the system architecture <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <section className="page-cta">
          <div>
            <p className="eyebrow">Continue exploring</p>
            <h2>See where AIMEX could fit on the production floor.</h2>
          </div>
          <div className="page-cta-actions">
            <Link className="button button-primary" href="/applications">
              Explore Applications
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
