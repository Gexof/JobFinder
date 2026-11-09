export const getJobs = async (searchQuery = "", filters, signal) => {
  const query = searchQuery.trim();
  const params = new URLSearchParams();

  if (query) {
    params.append("title:contains", query);
  }

  if (filters.workplace.length > 0) {
    params.append("workplaceType:in", filters.workplace.join(","));
  }

  if (filters.location.length > 0) {
    params.append("city:in", filters.location.join(","));
  }

  if (filters.careerLevel.length > 0) {
    params.append("experienceLevel:in", filters.careerLevel.join(","));
  }

  if (filters.jobType.length > 0) {
    params.append("employmentType:in", filters.jobType.join(","));
  }

  const res = await fetch(`http://localhost:3000/jobs?${params.toString()}`, {
    signal,
  });

  if (!res.ok) throw new Error("Failed to fetch jobs");

  return res.json();
};

export const getJobById = async (id) => {
  const res = await fetch(`http://localhost:3000/jobs/${id}`);

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch job");
  }
  const data = await res.json();

  return data;
};
