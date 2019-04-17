const db = require('../dbConfig.js');

module.exports = {
  getGamesByLeague: leagueId => {
    // return db('game').where('league_id', leagueId);
    return db.raw(
      `select t1.*, t2.away_team_name as away_team_name from (select game.*, team.name as home_team_name from game join team on team.id = game.home_team_id where game.league_id = ${leagueId}) t1 join (select game.*, team.name as away_team_name from game join team on team.id = game.away_team_id where game.league_id = ${leagueId}) t2 on t1.id = t2.id`
    );
  },

  getGamesByTeam: teamId => {
    return db.raw(
      ``
    );
  },

  insert: games => {
    return db('game').insert(games, 'id');
  },
  updateGame: (id, game) => {
    return db('game')
      .where('id', id)
      .update(game);
  }
};
