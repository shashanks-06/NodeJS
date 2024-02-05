import { EventEmitter } from "events";

const myEventEmitter = new EventEmitter();

function notifyConnection(ip) {
  console.log(ip + " connected to server");
}

myEventEmitter.on("connection", notifyConnection);

myEventEmitter.emit("connection", "127.0.0.1");

// this is the whole process of event driven programming in nodeJs
//1. you emit events
//2. they go into the event loop
//3. the event loop sends them to event handler
//4. event handler takes care of them
