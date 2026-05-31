"use client";

import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import { defaultTransition, fadeInUp } from "@/lib/motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center sm:px-8">
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={fadeInUp}
          transition={defaultTransition}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-zinc-400 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgb(52_211_153/0.6)]" />
          Available for freelance work
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-hero"
        >
          Amirhossein Jamshidi
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-subtitle mt-8"
        >
          Frontend Developer | React | Next.js
        </motion.p>

        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-body mt-10 max-w-2xl"
        >
          I am a Frontend Developer specialized in building modern, fast and
          responsive web applications using React and Next.js. I help businesses
          and individuals turn their ideas into high-quality digital products
          that look great and perform even better.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={defaultTransition}
          className="mt-14 flex w-full max-w-sm flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:gap-5"
        >
          <AnimatedButton href="#projects">View Projects</AnimatedButton>
          <AnimatedButton href="#contact" variant="secondary">
            Contact Me
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
