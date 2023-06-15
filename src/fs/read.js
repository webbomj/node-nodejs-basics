import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const read = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const fileToReadPath = path.join(dirname, "files", "fileToRead.txt");

  const newError = new Error("FS operation failed");

  try {
    const fileText = await fs.readFile(fileToReadPath);
    process.stdout.write(fileText);
  } catch (e) {
    throw newError;
  }
};

await read();
