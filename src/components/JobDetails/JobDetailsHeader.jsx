import {
  MapPin,
  Bookmark,
  BriefcaseBusiness,
  ChartNoAxesColumn,
  ExternalLink,
} from "lucide-react";

function JobDetailsHeader() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#222631] p-6">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
        {/* Job Details */}
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-lg font-bold text-indigo-400">
            MS
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-100 md:text-3xl">
              Frontend Developer
            </h1>

            <p className="mt-2 text-base font-medium text-gray-300">
              Microsoft
            </p>

            {/* Job Metadata */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-sky-400" />
                Cairo, Egypt
              </span>

              <span className="flex items-center gap-2">
                <BriefcaseBusiness size={18} className="text-sky-400" />
                Full Time
              </span>

              <span className="flex items-center gap-2">
                <ChartNoAxesColumn size={18} className="text-sky-400" />
                Mid Level
              </span>
            </div>
          </div>
        </div>

        {/* Job Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:border-indigo-400 hover:text-indigo-400">
            <Bookmark size={17} />
            Save Job
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-600">
            <ExternalLink size={17} />
            Apply Now
          </button>
        </div>
      </div>

      {/* Skills */}
      <div className="relative mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-5">
        {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-[#1B1E26] px-4 py-2 text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default JobDetailsHeader;
