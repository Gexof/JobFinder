import { Bookmark } from "lucide-react";

function SavedJobsHeader() {
  return (
    <header className="flex items-center gap-4">
      <div className="rounded-xl bg-indigo-500/15 p-3 text-indigo-400">
        <Bookmark size={26} />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-100">Saved Jobs</h1>
        <p className="mt-1 text-sm text-gray-400">
          Keep track of opportunities you’re interested in.
        </p>
      </div>
    </header>
  );
}

export default SavedJobsHeader;
