import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";

const remove = async () => {
  const filename = url.fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const fileToRemovePath = path.join(dirname, "files", "fileToRemove.txt");

  const newError = new Error("FS operation failed");

  try {
    await fs.rm(fileToRemovePath);
  } catch (e) {
    throw newError;
  }
};

await remove();
