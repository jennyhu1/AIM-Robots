# AIMRO Company Website

A concise, English-language company and recruiting site for AIMRO and its AIMEX platform.

## Pages

- `/` — company homepage with a concise company, technology, applications, leadership, careers, and contact story
- `/aimex` — AIMEX learning, execution, perception, and system-building blocks
- `/applications` — assembly development focus and target directions in material handling and visual inspection
- `/about` — company approach, founder, and Herndon lab
- `/contact` — standalone contact page with direct email and office address
- `/careers/robotics-ai-engineering-intern` — complete internship description and email application instructions

The site contains no database, login, form submission, tracking, or recruitment backend. Applications open the visitor's own email app.

## Local preview

Requirements:

- Node.js 22.13 or newer
- npm

Install and start the local preview:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Checks and production build

```bash
npm run build
npm test
npm run lint
```

The project uses the Cloudflare-compatible vinext build included in the starter. In Cloudflare Workers Builds, use `pnpm run build` as the build command and `pnpm exec wrangler deploy --config dist/server/wrangler.json` as the deploy command. The Cloudflare project name and generated Worker name are both `aim-robots`. The site does not require a database or separate application backend.

Before a public build, set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin so social-share metadata uses the correct absolute URL:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com npm run build
```

The GitHub `main` branch is connected to the current Cloudflare preview. The
custom-domain production launch should wait until the preview and the checklist
below are approved.

## Maintenance guide

### Company details and contact information

Edit [`app/site-data.ts`](app/site-data.ts) to change:

- brand and legal company names
- product name
- contact email
- Herndon location and full street address
- Jeff Cui's LinkedIn URL
- role title, logistics, URL, and open/closed status

The email address and role settings are centralized so the homepage and job page stay consistent.
Edit [`app/contact/page.tsx`](app/contact/page.tsx) to change the standalone
contact-page headings or explanatory copy; its email and address still come
from `app/site-data.ts`.

### Open or close the role

In [`app/site-data.ts`](app/site-data.ts), change:

```ts
open: true
```

to:

```ts
open: false
```

When closed, the homepage shows `Position Closed`, and the job page hides the email application buttons.

### Company, technology, applications, careers, and founder copy

Edit these files:

- `app/page.tsx` — homepage overview, technology preview, applications preview, leadership, careers, and contact
- `app/aimex/page.tsx` — detailed AIMEX and AIM AIOS explanation
- `app/applications/page.tsx` — application status and manufacturing-task fit
- `app/about/page.tsx` — company, founder, and lab information

### Job description

Edit [`app/careers/robotics-ai-engineering-intern/page.tsx`](app/careers/robotics-ai-engineering-intern/page.tsx).

To replace the downloadable PDF, keep the same filename:

`public/downloads/AIMRO_Robotics_AI_Intern_JD.pdf`

### Photos and social preview

Web-ready copies are in `public/images/`. The original PPT remains unchanged in the project root.

- `aimex-hero.jpg` — homepage hero
- `aimex-demo-hardware.jpg` — real hardware image extracted from the supplied `AIM Robots V4-suggestions.pptx` and compressed for the web
- `aim-aios-architecture.png` — web copy of slide 6 from the supplied cold-email deck; replace this file to update the architecture screenshot
- `manufacturing-workcell.jpg` — industrial workcell context image from the legacy site
- `perception-visualization.jpg` — visual-perception example from the legacy site
- `application-robot-arm.jpg`, `application-material-handling.jpg`, `application-operator-console.jpg`, and `application-machine-equipment.jpg` — compressed copies from the project-level `Photos/` folder; the public page labels these as illustrative contexts rather than delivered products
- `jeff-cui.jpg` — founder portrait
- `og.png` — social-share preview

Replace an image with the same filename to avoid editing page code. Preserve the current aspect ratio where possible and verify the crop on mobile.

### Brand color and visual styles

Edit the CSS variables at the top of [`app/globals.css`](app/globals.css):

```css
--brand: #c00000;
--brand-dark: #980000;
--brand-soft: #fff1f1;
```

## Content references

The company and technology copy was selectively informed by the previous
[`haider-sama/web-templates`](https://github.com/haider-sama/web-templates)
prototype. The current site keeps its own React/Vinext implementation and visual
system. Market-size figures, cost and deployment claims, customer or partnership
claims, broad hardware catalogs, go-to-market material, and placeholder sections
from the prototype were intentionally excluded.

The expanded information architecture and technology language also use the
supplied `AIM Robots V4-suggestions.pptx` and
`AIM_Robots_Master_Story_v2_9.docx` as controlled content references. The public
site uses the materials' company problem, demonstration-to-execution flow, and
AIMEX/AIM Tower relationship. Fundraising terms, market figures, performance
benchmarks, purchase agreements, projected economics, competitive claims,
patent plans, pipeline data, and hardware-portfolio claims were intentionally
excluded. The [Palladyne AI website](https://www.palladyneai.com/) informed only
the high-level information order—company, technology, product, applications,
and company information—not the site's visual design or code.

Two visuals from that repository add manufacturing context: an industrial
robot workcell photograph and a machine-vision visualization. Their untouched source
files remain available in the legacy repository and are also preserved locally
under the ignored `source-assets/legacy-web/` folder; compressed copies in
`public/images/` are served by the site. The workcell photograph contains
recognizable people in the background, so its publication clearance should be
confirmed before the final domain launch.

## Pre-launch confirmation checklist

- [ ] Confirm the public relationship between the display brand `AIMRO` and legal company name `AIM Robots, Inc.`.
- [ ] Confirm the current product naming hierarchy. The current project presents `AIMEX` as the core platform; the legacy site describes `AIM AI Operating System (AIOS)` as the umbrella architecture and expands `AIMEX` as `AIM Executor`.
- [ ] Confirm the public development-status wording for `AIMEX` and `AIM Tower`. The supplied cold-email deck slide 6 shows both operating tiers without `current`, `today`, `planned`, or `over time` labels, while the Master Story and earlier website copy described AIMEX as the current focus and AIM Tower as planned. The public relationship diagram is now status-neutral until this is reconciled.
- [ ] Confirm that material handling and vision-based inspection should remain public target applications rather than current delivered capabilities.
- [ ] Confirm that the public explanation of AIMEX may include explicit task knowledge, guarded execution, verification, recovery, and human escalation at the development-system level.
- [ ] Confirm that the `aimex-demo-hardware.jpg` image extracted from the supplied presentation is cleared for public website use. It contains circuit boards and demonstration equipment; no visible faces were found.
- [ ] Confirm that AIMRO has permission to publish the two images carried over from the legacy repository.
- [ ] Confirm that the visible people in the background of the industrial workcell photograph are acceptable for public use.
- [ ] Confirm that the embedded labels and temperature-style values in the machine-vision visualization are suitable for public display and do not imply validated AIMRO performance data.
- [ ] Confirm the founder's full name is `Jeff Cui` and the public title should be `Founder & CEO`. The supplied deck also says `Founder, CEO & CPO`.
- [ ] Confirm the current names, titles, and public biographies for William Noe, Jake Cui, Dr. Li Zheng, and Dr. Yifan Li. The About page follows the `OUR TEAM` slide in `AIM Robots V4-suggestions.pptx`.
- [ ] Confirm whether the four additional leadership portraits in `AIM Robots V4-suggestions.pptx` are cleared for publication before adding them to the public site.
- [ ] Confirm the public wording of Jeff Cui's manufacturing, factory reshoring, and BS/MS background at Tsinghua University and the University of Maryland.
- [ ] Confirm the supplied founder portrait is current and cleared for website use.
- [ ] Confirm the PPT's AIMEX imagery represents the current robot system and is cleared for public use. The main source image has a digitally rendered/composited appearance and includes embedded interface-style text.
- [ ] Confirm that the concept images from the project-level `Photos/` folder are cleared for public use as illustrative application contexts. They appear digitally generated and should not be presented as current shipped hardware.
- [ ] Confirm that the operator-console concept image is suitable for public use. It includes a person shown from behind and visible interface-style screen content.
- [ ] Confirm that slide 6 from the supplied cold-email deck may be published directly as the AIM AIOS architecture image. It includes the footer `Investor Introduction | 2026`.
- [ ] Confirm that the internship is open, paid, part-time, hybrid, and based in Herndon, Virginia.
- [ ] Confirm that the original JD PDF is the version to publish.
- [ ] Confirm `jenny.hu@aimrobots.ai` as the public contact and application email.
- [ ] Confirm Jeff Cui's LinkedIn URL.
- [ ] Confirm the final public domain and set `NEXT_PUBLIC_SITE_URL` before the production build.
- [ ] Review the site on a real phone and desktop browser before publishing.
