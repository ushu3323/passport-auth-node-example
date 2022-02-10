const passport = require('passport');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// Setup strategies
require('./google');

module.exports = {
  passport
};