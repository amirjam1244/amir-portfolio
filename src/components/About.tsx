"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { defaultTransition, fadeInUp, viewportOnce } from "@/lib/motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="About" title="About Me" />

        <motion.div
          className="section-header-spacing grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <div className="glass-card p-8 sm:p-10">
            <p className="text-body-emphasis">
              I am a Frontend Developer specialized in building modern, fast
              and responsive web applications using React and Next.js.
            </p>
            <p className="text-body mt-7">
              I help businesses and individuals turn their ideas into
              high-quality digital products that look great and perform even
              better.
            </p>
          </div>

          <div className="glass-card p-8 sm:p-10">
            <h3 className="text-card-title">Skills</h3>
            <p className="text-body mt-3 text-sm sm:text-base">
              Technologies I work with daily
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="tag-pill cursor-default px-4 py-2 text-sm transition-colors hover:border-indigo-400/30 hover:bg-indigo-400/10 hover:text-foreground"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
