import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Meeting from "../pages/Meeting";
import CreateMeeting from "../pages/CreateMeeting";
import JoinMeeting from "../pages/JoinMeeting";
import MeetingHistory from "../pages/MeetingHistory";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meeting/:id" element={<Meeting />} />
        <Route path="/create-meeting" element={<CreateMeeting />} />
        <Route path="/join-meeting" element={<JoinMeeting />} />
        <Route path="/meeting-history" element={<MeetingHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;