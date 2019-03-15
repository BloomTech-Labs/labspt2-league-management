const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'cgallone0',
          password: bcrypt.hashSync('rpXPv6MLe6', 4),
          email: 'cgallone0@soundcloud.com',
          first_name: 'Ceciley',
          last_name: 'Gallone',
          phone: '3777432587'
        },
        {
          username: 'afarrear1',
          password: bcrypt.hashSync('GDXoRdIwq5sm', 4),
          email: 'afarrear1@usa.gov',
          first_name: 'Athene',
          last_name: 'Farrear',
          phone: '4951690943'
        },
        {
          username: 'pbahl2',
          password: bcrypt.hashSync('5pO5emZSMx', 4),
          email: 'pbahl2@bizjournals.com',
          first_name: 'Pamella',
          last_name: 'Bahl',
          phone: '2075041820'
        },
        {
          username: 'crochford3',
          password: bcrypt.hashSync('XpJILoM', 4),
          email: 'crochford3@army.mil',
          first_name: 'Cullan',
          last_name: 'Rochford',
          phone: '3281152036'
        },
        {
          username: 'olabro4',
          password: bcrypt.hashSync('UH0mz3Wj', 4),
          email: 'olabro4@dion.ne.jp',
          first_name: 'Osbourn',
          last_name: 'Labro',
          phone: '5882607060'
        },
      ]);
    });
};
