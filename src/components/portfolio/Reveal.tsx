import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "p" | "h2";
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function ClipReveal({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.25);
  return (
    <div ref={ref} className={cn("clip-reveal", shown && "clip-reveal-in", className)}>
      {children}
    </div>
  );
}
