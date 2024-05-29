const request = require('supertest');
const app = require('../src/app');

describe('GET /:p1/:p2/:p3', () => {
    test('Basic Valid Input - No Games Played', async () => {
        const response = await request(app).get('/0/0/0');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ max_draws: 0 });
    });

    test('Simple Valid Input with Draws', async () => {
        const response = await request(app).get('/1/1/2');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ max_draws: -1 });
    });
    
    test('Valid Input with Draws', async () => {
        const response = await request(app).get('/3/4/5');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ max_draws: -1 });
    });

    test('No Possible Valid Game Configuration', async () => {
        const response = await request(app).get('/6/6/6');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ max_draws: -1 });
    });

    test('Invalid Input - Points out of range', async () => {
        const response = await request(app).get('/31/0/0');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ max_draws: -1 });
    });

    test('Invalid Input - Points not in non-decreasing order', async () => {
        const response = await request(app).get('/2/1/3');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ max_draws: -1 });
    });
});