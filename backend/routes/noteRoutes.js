import express from "express";
import { getNotes, addNote, deleteNote } from "../controllers/noteController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getNotes).post(protect, addNote);
router.route("/:id").delete(protect, deleteNote);

export default router;
