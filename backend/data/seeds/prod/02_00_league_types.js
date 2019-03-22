exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('league_type')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('league_type').insert([
        { title: 'Male' },
        { title: 'Female' },
        { title: 'Co-ed' },
        { title: 'Kids' }
      ]);
    });
};
