import { useEffect, useState } from "react";
import { content } from "@/content";
import portrait from "@/assets/portrait.png.asset.json";

function MaskedWord({ word, offset }: { word: string; offset: number }) {
  return (
    <span className="flex justify-center">
      {word.split("").map((char, i) => (
        <span key={`${char}-${i}`} className="mask-line">
          <span style={{ animationDelay: `${(offset + i) * 0.04 + 0.9}s` }}>{char}</span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden border-b border-border">
      <h1
        className="absolute left-0 top-1/2 w-full -translate-y-1/2 select-none text-center text-[22vw] font-extrabold leading-[0.8] tracking-[-0.04em]"
        style={{ transform: `translateY(calc(-50% + ${y * 0.12}px))` }}
      >
        <span className="sr-only">
          {content.name.first} {content.name.last}
        </span>
        <span aria-hidden className="block">
          <MaskedWord word={content.name.first} offset={0} />
          <MaskedWord word={content.name.last} offset={content.name.first.length} />
        </span>
      </h1>

      <div
        className="pointer-events-none relative z-10 h-[76vh] max-w-[92vw] animate-portrait-in"
        style={{ transform: `translateY(${y * 0.3}px)` }}
      >
        <img
          src={portrait.url}
          alt={`Portrait of ${content.name.first} ${content.name.last}`}
          className="h-full w-auto object-contain contrast-125 grayscale"
        />
      </div>

      <div className="absolute left-6 top-8 label-mono md:left-10">+ 01 / 03</div>
      <div className="absolute bottom-8 right-6 label-mono md:right-10">L / R Trim</div>

      <ul className="absolute bottom-8 left-6 z-20 flex flex-col gap-2 md:left-10">
        {content.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="Open"
              className="meta-mono underline-slide inline-flex items-center gap-2"
            >
              <span aria-hidden className="inline-block h-px w-4 bg-foreground" />
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-16 right-6 z-20 text-right md:right-10">
        <p className="meta-mono text-accent">{content.heroLines[0]}</p>
        <p className="mt-2 text-2xl font-medium tracking-[-0.03em] md:text-4xl">
          {content.heroLines[1]}
        </p>
      </div>
    </section>
  );
}
