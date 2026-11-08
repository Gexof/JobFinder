import { SquareText } from "lucide-react";

function JobDescription({ job }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#222631] p-6 text-white">
      {/* Section Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-indigo-400">
          <SquareText size={24} />
        </span>

        <h2 className="text-lg font-semibold">Job Description</h2>
      </div>

      {/* Description */}

      <p className="text-sm leading-7 text-gray-300">{job.description}</p>
    </section>
  );
}

export default JobDescription;
