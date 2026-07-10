import { subject } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-steel/40 bg-night">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-ash sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {subject.name}</p>
        <p className="flex items-center gap-2">
          <span className="signal-dot inline-block h-1.5 w-1.5 rounded-full bg-amber" />
          Built in the dark. Deployed at dawn.
        </p>
      </div>
    </footer>
  );
}
