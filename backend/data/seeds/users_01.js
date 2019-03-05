const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'eric',
          password: bcrypt.hashSync('1234', 16),
          email: 'eric@blah.com',
          first_name: 'Eric',
          last_name: 'Cartman',
          phone: '3031234567890'
        },
        {
          username: 'stan',
          password: bcrypt.hashSync('1234', 16),
          email: 'stan@blah.com',
          first_name: 'Stan',
          last_name: 'Marsh',
          phone: '3031234567890'
        },
        {
          username: 'kyle',
          password: bcrypt.hashSync('1234', 16),
          email: 'kyle@blah.com',
          first_name: 'Kyle',
          last_name: 'Broflovski',
          phone: '3031234567890'
        },
        {
          username: 'kenny',
          password: bcrypt.hashSync('1234', 16),
          email: 'kenny@blah.com',
          first_name: 'Kenny',
          last_name: 'McKormick',
          phone: '3031234567890'
        },
        {
          username: 'butters',
          password: bcrypt.hashSync('1234', 16),
          email: 'butters@blah.com',
          first_name: 'Butters',
          last_name: 'Stotch',
          phone: '3031234567890'
        }
      ]);
    });
};
