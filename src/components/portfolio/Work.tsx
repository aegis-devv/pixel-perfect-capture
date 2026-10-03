import { content } from "@/content";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section
      id="work"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(56px,10vw,140px)]"
    >
      {/* Header row */}
      <div className="mb-12 flex items-baseline justify-between border-b border-border pb-5">
        <Reveal>
          <span className="label-mono">{content.work.label}</span>
        </Reveal>
        <span
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--subtle)",
          }}
        >
          {content.work.projects.length} projects
        </span>
      </div>

      <ul>
        {content.work.projects.map((p, i) => (
          <li key={p.number} className="border-b border-border">
            <Reveal delay={i * 40}>
              <div className="py-10 md:py-12">
                {/* ── PROJECT HEADER ROW ── */}
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div className="flex items-start gap-4 md:gap-8">
                    {/* Number */}
                    <span
                      style={{
                        fontFamily: '"IBM Plex Mono", monospace',
                        fontSize: "12px",
                        letterSpacing: "0.08em",
                        color: "var(--subtle)",
                        paddingTop: "6px",
                        minWidth: "24px",
                      }}
                    >
                      {p.number}.
                    </span>

                    {/* Title block */}
                    <div>
                      <h3
                        style={{
                          fontFamily: '"Instrument Sans", sans-serif',
                          fontWeight: 500,
                          fontSize: "clamp(28px,6.5vw,100px)",
                          letterSpacing: "-0.045em",
                          lineHeight: 0.9,
                          color: "var(--background)",
                          WebkitTextStroke: "1px var(--ink)",
                          paintOrder: "stroke fill",
                          textRendering: "geometricPrecision",
                          transition: "color 0.3s, -webkit-text-stroke-color 0.3s",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--ink)";
                          e.currentTarget.style.webkitTextStroke = "0px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--background)";
                          e.currentTarget.style.webkitTextStroke = "1px var(--ink)";
                        }}
                      >
                        {p.title}
                      </h3>
                      <p
                        className="mt-2"
                        style={{
                          fontFamily: '"Instrument Sans", sans-serif',
                          fontWeight: 400,
                          fontSize: "clamp(15px,2vw,20px)",
                          letterSpacing: "-0.02em",
                          color: "var(--subtle)",
                        }}
                      >
                        {p.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Year + links */}
                  <div className="flex flex-col items-end gap-2 shrink-0 pt-1">
                    <span
                      style={{
                        fontFamily: '"IBM Plex Mono", monospace',
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        color: "var(--subtle)",
                      }}
                    >
                      {p.year}
                    </span>
                    <div className="flex gap-3">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="Open"
                        className="underline-slide"
                        style={{
                          fontFamily: '"IBM Plex Mono", monospace',
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                          fontWeight: 500,
                        }}
                      >
                        GitHub
                      </a>
                      {"npmHref" in p && p.npmHref && (
                        <a
                          href={(p as typeof p & { npmHref?: string }).npmHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="Open"
                          className="underline-slide"
                          style={{
                            fontFamily: '"IBM Plex Mono", monospace',
                            fontSize: "11px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--accent)",
                            fontWeight: 500,
                          }}
                        >
                          npm
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Stack */}
                <div className="ml-[calc(24px+32px)] md:ml-[calc(24px+56px)]">
                  <p
                    className="mb-6"
                    style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--subtle)",
                    }}
                  >
                    {p.tags}
                  </p>

                  {/* Description */}
                  <p
                    className="mb-7"
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: "var(--subtle)",
                      maxWidth: "64ch",
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Highlights — NOT bullets, just hanging-indented lines */}
                  <div
                    className="flex flex-col gap-[6px] border-l-2 pl-5"
                    style={{ borderColor: "rgba(17,17,17,0.12)" }}
                  >
                    {p.highlights.map((h, hi) => (
                      <p
                        key={hi}
                        style={{
                          fontFamily: '"IBM Plex Mono", monospace',
                          fontSize: "12px",
                          letterSpacing: "0.04em",
                          lineHeight: 1.6,
                          color: "var(--ink)",
                        }}
                      >
                        {h}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
