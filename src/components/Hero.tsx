"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedButton from "@/components/AnimatedButton";
import { defaultTransition, fadeInUp } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function Hero() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center sm:px-8"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={fadeInUp}
          transition={defaultTransition}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-glass px-4 py-1.5 text-sm font-medium text-muted backdrop-blur-sm"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgb(52_211_153/0.6)]"
            aria-hidden="true"
          />
          Available for freelance & full-time opportunities
        </motion.div>

        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400/90"
        >
          {siteConfig.role}
        </motion.p>

        <motion.h1
          id="hero-heading"
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-hero mt-4"
        >
          Building premium web experiences with React & Next.js
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-subtitle mt-6"
        >
          {siteConfig.name} · {siteConfig.tagline}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-body mt-8 max-w-3xl"
        >
          I am a Frontend Developer specialized in building modern, fast, and
          responsive web applications using React and Next.js. I help businesses
          and individuals turn ideas into high-quality digital products that look
          great and perform even better.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={defaultTransition}
          className="mt-14 flex w-full max-w-md flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:gap-5"
        >
          <AnimatedButton href="#projects">View Projects</AnimatedButton>
          <Link
            href={siteConfig.resumePath}
            download
            className="btn-secondary text-center"
          >
            Download Resume
          </Link>
          <AnimatedButton href="#contact" variant="secondary">
            Contact Me
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
