import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { join, resolve } from 'node:path';

const performCalculations = async () => {
  const workerFile = join(import.meta.dirname, 'worker.js');
  const numCpus = cpus().length;
  const workers = [];
  const results = new Array(numCpus);
  for (let i = 10; i <= 10 + numCpus; i++) {
    workers.push(
      new Promise((resolve) => {
        const worker = new Worker(workerFile, { workerData: i });
        worker.on('message', (msg) => {
          results[i - 10] = msg;
          resolve();
        });

        worker.on('error', (msg) => {
          results[i - 10] = msg;
          resolve();
        });
      })
    );
  }
  await Promise.all(workers);
  console.log(results);
};

await performCalculations();
