import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

export class Publisher {
  constructor() {}

  publishReminder(eventName, message) {
    myEmitter.emit(eventName, message);
  }
}

export class Subscriber {
  constructor(reminder) {
    myEmitter.on(reminder, (message) => {
      console.log(message);
    });
  }
}
