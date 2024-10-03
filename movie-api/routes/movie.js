var express = require("express");
var router = express.Router();
const movieDetails = require("../data/movies");

function requireJSON(req, res, next) {
  if (!req.is("application/json")) {
    res.json({ msg: "Content type must be application/json" });
    return;
  }

  next();
}

router.param("movieId", (req, res, next) => {
  console.log("Someone hit a route that uses :movieId");
  next();
});

router.get("/top_rated", (req, res, next) => {
  let page = req.query.page === undefined ? 1 : req.query.page;

  if (!page) page = 1;

  const moviesSortedByRate = movieDetails.sort(
    (a, b) => b.vote_average - a.vote_average
  );
  const indexToStart = (page - 1) * 20;
  const indexToEnd = indexToStart + 19;
  const topRatedForCurrPage = moviesSortedByRate.slice(
    indexToStart,
    indexToEnd
  );

  res.json(topRatedForCurrPage);
});

router.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  const movie = movieDetails.find((movie) => movie.id.toString() === movieId);

  if (!movie) {
    res.json({ error: "Movie not found!" });
    return;
  }

  res.json({ ...movie, production_companies: [] });
});

router.post("/:movieId/rating", requireJSON, (req, res, next) => {
  const movieId = req.params.movieId;
  const userRating = parseFloat(req.body.value);

  if (userRating < 0.5 || userRating > 10) {
    console.log(userRating);
    res.json({ msg: "Rating must be a value between 0.5 and 10" });
    return;
  }

  res.json({ msg: "Thanks!!" });
});

module.exports = router;
