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
      "Assembly is AIMRO's current starting point: controlled tasks in which a person can demonstrate the work and explain the intended result.",
      "A useful evaluation must define the parts, sequence, tooling, variation, and evidence that confirms completion. AIMEX connects that task knowledge with vision, simulation, and physical workcell integration.",
      "The proof-of-concept system demonstrates the core learning and execution path. Factory deployment, repeatability across representative tasks, and production reliability remain productization work.",
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
      "Material movement could use the same explicit description of the item, pickup condition, destination, and delivery result. The intended architecture gives each mobile AIMEX its own execution capability while exchanging assignments and status with factory-level coordination.",
      "This remains a planned application direction. Hardware integration, operating constraints, and task performance require separate validation before it can be presented as a deployed offering.",
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
      "Visual or equipment evidence could confirm a defined result before the next production step. The task must specify what is being checked, which evidence is authoritative, and what happens when the result remains uncertain.",
      "AIMRO's current demonstration includes result checks within its task flow. A broader production inspection product remains a planned direction and requires application-specific proof.",
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
              AIMRO is starting with controlled assembly and part-placement
              work. Additional applications describe where the architecture
              could extend after their hardware, task skills, and operating
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
