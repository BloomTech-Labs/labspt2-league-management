const db = require('../dbConfig.js');

module.exports = {
    getAll: (user) =>{
        return db('league')
    },

    insertLeague: (league) =>{
        return db('league').insert(league)
    },

    findById: (id) =>{
        return db('league').where({id}).first()
    }
}