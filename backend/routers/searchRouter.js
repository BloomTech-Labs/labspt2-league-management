const express = require('express');

const leagueModel = require('../data/models/leagueModel.js');
const gameModel = require('../data/models/gameModel.js');
const userModel = require('../data/models/userModel.js');
const router = express.Router();

router.post('/', (req, res) => {
  const name = req.body;
  leagueModel
    .getLeaguesByName(name.name)
    .then(leagues => {
      res.json(leagues);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Trouble getting the Searched Leagues', err });
    });
});

//league search endpoint

router.get('/', (req, res) => {
  leagueModel
    .searchLeagues()
    .then(leagues => {
      res.json(leagues);
    })
    .catch(err => {
      res.status(500).json({ error: 'Cannot get all leagues', err });
    });
});

router.get('/:lid/schedule', (req, res) => {
  const { lid } = req.params;
  gameModel
    .getGamesByLeague(lid)
    .then(games => {
      res.json(games);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Trouble retrieving games for league', err });
    });
});

router.get('/users', (req, res) => {
  userModel
    .findAllUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: 'Cannot grab users', err });
    });
});
module.exports = router;
