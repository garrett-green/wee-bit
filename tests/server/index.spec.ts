import request from 'supertest';
import app from '../../src/server';
import { mockLinkModel, mockConnect, disconnect } from '../mocks';

const server = app.listen(3001);

describe('Test Express Server', () => {
  it('should POST /api/', async (done) => {
    const res = await request(app)
      .post('/api/')
      .send({ URL: mockLinkModel.URL });

    expect(res.status).toBe(200);
    expect(res.body.URL).toBe(mockLinkModel.URL);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('shortURL');

    await new Promise((resolve) => {
      return setTimeout(resolve, 5);
    });

    return done();
  });
});
