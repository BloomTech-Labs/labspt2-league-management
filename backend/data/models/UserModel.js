const db = require('../dbConfig.js');

module.exports = {
  insert: user => {
    return db('users').insert(user, 'id');
  },

  findByEmail: email => {
    return db('users').where('email', email);
  },

  getByUsername: username => {
    return db('users')
      .select('username', 'email', 'first_name', 'last_name', 'phone')
      .from('users')
      .where('username', username)
      .first();
  }
};
