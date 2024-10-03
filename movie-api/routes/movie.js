var express = require("express");
var router = express.Router();
const movieDetails = require("../data/movies");

router.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  const movie = movieDetails.find((movie) => movie.id.toString() === movieId);

  if (!movie) {
    res.json({ error: "Movie not found!" });
    return;
  }

  res.json(movie);
});

// router.get("/:top_rated", (req, res, next) => {});

// router.post("/:id/rating", (req, res, next) => {});

// router.delete("/:id/rating", (req, res, next) => {});

module.exports = router;
