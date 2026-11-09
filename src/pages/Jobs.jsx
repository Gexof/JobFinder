import { useEffect, useState } from "react";
import JobList from "../components/JobList";
import MainHeader from "../components/MainHeader";
import { getJobs } from "../services/jobService";
import JobSkeleton from "../components/common/JobSkeleton";
import ErrorMessage from "../components/common/ErrorMessage";
import EmptyState from "../components/common/EmptyState";
import JobFilters from "../components/JobFilters";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filters, setFilters] = useState({
    workplace: [],
    location: [],
    careerLevel: [],
    jobType: [],
  });

  // Debouncer
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch Jobs
  useEffect(() => {
    const controller = new AbortController();

    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        setError("");

        const data = await getJobs(debouncedSearch, filters, controller.signal);

        setJobs(data);
      } catch (err) {
        if (err.name === "AbortError") return;

        setError(err.message);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchJobs();

    return () => controller.abort();
  }, [debouncedSearch, filters]);

  // Fetch All Jobs
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const data = await getJobs("", {
          workplace: [],
          location: [],
          careerLevel: [],
          jobType: [],
        });

        setAllJobs(data);

        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchAllJobs();
  }, []);

  const workplaceOptions = [
    ...new Set(allJobs.map((job) => job.workplaceType)),
  ];

  const locationOptions = [
    ...new Set(allJobs.map((job) => job.city).filter((city) => city !== null)),
  ];

  const careerLevelOptions = [
    ...new Set(allJobs.map((job) => job.experienceLevel)),
  ];

  const jobTypeOptions = [...new Set(allJobs.map((job) => job.employmentType))];

  console.log(locationOptions);

  const filterOptions = {
    workplace: workplaceOptions,
    location: locationOptions,
    careerLevel: careerLevelOptions,
    jobType: jobTypeOptions,
  };

  return (
    <div>
      <MainHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-64 lg:shrink-0">
          <JobFilters
            filters={filters}
            setFilters={setFilters}
            filterOptions={filterOptions}
          />
        </div>

        {/* Jobs Section */}
        <div className="min-w-0 flex-1">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <JobSkeleton key={index} />
              ))}
            </div>
          ) : error ? (
            <ErrorMessage message={error} />
          ) : jobs.length === 0 ? (
            <EmptyState />
          ) : (
            <JobList jobs={jobs} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
