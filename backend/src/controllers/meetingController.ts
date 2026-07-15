import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Meeting from "../models/Meeting";

// Create Meeting
// Create Meeting
export const createMeeting = async (req: AuthRequest, res: Response) => {
  try {
    const { title } = req.body;

    const meetingId = Math.random().toString(36).substring(2, 10).toUpperCase();

    const meeting = await Meeting.create({
      title: title || "Untitled Meeting",
      meetingId,
      host: req.user?.id,
      participants: [req.user?.id],
    });

    return res.status(201).json({
      success: true,
      message: "Meeting created successfully",
      meeting,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Join Meeting
export const joinMeeting = async (req: AuthRequest, res: Response) => {
  try {
    const meeting = await Meeting.findOne({
      meetingId: req.params.meetingId,
    }).populate("host", "fullName email");

    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "Meeting not found",
      });
    }

    return res.status(200).json({
      success: true,
      meeting,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// My Meetings
export const myMeetings = async (req: AuthRequest, res: Response) => {
  try {
    const meetings = await Meeting.find({
      host: req.user?.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      meetings,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};