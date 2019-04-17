const express = require('express');

const authenticate = require('../middleware/authenticate.js');
const teamModel = require('../data/models/teamModel.js');

const router = express.Router();

router.use(authenticate);

router.get('/', (req, res) => {
  const user = req.user;
  teamModel
    .getTeamsByUser(user)
    .then(teams => {
      res.json(teams);
    })
    .catch(err => {
      res.status(500).json({ error: 'Cannot retrieve teams', err });
    });
});

router.get('/:tid/schedule', (req, res) => {
  const { tid } = req.params;
  gameModel
    .getGamesByTeam(tid)
    .then(games => {
      res.json(games);
    })
    .catch(err => {
      res.status(500).json({ error: 'Cannot retrieve games by team', err });
    });
});

module.exports = router;
