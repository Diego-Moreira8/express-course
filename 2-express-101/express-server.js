const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.all("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

app.all("*", (req, res) => {
  res.send("<h1>Page not found</h1>");
});

app.listen(PORT);
console.log(`The server is listening on port ${PORT}.`);
