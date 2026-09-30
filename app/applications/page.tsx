/* eslint-disable @next/next/no-img-element -- Web-ready company images are served directly. */
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SiteLink as Link } from "../components/SiteLink";

export const metadata: Metadata = {
  title: "Manufacturing Applications",
  description:
    "Explore AIMRO's development focus in robotic assembly and target applications in material handling and visual inspection.",
};

const applicationAreas = [
  {
    number: "01",
    status: "Development focus",
    title: "Assembly",
    image: "/images/manufacturing-workcell.jpg",
    alt: "Industrial robot arm operating in a manufacturing workcell",
    body: [
      "Assembly is AIMRO's current starting point: controlled tasks in which a person can demonstrate the work, the system can interpret the task state, and the robot can execute and verify a repeatable sequence.",
      "This work brings together learning from demonstration, computer vision, simulation, and integration with physical robot cells.",
      "AIMEX remains under development; this site does not present these capabilities as a broadly deployed commercial product.",
    ],
    caption: "Industrial robot workcell context",
  },
  {
    number: "02",
    status: "Target application",
    title: "Material handling",
    image: "/images/application-material-handling.jpg",
    alt: "Concept illustration of a mobile robot for moving material in a factory",
    body: [
      "Reusable task knowledge could support movement of parts and materials between production steps, with perception of the work area and explicit checks around each action.",
    ],
    caption: "Illustrative material-handling context",
  },
  {
    number: "03",
    status: "Target application",
    title: "Visual inspection",
    image: "/images/application-operator-console.jpg",
    alt: "Concept illustration of an operator monitoring manufacturing vision systems",
    body: [
      "Camera-based perception can be connected with task context and production evidence to support more consistent inspection workflows.",
    ],
    caption: "Illustrative monitoring and inspection context",
  },
];

const taskFit = [
  {
    title: "The work can be demonstrated",
    body: "An experienced person can show how the task is performed and explain what a correct result looks like.",
  },
  {
    title: "The task needs to adapt",
    body: "Parts, products, or operating conditions change often enough that repeated custom programming creates friction.",
  },
  {
    title: "The result can be checked",
    body: "Cameras, sensors, or equipment signals can provide evidence that the step was completed as intended.",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <SiteHeader />

      <main className="content-page applications-page">
        <section className="page-hero application-page-hero" aria-labelledby="applications-title">
          <div className="page-hero-copy">
            <p className="eyebrow">Manufacturing applications</p>
            <h1 id="applications-title">Learning practical manufacturing work</h1>
            <p>
              AIMRO is starting with assembly and developing a path toward
              adjacent tasks where human know-how, perception, and reliable
              robot execution need to work together.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#application-areas">
                View Application Areas
              </a>
              <Link className="button button-secondary" href="/aimex">
                Explore AIMEX
              </Link>
            </div>
          </div>

          <figure className="application-hero-media">
            <img
              src="/images/application-machine-equipment.jpg"
              alt="Concept illustration of automated manufacturing equipment"
              width="1536"
              height="1024"
            />
            <figcaption>Illustrative manufacturing context</figcaption>
          </figure>
        </section>

        <section className="application-stories" id="application-areas" aria-label="Application areas">
          {applicationAreas.map((area) => (
            <article className="application-story" key={area.title}>
              <figure>
                <img
                  src={area.image}
                  alt={area.alt}
                  width="1400"
                  height="933"
                  loading="lazy"
                />
                <figcaption>{area.caption}</figcaption>
              </figure>
              <div className="application-story-copy">
                <div className="application-story-index">
                  <span>{area.number}</span>
                  <p>{area.status}</p>
                </div>
                <h2>{area.title}</h2>
                {area.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="story-section task-fit-section">
          <div className="story-heading compact-story-heading">
            <p className="eyebrow">Where adaptable robotics can help</p>
            <h2>A practical fit starts with the task</h2>
          </div>

          <ol className="task-fit-grid">
            {taskFit.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="page-cta">
          <div>
            <p className="eyebrow">Discuss a manufacturing task</p>
            <h2>Tell us what needs to be learned, handled, or inspected.</h2>
          </div>
          <div className="page-cta-actions">
            <Link className="button button-primary" href="/contact">
              Contact AIMRO
            </Link>
            <Link className="button button-secondary" href="/aimex">
              How AIMEX Works
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
