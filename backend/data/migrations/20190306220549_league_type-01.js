exports.up = function(knex, Promise) {
  return knex.schema.createTable('league_type', league_type => {
    league_type.increments();
    league_type
      .string('title')
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('league_type');
};
