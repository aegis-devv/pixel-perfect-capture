import { content } from "@/content";
import { Reveal } from "./Reveal";

const PROJECTS = [
  {
    number: "01",
    title: "Wavicle",
    subtitle: "Proof-Based Caching Engine",
    stack: "Go · PostgreSQL · pglogrepl · Docker",
    year: "2025",
    href: "https://github.com/tanmayjoddar/wavicle",
    body: "Cache consistency without clocks, pub/sub, or TTL. Every cached composite query carries a version vector — verified against the PostgreSQL WAL stream in 1.7μs. Mathematically proven fresh. Never stale. Zero allocations.",
    stats: [
      { value: "1.7μs", label: "freshness check" },
      { value: "32.6×", label: "speedup vs cold" },
      { value: "44M+", label: "ops, zero errors" },
    ],
  },
  {
    number: "02",
    title: "apidrift",
    subtitle: "API Schema Drift Detector & CI/CD Gate",
    stack: "Node.js · Commander.js · Axios",
    year: "2025",
    href: "https://github.com/tanmayjoddar/apidrift",
    npmHref: "https://www.npmjs.com/package/apidrift-cli",
    body: "Your API changed in production. Your team didn't know until users complained. apidrift captures response shapes without storing data, detects breaking field removals and type mismatches across environments, and blocks the deploy via exit code 1 — before damage ships.",
    stats: [
      { value: "1,000+", label: "npm downloads" },
      { value: "exit 1", label: "CI/CD gate" },
      { value: "OpenAPI", label: "GraphQL · HAR" },
    ],
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,110px)] pb-[clamp(56px,8vw,110px)]"
    >
      {/* Header */}
      <div className="mb-10 flex items-baseline justify-between border-b border-border pb-4">
        <Reveal>
          <span className="label-mono">{content.work.label}</span>
        </Reveal>
        <span style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--subtle)" }}>
          {PROJECTS.length} projects
        </span>
      </div>

      <ul>
        {PROJECTS.map((p, i) => (
          <li key={p.number} className="border-b border-border">
            <Reveal delay={i * 50}>
              <div className="py-12 md:py-16">
                {/* Top meta row */}
                <div className="flex items-start justify-between mb-6">
                  <span style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.08em", color: "var(--subtle)" }}>
                    {p.number}.
                  </span>
                  <div className="flex items-center gap-4">
                    <span style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, color: "var(--subtle)" }}>{p.year}</span>
                    <a href={p.href} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}
                      className="underline-slide">
                      GitHub
                    </a>
                    {"npmHref" in p && p.npmHref && (
                      <a href={p.npmHref} target="_blank" rel="noopener noreferrer"
                        style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}
                        className="underline-slide">
                        npm
                      </a>
                    )}
                  </div>
                </div>

                {/* BOLD BLACK TITLE */}
                <h3
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontWeight: 600,
                    fontSize: "clamp(52px,9vw,150px)",
                    letterSpacing: "-0.055em",
                    lineHeight: 0.88,
                    color: "var(--ink)",
                  }}
                >
                  {p.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-3" style={{ fontFamily: '"Instrument Sans"', fontSize: "clamp(15px,1.8vw,20px)", letterSpacing: "-0.02em", color: "var(--subtle)", fontWeight: 400 }}>
                  {p.subtitle}
                </p>

                {/* Stack */}
                <p className="mt-4" style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--subtle)" }}>
                  {p.stack}
                </p>

                {/* Description */}
                <p
                  className="mt-7"
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: "clamp(16px,1.6vw,19px)",
                    lineHeight: 1.7,
                    color: "var(--ink)",
                    maxWidth: "68ch",
                  }}
                >
                  {p.body}
                </p>

                {/* Stats row */}
                <div className="mt-9 grid grid-cols-3 gap-4 border-t border-border pt-7" style={{ maxWidth: "56ch" }}>
                  {p.stats.map((s) => (
                    <div key={s.value}>
                      <p style={{ fontFamily: '"Instrument Sans"', fontWeight: 600, fontSize: "clamp(20px,2.5vw,34px)", letterSpacing: "-0.04em", color: "var(--ink)", lineHeight: 1 }}>
                        {s.value}
                      </p>
                      <p className="mt-1" style={{ fontFamily: '"IBM Plex Mono"', fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--subtle)" }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
