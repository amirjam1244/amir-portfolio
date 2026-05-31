export default function DashboardProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400/80">
        Projects
      </p>
      <h1 className="text-section-title mt-3 text-3xl sm:text-4xl">Your projects</h1>
      <p className="text-body mt-3 text-sm sm:text-base">
        Project management will appear here once connected to a backend.
      </p>

      <div className="glass-card mt-8 p-8 sm:p-10">
        <p className="text-body text-sm sm:text-base">
          No project data loaded yet. This page is ready for API integration.
        </p>
      </div>
    </div>
  );
}
