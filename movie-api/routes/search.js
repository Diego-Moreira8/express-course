var express = require("express");
var router = express.Router();
const movies = require("../data/movies");
const people = require("../data/people");

function queryRequired(req, res, next) {
  const searchTerm = req.query.query;

  if (!searchTerm) {
    res.json({ msg: "Query is required" });
    return;
  }

  next();
}

router.use(queryRequired);

router.get("/movie", (req, res, next) => {
  const searchTerm = req.query.query;

  const results = movies.filter(
    (movie) =>
      movie.overview.includes(searchTerm) || movie.title.includes(searchTerm)
  );

  res.json(results);
});

router.get("/person", (req, res, next) => {
  const searchTerm = req.query.query;
  const results = people.filter((person) => person.name.includes(searchTerm));

  res.json(results);
});

module.exports = router;
