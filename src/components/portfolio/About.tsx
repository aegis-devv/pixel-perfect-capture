import { useEffect, useState } from "react";
import { content } from "@/content";
import portraitSrc from "@/assets/image.png";
import { ClipReveal, Reveal } from "./Reveal";

function LocalClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour:     "2-digit",
          minute:   "2-digit",
          timeZone: content.about.timeZone,
        }).format(new Date()),
      );
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="meta-mono text-muted-foreground">
      Based in {content.about.city}
      {time ? ` — ${time} local` : ""}
    </span>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-12 gap-x-6 border-t border-border px-6 py-32 md:px-10 md:py-48"
    >
      {/* Left column: label + portrait + clock */}
      <div className="col-span-12 md:col-span-4">
        <Reveal>
          <span className="label-mono">{content.about.label}</span>
        </Reveal>

        {/* Portrait with clip-path wipe reveal */}
        <ClipReveal className="mt-8">
          <img
            src={portraitSrc}
            alt={`${content.name.first} ${content.name.last}`}
            loading="lazy"
            className="w-full object-cover"
            style={{ filter: "grayscale(1) contrast(1.15)" }}
          />
        </ClipReveal>

        <div className="mt-5">
          <LocalClock />
        </div>
      </div>

      {/* Right column: bio + timeline */}
      <div className="col-span-12 mt-12 md:col-span-7 md:col-start-6 md:mt-0">
        <Reveal>
          <div className="space-y-6">
            {content.about.bio.map((line) => (
              <p key={line} className="max-w-[52ch] text-[18px] leading-[1.65]">
                {line}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Experience / education timeline */}
        <ul className="mt-16">
          {content.about.timeline.map((row, i) => (
            <li
              key={`${row.year}-${row.place}`}
              className="border-t border-border last:border-b"
            >
              <Reveal delay={i * 50}>
                <div className="grid grid-cols-12 items-baseline gap-x-4 py-5">
                  <span className="meta-mono col-span-3 text-muted-foreground">
                    {row.year}
                  </span>
                  <span className="col-span-5 text-[16px] font-medium">
                    {row.place}
                  </span>
                  <span className="meta-mono col-span-4 text-muted-foreground md:text-right">
                    {row.role}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
