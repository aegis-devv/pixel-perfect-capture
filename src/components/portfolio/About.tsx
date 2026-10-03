import { useEffect, useState } from "react";
import { content } from "@/content";
import portraitSrc from "@/assets/image.png";
import { Reveal } from "./Reveal";

function LocalClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: content.about.timeZone }).format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return (
    <span style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--subtle)" }}>
      {content.about.city}{time ? ` — ${time} IST` : ""}
    </span>
  );
}

export function About() {
  const edu = content.about.education;

  return (
    <section
      id="about"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,110px)] pb-[clamp(56px,8vw,110px)]"
    >
      <div className="mb-10 border-b border-border pb-4">
        <Reveal><span className="label-mono">{content.about.label}</span></Reveal>
      </div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-14">
        {/* Portrait */}
        <div className="col-span-12 md:col-span-4">
          <Reveal>
            <img
              src={portraitSrc}
              alt={`${content.name.first} ${content.name.last}`}
              loading="lazy"
              className="w-full block"
              style={{ filter: "grayscale(1) contrast(1.18)" }}
            />
          </Reveal>
          <div className="mt-4">
            <LocalClock />
          </div>
        </div>

        {/* Bio + education */}
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <Reveal>
            <div className="flex flex-col gap-5">
              {content.about.bio.map((line, i) => (
                <p key={i} style={{
                  fontFamily: '"Instrument Sans"', fontWeight: 400,
                  fontSize: "clamp(16px,1.6vw,19px)", lineHeight: 1.7,
                  color: i === 0 ? "var(--ink)" : "var(--subtle)", maxWidth: "52ch",
                }}>
                  {line}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={80} className="mt-12">
            <div className="border-t border-border pt-8">
              <span className="label-mono block mb-5" style={{ color: "var(--subtle)" }}>Education</span>
              <div className="grid grid-cols-12 gap-y-3 gap-x-4">
                <div className="col-span-12 md:col-span-8">
                  <p style={{
                    fontFamily: '"Instrument Sans"', fontWeight: 600,
                    fontSize: "clamp(16px,1.8vw,22px)", letterSpacing: "-0.025em", lineHeight: 1.1, color: "var(--ink)",
                  }}>
                    {edu.institution}
                  </p>
                  <p className="mt-2" style={{ fontFamily: '"Instrument Sans"', fontSize: 15, color: "var(--subtle)" }}>
                    {edu.degree}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 md:text-right flex flex-col gap-1">
                  <span style={{ fontFamily: '"IBM Plex Mono"', fontSize: 11, letterSpacing: "0.08em", color: "var(--subtle)", textTransform: "uppercase" }}>
                    {edu.period}
                  </span>
                  <span style={{ fontFamily: '"IBM Plex Mono"', fontSize: 15, letterSpacing: "0.04em", color: "var(--accent)", fontWeight: 700 }}>
                    {edu.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
