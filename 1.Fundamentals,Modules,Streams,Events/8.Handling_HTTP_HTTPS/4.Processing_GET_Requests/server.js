import http from "http";
import url from "url";

http
  .createServer(function (req, res) {
    if (req.method === "GET") {
      res.write("GET request received");
    } else {
      res.write("Other request received");
    }
    res.end();
  })
  .listen(80);

//Send request in PostMan Agent and get response on it.
