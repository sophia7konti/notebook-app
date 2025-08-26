const request = require('supertest');
const express = require('express');
const usersRoutes = require('../routes/users');

const app = express();
app.use(express.json());
app.use('/api/users', usersRoutes);

describe('User routes', () => {
  it('should register a new user', async () => {
    const res = await request(app).post('/api/users/register').send({
      username: `testuser${Date.now()}`,
      password: 'password123'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User created');
  });

  it('should fail login with wrong credentials', async () => {
    const res = await request(app).post('/api/users/login').send({
      username: 'nonexistentuser',
      password: 'wrongpass'
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Invalid credentials');
  });
});
