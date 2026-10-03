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
          hour: "2-digit",
          minute: "2-digit",
          timeZone: content.about.timeZone,
        }).format(new Date()),
      );
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: "11px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--subtle)",
      }}
    >
      {content.about.city}
      {time ? ` — ${time}` : ""}
    </span>
  );
}

export function About() {
  const edu = content.about.education;

  return (
    <section
      id="about"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(56px,10vw,140px)]"
    >
      {/* Label */}
      <div className="mb-12 border-b border-border pb-5">
        <Reveal>
          <span className="label-mono">{content.about.label}</span>
        </Reveal>
      </div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-16">
        {/* Left — portrait + clock */}
        <div className="col-span-12 md:col-span-4">
          <ClipReveal>
            <img
              src={portraitSrc}
              alt={`${content.name.first} ${content.name.last}`}
              loading="lazy"
              className="w-full"
              style={{ filter: "grayscale(1) contrast(1.18)" }}
            />
          </ClipReveal>
          <div className="mt-4">
            <LocalClock />
          </div>
        </div>

        {/* Right — bio + education */}
        <div className="col-span-12 md:col-span-7 md:col-start-6">
          {/* Bio */}
          <Reveal>
            <div className="flex flex-col gap-5">
              {content.about.bio.map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: '"Instrument Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: 1.65,
                    color: i === 0 ? "var(--ink)" : "var(--subtle)",
                    maxWidth: "52ch",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={80} className="mt-14">
            <div
              className="border-t border-border pt-8"
            >
              <span
                className="label-mono block mb-5"
                style={{ color: "var(--subtle)" }}
              >
                Education
              </span>

              <div className="grid grid-cols-12 gap-y-2 gap-x-4">
                <div className="col-span-12 md:col-span-8">
                  <p
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontWeight: 500,
                      fontSize: "clamp(16px,2vw,22px)",
                      letterSpacing: "-0.025em",
                      lineHeight: 1.1,
                      color: "var(--ink)",
                    }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: "15px",
                      color: "var(--subtle)",
                    }}
                  >
                    {edu.degree}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-4 md:text-right flex flex-col gap-1">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      color: "var(--subtle)",
                      textTransform: "uppercase",
                    }}
                  >
                    {edu.period}
                  </span>
                  <span
                    style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: "13px",
                      letterSpacing: "0.06em",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
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
