import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the AIMRO homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>AIMRO \| Industrial Robotics AI<\/title>/i);
  assert.match(html, /Turn manufacturing know-how into reusable robotic work/);
  assert.match(html, /Factories repeat too much training and engineering/);
  assert.match(html, /A manufacturing skill includes more than motion/);
  assert.match(html, /aimex-demo-hardware\.jpg/);
  assert.match(html, /Local intelligence at the workcell/);
  assert.match(html, /AIM Tower/);
  assert.match(html, /AIM AI Operating System/);
  assert.doesNotMatch(html, /aim-aios-architecture\.png/);
  assert.match(html, /does not place one central brain above passive machines/);
  assert.match(html, /Material handling/);
  assert.match(html, /Inspection within a workflow/);
  assert.doesNotMatch(html, /id="leadership"/);
  assert.match(html, /jenny\.hu@aimrobots\.ai/);
  assert.match(html, /580 Herndon Pkwy/);
  assert.match(html, /Herndon, VA 20170/);
  assert.match(html, /\/images\/aimex-hero\.jpg/);
  assert.match(html, /href="\/careers"/);
  assert.match(html, /href="\/contact"/);
  assert.doesNotMatch(html, /Developed in Herndon, Virginia/);
  assert.doesNotMatch(html, /Discover AIMEX|Explore Applications|About AIMRO\s*<span/i);
  assert.doesNotMatch(
    html,
    /\/images\/(?:aimex-system|aimex-concept|aimex-material-handling-concept)\.png/,
  );
  assert.doesNotMatch(html, /View Open Roles/);
  assert.doesNotMatch(html, /id="careers"/);
  assert.doesNotMatch(
    html,
    /50%|\$1\.36T|\$800B|customers? (?:are )?in (?:the )?pipeline|100% IP|Harvard|MIT/i,
  );
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("server-renders the AIMEX technology story", async () => {
  const response = await render("/aimex");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>AIMEX Technology \| AIMRO<\/title>/i);
  assert.match(html, /A trainable robotic worker for manufacturing workcells/);
  assert.match(html, /From observed work to a result the system can check/);
  assert.match(html, /Explicit task intelligence/);
  assert.match(html, /Multimodal Understanding and Abstraction/);
  assert.doesNotMatch(html, /Universal Explicit Representation/);
  assert.match(html, /Learning from demonstrations/);
  assert.match(html, /AIM Tower/);
  assert.match(html, /aim-aios-architecture\.png/);
  assert.match(html, /current productization focus/i);
  assert.match(html, /broader development direction/i);
  assert.match(html, /Reuse does not mean zero commissioning/);
  assert.match(html, /aimex-hero\.jpg/);
  assert.match(html, /AIMEX across robotic bodies/);
  assert.match(html, /Robotic arms/);
  assert.match(html, />AGVs</);
  assert.match(html, />AMRs</);
  assert.match(html, />Inspection</);
  assert.match(html, /application-robotic-arm-concept\.jpg/);
  assert.match(html, /application-agv-concept\.jpg/);
  assert.match(html, /application-amr-concept\.jpg/);
  assert.match(html, /application-inspection-concept\.jpg/);
  assert.match(html, /perception-visualization\.jpg/);
  assert.doesNotMatch(html, /\$1\.2M|80%|RaaS|patent|purchase agreement/i);
});

test("server-renders development and target application states", async () => {
  const response = await render("/applications");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Manufacturing Applications \| AIMRO<\/title>/i);
  assert.match(html, /Development focus/);
  assert.match(html, /Assembly/);
  assert.match(html, /Target application/);
  assert.match(html, /Material handling/);
  assert.match(html, /Visual inspection/);
  assert.match(html, /manufacturing-workcell\.jpg/);
  assert.match(html, /Factory deployment, repeatability across representative tasks/);
});

test("server-renders the company mission without personal profiles", async () => {
  const response = await render("/about");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>About AIMRO \| AIMRO<\/title>/i);
  assert.match(html, /Building reusable intelligence for manufacturing/);
  assert.match(html, /Manufacturing knowledge does not scale easily/);
  assert.match(html, /Live proof of concept/);
  assert.match(html, /Factory-deployable AIMEX/);
  assert.match(html, /Coordinated robotic factories/);
  assert.doesNotMatch(html, /Jeff Cui|William Noe|Jake Cui|Dr\. Li Zheng|Dr\. Yifan Li/);
  assert.doesNotMatch(html, /Leadership|Founder|Advisors|jeff-cui\.jpg|william-noe\.jpg/i);
  assert.match(html, /AIM Robots, Inc\./);
  assert.match(html, /580 Herndon Pkwy/);
  assert.match(html, /Herndon, VA 20170/);
});

