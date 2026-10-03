import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current || !measurerRef.current) return;
      // Use full clientWidth — name is inset-x-0 so it spans the full container
      const availableWidth = containerRef.current.clientWidth;
      const baseWidth = measurerRef.current.offsetWidth;
      if (baseWidth > 0 && availableWidth > 0) {
        // 0.97 gives ~3% breathing room so the trailing "r" is never clipped
        setFitFontSize((availableWidth / baseWidth) * 97);
      }
    };

    updateSize();
    if (document.fonts?.ready) document.fonts.ready.then(updateSize);

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
      className="relative flex h-[100svh] min-h-[600px] w-full flex-col overflow-hidden border-b border-border select-none"
      style={{ backgroundColor: "var(--paper)" }}
    >
      {/* Hidden measurer — font must match exactly */}
      <span
        ref={measurerRef}
        aria-hidden
        className="pointer-events-none absolute -left-[9999px] top-0 invisible whitespace-nowrap"
        style={{
          fontFamily: '"Instrument Sans", sans-serif',
          fontWeight: 500,
          fontSize: "100px",
          letterSpacing: "-0.045em",
          lineHeight: 1,
        }}
      >
        {fullName}
      </span>

      {/* Padding container */}
      <div
        ref={containerRef}
        className="relative h-full w-full px-[clamp(18px,4vw,52px)] flex flex-col justify-between"
      >
        {/* Top nav spacer */}
        <div className="pt-[72px] md:pt-20" />

        {/* ── PORTRAIT — centered, anchored to bottom ── */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 z-10 flex items-end"
          style={{
            transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`,
            animation: "portrait-in 1.2s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "0.1s",
          }}
        >
          <img
            src={portraitSrc}
            alt={fullName}
            draggable={false}
            className="w-auto max-w-none object-contain"
            style={{
              height: "clamp(420px, 82svh, 900px)",
              filter: "grayscale(1) contrast(1.2)",
            }}
          />
        </div>

        {/* ── NAME — Instrument Sans 500, spans full width ── */}
        {/*
          mix-blend-mode: difference
          On light paper: renders as near-black ink
          On dark clothing: renders as bright luminous white
          This is the core visual effect — identical on mobile & desktop
        */}
        <div
          className="pointer-events-none absolute inset-x-0 z-20 select-none"
          style={{
            top: "64%",
            transform: `translateY(calc(-50% + ${scrollY * 0.05}px))`,
            mixBlendMode: "difference",
          }}
        >
          <div
            className="w-full whitespace-nowrap leading-none"
            style={{
              fontFamily: '"Instrument Sans", sans-serif',
              fontWeight: 500,
              fontSize: fitFontSize ? `${fitFontSize}px` : "clamp(42px,11.5vw,200px)",
              letterSpacing: "-0.045em",
              color: "#FFFFFF",
            }}
          >
            {fullName.split("").map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden" style={{ lineHeight: 0.88 }}>
                <span
                  className="inline-block"
                  style={{
                    animation: "mask-up 1s cubic-bezier(0.16,1,0.3,1) both",
                    animationDelay: `${0.08 + i * 0.028}s`,
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ── BOTTOM ROW ── */}
        <div className="relative z-30 flex items-end justify-between pb-6 md:pb-9">
          {/* Left — Social links */}
          <ul className="flex flex-col gap-[6px]">
            {content.socials.map((s, i) => (
              <li
                key={s.label}
                style={{
                  animation: "mask-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
                  animationDelay: `${0.6 + i * 0.07}s`,
                }}
              >
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Open"
                  className="group inline-flex items-center gap-2"
                >
                  <span
                    className="font-mono text-[11px] md:text-[12px] text-[var(--subtle)]"
                    style={{ letterSpacing: "0.06em" }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="underline-slide font-mono text-[11px] md:text-[12px] uppercase tracking-[0.08em] font-medium text-foreground"
                  >
                    {s.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right — Role descriptor */}
          <div
            className="flex flex-col items-end text-right"
            style={{
              animation: "mask-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "0.8s",
            }}
          >
            <p
              className="font-medium text-foreground leading-[1.05]"
              style={{
                fontFamily: '"Instrument Sans", sans-serif',
                fontSize: "clamp(14px,2.6vw,42px)",
                letterSpacing: "-0.03em",
              }}
            >
              <span className="text-accent">//</span> Full-Stack Engineer
            </p>
            <p
              className="font-medium text-foreground leading-[1.05]"
              style={{
                fontFamily: '"Instrument Sans", sans-serif',
                fontSize: "clamp(14px,2.6vw,42px)",
                letterSpacing: "-0.03em",
              }}
            >
              Systems Architecture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
