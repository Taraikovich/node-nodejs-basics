import { workerData, parentPort } from 'node:worker_threads';

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  try {
    parentPort.postMessage({
      status: 'resolve',
      result: nthFibonacci(workerData),
    });
  } catch {
    parentPort.postMessage({
      status: 'error',
      result: null,
    });
  }
};

sendResult();
