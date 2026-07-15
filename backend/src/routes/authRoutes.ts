import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/authController";

import { isAuthenticated } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", isAuthenticated, getMe);

export default router;