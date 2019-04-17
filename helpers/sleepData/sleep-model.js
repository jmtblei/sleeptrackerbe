const db = require('../../data/dbConfig.js');
const dateFormat = require('dateformat');

module.exports = {
    insert,
    find,
    findBy,
    findById,
    getAvgTimeSlept,
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

async function getAvgTimeSlept(id) {
    const avgTimeSlept = await db('sleep')
        .avg('timeSlept as avgTimeSlept')
        .whereBetween('date', [sixDaysback.toString(), today.toString()])
        .andWhere('user_id', id)
        .first();
    return { avgTimeSlept: Math.round(avgTimeSlept.avgTimeSlept) };
}
