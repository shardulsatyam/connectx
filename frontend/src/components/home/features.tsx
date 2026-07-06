import {
  FaVideo,
  FaComments,
  FaDesktop,
  FaLock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaVideo size={30} />,
    title: "HD Video Meetings",
    description:
      "Crystal-clear video meetings with a smooth and reliable experience.",
  },
  {
    icon: <FaComments size={30} />,
    title: "Real-Time Chat",
    description:
      "Chat instantly with participants during meetings.",
  },
  {
    icon: <FaDesktop size={30} />,
    title: "Screen Sharing",
    description:
      "Present your screen and collaborate with your team effortlessly.",
  },
  {
    icon: <FaLock size={30} />,
    title: "Secure Meetings",
    description:
      "JWT-based authentication keeps meetings protected and secure.",
  },
];

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          Why Choose <span className="text-cyan-400">ConnectX</span>?
        </h2>

        <p className="mt-4 text-slate-400">
          Everything you need for seamless online meetings.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
          >
            <div className="text-cyan-400">{feature.icon}</div>

            <h3 className="mt-6 text-xl font-semibold text-white">
              {feature.title}
            </h3>

            <p className="mt-4 text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;