exports.up = function(knex, Promise) {
  return knex.schema.createTable('league', league => {
    league.increments();
    league.string('name').notNullable();
    league
      .integer('admin_user_id')
      .unsigned()
      .notNullable();
    // league
    //   .foreign('admin_user_id')
    //   .references('id')
    //   .inTable('users')
    //   .onDelete('cascade');
    league
      .integer('league_type_id')
      .unsigned()
    // league
    //   .foreign('league_type_id')
    //   .references('id')
    //   .inTable('league_type')
    //   .onDelete('cascade');
    league.integer('teams_game_count');
    league.datetime('game_length');
    league.datetime('start_day');
    league.datetime('monday_start_time');
    league.datetime('monday_end_time');
    league.datetime('tuesday_start_time');
    league.datetime('tuesday_end_time');
    league.datetime('wednesday_start_time');
    league.datetime('wednesday_end_time');
    league.datetime('thursday_start_time');
    league.datetime('thursday_end_time');
    league.datetime('friday_start_time');
    league.datetime('friday_end_time');
    league.datetime('saturday_start_time');
    league.datetime('saturday_end_time');
    league.datetime('sunday_start_time');
    league.datetime('sunday_end_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('league');
};
