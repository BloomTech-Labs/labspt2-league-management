const db = require('../dbConfig.js');

module.exports = {
  getRequests: leagueId => {
    return db.raw(
      `select t2.*, team.name as away_team_name from team join
        (select t1.*, team.name as home_team_name from team join
        (select cr.*, g.league_id, g.home_team_id, g.away_team_id, g.start_time, g.end_time, g.location_id, g.cancelled, g.pending_cancelled from cancellation_requests as cr 
        join game as g on cr.game_id = g.id where league_id = ${leagueId}) t1
        on team.id = t1.home_team_id) t2
        on team.id = t2.away_team_id
        order by start_time;`
    );
  },

  makeRequest: request => {
    return db('cancellation_requests').insert(request, 'id');
  },

  editRequest: (id, request) => {
    console.log('editRequest(): id', id);
    console.log('editRequest(): request', request);
    return db('cancellation_requests')
      .where('id', id)
      .update(request);
  }
};
