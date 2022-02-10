const cfg = require('../config')

const passport = require('./index').passport;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: cfg.strategy.google.client_id,
    clientSecret: cfg.strategy.google.client_secret,
    callbackURL: cfg.strategy.google.callback_url
  },
  function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));