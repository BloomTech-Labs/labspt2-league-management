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
      console.log(profile.emails[0].value);
      userModel.findByEmail(profile.emails[0].value).then(u => {
        console.log('passport: userModel.findByEmail()');
        if (user) {
          console.log('passport: userModel.findByEmail(): if');
          user = u;
          console.log(user);
          if (user.google_id !== profile.id) {
            console.log('passport: userModel.findByEmail(): if: if');
            user.google_id = profile.id;
            userModel.update(user).then(count => {
              console.log('passport: userModel.findByEmail(): if: if: userModel.update()');
              if (!count) {
                console.log('passport: userModel.findByEmail(): if: if: userModel.update(): if');
                err = { message: 'Unable to update google_id' };
              }
              console.log('xa');
            });
          }
          console.log('xb');
          return done(err, user);
        } else {
          console.log('passport: userModel.findByEmail(): then: else');
          user = { email: profile.emails[0].value, google_id: profile.id };
          console.log(user);
          userModel.insert(user).then(ids => {
              console.log('passport: userModel.findByEmail(): then: else: userModel.insert()');
              if (!ids.length) {
                console.log('passport: userModel.findByEmail(): then: else: userModel.insert(): if');
                err = { message: 'Unable to create user' };
              }
              console.log('xc');
            });
            console.log('xd');
            return done(err, user);
        }
      })
      .catch(err => {
        console.log('passport: userModel.findByEmail(): catch');
        console.log(err);
        return done(err, user);
      });
    }
  )
);
