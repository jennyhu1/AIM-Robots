export const SITE = {
  brandName: "AIMRO",
  legalName: "AIM Robots, Inc.",
  productName: "AIMEX",
  email: "jenny.hu@aimrobots.ai",
  location: "Herndon, Virginia",
  address: {
    street: "580 Herndon Pkwy",
    suite: "Ste 700",
    cityRegionPostal: "Herndon, VA 20170",
    country: "United States",
  },
  linkedIn: "https://www.linkedin.com/in/jeff-cui-928266233/",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Leadership", href: "#leadership" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const OPEN_ROLE = {
  title: "Robotics AI Engineering Intern",
  subtitle: "Perception, Simulation & Robot Integration",
  location: SITE.location,
  workplace: "Hybrid",
  type: "Part-time Internship",
  compensation: "Paid",
  href: "/careers/robotics-ai-engineering-intern",
  open: true,
} as const;

const applicationSubject = `Application – ${OPEN_ROLE.title}`;
const applicationBody = [
  "Name:",
  "",
  "Project link:",
  "",
  "A few sentences about the hardest bug you encountered and how you solved it:",
].join("\n");

export const APPLICATION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  applicationSubject,
)}&body=${encodeURIComponent(applicationBody)}`;
