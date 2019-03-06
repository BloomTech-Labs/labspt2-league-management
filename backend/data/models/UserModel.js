const db = require('../dbConfig.js');

module.exports = {
    insert: (user) => {
        return db('users').insert(user, 'id');
    },

    findByEmail: (email) => {
        return db('users').where('email', email);
    },
};