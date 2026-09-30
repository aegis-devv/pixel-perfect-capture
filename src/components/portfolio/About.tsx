import { useEffect, useState } from "react";
import { content } from "@/content";
import portrait from "@/assets/portrait.png.asset.json";
import { ClipReveal, Reveal } from "./Reveal";

function LocalClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: content.about.timeZone,
        }).format(new Date()),
      );
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="meta-mono text-muted-foreground">
      Based in {content.about.city} {time ? `(${time} local)` : ""}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="grid grid-cols-12 gap-6 border-t border-border px-6 py-32 md:px-10 md:py-48">
      <div className="col-span-12 md:col-span-4">
        <span className="label-mono">{content.about.label}</span>
        <ClipReveal className="mt-8 bg-secondary">
          <img
            src={portrait.url}
            alt={`${content.name.first} ${content.name.last}`}
            loading="lazy"
            className="w-full object-cover contrast-125 grayscale"
          />
        </ClipReveal>
        <div className="mt-6">
          <LocalClock />
        </div>
      </div>

      <div className="col-span-12 md:col-span-7 md:col-start-6">
        <Reveal>
          {content.about.bio.map((line) => (
            <p key={line} className="mb-6 max-w-[54ch] text-xl leading-relaxed">
              {line}
            </p>
          ))}
        </Reveal>

        <ul className="mt-16">
          {content.about.timeline.map((row) => (
            <li key={`${row.year}-${row.place}`} className="border-t border-border last:border-b">
              <div className="grid grid-cols-12 items-baseline gap-4 py-5">
                <span className="meta-mono col-span-3 text-muted-foreground">{row.year}</span>
                <span className="col-span-5 text-lg">{row.place}</span>
                <span className="meta-mono col-span-4 md:text-right">{row.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
