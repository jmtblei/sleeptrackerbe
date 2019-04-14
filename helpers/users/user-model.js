const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db('user').select('id','username', 'password');
}

function findBy(sort) {
    return db('user').where(sort)
}

async function add(user){
    const [id] = await db('user').insert(user);
    return findById(id);
}

function findById(id){ 
    return db('user')
        .where({ id })
        .first();
}