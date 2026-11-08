import { Bookmark } from "lucide-react";
import { Link } from "react-router";

function SavedJobsList() {
  return (
    <section className="border-t border-white/10 pt-6 ">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-300">
          Your saved opportunities
        </p>

        <span className="rounded-full bg-slate-700 px-3 py-1.5 text-xs font-medium text-white">
          Jobs 0
        </span>
      </div>

      <div className="flex min-h-87.5 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1B1E26] p-8 text-center">
        <div className="mb-5 rounded-2xl bg-indigo-500/15 p-4 text-indigo-400">
          <Bookmark size={30} />
        </div>

        <h2 className="mb-2 text-xl font-semibold text-gray-100">
          No saved jobs yet
        </h2>

        <p className="mb-6 max-w-md text-sm leading-6 text-gray-400">
          Jobs you save will appear here so you can easily find them later.
        </p>

        <Link
          to="/"
          className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
        >
          Explore Jobs
        </Link>
      </div>
    </section>
  );
}

export default SavedJobsList;
