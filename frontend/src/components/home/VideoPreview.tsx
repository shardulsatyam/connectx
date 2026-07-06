import {
  FaMicrophone,
  FaVideo,
  FaDesktop,
  FaComments,
  FaPhoneAlt,
} from "react-icons/fa";

const participants = [
  {
    initials: "SS",
    name: "Shardul Satyam",
    role: "Meeting Host",
    status: "Speaking",
    color: "from-cyan-500 to-blue-600",
  },
  {
    initials: "SC",
    name: "Sophia Carter",
    role: "Product Lead",
    status: "Camera On",
    color: "from-purple-500 to-pink-500",
  },
  {
    initials: "EB",
    name: "Ethan Brooks",
    role: "Full Stack Engineer",
    status: "Muted",
    color: "from-emerald-500 to-green-600",
  },
  {
    initials: "OC",
    name: "Olivia Chen",
    role: "UI/UX Designer",
    status: "Sharing Screen",
    color: "from-orange-500 to-red-500",
  },
];

function VideoPreview() {
  return (
    <section className="mt-20 w-full max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Weekly Product Meeting
          </h2>

          <p className="mt-2 text-slate-400">
            Monday • 10:30 AM • 4 Participants
          </p>
        </div>

        <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-black">
          LIVE
        </span>

      </div>

      {/* Participants */}

      <div className="grid gap-6 md:grid-cols-2">

        {participants.map((person) => (

          <div
            key={person.name}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
          >

            <div className="flex items-center gap-5">

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${person.color} text-xl font-bold text-white`}
              >
                {person.initials}
              </div>

              <div>

                <h3 className="text-lg font-semibold text-white">
                  {person.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {person.role}
                </p>

                <span className="mt-2 inline-block rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-400">
                  {person.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Controls */}

      <div className="mt-10 flex justify-center gap-5">

        {[
          <FaMicrophone />,
          <FaVideo />,
          <FaDesktop />,
          <FaComments />,
        ].map((icon, index) => (
          <button
            key={index}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 text-xl text-cyan-400 transition hover:scale-110 hover:bg-slate-700"
          >
            {icon}
          </button>
        ))}

        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-xl text-white transition hover:scale-110 hover:bg-red-600">
          <FaPhoneAlt />
        </button>

      </div>

    </section>
  );
}

export default VideoPreview;