import { content } from "@/content";
import { Reveal } from "./Reveal";

const SKILL_TABLE = [
  { category: "Languages", items: "C++, Go, JavaScript, TypeScript, PHP, Python, SQL" },
  { category: "Frameworks", items: "Laravel, NestJS, Express.js, Django, React.js, Next.js" },
  { category: "Databases", items: "PostgreSQL, MongoDB, MySQL, Redis, IndexedDB" },
  { category: "Tools", items: "Docker, Nginx, GitHub Actions, Prisma, Drizzle ORM, Mongoose" },
  {
    category: "Concepts",
    items:
      "System Design, Microservices, REST APIs, WebSockets, WebRTC, Event-Driven Architecture, JWT Auth, RBAC, Real-Time Systems",
  },
];

export function Services() {
  return (
    <section
      id="skills"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(56px,10vw,140px)]"
    >
      {/* Label */}
      <div className="mb-12 border-b border-border pb-5 flex items-baseline justify-between">
        <Reveal>
          <span className="label-mono">{content.services.label}</span>
        </Reveal>
        <Reveal>
          <span
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--subtle)",
            }}
          >
            {SKILL_TABLE.length} categories
          </span>
        </Reveal>
      </div>

      {/* Editorial table — two columns */}
      <div className="flex flex-col">
        {SKILL_TABLE.map((row, i) => (
          <Reveal key={row.category} delay={i * 35}>
            <div
              className="grid grid-cols-12 gap-x-6 py-6 border-b border-border items-baseline"
            >
              {/* Category name */}
              <div className="col-span-12 md:col-span-3 mb-3 md:mb-0">
                <span
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--subtle)",
                    fontWeight: 500,
                  }}
                >
                  {row.category}
                </span>
              </div>

              {/* Skills text */}
              <div className="col-span-12 md:col-span-9">
                <p
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: "clamp(16px,1.8vw,22px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.4,
                    color: "var(--ink)",
                  }}
                >
                  {row.items}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Additional context — systems design focus */}
      <Reveal delay={200} className="mt-16 md:mt-20">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-7 md:col-start-4">
            <p
              style={{
                fontFamily: '"Instrument Sans", sans-serif',
                fontWeight: 400,
                fontSize: "clamp(28px,4.5vw,62px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.93,
                color: "var(--ink)",
              }}
            >
              Zero-allocation CDCs.{" "}
              <span style={{ color: "var(--subtle)" }}>
                Biometric pipelines. API schema gates.
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
