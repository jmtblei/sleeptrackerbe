const request = require('supertest');

const db = require('../data/dbConfig');
const server = require('../api/server');

module.exports = authTests = () => {
    describe('auth tests', () => {
        beforeEach(async () => await db('user').truncate());
        afterEach(async () => await db('user').truncate());
        describe('POST /register endpoint tests', () => {
            it('return 201 status if a user is registered correctly', async () => {
                const response = await request(server)
                    .post('/api/auth/register')
                    .send({
                        username: 'username',
                        password: 'password'
                    });
                expect(response.status).toEqual(201);
            })

            it('return the newly created user if registered correctly', async () => {
                const response = await request(server)
                    .post('/api/auth/register')
                    .send({
                        username: 'username',
                        password: 'password'
                    });
                expect(response.body.username).toEqual('username');
            })

            it('return 401 status if username or password are not provided or blank', async () => {
                let response = await request(server)
                    .post('/api/auth/register')
                    .send({
                        usernae: 'username',
                        password: 'password'
                    });
                expect(response.status).toEqual(401);

                response = await request(server)
                    .post('/api/auth/register')
                    .send({
                        username: '',
                        password: ''
                    });
                expect(response.status).toEqual(401);
            })

            it('return a message error if username or password are not provided or blank', async () => {
                let response = await request(server)
                    .post('/api/auth/register')
                    .send({
                        username: '',
                        password: ''
                    });
                expect(response.body).toEqual({ message: 'You need to send an username and a password' });

                response = await request(server)
                    .post('/api/auth/register')
                    .send({
                        usernme: 'asd',
                        password: 'asd'
                    });
                expect(response.body).toEqual({ message: 'You need to send an username and a password' });
            })

            it('return a message error if email has wrong format', async () => {
                const response = await request(server)
                    .post('/api/auth/register')
                    .send({
                        username: 'username',
                        password: 'password',
                        email: "addasd"
                    });
                expect(response.body).toEqual({ message: "Please provide a valid email" });
            })

            it('return an error message if username already exists', async () => {
                await request(server)
                    .post('/api/auth/register')
                    .send({
                        username: 'username',
                        password: 'password'
                    });
                const response = await request(server)
                    .post('/api/auth/register')
                    .send({
                        username: 'username',
                        password: 'password'
                    });
                expect(response.body).toEqual({ message: "That username is taken" });
            })

            it('return an error message if password is shorter then 8 char', async () => {
                const response = await request(server)
                    .post('/api/auth/register')
                    .send({
                        username: 'username',
                        password: 'psw'
                    });
                expect(response.body).toEqual({ message: "That password must be at least 8 character long" });
            })
        })

        describe('POST /login enpoint tests', () => {
            it('return 200 status if a user is logged in correctly', async () => {
                await request(server)
                    .post('/api/auth/register')
                    .send({
                        username: 'username',
                        password: 'password'
                    });
                const response = await request(server)
                    .post('/api/auth/login')
                    .send({
                        username: 'username',
                        password: 'password'
                    });
                expect(response.status).toEqual(200);
            })

            it('return a token if a user il logged in correctly', async () => {
                await request(server)
                    .post('/api/auth/register')
                    .send({
                        username: 'username',
                        password: 'password'
                    });
                const response = await request(server)
                    .post('/api/auth/login')
                    .send({
                        username: 'username',
                        password: 'password'
                    });
                expect(response.body.token).toBeTruthy();
            })

            it('return 401 status if username or password are not provided or wrong', async () => {
                let response = await request(server)
                    .post('/api/auth/login')
                    .send({
                        username: '',
                        password: ''
                    });
                expect(response.status).toEqual(401);

                response = await request(server)
                    .post('/api/auth/login')
                    .send({
                        username: 'asd',
                        password: 'asd'
                    });
                expect(response.status).toEqual(401);
            })

            it('return a message if username or password are not provided or wrong', async () => {
                let response = await request(server)
                    .post('/api/auth/login')
                    .send({
                        username: '',
                        password: ''
                    });
                expect(response.body).toEqual({ message: 'Try Again' });

                response = await request(server)
                    .post('/api/auth/login')
                    .send({
                        username: 'asd',
                        password: 'asd'
                    });
                expect(response.body).toEqual({ message: 'Try Again' });
            })
        })



        // describe('GET /logout enpoint tests', () => {
        //     it('return a message if you are logged out correctly', async () => {
        //         let response = await request(server).get('/api/auth/logout');
        //         console.log(response);
        //     })
        // })
    })
} 