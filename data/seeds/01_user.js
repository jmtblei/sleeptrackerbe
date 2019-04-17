
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'benson', password: '$2a$12$x09gmtgqr39JTeJcG.mN.ebtVoMcSLlWsaMiCt75iO6Jxy680J72m', fullname: 'Benson Lei', email: 'Blei@gmail.com'},
        {id: 2, username: 'jacob', password: '$2a$12$.Ci1VlQ8Es53gEeshJoLeOsDp1JYuMKqQtMAbFi9jRalx57CnW8pS', fullname: 'Jacob McFaul', email: 'Jmcfaul@gmail.com'},
        {id: 3, username: 'jake', password: '$2a$12$S3MjkSNHpwXQTGZM.hFDreu/T/kUCn6XS5I7yYJBvko2RKHkgcjLm', fullname: 'jake Esveld', email: 'Jesveld@gmail.com'},
        {id: 4, username: 'giacomo', password: '$2a$12$XIy9ZMEO8B5IoFvcqHKpQOh2rWwur1INkAGFjc2eKp83geGZtPOL.', fullname: 'Giacomo Benati', email: 'Gbenati@gmail.com'},
        {id: 5, username: 'peter', password: '$2a$12$3BzJbZlVyC76XtZ.L/6P1OvpzPQVFEzdI4ofpWiraXUHe1GVoblvG', fullname: 'Peter Pham', email: 'Ppham@gmail.com'},
        {id: 6, username: 'tyler', password: '$2a$12$aN2KPbK7u1pdS6KmMdepyeJ0jkrTmuNNMOleZh86lgAhxEEzgkG9.', fullname: 'Tyler Biswell', email: 'Tbiswell@gmail.com'},
      ]);
    });
};
