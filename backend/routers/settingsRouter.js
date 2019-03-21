const express = require('express');

const authHelper = require('../helpers/authHelper');
const authenticate = require('../middleware/authenticate.js');
const userModel = require('../data/models/userModel.js');

const router = express.Router();

router.use(authenticate);

router.get('/', (req, res) => {
  const uid = req.user.id;
  userModel
    .findById(uid)
    .then(user => {
      delete user['password'];
      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ err: 'Server error' });
    });
});

router.put('/', (req, res) => {
  const uid = req.user.id;
  const userChanges = req.body;
  userModel
    .update(uid, userChanges)
    .then(count => {
      userModel.findById(uid)
        .then(user => {
          delete user['password'];
          const token = authHelper.generateToken(user);
          res.json({ token });
        })
        .catch(err => {
          res.status(500).json({ err: 'Server error' });
        });
    })
    .catch(err => {
      res.status(500).json({ err: 'Server error' });
    });
});

module.exports = router;