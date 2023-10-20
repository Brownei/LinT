import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Connected successfully!',
      }, done);
  });
});

describe('GET /posts', () => {
  it('responds with an array of posts', (done) => {
    request(app)
      .get('/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /posts', () => {
  it('responds with a new post', async () => {
    const response = await request(app)
      .post('/posts')
      .send({
        title: 'Hello world!',
        description: 'Basic tests to check on my api sadly!',
        problem_to_solve: 'No Postman',
        solution: 'Using jest test',
        requirements: 'Write test codes',
        is_paid: true,
      });
    expect(response.status).toBe(201);
  });
});