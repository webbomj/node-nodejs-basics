import path from "path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import url from "node:url";
import AJSON from "./files/a.json" assert { type: "json" };
import BJSON from "./files/b.json" assert { type: "json" };

import * as CJS from "./files/c.js";

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = AJSON;
} else {
  unknownObject = BJSON;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});