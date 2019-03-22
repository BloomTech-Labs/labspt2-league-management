exports.seed = function(knex, Promise) {
  return knex('league_type').insert([
    { title: 'Male' },
    { title: 'Female' },
    { title: 'Co-ed' },
    { title: 'Kids' }
  ]);
};
