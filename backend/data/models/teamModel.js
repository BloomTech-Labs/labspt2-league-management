const db = require('../dbConfig.js');

module.exports = {
  getTeamsByUser: user => {
    return db('team')
      .where('coach_user_id', user.id)
      .orderBy('id');
  },

  getTeamsByLeague: leagueId => {
    return db('team')
      .where('league_id', leagueId)
      .orderBy('id');
  },

  getTeamById: id => {
    return db('team')
      .where('id', id)
      .orderBy('id');
  },

  insert: team => {
    return db('team').insert(team, 'id');
  },

  update: (id, team) => {
    return db('team')
      .where('id', id)
      .update(team);
  },

  remove: id => {
    return db('team')
      .where('id', id)
      .del();
  }
};
