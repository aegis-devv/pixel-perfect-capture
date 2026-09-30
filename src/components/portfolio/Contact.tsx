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

  const field = "w-full border-b border-input bg-transparent py-4 text-lg outline-none placeholder:text-muted-foreground focus:border-accent";

  return (
    <section id="contact" className="border-t border-border px-6 py-32 md:px-10 md:py-48">
      <span className="label-mono">{content.contact.label}</span>

      <Reveal className="mt-10">
        <h2 className="display-xl">
          {content.contact.heading[0]}
          <br />
          {content.contact.heading[1]}
        </h2>
      </Reveal>

      <Reveal delay={80} className="mt-12">
        <a
          href={`mailto:${content.contact.email}`}
          data-cursor="Write"
          className="group inline-block overflow-hidden"
        >
          <span className="block text-2xl transition-transform duration-500 ease-out group-hover:-translate-y-full md:text-4xl">
            {content.contact.email}
          </span>
          <span className="block text-2xl text-accent transition-transform duration-500 ease-out group-hover:-translate-y-full md:text-4xl">
            {content.contact.email}
          </span>
        </a>
      </Reveal>

      <div className="mt-24 grid grid-cols-12 gap-10">
        <form onSubmit={onSubmit} className="col-span-12 md:col-span-6">
          <label className="block">
            <span className="meta-mono text-muted-foreground">Name</span>
            <input
              required
              className={field}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </label>
          <label className="mt-8 block">
            <span className="meta-mono text-muted-foreground">Email</span>
            <input
              required
              type="email"
              className={field}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@studio.com"
            />
          </label>
          <label className="mt-8 block">
            <span className="meta-mono text-muted-foreground">Message</span>
            <textarea
              required
              rows={4}
              className={`${field} resize-none`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What are you building?"
            />
          </label>
          <button
            type="submit"
            data-cursor="Send"
            className="group relative mt-10 inline-flex overflow-hidden border border-input px-8 py-4"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-0 bg-accent transition-[height] duration-500 ease-out group-hover:h-full"
            />
            <span className="meta-mono relative transition-colors duration-500 group-hover:text-accent-foreground">
              Send message
            </span>
          </button>
          <p className="meta-mono mt-6 max-w-[40ch] leading-relaxed text-muted-foreground">
            {content.contact.note}
          </p>
        </form>

        <ul className="col-span-12 flex flex-col justify-end md:col-span-4 md:col-start-9">
          {content.socials.map((s) => (
            <li key={s.label} className="border-t border-border last:border-b">
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="Open"
                className="group flex items-center justify-between py-5 transition-transform duration-500 ease-out hover:translate-x-3"
              >
                <span className="text-lg">{s.label}</span>
                <span aria-hidden className="meta-mono text-muted-foreground group-hover:text-accent">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
