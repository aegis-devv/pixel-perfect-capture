import { content } from "@/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(56px,10vw,140px)]"
    >
      <Reveal>
        <span className="label-mono">{content.contact.label}</span>
      </Reveal>

      {/* Giant headline */}
      <Reveal delay={50} className="mt-8">
        <h2
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontWeight: 500,
            fontSize: "clamp(44px,8vw,120px)",
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
            color: "var(--ink)",
          }}
        >
          {content.contact.heading[0]}
          <br />
          {content.contact.heading[1]}
        </h2>
      </Reveal>

      {/* Direct email */}
      <Reveal delay={110} className="mt-12">
        <a
          href={`mailto:${content.contact.email}`}
          data-cursor="Write"
          className="underline-slide inline-block"
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontSize: "clamp(18px,3vw,46px)",
            letterSpacing: "-0.03em",
            fontWeight: 500,
            color: "var(--ink)",
          }}
        >
          {content.contact.email}
        </a>
      </Reveal>

      {/* Phone */}
      <Reveal delay={140} className="mt-3">
        <a
          href={`tel:${content.contact.phone}`}
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: "13px",
            letterSpacing: "0.06em",
            color: "var(--subtle)",
          }}
        >
          {content.contact.phone}
        </a>
      </Reveal>

      {/* Social links list */}
      <Reveal delay={180} className="mt-16">
        <p
          className="mb-6"
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--subtle)",
          }}
        >
          Elsewhere
        </p>
        <ul style={{ maxWidth: "400px" }}>
          {content.socials.map((s) => (
            <li key={s.label} className="border-t border-border last:border-b">
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="Open"
                className="flex items-center justify-between py-5"
                style={{ transition: "padding-left 0.3s var(--ease-out-expo)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "10px"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}
              >
                <span style={{ fontFamily: '"Instrument Sans"', fontSize: "18px", fontWeight: 500, letterSpacing: "-0.01em", color: "var(--ink)" }}>
                  {s.label}
                </span>
                <span style={{ fontFamily: '"IBM Plex Mono"', fontSize: "12px", color: "var(--subtle)" }}>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={220} className="mt-12">
        <p style={{ fontFamily: '"IBM Plex Mono"', fontSize: "11px", letterSpacing: "0.06em", color: "var(--subtle)", lineHeight: 1.8, maxWidth: "42ch" }}>
          {content.contact.note}
        </p>
      </Reveal>
    </section>
  );
}
