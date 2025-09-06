import request from "supertest";
import app from "../server.js";
import mongoose from "mongoose";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  // Ensure clean start
  await User.deleteMany({});
});

afterAll(async () => {
  await User.deleteMany({});
  await mongoose.connection.close();
});

describe("User API", () => {
  it("registers a new user", async () => {
    const res = await request(app)
      .post("/api/users/register")
      .send({ name: "Test", email: "test@example.com", password: "123456" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
    expect(res.body.user.email).toBe("test@example.com");
  });

  it("logs in the user", async () => {
    const res = await request(app)
      .post("/api/users/login")
      .send({ email: "test@example.com", password: "123456" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});




