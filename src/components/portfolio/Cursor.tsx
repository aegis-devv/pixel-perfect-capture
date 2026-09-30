import { useEffect, useRef, useState } from "react";

/** Small dot that grows into a labeled circle over [data-cursor] elements. */
export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const target = (e.target as HTMLElement | null)?.closest("[data-cursor]");
      setLabel(target ? (target.getAttribute("data-cursor") || "") : null);
    };

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  const active = label !== null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:flex items-center justify-center rounded-full bg-accent text-accent-foreground transition-[width,height] duration-300 ease-out"
      style={{ width: active ? 72 : 8, height: active ? 72 : 8 }}
    >
      {active && label ? (
        <span className="meta-mono text-[9px]">{label}</span>
      ) : null}
    </div>
  );
}
