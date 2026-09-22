# AIMRO Company Website

A concise, English-language company and recruiting site for AIMRO and its AIMEX platform.

## Pages

- `/` — company homepage with About, Technology, Leadership, Careers, and Contact sections
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

The project uses the Cloudflare-compatible vinext build included in the starter. For Cloudflare Pages/Workers, connect the repository, use `npm run build` as the build command, and configure the generated worker output according to the hosting dashboard. The site itself is static content and does not require a database or server-side application logic.

Before a public build, set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin so social-share metadata uses the correct absolute URL:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com npm run build
```

No production deployment has been performed. Publish only after the preview and the checklist below are approved.

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

### Company, technology, careers, and founder copy

Edit [`app/page.tsx`](app/page.tsx). The major sections are labeled with clear HTML section IDs:

- `about`
- `technology`
- `leadership`
- `careers`
- `contact`

### Job description

Edit [`app/careers/robotics-ai-engineering-intern/page.tsx`](app/careers/robotics-ai-engineering-intern/page.tsx).

To replace the downloadable PDF, keep the same filename:

`public/downloads/AIMRO_Robotics_AI_Intern_JD.pdf`

### Photos and social preview

Web-ready copies are in `public/images/`. The original PPT remains unchanged in the project root.

- `aimex-hero.jpg` — homepage hero
- `aimex-system.png` — AIMEX system cutout
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

## Pre-launch confirmation checklist

- [ ] Confirm the public relationship between the display brand `AIMRO` and legal company name `AIM Robots, Inc.`.
- [ ] Confirm the founder's full name is `Jeff Cui` and the public title should be `Founder & CEO`. The supplied deck also says `Founder, CEO & CPO`.
- [ ] Confirm the public wording of Jeff Cui's manufacturing, factory reshoring, and BS/MS background at Tsinghua University and the University of Maryland.
- [ ] Confirm the supplied founder portrait is current and cleared for website use.
- [ ] Confirm the PPT's AIMEX imagery represents the current robot system and is cleared for public use. The main source image has a digitally rendered/composited appearance and includes embedded interface-style text.
- [ ] Decide whether the unused control-console image may be shown later. It includes a person's back and visible screen interface content, so it is intentionally excluded from this version.
- [ ] Confirm that the internship is open, paid, part-time, hybrid, and based in Herndon, Virginia.
- [ ] Confirm that the original JD PDF is the version to publish.
- [ ] Confirm `jenny.hu@aimrobots.ai` as the public contact and application email.
- [ ] Confirm Jeff Cui's LinkedIn URL.
- [ ] Confirm the final public domain and set `NEXT_PUBLIC_SITE_URL` before the production build.
- [ ] Review the site on a real phone and desktop browser before publishing.
