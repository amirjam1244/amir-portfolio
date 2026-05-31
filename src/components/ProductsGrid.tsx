"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  defaultTransition,
  fadeInUp,
  hoverScale,
  staggerContainer,
} from "@/lib/motion";
import { fetchProducts } from "@/lib/database";
import { initiatePurchase } from "@/lib/payments";
import { formatPrice, type Product } from "@/lib/products";

function ProductCardSkeleton() {
  return (
    <div className="glass-card flex h-full flex-col p-8 animate-pulse">
      <div className="mb-5 h-px w-12 rounded-full bg-white/10" />
      <div className="h-7 w-3/4 rounded-lg bg-white/10" />
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-5/6 rounded bg-white/10" />
      </div>
      <div className="mt-auto border-t border-white/[0.06] pt-6">
        <div className="h-4 w-24 rounded bg-white/10" />
        <div className="mt-3 h-9 w-20 rounded bg-white/10" />
      </div>
      <div className="mt-6 h-11 w-full rounded-xl bg-white/10" />
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [buying, setBuying] = useState(false);

  async function handleBuy() {
    setBuying(true);
    try {
      await initiatePurchase(product);
    } finally {
      setBuying(false);
    }
  }

  return (
    <motion.article
      variants={fadeInUp}
      transition={defaultTransition}
      className="glass-card glass-card-hover group relative flex h-full flex-col p-8"
    >
      <div className="mb-5 h-px w-12 rounded-full bg-gradient-to-r from-indigo-400/80 to-violet-400/40 transition-all duration-300 group-hover:w-16" />

      <h3 className="text-card-title">{product.name}</h3>

      <p className="text-body mt-4 flex-1 text-sm sm:text-base">
        {product.description}
      </p>

      <div className="mt-8 border-t border-white/[0.06] pt-6">
        <p className="text-label mb-1">One-time purchase</p>
        <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {formatPrice(product.price)}
        </p>
      </div>

      <motion.div {...hoverScale} className="mt-6">
        <button
          type="button"
          onClick={handleBuy}
          disabled={buying}
          className="btn-primary w-full text-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {buying ? "Processing..." : "Buy Now"}
        </button>
      </motion.div>
    </motion.article>
  );
}

type ProductsGridProps = {
  className?: string;
};

export default function ProductsGrid({ className = "" }: ProductsGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  async function loadProducts() {
    setLoading(true);
    setError(null);

    const result = await fetchProducts();

    setProducts(result.data);
    setError(result.error);
    setLoading(false);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadProducts();
  }, []);

  if (loading) {
    return (
      <div
        className={`grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 ${className}`}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className={`glass-card p-8 text-center sm:p-10 ${className}`}>
        <p className="text-sm font-semibold uppercase tracking-widest text-red-400/90">
          Unable to load products
        </p>
        <p className="text-body mt-4 text-sm sm:text-base">{error}</p>
        {error.includes("001_products.sql") && (
          <p className="mt-3 text-xs text-zinc-500">
            Supabase Dashboard → SQL Editor → New query → paste the migration
            file from your project folder → Run.
          </p>
        )}
        <button
          type="button"
          onClick={() => {
            void loadProducts();
          }}
          className="btn-secondary mt-6"
        >
          Try again
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={`glass-card p-8 text-center sm:p-10 ${className}`}>
        <p className="text-card-title">No products yet</p>
        <p className="text-body mt-3 text-sm sm:text-base">
          Add rows to the <code className="text-zinc-300">products</code> table
          in Supabase to populate the shop.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className={`grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 ${className}`}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}
