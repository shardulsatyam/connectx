import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiWebrtc,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact size={45} /> },
  { name: "TypeScript", icon: <SiTypescript size={45} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={45} /> },
  { name: "Node.js", icon: <FaNodeJs size={45} /> },
  { name: "Express", icon: <SiExpress size={45} /> },
  { name: "MongoDB", icon: <SiMongodb size={45} /> },
  { name: "Socket.IO", icon: <SiSocketdotio size={45} /> },
  { name: "WebRTC", icon: <SiWebrtc size={45} /> },
  { name: "Git", icon: <FaGitAlt size={45} /> },
];

function TechStack() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          Built With Modern Technologies
        </h2>

        <p className="mt-4 text-slate-400">
          ConnectX is built using industry-standard web technologies.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
          >
            <div className="flex justify-center text-cyan-400">
              {tech.icon}
            </div>

            <p className="mt-5 font-semibold text-white">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;