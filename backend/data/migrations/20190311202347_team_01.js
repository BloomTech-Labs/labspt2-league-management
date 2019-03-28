exports.up = function(knex, Promise) {
  return knex.schema.createTable('team', team => {
    team.increments();
    team.string('name', 128).notNullable();
    team
      .integer('league_id')
      .unsigned()
      .notNullable();
    // team
    //   .foreign('league_id')
    //   .references('id')
    //   .inTable('league')
    //   .onDelete('cascade');
    team.integer('coach_user_id').unsigned();
    // team
    //   .foreign('coach_user_id')
    //   .references('id')
    //   .inTable('users')
    //   .onDelete('cascade');
    team.string('coach_name', 128);
    team.string('coach_email', 128);
    team.string('coach_phone', 128);
    team
      .integer('wins')
      .unsigned()
      .defaultTo(0);
    team
      .integer('losses')
      .unsigned()
      .defaultTo(0);
    team
      .integer('ties')
      .unsigned()
      .defaultTo(0);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('team');
};
