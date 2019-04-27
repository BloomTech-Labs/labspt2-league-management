const express = require('express');

const authenticate = require('../middleware/authenticate.js');
const leagueModel = require('../data/models/leagueModel.js');
const teamModel = require('../data/models/teamModel.js');
const gameModel = require('../data/models/gameModel.js');
const cancellationRequestModel = require('../data/models/cancellationRequestModel.js');

const router = express.Router();

router.use(authenticate);

router.post('/', (req, res) => {
  const user = req.user;
  const league = req.body;
  // console.log(league);
  leagueModel
    .insert(league, user)
    .then(ids => {
      // console.log(ids);
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
  league.admin_user_id = req.user.id;
  if (league.name && league.admin_user_id) {
    leagueModel
      .update(lid, league)
      .then(updatedLeague => {
        if (updatedLeague) {
          leagueModel
            .findById(lid)
            .then(league => {
              res.json(league);
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

//The beginning of the league teams endpoints

router.post('/:lid/teams', (req, res) => {
  const { lid } = req.params;
  const team = req.body;
  team.league_id = lid;
  console.log(team);
  teamModel
    .insert(team)
    .then(ids => {
      teamModel
        .getTeamById(ids[0])
        .then(newTeam => {
          res.status(201).json(newTeam);
        })
        .catch(err => {
          res.status(404).json({ error: 'Trouble finding new league' });
        });
    })
    .catch(err => {
      res.status(500).json({ error: 'Problem adding new team!', err });
    });
});

router.get('/:lid/teams', (req, res) => {
  const { lid } = req.params;
  teamModel
    .getTeamsByLeague(lid)
    .then(teams => {
      res.json(teams);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Trouble retrieving teams for league', err });
    });
});

router.get('/:lid/teams/:tid', (req, res) => {
  const { tid } = req.params;
  teamModel
    .getTeamById(tid)
    .then(teams => {
      res.json(teams);
    })
    .catch(err => {
      res.status(500).json({ error: 'Trouble retrieving team', err });
    });
});

router.put('/:lid/teams/:tid', (req, res) => {
  const { lid, tid } = req.params;
  const team = req.body;
  team.league_id = lid;

  if (team.name && team.league_id) {
    teamModel
      .update(tid, team)
      .then(count => {
        if (count) {
          teamModel
            .getTeamById(tid)
            .then(team => {
              res.json(team);
            })
            .catch(err => {
              res
                .status(500)
                .json({ error: 'Could not return updated Team', err });
            });
        } else {
          res.status(404).json({
            error: 'The team with the specified id does not exist!'
          });
        }
      })
      .catch(err => {
        res.status(500).json({ error: 'The team could not be modified!', err });
      });
  } else {
    res
      .status(400)
      .json({ message: 'You are missing required team information!' });
  }
});

router.delete('/:lid/teams/:tid', (req, res) => {
  const { tid } = req.params;
  teamModel
    .remove(tid)
    .then(removed => {
      if (removed) {
        res.json({ message: 'Team has been deleted!' });
      } else {
        res.status(500).json({ message: 'Team id does not exist' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'The team could not be removed!', err });
    });
});

// The beginning of the league schedule endpoints

router.post('/:lid/schedule', (req, res) => {
  const { lid } = req.params;
  const games = req.body;
  games.forEach(function(element) {
    element.league_id = lid;
  });
  gameModel
    .insert(games)
    .then(ids => {
      gameModel
        .getGamesByLeague(lid)
        .then(schedule => {
          res.status(201).json(schedule);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: 'Trouble retrieving games for league', err });
        });
    })
    .catch(err => {
      res.status(500).json({ error: 'Problem adding games!', err });
    });
});

router.get('/:lid/schedule', (req, res) => {
  const { lid } = req.params;
  gameModel
    .getGamesByLeague(lid)
    .then(result => {
      const games = result.rows ? result.rows : result;
      res.json(games);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Trouble retrieving games for league', err });
    });
});

router.put('/:lid/schedule/:gid', (req, res) => {
  const { lid, gid } = req.params;
  const game = req.body;
  gameModel
    .updateGame(gid, game)
    .then(count => {
      res.json(count);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error updating schedule', err });
    });
});

// The beginning of the league game cancellation endpoints

router.get('/:lid/cancellations', (req, res) => {
  const { lid } = req.params;
  cancellationRequestModel
    .getRequests(lid)
    .then(result => {
      const requests = result.rows ? result.rows : result;
      res.json(requests);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Problem getting cancellation requests', err });
    });
});

router.post('/:lid/cancellations', (req, res) => {
  const request = req.body;
  cancellationRequestModel
    .makeRequest(request)
    .then(ids => {
      gameModel
        .updateGame(request.game_id, {
          pending_cancelled: true,
          cancelled: true
        })
        .then(count => {
          res.json({ ids, count });
        })
        .catch(err => {
          console.log('check');
          res.status(500).json({
            error: 'Problem set game pending cancellation to true',
            err
          });
        });
    })
    .catch(err => {
      console.log('check check');
      res
        .status(500)
        .json({ error: 'Problem creating cancellation request', err });
    });
});

router.put('/:lid/cancellations/:cid', (req, res) => {
  console.log('/:lid/cancellations/:cid');
  const { lid, cid } = req.params;
  console.log('lid: ', lid);
  console.log('cid: ', cid);
  const { isCancelled, cancellation } = req.body;
  console.log('isCancelled: ', isCancelled);
  console.log('Cancellation: ', cancellation);
  cancellationRequestModel
    .editRequest(cancellation.id, { acknowledged: true })
    .then(updatedRequest => {
      console.log('updatedRequest', updatedRequest);
      gameModel
        .updateGame(cancellation.game_id, {
          pending_cancelled: !isCancelled,
          cancelled: isCancelled
        })
        .then(count => {
          console.log('count', count);
          res.json(count);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: 'Problem updating game is cancelled', err });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Problem updating cancellation request', err });
    });
});

module.exports = router;
