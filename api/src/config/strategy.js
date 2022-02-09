require('dotenv').config()

const google = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  callback_url: process.env.CALLBACK_URL | "http://localhost:3000/auth/google/callback"
}


module.exports = {
  google
}