import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header p-4 border-b bg-white">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-green-700">
          RISC LMS
        </Link>
        <div className="nav-links space-x-4">
          <Link to="/" className="hover:underline">
            Landing
          </Link>
          <Link to="/home" className="hover:underline">
            Home
          </Link>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
}
