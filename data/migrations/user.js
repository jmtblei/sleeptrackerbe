
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', users => {
        users.increments();
        users.string("fullName", 100);
        users.string("email", 100);
        users
            .string("username", 32)
            .notNullable()
            .unique();
        users.string("password", 32).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user');
};
