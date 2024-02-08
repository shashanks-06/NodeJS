import http from "http";
import url from "url";

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    console.log(q.query);

    res.writeHead(200, { "Content-Type": "type/html" });
    res.write("Hello World");
    res.end();
  })
  .listen(80);

//localhost/test?param1=a