test("server-renders the standalone careers page", async () => {
  const response = await render("/careers");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Careers \| AIMRO<\/title>/i);
  assert.match(html, /Build robotics AI where software meets the machine/);
  assert.match(html, /What the work looks like/);
  assert.match(html, /Robotics AI Engineering Intern/);
  assert.match(html, /Perception, Simulation &amp; Robot Integration/);
  assert.match(html, /Herndon, Virginia/);
  assert.match(html, /Part-time Internship/);
  assert.match(html, /\/careers\/robotics-ai-engineering-intern/);
  assert.match(html, /aimex-demo-hardware\.jpg/);
  assert.doesNotMatch(html, /<form\b|Handshake/i);
});

test("server-renders the standalone contact page", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Contact \| AIMRO<\/title>/i);
  assert.match(html, /Start a conversation about the work/);
  assert.match(html, /jenny\.hu@aimrobots\.ai/);
  assert.match(html, /580 Herndon Pkwy/);
  assert.match(html, /Herndon, VA 20170/);
  assert.match(html, /mailto:jenny\.hu@aimrobots\.ai/);
  assert.doesNotMatch(html, /<form\b/i);
});

test("server-renders the complete role and application path", async () => {
  const response = await render("/careers/robotics-ai-engineering-intern");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /About the Work/);
  assert.match(html, /What You(?:&apos;|&#x27;|')ll Do/);
  assert.match(html, /Who We(?:&apos;|&#x27;|')re Looking For/);
  assert.match(html, /Nice to Have/);
  assert.match(html, /Growth Opportunities/);
  assert.match(html, /Logistics/);
  assert.match(html, /How to Apply/);
  assert.match(html, /Apply by Email/);
  assert.match(html, /Application%20%E2%80%93%20Robotics%20AI%20Engineering%20Intern/);
  assert.match(html, /AIMRO_Robotics_AI_Intern_JD\.pdf/);
  assert.doesNotMatch(html, /Handshake|upload|submitted successfully/i);
});

test("keeps role status and maintenance settings centralized", async () => {
  const [data, careersPage, jobPage] = await Promise.all([
    readFile(new URL("../app/site-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/careers/page.tsx", import.meta.url), "utf8"),
    readFile(
      new URL(
        "../app/careers/robotics-ai-engineering-intern/page.tsx",
        import.meta.url,
      ),
      "utf8",
    ),
  ]);

  assert.match(data, /open:\s*true/);
  assert.match(data, /jenny\.hu@aimrobots\.ai/);
  assert.match(data, /encodeURIComponent\(\s*applicationSubject/);
  assert.match(data, /encodeURIComponent\(applicationBody\)/);
  assert.match(careersPage, /OPEN_ROLE\.open/);
  assert.match(jobPage, /OPEN_ROLE\.open/);
  assert.match(jobPage, /Position Closed/);
  assert.doesNotMatch(data + careersPage + jobPage, /Handshake/i);
});

test("uses full document navigation for deployed internal links", async () => {
  const files = await Promise.all(
    [
      "../app/page.tsx",
      "../app/aimex/page.tsx",
      "../app/applications/page.tsx",
      "../app/about/page.tsx",
      "../app/careers/page.tsx",
      "../app/contact/page.tsx",
      "../app/careers/robotics-ai-engineering-intern/page.tsx",
      "../app/components/SiteFooter.tsx",
      "../app/components/SiteLink.tsx",
    ].map((path) => readFile(new URL(path, import.meta.url), "utf8")),
  );

  assert.doesNotMatch(files.join("\n"), /from ["']next\/link["']/);
  assert.match(files.at(-1) ?? "", /<a href=\{href\}/);
});

test("removes in-page and cross-page anchor navigation", async () => {
  const files = await Promise.all(
    [
      "../app/page.tsx",
      "../app/aimex/page.tsx",
      "../app/applications/page.tsx",
      "../app/about/page.tsx",
      "../app/careers/page.tsx",
      "../app/contact/page.tsx",
      "../app/components/SiteFooter.tsx",
    ].map((path) => readFile(new URL(path, import.meta.url), "utf8")),
  );

  const source = files.join("\n");
  assert.doesNotMatch(source, /href\s*=\s*["'`]#[^"'`]*/);
  assert.doesNotMatch(source, /href\s*=\s*["'`]\/[^"'`]*#[^"'`]*/);
  assert.doesNotMatch(source, /scrollIntoView|location\.hash/);
});
