const { app } = require('./app.js');
const path = require('path');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('./database');

// const { Router } = require('express'); commented these 2 lines and the logout part at the bottom
// const tester = Router();


require('dotenv').config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate({
        where: { googleId: profile.id },
        // defaults: { googleId: profile.id, username: 'Mr.Krabbs' },
      })
        .then((user) => {
          done(null, user);
        })
        .catch((err) => {
          console.error('Failed to find or create user:', err);
        });
    }
  )
);

// Consent Screen
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

// Success/Fail login attempt
app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/',
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/login', (req, res) => {
  res.render('login');
});

/**************** LOGOUT *******************/
// app.post('/logout', (req, res, next) => {
//   req.logout(err).then(() => res.redirect('/').catch((err) => next(err)));
// });

module.exports = {
  app,
};
