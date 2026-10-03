import { useEffect, useState } from "react";
import { content } from "@/content";

const NAV_LINKS = [
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 80 && y > last);
      setScrolled(y > 24);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-transform duration-500`}
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transitionTimingFunction: "var(--ease-out-expo)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        background: scrolled ? "rgba(245,244,238,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="flex h-[60px] md:h-[68px] items-center justify-between px-[clamp(18px,4vw,52px)]">
        {/* Left — identity */}
        <div className="flex flex-col gap-0">
          <a
            href="#hero"
            style={{
              fontFamily: '"Instrument Sans", sans-serif',
              fontWeight: 600,
              fontSize: "15px",
              letterSpacing: "-0.02em",
              color: "var(--ink)",
            }}
          >
            {content.name.first} {content.name.last}
          </a>
          <span
            className="hidden sm:block text-[var(--subtle)]"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: "11px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {content.role}
          </span>
        </div>

        {/* Right — links */}
        <ul className="flex items-center gap-5 md:gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="underline-slide"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "var(--ink)",
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
