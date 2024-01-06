const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url == "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>html</h1>");
  } else if (req.url == "/api") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>api</h1>");
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end("<h1>bad request</h1>");
  }
});
server.listen(3000, () => {
  console.log("running on port 3000");
});
