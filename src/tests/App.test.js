const request = require('supertest');
const app = require('../server'); // Assurez-vous que le chemin vers server est correct

describe('GET /', () => {
    it('should return Hello World!', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Hello World!');
    });
});
