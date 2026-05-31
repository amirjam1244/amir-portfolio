"use client";

type StatCardProps = {
  label: string;
  value: string | number;
  hint?: string;
  icon: React.ReactNode;
};

export default function StatCard({ label, value, hint, icon }: StatCardProps) {
  return (
    <article className="glass-card glass-card-hover group p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-label">{label}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white">
            {value}
          </p>
          {hint && (
            <p className="mt-2 text-sm text-zinc-500">{hint}</p>
          )}
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-indigo-500/10 text-indigo-300 transition-colors group-hover:border-indigo-400/30 group-hover:text-indigo-200">
          {icon}
        </div>
      </div>
    </article>
  );
}
