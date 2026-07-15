import { useParams, useNavigate } from "react-router-dom";

function Meeting() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}

      <nav className="flex items-center justify-between border-b border-slate-800 px-8 py-5">

        <h1 className="text-3xl font-bold">
          Connect<span className="text-cyan-400">X</span>
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="rounded-xl bg-red-500 px-5 py-2 font-semibold hover:bg-red-600"
        >
          Leave Meeting
        </button>

      </nav>

      <div className="mx-auto max-w-7xl p-8">

        <h1 className="text-4xl font-bold">
          Meeting Room
        </h1>

        <p className="mt-2 text-slate-400">
          Meeting ID :
          <span className="ml-2 font-bold text-cyan-400">
            {id}
          </span>
        </p>

        {/* Video Area */}

        <div className="mt-8 flex h-[600px] items-center justify-center rounded-3xl border border-slate-700 bg-slate-900">

          <div className="text-center">

            <div className="text-8xl">
              🎥
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              Video Conference
            </h2>

            <p className="mt-3 text-slate-400">
              Jitsi Meeting will load here.
            </p>

          </div>

        </div>

        {/* Controls */}

        <div className="mt-8 flex justify-center gap-5">

          <button className="rounded-xl bg-slate-800 px-6 py-3 hover:bg-slate-700">
            🎤 Mic
          </button>

          <button className="rounded-xl bg-slate-800 px-6 py-3 hover:bg-slate-700">
            📹 Camera
          </button>

          <button className="rounded-xl bg-slate-800 px-6 py-3 hover:bg-slate-700">
            🖥️ Share Screen
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-xl bg-red-500 px-6 py-3 hover:bg-red-600"
          >
            Leave
          </button>

        </div>

      </div>

    </div>
  );
}

export default Meeting;