const db = require('../dbConfig.js');

module.exports = {
  getLeaguesByUser: user => {
    return db('league').where('admin_user_id', user.id);
  },

  findById: id => {
    return db('league')
      .where({ id })
      .first();
  },

  insert: (league, user) => {
    league.admin_user_id = user.id;
    return db('league').insert(league, 'id');
  },

  update: (id, league) => {
    return db('league')
      .where({ id })
      .update(league);
  },

  remove: id => {
    return db('league')
      .where({ id })
      .del();
  }
};
