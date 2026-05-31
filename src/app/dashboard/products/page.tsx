import Link from "next/link";

export default function DashboardProductsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400/80">
        Purchases
      </p>
      <h1 className="text-section-title mt-3 text-3xl sm:text-4xl">
        Your purchases
      </h1>
      <p className="text-body mt-3 text-sm sm:text-base">
        Purchased products will appear here once payments are connected.
      </p>

      <div className="glass-card mt-8 p-8 sm:p-10">
        <p className="text-body text-sm sm:text-base">
          No purchases yet. Browse the shop to explore available templates.
        </p>
        <Link href="/products" className="btn-primary mt-6 inline-block">
          Visit shop
        </Link>
      </div>
    </div>
  );
}
