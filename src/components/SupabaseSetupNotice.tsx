export default function SupabaseSetupNotice({ message }: { message: string }) {
  return (
    <div className="glass-card w-full max-w-md p-8 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-400/90">
        Setup required
      </p>
      <h1 className="text-section-title mt-3 text-2xl sm:text-3xl">
        Supabase not configured
      </h1>
      <p className="text-body mt-4 text-sm sm:text-base">{message}</p>
      <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm text-zinc-400">
        <li>
          Create a project at{" "}
          <a
            href="https://supabase.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300"
          >
            supabase.com
          </a>
        </li>
        <li>
          Copy <code className="text-zinc-300">env.example</code> to{" "}
          <code className="text-zinc-300">.env.local</code>
        </li>
        <li>Paste your Project URL and anon key</li>
        <li>Restart the dev server</li>
      </ol>
    </div>
  );
}
