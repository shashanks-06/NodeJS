import { parentPort } from "worker_threads";

parentPort.once("message", (event) => {
  const sharedArray = event.data;
  const index = event.index;

  const arrValue = Atomics.load(sharedArray, index);
  // "Atomics" provides a way to consistently load and store data, when multiple processes
  // works with the same shared piece of memory.

  const fibonacciValue = calculateFibonacci(arrValue);
  parentPort.postMessage(fibonacciValue);
});

const calculateFibonacci = (num) => {
  let a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;

    num--;
  }
  return b;
};
