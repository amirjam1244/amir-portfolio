"use client";

import { motion } from "framer-motion";
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
    <section id="contact" className="section-padding">
      <FadeIn className="mx-auto max-w-xl text-center">
        <h2 className="text-section-title">Contact Me</h2>
        <p className="text-section-subtitle">Let&apos;s work together</p>

        <form onSubmit={handleSubmit} className="mt-14 space-y-7 text-left">
          <div>
            <label htmlFor="name" className="text-label mb-2.5 block">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-600 transition focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-label mb-2.5 block">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-600 transition focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-label mb-2.5 block"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-600 transition focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
          </div>

          <motion.button
            type="submit"
            {...hoverScale}
            className="text-button w-full rounded-lg bg-white px-8 py-3.5 text-black transition-colors hover:bg-zinc-200"
          >
            Send Message
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-body text-center text-sm"
            >
              Thanks for reaching out! I&apos;ll get back to you soon.
            </motion.p>
          )}
        </form>
      </FadeIn>
    </section>
  );
}
