const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('sleep').select('timeSlept', 'wakeMood', 'sleepMood');
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