import { useParams } from "react-router-dom";

function Meeting() {
  const { id } = useParams();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <h1 className="text-5xl font-bold">
        Meeting ID: {id}
      </h1>
    </div>
  );
}

export default Meeting;