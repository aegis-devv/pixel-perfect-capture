import { content } from "@/content";

export function Footer() {
  return (
    <footer className="px-[clamp(18px,4vw,52px)] py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--subtle)",
            lineHeight: 1.7,
          }}
        >
          &copy; {new Date().getFullYear()} {content.name.first} {content.name.last}.
          Messages sent via the form reach my inbox only — not stored or shared.
        </span>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="underline-slide shrink-0 text-left sm:text-right"
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--subtle)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
