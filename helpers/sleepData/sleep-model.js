const db = require('../../data/dbConfig.js');
const dateFormat = require('dateformat');

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

<<<<<<< HEAD
async function getAvgTimeSlept(id) {
    let today = new Date();
    
    const sixDaysback = today.getDate() -6;
    
=======
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
<<<<<<< HEAD
    async function getAvgTimeSlept(id, dateStart, dateEnd) {
>>>>>>> 9e1cb6a71f850a05a328a102f5c4b58d3a76c4a6
    const avgTimeSlept = await db('sleep')
        .avg('timeSlept as avgTimeSlept')
        .whereBetween('date', [sixDaysback.toString(), today.toString()])
        .andWhere('user_id', id)
        .first();
    return { avgTimeSlept: Math.round(avgTimeSlept.avgTimeSlept) };
}
=======
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
>>>>>>> 2d22efd9a692537994fafd241766113380edf658
