import net from "net";

const sockets = [];

function broadcast(data) {
  sockets.forEach((socket) => socket.write(data));
}

const server = net.createServer(function (socket) {
  sockets.push(socket);

  socket.on("data", function (data) {
    broadcast(data);
  });

  socket.on("error", function (err) {
    console.error(err);
  });
});

server.listen(8080, function () {
  console.log("Server is listening on port 8080");
});
