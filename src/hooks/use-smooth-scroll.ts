import { useEffect } from "react";

/** Lenis smooth scroll, skipped when the user prefers reduced motion. */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let destroyed = false;
    let instance: { raf: (t: number) => void; destroy: () => void } | null = null;

    void import("lenis").then(({ default: Lenis }) => {
      if (destroyed) return;
      const lenis = new Lenis({ lerp: 0.08 });
      instance = { raf: (t) => lenis.raf(t), destroy: () => lenis.destroy() };
      const loop = (time: number) => {
        instance?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      instance?.destroy();
    };
  }, []);
}
