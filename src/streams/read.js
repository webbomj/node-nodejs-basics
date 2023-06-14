import fs from "node:fs";
import url from "node:url";
import path from "node:path";

const read = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  const fileToRead = path.join(dirname, "files", "fileToRead.txt");

  const readableStream = fs.createReadStream(fileToRead);
  readableStream.pipe(process.stdout);
};

await read();
