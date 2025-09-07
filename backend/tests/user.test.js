import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../server.js";
import User from "../models/User.js";

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
  await User.deleteMany(); // καθαρίζουμε τους χρήστες μετά από κάθε test
});

describe("User API", () => {
  it("κάνει register νέο χρήστη", async () => {
    const res = await request(app)
      .post("/users/register")
      .send({ name: "TestUser", email: "test@example.com", password: "123456" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
    expect(res.body.user.email).toBe("test@example.com");
  });

  it("κάνει login χρήστη", async () => {
    // Πρώτα δημιουργούμε χρήστη
    await request(app)
      .post("/users/register")
      .send({ name: "LoginUser", email: "login@example.com", password: "123456" });

    // Μετά κάνουμε login
    const res = await request(app)
      .post("/users/login")
      .send({ email: "login@example.com", password: "123456" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body.user.email).toBe("login@example.com");
  });

  it("δεν κάνει login με λάθος password", async () => {
    await request(app)
      .post("/users/register")
      .send({ name: "WrongPass", email: "wrong@example.com", password: "123456" });

    const res = await request(app)
      .post("/users/login")
      .send({ email: "wrong@example.com", password: "wrongpass" });

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("Invalid credentials");
  });
});



