import { BriefcaseBusiness, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

function JobNotFound() {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1B1E26] p-8 text-center">
      <div className="mb-5 rounded-2xl bg-indigo-500/15 p-4 text-indigo-400">
        <BriefcaseBusiness size={36} />
      </div>

      <h2 className="mb-2 text-2xl font-bold text-gray-100">Job Not Found</h2>

      <p className="mb-6 max-w-md text-sm leading-6 text-gray-400">
        Sorry, we couldn't find the job you're looking for. It may have been
        removed or the link might be incorrect.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
      >
        <ArrowLeft size={16} />
        Back to Jobs
      </Link>
    </div>
  );
}

export default JobNotFound;
