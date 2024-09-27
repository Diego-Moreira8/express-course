var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const date = new Date(1997, 7, 2);

  res.set("Date", date);
  res.set("Content-type", "text/plain");
  res.render("index", { title: "Express" });
});

module.exports = router;
