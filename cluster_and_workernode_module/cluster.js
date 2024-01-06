const cluster = require("node:cluster");
const http = require("node:http");
const os = require("node:os");

console.log(os.cpus().length);

if (cluster.isMaster) {
  console.log(`Master Process ${process.pid} is running`);
  // create two workers by calling it twice
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker Process ${process.pid} is running`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead("200", { "Content-Type": "text/plain" });
      res.end("Home Page");
    } else if (req.url === "/slowpage") {
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead("200", { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });

  server.listen(3000, () => {
    console.log("listening on port 3000");
  });
}
