"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { portfolioProjects } from "@/lib/content/projects";
import {
  defaultTransition,
  fadeInUp,
  hoverScale,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

function ProjectCard({
  project,
}: {
  project: (typeof portfolioProjects)[number];
}) {
  return (
    <motion.article
      variants={fadeInUp}
      transition={defaultTransition}
      className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[5/3] w-full overflow-hidden border-b border-border-subtle bg-zinc-900/40">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4 h-px w-12 rounded-full bg-gradient-to-r from-indigo-400/80 to-violet-400/40 transition-all duration-300 group-hover:w-16" />

        <h3 className="text-card-title">{project.name}</h3>
        <p className="mt-2 text-sm font-medium text-indigo-500 dark:text-indigo-300/90">
          {project.overview}
        </p>

        <p className="text-body mt-4 flex-1 text-sm sm:text-base">
          {project.description}
        </p>

        <div className="mt-6">
          <p className="text-label mb-2">Key achievements</p>
          <ul className="space-y-2 text-sm text-muted">
            {project.achievements.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((item) => (
            <li key={item} className="tag-pill">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-border-subtle pt-6">
          <motion.div {...hoverScale} className="inline-block">
            <Link
              href={project.github}
              className="btn-ghost"
              aria-label={`View ${project.name} on GitHub`}
            >
              GitHub
            </Link>
          </motion.div>
          <motion.div {...hoverScale} className="inline-block">
            <Link
              href={project.demo}
              className="btn-accent"
              aria-label={`Open live demo for ${project.name}`}
            >
              Live Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected projects"
          subtitle="Case studies focused on performance, UX, and maintainable frontend architecture"
        />
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>

        <motion.div
          className="section-header-spacing grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
