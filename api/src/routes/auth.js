const express = require('express');
const passport = require('passport');
const middle = require('../middlewares/auth')
const router = express.Router();

router.get('/failed', (req, res, next) => {
  res.json({statusCode: 400, msg: "Auth failed", error: true})
})

router.get('/success', middle.isLoggedIn, (req, res, next) => {
  res.json({ statusCode: 200, msg: `successfully authorized`, user:req.user , error: false })
})

router.get('/logout', (req, res, next) => {
  req.session = null;
  req.logOut();
  res.redirect('/');
})

// Google Strategy

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/failed',
    successRedirect: '/auth/success'
  })
)

// Facebook Strategy

// LinkedIn Strategy

// GitHub Strategy

module.exports = router