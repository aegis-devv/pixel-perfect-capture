import { useEffect, useState } from "react";
import { content } from "@/content";

const links = [
  { label: "Projects", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-6 py-6 mix-blend-difference transition-transform duration-500 md:px-10 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex items-start justify-between text-background">
        <div className="flex flex-col gap-1">
          <span className="meta-mono">{content.name.first} {content.name.last}</span>
          <span className="meta-mono opacity-50">{content.role}</span>
        </div>
        <ul className="flex items-start gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="meta-mono underline-slide">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
