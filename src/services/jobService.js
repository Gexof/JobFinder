export const getJobs = async (searchQuery = "", signal) => {
  const query = searchQuery.trim();

  const url = query
    ? `http://localhost:3000/jobs?title:contains=${encodeURIComponent(query)}`
    : "http://localhost:3000/jobs";

  const res = await fetch(url, { signal });

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await res.json();

  return data;
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
