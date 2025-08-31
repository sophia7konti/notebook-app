import express from "express";
import Note from "../models/Note.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const auth = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ message: "No token, authorization denied" });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

router.post("/", auth, async (req, res) => {
    try {
        const note = new Note({ ...req.body, user: req.user });
        await note.save();
        res.status(201).json(note);
    } catch (err) {
        res.status(400).json({ message: "Error creating note", error: err.message });
    }
});

router.get("/", auth, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

export default router;

