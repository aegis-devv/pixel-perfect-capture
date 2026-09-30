import { content } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <span className="meta-mono text-muted-foreground">
          © {new Date().getFullYear()} {content.name.first} {content.name.last}.
          Messages sent via the contact form reach my inbox only and are not stored or shared.
        </span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="meta-mono underline-slide shrink-0"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
