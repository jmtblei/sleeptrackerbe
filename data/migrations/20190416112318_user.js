exports.up = function (knex, Promise) {
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
        .createTable('sleep', sleep => {
            sleep.increments();
            sleep
                .integer("user_id").notNullable()
                .unsigned()
                .references("id")
                .inTable("user")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");

            sleep.integer("timeSlept").notNullable();
            sleep.integer("wakeMood").notNullable();
            sleep.integer("sleepMood").notNullable();
            sleep.date('date').notNullable();
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('user')
        .dropTableIfExists('sleep');;
};
