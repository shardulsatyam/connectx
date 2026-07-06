import { useState } from "react";

const faqs = [
  {
    question: "Do I need to install any software?",
    answer:
      "No. ConnectX runs directly in your browser without requiring any installation.",
  },
  {
    question: "Can I share my screen during meetings?",
    answer:
      "Yes. Screen sharing is available for presentations and collaboration.",
  },
  {
    question: "Are meetings secure?",
    answer:
      "Yes. Authentication and protected meeting rooms help keep your meetings secure.",
  },
  {
    question: "Can I chat during a meeting?",
    answer:
      "Absolutely! ConnectX includes real-time chat during meetings.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-slate-400">
          Everything you need to know about ConnectX.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-slate-800 bg-slate-900"
          >
            <button
              className="flex w-full items-center justify-between p-6 text-left text-white"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span className="font-semibold">{faq.question}</span>

              <span className="text-cyan-400 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-slate-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;