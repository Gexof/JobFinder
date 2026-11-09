import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function JobFilters({ filters, setFilters, filterOptions }) {
  const [openSections, setOpenSections] = useState({
    workplace: true,
    location: false,
    careerLevel: false,
    jobType: false,
  });

  const filterConfig = [
    {
      id: "workplace",
      title: "Workplace",
      field: "workplaceType",
      options: filterOptions.workplace,
    },
    {
      id: "location",
      title: "Location",
      field: "location",
      options: filterOptions.location,
    },
    {
      id: "careerLevel",
      title: "Career Level",
      field: "experienceLevel",
      options: filterOptions.careerLevel,
    },
    {
      id: "jobType",
      title: "Job Type",
      field: "employmentType",
      options: filterOptions.jobType,
    },
  ];

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (section, option, isChecked) => {
    setFilters((prev) => ({
      ...prev,
      [section]: isChecked
        ? [...prev[section], option]
        : prev[section].filter((item) => item !== option),
    }));
  };

  const handleReset = () => {
    setFilters({
      workplace: [],
      location: [],
      careerLevel: [],
      jobType: [],
    });
  };

  return (
    <aside className="rounded-xl border border-white/10 bg-[#222631] p-5">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="font-semibold text-gray-100">Filters</h3>

        <button
          onClick={handleReset}
          className="text-sm text-indigo-400 transition-colors hover:text-indigo-300 cursor-pointer"
        >
          Reset
        </button>
      </div>

      <div className="space-y-5">
        {filterConfig.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => toggleSection(section.id)}
              className="flex w-full items-center justify-between text-sm font-medium text-gray-200 cursor-pointer"
            >
              <span>{section.title}</span>

              {openSections[section.id] ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {openSections[section.id] && (
              <div className="mt-4 space-y-3">
                {section.options.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 text-sm text-gray-400 transition-colors hover:text-gray-100"
                  >
                    <input
                      type="checkbox"
                      value={option}
                      checked={filters[section.id].includes(option)}
                      onChange={(e) =>
                        handleFilterChange(section.id, option, e.target.checked)
                      }
                      className="size-4 cursor-pointer accent-indigo-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default JobFilters;
