const db = require('../dbConfig.js');

module.exports = {
  getTeamsByUser: user => {
    return db('team').where('coach_user_id', user.id);
  },

  getTeamsByLeague: (leagueId) =>{
      return db('team').where('league_id', leagueId);
  },

  insertTeam: (team) =>{
      return db('team').insert(team);
  }
};