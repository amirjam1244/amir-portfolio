"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthProvider";

const navLinks = [
  { href: "/#projects", label: "Projects", section: "projects" },
  { href: "/#about", label: "About", section: "about" },
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
          ? "border-b border-white/[0.08] bg-[#08080d]/70 shadow-[0_8px_32px_rgb(0_0_0/0.3)] backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <motion.div whileHover={{ opacity: 0.8 }} transition={{ duration: 0.2 }}>
          <Link href="/" className="text-nav-brand">
            Amirhossein
          </Link>
        </motion.div>

        <ul className="flex items-center gap-1 sm:gap-2">
          {!isHome && (
            <li>
              <Link
                href="/"
                className="group relative px-3 py-2 text-zinc-400 transition-colors hover:text-zinc-200 sm:px-4"
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
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span className="text-nav-link">{link.label}</span>
                  <span
                    className={`absolute inset-x-3 bottom-1 h-px origin-left rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 transition-transform duration-300 sm:inset-x-4 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}

          {!loading &&
            (user ? (
              <>
                <li>
                  <Link
                    href="/dashboard"
                    className={`group relative px-3 py-2 sm:px-4 ${
                      pathname === "/dashboard"
                        ? "text-white"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <span className="text-nav-link">Dashboard</span>
                    <span
                      className={`absolute inset-x-3 bottom-1 h-px origin-left rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 transition-transform duration-300 sm:inset-x-4 ${
                        pathname === "/dashboard"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-nav-link px-3 py-2 text-zinc-400 transition-colors hover:text-zinc-200 sm:px-4"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/login"
                  className={`group relative px-3 py-2 sm:px-4 ${
                    pathname === "/login" || pathname === "/register"
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span className="text-nav-link">Login</span>
                  <span
                    className={`absolute inset-x-3 bottom-1 h-px origin-left rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 transition-transform duration-300 sm:inset-x-4 ${
                      pathname === "/login" || pathname === "/register"
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
