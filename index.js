const { Worker } = require("worker_threads");

function chunkify(array, n) {
  let chunks = [];
  for (let i = n; i > 0; i--) {
    chunks.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return chunks;
}

function run(jobs, concurrentWorkers) {
  const chunks = chunkify(jobs, concurrentWorkers);

  const tick = performance.now();
  let completedWorkers = 0;

  chunks.forEach((data, i) => {
    const worker = new Worker("./worker.js");
    worker.postMessage(data);
    worker.on("message", () => {
      console.log(`Worker ${i} completed`);
      completedWorkers++;
      if (completedWorkers === concurrentWorkers) {
        console.log(
          `${concurrentWorkers} workers took ${
            performance.now() - tick
          }ms to complete`
        );
        process.exit();
      }
    });
  });
}

const jobs = Array.from({ length: 100 }, () => 1e9);

// run(jobs, 2);
// run(jobs, 4);
// run(jobs, 8);
run(jobs, 16);
