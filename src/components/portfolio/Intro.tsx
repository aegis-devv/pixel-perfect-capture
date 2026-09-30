import { content } from "@/content";
import { Reveal } from "./Reveal";

/** Renders {phrases} in the accent colour. */
function Statement({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{") ? (
          <span key={i} className="italic text-accent">
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function Intro() {
  return (
    <section id="intro" className="grid grid-cols-12 gap-6 px-6 py-32 md:px-10 md:py-48">
      <div className="col-span-12 md:col-span-7 md:col-start-5">
        <Reveal className="label-mono mb-10">{content.intro.label}</Reveal>
        <Reveal delay={80}>
          <h2 className="display-xl text-pretty">
            <Statement text={content.intro.statement} />
          </h2>
        </Reveal>
      </div>

      <div className="col-span-12 mt-16 md:col-span-4 md:col-start-8">
        <Reveal delay={140}>
          <p className="max-w-[46ch] text-muted-foreground">{content.intro.paragraph}</p>
        </Reveal>
        <Reveal delay={200} className="mt-10">
          <a
            href={content.intro.cta.href}
            data-cursor="View"
            className="group relative inline-flex overflow-hidden rounded-full border border-input px-8 py-4"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-0 bg-accent transition-[height] duration-500 ease-out group-hover:h-full"
            />
            <span className="meta-mono relative transition-colors duration-500 group-hover:text-accent-foreground">
              {content.intro.cta.label}
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
