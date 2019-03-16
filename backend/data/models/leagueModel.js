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
    },

    update: (id, league) =>{
        return db('league').where({id}).update(league);
    },

    remove: (id) =>{
        db('league').where({id}).del();
    }
}