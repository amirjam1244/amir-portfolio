export const siteConfig = {
  name: "Amirhossein Jamshidi",
  role: "Senior Frontend Developer",
  tagline: "React · Next.js · TypeScript · Performance",
  description:
    "Senior Frontend Developer building fast, accessible, and scalable web applications with React and Next.js.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",
  email: "hello@example.com",
  resumePath: "/resume.pdf",
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const stats = [
  { label: "Years of experience", value: "3+" },
  { label: "Projects completed", value: "15+" },
  { label: "Technologies mastered", value: "12+" },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Amirhossein delivered a polished Next.js product on time with excellent attention to detail and performance.",
    author: "Product Manager",
    role: "SaaS Startup",
  },
  {
    quote:
      "Clear communication, clean code, and a strong eye for UI. Would hire again for frontend work.",
    author: "Founder",
    role: "E-commerce Brand",
  },
  {
    quote:
      "Transformed our landing page into a fast, conversion-focused experience. Great collaborator.",
    author: "Marketing Lead",
    role: "Agency Client",
  },
];
