import http from "http";
import url from "url";
const users = [];

http
  .createServer(function (req, res) {
    // Part 1 -- POST and GET
    if (req.method === "POST") {
      let body = "";

      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        body = JSON.parse(body);

        const index = users.indexOf(users.username);
        if (index == -1) {
          users[body.username] = body.password;
        }
        console.log(users);
      });
    } else if (req.method === "GET") {
      const parse = url.parse(req.url);
      //   console.log(parse.query);
      console.log(users[parse.query]);
    }
      // Part 2 -- PUT and DELETE
      
    else if (req.method === "PUT") {
      let body = "";

      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        body = JSON.parse(body);
        users[body.username] = body.password;
        console.log(users);
      });
    } else if (req.method === "DELETE") {
      let body = "";

      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        body = JSON.parse(body);
        const index = users.indexOf(users.username);
        if (index > -1) {
          users.splice(index, 1);
        }
        console.log(users);
      });
    }
    res.end();
  })
  .listen(80);

//  localhost/user?username=Shashank
