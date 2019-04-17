const db = require('../../data/dbConfig.js');
const dateFormat = require('dateformat');

module.exports = {
    add,
    find,
    findBy,
    findById,
    getAvgTimeSlept
};

function find() {
    return db('sleep').select('timeSlept', 'wakeMood', 'sleepMood');
}

function findBy(sort) {
    return db('sleep').where(sort)
}

async function add(sleep) {
    const [id] = await db('sleep').insert(sleep);
    return findById(id);
}

function findById(id) {
    return db('sleep')
        .where({ id })
        .first();
}

async function getAvgTimeSlept(id) {
    let today = new Date();
    
    const sixDaysback = today.getDate() -6;
    
    const avgTimeSlept = await db('sleep')
        .avg('timeSlept as avgTimeSlept')
        .whereBetween('date', [sixDaysback.toString(), today.toString()])
        .andWhere('user_id', id)
        .first();
    return { avgTimeSlept: Math.round(avgTimeSlept.avgTimeSlept) };
}