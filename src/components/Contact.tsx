"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FormEvent, useState } from "react";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { hoverScale } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import {
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/validateContact";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const contactOptions = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Best for detailed project briefs",
  },
];

const highlights = [
  "Free initial consultation",
  "Clear timelines & pricing",
  "Flexible for startups & businesses",
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validation = validateContactForm(formData);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(initialFormData);
  }

  return (
    <section id="contact" className="section-padding pb-40" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build something great"
          subtitle="Tell me about your project and I'll reply within 24 hours"
        />
        <h2 id="contact-heading" className="sr-only">
          Contact
        </h2>

        <div className="section-header-spacing grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn className="flex flex-col">
            <div className="glass-card p-8 sm:p-10">
              <h3 className="text-card-title text-left">Work with me</h3>
              <p className="text-body mt-4 text-left text-sm sm:text-base">
                I partner with founders, agencies, and product teams to ship
                polished frontend experiences with React and Next.js.
              </p>

              <ul className="mt-8 space-y-3 text-left">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-3">
                {contactOptions.map((option) => (
                  <Link
                    key={option.label}
                    href={option.href}
                    className="group flex items-center gap-4 rounded-xl border border-border-subtle bg-surface-glass p-4 transition-colors hover:border-indigo-400/30"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">{option.label}</p>
                      <p className="text-sm text-muted">{option.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass-card flex h-full flex-col p-8 sm:p-10"
              noValidate
              aria-label="Contact form"
            >
              <div className="mb-8 text-left">
                <h3 className="text-xl font-semibold text-foreground">
                  Send a project inquiry
                </h3>
                <p className="mt-2 text-sm text-muted">
                  All fields are required. I&apos;ll follow up with next steps and availability.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-label mb-2 block">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`input-glass ${errors.name ? "input-error" : ""}`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-label mb-2 block">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`input-glass ${errors.email ? "input-error" : ""}`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-label mb-2 block">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`input-glass resize-none ${errors.message ? "input-error" : ""}`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-500" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <motion.button type="submit" {...hoverScale} className="btn-primary mt-8 w-full">
                Send Project Inquiry
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-sm text-emerald-600 dark:text-emerald-400/90"
                  role="status"
                >
                  Thanks for reaching out! I&apos;ll review your inquiry and respond within 24 hours.
                </motion.p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
