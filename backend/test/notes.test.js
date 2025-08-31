import request from "supertest";
import express from "express";
import notesRoutes from "../routes/notes.js";

const app = express();
app.use(express.json());
app.use("/api/notes", notesRoutes);

describe("Notes routes", () => {
  let noteId;

  it("should create a new note", async () => {
    const res = await request(app).post("/api/notes").send({
      title: `Test Note ${Date.now()}`,
      content: "This is a test note",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toMatch(/Test Note/);
    noteId = res.body._id;
  });

  it("should get all notes", async () => {
    const res = await request(app).get("/api/notes");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should delete a note", async () => {
    const res = await request(app).delete(`/api/notes/${noteId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Note deleted");
  });
});
