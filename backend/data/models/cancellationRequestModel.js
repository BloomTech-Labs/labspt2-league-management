const db = require('../dbConfig.js');

module.exports = {
    getRequests: (gameId) => {
        return db('cancellation_requests').where('game_id',gameId)
    },

    makeRequest: (game) =>{
        return db('cancellation_requests').insert(game,'id');
    },

    editRequest: (id, game) =>{
        return db('cancellation_requests').where('game_id', id).update(game);
    },
}