"use client";

import { useAuth } from "@/context/AuthProvider";
import { getDisplayName } from "@/lib/dashboard";

export default function DashboardSettingsPage() {
  const { user } = useAuth();
  const displayName = user ? getDisplayName(user.email) : "";

  return (
    <div className="mx-auto max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400/80">
        Settings
      </p>
      <h1 className="text-section-title mt-3 text-3xl sm:text-4xl">Account settings</h1>
      <p className="text-body mt-3 text-sm sm:text-base">
        Manage your profile and preferences.
      </p>

      <div className="glass-card mt-8 space-y-6 p-8 sm:p-10">
        <div>
          <label className="text-label mb-2 block">Display name</label>
          <input
            type="text"
            readOnly
            value={displayName}
            className="input-glass cursor-not-allowed opacity-70"
          />
        </div>
        <div>
          <label className="text-label mb-2 block">Email</label>
          <input
            type="email"
            readOnly
            value={user?.email ?? ""}
            className="input-glass cursor-not-allowed opacity-70"
          />
        </div>
        <p className="text-xs text-zinc-600">
          Profile editing will be enabled when a backend is connected.
        </p>
      </div>
    </div>
  );
}
