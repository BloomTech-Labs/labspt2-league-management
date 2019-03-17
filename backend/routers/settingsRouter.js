const express = require('express');

const authenticate = require('../middleware/authenticate.js');
const userModel = require('../data/models/userModel.js');

const router = express.Router();

router.use(authenticate);

router.get('/', (req, res) => {
  const email = req.user.email;
  userModel
    .getByEmail(email)
    .then(user => {
      delete user['password'];
      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ err: 'Server error' });
    });
});

module.exports = router;
