exports.seed = function(knex, Promise) {
  return knex('league').insert([
    { name: 'League A', admin_user_id: 1, league_type_id: 3 },
    { name: 'League B', admin_user_id: 2, league_type_id: 1 }
  ]);
};
