"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { LinkedinIcon } from "./BrandIcons";
import { subject } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(subject.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard unavailable — the mailto link still works
    }
  }

  return (
    <section
      id="signal"
      className="relative z-10 overflow-hidden border-t border-steel/40"
    >
      {/* the signal glow behind the CTA — the one place the sky lights up */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(232,163,61,0.09), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal>
          <p className="mb-4 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-ash">
            <span className="inline-block h-px w-8 bg-amber/70" />
            File 04 — Contact protocol
            <span className="inline-block h-px w-8 bg-amber/70" />
          </p>
          <h2 className="font-display text-6xl uppercase leading-[0.95] text-paper sm:text-7xl lg:text-8xl">
            Send the <span className="text-amber">signal</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-balance text-base leading-relaxed text-fog sm:text-lg">
            Looking for someone to build the systems behind the scenes?
            The line is open. Response guaranteed by nightfall.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href={`mailto:${subject.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 bg-amber px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-night transition-colors hover:bg-[#f0bc5e]"
            >
              <Mail size={16} /> {subject.email}
            </motion.a>
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-steel px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:border-fog hover:text-paper"
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-amber" /> Copied
                </>
              ) : (
                <>
                  <Copy size={15} /> Copy address
                </>
              )}
            </motion.button>
            <motion.a
              href={subject.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-steel px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors hover:border-fog hover:text-paper"
            >
              <LinkedinIcon size={15} /> LinkedIn
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
