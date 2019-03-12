exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', game => {
    game.increments();
    game
      .string('name', 128)
      .notNullable()
      .unique();
    game
      .foreign('league_id')
      .references('id')
      .on('league');
    game
      .integer('league_id')
      .unsigned()
      .notNullable();
    game
      .foreign('home_team_id')
      .references('id')
      .on('team');
    game
      .integer('home_team_id')
      .unsigned()
      .notNullable();
    game
      .foreign('away_team_id')
      .references('id')
      .on('team');
    game
      .integer('away_team_id')
      .unsigned()
      .notNullable();
    game.datetime('start_time');
    game.datetime('end_time');
    game
      .foreign('location_id')
      .references('id')
      .on('location');
    game
      .integer('location_id')
      .unsigned()
      .notNullable();
    game.boolean('cancelled').notNullable();
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('game');
};
