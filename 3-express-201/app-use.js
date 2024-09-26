const express = require("express");
const app = express();

function validadeUser(req, res, next) {
  res.locals.validated = true;
  console.log("VALIDATED RAN");
  next();
}

app.use("/admin", validadeUser);

app.get("/", (req, res, next) => {
  res.send("<h1>Home page</h1>");
  console.log(res.locals.validated);
});

app.get("/admin", (req, res, next) => {
  res.send("<h1>Admin page</h1>");
  console.log(res.locals.validated);
});

app.listen(3000);
