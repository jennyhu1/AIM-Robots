"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
      <Link
        className="wordmark"
        href="/"
        aria-label="AIMRO home"
      >
        AIMRO
      </Link>

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
            <Link
              className={isContact ? "nav-contact" : undefined}
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              {isContact ? <span aria-hidden="true">↗</span> : null}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
