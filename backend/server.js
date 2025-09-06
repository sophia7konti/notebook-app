import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/notes", noteRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));

export default app; // Αυτό χρειάζεται για τα tests (Jest/Supertest)
