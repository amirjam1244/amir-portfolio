"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  defaultTransition,
  fadeInUp,
  hoverScale,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description:
      "A modern personal portfolio built with Next.js, featuring a clean dark theme and responsive layout.",
    tech: ["React", "Next.js", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    name: "E-commerce App",
    description:
      "Full-stack online store with product listings, cart functionality, and a streamlined checkout flow.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    name: "Dashboard UI",
    description:
      "Analytics dashboard with interactive charts, data tables, and a polished admin interface.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeInUp}
      transition={defaultTransition}
      className="glass-card glass-card-hover group flex h-full flex-col p-8"
    >
      <div className="mb-5 h-px w-12 rounded-full bg-gradient-to-r from-indigo-400/80 to-violet-400/40 transition-all duration-300 group-hover:w-16" />

      <h3 className="text-card-title">{project.name}</h3>

      <p className="text-body mt-4 flex-1 text-sm sm:text-base">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li key={item} className="tag-pill">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.06] pt-6">
        <motion.div {...hoverScale} className="inline-block">
          <Link href={project.github} className="btn-ghost">
            GitHub
          </Link>
        </motion.div>
        <motion.div {...hoverScale} className="inline-block">
          <Link href={project.demo} className="btn-accent">
            Live Demo
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400/80">
            Portfolio
          </p>
          <h2 className="text-section-title mt-4">Projects</h2>
          <p className="text-section-subtitle">
            Some things I&apos;ve built
          </p>
        </FadeIn>

        <motion.div
          className="section-header-spacing grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
