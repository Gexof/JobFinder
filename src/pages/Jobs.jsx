import { useEffect, useState } from "react";
import JobList from "../components/JobList";
import MainHeader from "../components/MainHeader";
import getJobs from "../services/jobService";
import JobSkeleton from "../components/common/JobSkeleton";
import ErrorMessage from "../components/common/ErrorMessage";
import EmptyState from "../components/common/EmptyState";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <JobSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (jobs.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <MainHeader />
      <JobList jobs={jobs} />
    </div>
  );
}

export default Jobs;
