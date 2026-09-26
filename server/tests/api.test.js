const request = require('supertest');
const app = require('../app');

describe('Krupa Sindhu API Integration Tests', () => {
  it('GET /api/health should return 200 OK and company metadata', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('OK');
    expect(res.body.company).toContain('Krupa Sindhu');
    expect(res.body.iso).toEqual('ISO 9001:2015 Certified');
  });

  it('GET /api/services should return services array', async () => {
    const res = await request(app).get('/api/services');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /api/internships should return internships array', async () => {
    const res = await request(app).get('/api/internships');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('POST /api/feedback with valid data should return 201 Created', async () => {
    const res = await request(app)
      .post('/api/feedback')
      .send({
        name: 'Test Visitor',
        email: 'test@example.com',
        message: 'Inquiring about corporate software development services.'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
  });

  it('POST /api/chat should return a contextual AI reply', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({
        message: 'What internships do you offer?'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.reply).toBeDefined();
  }, 10000);
});
