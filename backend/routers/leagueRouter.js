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



module.exports = router;
