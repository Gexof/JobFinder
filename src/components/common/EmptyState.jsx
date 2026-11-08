import { BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router";

function EmptyState() {
  return (
    <div className="flex min-h-87.5 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1B1E26] p-8 text-center">
      <div className="mb-5 rounded-2xl bg-indigo-500/15 p-4 text-indigo-400">
        <BriefcaseBusiness size={32} />
      </div>

      <h2 className="mb-2 text-xl font-semibold text-gray-100">
        No jobs found
      </h2>

      <p className="mb-6 max-w-md text-sm leading-6 text-gray-400">
        There are currently no job opportunities available. Please check back
        later.
      </p>

      <Link
        to="/"
        className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
      >
        Explore Jobs
      </Link>
    </div>
  );
}

export default EmptyState;
