exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('league')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('league').insert([
        { name: 'League A', admin_user_id: 1, league_type_id: 3 },
        { name: 'League B', admin_user_id: 2, league_type_id: 1 }
      ]);
    });
};
