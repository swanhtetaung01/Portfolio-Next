import { marqueeItems } from "@/lib/data";

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className="marquee relative z-10 overflow-hidden border-y border-steel/60 bg-graphite/60 py-4"
      aria-hidden
    >
      <div className="marquee-track">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 pr-6 font-mono text-xs uppercase tracking-[0.3em] text-ash"
          >
            {item}
            <span className="text-amber/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
