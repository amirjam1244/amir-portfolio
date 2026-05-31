import Link from "next/link";

export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#08080d] text-white">
      <div className="ambient-glow" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="border-b border-white/[0.06] px-6 py-5 sm:px-8">
          <Link href="/" className="text-nav-brand">
            Amirhossein
          </Link>
        </header>

        <main className="flex flex-1 items-center justify-center px-6 py-16 sm:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
