import net from "net";

const server = net.createServer(function (socket) {
  socket.write("Hello Client!");

  socket.on("data", function (data) {
    console.log("Received: " + data.toString());
  });

  socket.on("error", function (err) {
    console.error(err);
  });

  socket.on("close", function () {
    console.log("Connection closed");
  });
});

server.listen(8080, function () {
  console.log("Server listening on port 8080.");
});
