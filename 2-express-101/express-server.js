const express = require("express");

const app = express();

app.all("*", (req, res) => {
  res.send(`<h1>Express Home Page</h1>`);
});

const PORT = 3000;
app.listen(PORT);
console.log(`The server is listening on port ${PORT}.`);
