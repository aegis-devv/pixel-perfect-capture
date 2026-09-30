import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small dot that grows into a labelled circle over [data-cursor] elements.
 * Hidden until the user actually moves their mouse to prevent any stray dots on load.
 * Disabled completely on touch/coarse-pointer devices.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    setEnabled(true);

    let tx = -100;
    let ty = -100;
    let cx = -100;
    let cy = -100;
    let raf = 0;
    let movedOnce = false;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!movedOnce) {
        movedOnce = true;
        cx = tx;
        cy = ty;
        setHasMoved(true);
      }
      const target = (e.target as HTMLElement | null)?.closest("[data-cursor]");
      setLabel(target ? (target.getAttribute("data-cursor") ?? "") : null);
    };

    const loop = () => {
      if (movedOnce) {
        cx += (tx - cx) * 0.18;
        cy += (ty - cy) * 0.18;
        if (dot.current) {
          dot.current.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`;
        }
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled || !hasMoved) return null;

  const active = label !== null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden items-center justify-center rounded-full bg-accent text-accent-foreground transition-[width,height] duration-300 ease-out md:flex"
      style={{ width: active ? 76 : 8, height: active ? 76 : 8 }}
    >
      {active && label ? (
        <span className="font-mono text-[13px] uppercase tracking-[0.08em] font-medium text-accent-foreground">
          {label}
        </span>
      ) : null}
    </div>
  );
}
