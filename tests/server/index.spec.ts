import request from 'supertest';
import app from '../../src/server';
import { mockLinkModel } from '../mocks';

// const server = app.listen(3001);

describe('Test Express Server', () => {
  it('should POST /api/', async () => {
    const res = await request(app)
      .post('/api/')
      .send({ URL: mockLinkModel.URL });

    expect(res.status).toBe(200);
    expect(res.body.URL).toBe(mockLinkModel.URL);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('shortURL');
  });

  it('should GET /:shortURL', async () => {
    const res = await request(app).get(`/${mockLinkModel.shortURL}`);
    // console.log('it -> res', res);

    expect(res.status).toBe(302);
    expect(res.redirect).toBe(true);
    expect(res.headers.location).toBe(mockLinkModel.URL);
  });

  it('should call next() on unknown shortURL', async () => {
    const res = await request(app).get('/no-link');

    expect(res.status).toBe(200);
    expect(res.redirect).toBe(false);
  });
});
