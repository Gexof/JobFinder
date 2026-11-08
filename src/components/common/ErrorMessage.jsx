import { AlertCircle } from "lucide-react";

function ErrorMessage({ message }) {
  return (
    <div className="flex min-h-87.5 flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-[#1B1E26] p-8 text-center">
      <div className="mb-5 rounded-2xl bg-red-500/10 p-4 text-red-400">
        <AlertCircle size={32} />
      </div>

      <h2 className="mb-2 text-xl font-semibold text-gray-100">
        Something went wrong
      </h2>

      <p className="max-w-md text-sm leading-6 text-gray-400">
        {message || "Unable to load jobs. Please try again later."}
      </p>
    </div>
  );
}

export default ErrorMessage;
