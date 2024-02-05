export class Subscriber {
  constructor(myEmitter) {
    myEmitter.on("greeting", (greeting) => {
      console.log(greeting);
    });
  }
}
