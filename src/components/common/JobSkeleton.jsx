function JobSkeleton() {
  return (
    <article className="animate-pulse rounded-xl border border-white/10 bg-[#222631] p-5">
      {/* Header */}
      <header className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {/* Company Logo */}
          <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-700/70" />

          {/* Job Details */}
          <div className="flex-1 space-y-3 pt-1">
            <div className="h-4 w-36 rounded bg-gray-700/70" />
            <div className="h-3 w-24 rounded bg-gray-700/50" />

            <div className="flex gap-3 pt-1">
              <div className="h-5 w-20 rounded bg-gray-700/50" />
              <div className="h-5 w-24 rounded-full bg-gray-700/50" />
            </div>
          </div>
        </div>

        {/* Bookmark */}
        <div className="h-9 w-9 shrink-0 rounded-lg bg-gray-700/50" />
      </header>

      {/* Description */}
      <div className="mb-5 space-y-2">
        <div className="h-3 w-full rounded bg-gray-700/50" />
        <div className="h-3 w-full rounded bg-gray-700/50" />
        <div className="h-3 w-2/3 rounded bg-gray-700/50" />
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between border-t border-white/10 pt-4">
        <div className="h-3 w-24 rounded bg-gray-700/50" />
        <div className="h-9 w-28 rounded-lg bg-gray-700/70" />
      </footer>
    </article>
  );
}

export default JobSkeleton;
