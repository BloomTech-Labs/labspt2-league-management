const express = require('express');

const authenticate = require('../middleware/authenticate.js');
const leagueModel = require('../data/models/leagueModel.js');

const router = express.Router();

router.use(authenticate);

router.post('/', (req, res) => {
  const user = req.user;
  const league = req.body;
  console.log(league);
  leagueModel
    .insertLeague(league, user)
    .then(ids => {
      console.log(ids);
      leagueModel
        .findById(ids[0])
        .then(newLeague => {
          res.status(201).json(newLeague);
        })
        .catch(err => {
          res.status(404).json({ error: 'Trouble finding new league' });
        });
    })
    .catch(err => {
      res.status(500).json({ error: 'Problem adding new league', err });
    });
});

router.get('/', (req, res) => {
  const user = req.user;
  leagueModel
    .getLeaguesByUser(user)
    .then(leagues => {
      res.json(leagues);
    })
    .catch(err => {
      res.status(500).json({ error: 'Cannot get all leagues', err });
    });
});

router.get('/:lid', (req, res) => {
  const { lid } = req.params;
  leagueModel
    .findById(lid)
    .then(league => {
      if (league) {
        res.json(league);
      } else {
        res.status(404).json({
          message: 'The league with the specified id does not exist!'
        });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Trouble getting the League', err });
    });
});

router.put('/:lid', (req, res) => {
  const { lid } = req.params;
  const league = req.body;
  if (league.name && league.admin_user_id && league.type) {
    leagueModel
      .update(lid, league)
      .then(updatedLeague => {
        if (updatedLeague) {
          leagueModel
            .findById(lid)
            .then(leagues => {
              res.json(leagues);
            })
            .catch(err => {
              res
                .status(500)
                .json({ error: 'Could not return updated League', err });
            });
        } else {
          res.status(404).json({
            error: 'The league with the specified id does not exist!'
          });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: 'The league could not be modified!', err });
      });
  } else {
    res
      .status(400)
      .json({ message: 'You are missing required league information!' });
  }
});

router.delete('/:lid', (req, res) => {
  const { lid } = req.params;
  leagueModel
    .remove(lid)
    .then(removed => {
      if (removed) {
        res.json({ message: 'league has been deleted!' });
      } else {
        res.status(500).json({ message: 'league id does not exist' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'The league could not be removed!', err });
    });
});

module.exports = router;
