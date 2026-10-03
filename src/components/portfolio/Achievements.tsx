import { content } from "@/content";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(56px,10vw,140px)]"
    >
      {/* Label */}
      <div className="mb-12 border-b border-border pb-5">
        <Reveal>
          <span className="label-mono">{content.achievements.label}</span>
        </Reveal>
      </div>

      <div className="flex flex-col">
        {content.achievements.items.map((item, i) => (
          <Reveal key={i} delay={i * 50}>
            <div className="grid grid-cols-12 gap-x-6 py-8 md:py-10 border-b border-border items-start">
              {/* Badge */}
              <div className="col-span-12 md:col-span-2 mb-3 md:mb-0">
                <span
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    fontWeight: 500,
                    display: "block",
                    paddingTop: "4px",
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div className="col-span-12 md:col-span-7">
                <h3
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontWeight: 500,
                    fontSize: "clamp(17px,2.2vw,26px)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                    color: "var(--ink)",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "var(--subtle)",
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Link */}
              <div className="col-span-12 md:col-span-3 md:flex md:justify-end md:items-start">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Open"
                  className="underline-slide inline-block mt-3 md:mt-1"
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--subtle)",
                    fontWeight: 500,
                  }}
                >
                  View Certificate
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
