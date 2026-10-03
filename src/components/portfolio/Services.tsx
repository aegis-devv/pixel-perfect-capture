import { content } from "@/content";
import { Reveal } from "./Reveal";

const SKILLS = [
  { cat: "Languages",  items: ["C++", "Go", "JavaScript", "TypeScript", "PHP", "Python", "SQL"] },
  { cat: "Frameworks", items: ["Laravel", "NestJS", "Express.js", "Django", "React.js", "Next.js"] },
  { cat: "Databases",  items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "IndexedDB"] },
  { cat: "Tools",      items: ["Docker", "Nginx", "GitHub Actions", "Prisma", "Drizzle ORM", "Mongoose"] },
  { cat: "Concepts",   items: ["System Design", "Microservices", "REST APIs", "WebSockets", "WebRTC", "Event-Driven Architecture", "JWT Auth", "RBAC", "Real-Time Systems"] },
];

export function Services() {
  return (
    <section
      id="skills"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,110px)] pb-[clamp(56px,8vw,110px)]"
    >
      <div className="mb-10 border-b border-border pb-4 flex items-baseline justify-between">
        <Reveal><span className="label-mono">{content.services.label}</span></Reveal>
      </div>

      <div className="flex flex-col">
        {SKILLS.map((row, i) => (
          <Reveal key={row.cat} delay={i * 40}>
            <div className="grid grid-cols-12 gap-x-6 py-7 border-b border-border items-start">
              {/* Category */}
              <div className="col-span-12 md:col-span-2 mb-3 md:mb-0 md:pt-1">
                <span style={{
                  fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: "var(--accent)", fontWeight: 600,
                  display: "block",
                }}>
                  {row.cat}
                </span>
              </div>

              {/* Skills as tags */}
              <div className="col-span-12 md:col-span-10 flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontWeight: 500,
                      fontSize: "clamp(14px,1.4vw,17px)",
                      letterSpacing: "-0.015em",
                      color: "var(--ink)",
                      border: "1px solid rgba(17,17,17,0.18)",
                      padding: "5px 12px",
                      lineHeight: 1.4,
                      display: "inline-block",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Display pull quote */}
      <Reveal delay={220} className="mt-16 md:mt-20">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 md:col-start-2">
            <p style={{
              fontFamily: '"Instrument Sans"', fontWeight: 500,
              fontSize: "clamp(28px,4.5vw,66px)", letterSpacing: "-0.045em",
              lineHeight: 0.93, color: "var(--ink)",
            }}>
              Zero-allocation CDCs.{" "}
              <span style={{ color: "var(--subtle)" }}>Biometric pipelines. API schema gates.</span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
