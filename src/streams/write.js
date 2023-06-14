import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const write = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  const fileToWrite = path.join(dirname, "files", "fileToWrite.txt");

  const writableStream = fs.createWriteStream(fileToWrite);

  process.stdin.pipe(writableStream);
};

await write();
