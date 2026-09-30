import { useEffect, useState } from "react";

/** 0 → 100 counter in huge mono type, then a curtain wipe. */
export function Preloader() {
  const [count, setCount] = useState(0);
  const [lifting, setLifting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1200, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else {
        setLifting(true);
        window.setTimeout(() => setGone(true), 900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-end justify-end bg-foreground px-6 pb-8 ${
        lifting ? "animate-curtain-up" : ""
      }`}
    >
      <span className="font-mono text-[18vw] leading-none tracking-[-0.04em] text-background">
        {String(count).padStart(3, "0")}
      </span>
    </div>
  );
}
