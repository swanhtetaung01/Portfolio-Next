"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { caseFiles, type CaseFile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function CaseCard({ file, index }: { file: CaseFile; index: number }) {
  const ref = useRef<HTMLElement>(null);

  // feed cursor position into the CSS spotlight
  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        ref={ref}
        onMouseMove={onMouseMove}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="spotlight-card group flex h-full flex-col overflow-hidden border border-steel bg-graphite/70 transition-colors duration-500 hover:border-amber/50"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-steel">
          <Image
            src={file.image}
            alt={`${file.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 380px, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-80" />
          <span className="absolute left-4 top-4 border border-amber/50 bg-night/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-amber backdrop-blur-sm">
            {file.id}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
            {file.classification}
          </p>
          <h3 className="font-display text-2xl uppercase tracking-wide text-paper sm:text-3xl">
            {file.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">
            {file.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {file.stack.map((t) => (
              <li
                key={t}
                className="border border-steel px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-fog"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3 border-t border-steel/60 pt-5">
            <a
              href={file.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fog transition-colors hover:text-amber"
            >
              <GithubIcon size={14} /> Source
            </a>
            {file.demo && (
              <a
                href={file.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-amber transition-colors hover:text-[#f0bc5e]"
              >
                Live demo{" "}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function CaseFiles() {
  return (
    <section id="cases" className="relative z-10 mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading file="03" label="Evidence of operations" title="Case Files" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {caseFiles.map((file, i) => (
          <CaseCard key={file.id} file={file} index={i} />
        ))}
      </div>
    </section>
  );
}
