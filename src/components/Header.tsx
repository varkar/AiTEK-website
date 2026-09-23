"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "./ui/Container";
import ThemeToggle from "./ThemeToggle";
import { mainNav, type NavItem } from "@/content/nav";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-3 w-3 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      aria-hidden
    >
      <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const navLinkClasses =
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-all duration-150 hover:bg-surface-raised hover:text-foreground";

const CLOSE_DELAY = 150;

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  function clearCloseTimeout() {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }

  function openOnHover(label: string) {
    clearCloseTimeout();
    setOpenMenu(label);
  }

  function scheduleClose() {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  }

  // Close any open menu on navigation (covers browser back/forward, not just link clicks).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
      clearCloseTimeout();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md transition-colors duration-200">
      <Container className="flex h-16 sm:h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          aria-label="AITEK Home"
        >
          <Image
            src="/images/aitek-logo-light.png"
            alt="AITEK – Human Intelligence. AI Possibilities."
            width={160}
            height={103}
            className="light-only h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
          />
          <Image
            src="/images/aitek-logo-dark.png"
            alt="AITEK – Human Intelligence. AI Possibilities."
            width={160}
            height={103}
            className="dark-only h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              open={openMenu === item.label}
              onToggle={() => setOpenMenu((m) => (m === item.label ? null : item.label))}
              onMouseEnter={() => openOnHover(item.label)}
              onMouseLeave={scheduleClose}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition-all duration-150 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 active:scale-[0.98]"
          >
            Start a Conversation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) =>
              item.kind === "link" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-raised transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label}>
                  <button
                    type="button"
                    aria-expanded={mobileExpanded === item.label}
                    onClick={() => setMobileExpanded((m) => (m === item.label ? null : item.label))}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-raised transition-colors"
                  >
                    {item.label}
                    <ChevronIcon open={mobileExpanded === item.label} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                      {item.groups.map((group, i) => (
                        <div key={group.heading ?? i} className="py-1">
                          {group.heading && (
                            <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted">
                              {group.heading}
                            </p>
                          )}
                          {group.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block rounded-lg px-3 py-2 text-sm text-foreground/90 hover:bg-surface-raised hover:text-primary transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      {!item.hideViewAll && (
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-primary hover:underline"
                          onClick={() => setMobileOpen(false)}
                        >
                          View all {item.label}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )
            )}

            <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-4 px-3">
              <span className="text-sm font-medium text-muted">Appearance</span>
              <ThemeToggle />
            </div>

            <div className="mt-2 px-3 pb-2">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Start a Conversation
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function DesktopNavItem({
  item,
  open,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}: {
  item: NavItem;
  open: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  if (item.kind === "link") {
    return (
      <Link href={item.href} className={navLinkClasses}>
        {item.label}
      </Link>
    );
  }

  const wide = item.groups.length > 1;
  // "About" sits near the end of the nav — right-align its panel so it doesn't run off-screen.
  const align = item.label === "About" ? "right-0" : "left-0";

  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={onToggle}
        className={`flex items-center gap-1 ${navLinkClasses} ${open ? "bg-surface-raised text-foreground" : ""}`}
      >
        {item.label}
        <ChevronIcon open={open} />
      </button>

      {open && (
        // Flush against the trigger (no real gap) so the pointer never leaves this
        // hoverable region on the way down; the visual gap lives in this padding instead.
        <div className={`absolute top-full ${align} z-10 pt-2`}>
          <div
            className="rounded-2xl border border-border bg-surface p-6 shadow-xl shadow-black/10"
            style={{ width: wide ? "640px" : "240px" }}
          >
            <div className={`grid gap-8 ${wide ? "grid-cols-3" : "grid-cols-1"}`}>
              {item.groups.map((group, i) => (
                <div key={group.heading ?? i}>
                  {group.heading && (
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">{group.heading}</p>
                  )}
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-lg px-2.5 py-1.5 text-sm text-foreground/90 transition-colors hover:bg-surface-raised hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {!item.hideViewAll && (
              <div className="mt-5 border-t border-border pt-4">
                <Link href={item.href} className="text-sm font-medium text-primary hover:underline">
                  View all {item.label} →
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
