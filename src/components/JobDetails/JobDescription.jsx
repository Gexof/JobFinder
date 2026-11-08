import { SquareText } from "lucide-react";

function JobDescription() {
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

      <p className="text-sm leading-7 text-gray-300">
        We are looking for a talented Frontend Developer to join our dynamic
        team at Microsoft. You will be responsible for building and maintaining
        modern web applications, collaborating with designers and backend
        developers to deliver exceptional user experiences. If you're passionate
        about creating innovative solutions and working with cutting-edge
        technologies, we'd love to hear from you.
      </p>
    </section>
  );
}

export default JobDescription;
