export type PortfolioProject = {
  id: string;
  name: string;
  overview: string;
  description: string;
  tech: string[];
  achievements: string[];
  github: string;
  demo: string;
  image: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    overview: "Personal brand site with auth, dashboard, and digital products shop.",
    description:
      "A production-grade portfolio built with Next.js App Router, Supabase auth, and a modular design system.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    achievements: [
      "Implemented protected routes and session-aware navigation",
      "Achieved responsive layouts across mobile, tablet, and desktop",
      "Structured codebase for SEO, accessibility, and future payments",
    ],
    github: "#",
    demo: "#",
    image: "/projects/portfolio.svg",
  },
  {
    id: "ecommerce-app",
    name: "E-commerce App",
    overview: "Modern storefront with catalog, cart, and checkout UX.",
    description:
      "Full-stack e-commerce experience focused on performance, accessibility, and conversion-oriented UI patterns.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    achievements: [
      "Reduced page load with optimized images and code splitting",
      "Built reusable product card and checkout components",
      "Improved mobile checkout completion with clearer UX flows",
    ],
    github: "#",
    demo: "#",
    image: "/projects/ecommerce.svg",
  },
  {
    id: "dashboard-ui",
    name: "Analytics Dashboard",
    overview: "Admin dashboard with charts, tables, and role-based views.",
    description:
      "Data-heavy dashboard UI with glassmorphism, dark mode support, and scalable component architecture.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    achievements: [
      "Designed consistent data visualization and filter patterns",
      "Delivered accessible keyboard navigation across widgets",
      "Created reusable layout shell for future backend integration",
    ],
    github: "#",
    demo: "#",
    image: "/projects/dashboard.svg",
  },
];
