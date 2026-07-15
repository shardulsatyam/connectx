import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { registerUser } from "../../api/auth";

function RegisterForm() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await registerUser({
        fullName,
        email,
        password,
      });

      console.log("REGISTER SUCCESS:", res.data);

      alert(res.data.message || "Registration Successful");

      navigate("/login");
    } catch (error: any) {
      console.error("REGISTER ERROR:", error);
      console.error("RESPONSE:", error.response);
      console.error("DATA:", error.response?.data);

      alert(error.response?.data?.message || error.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

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

          <form onSubmit={handleRegister} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <Button type="submit">
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
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