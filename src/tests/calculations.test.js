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

  test('POST /add/:num should return correct value after performing addition', async () => {
    const response = await request(app).post('/calculator/add/10');
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(60);
  });

  test('GET /value should display current value', async () => {
    const response = await request(app).get('/calculator/value');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(60);
  });

  test('POST /minus/:num should return correct value after perfoming subtractions ', async () => {
    const response = await request(app).post('/calculator/minus/36.6');
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(23.4);
  });

  test('POST /multiply/:num should return correct value after performing multiplications ', async () => {
    const response = await request(app).post('/calculator/multiply/0.0001');
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(0.00234);
  });

  test('POST /divide/:num should return correct value after performing divisions ', async () => {
    const response = await request(app).post('/calculator/divide/0.00078');
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(3);
  });

  test('POST /factorial should return correct value after performing factorials ', async () => {
    const response = await request(app).get('/calculator/factorial');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(6);
  });
});
