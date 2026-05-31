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
  primary: "btn-primary",
  secondary: "btn-secondary",
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
