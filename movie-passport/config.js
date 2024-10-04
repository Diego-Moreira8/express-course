require("dotenv").config();

module.exports = {
  clientID: process.env.GH_CLIENT_ID,
  clientSecret: process.env.GH_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth",
};
