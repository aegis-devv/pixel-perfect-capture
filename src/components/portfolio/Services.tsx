import { content } from "@/content";
import { Reveal } from "./Reveal";

/**
 * Full-height sticky service panels on desktop.
 * On mobile: smoothly stacked cards with natural scroll.
 * Outlined numeral on left, title + capabilities list on right.
 */
export function Services() {
  return (
    <section id="services" className="border-t border-border">
      {/* Section label */}
      <div className="border-b border-border px-6 py-8 md:px-10">
        <span className="label-mono">{content.services.label}</span>
      </div>

      {content.services.items.map((item, panelIdx) => (
        <div
          key={item.numeral}
          className="relative md:sticky md:top-0 border-b border-border bg-background"
          style={{ zIndex: 10 + panelIdx }}
        >
          <div className="grid min-h-[auto] md:min-h-screen grid-cols-12 items-center gap-y-10 gap-x-6 px-6 py-16 md:px-10 md:py-20">
            {/* Outlined numeral */}
            <div className="col-span-12 flex items-center md:col-span-4">
              <span
                className="numeral-outline select-none text-[28vw] md:text-[clamp(120px,20vw,260px)]"
              >
                {item.numeral}
              </span>
            </div>

            {/* Content column */}
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <Reveal>
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] md:text-[clamp(40px,5vw,72px)] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 md:mt-5 max-w-[46ch] text-[16px] md:text-[17px] leading-[1.65] text-[#444444]">
                  {item.description}
                </p>
              </Reveal>

              {/* Capability list with hairline rows */}
              <ul className="mt-8 md:mt-12">
                {item.capabilities.map((cap, capIdx) => (
                  <li key={cap} className="border-t border-border last:border-b">
                    <div className="group flex cursor-default items-center justify-between py-4 md:py-5 transition-transform duration-[350ms] ease-out hover:translate-x-3">
                      <span className="text-[16px] md:text-[18px] font-medium text-foreground">
                        {cap}
                      </span>
                      <span className="font-mono text-[14px] text-[#444444] transition-colors duration-300 group-hover:text-accent font-medium">
                        {String(capIdx + 1).padStart(2, "0")}
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
