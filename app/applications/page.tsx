/* eslint-disable @next/next/no-img-element -- Web-ready company images are served directly. */
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SiteLink as Link } from "../components/SiteLink";

export const metadata: Metadata = {
  title: "Manufacturing Applications",
  description:
    "Explore how AIMRO's AIOS architecture applies to robotic arms, AGVs, AMRs, and industrial inspection.",
};

const applicationAreas = [
  {
    number: "01",
    status: "Current development focus",
    title: "Robotic arms",
    image: "/images/application-robotic-arm-concept.jpg",
    alt: "Concept rendering of an AIMRO robotic arm and camera system on a mobile work platform",
    body: [
      "Robotic arms are AIMRO's starting point for assembly and production work. In a controlled workcell, an experienced person can demonstrate the task and explain the intended physical result.",
      "AIMEX is being developed to retain the parts, operating conditions, action sequence, and evidence that confirms completion, then connect that task knowledge to station-specific cameras, tooling, fixtures, and robot motion.",
      "The proof-of-concept system demonstrates the core path from demonstration to guarded execution, verification, and recovery. Factory deployment and repeatable performance across representative tasks remain productization work.",
    ],
    caption: "AIMRO robotic-arm concept",
  },
  {
    number: "02",
    status: "Target application",
    title: "AGVs",
    image: "/images/application-agv-concept.jpg",
    alt: "Concept rendering of an AIMRO automated guided forklift carrying a palletized container",
    body: [
      "Automated guided vehicles can move material between defined pickup points, stations, queues, and destinations. The task description must preserve which item is being moved, its required condition, the authorized route or operating zone, and the evidence that delivery is complete.",
      "In the intended AIOS architecture, an AGV-based AIMEX would retain local navigation and execution capability while exchanging assignments, status, and results with AIM Tower at the factory level.",
      "AGV integration remains a target application direction. Its hardware, site constraints, traffic behavior, and production performance require application-specific validation.",
    ],
    caption: "AIMRO AGV concept",
  },
  {
    number: "03",
    status: "Target application",
    title: "AMRs",
    image: "/images/application-amr-concept.jpg",
    alt: "Concept rendering of an AIMRO autonomous mobile robot with a robotic arm",
    body: [
      "Autonomous mobile robots can support material movement, mobile service, and tasks that need to reach more than one station. A useful skill must describe both the production objective and the conditions that allow the mobile platform to act at each location.",
      "The architecture is intended to give each AMR-based AIMEX its own embodied execution role. Factory coordination can assign work and monitor progress without replacing the robot's local task execution and verification.",
      "AMR applications are a development direction, not a mature deployed offering. Mobility, manipulation, sensing, safety integration, and each workflow still require separate validation.",
    ],
    caption: "AIMRO AMR concept",
  },
  {
    number: "04",
    status: "Target application",
    title: "Inspection",
    image: "/images/application-inspection-concept.jpg",
    alt: "Concept rendering of an AIMRO industrial vision and lighting system",
    body: [
      "Inspection systems provide evidence about parts, process states, and completed work. For that evidence to guide production, the task must define what is being checked, which condition counts as pass or fail, and what should happen when the result is uncertain.",
      "AIMRO's proof of concept already includes result verification within a robotic task flow. The broader direction is to connect cameras, vision stations, and inspection devices to explicit quality evidence and corrective actions.",
      "A production inspection product remains a target application. It requires task-specific data, calibrated sensing, acceptance criteria, and validation in the intended operating environment.",
    ],
    caption: "AIMRO inspection-system concept",
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
              AIMRO is starting with controlled robotic-arm assembly and
              part-placement work. The same locally capable AIMEX architecture
              is designed to extend to mobile material handling and inspection
              after each application&apos;s hardware, skills, and operating
              performance are validated.
            </p>
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

        <section className="application-stories" aria-label="Application areas">
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
