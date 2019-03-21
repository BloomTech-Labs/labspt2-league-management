const db = require('../dbConfig.js');

module.exports = {
  getTeamsByUser: user => {
    return db('team').where('coach_user_id', user.id);
  },

  getTeamsByLeague: (leagueId) =>{
      return db('team').where('league_id', leagueId);
  },

  getTeamById: (id) =>{
      return db('team').where('id', id);
  },

  insert: (team) =>{
      return db('team').insert(team);
  },

  update: (id, team) =>{
      return db('team').where('id', id).update(team);
  },

  remove: (id) =>{
      return db('team').where('id', id).del();
  },
};