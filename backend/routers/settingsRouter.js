const express = require('express');
const bcrypt = require('bcryptjs');

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

router.post('/password', (req, res) => {
  const uid = req.user.id;
  const pwUpdate = req.body;
  
  const change = { password: bcrypt.hashSync(pwUpdate.newPassword, 4) };

  userModel
    .findById(uid)
    .then(user => {
      if (user && bcrypt.compareSync(pwUpdate.oldPassword, user.password)) {
        userModel
          .update(uid, change)
          .then(count => {
            if (count) {
              res.json({ message: 'Password changed' });
            } else {
              res.json({ message: 'Failed to change password' });
            }
          })
          .catch(err => {
            res.status(500).json({ message: 'Server error' });
          });
      } else {
        res.status(401).json({ message: 'Invalid password' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = router;