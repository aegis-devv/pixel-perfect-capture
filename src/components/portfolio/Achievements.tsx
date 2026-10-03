import { content } from "@/content";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    badge: "Open Source",
    rank: "7 Merged PRs",
    title: "GreedyBear — GSoC Organization",
    detail: "Threat intelligence pipeline. PRs #885, #933, #974, #1010, #1005, #1178, #1217.",
    href: "https://github.com/GreedyBear-Project/GreedyBear",
    linkLabel: "View on GitHub",
  },
  {
    badge: "Hackathon",
    rank: "1st Place",
    title: "Winner — Brain Battle 2.0",
    detail: "Delivered winning software solution in a 24-hour coding competition.",
    href: "https://unstop.com/certificate-preview/70114af0-19b9-464f-957f-68088c1aac08",
    linkLabel: "Certificate",
  },
  {
    badge: "Competitive",
    rank: "Top 100 / 2,900+",
    title: "HackHazards 2025",
    detail: "Ranked top 100 finalists out of 2,900+ competing teams nationwide.",
    href: "https://certificate.givemycertificate.com/c/5c24c0cf-ebe3-4e29-8455-57afff22f32b",
    linkLabel: "Certificate",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,110px)] pb-[clamp(56px,8vw,110px)]"
    >
      <div className="mb-10 border-b border-border pb-4">
        <Reveal><span className="label-mono">{content.achievements.label}</span></Reveal>
      </div>

      <div className="flex flex-col">
        {ITEMS.map((item, i) => (
          <Reveal key={i} delay={i * 55}>
            <div className="grid grid-cols-12 gap-x-6 py-10 md:py-12 border-b border-border items-start">

              {/* Left — badge + rank */}
              <div className="col-span-12 md:col-span-3 flex flex-col gap-2 mb-4 md:mb-0">
                <span style={{ fontFamily: '"IBM Plex Mono"', fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--subtle)" }}>
                  {item.badge}
                </span>
                <span style={{
                  fontFamily: '"Instrument Sans"', fontWeight: 700,
                  fontSize: "clamp(20px,2vw,28px)", letterSpacing: "-0.03em",
                  color: "var(--accent)", lineHeight: 1,
                }}>
                  {item.rank}
                </span>
              </div>

              {/* Middle — title + detail */}
              <div className="col-span-12 md:col-span-6">
                <h3 style={{
                  fontFamily: '"Instrument Sans"', fontWeight: 600,
                  fontSize: "clamp(18px,2.2vw,28px)", letterSpacing: "-0.03em",
                  lineHeight: 1.1, color: "var(--ink)", marginBottom: "10px",
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: '"Instrument Sans"', fontWeight: 400,
                  fontSize: "15px", lineHeight: 1.65, color: "var(--subtle)",
                }}>
                  {item.detail}
                </p>
              </div>

              {/* Right — link */}
              <div className="col-span-12 md:col-span-3 md:flex md:justify-end md:items-start mt-4 md:mt-0">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Open"
                  className="underline-slide inline-block"
                  style={{
                    fontFamily: '"IBM Plex Mono"', fontSize: 11,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "var(--accent)", fontWeight: 600,
                  }}
                >
                  {item.linkLabel} ↗
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
