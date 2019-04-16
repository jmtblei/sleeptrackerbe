const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    getStats
};

function find() {
    return db('sleep');
}

function findBy(sort) {
    return db('sleep').where(sort)
}

async function add(sleep){
    const [id] = await db('sleep').insert(sleep);
    return findById(id);
}

function findById(id){ 
    return db('sleep')
        .where({ id })
        .first();
}

function getStats(id, dateStart, dateEnd){
    return db('sleep')
    .select('timeSlept')
    .count('timeSlept')
    .whereBetween('date', [dateStart, dateEnd])
    .andWhere('user_id', id)
}