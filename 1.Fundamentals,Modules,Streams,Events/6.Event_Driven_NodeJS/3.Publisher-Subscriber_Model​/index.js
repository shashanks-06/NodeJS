import { Publisher } from "./Publisher.js";
import { Subscriber } from "./Subscriber.js";

import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

const publisher = new Publisher();
const subscriber = new Subscriber(myEmitter);
const subscriber2 = new Subscriber(myEmitter);

publisher.publishMessage(myEmitter);
