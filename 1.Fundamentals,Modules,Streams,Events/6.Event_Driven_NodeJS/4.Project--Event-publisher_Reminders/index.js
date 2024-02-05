import { Publisher, Subscriber } from "./PubSub.js";
const publisher = new Publisher();
const subscriber1 = new Subscriber("event1");
const subscriber2 = new Subscriber("event2");

publisher.publishReminder("event1", "Event 1 is starting soon!...");
publisher.publishReminder("event2", "Event 2 is starting soon!...");
