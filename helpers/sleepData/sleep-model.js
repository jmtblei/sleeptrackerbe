const db = require('../../data/dbConfig.js');
const dateFormat = require('dateformat');

module.exports = {
    insert,
    find,
    findBy,
    findById,
    getAvgSleepData,
    remove,
    update,
};

function find() {
    return db('sleep');
}

function findBy(sort) {
    return db('sleep').where(sort)
}

async function insert(sleep) {
    const [id] = await db('sleep').insert(sleep);
    return findById(id);
}

function findById(id) {
    return db('sleep')
        .where({ id })
        .first();
}

function remove(id) {
    return db('sleep')
        .where('id', id)
        .del();
}

function update(id, changes) {
    return db('sleep')
        .where({ id })
        .update(changes)
}
async function getAvgSleepData(id) {
    let today = new Date();
    let sixDaysback = new Date();
    sixDaysback.setDate(sixDaysback.getDate() - 6);
    today = dateFormat(today, 'yyyy-mm-dd');
    sixDaysback = dateFormat(sixDaysback, 'yyyy-mm-dd');
    const avarages = await db('sleep')
        .avg('timeSlept as avgTimeSlept')
        .avg('wakeMood as avgWakeMood')
        .avg('sleepMood as avgSleepMood')
        .whereBetween('date', [sixDaysback, today])
        .andWhere('user_id', id)
        .first();
    return {
        avgTimeSlept: Math.round(avarages.avgTimeSlept),
        avgWakeMood: Math.round(avarages.avgWakeMood),
        avgSleepMood: Math.round(avarages.avgSleepMood),
    };
}