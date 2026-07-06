import { Link } from "react-router-dom";
import Button from "../ui/Button";

function RegisterForm() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Left Side */}
      <div className="hidden w-1/2 flex-col justify-center bg-gradient-to-br from-cyan-600 to-slate-900 p-16 lg:flex">
        <h1 className="text-5xl font-bold text-white">
          Connect<span className="text-cyan-300">X</span>
        </h1>

        <p className="mt-6 max-w-md text-lg text-slate-200">
          Create your account and start secure video meetings with your team
          anytime, anywhere.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white">
            Create Account
          </h2>

          <p className="mt-2 text-slate-400">
            Join ConnectX and start collaborating.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

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
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <Button>Create Account</Button>
          </form>

          <p className="mt-6 text-center text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-cyan-400 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;