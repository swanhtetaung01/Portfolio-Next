import { Reveal } from "./Reveal";

export function SectionHeading({
  file,
  label,
  title,
}: {
  file: string;
  label: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 sm:mb-16">
        <p className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-ash">
          <span className="inline-block h-px w-8 bg-amber/70" />
          File {file} — {label}
        </p>
        <h2 className="font-display text-5xl uppercase leading-none text-paper sm:text-6xl lg:text-7xl">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
