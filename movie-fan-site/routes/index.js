require("dotenv").config();
const express = require("express");
const router = express.Router();

console.log(process.env.MOVIE_DB_API);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

module.exports = router;
