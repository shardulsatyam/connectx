import mongoose, { Schema, Document } from "mongoose";

export interface IMeeting extends Document {
  title: string;
  meetingId: string;
  host: mongoose.Types.ObjectId;
  participants: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const meetingSchema = new Schema<IMeeting>(
  {
    title: {
      type: String,
      default: "Untitled Meeting",
    },

    meetingId: {
      type: String,
      required: true,
      unique: true,
    },

    host: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Meeting = mongoose.model<IMeeting>("Meeting", meetingSchema);

export default Meeting;