import { content } from "@/content";
import { Reveal } from "./Reveal";

/* Highlights numbers/metrics in accent color */
function H({ children }: { children: string }) {
  // Bold any numbers with units, percentages, or key technical terms
  const parts = children.split(/([\d]+(?:\.\d+)?(?:ms|μs|%|M\+|\+|×|dims?)?|(?:0\.\d+)|(?:p95)|(?:SHA-256)|(?:1:1\/1:N)|(?:512-dim)|(?:5-tier)|(?:4 roles)|(?:8 custom)|(?:40\+)|(?:61%|85%)|(?:850ms|300ms)|(?:40%)|(?:60s))/g);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} style={{ color: "var(--ink)", fontWeight: 600 }}>
            {p}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,110px)] pb-[clamp(56px,8vw,110px)]"
    >
      <div className="mb-10 border-b border-border pb-4">
        <Reveal>
          <span className="label-mono">{content.experience.label}</span>
        </Reveal>
      </div>

      <div className="flex flex-col">
        {content.experience.items.map((job, i) => (
          <Reveal key={i} delay={i * 60}>
            <article className="border-b border-border py-12 md:py-16 grid grid-cols-12 gap-x-6 gap-y-8">
              {/* Left — date/location */}
              <div className="col-span-12 md:col-span-3">
                <p style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--subtle)", lineHeight: 1.8 }}>
                  {job.period}
                </p>
                <p className="mt-1" style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--subtle)" }}>
                  {job.location}
                </p>
              </div>

              {/* Right — company + bullets */}
              <div className="col-span-12 md:col-span-9">
                {/* Company name — BIG */}
                <h3
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: "clamp(26px,3.5vw,52px)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: "var(--ink)",
                  }}
                >
                  {job.company}
                </h3>
                <p className="mt-2 mb-8" style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>
                  {job.role}
                </p>

                {/* Bullets — ink colored, readable */}
                <div className="flex flex-col gap-4">
                  {job.bullets.map((b, bi) => (
                    <p
                      key={bi}
                      style={{
                        fontFamily: '"Instrument Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: "clamp(15px,1.5vw,17px)",
                        lineHeight: 1.65,
                        color: "var(--ink)",
                        paddingLeft: "20px",
                        borderLeft: "2px solid var(--accent)",
                      }}
                    >
                      <H>{b}</H>
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
