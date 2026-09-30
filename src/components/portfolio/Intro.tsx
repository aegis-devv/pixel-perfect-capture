import { content } from "@/content";
import { Reveal } from "./Reveal";

/**
 * Parses the statement text.
 * Phrases wrapped in {curly braces} render in italic deep-green accent.
 */
function Statement({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{") ? (
          <em key={i} className="not-italic text-accent">
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
      className="grid grid-cols-12 gap-x-6 gap-y-0 border-b border-border px-6 py-32 md:px-10 md:py-48"
    >
      {/* Section label */}
      <div className="col-span-12 mb-10">
        <Reveal>
          <span className="label-mono">{content.intro.label}</span>
        </Reveal>
      </div>

      {/* Statement — indented to the right, big display type */}
      <div className="col-span-12 md:col-span-9 md:col-start-4">
        <Reveal delay={60}>
          <h2 className="display-xl text-pretty leading-[0.92]">
            <Statement text={content.intro.statement} />
          </h2>
        </Reveal>
      </div>

      {/* Sub-paragraph + CTA — offset further right */}
      <div className="col-span-12 mt-16 md:col-span-5 md:col-start-8">
        <Reveal delay={140}>
          <p className="max-w-[46ch] text-[17px] leading-[1.6] text-muted-foreground">
            {content.intro.paragraph}
          </p>
        </Reveal>

        <Reveal delay={210} className="mt-10">
          {/* Ghost-outline button: fills with accent from the bottom on hover */}
          <a
            href={content.intro.cta.href}
            data-cursor="View"
            className="group relative inline-flex overflow-hidden border border-foreground/20 px-8 py-4 transition-colors duration-500"
          >
            {/* Fill layer */}
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-0 bg-accent transition-[height] duration-500 ease-out group-hover:h-full"
            />
            <span className="meta-mono relative z-10 transition-colors duration-500 group-hover:text-accent-foreground">
              {content.intro.cta.label}
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
