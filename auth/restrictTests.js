const request = require('supertest');

const db = require('../data/dbConfig');
const server = require('../api/server');

module.exports = restrictTests = () => {
    describe('restrict tests', () => {
        beforeAll(async () => await db('user').truncate());
        afterAll(async () => await db('user').truncate());

        it('gives back a message if a token is not provided', async () => {
            const response = await request(server).get('/api/user');
            expect(response.body).toEqual({ message: 'No token provided' });
        })

        it('gives back a message if token is incorrect', async () => {
            const response = await request(server)
                .get('/api/user')
                .set({ Authorization: "wrong token" });
            expect(response.body).toEqual({ message: 'Invalid!!! Try Again' });
        })

        it('gives a 401 status if a token is not provided', async () => {
            const response = await request(server).get('/api/user');
            expect(response.status).toEqual(401);
        })

        it('gives a 401 status if a token incorrect', async () => {
            const response = await request(server)
                .get('/api/user')
                .set({ Authorization: "wrong token" });
            expect(response.status).toEqual(401);
        })

        it('gives a 200 status code if the correct token is provided', async () => {
            await request(server)
                .post('/api/auth/register')
                .send({ username: "giaco", password: 'benatiii' })
            const login = await request(server)
                .post('/api/auth/login')
                .send({ username: "giaco", password: 'benatiii' })
            const response = await request(server)
                .get('/api/user')
                .set({ Authorization: `${login.body.token}` });
            expect(response.status).toEqual(200);
        })
    })
} 