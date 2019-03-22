exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', game => {
    game.increments();
    game
      .integer('league_id')
      .unsigned()
      .notNullable();
    game
      .foreign('league_id')
      .references('id')
      .on('league');
    game
      .integer('home_team_id')
      .unsigned()
      .notNullable();
    game
      .foreign('home_team_id')
      .references('id')
      .on('team');
    game
      .integer('away_team_id')
      .unsigned()
      .notNullable();
    game
      .foreign('away_team_id')
      .references('id')
      .on('team');
    game.datetime('start_time');
    game.datetime('end_time');
    game.integer('location_id').unsigned();
    game
      .foreign('location_id')
      .references('id')
      .on('location');
    game.boolean('cancelled').defaultTo(false);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('game');
};
