import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch/coarse pointer devices
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let tx = -200, ty = -200, cx = -200, cy = -200, raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) setVisible(true);
      const el = (e.target as HTMLElement | null)?.closest("[data-cursor]");
      setLabel(el ? (el.getAttribute("data-cursor") ?? "") : null);
    };

    const loop = () => {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = label !== null;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex items-center justify-center rounded-full"
      style={{
        width: active ? 70 : 8,
        height: active ? 70 : 8,
        background: active ? "var(--ink)" : "var(--ink)",
        opacity: visible ? 1 : 0,
        transition: "width 0.25s var(--ease-out-expo), height 0.25s var(--ease-out-expo), opacity 0.3s",
        willChange: "transform",
      }}
    >
      {active && label ? (
        <span style={{
          fontFamily: '"IBM Plex Mono"', fontSize: 10, letterSpacing: "0.1em",
          textTransform: "uppercase", fontWeight: 600, color: "var(--paper)",
        }}>
          {label}
        </span>
      ) : null}
    </div>
  );
}
