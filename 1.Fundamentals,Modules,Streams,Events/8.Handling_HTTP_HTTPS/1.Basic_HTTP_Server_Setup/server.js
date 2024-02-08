import http from "http";

http
  .createServer(function (req, res) {
    res.write("Hello World!");
    res.end();
  })
  .listen(80);

//run the server and Search localhost
