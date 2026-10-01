/* eslint-disable @next/next/no-img-element -- Web-ready company images are served directly. */
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SiteLink as Link } from "../components/SiteLink";

export const metadata: Metadata = {
  title: "AIMEX Technology",
  description:
    "Learn how AIMRO is developing AIMEX and AIM AIOS to turn manufacturing demonstrations into explicit, reusable robot tasks.",
};

const process = [
  {
    number: "01",
    title: "Observe",
    body: "Capture the demonstrated work and the production context that gives the actions meaning.",
  },
  {
    number: "02",
    title: "Understand",
    body: "Identify the objects, task requirements, intended change, and information that may still be missing.",
  },
  {
    number: "03",
    title: "Represent",
    body: "Record the task conditions, allowed actions, and completion requirements in an inspectable form.",
  },
  {
    number: "04",
    title: "Execute",
    body: "Connect the task to station-specific sensing, tooling, and robot hardware through controlled execution.",
  },
  {
    number: "05",
    title: "Verify",
    body: "Check the physical result and hold, recheck, recover, or request human input when the evidence is incomplete.",
  },
];

const buildingBlocks = [
  {
    title: "Learning from demonstrations",
    body: "Uses examples performed by people as one source of task knowledge instead of defining every motion manually.",
  },
  {
    title: "Computer vision and perception",
    body: "Uses cameras and vision models to interpret parts, the work area, and changing task conditions.",
  },
  {
    title: "Simulation and synthetic data",
    body: "Supports controlled development and additional training data before changes move to physical equipment.",
  },
  {
    title: "Robot integration",
    body: "Connects task intelligence with robot arms, cameras, grippers, and station-specific equipment.",
  },
];

export default function AimexPage() {
  return (
    <>
      <SiteHeader />

      <main className="content-page aimex-page">
        <section className="page-hero page-hero-product" aria-labelledby="aimex-title">
          <div className="page-hero-copy">
            <p className="eyebrow">AIMEX / Workcell execution</p>
            <h1 id="aimex-title">A trainable robotic worker for manufacturing workcells</h1>
            <p>
              AIMEX combines task intelligence, execution integration, and
              workcell hardware. AIMRO&apos;s live proof of concept demonstrates
              the core path from human demonstration to explicit task knowledge
              and verified robot execution. The current work is turning that
              foundation into a factory-deployable product.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Discuss Your Workcell
              </Link>
            </div>
          </div>

          <figure className="page-hero-media">
            <img
              src="/images/aimex-hero.jpg"
              alt="AIMEX robotic arm and camera system on a mobile work platform"
              width="1448"
              height="1086"
            />
            <figcaption>
              <span>AIMEX development system</span>
              <strong>Workcell intelligence connected to physical execution</strong>
            </figcaption>
          </figure>
        </section>

        <section className="story-section">
          <div className="story-heading story-heading-wide">
            <p className="eyebrow">The learning and execution path</p>
            <h2>From observed work to a result the system can check</h2>
            <p>
              A reusable manufacturing skill needs to describe more than what a
              person moved. It must also retain the intended result, the
              conditions for each action, and the evidence that confirms the
              task is complete.
            </p>
          </div>

          <ol className="process-ribbon process-ribbon-five">
            {process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="story-section concept-section" aria-labelledby="concept-title">
          <div className="concept-intro">
            <p className="eyebrow">Explicit task intelligence</p>
            <h2 id="concept-title">Turn several sources into qualified task knowledge</h2>
            <p>
              A demonstration rarely contains every fact required for safe,
              repeatable work. AIMRO is developing an interpretation layer that
              combines manufacturing information while preserving its source,
              uncertainty, and gaps for review.
            </p>
          </div>

          <div className="concept-pair concept-pair-single">
            <article>
              <p>Interpretation layer / under development</p>
              <h3>Multimodal Understanding and Abstraction (MUA)</h3>
              <p>
                MUA is intended to bring together demonstrations, images, work
                instructions, equipment signals, product references, and human
                explanations. Its role is to preserve where information came
                from and surface missing or conflicting information before that
                material becomes task knowledge.
              </p>
            </article>
          </div>
        </section>

        <section className="story-section architecture-story" aria-labelledby="architecture-title">
          <header className="architecture-story-heading">
            <p className="eyebrow">AIM AIOS architecture</p>
            <h2 id="architecture-title">One architecture, two operating tiers, locally capable AIMEX systems</h2>
            <p>
              Every AIMEX is intended to carry the intelligence and integration
              required for its own execution role. AIM Tower coordinates work
              across those systems through task assignments, status, and
              results. It does not replace local AIMEX decision-making or
              verification with one central controller.
            </p>
          </header>

          <figure className="architecture-slide architecture-slide-product">
            <a
              className="architecture-slide-viewport"
              href="/images/aim-aios-architecture.png"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the AIM AIOS architecture diagram at full size"
            >
              <img
                src="/images/aim-aios-architecture.png"
                alt="AIM AIOS architecture showing AIM Tower coordinating with AIMEX systems for robotic arms and other intended factory roles through execution status and feedback"
                width="2222"
                height="872"
                loading="lazy"
              />
            </a>
            <figcaption>
              Architecture from AIMRO product materials. Workcell execution is
              the current productization focus. AIM Tower and the additional
              robotic body categories describe the broader development direction,
              not a catalog of products already deployed.
            </figcaption>
          </figure>
        </section>

        <section className="story-section reuse-section" aria-labelledby="reuse-title">
          <div className="reuse-heading">
            <p className="eyebrow">Skill reuse</p>
            <h2 id="reuse-title">Retain task meaning while validating each new station</h2>
          </div>
          <div className="reuse-copy">
            <p>
              A reusable skill preserves what the work is meant to accomplish:
              the parts involved, required conditions, intended changes, and
              evidence of completion. That knowledge should not disappear when
              a person leaves or remain trapped in one robot program.
            </p>
            <p>
              Reuse does not mean zero commissioning. A new station still needs
              its hardware, sensing, calibration, parameters, and acceptance
              tests configured and validated. AIMRO&apos;s objective is to carry
              qualified task knowledge forward so teams do not rebuild every
              deployment from the beginning.
            </p>
          </div>
        </section>

        <section className="story-section capability-section">
          <div className="capability-section-heading">
            <div>
              <p className="eyebrow">Core building blocks</p>
              <h2>Software and hardware developed together</h2>
            </div>
            <p>
              AIMEX combines practical disciplines that must work together for
              a learned task to become reliable physical work.
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

        <section className="page-cta">
          <div>
            <p className="eyebrow">Discuss a workcell</p>
            <h2>Tell us about the task, the parts, and the required result</h2>
          </div>
          <div className="page-cta-actions">
            <Link className="button button-primary" href="/contact">
              Contact AIMRO
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
