import { useEffect, useState } from "react";

/**
 * 0 → 100 counter in huge mono type, then a curtain wipe reveals the hero.
 * Skipped instantly when the user prefers reduced motion.
 */
export function Preloader() {
  const [count, setCount] = useState(0);
  const [lifting, setLifting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (
      (typeof window !== "undefined" && window.location.search.includes("preview")) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setGone(true);
      return;
    }

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1200, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setLifting(true);
        window.setTimeout(() => setGone(true), 950);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-end justify-end bg-foreground px-8 pb-10 md:px-12 md:pb-12 ${
        lifting ? "animate-curtain-up" : ""
      }`}
    >
      {/* Label top-left */}
      <span className="absolute left-8 top-8 font-mono text-[13px] tracking-[0.16em] uppercase text-background/60 md:left-12 md:top-10">
        Loading
      </span>

      {/* Giant counter */}
      <span className="font-mono text-[22vw] leading-none tracking-[-0.04em] text-background select-none">
        {String(count).padStart(3, "0")}
      </span>
    </div>
  );
}
