import { Brain } from "lucide-react";

const skills = ["React", "TypeScript", "Tailwind CSS", "Next.js"];

function JobSkills() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#222631] p-6 text-white">
      {/* Section Header */}
      <div className="mb-5 flex items-center gap-3">
        <span className="text-indigo-400">
          <Brain size={24} />
        </span>

        <h2 className="text-lg font-semibold">Skills</h2>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-[#1B1E26] px-4 py-2 text-sm text-gray-300 transition-colors hover:border-indigo-500/50 hover:text-indigo-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default JobSkills;
