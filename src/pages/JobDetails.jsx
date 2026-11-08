import CompanyInfo from "../components/JobDetails/CompanyInfo";
import JobDescription from "../components/JobDetails/JobDescription";
import JobDetailsHeader from "../components/JobDetails/JobDetailsHeader";
import JobRequirements from "../components/JobDetails/JobRequirements";
import JobResponsibilities from "../components/JobDetails/JobResponsibilities";
import JobDetailsSkeleton from "../components/JobDetails/JobDetailsSkeleton";
import JobSkills from "../components/JobDetails/JobSkills";
import ErrorMessage from "../components/common/ErrorMessage";
import JobNotFound from "../components/JobDetails/JobNotFound";

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getJobById } from "../services/jobService";

function JobDetails() {
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await getJobById(id);
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (isLoading) {
    return <JobDetailsSkeleton />;
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!job) {
    return <JobNotFound />;
  }

  return (
    <div className="space-y-6">
      <JobDetailsHeader job={job} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <JobDescription job={job} />
          <JobResponsibilities job={job} />
          <JobRequirements job={job} />
          <JobSkills job={job} />
        </div>

        <aside className="space-y-6">
          <CompanyInfo job={job} />
        </aside>
      </div>
    </div>
  );
}

export default JobDetails;
