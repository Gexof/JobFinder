import Job from "./Job";

function JobList({ jobs, viewMode }) {
  return (
    <section className="space-y-5">
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 gap-5 md:grid-cols-2"
            : "flex flex-col gap-4"
        }
      >
        {jobs.map((job) => (
          <Job job={job} key={job.id} />
        ))}
      </div>
    </section>
  );
}

export default JobList;
