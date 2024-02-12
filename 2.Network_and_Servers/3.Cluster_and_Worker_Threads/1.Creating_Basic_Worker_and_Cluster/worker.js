import cluster from "cluster";
import http from "http";

const numCpus = 4;

if (cluster.isPrimary) {
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer(function (req, res) {
      res.writeHead(200);
      res.end("Process " + process.pid + " says Hello!");
    })
    .listen(8000);
}
