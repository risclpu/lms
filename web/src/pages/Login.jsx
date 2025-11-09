import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(null);
      alert("Login successful (mock)!");
    }, 1000);
  }

  return (
    <div className="auth-card max-w-md mx-auto bg-white rounded-xl shadow p-8 mt-12">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
        Login
      </h2>
      {error && <div className="text-red-600 mb-2 text-center">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-green-500 text-white rounded font-semibold shadow hover:bg-green-600 transition-all duration-200"
        >
          {loading ? "Logging in…" : "Login"}
        </button>
      </form>
    </div>
  );
}
