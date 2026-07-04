function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">
          Connect<span className="text-cyan-400">X</span>
        </h1>

        {/* Menu */}
        <ul className="hidden gap-8 text-gray-300 md:flex">
          <li className="cursor-pointer hover:text-cyan-400 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            Features
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            Pricing
          </li>

          <li className="cursor-pointer hover:text-cyan-400 transition">
            Contact
          </li>
        </ul>

        {/* Button */}
        <button className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;