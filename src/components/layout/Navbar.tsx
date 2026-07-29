"use client";

import { useEffect, useState } from "react";
import { NightCoreMark } from "./NightCoreMark";

const navigation = [
  { label: "Products", href: "#products" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Engineering", href: "#engineering" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-night-black/80 shadow-[0_1rem_3rem_rgb(0_0_0_/_0.16)] backdrop-blur-xl">
      <div className="container-shell">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <a
              href="#home"
            aria-label="NightCode Labs home"
            className="flex min-w-0 items-center gap-3 rounded-md text-sm font-semibold tracking-[-0.02em] text-pure-white outline-none transition-opacity motion-standard hover:opacity-80 focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-night-black"
            onClick={closeMenu}
          >
            <NightCoreMark />
            <span className="truncate">NightCode Labs</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground outline-none transition-colors motion-standard hover:bg-surface hover:text-pure-white focus-visible:ring-2 focus-visible:ring-electric-cyan"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#jarvis"
              className="hidden rounded-md bg-pure-white px-4 py-2 text-sm font-medium text-night-black outline-none transition-colors motion-standard hover:bg-electric-cyan focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-night-black sm:inline-flex"
            >
              Launch JARVIS
            </a>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground outline-none transition-colors motion-standard hover:border-border-strong hover:text-pure-white focus-visible:ring-2 focus-visible:ring-electric-cyan lg:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
                <span className={`h-px w-full bg-current transition-transform motion-standard ${isMenuOpen ? "translate-y-1" : ""}`} />
                <span className={`h-px w-full bg-current transition-transform motion-standard ${isMenuOpen ? "-translate-y-1 rotate-90" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-[max-height,opacity] motion-standard lg:hidden ${isMenuOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav aria-label="Mobile primary navigation" className="flex flex-col border-t border-border pt-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground outline-none transition-colors motion-standard hover:bg-surface hover:text-pure-white focus-visible:ring-2 focus-visible:ring-electric-cyan"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#jarvis"
              className="mt-2 rounded-md bg-pure-white px-4 py-3 text-center text-sm font-medium text-night-black outline-none transition-colors motion-standard hover:bg-electric-cyan focus-visible:ring-2 focus-visible:ring-electric-cyan sm:hidden"
              onClick={closeMenu}
            >
              Launch JARVIS
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
