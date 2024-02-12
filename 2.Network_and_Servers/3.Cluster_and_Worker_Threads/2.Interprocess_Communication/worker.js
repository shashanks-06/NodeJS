import cluster from "cluster";
import http from "http";

if (cluster.isPrimary) {
  const worker = cluster.fork();
  worker.send("Hello");
  worker.on("message", (msg) => {
    console.log(`MSG: ${msg} from worker#${worker.id}`);
  });
} else {
  process.on("message", (msg) => {
    process.send(msg);
  });
  process.send("Message from Worker");
}
