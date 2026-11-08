function JobDetailsSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Header Skeleton */}
      <div className="rounded-2xl border border-white/10 bg-[#222631] p-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div className="flex gap-4">
            <div className="h-16 w-16 shrink-0 rounded-xl bg-gray-700/70" />

            <div className="flex-1 space-y-3 pt-1">
              <div className="h-5 w-48 rounded bg-gray-700/70" />
              <div className="h-4 w-32 rounded bg-gray-700/50" />
              <div className="h-3 w-40 rounded bg-gray-700/50" />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="h-10 w-24 rounded-lg bg-gray-700/50" />
            <div className="h-10 w-28 rounded-lg bg-gray-700/70" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Description */}
          <div className="rounded-2xl border border-white/10 bg-[#222631] p-6">
            <div className="mb-5 h-5 w-40 rounded bg-gray-700/70" />

            <div className="space-y-3">
              <div className="h-3 w-full rounded bg-gray-700/50" />
              <div className="h-3 w-full rounded bg-gray-700/50" />
              <div className="h-3 w-5/6 rounded bg-gray-700/50" />
              <div className="h-3 w-2/3 rounded bg-gray-700/50" />
            </div>
          </div>

          {/* Responsibilities */}
          <div className="rounded-2xl border border-white/10 bg-[#222631] p-6">
            <div className="mb-5 h-5 w-48 rounded bg-gray-700/70" />

            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gray-700/70" />
                  <div className="h-3 flex-1 rounded bg-gray-700/50" />
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="rounded-2xl border border-white/10 bg-[#222631] p-6">
            <div className="mb-5 h-5 w-40 rounded bg-gray-700/70" />

            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gray-700/70" />
                  <div className="h-3 flex-1 rounded bg-gray-700/50" />
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="rounded-2xl border border-white/10 bg-[#222631] p-6">
            <div className="mb-5 h-5 w-24 rounded bg-gray-700/70" />

            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="h-8 w-20 rounded-full bg-gray-700/50"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Company Info */}
        <aside>
          <div className="rounded-2xl border border-white/10 bg-[#222631] p-6">
            <div className="mb-5 h-5 w-36 rounded bg-gray-700/70" />

            <div className="space-y-5">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="h-3 w-24 rounded bg-gray-700/50" />
                  <div className="h-4 w-32 rounded bg-gray-700/70" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default JobDetailsSkeleton;
