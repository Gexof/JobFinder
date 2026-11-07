import { NavLink } from "react-router";
import { BriefcaseBusiness } from "lucide-react";

function Navbar() {
  const linkStyles = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-indigo-400" : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1B1E26]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <BriefcaseBusiness className="text-indigo-400" size={24} />

          <span className="text-xl font-bold tracking-tight">JobFinder</span>
        </NavLink>

        <ul className="flex items-center gap-8">
          <li>
            <NavLink to="/" end className={linkStyles}>
              Find Jobs
            </NavLink>
          </li>

          <li>
            <NavLink to="/saved-jobs" className={linkStyles}>
              Saved Jobs
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
