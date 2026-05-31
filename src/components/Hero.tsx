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
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
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
          Web Developer | React | Next.js
        </motion.p>

        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-body mt-8 max-w-2xl"
        >
          Passionate about building fast, accessible web experiences with modern
          tools. I turn ideas into clean, user-focused applications.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={defaultTransition}
          className="mt-12 flex w-full max-w-sm flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row"
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
