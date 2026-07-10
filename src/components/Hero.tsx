"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { subject } from "@/lib/data";
import { EASE } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const nameLines = ["SWAN", "HTET AUNG"];

export function Hero() {
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 600], [0, 120]);
  const fade = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <section
      id="top"
      className="relative flex min-h-dvh flex-col items-center justify-center px-5 pt-24 pb-20 text-center"
    >
      <motion.div style={{ y: drift, opacity: fade }} className="flex flex-col items-center">
        {/* case-file stamp */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-fog"
        >
          <span className="signal-dot inline-block h-1.5 w-1.5 rounded-full bg-amber" />
          Case file — open · {subject.role}
        </motion.p>

        {/* the name, poster-sized, rising line by line */}
        <h1 className="font-display uppercase leading-[0.92] tracking-[0.01em]">
          {nameLines.map((line, i) => (
            <span key={line} className="block overflow-hidden py-[0.04em]">
              <motion.span
                className="block text-[17vw] text-paper sm:text-[13vw] lg:text-[9.5rem]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.14, ease: EASE }}
              >
                {i === 1 ? (
                  <>
                    HTET <span className="text-amber">AUNG</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          className="mt-7 max-w-md text-balance text-base leading-relaxed text-fog sm:text-lg"
        >
          Backend-leaning software engineer. Builds the machinery a city
          never sees — Java, Spring Boot, and systems that hold up at night.
        </motion.p>

        {/* actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#cases"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-amber px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-night transition-colors hover:bg-[#f0bc5e]"
          >
            Open case files
          </motion.a>
          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="border border-steel px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:border-fog hover:text-paper"
          >
            View CV
          </motion.a>

          <div className="flex items-center gap-2">
            <motion.a
              href={subject.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              whileHover={{ scale: 1.12, rotate: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-12 items-center justify-center border border-steel text-fog transition-colors hover:border-amber hover:text-amber"
            >
              <GithubIcon size={18} />
            </motion.a>
            <motion.a
              href={subject.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              whileHover={{ scale: 1.12, rotate: 4 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-12 items-center justify-center border border-steel text-fog transition-colors hover:border-amber hover:text-amber"
            >
              <LinkedinIcon size={18} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#profile"
        aria-label="Scroll to profile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 text-fog transition-colors hover:text-amber"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
