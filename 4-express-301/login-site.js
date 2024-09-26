const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const app = express();

app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res, next) => {
  res.redirect("/login");
});

app.get("/login", (req, res, next) => {
  res.render("login");
});

app.post("/process_login", (req, res, next) => {
  const password = req.body.password;
  const username = req.body.username;

  if (password === "x") {
    res.cookie("username", username);
    res.redirect("/welcome");
    return;
  }

  res.redirect("/login?msg=fail");
});

app.get("/welcome", (req, res, next) => {
  res.render("welcome", { username: req.cookies.username });
});

app.get("/logout", (req, res, next) => {
  res.clearCookie("username");
  res.redirect("/login");
});

app.listen(3000);
