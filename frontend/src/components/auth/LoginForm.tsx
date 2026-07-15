import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-cyan-600 to-slate-900">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center bg-gradient-to-br from-cyan-600 to-slate-900 p-16">
        <h1 className="text-5xl font-bold text-white">
          Connect<span className="text-cyan-300">X</span>
        </h1>

        <p className="mt-6 max-w-md text-lg text-slate-200">
          Welcome back! Sign in to continue your secure meetings and
          collaborate with your team.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white">
            Welcome Back
          </h2>

          <p className="mt-2 text-slate-400">
            Login to continue using ConnectX.
          </p>

          {error && (
            <div className="mt-4 rounded-xl bg-red-500/20 border border-red-500 p-3 text-red-300 text-sm">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-slate-400">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="cursor-pointer font-semibold text-cyan-400 hover:underline"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;