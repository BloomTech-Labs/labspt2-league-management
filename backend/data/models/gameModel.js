const db = require('../dbConfig.js');

module.exports = {

  getGamesByLeague: (leagueId) =>{
      return db('game').where('league_id', leagueId);
  },

  insert: (games) =>{
      return db('game').insert(games, 'id');
  },
};