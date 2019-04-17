const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findSleepByUserId,
    getAvgTimeSlept
};

function find() {
    return db('user').select('id', 'username', 'password', 'fullName');
}

function findBy(sort) {
    return db('user').where(sort).first();
}

async function add(user) {
    const [id] = await db('user').insert(user);
    return findById(id);
}

function findById(id) {
    return db('user')
        .where({ id })
        .first();
}

function findSleepByUserId(id){
    return db('user')
<<<<<<< HEAD
        .select('sleep.id', 'sleep.user_id', 'user.fullname', 'sleep.timeSlept', 'sleep.wakeMood', 'sleep.sleepMood', 'sleep.date')
        .join('sleep', 'user.id', 'sleep.user_id')
        .where('user.id', id)
}
=======
    .select('sleep.id','sleep.user_id','user.fullname', 'sleep.timeSlept', 'sleep.wakeMood', 'sleep.sleepMood', 'sleep.date')
    .join('sleep', 'user.id', 'sleep.user_id' )
    .where('user.id', id)
}
<<<<<<< HEAD
>>>>>>> 9e1cb6a71f850a05a328a102f5c4b58d3a76c4a6
=======

async function getAvgTimeSlept(id) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    let sixDaysBack = today.getDate() - 6;
    let today = yyyy + '-' + mm + '-' + dd;
    let sixDaysBack = yyyy + '-' + mm + '-' + dd;
    if (dd < 10) {
    dd = '0' + dd;
    } 
    if (mm < 10) {
    mm = '0' + mm;
    } 
    console.log(today)
    // document.getElementById('DATE').value = today;
    const avgTimeSlept = await db('sleep')
        .avg('timeSlept as avgTimeSlept')
        .whereBetween('date', [sixDaysBack.toString(), today.toString()])
        .andWhere('user_id', id)
        .first();
    return { avgTimeSlept: Math.round(avgTimeSlept.avgTimeSlept) };
}
>>>>>>> 2d22efd9a692537994fafd241766113380edf658
