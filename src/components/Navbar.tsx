"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { useAuth } from "@/context/AuthProvider";

const navLinks = [
  { href: "/#projects", label: "Projects", section: "projects" },
  { href: "/#stats", label: "Stats", section: "stats" },
  { href: "/#about", label: "About", section: "about" },
  { href: "/#testimonials", label: "Testimonials", section: "testimonials" },
  { href: "/#services", label: "Services", section: "services" },
  { href: "/products", label: "Products", section: "products" },
  { href: "/#contact", label: "Contact", section: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const isHome = pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = navLinks
      .filter((link) => link.href.startsWith("/#"))
      .map((link) => document.getElementById(link.section))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        } else if (window.scrollY < 300) {
          setActiveSection("home");
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  function handleLogout() {
    void logout().then(() => {
      router.push("/");
    });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "border-b border-border-subtle bg-background/80 shadow-lg backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 sm:px-8"
        aria-label="Main navigation"
      >
        <motion.div whileHover={{ opacity: 0.8 }} transition={{ duration: 0.2 }}>
          <Link href="/" className="text-nav-brand" aria-label="Home">
            Amirhossein
          </Link>
        </motion.div>

        <ul className="flex max-w-[48vw] items-center gap-1 overflow-x-auto sm:max-w-none lg:gap-2">
          {!isHome && (
            <li>
              <Link
                href="/"
                className="group relative px-3 py-2 text-muted transition-colors hover:text-foreground sm:px-4"
              >
                <span className="text-nav-link">Home</span>
              </Link>
            </li>
          )}

          {navLinks.map((link) => {
            const isHashLink = link.href.startsWith("/#");
            const isActive =
              (isHome && isHashLink && activeSection === link.section) ||
              (!isHashLink && pathname === link.href);

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`group relative px-3 py-2 sm:px-4 ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="text-nav-link">{link.label}</span>
                  <span
                    className={`absolute inset-x-3 bottom-1 h-px origin-left rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 transition-transform duration-300 sm:inset-x-4 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          {!loading &&
            (user ? (
              <>
                <Link
                  href="/dashboard"
                  className="hidden text-sm font-medium text-muted hover:text-foreground sm:inline"
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="hidden text-sm font-medium text-muted hover:text-foreground sm:inline"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="hidden text-sm font-medium text-muted hover:text-foreground sm:inline"
              >
                Login
              </Link>
            ))}

          <Link href="/#contact" className="btn-primary px-4 py-2 text-sm sm:px-5">
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  );
}
