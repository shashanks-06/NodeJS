import net from "net";

const server = net.createServer(function (connection) {
  console.log("Connection Made!");
});

server.listen(8080, function () {
  console.log("Server is listening on port 8080");
});
