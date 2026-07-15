import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import meetingRoutes from "./routes/meetingRoutes";

const app = express();

// Middleware

app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Welcome to ConnectX API",
  });
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/meeting", meetingRoutes);

export default app;