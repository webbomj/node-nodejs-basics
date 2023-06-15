import os from "node:os";
import url from "node:url";
import path from "node:path";
import { Worker } from "node:worker_threads";

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const workerPath = path.join(dirname, "worker.js");

let counter = 0;

const performCalculations = async () => {
  const countyCPU = os.cpus().length;
  const resultArr = [];
  for (let index = 0; index < countyCPU; index += 1) {
    const worker = new Worker(workerPath, {
      workerData: { count: 10 + index },
    });
    worker.on("message", (msg) => {
      resultArr[index] = msg;
      counter += 1;
      if (counter === countyCPU) {
        console.log(resultArr);
      }
    });
  }

  return resultArr;
};

await performCalculations();
