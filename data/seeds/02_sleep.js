
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('sleep').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sleep').insert([
        { id: 1, user_id: 1, timeSlept: 8, wakeMood: 3, sleepMood: 1, date: '2019-04-15' },
        { id: 2, user_id: 1, timeSlept: 7, wakeMood: 2, sleepMood: 2, date: '2019-04-14' },
        { id: 3, user_id: 1, timeSlept: 7, wakeMood: 1, sleepMood: 3, date: '2019-04-01' },
        { id: 4, user_id: 1, timeSlept: 6, wakeMood: 3, sleepMood: 3, date: '2019-04-01' },
        { id: 5, user_id: 1, timeSlept: 8, wakeMood: 2, sleepMood: 2, date: '2019-04-01' },
        { id: 6, user_id: 1, timeSlept: 5, wakeMood: 3, sleepMood: 4, date: '2019-04-01' },
        { id: 7, user_id: 1, timeSlept: 6, wakeMood: 2, sleepMood: 4, date: '2019-04-01' },
        { id: 8, user_id: 2, timeSlept: 8, wakeMood: 3, sleepMood: 2, date: '2019-04-01' },
        { id: 9, user_id: 2, timeSlept: 7, wakeMood: 4, sleepMood: 1, date: '2019-04-01' },
        { id: 10, user_id: 2, timeSlept: 8, wakeMood: 3, sleepMood: 2, date: '2019-04-01' },
        { id: 11, user_id: 2, timeSlept: 9, wakeMood: 4, sleepMood: 3, date: '2019-04-01' },
        { id: 12, user_id: 2, timeSlept: 8, wakeMood: 4, sleepMood: 2, date: '2019-04-01' },
        { id: 13, user_id: 2, timeSlept: 10, wakeMood: 3, sleepMood: 3, date: '2019-04-01' },
        { id: 14, user_id: 2, timeSlept: 8, wakeMood: 2, sleepMood: 4, date: '2019-04-01' },
        { id: 15, user_id: 2, timeSlept: 11, wakeMood: 2, sleepMood: 2, date: '2019-04-15' },
        { id: 16, user_id: 3, timeSlept: 4, wakeMood: 1, sleepMood: 2, date: '2019-04-14' },
        { id: 17, user_id: 3, timeSlept: 5, wakeMood: 3, sleepMood: 1, date: '2019-04-01' },
        { id: 18, user_id: 3, timeSlept: 8, wakeMood: 2, sleepMood: 3, date: '2019-04-01' },
        { id: 19, user_id: 3, timeSlept: 7, wakeMood: 3, sleepMood: 2, date: '2019-04-01' },
        { id: 20, user_id: 3, timeSlept: 8, wakeMood: 3, sleepMood: 3, date: '2019-04-01' },
        { id: 21, user_id: 3, timeSlept: 9, wakeMood: 4, sleepMood: 3, date: '2019-04-01' },
        { id: 22, user_id: 3, timeSlept: 5, wakeMood: 4, sleepMood: 4, date: '2019-04-01' },
        { id: 23, user_id: 3, timeSlept: 8, wakeMood: 4, sleepMood: 4, date: '2019-04-01' },
        { id: 24, user_id: 4, timeSlept: 6, wakeMood: 3, sleepMood: 4, date: '2019-04-01' },
        { id: 25, user_id: 4, timeSlept: 8, wakeMood: 2, sleepMood: 1, date: '2019-04-01' },
        { id: 26, user_id: 4, timeSlept: 8, wakeMood: 3, sleepMood: 2, date: '2019-04-01' },
        { id: 27, user_id: 4, timeSlept: 6, wakeMood: 1, sleepMood: 3, date: '2019-04-01' },
        { id: 28, user_id: 4, timeSlept: 7, wakeMood: 1, sleepMood: 2, date: '2019-04-01' },
        { id: 29, user_id: 4, timeSlept: 7, wakeMood: 2, sleepMood: 3, date: '2019-04-01' },
        { id: 30, user_id: 4, timeSlept: 8, wakeMood: 3, sleepMood: 2, date: '2019-04-01' },

      ]);
    });
};
