"use client";

import { motion } from "framer-motion";
import { arsenal, levelWidth } from "@/lib/data";
import { EASE, Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Arsenal() {
  return (
    <section id="arsenal" className="relative z-10 border-y border-steel/40 bg-graphite/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading file="02" label="Known capabilities" title="The Arsenal" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {arsenal.map((division, di) => (
            <Reveal key={division.division} delay={di * 0.12}>
              <div className="spotlight-card h-full border border-steel bg-night/60 p-7 sm:p-9">
                <div className="mb-8 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl uppercase text-paper sm:text-4xl">
                    {division.division}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
                    {String(division.skills.length).padStart(2, "0")} items
                  </span>
                </div>
                <p className="mb-8 text-sm italic text-ash">{division.brief}</p>

                <ul className="space-y-6">
                  {division.skills.map((skill, si) => (
                    <li key={skill.name}>
                      <div className="mb-2 flex items-baseline justify-between">
                        <span className="text-sm font-semibold tracking-wide text-paper">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                          {skill.level}
                        </span>
                      </div>
                      {/* charge bar */}
                      <div className="h-[3px] w-full overflow-hidden bg-steel/80">
                        <motion.div
                          className="h-full bg-gradient-to-r from-amber-dim to-amber"
                          initial={{ width: "0%" }}
                          whileInView={{ width: levelWidth[skill.level] }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{
                            duration: 1.1,
                            delay: 0.15 + si * 0.08,
                            ease: EASE,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
