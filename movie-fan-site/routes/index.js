require("dotenv").config();
const express = require("express");
const router = express.Router();
const request = require("request");

// const API_KEY = process.env.MOVIE_DB_API;
const API_KEY = "123456789";
// const API_BASE_URL = "http://api.themoviedb.org/3";
const API_BASE_URL = "http://localhost:3030";
// const NOW_PLAYING_URL = `${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}`;
const NOW_PLAYING_URL = `${API_BASE_URL}/most_popular?api_key=${API_KEY}`;

router.use((req, res, next) => {
  res.locals.imageBaseUrl = "http://image.tmdb.org/t/p/w300";
  next();
});

/* GET home page. */
router.get("/", function (req, res, next) {
  request.get(NOW_PLAYING_URL, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);
    res.render("index", { parsedData: parsedData.results });
  });
});

router.get("/movie/:id", (req, res, next) => {
  const thisMovieId = req.params.id;
  const thisMovieUrl = `${API_BASE_URL}/movie/${thisMovieId}?api_key=${API_KEY}`;

  request.get(thisMovieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);
    res.render("single-movie", { parsedData });
  });
});

router.post("/search", (req, res, next) => {
  const userSearchedTerm = encodeURI(req.body.movieSearch);
  const cat = req.body.cat;
  const movieUrl = `${API_BASE_URL}/search/${cat}?query=${userSearchedTerm}&api_key=${API_KEY}`;

  request.get(movieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData);

    if (cat === "person") {
      parsedData.results = parsedData.results[0].known_for;
    }

    res.render("index", { parsedData: parsedData.results });
  });
});

module.exports = router;
