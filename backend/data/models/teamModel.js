const db = require('../dbConfig.js');

module.exports = {
  getTeamsByUser: user => {
    return db('team').where('coach_user_id', user.id);
  }
};
