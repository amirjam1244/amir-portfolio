"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FormEvent, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { hoverScale } from "@/lib/motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
};

const contactOptions = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    description: "Best for detailed project briefs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Telegram",
    value: "@yourusername",
    href: "https://t.me/yourusername",
    description: "Quick questions & updates",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+1 234 567 8900",
    href: "https://wa.me/1234567890",
    description: "Fast replies on mobile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

const highlights = [
  "Free initial consultation",
  "Clear timelines & pricing",
  "Flexible for startups & businesses",
];

function ContactOption({
  option,
}: {
  option: (typeof contactOptions)[number];
}) {
  return (
    <motion.div {...hoverScale}>
      <Link
        href={option.href}
        target={option.href.startsWith("http") ? "_blank" : undefined}
        rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.06]"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-indigo-500/10 text-indigo-300 transition-colors group-hover:border-indigo-400/30 group-hover:text-indigo-200">
          {option.icon}
        </div>
        <div className="min-w-0 text-left">
          <p className="text-sm font-semibold text-white">{option.label}</p>
          <p className="truncate text-sm text-zinc-400">{option.value}</p>
          <p className="mt-0.5 text-xs text-zinc-600">{option.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setFormData(initialFormData);
  }

  return (
    <section id="contact" className="section-padding pb-40">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400/80">
            Get In Touch
          </p>
          <h2 className="text-section-title mt-4">Hire Me</h2>
          <p className="text-section-subtitle">
            Have a project in mind? Tell me about it and let&apos;s build
            something great together.
          </p>
        </FadeIn>

        <div className="section-header-spacing grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <FadeIn className="flex flex-col">
            <div className="glass-card p-8 sm:p-10">
              <h3 className="text-card-title text-left">
                Let&apos;s start a conversation
              </h3>
              <p className="text-body mt-4 text-left text-sm sm:text-base">
                Whether you need a full website, a landing page, or help fixing
                an existing project — reach out and I&apos;ll get back to you
                with next steps.
              </p>

              <ul className="mt-8 space-y-3 text-left">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-3 w-3"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-3">
                <p className="text-left text-sm font-medium text-zinc-500">
                  Prefer a direct line?
                </p>
                {contactOptions.map((option) => (
                  <ContactOption key={option.label} option={option} />
                ))}
              </div>

              <p className="mt-8 flex items-center gap-2 text-left text-sm text-zinc-500">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px_rgb(52_211_153/0.5)]" />
                I usually respond within 24 hours
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass-card flex h-full flex-col p-8 sm:p-10"
            >
              <div className="mb-8 text-left">
                <h3 className="text-xl font-semibold text-white">
                  Send a project inquiry
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Share a few details and I&apos;ll reply with availability and
                  a quote.
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
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="input-glass"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-label mb-2 block">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="input-glass"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-label mb-2 block">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What do you need built? Include timeline, budget range, and any links to references..."
                    className="input-glass resize-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                {...hoverScale}
                className="btn-primary mt-8 w-full"
              >
                Send Project Inquiry
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-center text-sm text-emerald-400/90"
                >
                  Thanks for reaching out! I&apos;ll review your inquiry and
                  respond within 24 hours.
                </motion.p>
              )}

              <p className="mt-4 text-center text-xs text-zinc-600">
                No spam. Your information stays private.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
