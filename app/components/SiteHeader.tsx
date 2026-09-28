"use client";

/* eslint-disable @next/next/no-html-link-for-pages -- Full document navigation keeps the header reliable on the deployed Cloudflare Worker even if client-side routing is unavailable. */

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="/"
        aria-label="AIMRO home"
      >
        AIMRO
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav
        id="primary-navigation"
        className={menuOpen ? "primary-nav primary-nav-open" : "primary-nav"}
        aria-label="Primary navigation"
      >
        {NAV_ITEMS.map((item) => {
          const isContact = item.label === "Contact";

          return (
            <a
              className={isContact ? "nav-contact" : undefined}
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              {isContact ? <span aria-hidden="true">↗</span> : null}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
