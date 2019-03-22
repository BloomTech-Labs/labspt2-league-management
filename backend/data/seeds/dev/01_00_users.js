const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {
      username: 'admin_coach1',
      password: bcrypt.hashSync('1234', 4),
      email: 'admin_coach1@blah.com',
      first_name: 'Admin',
      last_name: 'Coach',
      phone: '1234567890'
    },
    {
      username: 'admin_only1',
      password: bcrypt.hashSync('1234', 4),
      email: 'admin_only1@blah.com',
      first_name: 'Admin',
      last_name: 'Only',
      phone: '1234567890'
    },
    {
      username: 'coach_only1',
      password: bcrypt.hashSync('1234', 4),
      email: 'coach_only1@blah.com',
      first_name: 'Coach',
      last_name: 'Only',
      phone: '1234567890'
    }
  ]);
};
