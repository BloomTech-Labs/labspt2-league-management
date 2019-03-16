const express = require('express');

const authenticate = require('../middleware/authenticate.js');
const leagueModel = require('../data/models/leagueModel.js');

const router = express.Router();

router.use(authenticate);

router.post('/', (req, res) => {
  const league = req.body;
  leagueModel
    .insertLeague(league)
    .then(ids => {
      leagueModel.findById(ids[0])
      .then(newLeague =>{
          res.status(201).json(newLeague);
      })
      .catch(err =>{
          res.status(404).json({error:"Trouble finding new league"})
      })
    })
    .catch(err => {
      res.status(500).json({ error:"Problem adding new league", err });
    });
});

router.get('/', (req, res) =>{
    leagueModel
        .getAll()
        .then(leagues =>{
            res.json(leagues)
        }).catch(err =>{
            res.status(500).json({error:"Cannot get all leagues", err})
        })
})

router.get('/:id', (req, res) =>{
  const { id } = req.params;
  leagueModel.findById(id)
  .then(league =>{
    if(league){
      res.json(league)
    }else{
      res.status(404).json({message:"The league with the specified id does not exist!"})
    }
  }).catch(err =>{
      res.status(500).json({error:"Trouble getting the League", err})
  })
})

router.put('/:id', (req, res) =>{
  const { id } = req.params;
  const league = req.body;
    if(league.name && league.admin_user_id && league.type){
      leagueModel.update(id, league)
      .then(updatedLeague =>{
        if(updatedLeague){
          leagueModel.findById(id).then(leagues =>{
            res.json(leagues)
          }).catch(err =>{
            res.status(500).json({error:"Could not return updated League", err})
          })
        }else{
          res.status(404).json({error:"The league with the specified id does not exist!"})
        }
      }).catch(err =>{
        res.status(500).json({error:"The league could not be modified!", err})
      })
    }else{
      res.status(400).json({message:"You are missing required league information!"})
    }
})

router.delete('/:id',(req, res)=>{
  const { id } = req.params;
  leagueModel.remove(id).then(removed =>{
      if(removed){
        res.json({message:"The league was successfully completed!"})
      }else {
        res.status(500).json({message:"The league does not exist!"})
      }
    }).catch(err =>{
      res.status(500).json({error:"The league could not be removed!"})
    })
})

module.exports = router;
