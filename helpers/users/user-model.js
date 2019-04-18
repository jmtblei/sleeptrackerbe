const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findSleepByUserId,
};

function find() {
    return db('user').select('id', 'username', 'password', 'fullName');
}

function findBy(sort) {
    return db('user').where(sort).first();
}

async function add(user) {
    const [id] = await db('user').insert(user);
    return findById(id);
}

function findById(id) {
    return db('user')
        .where({ id })
        .first();
}

function findSleepByUserId(id) {
    return db('user')
        .select('sleep.id', 'sleep.user_id', 'user.fullname', 'sleep.timeSlept', 'sleep.wakeMood', 'sleep.sleepMood', 'sleep.date')
        .join('sleep', 'user.id', 'sleep.user_id')
        .where('user.id', id)
}
