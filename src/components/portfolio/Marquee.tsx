import { content } from "@/content";

export function Marquee() {
  const row = content.marquee.join("  •  ");
  return (
    <div className="w-full overflow-hidden border-b border-border py-4">
      <div className="flex w-max animate-marquee-x whitespace-nowrap hover:[animation-play-state:paused]">
        <span className="meta-mono px-10">{row}</span>
        <span className="meta-mono px-10">{row}</span>
        <span className="meta-mono px-10">{row}</span>
        <span className="meta-mono px-10">{row}</span>
      </div>
    </div>
  );
}
