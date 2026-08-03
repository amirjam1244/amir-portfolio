import Navbar from "@/components/Navbar";
import ProductsGrid from "@/components/ProductsGrid";

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="ambient-glow" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar />

        <section className="section-padding pb-40 pt-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400/80">
                Store
              </p>
              <h1 className="text-section-title mt-4">Digital Products</h1>
              <p className="text-section-subtitle">
                Premium templates and starter kits to launch faster
              </p>
            </div>

            <ProductsGrid className="section-header-spacing" />
          </div>
        </section>
      </div>
    </main>
  );
}
