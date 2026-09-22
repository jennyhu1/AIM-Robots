"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../site-data";

type SiteHeaderProps = {
  interior?: boolean;
};

export function SiteHeader({ interior = false }: SiteHeaderProps) {
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

  const anchorPrefix = interior ? "/" : "";

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href={interior ? "/#home" : "#home"}
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
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={`${anchorPrefix}${item.href}`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
