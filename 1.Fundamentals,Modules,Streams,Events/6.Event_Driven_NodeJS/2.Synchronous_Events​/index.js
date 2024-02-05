import { EventEmitter } from "events";
import { resolve } from "path";

const myEventEmitter = new EventEmitter();

function notifyConnection(ip) {
  console.log(ip + " connected to server  synchronously");
}

async function process(ip) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  console.log(ip + " has connected asynchronously after 1 sec");
}

myEventEmitter.on("connection", notifyConnection);
myEventEmitter.on("connection", process);

myEventEmitter.emit("connection", "127.0.0.1");
myEventEmitter.emit("connection", "192.168.0.1");
