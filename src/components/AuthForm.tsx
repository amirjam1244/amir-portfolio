"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type AuthFormProps = {
  mode: "login" | "register";
  onSubmit: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; error?: string; message?: string; needsEmailConfirmation?: boolean }>;
  submitLabel: string;
  alternateHref: string;
  alternateText: string;
  alternateLinkText: string;
};

export default function AuthForm({
  mode,
  onSubmit,
  submitLabel,
  alternateHref,
  alternateText,
  alternateLinkText,
}: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setMessage("");
    setSubmitting(true);

    const result = await onSubmit(email, password);

    if (!result.success) {
      setError(result.error ?? "Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    if (result.message) {
      setMessage(result.message);
    }

    setSubmitting(false);
  }

  return (
    <div className="glass-card w-full max-w-md p-8 sm:p-10">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400/80">
          {mode === "login" ? "Welcome back" : "Get started"}
        </p>
        <h1 className="text-section-title mt-3 text-3xl sm:text-4xl">
          {mode === "login" ? "Login" : "Register"}
        </h1>
        <p className="text-body mt-3 text-sm sm:text-base">
          {mode === "login"
            ? "Sign in to access your dashboard."
            : "Create an account to get started."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="text-label mb-2 block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="input-glass"
          />
        </div>

        <div>
          <label htmlFor="password" className="text-label mb-2 block">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete={
              mode === "login" ? "current-password" : "new-password"
            }
            minLength={mode === "register" ? 6 : undefined}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={mode === "register" ? "At least 6 characters" : "••••••••"}
            className="input-glass"
          />
        </div>

        {message && (
          <p className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            {message}
          </p>
        )}

        {error && (
          <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Please wait..." : submitLabel}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-500">
        {alternateText}{" "}
        <Link
          href={alternateHref}
          className="font-medium text-indigo-400 transition-colors hover:text-indigo-300"
        >
          {alternateLinkText}
        </Link>
      </p>
    </div>
  );
}
