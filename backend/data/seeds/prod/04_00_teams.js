exports.seed = function(knex, Promise) {
  return knex('team').insert([
    { name: 'Team A', league_id: 1, coach_user_id: 1 },
    { name: 'Team B', league_id: 1, coach_user_id: 3 },
    { name: 'Team C', league_id: 2, coach_user_id: 3 },
    {
      name: 'Team D',
      league_id: 2,
      coach_name: 'Non-User Coach',
      coach_email: 'non_user_coach@blah.com',
      coach_phone: '1234567890'
    }
  ]);
};
