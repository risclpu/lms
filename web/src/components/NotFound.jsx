import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div className="not-found text-center py-16">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        404 — Page not found
      </h2>
      <p className="mb-6 text-slate-600">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition-all duration-200"
      >
        Return to Home
      </Link>
    </div>
  );
}
