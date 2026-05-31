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
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 p-7 transition-colors duration-300 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
    >
      <h3 className="text-card-title">{project.name}</h3>

      <p className="text-body mt-4 flex-1 text-sm sm:text-base">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <motion.div {...hoverScale} className="inline-block">
          <Link
            href={project.github}
            className="text-button rounded-lg border border-zinc-700 px-4 py-2.5 text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            GitHub
          </Link>
        </motion.div>
        <motion.div {...hoverScale} className="inline-block">
          <Link
            href={project.demo}
            className="text-button rounded-lg bg-white px-4 py-2.5 text-black transition-colors hover:bg-zinc-200"
          >
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
          <h2 className="text-section-title">Projects</h2>
          <p className="text-section-subtitle">
            Some things I&apos;ve built
          </p>
        </FadeIn>

        <motion.div
          className="section-header-spacing grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
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
