import { CircleCheck, Star } from "lucide-react";

const requirements = [
  "Bachelor's degree in Computer Science or related field.",
  "2+ years of experience with React.",
  "Strong knowledge of TypeScript, HTML, and CSS.",
  "Experience with modern frontend tools (Vite, Webpack).",
];

function JobRequirements() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#222631] p-6 text-white">
      {/* Section Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-indigo-400">
          <Star size={24} />
        </span>

        <h2 className="text-lg font-semibold">Key Requirements</h2>
      </div>

      {/* Requirements List */}
      <ul className="space-y-3">
        {requirements.map((requirement) => (
          <li
            key={requirement}
            className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
          >
            <CircleCheck
              size={17}
              className="mt-0.5 shrink-0 text-indigo-400"
            />

            {requirement}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default JobRequirements;
