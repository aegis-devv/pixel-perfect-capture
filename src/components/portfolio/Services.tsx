import { content } from "@/content";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="border-t border-border">
      <div className="px-6 pt-20 md:px-10">
        <span className="label-mono">{content.services.label}</span>
      </div>

      {content.services.items.map((item) => (
        <div key={item.numeral} className="sticky top-0 border-t border-border bg-background">
          <div className="grid min-h-screen grid-cols-12 items-center gap-6 px-6 py-24 md:px-10">
            <div className="col-span-12 md:col-span-4">
              <span className="numeral-outline block text-[26vw] md:text-[14vw]">{item.numeral}</span>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <Reveal>
                <h3 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{item.title}</h3>
                <p className="mt-6 max-w-[48ch] text-muted-foreground">{item.description}</p>
              </Reveal>

              <ul className="mt-12">
                {item.capabilities.map((cap, i) => (
                  <li key={cap} className="border-t border-border last:border-b">
                    <div className="group flex items-center justify-between py-5 transition-transform duration-500 ease-out hover:translate-x-3">
                      <span className="text-lg">{cap}</span>
                      <span className="meta-mono text-muted-foreground transition-colors duration-300 group-hover:text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
