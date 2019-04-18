const userModelTests = require('./helpers/users/userModelTests');
const authTests = require('./auth/authTests');
const restrictTests = require('./auth/restrictTests');
const sleepModelTests = require('./helpers/sleepData/sleepModelTests');
const userRouterTests = require('./helpers/users/userRouterTests');

describe('sequentially run tests', () => {
    userModelTests();
    authTests();
    restrictTests();
    sleepModelTests();
    userRouterTests();
})