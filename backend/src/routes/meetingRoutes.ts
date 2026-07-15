import express from "express";
import {
  createMeeting,
  joinMeeting,
  myMeetings,
} from "../controllers/meetingController";
import { isAuthenticated } from "../middleware/authMiddleware";

const router = express.Router();

// Create Meeting
router.post("/create", isAuthenticated, createMeeting);

// My Meetings
router.get("/my-meetings", isAuthenticated, myMeetings);

// Join Meeting
router.get("/:meetingId", isAuthenticated, joinMeeting);

export default router;