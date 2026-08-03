"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Testimonials"
          title="What clients say"
          subtitle="Feedback from teams I've collaborated with"
        />
        <h2 id="testimonials-heading" className="sr-only">
          Client testimonials
        </h2>

        <motion.ul
          className="section-header-spacing grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {testimonials.map((item) => (
            <motion.li
              key={item.author}
              variants={fadeInUp}
              className="glass-card glass-card-hover flex h-full flex-col p-8"
            >
              <p className="text-body flex-1 text-sm italic sm:text-base">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-border-subtle pt-4">
                <p className="font-semibold text-foreground">{item.author}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
