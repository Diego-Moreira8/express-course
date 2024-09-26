const path = require("path");
const express = require("express");
const helmet = require("helmet");

function validateUser(req, res, next) {
  // ...validation logic
  res.locals.validated = true;
  next();
}

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(validateUser);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", {
    msg: "Success",
    html: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png' />",
  });
});

app.listen(3000);
