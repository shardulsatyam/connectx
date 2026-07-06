import { Link } from "react-router-dom";
import Button from "../ui/Button";

function LoginForm() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Left Side */}
      <div className="hidden w-1/2 flex-col justify-center bg-gradient-to-br from-cyan-600 to-slate-900 p-16 lg:flex">
        <h1 className="text-5xl font-bold text-white">
          Connect<span className="text-cyan-300">X</span>
        </h1>

        <p className="mt-6 max-w-md text-lg text-slate-200">
          Secure video meetings for modern teams. Meet, chat and collaborate
          from anywhere.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white">
            Welcome Back 👋
          </h2>

          <p className="mt-2 text-slate-400">
            Sign in to continue to ConnectX.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
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
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <Button>Login</Button>
          </form>

          <p className="mt-6 text-center text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-cyan-400 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;