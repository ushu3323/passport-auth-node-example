require('dotenv').config()

const express = require('express');
const cors = require('cors');
const cookie_session = require('cookie-session');
const passport = require('passport');

require('./auth/google');

const cfg = require('./config');
const app = express();
const port = cfg.express.port

app.use(
  express.urlencoded({ extended: false }),
  express.json(),
  cookie_session({
    name: 'auth-sp3',
    keys: ['key-1', 'key-2'],
  })
);

// Initializes passport and passport sessions
app.use(
  passport.initialize(),
  passport.session()
)

// Adds routes listeners
app.use(require('./routes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
