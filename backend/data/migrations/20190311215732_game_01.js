exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', game => {
    game.increments();
    game
      .integer('league_id')
      .unsigned()
      .notNullable();
    // game
    //   .foreign('league_id')
    //   .references('id')
    //   .inTable('league')
    //   .onDelete('cascade');
    game
      .integer('home_team_id')
      .unsigned()
      .notNullable();
    // game
    //   .foreign('home_team_id')
    //   .references('id')
    //   .inTable('team')
    //   .onDelete('cascade');
    game
      .integer('away_team_id')
      .unsigned()
      .notNullable();
    // game
    //   .foreign('away_team_id')
    //   .references('id')
    //   .inTable('team')
    //   .onDelete('cascade');
    game.datetime('start_time');
    game.datetime('end_time');
    game.integer('location_id').unsigned();
    // game
    //   .foreign('location_id')
    //   .references('id')
    //   .inTable('location')
    //   .onDelete('cascade');
    game.boolean('cancelled').defaultTo(false);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('game');
};
