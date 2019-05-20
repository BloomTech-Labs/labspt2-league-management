const db = require('../dbConfig.js');

module.exports = {
  searchLeagues: () => {
    return db('league');
  },

  getLeaguesByUser: user => {
    return db('league')
      .where('admin_user_id', user.id)
      .orderBy('id');
  },

  getLeaguesByName: name => {
    return db('league')
      .join('users', 'league.admin_user_id', '=', 'users.id')
      .select(
        'league.id',
        'league.name',
        'users.first_name',
        'users.last_name',
        'users.email'
      )
      .where('league.name', name);
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
