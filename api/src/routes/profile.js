const { sendNotFound } = require('../controllers');
const { isLoggedIn } = require('../middlewares/auth');

const router = require('express').Router();

router.get('/me', isLoggedIn, (req, res) => {
  const user = {
    id: req.user.id,
    displayName: req.user.displayName,
    name: req.user.name,
    emails: req.user.emails,
    photos: req.user.photos,
    provider: req.user.provider
  }
  res.json({statusCode: 200, error: false, user});
});


const isAdmin = (req, res, next) => {
  next()
}

router.get('/:userid', sendNotFound, isLoggedIn, isAdmin)

module.exports = router;