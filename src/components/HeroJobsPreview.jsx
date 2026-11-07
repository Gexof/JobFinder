import { MapPin, BriefcaseBusiness, Bookmark } from "lucide-react";

function HeroJobsPreview() {
  return (
    <div className="relative hidden h-85 w-full max-w-md md:block">
      {/* Main Job Card */}
      <article className="absolute left-10 top-20 z-20 w-80 rounded-2xl border border-white/10 bg-[#222631] p-5 shadow-2xl shadow-indigo-950/40">
        <div className="mb-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400">
              <BriefcaseBusiness size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-100">
                Frontend Developer
              </h3>
              <p className="text-sm text-gray-400">Acme Studio</p>
            </div>
          </div>

          <Bookmark size={19} className="text-gray-400" />
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            Remote
          </span>

          <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-indigo-400">
            Full-time
          </span>
        </div>
      </article>

      {/* Top Job Card */}
      <article className="absolute right-0 top-0 z-10 w-64 rotate-3 rounded-2xl border border-white/10 bg-[#1B1E26] p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
            <BriefcaseBusiness size={19} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100">
              UI/UX Designer
            </h3>
            <p className="text-xs text-gray-400">Northstar</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1 text-xs text-gray-400">
          <MapPin size={13} />
          New York
        </div>
      </article>

      {/* Bottom Job Card */}
      <article className="absolute bottom-0 left-0 z-30 w-64 -rotate-3 rounded-2xl border border-white/10 bg-[#1B1E26] p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
            <BriefcaseBusiness size={19} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100">
              React Developer
            </h3>
            <p className="text-xs text-gray-400">Pixel Labs</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1 text-xs text-gray-400">
          <MapPin size={13} />
          Remote
        </div>
      </article>

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[100px]" />
    </div>
  );
}

export default HeroJobsPreview;
