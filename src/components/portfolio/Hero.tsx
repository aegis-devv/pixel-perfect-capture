import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/content";
import portraitSrc from "@/assets/image.png";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const measurerRef = useRef<HTMLSpanElement>(null);
  const [fitFontSize, setFitFontSize] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Responsive Fit-text: spans content width exactly on desktop AND mobile
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current || !measurerRef.current) return;
      const availableWidth = containerRef.current.clientWidth;
      const baseWidth = measurerRef.current.offsetWidth;
      if (baseWidth > 0 && availableWidth > 0) {
        const calculated = (availableWidth / baseWidth) * 100;
        setFitFontSize(calculated);
      }
    };

    updateSize();

    if (document.fonts?.ready) {
      document.fonts.ready.then(updateSize);
    }

    const ro = new ResizeObserver(updateSize);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updateSize);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const fullName = `${content.name.first} ${content.name.last}`;

  return (
    <section
      id="hero"
      className="relative flex h-[100svh] min-h-[580px] w-full flex-col justify-between overflow-hidden border-b border-border select-none"
      style={{
        backgroundColor: "var(--paper)",
        "--name-top": "58%",
        "--portrait-h": "92svh",
        "--portrait-x": "-37%",
      } as React.CSSProperties}
    >
      {/* Hidden measurer span for responsive fit-text calculations */}
      <span
        ref={measurerRef}
        aria-hidden
        className="pointer-events-none absolute -left-[9999px] top-0 invisible whitespace-nowrap font-medium tracking-[-0.055em]"
        style={{
          fontFamily: '"Instrument Sans", sans-serif',
          fontSize: "100px",
          lineHeight: "0.85",
        }}
      >
        {fullName}
      </span>

      {/* ── Content container with responsive horizontal padding ── */}
      <div
        ref={containerRef}
        className="relative h-full w-full px-[clamp(16px,2.5vw,40px)] flex flex-col justify-between"
      >
        {/* Top spacer */}
        <div className="pt-20 md:pt-24" />

        {/* ── PORTRAIT CUTOUT: DEAD-CENTER IN THE MIDDLE, BLEEDING OFF BOTTOM ── */}
        <div
          className="pointer-events-none absolute bottom-0 z-10"
          style={{
            left: "50%",
            transform: `translateX(var(--portrait-x, -37%)) translateY(${scrollY * 0.12}px)`,
          }}
        >
          <img
            src={portraitSrc}
            alt={fullName}
            className="w-auto max-w-none object-contain h-[70svh] md:h-[var(--portrait-h,92svh)] min-h-[460px] md:min-h-[560px]"
            style={{
              filter: "grayscale(1) contrast(1.18)",
            }}
          />
        </div>

        {/* ── GIANT NAME: ONE LINE ACROSS HERO WITH WHITE GLASSY FEEL OVER BLACK SHIRT ── */}
        {/* Layer with mix-blend-mode: difference:
            - Over off-white cream paper (#F9F8F3) -> Solid ink black!
            - Over the black polo shirt (#121212) -> Glowing white glassy letters!
            - Subtle text-shadow for a refined frosted glass bloom */}
        <div
          className="pointer-events-none absolute inset-x-0 z-20 select-none text-center px-[clamp(16px,2.5vw,40px)]"
          style={{
            top: "var(--name-top, 58%)",
            transform: `translateY(calc(-50% + ${scrollY * 0.08}px))`,
            mixBlendMode: "difference",
          }}
        >
          <h1
            className="w-full text-center whitespace-nowrap font-medium tracking-[-0.055em] leading-[0.85]"
            style={{
              fontSize: fitFontSize ? `${fitFontSize}px` : "clamp(34px, 11vw, 220px)",
              fontFamily: '"Instrument Sans", sans-serif',
              color: "#FFFFFF",
              textShadow: "0 0 12px rgba(255, 255, 255, 0.4)",
            }}
          >
            {fullName.split("").map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden leading-[0.85]">
                <span
                  className="inline-block"
                  style={{
                    animation: `mask-up 0.8s cubic-bezier(0.19,1,0.22,1) both`,
                    animationDelay: `${i * 0.02}s`,
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* ── Bottom-left: Social links ── */}
        <ul className="absolute bottom-6 left-[clamp(16px,2.5vw,40px)] z-30 flex flex-col gap-0.5 md:bottom-10 md:gap-1">
          {content.socials.map((s, i) => (
            <li
              key={s.label}
              className="min-h-[36px] md:min-h-[44px] flex items-center"
              style={{
                animation: `mask-up 0.7s cubic-bezier(0.19,1,0.22,1) both`,
                animationDelay: `${0.2 + i * 0.06}s`,
              }}
            >
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Open"
                className="group font-mono text-[13px] md:text-[14px] uppercase tracking-[0.08em] font-medium text-foreground inline-flex items-center gap-1.5 hover:text-accent transition-colors duration-300"
              >
                <span className="underline-slide">{s.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Bottom-right: Role lines with high contrast over the dark shirt ── */}
        <div className="absolute bottom-6 right-[clamp(16px,2.5vw,40px)] z-30 flex flex-col items-end text-right md:bottom-10">
          <p className="text-[clamp(18px,3vw,52px)] font-medium tracking-[-0.035em] leading-[1.05] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
            <span className="text-[#34D399] font-semibold">//</span> Web Developer
          </p>
          <p className="text-[clamp(18px,3vw,52px)] font-medium tracking-[-0.035em] leading-[1.05] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
            Full-Stack Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
