import CompanyInfo from "../components/JobDetails/CompanyInfo";
import JobDescription from "../components/JobDetails/JobDescription";
import JobDetailsHeader from "../components/JobDetails/JobDetailsHeader";
import JobRequirements from "../components/JobDetails/JobRequirements";
import JobResponsibilities from "../components/JobDetails/JobResponsibilities";
import JobSkills from "../components/JobDetails/JobSkills";

function JobDetails() {
  return (
    <div className="space-y-6">
      <JobDetailsHeader />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <JobDescription />
          <JobResponsibilities />
          <JobRequirements />
          <JobSkills />
        </div>

        <aside className="space-y-6">
          <CompanyInfo />
        </aside>
      </div>
    </div>
  );
}

export default JobDetails;
