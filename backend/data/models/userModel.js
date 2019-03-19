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

  findByUsername: username => {
    return db('users')
      .where('username', username)
      .first();
  },

  update: user => {
    return db('users')
      .where('email', user.email)
      .update(user);
  } 
};
