import { Worker } from "worker_threads";

const runFibonnaci = (nums) => {
  let length = nums.length;

  let size = Int32Array.BYTES_PER_ELEMENT * length;

  let sharedBuffer = new SharedArrayBuffer(size);

  let sharedArray = new Int32Array(sharedBuffer);

  // Store the original index of each number
  let indexedNums = nums.map((num, index) => ({ num, index }));

  for (let i = 0; i < length; i++) {
    Atomics.store(sharedArray, i, indexedNums[i].num);
    // "Atomics" provides a way to consistently load and store data, when multiple processes
    // works with the same shared piece of memory.

    let worker = new Worker("./worker.js");

    worker.once("message", (message) => {
      // When a message is received from a worker, log it along with its original index
      console.log(
        `Fibonacci of ${indexedNums[i].num} at index ${indexedNums[i].index}: ${message}`
      );
    });

    worker.postMessage({ data: sharedArray, index: i });
  }
};

runFibonnaci([50, 20, 21, 24, 4]);
