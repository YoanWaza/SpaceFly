const request = require('supertest');
const express = require('express');
const flightsRoute = require('../index'); // Path to your index.js file

// Mock pg Pool
jest.mock('pg', () => {
  const mClient = {
    query: jest.fn().mockResolvedValue({
      rows: [
        {
          id: 1,
          departure_city: 'New York',
          arrival_city: 'London',
          date: '2024-11-25',
          time: '10:00:00',
          is_booked: false,
        },
      ],
    }),
    release: jest.fn(),
  };
  const mPool = {
    connect: jest.fn(() => mClient),
    query: jest.fn(() => mClient.query()),
  };
  return { Pool: jest.fn(() => mPool) };
});

const app = express();
app.use(express.json());
app.use(flightsRoute);

describe('GET /api/flights', () => {
  test('should return 200 and available flights', async () => {
    const response = await request(app).get('/api/flights');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: 1,
        departure_city: 'New York',
        arrival_city: 'London',
        date: '2024-11-25',
        time: '10:00:00',
        is_booked: false,
      },
    ]);
  });
});
