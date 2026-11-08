import { Building2, ExternalLink, Users, CalendarDays } from "lucide-react";

function CompanyInfo() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#222631] p-6 text-white">
      <div className="mb-5 flex items-center gap-3">
        <span className="text-indigo-400">
          <Building2 size={24} />
        </span>

        <h2 className="text-lg font-semibold">About Microsoft</h2>
      </div>

      <p className="mb-5 text-sm leading-7 text-gray-400">
        Microsoft is a global technology company that develops, manufactures,
        licenses, and supports a wide range of software products and services.
      </p>

      <a
        href="https://www.microsoft.com"
        target="_blank"
        rel="noreferrer"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
      >
        Visit company website
        <ExternalLink size={16} />
      </a>

      <ul className="space-y-4 border-t border-white/10 pt-5">
        <li className="flex items-center gap-3 text-sm text-gray-300">
          <Users size={18} className="text-gray-400" />
          10,000+ Employees
        </li>

        <li className="flex items-center gap-3 text-sm text-gray-300">
          <CalendarDays size={18} className="text-gray-400" />
          Founded in 1975
        </li>
      </ul>
    </section>
  );
}

export default CompanyInfo;
