const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>GET Home Page</h1>");
});

app.post("/", (req, res) => {
  res.send("<h1>POST Home Page</h1>");
});

app.all("/", (req, res) => {
  res.send("<h1>'All' Home Page</h1>");
});

app.listen(PORT);
console.log(`The server is listening on port ${PORT}.`);
