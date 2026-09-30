import { useEffect, useRef } from "react";
import { content } from "@/content";

/**
 * Horizontal marquee of tech/skill names.
 * Speed reacts to scroll velocity — fast scroll = faster marquee.
 */
export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const speed = useRef(1);
  const raf   = useRef(0);
  const pos   = useRef(0);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastY.current);
      speed.current = 1 + Math.min(delta * 0.08, 4);
      lastY.current = window.scrollY;
      // Decay back to 1 over ~600ms
      window.clearTimeout(decayTimer);
      decayTimer = window.setTimeout(() => {
        speed.current = 1;
      }, 600);
    };
    let decayTimer = 0;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const loop = () => {
      const track = trackRef.current;
      if (track) {
        pos.current -= speed.current * 0.6;
        const half = track.scrollWidth / 2;
        if (pos.current <= -half) pos.current = 0;
        track.style.transform = `translateX(${pos.current}px)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  /* Duplicate items so the loop is seamless */
  const row = content.marquee.join("  ·  ");
  const repeated = Array.from({ length: 4 }, (_, i) => (
    <span key={i} className="meta-mono whitespace-nowrap px-10">
      {row}
    </span>
  ));

  return (
    <div
      className="w-full overflow-hidden border-b border-t border-border py-4"
      aria-hidden
    >
      <div ref={trackRef} className="flex w-max">
        {repeated}
      </div>
    </div>
  );
}
