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
      console.log("leagueRouter, result", result);
      const games = result.map(game => {
          return game.rows ? game.rows : game;
      });
      console.log("leagueRouter, games", games);
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
  console.log(game);
  gameModel
    .updateGame(gid, game)
    .then(count => {
      console.log(count);
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
    .then(request => {
      res.json(request);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'Trouble getting cancellation requests!', err });
    });
});

router.post('/:lid/cancellations', (req, res) => {
  const gameId = req.body;

  cancellationRequestModel
    .makeRequest(gameId)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ error: 'Problem making request!', err });
    });
});

router.put('/:lid/cancellations/:cid', (req, res) => {
  const { lid } = req.params;
  const request = req.body;
  if (request.game_id) {
    cancellationRequestModel
      .editRequest(lid, request)
      .then(updatedRequest => {
        if (updatedRequest) {
              res.json({message:"Succesfully updated Request!"});
        } else {
          res.status(404).json({
            error: 'The request with the specified id does not exist!'
          });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: 'The request could not be modified!', err });
      });
  } else {
    res
      .status(400)
      .json({ message: 'You are missing required request information!' });
  }
});


module.exports = router;
