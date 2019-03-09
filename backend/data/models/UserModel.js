const db = require('../dbConfig.js');

module.exports = {
    insert: (user) => {
        return db('users').insert(user, 'id');
    },

<<<<<<< HEAD
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
=======
    findByEmail: (email) => {
        return db('users').where('email', email);
    },
};
>>>>>>> d9a4a7a9ac8410abc6713bf4b5659560d3de18ad