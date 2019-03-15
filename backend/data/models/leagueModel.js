const db = require('../dbConfig.js');

module.exports = {
    getLeagueById: (id) =>{
        return db('league').where(id, 'admin_user_id')
    },

    insertLeague: (league) =>{
        return db('league').insert(league)
    }
}