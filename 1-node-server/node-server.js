const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(`--> A request was made to "${req.url}"`);

  if (req.url === "/") {
    const homePage = fs.readFileSync("home.html");

    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();

    return;
  }

  if (req.url === "/node-logo.png") {
    const nodeLogoImg = fs.readFileSync("node-logo.png");

    res.writeHead(200, { "content-type": "image/png" });
    res.write(nodeLogoImg);
    res.end();

    return;
  }

  if (req.url === "/style.css") {
    const stylesheet = fs.readFileSync("style.css");

    res.writeHead(200, { "content-type": "text/css" });
    res.write(stylesheet);
    res.end();

    return;
  }

  const errorPage = fs.readFileSync("error.html");

  res.writeHead(404, { "content-type": "text/html" });
  res.write(errorPage);
  res.end();
});

server.listen(3000);
