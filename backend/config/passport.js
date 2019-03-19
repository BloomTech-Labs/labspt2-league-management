const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const userModel = require('../data/models/userModel');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => {
      // const user = {
      //   id: profile.id,
      //   email: profile.emails[0].value,
      //   name: profile.displayName,
      //   token: accessToken
      // };

      let err = null;
      let user = null;
      userModel.findByEmail(profile.emails[0].value).then(u => {
        if (u) {
          user = u;
          if (user.google_id !== profile.id) {
            user.google_id = profile.id;
            userModel.update(user).then(count => {
              if (!count) {
                err = { message: 'Unable to update google_id' };
              }
            });
          }
          return done(err, user);
        } else {
          user = { email: profile.emails[0].value, google_id: profile.id };
          userModel.insert(user).then(ids => {
              if (!ids.length) {
                err = { message: 'Unable to create user' };
              }
            });
            return done(err, user);
        }
      })
      .catch(err => {
        return done(err, user);
      });
    }
  )
);
