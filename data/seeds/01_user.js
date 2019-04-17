
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'benson', password: '$2a$12$HH90M5WgU7jVDUcl2hN82O7puASyTPgTm3ZZ.C0iKiCQAe5sBsMIm', fullname: 'Benson Lei', email: 'Blei@gmail.com'},
        {id: 2, username: 'jacob', password: '$2a$12$jpYvRS8wGPFnLftokD2cBOGNF7tSFPuNCc5LvXG91uY/9dkIfGufC', fullname: 'Jacob McFaul', email: 'Jmcfaul@gmail.com'},
        {id: 4, username: 'giacomo', password: '$2a$12$3a8OCrilO4jlYggiEbzHWu9uALEw6GdHrFvbbQrwbtWHtGwM2xwYC', fullname: 'Giacomo Benati', email: 'Gbenati@gmail.com'},
        {id: 5, username: 'peter', password: '$2a$12$3BzJbZlVyC76XtZ.L/6P1OvpzPQVFEzdI4ofpWiraXUHe1GVoblvG', fullname: 'Peter Pham', email: 'Ppham@gmail.com'},
        {id: 6, username: 'tyler', password: '$2a$12$aN2KPbK7u1pdS6KmMdepyeJ0jkrTmuNNMOleZh86lgAhxEEzgkG9.', fullname: 'Tyler Biswell', email: 'Tbiswell@gmail.com'},
      ]);
    });
};
