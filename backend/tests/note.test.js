import request from "supertest";
import app from "../server.js";
import mongoose from "mongoose";
import Note from "../models/Note.js";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

let token;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Note.deleteMany({});
  await User.deleteMany({});

  // create user and get token
  const res = await request(app)
    .post("/api/users/register")
    .send({ name: "NoteUser", email: "noteuser@example.com", password: "123456" });

  token = res.body.token;
});

afterAll(async () => {
  await Note.deleteMany({});
  await User.deleteMany({});
  await mongoose.connection.close();
});

describe("Notes API", () => {
  it("creates a note", async () => {
    const res = await request(app)
      .post("/api/notes")
      .set("Authorization", `Bearer ${token}`)
      .send({ title: "Test Note", content: "Content" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Note");
  });

  it("gets notes", async () => {
    const res = await request(app)
      .get("/api/notes")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

