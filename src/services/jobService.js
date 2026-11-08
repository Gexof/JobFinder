const getJobs = async () => {
  const res = await fetch("http://localhost:3000/jobs");

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await res.json();

  return data;
};

export default getJobs;
