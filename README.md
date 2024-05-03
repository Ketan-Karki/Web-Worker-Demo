# Web Worker Demo

This repository contains a small demo showcasing how web workers can be utilized in Node.js using the `worker_threads` module.

## Introduction

Web workers provide a way to run JavaScript code in background threads, separate from the main execution thread. This can be particularly useful for performing computationally intensive tasks without blocking the main thread, thus improving overall performance and responsiveness of web applications.

In this demo, it is demonstrated how to use web workers in a Node.js environment to parallelize tasks and leverage multiple CPU cores effectively.

## Files

### `index.js`

This file contains the main script responsible for distributing tasks among worker threads.

### `worker.js`

This file defines the logic executed by each individual worker thread.

## Usage

To run the demo, follow these steps:

1. Clone this repository to your local machine.
2. Make sure you have Node.js installed.
3. Navigate to the repository directory in your terminal.
4. Run `npm install` to install any dependencies.
5. Uncomment one of the `run(jobs, concurrentWorkers)` lines in `index.js` to specify the number of concurrent workers.
6. Run `node index.js` to execute the demo.

## Demo Overview

The `index.js` script generates an array of jobs (simulated computational tasks) and distributes them among multiple worker threads. Each worker thread, defined in `worker.js`, receives a chunk of jobs, performs the computation, and signals completion back to the main thread.

## Comparison and Benefits of Using Web Workers

Using web workers offers several benefits:

- **Improved Performance**: By offloading intensive tasks to separate threads, the main thread remains responsive, leading to a smoother user experience.
  
- **Utilization of Multiple CPU Cores**: Web workers allow leveraging multiple CPU cores efficiently, speeding up processing times for parallelizable tasks.
  
- **Non-Blocking Operations**: As web workers operate independently, they do not block the main thread. This prevents long-running tasks from causing delays or freezes in the user interface.

## Additional Resources

- Watch the demo tutorial on [Beyond Fireship YouTube Channel](https://www.youtube.com/watch?v=-JE8P2TiJEg).

## Performance Screenshots

Below are the screenshots showing the time taken by jobs to fulfill with different numbers of workers:

- ![1 Worker](https://github.com/Ketan-Karki/Web-Worker-Demo/assets/145958804/c3a9ebc9-dcc2-456d-b6f3-06b43c697e45)
- ![2 Workers](https://github.com/Ketan-Karki/Web-Worker-Demo/assets/145958804/d2deaddd-390a-4d18-8d6b-bf12054a564b)
- ![4 Workers](https://github.com/Ketan-Karki/Web-Worker-Demo/assets/145958804/2041b3fd-2fa1-403e-a5f5-fd712dd5ece0)
- ![8 Workers](https://github.com/Ketan-Karki/Web-Worker-Demo/assets/145958804/95b5f732-5cf1-4b48-8d31-bc7f0ae508de)
