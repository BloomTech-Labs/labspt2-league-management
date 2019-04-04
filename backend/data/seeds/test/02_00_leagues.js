exports.seed = function(knex, Promise) {
  return knex('league').insert([
    { name: 'League A', admin_user_id: 1 },
    { name: 'League B', admin_user_id: 2 }
  ]);
};
