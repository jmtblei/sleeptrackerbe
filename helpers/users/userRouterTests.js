const request = require('supertest');

const users = require('./user-model');
const sleep = require('../sleepData/sleep-model');
const server = require('../../api/server');
const db = require('../../data/dbConfig');


module.exports = userRouterTests = () => {
    describe('user-router tests', () => {
        beforeAll(async () => { await db('sleep').truncate() });
        afterAll(async () => { await db('sleep').truncate() });
        beforeAll(async () => { await db('user').truncate() });
        afterAll(async () => { await db('user').truncate() });

        let newUser;
        let login;
        const mockedSleepData = {
            user_id: 1,
            timeSlept: 6,
            wakeMood: 2,
            sleepMood: 3,
            date: "2019-04-16"
        }

        describe('/:id GET endpoint tests', () => {
            it('return 200 status if data are found', async () => {
                newUser = await request(server)
                    .post('/api/auth/register')
                    .send({ username: "giaco", password: 'benatiii' });
                await sleep.insert({ ...mockedSleepData, user_id: newUser.body.id });
                await sleep.insert({ ...mockedSleepData, user_id: newUser.body.id, date: '2019-04-17', timeSlept: 4 });
                login = await request(server)
                    .post('/api/auth/login')
                    .send({ username: `giaco`, password: `benatiii` })
                const response = await request(server)
                    .get(`/api/user/${newUser.body.id}`)
                    .set({ Authorization: `${login.body.token}` });
                expect(response.status).toBe(200);
            })

            it('return an error message if id is not found/correct', async () => {
                const response = await request(server)
                    .get(`/api/user/1000`)
                    .set({ Authorization: `${login.body.token}` });
                expect(response.body).toEqual({ message: "We couldn't find the id you are looking for!" });
            })

            it('return an error message if there are not sleep data for the user', async () => {
                await db('sleep').truncate()
                const response = await request(server)
                    .get(`/api/user/${newUser.body.id}`)
                    .set({ Authorization: `${login.body.token}` });
                expect(response.body).toEqual({ message: "There aren't sleep data for the selected user!" });
            })
        })
    })
}