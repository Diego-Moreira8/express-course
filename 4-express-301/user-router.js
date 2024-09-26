const express = require("express");

let router = express.Router();

function validateUser(req, res, next) {
  res.locals.validated = true;
  next();
}

router.use(validateUser);

router.get("/", (req, res, next) => {
  res.json({ msg: "User router works!!!" });
});

module.exports = router;
