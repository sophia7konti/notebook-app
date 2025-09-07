import express from "express";
const router = express.Router();
import {
  registerUser,
  authUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// Public routes
router.post("/register", registerUser);
router.post("/login", authUser);

// Private route
router.get("/profile", protect, getUserProfile);

export default router;
