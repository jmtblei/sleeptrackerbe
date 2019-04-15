const request = require('supertest');

const db = require('../data/dbConfig');
const server = require('../api/server');

describe('auth tests', () => {
    beforeEach(async () => await db('user').truncate());
    describe('register endpoint tests', () => {
        it('return 201 status if a user is registered correctly', async () => {
            const response = await request(server).post('/api/auth/register').send({ username: 'username', password: 'password' });
            expect(response.status).toEqual(201);
        })

        it('return the newly created user if registered correctly', async () => {
            const response = await request(server).post('/api/auth/register').send({ username: 'username', password: 'password' });
            expect(response.body.username).toEqual('username');
        })

        it('return 401 status if username or password are not provided', async () => {
            const response = await request(server).post('/api/auth/register').send({ usernae: 'username', password: 'password' });
            expect(response.status).toEqual(401);
        })

        it('return a message error if username or password are not provided', async () => {
            const response = await request(server).post('/api/auth/register').send({ usernae: 'username', password: 'password' });
            expect(response.body).toEqual({ message: 'You need to send an username and a password' });
        })
    })
})