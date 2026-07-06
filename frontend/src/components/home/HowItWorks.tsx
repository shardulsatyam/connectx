const steps = [
  {
    number: "01",
    title: "Create a Meeting",
    description:
      "Start a new meeting instantly with a secure meeting room.",
  },
  {
    number: "02",
    title: "Share the Meeting Link",
    description:
      "Invite your team members using a unique meeting link.",
  },
  {
    number: "03",
    title: "Collaborate Together",
    description:
      "Use video, chat and screen sharing to work together in real time.",
  },
];

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          How It Works
        </h2>

        <p className="mt-4 text-slate-400">
          Start your meeting in just three simple steps.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-400"
          >
            <span className="text-5xl font-bold text-cyan-400">
              {step.number}
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              {step.title}
            </h3>

            <p className="mt-4 text-slate-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;