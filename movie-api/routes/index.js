var express = require("express");
var router = express.Router();
const movies = require("../data/movies");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Index" });
});

router.get("/most_popular", (req, res, next) => {
  let page = req.query.page;

  if (page === undefined) page = 1;

  const popMovies = movies.filter((movie) => movie.most_popular);
  const indexToStart = (page - 1) * 20;
  const indexToEnd = indexToStart + 19;
  const popMoviesForCurrPage = popMovies.slice(indexToStart, indexToEnd);

  res.json({ results: popMoviesForCurrPage });
});

module.exports = router;
