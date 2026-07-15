import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createMeeting,
  getMyMeetings,
} from "../api/meeting";

interface Meeting {
  _id: string;
  title: string;
  meetingId: string;
  createdAt: string;
}

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [joinMeetingId, setJoinMeetingId] = useState("");
  const [loading, setLoading] = useState(false);

  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loadingMeetings, setLoadingMeetings] = useState(true);

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  const loadMeetings = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) return;

      const res = await getMyMeetings(token);

      setMeetings(res.data.meetings);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMeetings(false);
    }
  };

  useEffect(() => {
    loadMeetings();
  }, []);

  const createMeetingHandler = async () => {
    if (!meetingTitle.trim()) {
      alert("Please enter meeting title");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const res = await createMeeting(
        token,
        meetingTitle
      );

      setMeetingId(res.data.meeting.meetingId);

      setMeetingTitle("");

      await loadMeetings();

      alert(
        `Meeting Created Successfully!\n\nMeeting ID : ${res.data.meeting.meetingId}`
      );
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
          "Unable to create meeting"
      );
    } finally {
      setLoading(false);
    }
  };

  const joinMeetingHandler = () => {
    if (!joinMeetingId.trim()) {
      alert("Please enter Meeting ID");
      return;
    }

    navigate(`/meeting/${joinMeetingId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-600 via-slate-900 to-slate-950">

      <nav className="flex items-center justify-between border-b border-slate-700 px-10 py-5">

        <h1 className="text-4xl font-bold text-white">
          Connect
          <span className="text-cyan-300">
            X
          </span>
        </h1>

        <button
          onClick={logoutHandler}
          className="rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
        >
          Logout
        </button>

      </nav>

      <div className="mx-auto mt-16 max-w-6xl px-6">

        <h2 className="text-5xl font-bold text-white">
          Welcome,
          <span className="text-cyan-300">
            {" "}
            {user.fullName}
          </span>{" "}
          👋
        </h2>

        <p className="mt-4 text-lg text-slate-300">
          Create secure meetings and collaborate with your team.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <div className="text-5xl">
              🎥
            </div>

            <h3 className="mt-5 text-3xl font-bold text-white">
              Create Meeting
            </h3>

            <input
              type="text"
              placeholder="Meeting Title"
              value={meetingTitle}
              onChange={(e) =>
                setMeetingTitle(e.target.value)
              }
              className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none"
            />

            <button
              onClick={createMeetingHandler}
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-cyan-500 py-3 text-lg font-semibold text-white hover:bg-cyan-600"
            >
              {loading
                ? "Creating..."
                : "Create Meeting"}
            </button>

          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <div className="text-5xl">
              🤝
            </div>

            <h3 className="mt-5 text-3xl font-bold text-white">
              Join Meeting
            </h3>

            <input
              value={joinMeetingId}
              onChange={(e) =>
                setJoinMeetingId(e.target.value)
              }
              placeholder="Meeting ID"
              className="mt-6 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none"
            />

            <button
              onClick={joinMeetingHandler}
              className="mt-6 w-full rounded-xl bg-cyan-500 py-3 text-lg font-semibold text-white hover:bg-cyan-600"
            >
              Join Meeting
            </button>

          </div>

        </div>
                {meetingId && (
          <div className="mt-12 rounded-3xl border border-cyan-500 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-cyan-300">
              🎉 Meeting Created
            </h2>

            <p className="mt-4 text-slate-300">
              Share this Meeting ID with your teammates.
            </p>

            <div className="mt-5 rounded-xl bg-slate-950 p-5">
              <p className="text-slate-400">Meeting ID</p>

              <h1 className="mt-2 text-4xl font-bold text-white">
                {meetingId}
              </h1>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(meetingId);
                  alert("Meeting ID Copied");
                }}
                className="mt-5 rounded-xl bg-cyan-500 px-5 py-2 text-white hover:bg-cyan-600"
              >
                📋 Copy Meeting ID
              </button>
            </div>
          </div>
        )}

        {/* Recent Meetings */}

        <div className="mt-12 rounded-3xl border border-slate-700 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold text-white">
            Recent Meetings
          </h2>

          {loadingMeetings ? (

            <div className="mt-8 text-center text-slate-400">
              Loading meetings...
            </div>

          ) : meetings.length === 0 ? (

            <div className="mt-8 rounded-2xl border border-dashed border-slate-600 p-10 text-center">

              <p className="text-slate-400">
                No meetings yet.
              </p>

            </div>

          ) : (

            <div className="mt-8 space-y-5">

              {meetings.map((meeting) => (

                <div
                  key={meeting._id}
                  className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
                >

                  <h3 className="text-2xl font-bold text-white">
                    🎥 {meeting.title}
                  </h3>

                  <p className="mt-3 text-slate-300">
                    Meeting ID :
                    <span className="ml-2 font-semibold text-cyan-400">
                      {meeting.meetingId}
                    </span>
                  </p>

                  <p className="mt-2 text-slate-400">
                    Created :
                    {" "}
                    {new Date(meeting.createdAt).toLocaleString()}
                  </p>

                  <div className="mt-5 flex gap-4">

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(meeting.meetingId);
                        alert("Meeting ID Copied");
                      }}
                      className="rounded-xl bg-cyan-500 px-5 py-2 text-white hover:bg-cyan-600"
                    >
                      Copy ID
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/meeting/${meeting.meetingId}`)
                      }
                      className="rounded-xl bg-green-500 px-5 py-2 text-white hover:bg-green-600"
                    >
                      Join
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </div>
  );
}

export default Dashboard;