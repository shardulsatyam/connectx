import Button from "../ui/Button";
import VideoPreview from "./VideoPreview";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-36 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
          Real-Time Video Conferencing Platform
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
          Connect.
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Collaborate.
          </span>
          <br />
          Communicate.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Secure video meetings for modern teams. Meet, chat and collaborate
          effortlessly in one place with ConnectX.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link to="/dashboard">
            <Button>Start Meeting</Button>
          </Link>

          <Link to="/meeting/demo-room">
            <Button variant="secondary">
              Join Meeting
            </Button>
          </Link>
        </div>

        {/* Meeting Preview */}
        <div className="mt-16 flex justify-center">
          <VideoPreview />
        </div>
      </div>
    </section>
  );
}

export default Hero;