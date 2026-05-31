"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { hoverScale } from "@/lib/motion";

type AnimatedButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const variants = {
  primary:
    "text-button rounded-lg bg-white px-8 py-3.5 text-black transition-colors hover:bg-zinc-200",
  secondary:
    "text-button rounded-lg border border-zinc-700 px-8 py-3.5 text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900",
};

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) {
  return (
    <motion.div {...hoverScale} className="inline-block">
      <Link href={href} className={`${variants[variant]} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}
