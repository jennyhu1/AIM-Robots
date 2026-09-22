import type { Metadata } from "next";
import Link from "next/link";
import { EmailActions } from "../../components/EmailActions";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { OPEN_ROLE, SITE } from "../../site-data";

export const metadata: Metadata = {
  title: "Robotics AI Engineering Intern",
  description:
    "A paid, part-time robotics AI engineering internship with AIMRO in Herndon, Virginia.",
  openGraph: {
    title: "Robotics AI Engineering Intern | AIMRO",
    description:
      "Perception, simulation, and robot integration internship in Herndon, Virginia.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Robotics AI Engineering Intern | AIMRO",
    description:
      "Perception, simulation, and robot integration internship in Herndon, Virginia.",
    images: [],
  },
};

export default function RoboticsAiEngineeringInternPage() {
  return (
    <>
      <SiteHeader interior />

      <main className="job-page">
        <header className="job-hero">
          <Link className="back-link" href="/#careers">
            <span aria-hidden="true">←</span>
            Careers
          </Link>
          <div className="job-title-row">
            <div>
              <p className="eyebrow">{OPEN_ROLE.open ? "Open position" : "Position closed"}</p>
              <h1>{OPEN_ROLE.title}</h1>
              <p className="job-subtitle">{OPEN_ROLE.subtitle}</p>
            </div>
            <span className={OPEN_ROLE.open ? "job-status" : "job-status job-status-closed"}>
              {OPEN_ROLE.open ? "Accepting applications" : "Position Closed"}
            </span>
          </div>
          <ul className="job-meta" aria-label="Position details">
            <li>{OPEN_ROLE.location}</li>
            <li>{OPEN_ROLE.workplace}</li>
            <li>{OPEN_ROLE.type}</li>
            <li>{OPEN_ROLE.compensation}</li>
          </ul>
        </header>

        <div className="job-layout">
          <article className="job-description">
            <section aria-labelledby="about-work">
              <h2 id="about-work">About the Work</h2>
              <p>
                AIMRO builds AIMEX, an AI platform that teaches industrial robots
                to perform assembly tasks by watching people do them. Our lab is
                where that gets real: cameras, robots, simulation, and vision
                models, all working together to turn human demonstrations into
                robot actions. We&apos;re a small team, and that&apos;s the best part:
                nobody is boxed into one lane, and you&apos;ll get your hands on far
                more of the stack than you would anywhere else.
              </p>
            </section>

            <section aria-labelledby="what-youll-do">
              <h2 id="what-youll-do">What You&apos;ll Do</h2>
              <p>
                This is an apprenticeship in becoming a full-stack robotics AI
                engineer. Over time you&apos;ll work across the whole loop:
              </p>
              <ul>
                <li>
                  <strong>Perception:</strong> train and evaluate vision models on
                  synthetic and real data, and close the sim-to-real gap.
                </li>
                <li>
                  <strong>Simulation:</strong> build simulation scenes that generate
                  synthetic training data.
                </li>
                <li>
                  <strong>Robot integration:</strong> bring up cameras, grippers, and
                  robot arms, calibrate them, and get pick-and-place running end to
                  end.
                </li>
                <li>
                  <strong>Demonstration capture:</strong> run and improve the
                  multi-camera recording rig and the tooling around it.
                </li>
                <li>
                  <strong>AI-assisted development:</strong> use AI agents as a daily
                  part of the workflow, and help build the knowledge base they run
                  on.
                </li>
                <li>
                  <strong>Documentation and hardware:</strong> write the design docs,
                  design and 3D-print fixtures and mounts when the lab needs them.
                </li>
              </ul>
            </section>

            <section aria-labelledby="who-looking-for">
              <h2 id="who-looking-for">Who We&apos;re Looking For</h2>
              <p>
                Someone who wants to be capable across all of the above and can
                show it:
              </p>
              <ul>
                <li>
                  You&apos;ve built something physical that runs code, such as a robot,
                  a camera rig, or a Raspberry Pi project, and can tell us what
                  broke and how you fixed it.
                </li>
                <li>
                  Solid Python or C++, and comfortable working from vendor SDKs
                  with thin documentation.
                </li>
                <li>
                  Comfortable in Linux and Windows, and good at getting hardware
                  to talk.
                </li>
                <li>
                  Computer vision fundamentals from coursework or projects.
                </li>
                <li>
                  Already uses AI coding tools, and can explain what they get
                  wrong.
                </li>
              </ul>
            </section>

            <section aria-labelledby="nice-to-have">
              <h2 id="nice-to-have">Nice to Have</h2>
              <p>
                Simulation or ROS 2 experience, CAD and 3D printing, Chinese
                proficiency (much of our vendor ecosystem is Chinese), robotics
                club or competition experience.
              </p>
            </section>

            <section aria-labelledby="growth-opportunities">
              <h2 id="growth-opportunities">Growth Opportunities</h2>
              <p>
                We&apos;re hiring an intern to grow, not to fill a seat. The path is
                intern → engineer → owning the lab&apos;s technical stack: the person
                who decides how we capture data, train models, and integrate
                robots. Want to go deep and become our expert in one of these
                areas? We&apos;d love that, and we&apos;ll help you get there. Want to learn
                how every piece fits together and eventually run the whole stack?
                That&apos;s the path we&apos;re building this role around. Either way,
                you&apos;ll own real work from day one.
              </p>
            </section>

            <section aria-labelledby="logistics">
              <h2 id="logistics">Logistics</h2>
              <p>
                Flexible working hours, with option to extend or convert.
                Compensation is based on qualifications and experiences. Hybrid
                work with a site in Herndon, Virginia. Students in CS, EE, ME, or
                robotics and recent graduates are welcome.
              </p>
            </section>

            <section aria-labelledby="how-to-apply">
              <h2 id="how-to-apply">How to Apply</h2>
              <p>
                Send a resume plus one thing you built (a repository, video, or
                write-up) and a few sentences on the hardest bug in it to
                {" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            </section>

            <a
              className="pdf-link"
              href="/downloads/AIMRO_Robotics_AI_Intern_JD.pdf"
              download
            >
              Download the original job description (PDF)
              <span aria-hidden="true">↓</span>
            </a>
          </article>

          <aside className="application-panel" aria-label="Application instructions">
            {OPEN_ROLE.open ? (
              <>
                <p className="eyebrow">Apply by email</p>
                <h2>Interested in the role?</h2>
                <p>
                  Please email your resume, a link to something you built (a
                  repository, video, or write-up), and a few sentences about the
                  hardest bug you encountered and how you solved it.
                </p>
                <EmailActions />
                <p className="application-note">
                  Remember to attach your resume. The button opens your email app;
                  it does not send the message or attach files automatically. If
                  no email app is configured, copy the address and apply manually.
                </p>
              </>
            ) : (
              <>
                <p className="eyebrow">Position status</p>
                <h2>Position Closed</h2>
                <p>
                  This position is not currently accepting applications. Please
                  check the careers section for future openings.
                </p>
              </>
            )}
          </aside>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
