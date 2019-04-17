const express = require('express');

const leagueModel = require('../data/models/leagueModel.js');

const router = express.Router();

router.post('/', (req, res) =>{
    const name = req.body;
    leagueModel
        .getLeaguesByName(name.name)
        .then(leagues => {
            res.json(leagues)
        })
        .catch(err =>{
            res.status(500).json({message:'Trouble getting the Searched Leagues', err})
        })
})

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


module.exports = router;