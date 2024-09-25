const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
    return;
  }

  res.writeHead(404, { "content-type": "text/html" });
  res.write("<p>Not found!</p>");
  res.end();
});

server.listen(3000);
