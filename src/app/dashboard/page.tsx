"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/dashboard/StatCard";
import { useAuth } from "@/context/AuthProvider";
import { fetchProducts } from "@/lib/database";
import { getDashboardStats, getDisplayName } from "@/lib/dashboard";

export default function DashboardPage() {
  const { user } = useAuth();
  const [productsCount, setProductsCount] = useState(0);
  const stats = getDashboardStats(productsCount);
  const displayName = user ? getDisplayName(user.email) : "there";

  useEffect(() => {
    fetchProducts().then((result) => {
      if (!result.error) {
        setProductsCount(result.data.length);
      }
    });
  }, []);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 sm:mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400/80">
          Overview
        </p>
        <h1 className="text-section-title mt-3 text-3xl sm:text-4xl">
          Welcome back, {displayName}
        </h1>
        <p className="text-body mt-3 text-sm sm:text-base">
          Here&apos;s a snapshot of your account. Signed in as{" "}
          <span className="font-medium text-white">{user?.email}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <StatCard
          label="Projects"
          value={stats.projectsCount}
          hint="Active portfolio projects"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
          }
        />

        <StatCard
          label="Products"
          value={stats.productsCount}
          hint="Available digital products"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          }
        />

        <StatCard
          label="Account status"
          value={stats.accountStatus}
          hint="Your account is in good standing"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          }
        />
      </div>

      <div className="glass-card mt-8 p-6 sm:mt-10 sm:p-8">
        <h2 className="text-card-title text-xl">Quick actions</h2>
        <p className="text-body mt-2 text-sm">
          Manage your work from the sidebar. These sections will connect to your
          backend when ready.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { label: "View projects", href: "/dashboard/projects" },
            { label: "Browse products", href: "/products" },
            { label: "Account settings", href: "/dashboard/settings" },
          ].map((action) => (
            <a
              key={action.href}
              href={action.href}
              className="glass-card-hover rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm font-medium text-zinc-300 transition-all hover:text-white"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
