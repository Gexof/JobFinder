import Job from "./Job";

function JobList() {
  return (
    <section className="space-y-5">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-gray-400">
          Showing <span className="font-semibold text-gray-100">4</span> jobs
        </p>

        <div className="flex items-center gap-3">
          <label htmlFor="sort-jobs" className="text-sm text-gray-400">
            Sort by:
          </label>

          <select
            name="sort"
            id="sort-jobs"
            defaultValue="recent"
            className="rounded-lg border border-white/10 bg-[#1B1E26] px-3 py-2 text-sm text-gray-200 outline-none focus:border-indigo-500"
          >
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
    </section>
  );
}

export default JobList;
