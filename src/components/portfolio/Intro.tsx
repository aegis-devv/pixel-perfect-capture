import { content } from "@/content";
import { Reveal } from "./Reveal";

function Accent({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{") ? (
          <em key={i} className="not-italic" style={{ color: "var(--accent)" }}>
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function Intro() {
  return (
    <section
      id="intro"
      className="border-b border-border px-[clamp(18px,4vw,52px)] py-[clamp(72px,12vw,160px)]"
    >
      <div className="grid grid-cols-12 gap-x-6">
        {/* Label */}
        <div className="col-span-12 mb-12">
          <Reveal>
            <span className="label-mono">{content.intro.label}</span>
          </Reveal>
        </div>

        {/* Statement — offset right on desktop */}
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <Reveal delay={50}>
            <h2
              className="text-pretty"
              style={{
                fontFamily: '"Instrument Sans", sans-serif',
                fontWeight: 500,
                fontSize: "clamp(36px,6.5vw,100px)",
                letterSpacing: "-0.045em",
                lineHeight: 0.91,
                color: "var(--ink)",
              }}
            >
              <Accent text={content.intro.statement} />
            </h2>
          </Reveal>
        </div>

        {/* Paragraph + CTA — pushed far right */}
        <div className="col-span-12 mt-14 md:mt-20 md:col-span-5 md:col-start-8">
          <Reveal delay={120}>
            <p
              style={{
                fontFamily: '"Instrument Sans", sans-serif',
                fontSize: "17px",
                lineHeight: 1.65,
                color: "var(--subtle)",
                maxWidth: "44ch",
              }}
            >
              {content.intro.paragraph}
            </p>
          </Reveal>

          <Reveal delay={190} className="mt-9">
            <a
              href={content.intro.cta.href}
              data-cursor="View"
              className="group relative inline-flex overflow-hidden border border-foreground/20 px-7 py-[14px]"
              style={{ transition: "border-color 0.4s" }}
            >
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0 bg-foreground"
                style={{ transition: "height 0.45s var(--ease-out-expo)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.height = "100%";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.height = "0";
                }}
              />
              {/* Hover handled via parent group */}
              <span
                className="relative z-10"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: "var(--ink)",
                  transition: "color 0.45s",
                }}
              >
                {content.intro.cta.label}
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
