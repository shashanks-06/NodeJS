import http from "http";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello world");
    res.end();
  })
  .listen(80);
