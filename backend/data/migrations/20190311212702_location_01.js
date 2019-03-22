exports.up = function(knex, Promise) {
  return knex.schema.createTable('location', location => {
    location.increments();
    location.string('location_street1', 128).notNullable();
    location.string('location_street2', 128);
    location.string('city', 128).notNullable();
    location.string('state', 128).notNullable();
    location.string('zipcode', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('location');
};
