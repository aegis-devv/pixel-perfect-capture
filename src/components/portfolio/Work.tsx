import { content } from "@/content";

export function Work() {
  return (
    <section id="work" className="relative z-10 border-t border-border bg-background px-6 pb-40 pt-24 md:px-10">
      <div className="mb-16 flex items-baseline justify-between border-b border-border pb-4">
        <span className="label-mono">{content.work.label}</span>
        <span className="meta-mono text-muted-foreground">Scroll to explore</span>
      </div>

      <ul>
        {content.work.projects.map((p) => (
          <li key={p.number} className="border-b border-border">
            <a
              href={p.href}
              data-cursor="View"
              className="group flex flex-col gap-4 py-12 transition-[padding] duration-500 ease-out hover:pl-6 md:flex-row md:items-center md:justify-between"
            >
              <span className="flex items-center gap-8">
                <span className="meta-mono text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                  {p.number}
                </span>
                <span className="text-5xl font-semibold tracking-[-0.04em] text-transparent transition-colors duration-500 [-webkit-text-stroke:1px_var(--color-foreground)] group-hover:text-foreground md:text-7xl">
                  {p.title}
                </span>
              </span>
              <span className="flex flex-col md:items-end">
                <span className="meta-mono">{p.tags}</span>
                <span className="meta-mono text-muted-foreground">{p.year}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
