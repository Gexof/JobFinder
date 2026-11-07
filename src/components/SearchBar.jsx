function SearchBar() {
  return (
    <input
      type="search"
      aria-label="Search jobs"
      placeholder="Search for jobs..."
      className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#1B1E26] px-4 py-3 text-sm text-gray-100 outline-none transition-colors placeholder:text-gray-500 focus:border-indigo-500"
    />
  );
}

export default SearchBar;
