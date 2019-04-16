const userModelTests = require('./helpers/users/userModelTests');
const authTests = require('./auth/authTests');
const restrictTests = require('./auth/restrictTests');

describe('sequentially run tests', () => {
    userModelTests();
    authTests();
    restrictTests();
})