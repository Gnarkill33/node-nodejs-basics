import { workerData, parentPort } from "node:worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
 n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
 try {
  if (workerData === undefined || workerData === null) {
   throw new Error("Can't read data");
  }

  const computationResult = nthFibonacci(workerData);

  parentPort.postMessage(computationResult);
 } catch (error) {
  parentPort.postMessage(error);
 }
};

sendResult();
