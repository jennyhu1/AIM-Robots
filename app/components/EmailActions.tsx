"use client";

import { useState } from "react";
import { APPLICATION_MAILTO, SITE } from "../site-data";

type CopyState = "idle" | "copied" | "failed";

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const temporaryInput = document.createElement("textarea");
  temporaryInput.value = value;
  temporaryInput.setAttribute("readonly", "");
  temporaryInput.style.position = "fixed";
  temporaryInput.style.opacity = "0";
  document.body.appendChild(temporaryInput);
  temporaryInput.select();
  const copied = document.execCommand("copy");
  temporaryInput.remove();

  if (!copied) {
    throw new Error("Copy command failed");
  }
}

export function EmailActions() {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  async function handleCopy() {
    try {
      await copyText(SITE.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <div className="email-actions">
      <a className="button button-primary button-wide" href={APPLICATION_MAILTO}>
        Apply by Email
      </a>
      <button className="copy-button" type="button" onClick={handleCopy}>
        Copy Email
      </button>
      <p className="email-address">
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
      <p className="copy-status" role="status" aria-live="polite">
        {copyState === "copied" && "Email copied."}
        {copyState === "failed" &&
          "Copy failed. Select the email address above and copy it manually."}
      </p>
    </div>
  );
}
