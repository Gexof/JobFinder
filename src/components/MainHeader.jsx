import SearchBar from "./SearchBar";
import HeroJobsPreview from "./HeroJobsPreview";

function MainHeader({ searchQuery, setSearchQuery }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex flex-col items-center justify-between gap-10 py-16 md:flex-row"
    >
      <div className="w-full max-w-3xl space-y-5">
        <h1
          id="hero-title"
          className="text-4xl font-bold leading-tight tracking-tight md:text-5xl"
        >
          Find your next <span className="text-indigo-400">opportunity</span>
        </h1>

        <p className="text-gray-400">
          Discover thousands of jobs from top companies
        </p>

        <form role="search" className="flex w-full items-center gap-3">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <button
            type="button"
            className="shrink-0 rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
          >
            Search
          </button>
        </form>
      </div>

      <HeroJobsPreview />
    </section>
  );
}

export default MainHeader;
