import { CircleCheck } from "lucide-react";

function JobResponsibilities() {
  const responsibilities = [
    "Develop and maintain responsive web applications",
    "Collaborate with cross-functional teams",
    "Optimize applications for maximum speed and scalability",
    "Participate in code reviews and contribute to product improvements",
  ];

  return (
    <section className="rounded-2xl border border-white/10 bg-[#222631] p-6 text-white">
      {/* Section Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-indigo-400">
          <CircleCheck size={24} />
        </span>

        <h2 className="text-lg font-semibold">Key Responsibilities</h2>
      </div>

      {/* Responsibilities List */}
      <ul className="space-y-3">
        {responsibilities.map((responsibility) => (
          <li
            key={responsibility}
            className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
          >
            <CircleCheck
              size={17}
              className="mt-0.5 shrink-0 text-indigo-400"
            />

            {responsibility}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default JobResponsibilities;
