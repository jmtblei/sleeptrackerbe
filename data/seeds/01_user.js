
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'benson', password: '$2a$12$s81x6KdZPhEp6TZ3zLrUxO7Ztzo0SX0HvwUpmINWFGJeCTJZYeAQa', fullname: 'Benson Lei', email: 'Blei@gmail.com'},
        {id: 2, username: 'jacob', password: '$2a$12$sx6HoqBPo6XFRQi2h8F/.OIbhkU4.Y8iYpChdymkh7lx99Fi/MA4q', fullname: 'Jacob McFaul', email: 'Jmcfaul@gmail.com'},
        {id: 3, username: 'jake', password: '$2a$12$QIAHyEBmOUksI7yNcvu4MOrVf7RZRKRc96lKhCZJPudinJr6GBsUy', fullname: 'jake Esveld', email: 'Jesveld@gmail.com'},
        {id: 4, username: 'giacomo', password: '$2a$12$eD1VPDr.pJmzfvraL3A4tO4F5K8HfmPwxfP0zgaCoyWGXMat4mcuC', fullname: 'Giacomo Benati', email: 'Gbenati@gmail.com'},
        {id: 5, username: 'peter', password: '$2a$12$s81x6KdZPhEp6TZ3zLrUxO7Ztzo0SX0HvwUpmINWFGJeCTJZYeAQa', fullname: 'Peter Pham', email: 'Ppham@gmail.com'},
        {id: 6, username: 'tyler', password: '$2a$12$BQ08DPSqQ2OBlGXjivv/NebZNLGcz9jxAoqAx7HScX/pye38x.DMK', fullname: 'Tyler Biswell', email: 'Tbiswell@gmail.com'},
      ]);
    });
};
