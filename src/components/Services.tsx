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

type Service = {
  title: string;
  subtitle?: string;
  description: string;
  priceRange: string;
  icon: React.ReactNode;
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Website Development",
    subtitle: "Next.js / React",
    description:
      "Custom, high-performance websites built with Next.js and React — from concept to deployment, tailored to your brand and goals.",
    priceRange: "$500 - $2,000",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    featured: true,
  },
  {
    title: "Landing Page Design",
    description:
      "Conversion-focused landing pages with modern UI, smooth animations, and layouts designed to turn visitors into customers.",
    priceRange: "$100 - $500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
  },
  {
    title: "Bug Fixing & Optimization",
    description:
      "Diagnose and resolve bugs, improve load times, and optimize your existing codebase for better performance and reliability.",
    priceRange: "$50 - $300",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      variants={fadeInUp}
      transition={defaultTransition}
      className={`glass-card glass-card-hover group relative flex h-full flex-col p-8 ${
        service.featured
          ? "border-indigo-400/20 shadow-[0_0_40px_rgb(99_102_241/0.08)]"
          : ""
      }`}
    >
      {service.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300 backdrop-blur-sm">
          Most Popular
        </span>
      )}

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-indigo-500/20 to-violet-500/10 text-indigo-300 transition-all duration-300 group-hover:border-indigo-400/30 group-hover:text-indigo-200 group-hover:shadow-[0_0_20px_rgb(129_140_248/0.15)]">
        {service.icon}
      </div>

      <h3 className="text-card-title">{service.title}</h3>
      {service.subtitle && (
        <p className="mt-1 text-sm font-medium text-indigo-400/80">
          {service.subtitle}
        </p>
      )}

      <p className="text-body mt-4 flex-1 text-sm sm:text-base">
        {service.description}
      </p>

      <div className="mt-8 border-t border-white/[0.06] pt-6">
        <p className="text-label mb-1">Starting from</p>
        <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {service.priceRange}
        </p>
        <p className="mt-1 text-xs text-zinc-600">Final price depends on scope</p>
      </div>

      <motion.div {...hoverScale} className="mt-6 inline-block w-full">
        <Link href="#contact" className="btn-primary w-full text-center">
          Hire Me
        </Link>
      </motion.div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400/80">
            Services
          </p>
          <h2 className="text-section-title mt-4">Services</h2>
          <p className="text-section-subtitle">What I can do for you</p>
        </FadeIn>

        <motion.div
          className="section-header-spacing grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
