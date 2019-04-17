const db = require('../../data/dbConfig.js');

module.exports = {
    insert,
    find,
    findById,
    // getStats,
    remove,
    update
};

function find() {
    return db('sleep');
}

async function insert(sleep){
    const [id] = await db('sleep').insert(sleep);
    return findById(id);
}

function findById(id){ 
    return db('sleep')
        .where({ id })
        .first();
}

// function getStats(id, dateStart, dateEnd){
//     return db('sleep')
//     .select('timeSlept')
//     .count('timeSlept')
//     .whereBetween('date', [dateStart, dateEnd])
//     .andWhere('user_id', id)
// }

function remove(id) {
    return db('sleep')
      .where('id', id)
      .del();
  }

function update(id, changes){
    return db('sleep')
    .where({ id })
    .update(changes)
}