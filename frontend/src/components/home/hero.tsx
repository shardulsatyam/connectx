function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">
        Meet Smarter with{" "}
        <span className="text-cyan-400">ConnectX</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Experience seamless HD video meetings, AI-powered meeting notes,
        real-time chat, screen sharing, and collaboration—all in one place.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400">
          Start Meeting
        </button>

        <button className="rounded-xl border border-slate-700 px-7 py-4 font-semibold transition hover:border-cyan-400">
          Join Meeting
        </button>
      </div>
    </section>
  );
}

export default Hero;