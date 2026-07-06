import Button from "../ui/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-2xl border border-slate-700/50 bg-slate-900/70 px-8 py-4 backdrop-blur-xl">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white">
  Connect<span className="text-cyan-400">X</span>
</Link>

        {/* Menu */}
        <ul className="hidden items-center gap-8 text-gray-300 md:flex">
          <li className="cursor-pointer transition hover:text-cyan-400">
            Features
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Pricing
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            About
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/login">
        <Button variant="secondary">Login</Button>
        </Link>

          <Link to="/register">
  <Button>Get Started</Button>
</Link>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;