import SavedJobsHeader from "../components/SavedJobs/SavedJobsHeader";
import SavedJobsList from "../components/SavedJobs/SavedJobsList";

function SavedJobs() {
  return (
    <div className="space-y-8">
      <SavedJobsHeader />
      <SavedJobsList />
    </div>
  );
}

export default SavedJobs;
