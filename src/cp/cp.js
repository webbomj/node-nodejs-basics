import cp from "node:child_process";
import path from "node:path";
import url from "node:url";

const spawnChildProcess = async (args) => {
  const filname = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filname);
  const scriptPath = path.join(dirname, "files", "script.js");

  const child = cp.fork(scriptPath, args);
  child.send(args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 3, 2]);
