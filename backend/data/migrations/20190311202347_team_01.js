exports.up = function (knex, Promise) {
    return knex.schema.createTable('team', team => {
        team.increments();
        team
            .string('name', 128)
            .notNullable()
        team
            .integer('league_id')
            .unsigned()
            .notNullable();
        team
            .foreign('league_id')
            .references('id')
            .on('league');
        team
            .boolean('link_coach')
            .defaultTo(false);
        team
            .integer('coach_user_id')
            .unsigned()
        team
            .foreign('coach_user_id')
            .references('id')
            .on('users')
        team
            .string('coach_name', 128)
        team
            .string('coach_email', 128)
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