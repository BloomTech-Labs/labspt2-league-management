exports.up = function (knex, Promise) {
    return knex.schema.createTable('team', team => {
        team.increments();
        team
            .string('name', 128)
            .notNullable()
            .unique();
        team
            .integer('league_id')
            .unsigned()
            .notNullable();
        team
            .foreign('league_id')
            .references('id')
            .on('league');
        team
            .boolean('link_coach');
        team
            .integer('coach_user_id')
            .unsigned()
            .notNullable();
        team
            .foreign('coach_user_id')
            .references('id')
            .on('user')
        team
            .string('coach_name', 128)
            .notNullable();
        team
            .string('coach_email', 128)
            .notNullable();
        team
            .string('coach_phone_number', 128);
        team
            .integer('wins')
            .unsigned();
        team
            .integer('losses')
            .unsigned();
        team
            .integer('ties')
            .unsigned();
    });
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('team');
};