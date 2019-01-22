const app = require('../app');
const request = require('supertest');

describe('routes/calculator', () => {
  test('GET /about should return a welcome message', async () => {
    const response = await request(app).get('/calculator/about');
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual(
      'Welcome to a Very Simple Calculator'
    );
  });

  test('POST /:num should return the value of the first number entered', async () => {
    const response = await request(app).post('/calculator/50');
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(50);
  });

  test('POST /add/:num should return value after performing addition', async () => {
    const response = await request(app).post('/calculator/add/10');
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(60);
  });

  test('GET /value should display current value', async () => {
    const response = await request(app).get('/calculator/value');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(60);
  });
});
