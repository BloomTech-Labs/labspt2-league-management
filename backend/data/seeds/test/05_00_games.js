exports.seed = function(knex, Promise) {
  return knex('game').insert([
    { league_id: 1, home_team_id: 1, away_team_id: 2 },
    { league_id: 2, home_team_id: 3, away_team_id: 4 }
  ]);
};
