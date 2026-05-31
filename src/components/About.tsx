"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
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
        <FadeIn className="text-center">
          <h2 className="text-section-title">About Me</h2>
        </FadeIn>

        <motion.div
          className="section-header-spacing grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <div>
            <p className="text-body-emphasis">
              I&apos;m a web developer focused on React and Next.js, building
              fast and accessible applications for the modern web.
            </p>
            <p className="text-body mt-7">
              I&apos;m passionate about crafting clean interfaces, writing
              maintainable code, and turning ideas into polished products that
              people enjoy using.
            </p>
            <p className="text-body mt-7">
              Currently exploring freelancing opportunities and real-world
              projects where I can grow as a developer and deliver meaningful
              solutions.
            </p>
          </div>

          <div>
            <h3 className="text-card-title">Skills</h3>
            <ul className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  whileHover={{ y: -2, borderColor: "rgb(82 82 91)" }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-white"
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
