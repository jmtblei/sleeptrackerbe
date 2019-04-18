const db = require('../../data/dbConfig');
const sleep = require('./sleep-model');
const users = require('../users/user-model')

module.exports = sleepModelTests = () => {
    describe('sleep-model tests', () => {
        beforeEach(async () => { await db('sleep').truncate() });
        afterEach(async () => { await db('sleep').truncate() });
        beforeEach(async () => { await db('user').truncate() });
        afterEach(async () => { await db('user').truncate() });

        const mockedSleepData = {
            user_id: 1,
            timeSlept: 6,
            wakeMood: 2,
            sleepMood: 3,
            date: "2019-04-16"
        }

        const mockedUser = {
            username: "Giacomo",
            password: "password",
            fullname: "Giacomo Benati",
            email: "giacomobenati@mailbox.org"
        }

        describe('find tests', () => {
            it('get sleep data from sleep table', async () => {
                const sleepDataArr = await sleep.find();
                expect(Array.isArray(sleepDataArr)).toBe(true);
            })
        })

        describe('findBy tests', () => {
            it('find the sleep Data by the correct param and return his id', async () => {
                const newUser = await users.add(mockedUser);
                await sleep.insert({ ...mockedSleepData, user_id: newUser.id });
                let foundSleepData = await sleep.findBy({ date: mockedSleepData.date });
                expect(Array.isArray(foundSleepData)); // line probably to refactor
            })
        })

        describe('add tests', () => {
            it('add and return the newly created sleep data', async () => {
                const newUser = await users.add(mockedUser);
                const newData = await sleep.insert({ ...mockedSleepData, user_id: newUser.id });
                expect(newData.date).toEqual(mockedSleepData.date);
            })
        })

        describe('findById tests', () => {
            it('find the sleep data with the correct id', async () => {
                const newUser = await users.add(mockedUser);
                const newData = await sleep.insert({ ...mockedSleepData, user_id: newUser.id });
                const foundData = await sleep.findById(newData.id);
                expect(foundData.date).toEqual(mockedSleepData.date);
            })
        })

        describe('getStats tests', () => {
            it('retun avgSleptTime(integer) of an user from a starting date to an end date', async () => {
                const newUser = await users.add(mockedUser);
                await sleep.insert({ ...mockedSleepData, user_id: newUser.id });
                await sleep.insert({ ...mockedSleepData, user_id: newUser.id, date: '2019-04-17', timeSlept: 4 });
                await sleep.insert({ ...mockedSleepData, user_id: newUser.id, date: '2019-04-01', timeSlept: 1 });
                const avgTimeSlept = await sleep.getAvgSleepData(newUser.id);
                expect(avgTimeSlept).toEqual({ "avgTimeSlept": 5 });
            })
        })
    })
}