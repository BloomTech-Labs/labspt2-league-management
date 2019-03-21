const db = require('../dbConfig.js');

module.exports = {
    getLeaguesByUser: (user) =>{
        return db('league').where('admin_user_id', user.id)
    },

    insertLeague: (league, user) =>{
        league.admin_user_id = user.id
        return db('league').insert(league)
    },

    findById: (id) =>{
        return db('league').where({id}).first()
    },

    update: (id, league) =>{
        return db('league').where({id}).update(league);
    },

    remove: (id) =>{
        return db('league').where({id}).del();
    },

    getTeamsByLeague: (leagueId) =>{
        return db('team').where('league_id', leagueId)
    },

    insertTeam: (team) =>{
        return db('team').insert(team)
    }
}