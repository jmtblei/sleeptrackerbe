const db = require('../../data/dbConfig.js');

module.exports = {
    insert,
    find,
<<<<<<< HEAD
    findById,
    // getStats,
    remove,
    update
=======
    findBy,
    findById,
    getAvgTimeSlept
>>>>>>> 42925014b42f7b2586cdeda4e6d77f19bdaa7737
};

function find() {
    return db('sleep');
}

<<<<<<< HEAD
async function insert(sleep){
=======
function findBy(sort) {
    return db('sleep').where(sort)
}

async function add(sleep) {
>>>>>>> 42925014b42f7b2586cdeda4e6d77f19bdaa7737
    const [id] = await db('sleep').insert(sleep);
    return findById(id);
}

function findById(id) {
    return db('sleep')
        .where({ id })
        .first();
}

<<<<<<< HEAD
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
=======
async function getAvgTimeSlept(id, dateStart, dateEnd) {
    const avgTimeSlept = await db('sleep')
        .avg('timeSlept as avgTimeSlept')
        .whereBetween('date', [dateStart, dateEnd])
        .andWhere('user_id', id)
        .first();
    return { avgTimeSlept: Math.round(avgTimeSlept.avgTimeSlept) };
>>>>>>> 42925014b42f7b2586cdeda4e6d77f19bdaa7737
}