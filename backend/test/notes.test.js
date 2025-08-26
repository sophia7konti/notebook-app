const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.json());

// Mock notes data
let notes = [{ id: 1, title: "Test Note", content: "This is a test" }];

// Routes
app.get("/api/notes", (req, res) => res.status(200).json(notes));

app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;
  const newNote = { id: notes.length + 1, title, content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Tests
describe("Backend API Tests", () => {
  it("GET /api/notes returns 200 and array", async () => {
    const res = await request(app).get("/api/notes");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /api/notes creates a new note", async () => {
    const res = await request(app)
      .post("/api/notes")
      .send({ title: "New Note", content: "Content" });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("New Note");
  });
});
