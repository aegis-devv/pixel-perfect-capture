import { content } from "@/content";
import { Reveal } from "./Reveal";

/**
 * Selected Work — large stacked list.
 * Fixed variable font outline artifact by using static Instrument Sans 500,
 * paint-order: stroke fill, stroke-linejoin: round, text-rendering: geometricPrecision.
 * Title size clamp(36px, 8vw, 140px), row height ~150px.
 * Fully mobile responsive.
 */
export function Work() {
  return (
    <section
      id="work"
      className="relative z-10 border-t border-border bg-background px-6 pb-28 pt-20 md:pb-40 md:pt-28 md:px-10"
    >
      {/* Header row */}
      <div className="mb-10 md:mb-14 flex items-baseline justify-between border-b border-border pb-5">
        <Reveal>
          <span className="label-mono">{content.work.label}</span>
        </Reveal>
        <span className="font-mono text-[13px] text-[#444444] tracking-[0.06em]">
          Scroll to explore
        </span>
      </div>

      <ul className="w-full">
        {content.work.projects.map((p, i) => (
          <li key={p.number} className="border-b border-border">
            <Reveal delay={i * 45}>
              <a
                href={p.href}
                data-cursor="View"
                className="group flex min-h-[120px] md:min-h-[150px] flex-col justify-center gap-3 py-6 md:py-8 transition-[padding] duration-500 ease-out hover:pl-4 md:hover:pl-6 md:flex-row md:items-center md:justify-between"
              >
                {/* Left: number + outlined static-font title */}
                <div className="flex items-baseline gap-4 md:gap-10">
                  <span className="font-mono text-[13px] md:text-[14px] font-medium text-foreground transition-colors duration-300 group-hover:text-accent w-5 md:w-6 shrink-0">
                    {p.number}
                  </span>
                  <h3
                    className="font-medium tracking-[-0.04em] leading-[0.95] select-none transition-colors duration-400 ease-out text-[clamp(32px,7.5vw,130px)]"
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontWeight: 500,
                      color: "var(--color-background)",
                      WebkitTextStroke: "1.5px var(--color-foreground)",
                      paintOrder: "stroke fill",
                      strokeLinejoin: "round",
                      textRendering: "geometricPrecision",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-foreground)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-background)";
                    }}
                  >
                    {p.title}
                  </h3>
                </div>

                {/* Right: tags + year */}
                <div className="flex items-center justify-between md:flex-col md:items-end gap-1 shrink-0 pl-9 md:pl-0">
                  <span className="font-mono text-[13px] md:text-[14px] uppercase tracking-[0.06em] text-foreground font-medium">
                    {p.tags}
                  </span>
                  <span className="font-mono text-[13px] md:text-[14px] text-[#444444]">
                    {p.year}
                  </span>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
