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
  assert.match(html, /Teaching robots how assembly work gets done/);
  assert.match(html, /Meet AIMEX/);
  assert.match(html, /Jeff Cui/);
  assert.match(html, /Robotics AI Engineering Intern/);
  assert.match(html, /jenny\.hu@aimrobots\.ai/);
  assert.match(html, /580 Herndon Pkwy/);
  assert.match(html, /Herndon, VA 20170/);
  assert.match(html, /\/images\/aimex-hero\.jpg/);
  assert.match(html, /\/careers\/robotics-ai-engineering-intern/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
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
  const [data, homepage, jobPage] = await Promise.all([
    readFile(new URL("../app/site-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
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
  assert.match(homepage, /OPEN_ROLE\.open/);
  assert.match(jobPage, /OPEN_ROLE\.open/);
  assert.match(jobPage, /Position Closed/);
  assert.doesNotMatch(data + homepage + jobPage, /Handshake/i);
});
