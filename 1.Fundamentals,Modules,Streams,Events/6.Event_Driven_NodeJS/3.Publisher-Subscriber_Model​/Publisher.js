export class Publisher {
  constructor() {}

  publishMessage(myEmitter) {
    myEmitter.emit("greeting", "Hello!");
  }
}
