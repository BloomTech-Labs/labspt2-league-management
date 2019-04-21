const db = require('../dbConfig.js');

module.exports = {
    getRequests: (leagueId) => {
        return db.raw(`select t2.*, team.name as away_team_name from team join
        (select t1.*, team.name as home_team_name from team join
        (select * from cancellation_requests as cr 
        join game as g on cr.game_id = g.id where league_id = ${leagueId}) t1
        on team.id = t1.home_team_id) t2
        on team.id = t2.away_team_id
        order by start_time;`);
    },

    makeRequest: (request) =>{
        return db('cancellation_requests').insert(request, 'id');
    },

    editRequest: (id, request) =>{
        return db('cancellation_requests').where('id', id).update(request);
    },
}