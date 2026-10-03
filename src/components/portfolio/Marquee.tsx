import { useEffect, useRef } from "react";
import { content } from "@/content";

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const speed = useRef(0.7);
  const raf = useRef(0);
  const pos = useRef(0);
  const lastY = useRef(0);

  useEffect(() => {
    let decayTimer = 0;
    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastY.current);
      speed.current = 0.7 + Math.min(delta * 0.06, 3.5);
      lastY.current = window.scrollY;
      window.clearTimeout(decayTimer);
      decayTimer = window.setTimeout(() => { speed.current = 0.7; }, 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const loop = () => {
      const track = trackRef.current;
      if (track) {
        pos.current -= speed.current;
        const half = track.scrollWidth / 2;
        if (pos.current <= -half) pos.current = 0;
        track.style.transform = `translateX(${pos.current}px)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const items = [...content.marquee, ...content.marquee, ...content.marquee, ...content.marquee];

  return (
    <div
      className="w-full overflow-hidden border-b border-t border-border py-[14px]"
      aria-hidden
    >
      <div ref={trackRef} className="flex w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-8"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: i % 2 === 0 ? "var(--ink)" : "var(--subtle)",
            }}
          >
            {item}
            <span className="mx-8 text-[var(--subtle)]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
