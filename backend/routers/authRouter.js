const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const queryString = require('query-string');

const authHelper = require('../helpers/authHelper');
const userModel = require('../data/models/userModel');

const router = express.Router();

const FRONTEND_URL = process.env.FRONTEND_URL;

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'], session: false })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { 
      failureRedirect: FRONTEND_URL + '/signin' 
    }),
    (req, res) => {
        delete req.user['password'];
        const token = authHelper.generateToken(req.user);
        res.redirect(FRONTEND_URL + "/authorize?token=" + token);
    }
);

router.post('/login', (req, res) => {
  const creds = req.body;
  userModel
    .findByEmail(creds.email)
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        delete user['password'];
        const token = authHelper.generateToken(user);
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error' });
    });
});

router.post('/register', (req, res) => {
  const creds = req.body;
  creds.password = bcrypt.hashSync(creds.password, 4);
  userModel
    .insert(creds)
    .then(ids => {
      if (ids.length) {
        res.status(201).json({ message: 'Success' });
      } else {
        res.status(400).json({ message: 'Unable to register user' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error' });
    });
});

module.exports = router;
