const db = require('../../data/dbConfig.js');

module.exports = {
    insert,
    find,
    findBy,
    findById,
    remove,
    update,
    // getDate
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

function update(id, changes){
    return db('sleep')
    .where({ id })
    .update(changes)
}
//     async function getAvgTimeSlept(id) {
//     let today = new Date();
//     let dd = today.getDate();
//     let mm = today.getMonth() + 1; //January is 0!
//     let yyyy = today.getFullYear();
//     let sixDaysBack = today.getDate() - 6;
//     let today = yyyy + '-' + mm + '-' + dd;
//     let sixDaysBack = yyyy + '-' + mm + '-' + dd;
//     if (dd < 10) {
//     dd = '0' + dd;
//     } 
//     if (mm < 10) {
//     mm = '0' + mm;
//     } 
//     // document.getElementById('DATE').value = today;
//     const avgTimeSlept = await db('sleep')
//         .avg('timeSlept as avgTimeSlept')
//         .whereBetween('date', [sixDaysBack, today])
//         .andWhere('user_id', id)
//         .first();
//     return { avgTimeSlept: Math.round(avgTimeSlept.avgTimeSlept) };
// }
