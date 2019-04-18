const db = require('../dbConfig.js');

module.exports = {
    getRequests: (leagueId) => {
        return db('cancellation_requests').where('league_id', leagueId)
    },

    makeRequest: (request) =>{
        return db('cancellation_requests').insert(request,'id');
    },

    editRequest: (id, request) =>{
        return db('cancellation_requests').where('id', id).update(request);
    },
}