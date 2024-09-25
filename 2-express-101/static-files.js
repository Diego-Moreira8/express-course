const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public")); // done!!!
app.use(express.static("node_modules")); // for example

app.listen(PORT);
console.log(`The server is listening on port ${PORT}.`);
