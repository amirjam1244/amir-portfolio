"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-zinc-800/80 bg-black/90 backdrop-blur-xl"
          : "border-zinc-900/80 bg-black/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <motion.div whileHover={{ opacity: 0.7 }} transition={{ duration: 0.2 }}>
          <Link
            href="/"
            className="text-nav-brand"
          >
            Amirhossein
          </Link>
        </motion.div>

        <ul className="flex items-center gap-6 sm:gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href={link.href}
                  className="text-nav-link transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
