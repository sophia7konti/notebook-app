import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../server.js";
import Note from "../models/noteModel.js";

dotenv.config();

beforeAll(async () => {
  // Σύνδεση με τη βάση δοκιμών
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  await Note.deleteMany(); // καθάρισμα μετά από κάθε test
});

describe("Notes API", () => {
  it("δημιουργεί νέα σημείωση", async () => {
    const res = await request(app)
      .post("/notes")
      .send({ title: "Test Note", content: "This is a test note" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Note");
    expect(res.body.content).toBe("This is a test note");
  });

  it("επιστρέφει όλες τις σημειώσεις", async () => {
    await Note.create({ title: "Note 1", content: "Content 1" });
    await Note.create({ title: "Note 2", content: "Content 2" });

    const res = await request(app).get("/notes");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty("title");
  });

  it("διαγράφει σημείωση", async () => {
    const note = await Note.create({ title: "ToDelete", content: "Delete me" });

    const res = await request(app).delete(`/notes/${note._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Note deleted");
  });
});

