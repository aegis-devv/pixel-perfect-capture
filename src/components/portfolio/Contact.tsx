import { useState } from "react";
import { content } from "@/content";
import { Reveal } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name || "the site"}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${content.contact.email}?subject=${subject}&body=${body}`;
  };

  const inputStyle = {
    width: "100%",
    borderBottom: "1px solid rgba(17,17,17,0.2)",
    background: "transparent",
    padding: "14px 0",
    fontFamily: '"Instrument Sans", sans-serif',
    fontSize: "17px",
    letterSpacing: "-0.01em",
    color: "var(--ink)",
    outline: "none",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    display: "block",
    transition: "border-color 0.3s",
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      className="border-b border-border px-[clamp(18px,4vw,52px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(56px,10vw,140px)]"
    >
      {/* Label */}
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
      <Reveal delay={110} className="mt-10">
        <a
          href={`mailto:${content.contact.email}`}
          data-cursor="Write"
          className="group inline-block overflow-hidden leading-none"
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontSize: "clamp(18px,3vw,44px)",
            letterSpacing: "-0.03em",
            fontWeight: 500,
          }}
        >
          <span
            className="block"
            style={{
              color: "var(--ink)",
              transition: "transform 0.45s var(--ease-out-expo)",
            }}
          >
            {content.contact.email}
          </span>
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

      {/* Form + socials */}
      <div className="mt-20 grid grid-cols-12 gap-10">
        {/* Form */}
        <form onSubmit={onSubmit} className="col-span-12 md:col-span-6">
          <label className="block">
            <span
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--subtle)",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Name
            </span>
            <input
              required
              style={inputStyle}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </label>

          <label className="mt-8 block">
            <span
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--subtle)",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Email
            </span>
            <input
              required
              type="email"
              style={inputStyle}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@company.com"
            />
          </label>

          <label className="mt-8 block">
            <span
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--subtle)",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Message
            </span>
            <textarea
              required
              rows={5}
              style={{ ...inputStyle, resize: "none" }}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about the project..."
            />
          </label>

          <button
            type="submit"
            data-cursor="Send"
            className="group relative mt-9 inline-flex overflow-hidden border border-foreground/20 px-7 py-[14px]"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 bg-foreground"
              style={{
                height: 0,
                transition: "height 0.45s var(--ease-out-expo)",
              }}
            />
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
              Send message
            </span>
          </button>

          <p
            className="mt-5"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "var(--subtle)",
              lineHeight: 1.7,
              maxWidth: "42ch",
            }}
          >
            {content.contact.note}
          </p>
        </form>

        {/* Social + contact list */}
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-start">
          <ul>
            {content.socials.map((s) => (
              <li key={s.label} className="border-t border-border last:border-b">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="Open"
                  className="flex items-center justify-between py-5"
                  style={{ transition: "padding-left 0.35s var(--ease-out-expo)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "12px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "0px";
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Instrument Sans", sans-serif',
                      fontSize: "17px",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: "var(--ink)",
                    }}
                  >
                    {s.label}
                  </span>
                  <span
                    style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      fontSize: "12px",
                      color: "var(--subtle)",
                    }}
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
