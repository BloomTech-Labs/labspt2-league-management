exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users
      .string('email', 128)
      .notNullable()
      .unique();
    users.string('username', 128).unique();
    users.string('password', 128);
    users.string('first_name', 128);
    users.string('last_name', 128);
    users.string('phone', 128);
    users.string('google_id', 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
