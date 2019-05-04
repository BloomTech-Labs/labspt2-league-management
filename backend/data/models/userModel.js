const db = require('../dbConfig.js');

module.exports = {
  insert: user => {
    return db('users').insert(user, 'id');
  },

  findByEmail: email => {
    return db('users')
      .where('email', email)
      .first();
  },

  findById: id => {
    return db('users')
      .where('id', id)
      .first();
  },

  findByUsername: username => {
    return db('users')
      .where('username', username)
      .first();
  },

  update: (uid, changes) => {
    return db('users')
      .where('id', uid)
      .update(changes);
  },

  findAllUsers: () => {
    return db('users')
      .select('email', 'id')
  }
};
