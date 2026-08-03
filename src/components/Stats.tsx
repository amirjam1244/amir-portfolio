"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section id="stats" className="section-padding" aria-labelledby="stats-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Impact"
          title="By the numbers"
          subtitle="Experience, delivery, and technical breadth at a glance"
        />
        <h2 id="stats-heading" className="sr-only">
          Statistics
        </h2>

        <motion.ul
          className="section-header-spacing grid grid-cols-1 gap-6 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {stats.map((item) => (
            <motion.li
              key={item.label}
              variants={fadeInUp}
              className="glass-card glass-card-hover p-8 text-center"
            >
              <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {item.value}
              </p>
              <p className="text-body mt-3 text-sm sm:text-base">{item.label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
