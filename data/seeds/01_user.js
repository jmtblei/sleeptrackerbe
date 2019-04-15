
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'benson', password: '$2a$12$HH90M5WgU7jVDUcl2hN82O7puASyTPgTm3ZZ.C0iKiCQAe5sBsMIm', fullname: 'Benson Lei', email: 'Blei@gmail.com'},
        {id: 2, username: 'jacob', password: '$2a$12$ZBqUGG0i1PMXnkQNRxTYIeUU3S8YGhzoBikzbZmBQWgjpQ4q1CUxu', fullname: 'Jacob McFaul', email: 'JMcFaul@gmail.com'},
        {id: 3, username: 'giacomo', password: '$2a$12$K2Hov/08LJLvESCqmS4uxOjQoieKeIa8NumSbOApWFDhVFWGH9e3m', fullname: 'Giacomo Benati', email: 'GBenati@gmail.com'},
        {id: 4, username: 'jake', password: 'esveld', fullname: 'Jake Esveld', email: 'JEsveld@gmail.com'},
        {id: 5, username: 'peter', password: 'pham', fullname: 'Peter Pham', email: 'GBenati@gmail.com'},
        {id: 6, username: 'tyler', password: 'biswell', fullname: 'Tyler Biswell', email: 'TBiswell@gmail.com'}
      ]);
    });
};
