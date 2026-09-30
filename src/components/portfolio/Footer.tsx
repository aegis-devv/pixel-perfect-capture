import { content } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <span className="meta-mono text-muted-foreground">
          © {new Date().getFullYear()} {content.name.first} {content.name.last}
        </span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="meta-mono underline-slide"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
