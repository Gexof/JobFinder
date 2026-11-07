import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <div className="min-h-screen bg-[#111318] text-gray-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
