import { useEffect, useState } from "react";
import { content } from "@/content";

const links = [
  { label: "Projects", href: "#work" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

/**
 * Fixed nav: hides on scroll-down, shows on scroll-up.
 * Nav: 14px, uppercase, tracking 0.08em, weight 500.
 * Left block: "Tanmay Joddar" 15px weight 600, "Full-Stack Developer" 13px #444.
 * Fully mobile responsive without wrapping collisions.
 */
export function Nav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 80 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-5 py-5 transition-transform duration-500 ease-[var(--ease-out-expo)] md:px-10 md:py-6 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex items-center justify-between">
        {/* Left — Name + Role */}
        <div className="flex flex-col gap-0.5">
          <a href="#hero" className="text-[15px] font-semibold text-foreground tracking-[-0.01em]">
            {content.name.first} {content.name.last}
          </a>
          <span className="hidden sm:inline-block font-mono text-[13px] text-[#444444] tracking-[0.06em]">
            {content.role}
          </span>
        </div>

        {/* Right — Nav links */}
        <ul className="flex items-center gap-5 md:gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-mono text-[13px] md:text-[14px] uppercase tracking-[0.08em] font-medium text-foreground underline-slide"
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
