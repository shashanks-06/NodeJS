import http from "http";
import url from "url";

http
  .createServer(function (req, res) {
    // Part 1 -- GET and POST
    
    if (req.method === "GET") {
      res.write("GET request received");
    } else if (req.method === "POST") {
      let body = "";

      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        body = JSON.parse(body);
        console.log(body);
        console.log(body.username);
      });
    }
    //send post request on postman.
    res.end();
  })
  .listen(80);
