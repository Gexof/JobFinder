import { MapPin, Bookmark, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

function Job({ job }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#222631] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-500/40">
      {/* Header */}
      <header className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {/* Company Logo */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-sm font-bold text-indigo-400">
            {job.company.logo}
          </div>

          {/* Job Details */}
          <div>
            <h3 className="font-semibold text-gray-100">{job.title}</h3>

            <p className="mt-1 text-sm text-gray-400">{job.company.name}</p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {job.location}
              </span>

              <span>{job.workplaceType}</span>

              <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-indigo-400">
                {job.employmentType}
              </span>
            </div>
          </div>
        </div>

        {/* Bookmark */}
        <button className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-indigo-400">
          <Bookmark size={19} />
        </button>
      </header>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-gray-400">
        {job.description}
      </p>

      {/* Footer */}
      <footer className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-xs text-gray-500">{job.postedAt}</span>

        <Link
          to={`/jobs/${job.id}`}
          className="flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
        >
          View Details
          <ArrowUpRight size={16} />
        </Link>
      </footer>
    </article>
  );
}

export default Job;
