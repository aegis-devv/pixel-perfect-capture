import { content } from "@/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(56px,10vw,140px)]"
    >
      {/* Label */}
      <div className="mb-12 border-b border-border pb-5">
        <Reveal>
          <span className="label-mono">{content.experience.label}</span>
        </Reveal>
      </div>

      <div className="flex flex-col gap-0">
        {content.experience.items.map((job, i) => (
          <Reveal key={i} delay={i * 60}>
            <article className="border-b border-border py-10 md:py-12 grid grid-cols-12 gap-x-6 gap-y-6">
              {/* Left — date + company metadata */}
              <div className="col-span-12 md:col-span-3">
                <p
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--subtle)",
                    lineHeight: 1.7,
                  }}
                >
                  {job.period}
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--subtle)",
                  }}
                >
                  {job.location}
                </p>
              </div>

              {/* Right — content */}
              <div className="col-span-12 md:col-span-9">
                {/* Company + role */}
                <div className="mb-6">
                  <h3
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontWeight: 600,
                      fontSize: "clamp(18px,2.8vw,32px)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.05,
                      color: "var(--ink)",
                    }}
                  >
                    {job.company}
                  </h3>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: "15px",
                      letterSpacing: "-0.01em",
                      color: "var(--subtle)",
                    }}
                  >
                    {job.role}
                  </p>
                </div>

                {/* Bullets — editorial paragraph style, not list items */}
                <div className="flex flex-col gap-3">
                  {job.bullets.map((b, bi) => (
                    <p
                      key={bi}
                      style={{
                        fontFamily: '"Instrument Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: 1.65,
                        color: "var(--subtle)",
                        paddingLeft: "0",
                      }}
                    >
                      {/* Thin hanging dash */}
                      <span
                        style={{
                          fontFamily: '"IBM Plex Mono", monospace',
                          fontSize: "12px",
                          color: "var(--accent)",
                          marginRight: "12px",
                          userSelect: "none",
                        }}
                      >
                        —
                      </span>
                      {b}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
