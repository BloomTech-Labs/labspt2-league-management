exports.up = function (knex, Promise) {
    return knex.schema.createTable(
        'cancellation_requests',
        cancellation_requests => {
            cancellation_requests.increments();
            cancellation_requests
                .integer('game_id')
                .unsigned()
                .notNullable();
            cancellation_requests
                .foreign('game_id')
                .references('id')
                .on('game');
            cancellation_requests
                .boolean('acknowledged')
                .notNullable();
        }
    );
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('cancellation_requests');
};
