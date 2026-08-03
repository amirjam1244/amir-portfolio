import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle px-6 py-12 sm:px-8" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <li>
              <Link href="/#projects" className="text-muted hover:text-foreground">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-muted hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-muted hover:text-foreground">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
