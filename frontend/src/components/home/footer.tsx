import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">

        {/* Logo */}

        <div>
          <h2 className="text-3xl font-bold text-white">
            Connect<span className="text-cyan-400">X</span>
          </h2>

          <p className="mt-4 max-w-sm text-slate-400">
            A modern real-time video conferencing platform built
            using React, TypeScript, Node.js, Socket.IO and WebRTC.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-2 text-slate-400">

            <li className="hover:text-cyan-400 cursor-pointer">
              Home
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              Features
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              How It Works
            </li>

            <li className="hover:text-cyan-400 cursor-pointer">
              Contact
            </li>

          </ul>
        </div>

        {/* Social */}

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Connect
          </h3>

          <div className="flex gap-5 text-2xl text-slate-400">

  <a
    href="https://github.com/shardulsatyam"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-cyan-400"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/shardul-satyam/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-cyan-400"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:shardulsatyam@gmail.com"
    className="transition hover:text-cyan-400"
  >
    <FaEnvelope />
  </a>

  <a
    href="https://www.instagram.com/_shardul.arts/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-cyan-400"
  >
    <FaInstagram />
  </a>

</div>
        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">

        © {new Date().getFullYear()} ConnectX.
        All rights reserved.

      </div>
    </footer>
  );
}

export default Footer;