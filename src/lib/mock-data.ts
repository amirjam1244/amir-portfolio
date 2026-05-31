export type PurchasedItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  date: string;
  status: "completed" | "in-progress" | "pending";
};

export const mockPurchases: PurchasedItem[] = [
  {
    id: "1",
    name: "Landing Page Design",
    description: "Conversion-focused landing page with modern UI and animations.",
    price: "$350",
    date: "Mar 12, 2026",
    status: "completed",
  },
  {
    id: "2",
    name: "Website Development",
    description: "Full Next.js website with responsive layout and SEO setup.",
    price: "$1,200",
    date: "Apr 2, 2026",
    status: "in-progress",
  },
  {
    id: "3",
    name: "Bug Fixing & Optimization",
    description: "Performance audit and critical bug fixes for existing app.",
    price: "$180",
    date: "Apr 18, 2026",
    status: "pending",
  },
];

export function getDisplayName(email: string): string {
  const localPart = email.split("@")[0] ?? "User";
  const cleaned = localPart.replace(/[._-]+/g, " ").trim();

  return cleaned
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
