exports.up = function(knex, Promise) {
  return knex.schema.createTable('league', league => {
    league.increments();
    league
      .string('name')
      .notNullable()
      .unique();
    league
      .integer('admin_user_id')
      .unsigned()
      .notNullable();
    // league
    //   .foreign('admin_user_id')
    //   .references('id')
    //   .inTable('users')
    //   .onDelete('cascade');
    league.integer('teams_game_count');
    league.string('game_length');
    league.string('start_day');
    league.string('monday_start_time');
    league.string('monday_end_time');
    league.string('tuesday_start_time');
    league.string('tuesday_end_time');
    league.string('wednesday_start_time');
    league.string('wednesday_end_time');
    league.string('thursday_start_time');
    league.string('thursday_end_time');
    league.string('friday_start_time');
    league.string('friday_end_time');
    league.string('saturday_start_time');
    league.string('saturday_end_time');
    league.string('sunday_start_time');
    league.string('sunday_end_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('league');
};
