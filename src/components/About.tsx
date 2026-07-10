"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { subject } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="profile" className="relative z-10 mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading file="01" label="Subject profile" title="The Subject" />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* evidence photo */}
        <Reveal className="relative">
          <motion.figure
            whileHover={{ rotate: 0, scale: 1.015 }}
            className="group relative mx-auto max-w-sm rotate-[-1.5deg] border border-steel bg-graphite p-3 pb-14 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] transition-transform duration-500 lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Swan Htet Aung"
                fill
                sizes="(min-width: 1024px) 380px, 90vw"
                className="object-cover grayscale-[35%] transition-all duration-700 group-hover:grayscale-0"
                priority={false}
              />
              {/* amber scan sheen on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
            </div>
            <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              <span>Exhibit A — {subject.name}</span>
              <span className="text-amber">verified</span>
            </figcaption>
          </motion.figure>
        </Reveal>

        {/* dossier text + stats */}
        <div>
          <Reveal delay={0.1}>
            <p className="text-pretty text-base leading-relaxed text-fog sm:text-lg">
              {subject.bio}
            </p>
            <p className="mt-5 font-mono text-xs leading-relaxed text-ash">
              Current objective:{" "}
              <span className="redacted px-1" tabIndex={0}>
                secure internship or entry-level role, gain field experience
              </span>{" "}
              <span className="text-ash/60">(hover to declassify)</span>
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-3" gap={0.1}>
            {subject.stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="spotlight-card h-full border border-steel bg-graphite/70 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
                    {s.label}
                  </p>
                  <p className="mt-3 font-display text-3xl uppercase text-amber">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-fog">{s.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
