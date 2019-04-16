const db = require('../../data/dbConfig');
const users = require('./user-model');

module.exports = userModelTests = () => {
    describe('user-model tests', () => {
        beforeEach(async () => { await db('user').truncate() });
        afterEach(async () => { await db('user').truncate() });
    
        const mockedUser = {
            username: "Giacomo",
            password: "password",
            fullname: "Giacomo Benati",
            email: "giacomobenati@mailbox.org"
        }
    
        describe('find tests', () => {
            it('get the users from users table', async () => {
                const usersArr = await users.find();
                expect(Array.isArray(usersArr)).toBe(true);
            })
        })
    
        describe('findBy tests', () => {
            it('find the user by the correct param and return his id', async () => {
                await users.add(mockedUser);
    
                let foundUser = await users.findBy({ username: mockedUser.username });
                expect(foundUser.email).toEqual(mockedUser.email);
    
                foundUser = await users.findBy({ email: mockedUser.email })
                expect(foundUser.username).toEqual(mockedUser.username);
            })
        })
    
        describe('add tests', () => {
            it('add a user to the table and return the created user', async () => {
                const newUser = await users.add(mockedUser);
                expect(newUser.username).toEqual(mockedUser.username);
            })
        })
    
        describe('findById tests', () => {
            it('find a user by id', async () => {
                const newUser = await users.add(mockedUser);
    
                const foundUser = await users.findById(newUser.id);
                expect(foundUser.username).toEqual(newUser.username);
            })
        })
    })
} 