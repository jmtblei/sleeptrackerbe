const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('sleep').select('id','username', 'password');
}

function findBy(sort) {
    return db('sleep').where(sort)
}

async function add(user){
    const [id] = await db('sleep').insert(user);
    return findById(id);
}

function findById(id){
    return db('sleep')
        .where({ id })
        .first();
}