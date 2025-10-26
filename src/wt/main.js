import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { cpus } from "node:os";
import { Worker } from "node:worker_threads";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __workerPath = join(__dirname, "worker.js");

const performCalculations = async () => {
 const cpusInfo = cpus();
 const cpuCores = cpusInfo.length;
 const workers = [];

 for (let i = 0; i < cpuCores; i++) {
  const workerNumber = 10 + i;

  const promise = new Promise((resolve) => {
   const worker = new Worker(__workerPath, {
    workerData: workerNumber,
   });

   worker.on("message", (value) => {
    resolve({
     status: "resolved",
     data: value,
    });
   });

   worker.on("error", () => {
    resolve({
     status: "error",
     data: null,
    });
   });
  });

  workers.push(promise);
 }

 const workerResults = await Promise.all(workers);

 console.log(workerResults);
};

await performCalculations();
